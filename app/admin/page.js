'use client';
import {useCallback,useEffect,useMemo,useState} from 'react';
import {PageShell} from '../components';
import {apiJson} from '../../lib/site';

const metricLabels={
  totalUsers:'Total users',
  activeUsers:'Active users',
  pendingUsers:'Pending verification',
  suspendedUsers:'Suspended',
  monthlyActiveUsers:'Monthly active',
  newUsers7d:'New users · 7d',
  newUsers30d:'New users · 30d',
  trialingSubscriptions:'Active trials',
  trialsExpiring7d:'Trials expiring · 7d',
  expiredTrials:'Expired trials',
  activeSubscriptions:'Paid active',
  pastDueSubscriptions:'Past due',
  canceledSubscriptions:'Canceled',
  paidConversionRate:'Paid conversion %'
};

export default function AdminPage(){
  const [metrics,setMetrics]=useState(null);
  const [users,setUsers]=useState([]);
  const [selected,setSelected]=useState(null);
  const [query,setQuery]=useState('');
  const [status,setStatus]=useState('');
  const [reason,setReason]=useState('');
  const [days,setDays]=useState('7');
  const [customExpiry,setCustomExpiry]=useState('');
  const [loading,setLoading]=useState(true);
  const [message,setMessage]=useState('');
  const [error,setError]=useState('');

  const loadMetrics=useCallback(async()=>{
    const data=await apiJson('/admin/metrics');
    setMetrics(data.metrics);
  },[]);

  const loadUsers=useCallback(async(q=query,s=status)=>{
    const p=new URLSearchParams();
    if(q.trim())p.set('q',q.trim());
    if(s)p.set('status',s);
    p.set('limit','100');
    const data=await apiJson('/admin/users?'+p.toString());
    setUsers(data.users||[]);
  },[query,status]);

  const refresh=useCallback(async()=>{
    setLoading(true); setError('');
    try{await Promise.all([loadMetrics(),loadUsers()])}
    catch(e){setError(e.message||'Unable to load admin console.')}
    finally{setLoading(false)}
  },[loadMetrics,loadUsers]);

  useEffect(()=>{void refresh()},[]);

  const selectedSummary=useMemo(()=>selected?users.find(u=>u.id===selected.id)||selected:null,[users,selected]);

  async function openUser(id){
    setError(''); setMessage('');
    try{
      const data=await apiJson('/admin/users/'+encodeURIComponent(id));
      setSelected(data.user);
    }catch(e){setError(e.message)}
  }

  async function act(path,init,success){
    setError(''); setMessage('');
    try{
      await apiJson(path,init);
      setMessage(success);
      await Promise.all([loadMetrics(),loadUsers()]);
      if(selected?.id){
        const data=await apiJson('/admin/users/'+encodeURIComponent(selected.id)).catch(()=>null);
        setSelected(data?.user||null);
      }
    }catch(e){setError(e.message||'Admin action failed.')}
  }

  function requireReason(){
    const r=reason.trim();
    if(r.length<3){setError('Enter an admin reason before changing the account.');return null}
    return r;
  }

  async function suspend(){
    const r=requireReason(); if(!r||!selected)return;
    await act('/admin/users/'+selected.id+'/suspend',{method:'POST',body:JSON.stringify({reason:r})},'Account suspended.');
  }
  async function unsuspend(){
    const r=requireReason(); if(!r||!selected)return;
    await act('/admin/users/'+selected.id+'/unsuspend',{method:'POST',body:JSON.stringify({reason:r})},'Account reactivated.');
  }
  async function trial(action){
    const r=requireReason(); if(!r||!selected)return;
    const body={action,reason:r};
    if(action==='extend')body.days=Number(days||7);
    if(action==='set')body.expiresAt=new Date(customExpiry).toISOString();
    await act('/admin/users/'+selected.id+'/trial',{method:'POST',body:JSON.stringify(body)},action==='end'?'Trial ended.':'Trial updated.');
  }
  async function deleteUser(){
    const r=requireReason(); if(!r||!selected)return;
    const typed=window.prompt('Permanent deletion removes the server account and RevenueCat customer. Type DELETE to continue.');
    if(typed!=='DELETE')return;
    await act('/admin/users/'+selected.id,{method:'DELETE',body:JSON.stringify({confirmation:'DELETE',reason:r})},'Account permanently deleted.');
    setSelected(null);
  }

  if(loading)return <PageShell><main className="adminPage"><div className="wrap"><p className="lead">Loading admin console…</p></div></main></PageShell>;

  return <PageShell><main className="adminPage"><div className="wrap">
    <div className="adminHeader">
      <div><div className="eyebrow">DISPUTE ADMIN</div><h1>Accounts, trials and analytics</h1><p className="lead">30-day verified-email trial. Account changes require a reason and are audit logged.</p></div>
      <button className="btn" onClick={()=>void refresh()}>Refresh</button>
    </div>

    {error?<div className="adminAlert errorBox">{error}</div>:null}
    {message?<div className="adminAlert okBox">{message}</div>:null}

    {metrics?<section>
      <div className="adminMetricGrid">
        {Object.entries(metricLabels).map(([k,label])=><article className="adminMetric" key={k}><span>{label}</span><b>{metrics[k]??'—'}</b></article>)}
        <article className="adminMetric"><span>Default trial</span><b>{metrics.defaultTrialDays} days</b></article>
      </div>
      {metrics.mrrByCurrency&&Object.keys(metrics.mrrByCurrency).length?<div className="adminSubline">MRR: {Object.entries(metrics.mrrByCurrency).map(([currency,cents])=>currency+' '+(cents/100).toFixed(2)).join(' · ')}</div>:null}
    </section>:null}

    <section className="adminPanel">
      <div className="adminPanelHead"><div><h2>Users</h2><p>Search by user ID, email, name or phone.</p></div></div>
      <form className="adminFilters" onSubmit={e=>{e.preventDefault();void loadUsers()}}>
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search users"/>
        <select value={status} onChange={e=>setStatus(e.target.value)}>
          <option value="">All statuses</option>
          <option value="ACTIVE">Active</option>
          <option value="PENDING_EMAIL_VERIFICATION">Pending verification</option>
          <option value="SUSPENDED">Suspended</option>
        </select>
        <button className="btn primary">Search</button>
      </form>

      <div className="adminTableWrap"><table className="adminTable">
        <thead><tr><th>User</th><th>Status</th><th>Joined</th><th>Last seen</th><th>Trial / subscription</th></tr></thead>
        <tbody>{users.map(u=><tr key={u.id} onClick={()=>void openUser(u.id)} className={selectedSummary?.id===u.id?'selected':''}>
          <td><b>{u.profile?.fullName||u.email}</b><small>{u.email}</small></td>
          <td><span className={'badge '+u.status.toLowerCase()}>{u.status.replaceAll('_',' ')}</span></td>
          <td>{fmt(u.createdAt)}</td>
          <td>{fmt(u.lastSeenAt)}</td>
          <td>{u.subscription?<><b>{u.subscription.status}</b><small>{u.subscription.trialEndsAt?'Trial ends '+fmt(u.subscription.trialEndsAt):u.subscription.currentPeriodEnd?'Period ends '+fmt(u.subscription.currentPeriodEnd):''}</small></>:'—'}</td>
        </tr>)}</tbody>
      </table></div>
    </section>

    {selected?<section className="adminPanel">
      <div className="adminPanelHead"><div><div className="eyebrow">Selected account</div><h2>{selected.profile?.fullName||selected.email}</h2><p>{selected.email} · {selected.id}</p></div><button className="btn" onClick={()=>setSelected(null)}>Close</button></div>
      <div className="adminDetailGrid">
        <div><span>Status</span><b>{selected.status}</b></div>
        <div><span>Verified</span><b>{fmt(selected.emailVerifiedAt)}</b></div>
        <div><span>Last seen</span><b>{fmt(selected.lastSeenAt)}</b></div>
        <div><span>Created</span><b>{fmt(selected.createdAt)}</b></div>
        <div><span>Subscription</span><b>{selected.subscription?.status||'NONE'}</b></div>
        <div><span>Trial ends</span><b>{fmt(selected.subscription?.trialEndsAt)}</b></div>
      </div>

      <label className="adminReason">Admin reason
        <textarea value={reason} onChange={e=>setReason(e.target.value)} placeholder="Required for every account change"/>
      </label>

      <div className="adminActionGroup">
        <h3>Account status</h3>
        <div className="actions">
          <button className="btn dangerSoft" onClick={()=>void suspend()}>Suspend account</button>
          <button className="btn" onClick={()=>void unsuspend()}>Unsuspend</button>
        </div>
      </div>

      <div className="adminActionGroup">
        <h3>Trial / free-use period</h3>
        <div className="actions">
          <button className="btn primary" onClick={()=>void trial('reset30')}>Reset to 30 days</button>
          <input className="smallInput" type="number" min="1" max="365" value={days} onChange={e=>setDays(e.target.value)}/>
          <button className="btn" onClick={()=>void trial('extend')}>Extend days</button>
          <input className="dateInput" type="datetime-local" value={customExpiry} onChange={e=>setCustomExpiry(e.target.value)}/>
          <button className="btn" disabled={!customExpiry} onClick={()=>void trial('set')}>Set expiry</button>
          <button className="btn dangerSoft" onClick={()=>void trial('end')}>End trial now</button>
        </div>
      </div>

      <div className="adminDanger">
        <h3>Danger zone</h3>
        <p>Permanent deletion removes the server account and asks RevenueCat to delete the matching customer. This cannot be undone.</p>
        <button className="btn danger" onClick={()=>void deleteUser()}>Permanently delete account</button>
      </div>
    </section>:null}
  </div></main></PageShell>
}

function fmt(value){
  if(!value)return '—';
  try{return new Intl.DateTimeFormat('en-SG',{dateStyle:'medium',timeStyle:'short'}).format(new Date(value))}catch{return String(value)}
}

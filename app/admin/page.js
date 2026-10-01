'use client';
import {useEffect,useState} from 'react';
import {useRouter} from 'next/navigation';
import {apiJson} from '../../lib/site';

export default function AdminPage(){
  const router=useRouter();
  const [email,setEmail]=useState('vagrantecommerce@gmail.com');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [busy,setBusy]=useState(false);
  const [signedIn,setSignedIn]=useState(false);
  const [metrics,setMetrics]=useState(null);

  useEffect(()=>{ void check(); },[]);

  async function check(){
    try{
      const d=await apiJson('/admin/metrics');
      setMetrics(d.metrics||null);
      setSignedIn(true);
    }catch{}
  }

  async function login(e){
    e.preventDefault();
    setBusy(true); setError('');
    try{
      await apiJson('/admin/login',{method:'POST',body:JSON.stringify({email,password})});
      const d=await apiJson('/admin/metrics');
      setMetrics(d.metrics||null);
      setSignedIn(true);
    }catch(err){
      setError(err?.message||'Unable to sign in.');
    }finally{setBusy(false)}
  }

  async function logout(){
    await apiJson('/auth/logout',{method:'POST'}).catch(()=>null);
    setSignedIn(false); setMetrics(null); setPassword('');
    router.refresh();
  }

  if(!signedIn){
    return <main className="auth adminAuthPage">
      <form className="authbox adminAuthBox" onSubmit={login}>
        <div className="eyebrow">DISPUTE ADMIN</div>
        <h1>Administrator sign in</h1>
        <p className="lead">Authorized administrator access only. Email verification codes are not required for admin sign-in.</p>
        <label>Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)}/></label>
        <label>Password<input required type="password" minLength="8" value={password} onChange={e=>setPassword(e.target.value)}/></label>
        {error&&<p className="error">{error}</p>}
        <button className="btn primary" disabled={busy}>{busy?'Signing in…':'Sign in as administrator'}</button>
        <a className="textlink" href="https://dispute-api-live.onrender.com/admin/login">Password / email recovery</a>
      </form>
    </main>
  }

  return <main className="adminPage">
    <div className="wrap">
      <div className="adminHeader">
        <div><div className="eyebrow">DISPUTE ADMIN</div><h1>Administrator console</h1><p className="lead">Signed in with authorized administrator access.</p></div>
        <button className="btn" onClick={logout}>Sign out</button>
      </div>
      {metrics&&<div className="adminMetricGrid">
        <div className="adminMetric"><span>Total users</span><b>{metrics.totalUsers??'—'}</b></div>
        <div className="adminMetric"><span>Active users</span><b>{metrics.activeUsers??'—'}</b></div>
        <div className="adminMetric"><span>Trialing</span><b>{metrics.trialingSubscriptions??'—'}</b></div>
        <div className="adminMetric"><span>Active subscriptions</span><b>{metrics.activeSubscriptions??'—'}</b></div>
      </div>}
      <div className="adminPanel">
        <h2>Full account management</h2>
        <p className="lead">User search, suspend/unsuspend, trial controls, deletion and audit log remain available on the protected backend console.</p>
        <a className="btn primary" href="https://dispute-api-live.onrender.com/admin">Open full admin console</a>
      </div>
    </div>
  </main>
}

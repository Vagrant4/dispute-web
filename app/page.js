import {Shell,PlayButton,MockPhone} from './components';
import {pageMeta} from '../lib/meta';
export const metadata=pageMeta('/','Work hours, photos and pay records for Android | DISPUTE','Track work time, pin location, capture evidence, reconcile pay assumptions and export reports.');

export default function Home(){return <Shell><main>
<section className="hero wrap">
  <div><div className="eyebrow">Worker-owned records before disagreements begin</div>
    <h1>Prove the work.<br/>Check the pay.<br/>Show the record.</h1>
    <p className="lead">Track your work hours on Android with DISPUTE. Keep your own record of hours, location, photos, notes and pay assumptions. When employer or payroll figures do not match, you have something concrete to review and discuss.</p>
    <div className="actions"><PlayButton/><a className="btn" href="/signup">Create account</a></div>
    <p className="fine">DISPUTE does not determine legal wage entitlement or certify payroll accuracy.</p>
  </div>
  <MockPhone title="Today">
    <div className="mockcard"><small>Project</small><b>Riverside Office Fit-Out</b></div>
    <div className="metricgrid"><div><small>Time in</small><strong>08:02</strong></div><div><small>Worked</small><strong>8h 34m</strong></div></div>
    <div className="mockcard"><small>Location</small><b>Windsor Nature Park, Singapore</b></div>
    <button className="appbtn">Time Out</button>
  </MockPhone>
</section>

<section className="pillars"><div className="wrap cols3">
  <article><span>01</span><h3>Prove the work</h3><p>Time, location, photos and notes stay connected to the project.</p></article>
  <article><span>02</span><h3>Check the pay</h3><p>Estimate from your own recorded hours and configured rate assumptions.</p></article>
  <article><span>03</span><h3>Show the record</h3><p>Export selected records to PDF or CSV.</p></article>
</div></section>

<section className="section"><div className="wrap split">
  <div><div className="eyebrow">1 · Track the shift</div><h2>Keep a daily record for each project.</h2><p className="lead">Choose the project, day type, location and Time In / Time Out. Keep the details together so you can review which days and hours belong to each job.</p></div>
  <MockPhone title="Time"><div className="mockcard"><small>Working on</small><b>Riverside Office Fit-Out</b></div><div className="mockcard"><small>Day type</small><b>Normal day</b></div><div className="mockcard"><small>Work location</small><b>Windsor Nature Park, Singapore</b></div><button className="appbtn">Time In</button></MockPhone>
</div></section>

<section className="section alt"><div className="wrap split reverse">
  <div className="realshot"><img src="/map-clean.jpg" alt="Cleaned DISPUTE Pin work location screen from the real Android app"/></div>
  <div><div className="eyebrow">2 · Pin work location</div><h2>Remember where the work happened.</h2><p className="lead">Use the in-app map, use current location or enter the work-site address manually, then confirm the location for the work record.</p><div className="callout"><b>Location with context</b><span>A work-site location helps you distinguish entries when your work takes you between different projects.</span></div></div>
</div></section>

<section className="section"><div className="wrap split">
  <div><div className="eyebrow">3 · Capture evidence</div><h2>Photo + category + note.</h2><p className="lead">Classify evidence as Doing work, Completed work, Defect or Others. Add a short note explaining what the photo records.</p></div>
  <MockPhone title="Photos"><div className="mockcard"><small>Project</small><b>Riverside Office Fit-Out</b></div><div className="tags"><span className="on">Doing work</span><span>Completed work</span><span>Defect</span><span>Others</span></div><div className="textarea">Installing cable tray on Level 3</div><button className="appbtn">Save photo</button></MockPhone>
</div></section>

<section className="section pay"><div className="wrap split reverse">
  <div className="salarydemo"><div className="eyebrow">How the calculation works</div><div className="calc"><span>Recorded work time</span><b>208.5 h</b></div><div className="calc"><span>Configured rate</span><b>Your settings</b></div><div className="calc"><span>Day type / multipliers</span><b>Applied from settings</b></div><div className="calc total"><span>Estimated amount</span><b>Compare with employer figure</b></div></div>
  <div><div className="eyebrow">4 · Check the pay</div><h2>Know what your own records add up to.</h2><p className="lead">DISPUTE keeps recorded time together with currency, rate basis, normal hours and configured overtime/off-day/holiday multipliers. Report calculations can use those records and settings to produce an estimated amount.</p><p>When the employer or payroll figure differs, review the dates, hours, breaks, day types and rate assumptions before confirming, discussing or negotiating the difference.</p><div className="warning"><b>Personal reconciliation estimate</b><span>Not a legal wage determination or payroll certification.</span></div></div>
</div></section>

<section className="section alt"><div className="wrap split">
  <div><div className="eyebrow">5 · Generate the record</div><h2>PDF or CSV when details matter.</h2><p className="lead">Choose the project, date range and record types, then export for your own review or sharing.</p></div>
  <MockPhone title="Reports"><div className="mockcard"><small>Project</small><b>Riverside Office Fit-Out</b></div><div className="metricgrid"><div><small>From</small><strong>01 Sep</strong></div><div><small>To</small><strong>30 Sep</strong></div></div><div className="mockcard">✓ Time records &nbsp; ✓ Photos</div><button className="appbtn">Export PDF</button><button className="appbtn dark">Export CSV</button></MockPhone>
</div></section>

<section className="section"><div className="wrap split reverse">
  <div className="backuponly"><h3>Backup tools</h3><p>Export a DISPUTE JSON backup from local work records and confirmed settings.</p><button className="appbtn">Export JSON Backup</button><button className="appbtn dark">Share Backup</button><small>Keep a durable backup before changing phone, clearing app data or uninstalling.</small></div>
  <div><div className="eyebrow">6 · Stay in control</div><h2>Keep a backup of your work records.</h2><p className="lead">Export your local records and confirmed settings as a JSON backup. Keep a separate copy before changing phones, clearing app data or uninstalling.</p></div>
</div></section>

<section className="section"><div className="wrap shared"><div><div className="eyebrow">Web + Android</div><h2>Create the account once.</h2><p className="lead">The website and Android app use the same DISPUTE account backend. Register and verify here, then use the same credentials on mobile.</p></div><div className="flow">WEB ACCOUNT<br/>↓<br/><b>DISPUTE USER ID</b><br/>↓<br/>SAME LOGIN<br/>↓<br/>ANDROID APP</div></div></section>
<section className="section"><div className="wrap"><h2>Work records for your market</h2><div className="grid"><article className="feature"><h3><a href="/us-independent-worker-records">Work records for US independent workers</a></h3><p>Keep project hours, site notes and photos together, then prepare a record to compare with your invoice or payment.</p></article><article className="feature"><h3><a href="/singapore-work-records">Work records for workers in Singapore</a></h3><p>Organize workdays across projects and sites, review your rate assumptions, and export a selected period.</p></article></div><div className="actions"><PlayButton/></div></div></section>
</main></Shell>}


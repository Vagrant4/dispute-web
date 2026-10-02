import {Shell,PlayButton} from '../components';
import {pageMeta} from '../../lib/meta';

export const metadata=pageMeta(
  '/singapore-work-records',
  'Work records and pay estimates for Singapore workers | DISPUTE',
  'Keep work hours, site location, photos, notes and rate assumptions together. Review and export your own work records with DISPUTE in Singapore.'
);

export default function SingaporeWorkRecords(){return <Shell><main className="wrap page">
  <div className="eyebrow">For workers in Singapore</div>
  <h1>Track work hours and site records in Singapore.</h1>
  <p className="lead">For freelancers and workers moving between projects or work sites, DISPUTE provides one place to keep your own hours, work location, photos, notes and pay assumptions. Review your records and export the period you need.</p>
  <div className="actions"><PlayButton/><a className="btn" href="/signup">Create account</a></div>

  <section className="section"><h2>A practical record for each workday</h2>
    <p>Set up a project, record the workday type and time, and add a location, photo or note when it helps explain the work. Your records can then be reviewed by project or date range.</p>
    <div className="grid">
      <article className="feature"><h3>Time and day type</h3><p>Record Time In and Time Out with the project and workday type you select.</p></article>
      <article className="feature"><h3>Work-site context</h3><p>Pin a location on the map or enter a site address manually, then keep photos and notes with the record.</p></article>
      <article className="feature"><h3>Reports and backup</h3><p>Export selected work records to PDF or CSV and create a JSON backup of your records and settings.</p></article>
    </div>
  </section>

  <section className="section alt"><h2>Compare your records with a pay figure</h2>
    <p>Use your recorded time and the pay or rate assumptions you configure to estimate what your own records add up to. You can compare that estimate with employer or payroll figures and review the dates, hours and settings behind any difference.</p>
    <div className="warning"><b>For personal review</b><span>The calculation is an estimate based on the information and settings you enter. DISPUTE is not a legal wage determination, payroll certification or legal advice service.</span></div>
  </section>

  <section className="section"><h2>Your records stay yours to review</h2>
    <p>DISPUTE helps organize details you choose to enter. It does not confirm whether a client, employer or payroll figure is correct. Keep your own backup and check your entries before sharing a report.</p>
    <h3>Build a useful record over time</h3>
    <p>Start with one project and make entries as work happens. When you need a summary, select the project and date range, review the records, then export the format that suits you.</p>
    <p>Learn <a href="/how-it-works">how DISPUTE works</a>, see all <a href="/features">features</a>, or read the <a href="/privacy">Privacy Policy</a>.</p>
  </section>
  <section className="section"><h2>Review a month of work across different sites</h2>
    <ol><li>Select the project and dates you need, rather than combining unrelated work.</li><li>Check the workday type, Time In, Time Out and site location for each entry.</li><li>Review the currency, rate and multiplier assumptions you configured before comparing an estimate with a pay figure.</li><li>Export the selected records as PDF or CSV, and keep a separate JSON backup of your records and settings.</li></ol>
    <h3>What should I record when my work site changes?</h3><p>Keep the correct project, time and work location with the entry. Add a photo or note when you need context about the work performed at that site.</p>
    <h3>Are the calculations official Singapore payroll figures?</h3><p>No. DISPUTE calculates personal estimates from your entries and settings. It does not certify payroll, determine statutory entitlements or replace a review of your employment terms.</p>
    <p>See <a href="/how-it-works">how to record a workday</a> and <a href="/pricing">current pricing</a> before getting started.</p>
    <div className="actions"><PlayButton/></div>
  </section>
</main></Shell>}


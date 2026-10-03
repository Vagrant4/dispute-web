import {Shell,PlayButton} from '../components';
import {pageMeta} from '../../lib/meta';

export const metadata=pageMeta(
  '/work-hours-pay-records-checklist',
  'How to record work hours and check pay records | DISPUTE',
  'A practical checklist for logging work hours, matching pay periods, checking rate assumptions and keeping clear project records before exporting a report.'
);

export default function WorkRecordsGuide(){return <Shell><main className="wrap legal">
  <article>
    <div className="eyebrow">Work records guide</div>
    <h1>How to record work hours and check your pay records</h1>
    <p className="lead">A useful work log lets you retrace a day without relying on memory. Start with the project, date, start and finish times, and enough context to explain the work. Then compare the same period in your log and your pay statement or invoice.</p>
    <p>This checklist works for personal shift records and freelance projects. DISPUTE can organize your own time entries, optional location, photos and notes, and export project-specific PDF or CSV reports.</p>
    <nav className="callout" aria-label="Guide contents"><b>In this guide</b><a className="textlink" href="#daily-checklist">1. Record the workday</a><a className="textlink" href="#review-period">2. Match the review period</a><a className="textlink" href="#check-differences">3. Check differences</a><a className="textlink" href="#export-records">4. Export and keep a backup</a></nav>

    <section id="daily-checklist">
      <h2>1. Use a short daily work-hours checklist</h2>
      <p>Make the entry close to the time the work happens. Check these details before moving on to the next day:</p>
      <ul>
        <li><strong>Project:</strong> Use a consistent name so jobs at different sites or for different clients stay separate.</li>
        <li><strong>Date and times:</strong> Record when work starts and finishes. For an overnight shift, note both dates so midnight does not make the record ambiguous.</li>
        <li><strong>Breaks and interruptions:</strong> Keep a note of their start and finish times. Do not assume every minute between arrival and departure is payable time.</li>
        <li><strong>Workday type:</strong> Check the category you select, such as a normal day, off-day or holiday. A selected category alone does not establish an entitlement.</li>
        <li><strong>Work performed:</strong> Add a brief factual note about the task or stage completed. Include a location or photo only when useful and permitted.</li>
        <li><strong>Corrections:</strong> If you enter a missing time later, note what you used to reconstruct it and identify anything you are unsure about.</li>
      </ul>
      <p>In DISPUTE, use the project and Time In / Time Out workflow or a manual work entry. Location is optional. Use notes for context that a time entry alone cannot explain; this checklist does not assume a separate break-tracking or payroll-approval feature. See <a className="textlink" href="/how-it-works">how DISPUTE works</a>.</p>
    </section>

    <section id="review-period">
      <h2>2. Match the dates before comparing totals</h2>
      <p>A payment date and the period it covers may be different. Read the start and end dates on the statement or invoice, then select the matching project and dates in your own records. Keep another job or an earlier unpaid invoice out of that comparison.</p>
      <ol>
        <li>Check for missing days, duplicate entries, overlapping sessions and an unfinished clock-out.</li>
        <li>Confirm how breaks and overnight work are represented in both sets of records.</li>
        <li>Check the currency, rate unit and rate assumptions you entered. Keep the relevant agreement or rate confirmation separately.</li>
        <li>Compare like with like: hours with hours, and equivalent pay components with each other. A bank deposit may represent a different amount from the gross figure on a statement.</li>
      </ol>
      <div className="callout"><b>Example: hours and minutes are not decimal hours</b><span>A record from 09:00 to 17:30 spans 8 hours 30 minutes before considering breaks. That is 8.5 decimal hours, not 8.30. If your comparison excludes a recorded 30-minute break, the remaining time is 8 hours. This is a time-format example, not a decision about which time must be paid.</span></div>
      <p>If your work is priced per task or at a fixed project fee, a time-based estimate alone will not reproduce that agreement. Review the scope, milestones and invoice separately rather than forcing them into an hourly comparison.</p>
    </section>

    <section id="check-differences">
      <h2>3. Make a clear list of anything that differs</h2>
      <p>A difference is a prompt to check the inputs. It is not proof that a client or employer has made an error. Work through one date or item at a time:</p>
      <ul>
        <li><strong>Missing time:</strong> Identify the date and session, and check whether it belongs to another pay period.</li>
        <li><strong>Different hours:</strong> Compare start times, finish times, breaks, overnight dates and any rounding shown in the source records.</li>
        <li><strong>Different rate:</strong> Check the unit, effective date, currency and configured normal or additional-rate assumptions.</li>
        <li><strong>Different total:</strong> Look for separately listed adjustments or components instead of comparing only the final number.</li>
      </ul>
      <p>Keep a short review note: “For [project] on [date], my record shows [time or item]. The statement for [period] shows [corresponding item]. I checked [source]. Could you help me understand the difference?” Share only the entries needed for that question.</p>
      <div className="warning"><b>Personal review, not a payroll determination</b><span>DISPUTE estimates depend on your entries and settings. The app does not establish what anyone legally owes, certify payroll or replace legal, accounting or regulatory advice. Keep original statements, agreements and payment records alongside your work log.</span></div>
    </section>

    <section id="export-records">
      <h2>4. Review the report and keep a separate backup</h2>
      <p>Before sharing, select the correct project and date range, then open the exported report and check the entries. DISPUTE supports PDF and CSV exports: PDF is useful for reading a report; CSV lets you inspect the records in a spreadsheet.</p>
      <p>Keep the original export if you make a separate edited spreadsheet. Give saved files a clear project and date-range name, and store them somewhere you can find again. Avoid including unrelated photos, another person's details or confidential site information.</p>
      <p>A report is not the same as a backup. Use DISPUTE's JSON backup workflow before changing devices and keep the backup safely. See the <a className="textlink" href="/features">reports and backup features</a> and <a className="textlink" href="/privacy">Privacy Policy</a>.</p>
    </section>

    <section>
      <h2>Start with your next workday</h2>
      <p>Choose one project, record your next start and finish times, and add a brief note. A small daily habit is easier to review than a month's worth of reconstructed details.</p>
      <p>For more context, read about <a className="textlink" href="/us-independent-worker-records">independent-worker records in the United States</a> or <a className="textlink" href="/singapore-work-records">work records in Singapore</a>.</p>
      <p>New DISPUTE accounts receive a 30-day free trial when the email address is verified. Check <a className="textlink" href="/pricing">current trial and subscription details</a>.</p>
      <div className="actions"><PlayButton/></div>
    </section>
  </article>
</main></Shell>}

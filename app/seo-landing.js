import {PlayButton} from './components';

export function SeoLanding({eyebrow,title,intro,sections,faqs,related=[]}){
  const faqSchema={
    '@context':'https://schema.org',
    '@type':'FAQPage',
    mainEntity:faqs.map(([q,a])=>({
      '@type':'Question',
      name:q,
      acceptedAnswer:{'@type':'Answer',text:a}
    }))
  };
  return <main className="wrap legal seoLanding">
    <article>
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p className="lead">{intro}</p>
      <div className="actions"><PlayButton/><a className="btn" href="/signup">Create account</a></div>
      {sections.map((section,i)=><section key={i}>
        <h2>{section.heading}</h2>
        {section.paragraphs?.map((p,j)=><p key={j}>{p}</p>)}
        {section.items&&<ul>{section.items.map((item,j)=><li key={j}>{item}</li>)}</ul>}
      </section>)}
      <section>
        <h2>Frequently asked questions</h2>
        {faqs.map(([q,a])=><div key={q} className="faqItem"><h3>{q}</h3><p>{a}</p></div>)}
      </section>
      {related.length>0&&<section>
        <h2>Related DISPUTE guides</h2>
        <ul>{related.map(([href,label])=><li key={href}><a className="textlink" href={href}>{label}</a></li>)}</ul>
      </section>}
      <section>
        <h2>Start your own work record</h2>
        <p>DISPUTE helps you keep your own work record before a disagreement starts. New verified accounts receive a 30-day free trial.</p>
        <div className="actions"><PlayButton/><a className="btn" href="/pricing">See pricing and trial details</a></div>
      </section>
    </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
  </main>
}

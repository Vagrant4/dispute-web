import Link from 'next/link';
import {PLAY_URL} from '../lib/site';
export function Header(){return <header className="nav"><div className="wrap navin">
  <Link className="brand" href="/"><span className="brandmark">D</span>DISPUTE</Link>
  <nav>
    <Link href="/how-it-works">How it works</Link>
    <Link href="/features">Features</Link>
    <Link href="/pricing">Pricing</Link>
    <Link href="/contact">Support</Link>
    <Link href="/login">Sign in</Link>
    <Link className="btn" href="/signup">Create account</Link>
  </nav>
</div></header>}
export function Footer(){return <footer><div className="wrap foot">
  <div><b>DISPUTE</b><p>Documentation and personal reconciliation software.</p></div>
  <div className="footlinks"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Support</Link><Link href="/us-independent-worker-records">United States</Link><Link href="/singapore-work-records">Singapore</Link><a href={PLAY_URL} target="_blank" rel="noreferrer">Google Play</a></div>
</div></footer>}
export function Shell({children}){return <><Header/>{children}<Footer/></>}
export function PlayButton(){return <a className="btn primary" href={PLAY_URL} target="_blank" rel="noreferrer">Get DISPUTE on Google Play</a>}
export function MockPhone({title,children}){return <div className="mockphone"><div className="mockbrand">DISPUTE</div><h3>{title}</h3>{children}</div>}

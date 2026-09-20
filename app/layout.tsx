import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'DISPUTE — Keep the proof of your work',description:'Track work time, capture photos, organize project records and export structured reports with DISPUTE.',openGraph:{title:'DISPUTE — Keep the proof of your work',description:'Work records before disagreements become disputes.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

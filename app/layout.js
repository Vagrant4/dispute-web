import './globals.css';
export const metadata={
  verification:{google:'S9by0B_vLG4QqKvjcWARCyRsUSLhWwisC-ksggX9NFk'},
  metadataBase:new URL('https://disputewho.com'),
  title:{default:'DISPUTE — Work records and pay reconciliation',template:'%s | DISPUTE'},
  description:'Keep your own record of work time, location, evidence and pay assumptions, then compare and export when details matter.',
  icons:{icon:'/icon.svg',apple:'/icon.svg'}
};
export default function RootLayout({children}){return <html lang="en"><body>{children}</body></html>}

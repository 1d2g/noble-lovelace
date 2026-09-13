import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dg.tools'),
  alternates: {
    canonical: '/',
  },
  title: 'dg.tools | Independent Software Foundry by Dustin Gray',
  description: 'Independent software tools and daily creative experiments built with obsessive craft. Home of VeloTime, daily designer challenges, and agency margin tools.',
  openGraph: {
    title: 'dg.tools | Software Foundry by Dustin Gray',
    description: 'Independent software tools and daily creative experiments built with obsessive craft. Home of VeloTime and daily designer challenges.',
    url: 'https://dg.tools',
    siteName: 'dg.tools',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-9905023034596970';

  return (
    <html lang="en">
      <head>
        {adsenseClient && (
          <>
            <meta name="google-adsense-account" content={adsenseClient} />
            <Script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="page-container">{children}</main>
      </body>
    </html>
  );
}

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Defensive shield against corrupted OS/browser locale packs
              try {
                if (typeof Number !== 'undefined' && Number.prototype.toLocaleString) {
                  var origNumLocale = Number.prototype.toLocaleString;
                  Number.prototype.toLocaleString = function(locales, options) {
                    try {
                      return origNumLocale.call(this, locales || 'en-US', options);
                    } catch (err) {
                      var parts = String(this).split('.');
                      parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
                      return parts.join('.');
                    }
                  };
                }
                if (typeof Date !== 'undefined') {
                  if (Date.prototype.toLocaleDateString) {
                    var origDateLocale = Date.prototype.toLocaleDateString;
                    Date.prototype.toLocaleDateString = function(locales, options) {
                      try {
                        return origDateLocale.call(this, locales || 'en-US', options);
                      } catch (err) {
                        return this.toDateString ? this.toDateString() : '';
                      }
                    };
                  }
                  if (Date.prototype.toLocaleTimeString) {
                    var origTimeLocale = Date.prototype.toLocaleTimeString;
                    Date.prototype.toLocaleTimeString = function(locales, options) {
                      try {
                        return origTimeLocale.call(this, locales || 'en-US', options);
                      } catch (err) {
                        return this.toTimeString ? this.toTimeString().split(' ')[0] : '';
                      }
                    };
                  }
                }
                if (typeof Intl !== 'undefined') {
                  if (Intl.NumberFormat) {
                    var OrigNumberFormat = Intl.NumberFormat;
                    Intl.NumberFormat = function(locales, options) {
                      try {
                        return new OrigNumberFormat(locales || 'en-US', options);
                      } catch (err) {
                        return {
                          format: function(n) {
                            var isCurrency = options && options.style === 'currency';
                            var parts = String(Math.round(Number(n) || 0)).split('.');
                            parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
                            return (isCurrency ? '$' : '') + parts.join('.');
                          }
                        };
                      }
                    };
                    Intl.NumberFormat.prototype = OrigNumberFormat.prototype;
                  }
                  if (Intl.DateTimeFormat) {
                    var OrigDateTimeFormat = Intl.DateTimeFormat;
                    Intl.DateTimeFormat = function(locales, options) {
                      try {
                        return new OrigDateTimeFormat(locales || 'en-US', options);
                      } catch (err) {
                        return {
                          format: function(d) {
                            return d instanceof Date ? d.toDateString() : String(d);
                          }
                        };
                      }
                    };
                    Intl.DateTimeFormat.prototype = OrigDateTimeFormat.prototype;
                  }
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="page-container">{children}</main>
      </body>
    </html>
  );
}

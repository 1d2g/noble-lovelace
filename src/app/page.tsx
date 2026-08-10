import styles from './page.module.css';
import Script from 'next/script'; // 1. Import Next.js Script
import {
  VeloTimeDemoWidget,
  BusinessInquiryWidget,
  CostComparisonWidget
} from './components/BentoWidgets';

export default function Home() {
  return (
    <> {/* 2. Wrap everything in a Fragment */}
      <Script id="redirect-ssl" strategy="beforeInteractive">
        {`
          if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
            window.location.replace('https://' + window.location.host + window.location.pathname + window.location.search + window.location.hash);
          }
        `}
      </Script>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Simple, Reliable Time Tracking for Small Teams</h1>
          <p className={styles.subtitle}>
            VeloTime helps small businesses track project hours, log employee time, and generate accurate invoices without the complexity or high per-seat fees of other platforms.
          </p>
        </header>

        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', paddingBottom: '6rem' }}>
          <div className={styles.bentoGrid}>
            <div className={styles.flagshipCard}>
              {/* Flagship interactive app demo */}
              <VeloTimeDemoWidget />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <CostComparisonWidget />
              <BusinessInquiryWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

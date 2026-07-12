import styles from './page.module.css';
import {
  TimeMatrixDemoWidget,
  BusinessInquiryWidget
} from './components/BentoWidgets';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Simple, Reliable Time Tracking for Small Teams</h1>
        <p className={styles.subtitle}>
          timematrix helps small businesses track project hours, log employee time, and generate accurate invoices without the complexity or high per-seat fees of other platforms.
        </p>
      </header>

      <div className={styles.bentoGrid}>
        {/* Flagship interactive app demo */}
        <TimeMatrixDemoWidget />

        {/* Business inquiries card */}
        <BusinessInquiryWidget />

        {/* Value Prop A */}
        <div className={styles.bentoCard}>
          <div>
            <h3 className={styles.cardTitle}>Offline-First Reliability</h3>
            <p className={styles.cardDesc}>
              No internet? No problem. Your team can continue tracking time even when offline. Data is securely saved locally and auto-syncs to the cloud once restored.
            </p>
          </div>
          <div className={styles.cardFeatureList}>
            <div className={styles.featureItem}>✓ Auto-recovery sync</div>
            <div className={styles.featureItem}>✓ Zero data loss guarantee</div>
            <div className={styles.featureItem}>✓ Works in remote areas</div>
          </div>
        </div>

        {/* Value Prop B */}
        <div className={styles.bentoCard}>
          <div>
            <h3 className={styles.cardTitle}>Flat-Rate Flat Pricing</h3>
            <p className={styles.cardDesc}>
              Most time tracking tools charge per user, which punishes your growth. timematrix offers a single, flat fee for small teams. No per-seat tax, no hidden surprises.
            </p>
          </div>
          <div className={styles.pricingSection}>
            <div className={styles.priceTag}>$9<span className={styles.pricePeriod}>/month</span></div>
            <span className={styles.priceBadge}>FLAT RATE FOR UP TO 10 USERS</span>
          </div>
        </div>

        {/* Value Prop C */}
        <div className={styles.bentoCard}>
          <div>
            <h3 className={styles.cardTitle}>One-Click Reports</h3>
            <p className={styles.cardDesc}>
              Generate client summaries, payroll summaries, or invoice reports instantly. Easily export your logs to CSV, Excel, or PDF to hook directly into your bookkeeping software.
            </p>
          </div>
          <div className={styles.cardFeatureList}>
            <div className={styles.featureItem}>✓ CSV/Excel exports</div>
            <div className={styles.featureItem}>✓ QuickBooks/Xero ready</div>
            <div className={styles.featureItem}>✓ Client billing summaries</div>
          </div>
        </div>
      </div>
    </div>
  );
}

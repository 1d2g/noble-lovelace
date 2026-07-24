import styles from './page.module.css';
import {
  VeloTimeDemoWidget,
  BusinessInquiryWidget,
  CostComparisonWidget
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

      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', paddingBottom: '6rem' }}>
        {/* Flagship interactive app demo */}
        <VeloTimeDemoWidget />
      </div>
    </div>
  );
}

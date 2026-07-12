import styles from './page.module.css';
import {
  TimeMatrixPreview,
  TimezoneWidget,
  SystemStatus,
  QuickTools,
  FeedbackCard,
} from './components/BentoWidgets';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to dg.tools</h1>
        <p className={styles.subtitle}>Modular collection of custom tools and developer products.</p>
      </header>

      <div className={styles.bentoGrid}>
        <TimeMatrixPreview />
        <TimezoneWidget />
        <SystemStatus />
        <QuickTools />
        <FeedbackCard />
      </div>
    </div>
  );
}

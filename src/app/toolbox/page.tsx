import styles from './toolbox.module.css';

export default function Toolbox() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Toolbox</h1>
        <p className={styles.subtitle}>A collection of custom web-based tools and products.</p>
      </header>

      <div className={styles.productGrid}>
        <a href="#" className="card">
          <div className={styles.productIcon}>
            <span>TM</span>
          </div>
          <h2 className="card-title">timematrix</h2>
          <p className="card-desc">Advanced time tracking and visualization matrix.</p>
        </a>

        <a href="#" className="card">
          <div className={styles.productIcon}>
            <span>+</span>
          </div>
          <h2 className="card-title">More coming soon</h2>
          <p className="card-desc">Future tools will be added here as they are developed.</p>
        </a>
      </div>
    </div>
  );
}

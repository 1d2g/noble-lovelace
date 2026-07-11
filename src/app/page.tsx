import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to dgtools</h1>
        <p className={styles.subtitle}>Modular collection for the things that I build.</p>
      </header>

      <div className={styles.grid}>
        <Link href="/stream" className="card">
          <h2 className="card-title">Stream &rarr;</h2>
          <p className="card-desc">Access streaming embeds, OBS browser sources, and Twitch/YouTube links.</p>
        </Link>

        <Link href="/toolbox" className="card">
          <h2 className="card-title">Toolbox &rarr;</h2>
          <p className="card-desc">Discover various web-based tools and products like timematrix.</p>
        </Link>
      </div>
    </div>
  );
}

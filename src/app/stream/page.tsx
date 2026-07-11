import styles from './stream.module.css';

export default function Stream() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Stream</h1>
        <p className={styles.subtitle}>Watch live and interact with the stream embeds.</p>
        
        <div className={styles.links}>
          <a href="#" className={styles.platformLink} data-platform="twitch">Twitch</a>
          <a href="#" className={styles.platformLink} data-platform="youtube">YouTube</a>
        </div>
      </header>

      <div className={styles.embedGrid}>
        <div className="card">
          <h3 className="card-title">Polymarket Embed</h3>
          <div className={styles.placeholderBox}>
            <p className={styles.placeholderText}>Embed content goes here</p>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">OBS Browser Source</h3>
          <div className={styles.placeholderBox}>
            <p className={styles.placeholderText}>Embed content goes here</p>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">Chat / Activity</h3>
          <div className={styles.placeholderBox}>
            <p className={styles.placeholderText}>Embed content goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

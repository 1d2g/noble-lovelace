'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

// 1. Flagship: timematrix Preview Widget
export function TimeMatrixPreview() {
  const GRID_SIZE = 12 * 8; // 96 cells
  const defaultActive = [
    14, 15, 16, 26, 28, 38, 40, 50, 51, 52, // TM letters mock
    62, 64, 74, 76, 86, 88
  ];
  
  const [activeCells, setActiveCells] = useState<number[]>(defaultActive);
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);

  const toggleCell = (index: number) => {
    if (activeCells.includes(index)) {
      setActiveCells(activeCells.filter(c => c !== index));
    } else {
      setActiveCells([...activeCells, index]);
    }
  };

  const clearGrid = () => setActiveCells([]);
  const resetGrid = () => setActiveCells(defaultActive);

  return (
    <div className={`${styles.bentoCard} ${styles.flagshipCard}`}>
      <div className={styles.flagshipHeader}>
        <div>
          <span className={styles.badge}>FLAGSHIP PRODUCT</span>
          <h2 className={styles.cardTitle}>timematrix</h2>
          <p className={styles.cardDesc}>
            Advanced time tracking and productivity planning matrix. Segment your days, weeks, and goals in dynamic grid structures.
          </p>
        </div>
        <Link href="/toolbox" className={styles.primaryCTA}>
          Launch App &rarr;
        </Link>
      </div>

      <div className={styles.matrixContainer}>
        <div className={styles.matrixToolbar}>
          <span>Interactive Grid Sandbox</span>
          <div className={styles.toolbarButtons}>
            <button onClick={resetGrid} className={styles.miniBtn}>Reset</button>
            <button onClick={clearGrid} className={styles.miniBtn}>Clear</button>
          </div>
        </div>
        <div className={styles.matrixGrid}>
          {Array.from({ length: GRID_SIZE }).map((_, i) => {
            const isActive = activeCells.includes(i);
            return (
              <div
                key={i}
                className={`${styles.matrixCell} ${isActive ? styles.cellActive : ''}`}
                onMouseEnter={() => setHoveredCell(i)}
                onMouseLeave={() => setHoveredCell(null)}
                onClick={() => toggleCell(i)}
                style={{
                  backgroundColor: isActive 
                    ? 'rgba(62, 166, 255, 0.85)' 
                    : hoveredCell === i 
                      ? 'rgba(255, 255, 255, 0.15)' 
                      : 'rgba(255, 255, 255, 0.03)',
                  boxShadow: isActive ? '0 0 10px rgba(62, 166, 255, 0.5)' : 'none'
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// 2. Timezone Converter Widget
export function TimezoneWidget() {
  const [time, setTime] = useState<Date | null>(null);
  const [selectedZone, setSelectedZone] = useState('America/New_York');

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (tz: string) => {
    if (!time) return '--:--:--';
    return time.toLocaleTimeString('en-US', {
      timeZone: tz,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (tz: string) => {
    if (!time) return '--- --, ----';
    return time.toLocaleDateString('en-US', {
      timeZone: tz,
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className={styles.bentoCard}>
      <div>
        <h3 className={styles.cardTitle}>Global Clock</h3>
        <p className={styles.cardDesc}>Quick reference for server and developer timezones.</p>
      </div>

      <div className={styles.clockGrid}>
        <div className={styles.clockRow}>
          <span className={styles.clockLabel}>Local Time</span>
          <div className={styles.clockValContainer}>
            <span className={styles.clockTime}>{time ? time.toLocaleTimeString('en-US', { hour12: false }) : '--:--:--'}</span>
            <span className={styles.clockDate}>{time ? time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '--- --'}</span>
          </div>
        </div>

        <div className={styles.clockRow}>
          <span className={styles.clockLabel}>UTC / GMT</span>
          <div className={styles.clockValContainer}>
            <span className={styles.clockTime}>{formatTime('UTC')}</span>
            <span className={styles.clockDate}>{formatDate('UTC')}</span>
          </div>
        </div>

        <div className={styles.clockRow}>
          <select 
            value={selectedZone} 
            onChange={(e) => setSelectedZone(e.target.value)}
            className={styles.tzSelect}
          >
            <option value="America/New_York">New York (EST)</option>
            <option value="America/Los_Angeles">Los Angeles (PST)</option>
            <option value="Europe/London">London (BST)</option>
            <option value="Asia/Tokyo">Tokyo (JST)</option>
            <option value="Europe/Paris">Paris (CEST)</option>
          </select>
          <div className={styles.clockValContainer}>
            <span className={styles.clockTime}>{formatTime(selectedZone)}</span>
            <span className={styles.clockDate}>{formatDate(selectedZone)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. System Status Widget
export function SystemStatus() {
  const [cpu, setCpu] = useState(14);
  const [memory, setMemory] = useState(42);
  const [latency, setLatency] = useState(28);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(prev => Math.min(99, Math.max(5, prev + Math.floor(Math.random() * 5) - 2)));
      setMemory(prev => Math.min(99, Math.max(35, prev + Math.floor(Math.random() * 3) - 1)));
      setLatency(prev => Math.min(150, Math.max(10, prev + Math.floor(Math.random() * 7) - 3)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.bentoCard}>
      <div className={styles.statusHeader}>
        <div>
          <h3 className={styles.cardTitle}>Infrastructure</h3>
          <p className={styles.cardDesc}>Real-time metrics for dg.tools apps.</p>
        </div>
        <div className={styles.operationalStatus}>
          <span className={styles.pulseDot}></span>
          <span className={styles.statusText}>ACTIVE</span>
        </div>
      </div>

      <div className={styles.metricsList}>
        <div className={styles.metricItem}>
          <div className={styles.metricLabelRow}>
            <span>Core Latency</span>
            <span className={styles.metricVal}>{latency}ms</span>
          </div>
          <div className={styles.progressBarBg}>
            <div className={styles.progressBarFill} style={{ width: `${Math.min(100, (latency / 150) * 100)}%`, backgroundColor: '#10b981' }}></div>
          </div>
        </div>

        <div className={styles.metricItem}>
          <div className={styles.metricLabelRow}>
            <span>CPU Capacity</span>
            <span className={styles.metricVal}>{cpu}%</span>
          </div>
          <div className={styles.progressBarBg}>
            <div className={styles.progressBarFill} style={{ width: `${cpu}%`, backgroundColor: cpu > 80 ? '#ef4444' : '#3ea6ff' }}></div>
          </div>
        </div>

        <div className={styles.metricItem}>
          <div className={styles.metricLabelRow}>
            <span>Memory Allocated</span>
            <span className={styles.metricVal}>{memory}%</span>
          </div>
          <div className={styles.progressBarBg}>
            <div className={styles.progressBarFill} style={{ width: `${memory}%`, backgroundColor: '#a855f7' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. Developer Utilities Widget (Unix Timestamp Converter)
export function QuickTools() {
  const [currentEpoch, setCurrentEpoch] = useState<number>(0);
  const [inputEpoch, setInputEpoch] = useState('');
  const [conversionResult, setConversionResult] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentEpoch(Math.floor(Date.now() / 1000));
    const interval = setInterval(() => {
      setCurrentEpoch(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleConvert = (val: string) => {
    setInputEpoch(val);
    if (!val) {
      setConversionResult('');
      return;
    }
    const num = parseInt(val, 10);
    if (isNaN(num)) {
      setConversionResult('Invalid number');
      return;
    }
    try {
      const date = new Date(num * 1000);
      setConversionResult(date.toUTCString());
    } catch {
      setConversionResult('Conversion Error');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentEpoch.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={styles.bentoCard}>
      <div>
        <h3 className={styles.cardTitle}>Dev Utilities</h3>
        <p className={styles.cardDesc}>Instant utilities for everyday developer workflows.</p>
      </div>

      <div className={styles.devToolsBody}>
        <div className={styles.epochBox}>
          <div className={styles.epochLabel}>Current Epoch (Seconds)</div>
          <div className={styles.epochValueRow}>
            <code className={styles.code}>{currentEpoch}</code>
            <button onClick={copyToClipboard} className={styles.copyBtn}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <div className={styles.epochConverter}>
          <input
            type="text"
            placeholder="Enter Epoch (e.g. 1719283921)"
            value={inputEpoch}
            onChange={(e) => handleConvert(e.target.value)}
            className={styles.textInput}
          />
          {conversionResult && (
            <div className={styles.conversionOutput}>
              <code>{conversionResult}</code>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 5. Suggestions & Ideas Form Card
export function FeedbackCard() {
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea) return;
    setStatus('submitting');
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setIdea('');
    }, 1200);
  };

  const resetForm = () => setStatus('idle');

  return (
    <div className={`${styles.bentoCard} ${styles.spanTwoColumns}`}>
      <div>
        <h3 className={styles.cardTitle}>Submit a Product Idea</h3>
        <p className={styles.cardDesc}>Have a workflow problem that needs a utility tool? Submit a concept or vote on ideas.</p>
      </div>

      {status === 'success' ? (
        <div className={styles.successWrapper}>
          <div className={styles.successCheck}>✓</div>
          <div className={styles.successMessage}>
            <h4>Proposal Received!</h4>
            <p>Thanks for sharing! I review all incoming concepts weekly. You'll be notified if this gets prioritized.</p>
          </div>
          <button onClick={resetForm} className={styles.miniBtn}>Submit another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.feedbackForm}>
          <div className={styles.formRow}>
            <input
              type="email"
              placeholder="Your email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.textInput}
              disabled={status === 'submitting'}
            />
            <input
              type="text"
              placeholder="What tool should I build next? (e.g. JSON Diff Tool)"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className={styles.textInput}
              required
              disabled={status === 'submitting'}
            />
            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={status === 'submitting' || !idea}
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit Idea'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

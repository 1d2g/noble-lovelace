'use client';

import React, { useState, useEffect } from 'react';
import styles from '../page.module.css';

interface Task {
  id: number;
  name: string;
  timeLogged: number; // in seconds
}

interface LogEntry {
  id: number;
  taskName: string;
  duration: number; // in seconds
  timestamp: string;
}

// 1. Flagship: timematrix Interactive Demo Widget
export function TimeMatrixDemoWidget() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: 'UI/UX Design Mockups', timeLogged: 9000 },     // 2.5h
    { id: 2, name: 'Frontend Code Implementation', timeLogged: 15300 }, // 4.25h
    { id: 3, name: 'Client Revisions & Consult', timeLogged: 3600 }   // 1.0h
  ]);

  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [newTaskName, setNewTaskName] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: 101, taskName: 'Frontend Code Implementation', duration: 3600, timestamp: '10:45 AM' },
    { id: 102, taskName: 'UI/UX Design Mockups', duration: 5400, timestamp: 'Yesterday' }
  ]);
  const [showInvoice, setShowInvoice] = useState(false);
  const [hourlyRate, setHourlyRate] = useState(45); // Default $45/hr for small business invoice mock

  // Ticking timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (activeTaskId !== null) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    } else {
      setTimerSeconds(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeTaskId]);

  const formatSeconds = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(':');
  };

  const formatLoggedTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const startTask = (id: number) => {
    if (activeTaskId !== null) {
      stopActiveTask();
    }
    setActiveTaskId(id);
    setTimerSeconds(0);
  };

  const stopActiveTask = () => {
    if (activeTaskId === null) return;

    const currentActiveSeconds = timerSeconds;
    const taskToUpdate = tasks.find(t => t.id === activeTaskId);

    setTasks(prevTasks =>
      prevTasks.map(t =>
        t.id === activeTaskId
          ? { ...t, timeLogged: t.timeLogged + currentActiveSeconds }
          : t
      )
    );

    if (taskToUpdate) {
      const logEntry: LogEntry = {
        id: Date.now(),
        taskName: taskToUpdate.name,
        duration: currentActiveSeconds,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      };
      setLogs(prevLogs => [logEntry, ...prevLogs]);
    }

    setActiveTaskId(null);
    setTimerSeconds(0);
  };

  const handleToggleTimer = (id: number) => {
    if (activeTaskId === id) {
      stopActiveTask();
    } else {
      startTask(id);
    }
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskName.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      name: newTaskName.trim(),
      timeLogged: 0
    };
    setTasks([...tasks, newTask]);
    setNewTaskName('');
  };

  const activeTaskObj = tasks.find(t => t.id === activeTaskId);

  // Compute invoice totals
  const totalHours = tasks.reduce((sum, t) => sum + (t.timeLogged / 3600), 0);
  const totalBillable = totalHours * hourlyRate;

  return (
    <div className={`${styles.bentoCard} ${styles.flagshipCard}`}>
      <div className={styles.flagshipHeader}>
        <div>
          <span className={styles.badge}>INTERACTIVE APP DEMO</span>
          <h2 className={styles.cardTitle}>timematrix App Sandbox</h2>
          <p className={styles.cardDesc}>
            Try it out! Select a task to start tracking your time, or add a custom task. Click "Generate Invoice Summary" to see how it automatically prepares billing sheets.
          </p>
        </div>
      </div>

      <div className={styles.demoLayoutGrid}>
        {/* Left Side: Stopwatch / Active Timer */}
        <div className={styles.timerControlPanel}>
          <div className={styles.timerDisplayCard}>
            <div className={styles.timerHeaderRow}>
              <span className={styles.timerProjectLabel}>Active Project: <strong>Acme Corp Web Redesign</strong></span>
              {activeTaskId !== null && (
                <div className={styles.recordingIndicator}>
                  <span className={styles.redPulseDot}></span>
                  <span className={styles.recordingText}>TRACKING</span>
                </div>
              )}
            </div>

            <div className={styles.timeValueDisplay}>
              {activeTaskId !== null ? formatSeconds(timerSeconds) : '00:00:00'}
            </div>

            <div className={styles.activeTaskNameDisplay}>
              {activeTaskId !== null ? (
                <>Tracking: <strong>{activeTaskObj?.name}</strong></>
              ) : (
                <span className={styles.mutedText}>Select a task below to start tracking</span>
              )}
            </div>

            {activeTaskId !== null && (
              <button onClick={stopActiveTask} className={styles.stopButton}>
                Stop Tracking
              </button>
            )}
          </div>

          {/* Quick Invoice Section */}
          <div className={styles.invoiceToggleContainer}>
            <button 
              onClick={() => setShowInvoice(!showInvoice)} 
              className={styles.invoiceBtn}
            >
              {showInvoice ? 'Hide Invoice Preview' : 'Generate Invoice Summary'}
            </button>
          </div>
        </div>

        {/* Right Side: Task Board */}
        <div className={styles.taskBoardContainer}>
          <div className={styles.taskBoardHeader}>
            <span>Project Tasks</span>
            <span>Hours Logged</span>
          </div>

          <div className={styles.taskList}>
            {tasks.map(t => {
              const isThisActive = activeTaskId === t.id;
              return (
                <div 
                  key={t.id} 
                  className={`${styles.taskRow} ${isThisActive ? styles.activeTaskRow : ''}`}
                >
                  <div className={styles.taskNameGroup}>
                    <button 
                      onClick={() => handleToggleTimer(t.id)} 
                      className={`${styles.playPauseBtn} ${isThisActive ? styles.activePlayBtn : ''}`}
                      title={isThisActive ? 'Stop' : 'Start'}
                    >
                      {isThisActive ? '■' : '▶'}
                    </button>
                    <span className={styles.taskName}>{t.name}</span>
                  </div>
                  <span className={styles.taskDuration}>
                    {isThisActive 
                      ? formatLoggedTime(t.timeLogged + timerSeconds) 
                      : formatLoggedTime(t.timeLogged)
                    }
                  </span>
                </div>
              );
            })}
          </div>

          {/* Add Task Form */}
          <form onSubmit={handleAddTask} className={styles.addTaskForm}>
            <input
              type="text"
              placeholder="Create a new task..."
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              className={styles.addTaskInput}
            />
            <button type="submit" className={styles.addTaskBtn}>+ Add</button>
          </form>
        </div>
      </div>

      {/* Invoice Modal Overlay/Details (Shown when toggled) */}
      {showInvoice && (
        <div className={styles.invoiceSheet}>
          <div className={styles.invoiceSheetHeader}>
            <h4>Mock Invoice Summary</h4>
            <div className={styles.rateControl}>
              <label>Rate ($/hr):</label>
              <input 
                type="number" 
                value={hourlyRate} 
                onChange={(e) => setHourlyRate(Math.max(0, parseInt(e.target.value, 10) || 0))}
                className={styles.rateInput}
              />
            </div>
          </div>
          
          <div className={styles.invoiceBody}>
            <table className={styles.invoiceTable}>
              <thead>
                <tr>
                  <th>Task Description</th>
                  <th style={{ textAlign: 'right' }}>Hours</th>
                  <th style={{ textAlign: 'right' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(t => {
                  const hours = t.timeLogged / 3600;
                  return (
                    <tr key={t.id}>
                      <td>{t.name}</td>
                      <td style={{ textAlign: 'right' }}>{hours.toFixed(2)} hrs</td>
                      <td style={{ textAlign: 'right' }}>${(hours * hourlyRate).toFixed(2)}</td>
                    </tr>
                  );
                })}
                <tr className={styles.invoiceTotalRow}>
                  <td><strong>Total Billable Amount</strong></td>
                  <td style={{ textAlign: 'right' }}><strong>{totalHours.toFixed(2)} hrs</strong></td>
                  <td style={{ textAlign: 'right' }}><strong>${totalBillable.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>
            <div className={styles.invoiceFooter}>
              <span>Ready for Export to Quickbooks, Freshbooks, or CSV.</span>
            </div>
          </div>
        </div>
      )}

      {/* Session Logs Panel */}
      {logs.length > 0 && (
        <div className={styles.logsSection}>
          <span className={styles.logsTitle}>Recent Session Log</span>
          <div className={styles.logsContainer}>
            {logs.slice(0, 3).map(log => (
              <div key={log.id} className={styles.logRow}>
                <span className={styles.logText}>
                  Logged <strong>{formatLoggedTime(log.duration)}</strong> on <em>{log.taskName}</em>
                </span>
                <span className={styles.logTime}>{log.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// 2. Business Inquiry & Consultation Form Widget
export function BusinessInquiryWidget() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    teamSize: '1-5',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      teamSize: '1-5',
      message: ''
    });
    setStatus('idle');
  };

  return (
    <div className={styles.bentoCard}>
      <div>
        <h3 className={styles.cardTitle}>Questions / Inquiry</h3>
        <p className={styles.cardDesc}>Interested in timematrix for your team? Send a message and let's talk about your requirements.</p>
      </div>

      {status === 'success' ? (
        <div className={styles.successWrapper}>
          <div className={styles.successCheck}>✓</div>
          <div className={styles.successMessage}>
            <h4>Inquiry Received!</h4>
            <p>Thank you for reaching out. We will get back to you within one business day to discuss how timematrix can fit your team.</p>
          </div>
          <button onClick={resetForm} className={styles.miniBtn}>Send another message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.feedbackForm}>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={styles.textInput}
              disabled={status === 'submitting'}
            />
            <input
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={styles.textInput}
              disabled={status === 'submitting'}
            />
            <input
              type="email"
              placeholder="Work Email (required)"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={styles.textInput}
              required
              disabled={status === 'submitting'}
            />
            <div className={styles.selectGroup}>
              <label className={styles.selectLabel}>Team Size:</label>
              <select
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className={styles.tzSelect}
                disabled={status === 'submitting'}
              >
                <option value="1-5">1 - 5 employees</option>
                <option value="6-15">6 - 15 employees</option>
                <option value="16-50">16 - 50 employees</option>
                <option value="50+">50+ employees</option>
              </select>
            </div>
            <textarea
              placeholder="How can we help your business track time? (required)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={styles.textareaInput}
              required
              disabled={status === 'submitting'}
              rows={3}
            />
            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={status === 'submitting' || !formData.email || !formData.message}
            >
              {status === 'submitting' ? 'Sending Inquiry...' : 'Submit Inquiry'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

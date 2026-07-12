'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from '../page.module.css';

interface Task {
  id: string;
  name: string;
}

// 1. High-Fidelity timematrix App Demo Widget
export function TimeMatrixDemoWidget() {
  const [activeAppTab, setActiveAppTab] = useState('Timesheets');
  const [timeframe, setTimeframe] = useState('week'); // 'day', 'week', 'month'
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');

  const isFirstRender = useRef(true);

  // 3 Default Tasks
  const [tasks, setTasks] = useState<Task[]>([
    { id: 't1', name: 'Schematic Design' },
    { id: 't2', name: 'Site Visit & Inspection' },
    { id: 't3', name: 'Drafting & Mockups' }
  ]);

  // Initial logged hours (taskIndex_dayIndex)
  const [entries, setEntries] = useState<Record<string, string>>({
    't1_0': '3.0', 't1_1': '4.0', 't1_2': '0',   't1_3': '0',   't1_4': '0',
    't2_0': '0',   't2_1': '0',   't2_2': '8.0', 't2_3': '0',   't2_4': '0',
    't3_0': '0',   't3_1': '0',   't3_2': '0',   't3_3': '4.5', 't3_4': '8.0',
  });

  // Watch entries for changes to trigger the "Saving to Cloud..." status check
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setIsSaving(true);
    const delay = setTimeout(() => {
      setIsSaving(false);
    }, 850);
    return () => clearTimeout(delay);
  }, [entries]);

  const handleKeyDown = (taskId: string, dayIdx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    let nextTaskId = taskId;
    let nextDayIdx = dayIdx;

    if (e.key === 'ArrowUp') {
      const idx = tasks.findIndex(t => t.id === taskId);
      if (idx > 0) {
        nextTaskId = tasks[idx - 1].id;
        e.preventDefault();
      }
    } else if (e.key === 'ArrowDown') {
      const idx = tasks.findIndex(t => t.id === taskId);
      if (idx < tasks.length - 1) {
        nextTaskId = tasks[idx + 1].id;
        e.preventDefault();
      }
    } else if (e.key === 'ArrowLeft') {
      if (dayIdx > 0) {
        nextDayIdx = dayIdx - 1;
        e.preventDefault();
      }
    } else if (e.key === 'ArrowRight') {
      if (dayIdx < 4) {
        nextDayIdx = dayIdx + 1;
        e.preventDefault();
      }
    } else if (e.key === 'Enter') {
      const idx = tasks.findIndex(t => t.id === taskId);
      if (idx < tasks.length - 1) {
        nextTaskId = tasks[idx + 1].id;
        e.preventDefault();
      }
    }

    if (nextTaskId !== taskId || nextDayIdx !== dayIdx) {
      const el = document.getElementById(`input_${nextTaskId}_${nextDayIdx}`);
      if (el) {
        (el as HTMLInputElement).focus();
      }
    }
  };

  const handleCellChange = (taskId: string, dayIndex: number, val: string) => {
    // Keep it as a string to allow editing (e.g. typing decimals)
    setEntries(prev => ({
      ...prev,
      [`${taskId}_${dayIndex}`]: val
    }));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskName.trim()) return;
    const newId = `t_${Date.now()}`;
    const newTask: Task = {
      id: newId,
      name: newTaskName.trim()
    };
    setTasks([...tasks, newTask]);
    
    // Initialize day hours for the new task
    setEntries(prev => {
      const next = { ...prev };
      for (let i = 0; i < 5; i++) {
        next[`${newId}_${i}`] = '0';
      }
      return next;
    });

    setNewTaskName('');
  };

  // Helper calculations
  const weekdays = [
    { label: 'Mon', dateStr: '7/12' },
    { label: 'Tue', dateStr: '7/13' },
    { label: 'Wed', dateStr: '7/14' },
    { label: 'Thu', dateStr: '7/15' },
    { label: 'Fri', dateStr: '7/16' }
  ];

  // Recalculate totals
  const taskTotals = useMemo(() => {
    const totals: Record<string, number> = {};
    tasks.forEach(t => {
      let sum = 0;
      for (let i = 0; i < 5; i++) {
        sum += parseFloat(entries[`${t.id}_${i}`]) || 0;
      }
      totals[t.id] = sum;
    });
    return totals;
  }, [tasks, entries]);

  const dayTotals = useMemo(() => {
    const totals: number[] = [0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) {
      let sum = 0;
      tasks.forEach(t => {
        sum += parseFloat(entries[`${t.id}_${i}`]) || 0;
      });
      totals[i] = sum;
    }
    return totals;
  }, [tasks, entries]);

  const grandTotal = useMemo(() => {
    return dayTotals.reduce((sum, val) => sum + val, 0);
  }, [dayTotals]);

  return (
    <div className={`${styles.bentoCard} ${styles.flagshipCard}`}>
      {/* Desktop App Frame Container */}
      <div className={styles.appContainerFrame}>
        {/* App Header */}
        <header className={styles.appHeader}>
          <div className={styles.appHeaderLeft}>
            <div className={styles.appLogo}>
              TIME<span className={styles.logoLight}>MATRIX</span>
            </div>
            <nav className={styles.appNav}>
              {['Timesheets', 'Projects', 'Reports', 'Invoices'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveAppTab(tab)}
                  className={`${styles.appNavTab} ${activeAppTab === tab ? styles.appNavTabActive : ''}`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          <div className={styles.appHeaderRight}>
            {isSaving ? (
              <div className={`${styles.cloudSyncIndicator} ${styles.cloudSaving}`}>
                <span className={styles.spinner}></span>
                Saving to Cloud...
              </div>
            ) : (
              <div className={`${styles.cloudSyncIndicator} ${styles.cloudSaved}`}>
                <span className={styles.checkmarkIcon}>✓</span>
                Saved to Cloud
              </div>
            )}
          </div>
        </header>

        {/* Main App Workspace */}
        <div className={styles.appWorkspace}>
          {activeAppTab === 'Timesheets' ? (
            <>
              {/* Workspace Toolbar */}
              <div className={styles.workspaceToolbar}>
                <div className={styles.toolbarTitleBlock}>
                  <h3 className={styles.workspaceTitle}>Timesheet for Week of July 12 – July 16, 2026</h3>
                  <div className={styles.timeframeBadgeGrid}>
                    {['day', 'week', 'month'].map(t => (
                      <button
                        key={t}
                        onClick={() => setTimeframe(t)}
                        className={`${styles.timeframeBtn} ${timeframe === t ? styles.timeframeBtnActive : ''}`}
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.toolbarNavigation}>
                  <button className={styles.navArrow} title="Previous Week">&lt;</button>
                  <span className={styles.navWeekLabel}>NAVIGATE</span>
                  <button className={styles.navArrow} title="Next Week">&gt;</button>
                </div>
              </div>

              {/* Timesheet Grid (Table) */}
              <div className={styles.timesheetGridWrapper}>
                <table className={styles.timesheetTable}>
                  <thead>
                    <tr>
                      <th className={styles.colProjectTask}>Project / Task</th>
                      {weekdays.map((day, idx) => (
                        <th key={idx} className={styles.colDay}>
                          <span className={styles.dayLabel}>{day.label}</span>
                          <span className={styles.dayDate}>{day.dateStr}</span>
                        </th>
                      ))}
                      <th className={styles.colTotal}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Collapsible Project Category Header Row */}
                    <tr className={styles.projectHeaderRow} onClick={() => setIsCollapsed(!isCollapsed)}>
                      <td colSpan={7} className={styles.projectHeaderCell}>
                        <span className={`${styles.arrowToggle} ${isCollapsed ? styles.arrowRight : styles.arrowDown}`}>▼</span>
                        📂 Headquarters Redesign
                      </td>
                      <td className={styles.projectTotalVal}>
                        {grandTotal.toFixed(1)} hrs
                      </td>
                    </tr>

                    {/* Task Rows (Hidden if collapsed) */}
                    {!isCollapsed && tasks.map(t => (
                      <tr key={t.id} className={styles.taskInputRow}>
                        <td className={styles.taskTitleCell}>
                          <span className={styles.taskBullet}>•</span> {t.name}
                        </td>
                        {weekdays.map((_, dayIdx) => {
                          const valKey = `${t.id}_${dayIdx}`;
                          const val = entries[valKey] || '';
                          return (
                            <td key={dayIdx} className={styles.taskCellInputContainer}>
                              <input
                                id={`input_${t.id}_${dayIdx}`}
                                type="text"
                                value={val}
                                onChange={(e) => handleCellChange(t.id, dayIdx, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(t.id, dayIdx, e)}
                                onFocus={(e) => e.target.select()}
                                className={styles.gridHourInput}
                                placeholder="0"
                              />
                            </td>
                          );
                        })}
                        <td className={styles.taskTotalCell}>
                          {taskTotals[t.id].toFixed(1)}
                        </td>
                      </tr>
                    ))}

                    {/* Totals Row */}
                    <tr className={styles.gridTotalsRow}>
                      <td className={styles.totalsTitleCell}>Total Hours</td>
                      {dayTotals.map((tot, idx) => (
                        <td key={idx} className={styles.dayTotalCell}>
                          {tot > 0 ? tot.toFixed(1) : '-'}
                        </td>
                      ))}
                      <td className={styles.grandTotalCell}>
                        {grandTotal.toFixed(1)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Add Task Input Form */}
              <form onSubmit={handleAddTask} className={styles.appAddTaskForm}>
                <input
                  type="text"
                  placeholder="Create a new task under Headquarters Redesign..."
                  value={newTaskName}
                  onChange={(e) => setNewTaskName(e.target.value)}
                  className={styles.appAddTaskInput}
                />
                <button type="submit" className={styles.appAddTaskBtn}>
                  + Add Task
                </button>
              </form>
            </>
          ) : (
            <div className={styles.appUnderConstruction}>
              <h4>{activeAppTab} Portal</h4>
              <p>This section is mock-locked in the sandbox. Try updating the grid in the <strong>Timesheets</strong> tab to see live hours update!</p>
              <button onClick={() => setActiveAppTab('Timesheets')} className={styles.miniBtn}>
                Back to Timesheets
              </button>
            </div>
          )}
        </div>
      </div>
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
    <div className={`${styles.bentoCard} ${styles.inquiriesCard}`}>
      <div>
        <h3 className={styles.cardTitle}>Product Inquiries</h3>
        <p className={styles.cardDesc}>Interested in timematrix for your team? Send a message and let's discuss how we can support your business.</p>
      </div>

      {status === 'success' ? (
        <div className={styles.successWrapper}>
          <div className={styles.successCheck}>✓</div>
          <div className={styles.successMessage}>
            <h4>Inquiry Submitted!</h4>
            <p>Thank you for reaching out. We will get back to you within one business day to discuss custom trials, importing logs, and setups.</p>
          </div>
          <button onClick={resetForm} className={styles.miniBtn}>Submit another</button>
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
              placeholder="Tell us about your time tracking requirements (required)"
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

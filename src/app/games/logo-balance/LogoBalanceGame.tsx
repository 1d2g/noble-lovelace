'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  RotateCcw, 
  Share2, 
  ArrowLeft, 
  ArrowRight, 
  Eye, 
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Check,
  Lock,
  Calendar,
  Award,
  Trophy,
  Sparkles,
  X
} from 'lucide-react';

import { ARCHETYPES, DayChallenge, SliderParam } from './types';
import { getChallengesForDay } from './catalog';
import { 
  TOTAL_DAYS, 
  getCurrentDayNumber, 
  isDayUnlocked, 
  getDayDateString, 
  saveDayResult, 
  getSavedDayResult, 
  getPlayedDaysList 
} from './dailyEngine';
import { renderChallengeSvg } from './archetypes';

export default function LogoBalanceGame() {
  const currentSystemDay = getCurrentDayNumber();
  const [selectedDay, setSelectedDay] = useState<number>(currentSystemDay);
  const [challengeIdx, setChallengeIdx] = useState<number>(0);
  const [isArchiveOpen, setIsArchiveOpen] = useState<boolean>(false);
  const [showScorecard, setShowScorecard] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'user' | 'official'>('user');
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  // Challenges for currently selected day (always 6 challenges, 1 per archetype)
  const [dailyChallenges, setDailyChallenges] = useState<DayChallenge[]>(() => {
    return getChallengesForDay(currentSystemDay);
  });

  const activeChallenge = dailyChallenges[challengeIdx] || dailyChallenges[0];

  // Map of slider values per challenge: { [challengeIdx]: { [paramId]: value } }
  const [allSliderValues, setAllSliderValues] = useState<Record<number, Record<string, number>>>({});

  // Status of whether each challenge has been checked: { [challengeIdx]: boolean }
  const [checkedMap, setCheckedMap] = useState<Record<number, boolean>>({});

  // Scores per challenge: { [challengeIdx]: number }
  const [scoresMap, setScoresMap] = useState<Record<number, number>>({});

  // Load saved day data or initialize new session when selectedDay changes
  useEffect(() => {
    const challenges = getChallengesForDay(selectedDay);
    setDailyChallenges(challenges);
    setChallengeIdx(0);
    setViewMode('user');
    setShowScorecard(false);

    // Check if user already played this day
    const saved = getSavedDayResult(selectedDay);
    if (saved && saved.scores && saved.scores.length === 6) {
      const newChecked: Record<number, boolean> = {};
      const newScores: Record<number, number> = {};
      const newValues: Record<number, Record<string, number>> = {};

      saved.scores.forEach((sc, idx) => {
        newChecked[idx] = true;
        newScores[idx] = sc;
        const ch = challenges[idx];
        if (ch) {
          newValues[idx] = {};
          ch.parameters.forEach(p => {
            newValues[idx][p.id] = p.targetValue;
          });
        }
      });

      setCheckedMap(newChecked);
      setScoresMap(newScores);
      setAllSliderValues(newValues);
    } else {
      // Initialize with balanced offsets
      const initialValues: Record<number, Record<string, number>> = {};
      challenges.forEach((ch, cIdx) => {
        initialValues[cIdx] = {};
        ch.parameters.forEach(p => {
          const spread = (p.max - p.min) * 0.3;
          const direction = Math.random() > 0.5 ? 1 : -1;
          const offset = Math.round(direction * (spread * 0.5 + Math.random() * spread * 0.5));
          const val = Math.min(p.max, Math.max(p.min, p.targetValue + (offset === 0 ? 8 : offset)));
          initialValues[cIdx][p.id] = val;
        });
      });
      setAllSliderValues(initialValues);
      setCheckedMap({});
      setScoresMap({});
    }
  }, [selectedDay]);

  // Current challenge slider values
  const currentValues = allSliderValues[challengeIdx] || {};
  const isCurrentChecked = checkedMap[challengeIdx] === true;
  const currentScore = scoresMap[challengeIdx] ?? 0;

  const handleSliderChange = (paramId: string, value: number) => {
    if (isCurrentChecked) return;
    setAllSliderValues(prev => ({
      ...prev,
      [challengeIdx]: {
        ...(prev[challengeIdx] || {}),
        [paramId]: value
      }
    }));
  };

  const handleNudge = (param: SliderParam, delta: number) => {
    if (isCurrentChecked) return;
    const cur = currentValues[param.id] ?? param.targetValue;
    const precision = param.step <= 0.1 ? 10 : param.step <= 0.5 ? 2 : 1;
    const next = Math.min(param.max, Math.max(param.min, Math.round((cur + delta) * precision) / precision));
    handleSliderChange(param.id, next);
  };

  // Check accuracy for current challenge
  const handleCheckBalance = () => {
    let sumScores = 0;
    activeChallenge.parameters.forEach(p => {
      const val = currentValues[p.id] ?? p.targetValue;
      const diff = Math.abs(val - p.targetValue);
      const pScore = Math.max(0, Math.round(100 - (diff / p.tolerance) * 100));
      sumScores += Math.min(100, pScore);
    });
    const avgScore = Math.round(sumScores / activeChallenge.parameters.length);

    const nextChecked = { ...checkedMap, [challengeIdx]: true };
    const nextScores = { ...scoresMap, [challengeIdx]: avgScore };

    setCheckedMap(nextChecked);
    setScoresMap(nextScores);
    setViewMode('user');

    // If all 6 challenges are now completed, save results and offer scorecard
    const allDone = [0, 1, 2, 3, 4, 5].every(i => nextChecked[i] === true);
    if (allDone) {
      const finalScores = [0, 1, 2, 3, 4, 5].map(i => nextScores[i] ?? 0);
      const overallAvg = Math.round(finalScores.reduce((a, b) => a + b, 0) / 6);
      saveDayResult({
        dayNumber: selectedDay,
        completedAt: new Date().toISOString(),
        scores: finalScores,
        averageScore: overallAvg
      });
    }
  };

  const handleResetChallenge = () => {
    setCheckedMap(prev => ({ ...prev, [challengeIdx]: false }));
    setViewMode('user');
    // Set a slight offset again
    const ch = activeChallenge;
    const resetVals: Record<string, number> = {};
    ch.parameters.forEach(p => {
      const spread = (p.max - p.min) * 0.3;
      const direction = Math.random() > 0.5 ? 1 : -1;
      resetVals[p.id] = Math.min(p.max, Math.max(p.min, p.targetValue + Math.round(direction * spread * 0.6)));
    });
    setAllSliderValues(prev => ({ ...prev, [challengeIdx]: resetVals }));
  };

  const handleNextStep = () => {
    if (challengeIdx < 5) {
      setChallengeIdx(challengeIdx + 1);
      setViewMode('user');
    } else {
      setShowScorecard(true);
    }
  };

  // Day Overall Score
  const completedCount = Object.keys(checkedMap).filter(k => checkedMap[Number(k)]).length;
  const isDayFullyComplete = completedCount === 6;
  const dayAverageScore = isDayFullyComplete
    ? Math.round([0, 1, 2, 3, 4, 5].reduce((sum, i) => sum + (scoresMap[i] ?? 0), 0) / 6)
    : 0;

  // Share text generation (Strictly Zero Emojis)
  const handleShareDay = () => {
    const lines = [
      `dg.tools Logo Balance: Day ${selectedDay} (${getDayDateString(selectedDay)})`,
      `Daily Optical Precision: ${dayAverageScore}%`,
      `Archetype Breakdown:`,
      `1. Radial Seam: ${scoresMap[0] ?? 0}%`,
      `2. Intersecting Rings: ${scoresMap[1] ?? 0}%`,
      `3. Stroke Ratio: ${scoresMap[2] ?? 0}%`,
      `4. Tilt Angle: ${scoresMap[3] ?? 0}%`,
      `5. Apex Curve: ${scoresMap[4] ?? 0}%`,
      `6. Negative Gap: ${scoresMap[5] ?? 0}%`,
      `Play on https://dg.tools/games/logo-balance`
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2200);
  };

  const playedDays = getPlayedDaysList();

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '1rem 0 5rem 0' }}>
      {/* Top Header & Day Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link 
            href="/games"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--text-secondary)',
              fontSize: '0.825rem',
              fontWeight: 500
            }}
          >
            <ArrowLeft size={14} />
            <span>Games</span>
          </Link>

          <span style={{ color: 'var(--text-muted)' }}>/</span>

          <button
            onClick={() => setIsArchiveOpen(true)}
            style={{
              backgroundColor: 'var(--bg-card-muted)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              padding: '0.35rem 0.75rem',
              color: 'var(--text-primary)',
              fontSize: '0.8rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer'
            }}
          >
            <Calendar size={13} style={{ color: '#10b981' }} />
            <span>Day {selectedDay} of {TOTAL_DAYS}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>• {getDayDateString(selectedDay)}</span>
          </button>
        </div>

        {/* Right side: Day status & Archive Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {isDayFullyComplete && (
            <button
              onClick={() => setShowScorecard(true)}
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid #10b981',
                color: '#10b981',
                borderRadius: '6px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              <Trophy size={13} />
              <span>Scorecard ({dayAverageScore}%)</span>
            </button>
          )}

          <button
            onClick={() => setIsArchiveOpen(true)}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              padding: '0.35rem 0.75rem',
              color: 'var(--text-secondary)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Past Archives
          </button>
        </div>
      </div>

      {/* 6-Archetype Segmented Progress Bar */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(6, 1fr)', 
          gap: '0.5rem', 
          marginBottom: '2rem' 
        }}
      >
        {ARCHETYPES.map((arch, idx) => {
          const isCurrent = idx === challengeIdx;
          const isDone = checkedMap[idx] === true;
          const score = scoresMap[idx];

          return (
            <button
              key={arch.id}
              onClick={() => {
                setChallengeIdx(idx);
                setViewMode('user');
              }}
              style={{
                backgroundColor: isCurrent ? 'var(--bg-card)' : 'var(--bg-card-muted)',
                border: isCurrent 
                  ? '1px solid #10b981' 
                  : isDone 
                    ? '1px solid var(--border-subtle)' 
                    : '1px solid transparent',
                borderRadius: '8px',
                padding: '0.6rem 0.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.7rem', color: isCurrent ? '#10b981' : 'var(--text-muted)', fontWeight: 700 }}>
                  0{idx + 1}
                </span>
                {isDone && (
                  <span style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: 800, 
                    color: score && score >= 90 ? '#10b981' : score && score >= 75 ? '#f59e0b' : '#ef4444' 
                  }}>
                    {score}%
                  </span>
                )}
              </div>
              <span style={{ 
                fontSize: '0.75rem', 
                fontWeight: isCurrent ? 700 : 500, 
                color: isCurrent ? 'var(--text-primary)' : 'var(--text-secondary)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {arch.name.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Challenge Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <span className="mono-label" style={{ color: '#10b981', fontWeight: 700 }}>
            Archetype {challengeIdx + 1} of 6 • {ARCHETYPES[challengeIdx].name}
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '0.4rem' }}>
          {activeChallenge.brandName}
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {activeChallenge.taskPrompt}
        </p>
      </div>

      {/* Interactive Arena */}
      <div 
        className="hub-card" 
        style={{ 
          padding: '2.5rem 2rem', 
          backgroundColor: '#ffffff',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px'
        }}
      >
        {/* Toggle Mode Bar (User vs Official Spec) */}
        {isCurrentChecked && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ backgroundColor: 'var(--bg-card-muted)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '0.25rem', display: 'inline-flex', gap: '0.25rem' }}>
              <button
                onClick={() => setViewMode('user')}
                style={{
                  backgroundColor: viewMode === 'user' ? '#0f172a' : 'transparent',
                  color: viewMode === 'user' ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.775rem',
                  fontWeight: 700,
                  padding: '0.35rem 0.85rem',
                  cursor: 'pointer'
                }}
              >
                Your Balance
              </button>
              <button
                onClick={() => setViewMode('official')}
                style={{
                  backgroundColor: viewMode === 'official' ? '#10b981' : 'transparent',
                  color: viewMode === 'official' ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.775rem',
                  fontWeight: 700,
                  padding: '0.35rem 0.85rem',
                  cursor: 'pointer'
                }}
              >
                Official Spec (Green Overlay)
              </button>
            </div>
          </div>
        )}

        {/* Vector Canvas Container */}
        <div 
          style={{ 
            backgroundColor: '#f8fafc', 
            borderRadius: '12px', 
            border: '1px solid var(--border-subtle)',
            padding: '2.5rem 1.5rem', 
            minHeight: '270px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            position: 'relative',
            marginBottom: '2.25rem'
          }}
        >
          {renderChallengeSvg(activeChallenge, currentValues, viewMode === 'official')}

          <div style={{ position: 'absolute', bottom: '0.75rem', right: '1rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            {viewMode === 'official' ? 'Official Brand Geometry Spec' : 'Interactive Optical Canvas'}
          </div>
        </div>

        {/* Sliders Container */}
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
            {activeChallenge.parameters.map((param) => {
              const currentVal = currentValues[param.id] ?? param.targetValue;
              const diff = Math.abs(currentVal - param.targetValue);
              const paramAccuracy = Math.max(0, Math.round(100 - (diff / param.tolerance) * 100));

              return (
                <div 
                  key={param.id}
                  style={{ 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--border-subtle)', 
                    borderRadius: '8px', 
                    padding: '1rem 1.25rem' 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {param.colorA && param.colorB ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: param.colorA, display: 'inline-block' }}></span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/</span>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: param.colorB, display: 'inline-block' }}></span>
                        </div>
                      ) : null}
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {param.label}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {isCurrentChecked && (
                        <span className="mono-label" style={{ color: paramAccuracy >= 90 ? '#10b981' : paramAccuracy >= 75 ? '#f59e0b' : '#ef4444' }}>
                          {paramAccuracy}%
                        </span>
                      )}
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, fontFamily: 'monospace', color: 'var(--text-primary)' }}>
                        {Number(currentVal).toFixed(param.step <= 0.1 ? 1 : 0)}{param.unit}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button
                      onClick={() => handleNudge(param, -param.step)}
                      disabled={isCurrentChecked}
                      style={{
                        backgroundColor: 'var(--bg-card-muted)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '5px',
                        width: '32px',
                        height: '32px',
                        cursor: isCurrentChecked ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700
                      }}
                    >
                      -
                    </button>

                    <input 
                      type="range"
                      min={param.min}
                      max={param.max}
                      step={param.step}
                      value={currentVal}
                      onChange={(e) => handleSliderChange(param.id, parseFloat(e.target.value))}
                      disabled={isCurrentChecked}
                      style={{ flex: 1 }}
                    />

                    <button
                      onClick={() => handleNudge(param, param.step)}
                      disabled={isCurrentChecked}
                      style={{
                        backgroundColor: 'var(--bg-card-muted)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '5px',
                        width: '32px',
                        height: '32px',
                        cursor: isCurrentChecked ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* Scale Extrema Range Readout */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.35rem', padding: '0 2.75rem' }}>
                    <span>{param.min}{param.unit} (Min)</span>
                    <span>{param.max}{param.unit} (Max)</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Control Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {!isCurrentChecked ? (
              <button
                onClick={handleCheckBalance}
                style={{
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  padding: '0.75rem 2rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                  transition: 'all 0.15s ease'
                }}
              >
                <CheckCircle2 size={16} />
                <span>Check Balance</span>
              </button>
            ) : (
              <>
                <button
                  onClick={handleNextStep}
                  style={{
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    padding: '0.75rem 1.75rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)'
                  }}
                >
                  <span>{challengeIdx < 5 ? 'Next Logo Archetype' : 'View Daily Scorecard'}</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={handleResetChallenge}
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                    padding: '0.75rem 1rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <RotateCcw size={13} />
                  <span>Retry</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Evaluation Insight Card once checked */}
        {isCurrentChecked && (
          <div 
            style={{ 
              marginTop: '2.5rem', 
              padding: '1.75rem', 
              backgroundColor: 'var(--bg-card-muted)', 
              borderRadius: '10px',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <div>
                <span className="mono-label" style={{ color: currentScore >= 90 ? '#10b981' : currentScore >= 75 ? '#f59e0b' : '#ef4444' }}>
                  {currentScore >= 95 ? 'Master Creative Director Eye' : currentScore >= 85 ? 'High Optical Intuition' : currentScore >= 70 ? 'Competent Eye' : 'Needs Optical Calibration'}
                </span>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {currentScore}% Accuracy
                </div>
              </div>

              {activeChallenge.parameters.length === 1 && (
                <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <div>Target: <strong style={{ color: 'var(--text-primary)' }}>{Number(activeChallenge.parameters[0].targetValue).toFixed(activeChallenge.parameters[0].step <= 0.1 ? 1 : 0)}{activeChallenge.parameters[0].unit}</strong></div>
                  <div>Your guess: <strong style={{ color: 'var(--text-primary)' }}>{Number(currentValues[activeChallenge.parameters[0].id] ?? 0).toFixed(activeChallenge.parameters[0].step <= 0.1 ? 1 : 0)}{activeChallenge.parameters[0].unit}</strong></div>
                </div>
              )}
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '0.75rem' }}>
              {activeChallenge.designerInsight}
            </p>
          </div>
        )}
      </div>

      {/* Daily Scorecard Modal */}
      {showScorecard && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.45)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1.5rem'
          }}
        >
          <div 
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              maxWidth: '560px',
              width: '100%',
              padding: '2rem',
              position: 'relative',
              boxShadow: '0 24px 64px rgba(15, 23, 42, 0.15)'
            }}
          >
            <button
              onClick={() => setShowScorecard(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <span className="mono-label" style={{ color: '#10b981', fontWeight: 700 }}>
                Day {selectedDay} Summary • {getDayDateString(selectedDay)}
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, marginTop: '0.4rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                {dayAverageScore}% Precision
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                All 6 optical logo archetypes completed for today.
              </p>
            </div>

            {/* Breakdown List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
              {dailyChallenges.map((ch, idx) => {
                const sc = scoresMap[idx] ?? 0;
                return (
                  <div 
                    key={ch.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.6rem 0.85rem',
                      backgroundColor: 'var(--bg-card-muted)',
                      borderRadius: '8px',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {idx + 1}. {ch.brandName}
                      </div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                        {ARCHETYPES[idx].name}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '80px', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${sc}%`, height: '100%', backgroundColor: sc >= 90 ? '#10b981' : sc >= 75 ? '#f59e0b' : '#ef4444' }} />
                      </div>
                      <span className="mono-label" style={{ fontWeight: 800, width: '38px', textAlign: 'right' }}>
                        {sc}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Share & Archive Navigation Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={handleShareDay}
                style={{
                  flex: 1,
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.875rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)'
                }}
              >
                {copiedShare ? <Check size={15} style={{ color: '#10b981' }} /> : <Share2 size={15} />}
                <span>{copiedShare ? 'Copied to Clipboard' : 'Share Scorecard'}</span>
              </button>

              <button
                onClick={() => {
                  setShowScorecard(false);
                  setIsArchiveOpen(true);
                }}
                style={{
                  backgroundColor: 'var(--bg-card-muted)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Archive
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 100-Day Archive Modal */}
      {isArchiveOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.45)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1.5rem'
          }}
        >
          <div 
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: '0 24px 64px rgba(15, 23, 42, 0.15)',
              overflow: 'hidden'
            }}
          >
            {/* Archive Header */}
            <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                  100-Day Challenge Archive
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0 0' }}>
                  6 logos per day. Past days are permanently unlocked. Future days unlock daily at midnight.
                </p>
              </div>

              <button
                onClick={() => setIsArchiveOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Archive Grid (Days 1 to 100) */}
            <div style={{ padding: '1.5rem 1.75rem', overflowY: 'auto', flex: 1 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '0.5rem' }}>
                {Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1).map((dayNum) => {
                  const unlocked = isDayUnlocked(dayNum);
                  const isCurrent = dayNum === selectedDay;
                  const isToday = dayNum === currentSystemDay;
                  const saved = getSavedDayResult(dayNum);
                  const isDone = saved && saved.scores && saved.scores.length === 6;

                  if (!unlocked) {
                    return (
                      <div 
                        key={dayNum}
                        title={`Unlocks on ${getDayDateString(dayNum)}`}
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.03)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '8px',
                          padding: '0.75rem 0.5rem',
                          textAlign: 'center',
                          opacity: 0.45,
                          cursor: 'not-allowed',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '0.2rem'
                        }}
                      >
                        <Lock size={12} style={{ color: 'var(--text-muted)' }} />
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                          Day {dayNum}
                        </span>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={dayNum}
                      onClick={() => {
                        setSelectedDay(dayNum);
                        setIsArchiveOpen(false);
                      }}
                      style={{
                        backgroundColor: isCurrent ? 'var(--bg-card)' : 'var(--bg-card-muted)',
                        border: isCurrent 
                          ? '1px solid #10b981' 
                          : isToday 
                            ? '1px solid #0f172a' 
                            : '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        padding: '0.65rem 0.5rem',
                        textAlign: 'center',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.2rem',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isCurrent ? '#10b981' : 'var(--text-primary)' }}>
                        Day {dayNum}
                      </span>
                      {isDone ? (
                        <span style={{ 
                          fontSize: '0.65rem', 
                          fontWeight: 800, 
                          color: saved.averageScore >= 90 ? '#10b981' : saved.averageScore >= 75 ? '#f59e0b' : '#ef4444' 
                        }}>
                          {saved.averageScore}%
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.65rem', color: isToday ? '#10b981' : 'var(--text-muted)' }}>
                          {isToday ? 'Today' : 'Open'}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Archive Footer info */}
            <div style={{ padding: '1rem 1.75rem', borderTop: '1px solid var(--border-subtle)', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <span>Played: {playedDays.length} of {currentSystemDay} unlocked days</span>
              <button
                onClick={() => {
                  setSelectedDay(currentSystemDay);
                  setIsArchiveOpen(false);
                }}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#10b981',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Jump to Today
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subtle Cross-Promotion Footer for VeloTime */}
      <div 
        style={{ 
          marginTop: '3.5rem', 
          padding: '1.75rem', 
          backgroundColor: 'var(--bg-card)', 
          border: '1px solid var(--border-subtle)', 
          borderRadius: '10px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}
      >
        <div>
          <span className="mono-label" style={{ color: 'var(--text-muted)' }}>More from dg.tools</span>
          <div style={{ fontSize: '1rem', fontWeight: 800, marginTop: '0.25rem' }}>
            VeloTime: Time Tracking for Designers & Studios
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
            Built with the same focus on craft. Fast weekly grid, $5/user/month, zero tracking spyware.
          </p>
        </div>

        <a
          href="https://velotime.dg.tools/demo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#0f172a',
            color: '#ffffff',
            fontSize: '0.825rem',
            fontWeight: 700,
            padding: '0.6rem 1.2rem',
            borderRadius: '6px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.12)'
          }}
        >
          <span>Try VeloTime Demo</span>
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

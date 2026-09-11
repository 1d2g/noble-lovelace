'use client';

import { useState } from 'react';
import { Type, RefreshCw, CheckCircle2, Sliders, ExternalLink } from 'lucide-react';

const PUZZLES = [
  {
    word: ['A', 'V', 'A', 'N', 'T'],
    targetIndex: 1, // V
    idealOffset: -14, // px
    min: -35,
    max: 15,
    font: 'sans-serif',
    fontName: 'Geometric Grotesk',
    designerNote: 'Capital A and V diagonal stems create large counter-spaces that require aggressive negative kerning.'
  },
  {
    word: ['T', 'O', 'R', 'O', 'N', 'T', 'O'],
    targetIndex: 1, // O under T
    idealOffset: -18,
    min: -40,
    max: 10,
    font: 'serif',
    fontName: 'Transitional Serif',
    designerNote: 'The crossbar of the T extends over the rounded shoulder of the O, needing tuck-in kerning.'
  },
  {
    word: ['Y', 'E', 'L', 'L', 'O', 'W'],
    targetIndex: 1, // E under Y
    idealOffset: -12,
    min: -30,
    max: 10,
    font: 'sans-serif',
    fontName: 'Neo-Grotesque',
    designerNote: 'The diagonal arm of the Y leaves open space beneath its right stem.'
  }
];

export default function DailyKerningGame() {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [hasEvaluated, setHasEvaluated] = useState(false);

  const activePuzzle = PUZZLES[puzzleIndex];

  const handleEvaluate = () => {
    setHasEvaluated(true);
  };

  const handleNextPuzzle = () => {
    const nextIdx = (puzzleIndex + 1) % PUZZLES.length;
    setPuzzleIndex(nextIdx);
    setCurrentOffset(0);
    setHasEvaluated(false);
  };

  const handleReset = () => {
    setCurrentOffset(0);
    setHasEvaluated(false);
  };

  // Calculate score 0-100%
  const difference = Math.abs(currentOffset - activePuzzle.idealOffset);
  const maxPossibleDiff = Math.max(
    Math.abs(activePuzzle.min - activePuzzle.idealOffset),
    Math.abs(activePuzzle.max - activePuzzle.idealOffset)
  );
  const accuracyPercent = Math.max(0, Math.round(100 - (difference / maxPossibleDiff) * 100));

  return (
    <section id="daily-game" style={{ marginTop: '5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="mono-label" style={{ color: '#10b981', fontWeight: 700 }}>Daily Micro-Challenge</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Puzzle #{puzzleIndex + 1} of {PUZZLES.length}</span>
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em' }}>The Daily Kerning Challenge</h2>
        </div>

        <button
          onClick={handleNextPuzzle}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'var(--bg-card-muted)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            fontSize: '0.8rem',
            fontWeight: 600,
            padding: '0.45rem 0.85rem',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          <RefreshCw size={13} />
          <span>Next Word</span>
        </button>
      </div>

      <div className="hub-card" style={{ padding: '2.5rem 2rem' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '640px' }}>
          Optical kerning test for designers. Drag the slider to adjust letter spacing for visual balance.
          Letter in focus: <strong style={{ color: 'var(--text-primary)' }}>{activePuzzle.word[activePuzzle.targetIndex]}</strong>.
        </p>

        {/* Word Kerning Stage */}
        <div 
          style={{ 
            backgroundColor: '#000000', 
            border: '1px solid var(--border-subtle)', 
            borderRadius: '8px', 
            padding: '4rem 1.5rem', 
            textAlign: 'center',
            marginBottom: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div 
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 4.75rem)', 
              fontWeight: 800, 
              letterSpacing: '0.05em',
              fontFamily: activePuzzle.font,
              userSelect: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {activePuzzle.word.map((char, i) => {
              const isTarget = i === activePuzzle.targetIndex;
              return (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    marginLeft: isTarget ? `${currentOffset}px` : undefined,
                    color: isTarget ? '#ffffff' : '#71717a',
                    borderBottom: isTarget ? '2px solid #3b82f6' : 'none',
                    paddingBottom: isTarget ? '4px' : undefined,
                    transition: 'margin 0.05s ease-out'
                  }}
                >
                  {char}
                </span>
              );
            })}
          </div>

          <div style={{ position: 'absolute', bottom: '0.75rem', right: '1rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            Typeface: {activePuzzle.fontName}
          </div>
        </div>

        {/* Control Interface */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '1rem', alignItems: 'center', maxWidth: '720px', margin: '0 auto 1.5rem auto' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span>Tighter (-{Math.abs(activePuzzle.min)}px)</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{currentOffset > 0 ? `+${currentOffset}px` : `${currentOffset}px`}</span>
              <span>Looser (+{activePuzzle.max}px)</span>
            </div>
            <input 
              type="range" 
              min={activePuzzle.min} 
              max={activePuzzle.max} 
              value={currentOffset}
              onChange={(e) => {
                setCurrentOffset(parseInt(e.target.value, 10));
                if (hasEvaluated) setHasEvaluated(false);
              }}
              disabled={hasEvaluated}
            />
          </div>

          <button
            onClick={handleEvaluate}
            disabled={hasEvaluated}
            style={{
              backgroundColor: hasEvaluated ? 'var(--bg-card-muted)' : '#f4f4f5',
              color: hasEvaluated ? 'var(--text-muted)' : '#09090b',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.85rem',
              padding: '0.65rem 1.25rem',
              cursor: hasEvaluated ? 'default' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.15s ease'
            }}
          >
            <CheckCircle2 size={15} />
            <span>Check Kerning</span>
          </button>

          {hasEvaluated && (
            <button
              onClick={handleReset}
              style={{
                backgroundColor: 'transparent',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '0.85rem',
                padding: '0.65rem 1rem',
                cursor: 'pointer'
              }}
            >
              Retry
            </button>
          )}
        </div>

        {/* Evaluation Output */}
        {hasEvaluated && (
          <div 
            style={{ 
              backgroundColor: 'var(--bg-card-muted)', 
              border: '1px solid var(--border-subtle)', 
              borderRadius: '8px', 
              padding: '1.25rem 1.5rem',
              maxWidth: '720px',
              margin: '0 auto'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span className="mono-label" style={{ color: accuracyPercent >= 90 ? '#10b981' : accuracyPercent >= 75 ? '#f59e0b' : '#ef4444' }}>
                {accuracyPercent >= 90 ? 'Master Typographer Eye' : accuracyPercent >= 75 ? 'Strong Optical Balance' : 'Needs Optical Correction'}
              </span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {accuracyPercent}% Accuracy
              </span>
            </div>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {activePuzzle.designerNote} (Target offset was {activePuzzle.idealOffset}px; you chose {currentOffset}px).
            </p>
          </div>
        )}

        <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
            Appreciate meticulous design tools?
          </span>
          <a 
            href="https://velotime.dg.tools" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              fontSize: '0.775rem', 
              color: 'var(--text-primary)', 
              fontWeight: 600, 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.25rem' 
            }}
          >
            <span>See how VeloTime eliminates Friday timesheet friction</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}

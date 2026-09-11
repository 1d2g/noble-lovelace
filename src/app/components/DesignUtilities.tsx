'use client';

import { useState } from 'react';
import { Type, Palette, ArrowUpRight, Check, Copy } from 'lucide-react';

const SCALE_PRESETS = [
  { name: 'Major Third (1.250)', ratio: 1.250, note: 'Balanced for compact SaaS dashboards and desktop apps.' },
  { name: 'Perfect Fourth (1.333)', ratio: 1.333, note: 'Classic editorial hierarchy with clear distinction between levels.' },
  { name: 'Augmented Fourth (1.414)', ratio: 1.414, note: 'High contrast; ideal for marketing headlines and hero typography.' },
  { name: 'Golden Ratio (1.618)', ratio: 1.618, note: 'Dramatic architectural scale for large display type.' }
];

export default function DesignUtilities() {
  const [baseSize, setBaseSize] = useState(16);
  const [selectedRatioIndex, setSelectedRatioIndex] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const activeRatio = SCALE_PRESETS[selectedRatioIndex].ratio;

  // Generate 5 steps: caption, body, h3, h2, h1
  const steps = [
    { label: 'Caption', power: -1 },
    { label: 'Body Base', power: 0 },
    { label: 'Heading 3', power: 1 },
    { label: 'Heading 2', power: 2 },
    { label: 'Heading 1', power: 3 },
    { label: 'Display Hero', power: 4 }
  ].map(s => {
    const px = Math.round(baseSize * Math.pow(activeRatio, s.power));
    const rem = (px / 16).toFixed(3);
    return { ...s, px, rem };
  });

  const copyCss = (px: number, rem: string, idx: number) => {
    navigator.clipboard.writeText(`font-size: ${rem}rem; /* ${px}px */`);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <section id="utilities" style={{ marginTop: '5rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
          <span className="mono-label" style={{ color: '#3b82f6', fontWeight: 700 }}>Studio Utilities</span>
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
          Creative & Engineering Utilities
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
          Free typographic and design system tools built for independent builders.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Tool 1: Typographic Scale */}
        <div className="hub-card" style={{ gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ backgroundColor: 'var(--bg-card-muted)', padding: '0.45rem', borderRadius: '6px' }}>
                <Type size={18} className="text-zinc-300" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Modular Typographic Scale Generator</h3>
                <span className="mono-label" style={{ color: 'var(--text-muted)' }}>Design System Hierarchy</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {SCALE_PRESETS.map((p, idx) => (
                <button
                  key={p.name}
                  onClick={() => setSelectedRatioIndex(idx)}
                  style={{
                    backgroundColor: selectedRatioIndex === idx ? '#f4f4f5' : 'var(--bg-card-muted)',
                    color: selectedRatioIndex === idx ? '#09090b' : 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '5px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.35rem 0.65rem',
                    cursor: 'pointer'
                  }}
                >
                  {p.ratio}
                </button>
              ))}
            </div>
          </div>

          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Preset: <strong style={{ color: 'var(--text-secondary)' }}>{SCALE_PRESETS[selectedRatioIndex].name}</strong> — {SCALE_PRESETS[selectedRatioIndex].note}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {steps.map((s, idx) => (
              <div 
                key={s.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'var(--bg-page)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', minWidth: '180px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{s.label}</span>
                  <span className="mono-label" style={{ color: 'var(--text-muted)' }}>{s.px}px / {s.rem}rem</span>
                </div>

                <div style={{ flex: 1, padding: '0 1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                  <span style={{ fontSize: `${s.px}px`, fontWeight: s.power >= 2 ? 800 : s.power === 1 ? 600 : 400, letterSpacing: s.power >= 2 ? '-0.03em' : 'normal' }}>
                    Visual typography precision
                  </span>
                </div>

                <button
                  onClick={() => copyCss(s.px, s.rem, idx)}
                  title="Copy CSS font-size rule"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: copiedIndex === idx ? '#10b981' : 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem'
                  }}
                >
                  {copiedIndex === idx ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedIndex === idx ? 'Copied' : 'CSS'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Agency Operations Gateway (Direct Link to velotime.dg.tools/tools) */}
        <div className="hub-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ backgroundColor: 'var(--bg-card-muted)', padding: '0.45rem', borderRadius: '6px' }}>
                <Palette size={18} className="text-zinc-300" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Agency Operations Suite</h3>
                <span className="mono-label" style={{ color: '#10b981' }}>18 Financial Calculators</span>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Looking for studio financial modeling, rate cards, and billing tools? Explore VeloTime&apos;s free 18-tool operational suite:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <li>• Harvest &amp; Toggl CSV Timesheet Cleaner</li>
              <li>• Scope Creep Cost &amp; Revision Bleed Estimator</li>
              <li>• Billable Team Utilization &amp; Bench Cost Audit</li>
              <li>• Value-Based Pricing &amp; Proposal ROI Model</li>
              <li>• Overhead Multiplier &amp; Loaded Labor Rate</li>
            </ul>
          </div>

          <a 
            href="https://velotime.dg.tools/tools" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              backgroundColor: '#f4f4f5',
              color: '#09090b',
              fontWeight: 700,
              fontSize: '0.85rem',
              padding: '0.75rem',
              borderRadius: '6px',
              marginTop: '1.5rem',
              transition: 'all 0.15s ease'
            }}
          >
            <span>Open VeloTime Tools Suite (18 Tools)</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

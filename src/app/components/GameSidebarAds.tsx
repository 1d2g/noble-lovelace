'use client';

import React from 'react';
import { 
  ArrowUpRight, 
  Clock, 
  Calculator,
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';
import GoogleAdUnit from './GoogleAdUnit';

export default function GameSidebarAds() {
  return (
    <aside 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.25rem',
        width: '100%',
        maxWidth: '300px'
      }}
    >
      {/* Sponsor Label */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.25rem' }}>
        <span className="mono-label" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
          Tools &amp; Utilities
        </span>
        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>dg.tools</span>
      </div>

      {/* Ad Card 1: VeloTime Flagship Product */}
      <div 
        className="hub-card"
        style={{ 
          padding: '1.25rem', 
          backgroundColor: '#ffffff', 
          border: '1px solid #cbd5e1',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span 
              className="mono-label" 
              style={{ 
                color: '#059669', 
                backgroundColor: '#ecfdf5', 
                border: '1px solid #a7f3d0', 
                padding: '0.15rem 0.45rem', 
                borderRadius: '4px',
                fontSize: '0.65rem'
              }}
            >
              Featured Product
            </span>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)' }}>
              $5/user/mo
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '22px', height: '22px', backgroundColor: '#0f172a', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={13} color="#ffffff" />
            </div>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
              VeloTime
            </span>
          </div>

          <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.85rem' }}>
            The 10-second weekly spreadsheet matrix for creative agencies. Eliminate Friday timesheet friction without intrusive tracking spyware.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem', fontSize: '0.725rem', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#059669' }}></span>
              <span>Fast weekly keyboard entry</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#059669' }}></span>
              <span>Harvest &amp; Toggl CSV cleaner</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#059669' }}></span>
              <span>Invoicing &amp; team rate cards</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <a
            href="https://velotime.dg.tools/demo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#0f172a',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.775rem',
              padding: '0.6rem 0.85rem',
              borderRadius: '6px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.15)',
              transition: 'all 0.15s ease'
            }}
          >
            <span>Try Interactive Demo</span>
            <ArrowUpRight size={13} />
          </a>

          <a
            href="https://velotime.dg.tools"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.725rem',
              padding: '0.4rem',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem'
            }}
          >
            <span>Learn More about VeloTime</span>
          </a>
        </div>
      </div>

      {/* Alternate Revenue Stream: Google AdSense Unit */}
      <GoogleAdUnit slot="sidebar-display-1" format="rectangle" />

      {/* Ad Card 2: Free Agency Margin & Profitability Tools */}
      <div 
        className="hub-card"
        style={{ 
          padding: '1.25rem', 
          backgroundColor: '#ffffff', 
          border: '1px solid var(--border-subtle)',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <span 
            className="mono-label" 
            style={{ 
              color: '#2563eb', 
              backgroundColor: '#eff6ff', 
              border: '1px solid #bfdbfe', 
              padding: '0.15rem 0.45rem', 
              borderRadius: '4px',
              fontSize: '0.65rem'
            }}
          >
            Free Tool Suite
          </span>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)' }}>
            No Sign-up
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <div style={{ width: '22px', height: '22px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Calculator size={13} color="#2563eb" />
          </div>
          <h4 style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>
            Agency Calculators
          </h4>
        </div>

        <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.85rem' }}>
          Free interactive models to benchmark retainer burn rates, unbilled micro-task leakage, and timesheet friction across client projects.
        </p>

        <a
          href="https://velotime.dg.tools/tools"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: 'var(--bg-card-muted)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            fontWeight: 700,
            fontSize: '0.75rem',
            padding: '0.5rem 0.75rem',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            transition: 'all 0.15s ease'
          }}
        >
          <span>Explore Free Calculators</span>
          <ArrowUpRight size={12} />
        </a>
      </div>

      {/* Ad Card 3: Free CSV Timesheet Cleaner */}
      <div 
        className="hub-card"
        style={{ 
          padding: '1.25rem', 
          backgroundColor: '#ffffff', 
          border: '1px solid var(--border-subtle)',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <span 
            className="mono-label" 
            style={{ 
              color: '#7c3aed', 
              backgroundColor: '#f5f3ff', 
              border: '1px solid #ddd6fe', 
              padding: '0.15rem 0.45rem', 
              borderRadius: '4px',
              fontSize: '0.65rem'
            }}
          >
            Free Utility
          </span>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)' }}>
            100% Free
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <div style={{ width: '22px', height: '22px', backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileSpreadsheet size={13} color="#7c3aed" />
          </div>
          <h4 style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>
            CSV Timesheet Cleaner
          </h4>
        </div>

        <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.85rem' }}>
          Instantly sanitize and format messy CSV exports from Harvest or Toggl into clean, client-ready billing deliverables.
        </p>

        <a
          href="https://velotime.dg.tools/tools/csv-timesheet-cleaner"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: 'var(--bg-card-muted)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            fontWeight: 700,
            fontSize: '0.75rem',
            padding: '0.5rem 0.75rem',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            transition: 'all 0.15s ease'
          }}
        >
          <span>Launch CSV Cleaner</span>
          <ArrowUpRight size={12} />
        </a>
      </div>

      {/* Footer Note */}
      <div 
        style={{ 
          padding: '0.75rem 1rem', 
          backgroundColor: '#f8fafc', 
          border: '1px solid #e2e8f0', 
          borderRadius: '8px',
          textAlign: 'center'
        }}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          Built by Dustin Gray &bull;{' '}
          <a 
            href="mailto:dustin@dg.tools" 
            style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'underline' }}
          >
            dustin@dg.tools
          </a>
        </span>
      </div>
    </aside>
  );
}

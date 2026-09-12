'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  Bot,
  Mail,
  Zap,
  ArrowRight
} from 'lucide-react';

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
          Sponsored Foundry Units
        </span>
        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Ad</span>
      </div>

      {/* Ad Card 1: VeloTime Flagship Sponsor */}
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

      {/* Ad Card 2: UX Auditor Autonomous Agent */}
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
          Developer Agent
        </span>

        <h4 style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-primary)', marginTop: '0.5rem', marginBottom: '0.25rem' }}>
          UX Auditor Agent
        </h4>

        <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.85rem' }}>
          Autonomous browser subagent that stress-tests responsive SaaS applications for contrast, hierarchy, and WCAG accessibility faults.
        </p>

        <Link
          href="/#products"
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
          <span>Explore Product Suite</span>
          <ArrowRight size={12} />
        </Link>
      </div>

      {/* Ad Card 3: Direct Sponsorship Inquiry Slot */}
      <div 
        style={{ 
          padding: '1rem 1.15rem', 
          backgroundColor: '#f8fafc', 
          border: '1px dashed #cbd5e1', 
          borderRadius: '8px',
          textAlign: 'center'
        }}
      >
        <span className="mono-label" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
          Sponsorship Inquiries
        </span>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
          Advertise to 15,000+ Designers
        </div>
        <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', margin: '0.35rem 0 0.65rem 0', lineHeight: 1.4 }}>
          High-intent creative directors, brand designers, and studio owners visit daily.
        </p>
        <a
          href="mailto:dustin@dg.tools?subject=dg.tools%20Ad%20Sponsorship%20Inquiry"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.725rem',
            fontWeight: 700,
            color: '#0f172a',
            textDecoration: 'underline'
          }}
        >
          <Mail size={11} />
          <span>Inquire: dustin@dg.tools</span>
        </a>
      </div>
    </aside>
  );
}

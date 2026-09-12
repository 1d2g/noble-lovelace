'use client';

import Link from 'next/link';
import { ArrowUpRight, Terminal } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <Link href="/" className="nav-logo">
          <Terminal size={18} className="text-zinc-400" />
          <span>dg.tools</span>
        </Link>
        <span className="nav-badge">Foundry</span>
      </div>

      <div className="nav-links">
        <Link href="/#products" className="nav-link">
          Products
        </Link>
        <Link href="/games/logo-balance" className="nav-link">
          Logo Balance
        </Link>
        <Link href="/games" className="nav-link">
          All Games
        </Link>
        <Link href="/#utilities" className="nav-link">
          Utilities
        </Link>
        <a 
          href="https://velotime.dg.tools/demo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', color: 'var(--text-primary)', fontWeight: 700 }}
        >
          <span>VeloTime Demo</span>
          <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
        </a>
        <a 
          href="https://velotime.dg.tools/tools" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
        >
          <span>Agency Operations</span>
          <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
        </a>
        <a 
          href="https://velotime.dg.tools" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-cta"
        >
          <span>VeloTime App</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </nav>
  );
}

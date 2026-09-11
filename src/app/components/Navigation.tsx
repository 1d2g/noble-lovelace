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
        <a href="#products" className="nav-link">
          Products
        </a>
        <a href="#daily-game" className="nav-link">
          Daily Kerning
        </a>
        <a href="#utilities" className="nav-link">
          Utilities
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
          <span>VeloTime</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </nav>
  );
}

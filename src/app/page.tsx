import Link from 'next/link';
import { 
  ArrowUpRight, 
  ArrowRight,
  Clock, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  CheckCircle, 
  Layers, 
  Mail, 
  Phone, 
  ExternalLink,
  Zap,
  Grid
} from 'lucide-react';
import DesignUtilities from './components/DesignUtilities';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header style={{ padding: '3rem 0 4rem 0', maxWidth: '840px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '0.35rem 0.75rem', borderRadius: '9999px', marginBottom: '1.5rem' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
          <span className="mono-label" style={{ color: 'var(--text-secondary)' }}>
            Software Foundry • Dustin Gray
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
          Tools, agents, and daily experiments built with craft.
        </h1>

        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '720px' }}>
          An independent software lab creating lightweight B2B applications, autonomous developer agents, and daily creative challenges. Zero venture bloat. Zero invasive surveillance.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>3</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Active Products</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>18</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Free Calculators</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>$5/mo</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fair Flat Pricing</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>100%</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Independent &amp; Bootstrapped</div>
          </div>
        </div>
      </header>

      {/* Flagship Products Bento Grid */}
      <section id="products" style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <span className="mono-label" style={{ color: '#3b82f6', fontWeight: 700 }}>Flagship Suite</span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.2rem' }}>
              Software Offerings
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
          {/* Card 1: VeloTime (Featured Big Card) */}
          <div 
            className="hub-card" 
            style={{ 
              gridColumn: 'span 12', 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2.5rem',
              padding: '2.5rem',
              backgroundColor: '#101014'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="mono-label" style={{ color: '#10b981', fontWeight: 700 }}>Flagship SaaS</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>$5/user/month</span>
              </div>

              <h3 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
                VeloTime
              </h3>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                The 10-second weekly time tracking and invoicing matrix built specifically for boutique design agencies, consultancies, and creative studios.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={15} style={{ color: '#10b981' }} />
                  <span>10-Second Weekly Grid</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={15} style={{ color: '#10b981' }} />
                  <span>Zero Stopwatch Anxiety</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={15} style={{ color: '#10b981' }} />
                  <span>Zero Employee Spyware</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={15} style={{ color: '#10b981' }} />
                  <span>Harvest &amp; Toggl CSV Import</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a 
                  href="https://velotime.dg.tools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#f4f4f5',
                    color: '#09090b',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>Launch VeloTime</span>
                  <ArrowUpRight size={16} />
                </a>

                <a 
                  href="https://velotime.dg.tools/tools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <span>Explore Agency Operations Suite (18 Calculators)</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Visual Matrix Mockup Preview */}
            <div 
              style={{ 
                backgroundColor: '#09090b', 
                border: '1px solid var(--border-subtle)', 
                borderRadius: '8px', 
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  <span className="mono-label" style={{ color: 'var(--text-muted)' }}>VeloTime Weekly Grid Preview</span>
                  <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600 }}>Offline-First Sync</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.775rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr 1fr', color: 'var(--text-muted)', fontWeight: 600, paddingBottom: '0.25rem' }}>
                    <span>Project</span>
                    <span style={{ textAlign: 'center' }}>M</span>
                    <span style={{ textAlign: 'center' }}>T</span>
                    <span style={{ textAlign: 'center' }}>W</span>
                    <span style={{ textAlign: 'center' }}>T</span>
                    <span style={{ textAlign: 'center' }}>F</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr 1fr', padding: '0.5rem 0.25rem', backgroundColor: 'var(--bg-card)', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Acme Rebrand</span>
                    <span style={{ textAlign: 'center' }}>4.0</span>
                    <span style={{ textAlign: 'center' }}>4.0</span>
                    <span style={{ textAlign: 'center' }}>2.0</span>
                    <span style={{ textAlign: 'center' }}>6.0</span>
                    <span style={{ textAlign: 'center' }}>4.0</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr 1fr', padding: '0.5rem 0.25rem', backgroundColor: 'var(--bg-card)', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Nike Campaign</span>
                    <span style={{ textAlign: 'center' }}>4.0</span>
                    <span style={{ textAlign: 'center' }}>3.5</span>
                    <span style={{ textAlign: 'center' }}>6.0</span>
                    <span style={{ textAlign: 'center' }}>2.0</span>
                    <span style={{ textAlign: 'center' }}>4.0</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr 1fr', padding: '0.5rem 0.25rem', borderTop: '1px solid var(--border-subtle)', fontWeight: 700, color: 'var(--text-primary)' }}>
                    <span>Weekly Total</span>
                    <span style={{ textAlign: 'center' }}>8.0</span>
                    <span style={{ textAlign: 'center' }}>7.5</span>
                    <span style={{ textAlign: 'center' }}>8.0</span>
                    <span style={{ textAlign: 'center' }}>8.0</span>
                    <span style={{ textAlign: 'center' }}>8.0</span>
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                10 seconds on Friday. Zero floating timers. Instant CSV export.
              </div>
            </div>
          </div>

          {/* Card 2: UX Auditor Agent */}
          <div className="hub-card" style={{ gridColumn: 'span 6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="mono-label" style={{ color: '#3b82f6', fontWeight: 700 }}>Autonomous Agent</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Production Internal</span>
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              UX Auditor Agent
            </h3>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Autonomous design system sentinel and visual QA auditor. Inspects web application releases for broken responsive viewports, contrast regressions, and hardcoded design tokens before deployment.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span style={{ backgroundColor: 'var(--bg-card-muted)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Headless Playwright</span>
              <span style={{ backgroundColor: 'var(--bg-card-muted)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Gemini Vision Engine</span>
              <span style={{ backgroundColor: 'var(--bg-card-muted)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Token Linter</span>
            </div>
          </div>

          {/* Card 3: Quick-Matrix Extension */}
          <div className="hub-card" style={{ gridColumn: 'span 6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="mono-label" style={{ color: '#f59e0b', fontWeight: 700 }}>Extension Suite</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>In Development</span>
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              VeloTime Quick-Matrix Extension
            </h3>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Chrome and desktop companion allowing agency creatives to log billable hours directly from active browser tabs, Figma project links, and GitHub PRs without breaking creative flow.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span style={{ backgroundColor: 'var(--bg-card-muted)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Chrome Web Store</span>
              <span style={{ backgroundColor: 'var(--bg-card-muted)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Keyboard First</span>
              <span style={{ backgroundColor: 'var(--bg-card-muted)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Figma Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Games Section */}
      <section id="daily-games" style={{ marginTop: '5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <span className="mono-label" style={{ color: '#10b981', fontWeight: 700 }}>Daily Micro-Challenges</span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.2rem' }}>
              Daily Designer Games
            </h2>
          </div>

          <Link
            href="/games"
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <span>All Daily Games</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Featured Game: Logo Balance */}
          <div 
            className="hub-card" 
            style={{ 
              padding: '2rem', 
              backgroundColor: '#101014',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="mono-label" style={{ color: '#10b981', fontWeight: 700 }}>Featured Challenge</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Live on /games/logo-balance</span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                Logo Balance
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Can you eyeball the optical balance of iconic logos? Adjust the Google &ldquo;G&rdquo; crossbar, Mastercard overlapping spheres, Target bullseye stroke ratio, and Spotify wave angles.
              </p>

              {/* Mini visual teaser */}
              <div style={{ backgroundColor: '#000000', borderRadius: '8px', border: '1px solid var(--border-subtle)', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
                {/* Mini Google G snippet */}
                <svg viewBox="-50 -50 100 100" width="48" height="48">
                  <path d="M 34 -34 A 48 48 0 0 0 -34 -34 L -24 -24 A 34 34 0 0 1 24 -24 Z" fill="#EA4335" />
                  <path d="M -34 -34 A 48 48 0 0 0 -34 34 L -24 24 A 34 34 0 0 1 -24 -24 Z" fill="#FBBC05" />
                  <path d="M -34 34 A 48 48 0 0 0 34 34 L 24 24 A 34 34 0 0 1 -24 24 Z" fill="#34A853" />
                  <path d="M 34 34 A 48 48 0 0 0 48 0 L 48 3 L 0 3 L 0 -12 L 34 -12 A 34 34 0 0 1 24 24 Z" fill="#4285F4" />
                </svg>

                {/* Mini Mastercard spheres snippet */}
                <svg viewBox="-40 -25 80 50" width="60" height="38">
                  <circle cx="-16" cy="0" r="20" fill="#EB001B" />
                  <circle cx="16" cy="0" r="20" fill="#F79E1B" />
                  <clipPath id="miniClip">
                    <circle cx="-16" cy="0" r="20" />
                  </clipPath>
                  <circle cx="16" cy="0" r="20" fill="#FF5F00" clipPath="url(#miniClip)" />
                </svg>
              </div>
            </div>

            <Link
              href="/games/logo-balance"
              style={{
                backgroundColor: '#f4f4f5',
                color: '#09090b',
                fontSize: '0.875rem',
                fontWeight: 800,
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                transition: 'all 0.15s ease'
              }}
            >
              <span>Play Logo Balance</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Game 2: The Games Hub */}
          <div 
            className="hub-card" 
            style={{ 
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="mono-label" style={{ color: '#3b82f6', fontWeight: 700 }}>Micro-Challenges</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Dedicated Portal</span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                Designer Games Portal
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                A dedicated, distraction-free environment for quick 60-second daily challenges between creative sprints:
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={14} style={{ color: '#10b981' }} />
                  <span><strong>Logo Balance:</strong> Eyeball optical brand geometry</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={14} style={{ color: '#10b981' }} />
                  <span><strong>Daily Kerning:</strong> Balance tricky letter pairings</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={14} style={{ color: '#f59e0b' }} />
                  <span><strong>Hex Match:</strong> Daily color palette guesser (Coming Soon)</span>
                </li>
              </ul>
            </div>

            <Link
              href="/games"
              style={{
                backgroundColor: 'var(--bg-card-muted)',
                color: 'var(--text-primary)',
                fontSize: '0.875rem',
                fontWeight: 700,
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                transition: 'all 0.15s ease'
              }}
            >
              <span>Open Games Portal</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Utilities Component */}
      <DesignUtilities />

      {/* Studio Philosophy & Colophon */}
      <section id="about" style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <span className="mono-label" style={{ color: 'var(--text-muted)' }}>Foundry Philosophy</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0.5rem 0 1rem 0' }}>
              Why dg.tools exists
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Most modern software tools have succumbed to venture capital incentives: mandatory subscriptions with 40% annual price hikes, invasive employee tracking, and endless feature bloat designed to justify enterprise sales tiers.
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              dg.tools is built on opposite principles: small, obsessively fast tools that solve specific problems cleanly. Transparent pricing. Zero spyware. Respect for the user&apos;s attention.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '1.75rem' }}>
            <span className="mono-label" style={{ color: 'var(--text-muted)' }}>Founder Colophon</span>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0.5rem 0 0.25rem 0' }}>Dustin Gray</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>Independent Builder &amp; Designer</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                <Mail size={15} className="text-zinc-400" />
                <a href="mailto:dgray@dg.tools" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>
                  dgray@dg.tools
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                <Phone size={15} className="text-zinc-400" />
                <span>(310) 947-2977</span>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} dg.tools. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

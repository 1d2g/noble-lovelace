import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sliders, Type, Palette, Sparkles, ArrowLeft, ArrowUpRight } from 'lucide-react';
import GameSidebarAds from '../components/GameSidebarAds';

export const metadata: Metadata = {
  title: 'Daily Designer Games & Micro-Challenges | dg.tools',
  description: 'Daily interactive design, typography, and optical balance challenges for designers and creative developers.',
  openGraph: {
    title: 'Daily Designer Games | dg.tools',
    description: 'Fast, tactile micro-games for your coffee break. Test your optical precision, kerning, and color matching.',
    url: 'https://dg.tools/games',
  },
};

export default function GamesHubPage() {
  const games = [
    {
      title: 'Logo Balance',
      slug: '/games/logo-balance',
      status: 'Live & Playable',
      statusColor: '#10b981',
      description: 'Eyeball the optical geometry of famous logos. Adjust the Google crossbar, Mastercard circles, Target stroke ratio, and Spotify wave angles.',
      icon: 'Sliders',
      badge: 'Featured Daily Game'
    },
    {
      title: 'The Daily Kerning Challenge',
      slug: '/#daily-game',
      status: 'Live on Hub',
      statusColor: '#3b82f6',
      description: 'Optical letter-spacing puzzle. Drag the slider to optically balance negative space across difficult letter pairings and typefaces.',
      icon: 'Type',
      badge: 'Typography'
    },
    {
      title: 'Hex Match: Daily Palette',
      slug: '#',
      status: 'In Development',
      statusColor: '#f59e0b',
      description: 'A Wordle-style daily color theory game. Deduce the exact HEX code and shade of iconic cultural brand colors.',
      icon: 'Palette',
      badge: 'Coming Soon'
    }
  ];

  return (
    <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '1.5rem 0 6rem 0' }}>
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Main Games Column */}
        <div style={{ flex: '1 1 720px', maxWidth: '820px', minWidth: '320px' }}>
          {/* Top backlink */}
          <div style={{ marginBottom: '2rem' }}>
            <Link 
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--text-secondary)',
                fontSize: '0.825rem',
                fontWeight: 500,
                transition: 'color 0.15s ease'
              }}
            >
              <ArrowLeft size={14} />
              <span>dg.tools Hub</span>
            </Link>
          </div>

      <header style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '0.35rem 0.75rem', borderRadius: '9999px', marginBottom: '1rem' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
          <span className="mono-label" style={{ color: 'var(--text-secondary)' }}>
            Daily Creative Playground
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
          Daily Designer Games
        </h1>

        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '680px' }}>
          Quick, tactile 60-second micro-challenges for your coffee break. Train your eye on optical geometry, kerning balance, and brand proportions.
        </p>
      </header>

      {/* Game Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {games.map((g) => {
          const isPlayable = g.slug !== '#';
          return (
            <div 
              key={g.title}
              className="hub-card"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem',
                padding: '2rem'
              }}
            >
              <div style={{ flex: 1, minWidth: '280px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <span className="mono-label" style={{ color: g.statusColor, fontWeight: 700 }}>
                    {g.status}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{g.badge}</span>
                </div>

                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                  {g.title}
                </h2>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, maxWidth: '540px' }}>
                  {g.description}
                </p>
              </div>

              <div>
                {isPlayable ? (
                  <Link
                    href={g.slug}
                    style={{
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      fontSize: '0.875rem',
                      fontWeight: 800,
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.15s ease',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                    }}
                  >
                    <span>Play Now</span>
                    <ArrowRight size={15} />
                  </Link>
                ) : (
                  <span
                    style={{
                      backgroundColor: 'var(--bg-card-muted)',
                      color: 'var(--text-muted)',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      padding: '0.65rem 1.25rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-subtle)',
                      display: 'inline-block'
                    }}
                  >
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* VeloTime Subtle Callout */}
      <div 
        style={{ 
          marginTop: '4rem', 
          padding: '2rem', 
          backgroundColor: 'var(--bg-card)', 
          border: '1px solid var(--border-subtle)', 
          borderRadius: '12px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}
      >
        <div>
          <span className="mono-label" style={{ color: 'var(--text-muted)' }}>From the same foundry</span>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '0.35rem' }}>
            VeloTime: Time Tracking for Design Studios
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem', maxWidth: '500px' }}>
            Built for shops that appreciate clean craft. 10-second weekly matrix, flat $5/month, zero employee tracking spyware.
          </p>
        </div>

        <a
          href="https://velotime.dg.tools/demo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#0f172a',
            color: '#ffffff',
            fontSize: '0.85rem',
            fontWeight: 800,
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.12)'
          }}
        >
          <span>Try 10-Sec Demo</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>

    {/* Responsive Side Ads Column */}
    <div style={{ flex: '0 0 290px', width: '290px', position: 'sticky', top: '5rem' }}>
      <GameSidebarAds />
    </div>
  </div>
</div>
);
}

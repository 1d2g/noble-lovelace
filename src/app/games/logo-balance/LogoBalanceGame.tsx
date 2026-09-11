'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  RefreshCw, 
  Share2, 
  ArrowLeft, 
  ArrowRight, 
  Sliders, 
  Eye, 
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Check
} from 'lucide-react';

interface LogoChallenge {
  id: string;
  brandName: string;
  taskPrompt: string;
  designerInsight: string;
  min: number;
  max: number;
  step: number;
  targetValue: number;
  tolerance: number; // For 100% calculation
  unit: string;
  renderLogo: (value: number, showOfficial: boolean) => React.ReactNode;
}

const CHALLENGES: LogoChallenge[] = [
  {
    id: 'google-g',
    brandName: 'Google "G"',
    taskPrompt: 'Adjust the vertical position of the blue crossbar until the "G" feels optically balanced.',
    designerInsight: 'Google famously broke geometric circularity for optical balance. If the crossbar were placed at the exact geometric midline (0px), the heavy red and yellow arches would make the logo feel like it was falling backwards. The crossbar is shifted slightly downward (+6px) to ground the visual weight.',
    min: -24,
    max: 24,
    step: 1,
    targetValue: 6,
    tolerance: 30,
    unit: 'px',
    renderLogo: (value, showOfficial) => {
      const activeY = showOfficial ? 6 : value;
      // Dimensions: 200x200 viewBox="-100 -100 200 200"
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220" style={{ overflow: 'visible' }}>
          {/* Red Arc (Top) */}
          <path
            d="M 68 -68 A 96 96 0 0 0 -68 -68 L -48 -48 A 68 68 0 0 1 48 -48 Z"
            fill="#EA4335"
          />
          {/* Yellow Arc (Left) */}
          <path
            d="M -68 -68 A 96 96 0 0 0 -68 68 L -48 48 A 68 68 0 0 1 -48 -48 Z"
            fill="#FBBC05"
          />
          {/* Green Arc (Bottom) */}
          <path
            d="M -68 68 A 96 96 0 0 0 68 68 L 48 48 A 68 68 0 0 1 -48 48 Z"
            fill="#34A853"
          />
          {/* Blue Section: Right curve and horizontal crossbar */}
          <path
            d={`M 68 68 A 96 96 0 0 0 96 0 L 96 ${activeY} L 0 ${activeY} L 0 ${activeY - 30} L 68 ${activeY - 30} A 68 68 0 0 1 48 48 Z`}
            fill="#4285F4"
            style={{ transition: 'd 0.05s ease-out' }}
          />

          {/* Reference baseline marker when evaluated */}
          {showOfficial && (
            <line 
              x1="-80" 
              y1="6" 
              x2="80" 
              y2="6" 
              stroke="#10B981" 
              strokeWidth="2" 
              strokeDasharray="4 4" 
            />
          )}
        </svg>
      );
    }
  },
  {
    id: 'mastercard',
    brandName: 'Mastercard Spheres',
    taskPrompt: 'Adjust the center-to-center spacing of the two spheres to recreate the authentic interlocking lens.',
    designerInsight: 'In Pentagram\'s rebrand of Mastercard, the overlap is governed by a precise golden proportion. The distance between circle centers (124px) creates an overlapping orange almond whose width is exactly 62% of a single circle\'s diameter, achieving perfect balance without overwhelming either brand color.',
    min: 80,
    max: 170,
    step: 1,
    targetValue: 124,
    tolerance: 50,
    unit: 'px',
    renderLogo: (value, showOfficial) => {
      const activeDist = showOfficial ? 124 : value;
      const radius = 64;
      const x1 = -activeDist / 2;
      const x2 = activeDist / 2;

      return (
        <svg viewBox="-140 -80 280 160" width="280" height="160">
          <defs>
            <clipPath id="leftCircleClip">
              <circle cx={x1} cy="0" r={radius} />
            </clipPath>
          </defs>

          {/* Red Circle */}
          <circle cx={x1} cy="0" r={radius} fill="#EB001B" />

          {/* Yellow Circle */}
          <circle cx={x2} cy="0" r={radius} fill="#F79E1B" />

          {/* Overlap Lens (Clipped intersection in Orange) */}
          <circle 
            cx={x2} 
            cy="0" 
            r={radius} 
            fill="#FF5F00" 
            clipPath="url(#leftCircleClip)" 
          />

          {showOfficial && (
            <>
              <line x1={-62} y1="-75" x2={-62} y2="75" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1={62} y1="-75" x2={62} y2="75" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'target-bullseye',
    brandName: 'Target Bullseye',
    taskPrompt: 'Adjust the negative white ring width so the bullseye achieves the official 1:1:1 optical stroke ratio.',
    designerInsight: 'The Target bullseye is defined by a strict 1:1:1 ratio: the outer red band thickness, the middle white space thickness, and the inner red circle radius are all identical (33.3% each). White on red always experiences optical blooming (white appears fatter than it is), so finding the true ratio requires trusting geometry over eyes.',
    min: 15,
    max: 65,
    step: 1,
    targetValue: 33,
    tolerance: 30,
    unit: '%',
    renderLogo: (value, showOfficial) => {
      const activeWhitePct = showOfficial ? 33 : value;
      // Total radius = 90.
      // Target: inner radius = 30, middle white ring thickness = 30, outer red ring thickness = 30.
      const innerRadius = 90 * (1 - (activeWhitePct / 100)) * 0.5;
      const whiteOuterRadius = innerRadius + (90 * (activeWhitePct / 100));

      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          {/* Outer Red Circle */}
          <circle cx="0" cy="0" r="90" fill="#CC0000" />

          {/* Middle White Ring */}
          <circle cx="0" cy="0" r={Math.min(88, whiteOuterRadius)} fill="#FFFFFF" />

          {/* Inner Red Bullseye Disc */}
          <circle cx="0" cy="0" r={Math.max(10, innerRadius)} fill="#CC0000" />
        </svg>
      );
    }
  },
  {
    id: 'spotify-waves',
    brandName: 'Spotify Soundwaves',
    taskPrompt: 'Adjust the counter-clockwise rotation angle of the soundwaves inside the green badge.',
    designerInsight: 'Spotify\'s soundwaves are not horizontally level. Daniel Ek and the founding team tilted them precisely 16 degrees counter-clockwise to convey forward momentum and musical rhythm. A horizontal wave looks stagnant and static.',
    min: 0,
    max: 38,
    step: 0.5,
    targetValue: 16.5,
    tolerance: 20,
    unit: '°',
    renderLogo: (value, showOfficial) => {
      const activeAngle = showOfficial ? 16.5 : value;

      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          {/* Green Background Circle */}
          <circle cx="0" cy="0" r="90" fill="#1ED760" />

          {/* 3 Rotated Waves */}
          <g transform={`rotate(-${activeAngle})`}>
            {/* Top Wave */}
            <path
              d="M -54 -24 C -15 -38, 25 -38, 56 -20"
              fill="none"
              stroke="#121212"
              strokeWidth="15"
              strokeLinecap="round"
            />
            {/* Middle Wave */}
            <path
              d="M -46 4 C -10 -8, 24 -8, 48 8"
              fill="none"
              stroke="#121212"
              strokeWidth="13"
              strokeLinecap="round"
            />
            {/* Bottom Wave */}
            <path
              d="M -38 30 C -8 20, 20 20, 40 32"
              fill="none"
              stroke="#121212"
              strokeWidth="11"
              strokeLinecap="round"
            />
          </g>
        </svg>
      );
    }
  }
];

export default function LogoBalanceGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeChallenge = CHALLENGES[currentIndex];

  // Initial user slider position set to a randomized inaccurate start
  const [sliderValue, setSliderValue] = useState<number>(() => {
    const spread = (activeChallenge.max - activeChallenge.min) * 0.35;
    return Math.round(activeChallenge.targetValue + (Math.random() > 0.5 ? spread : -spread));
  });

  const [hasChecked, setHasChecked] = useState(false);
  const [viewMode, setViewMode] = useState<'user' | 'official'>('user');
  const [copiedShare, setCopiedShare] = useState(false);

  const calculateScore = () => {
    const diff = Math.abs(sliderValue - activeChallenge.targetValue);
    const score = Math.max(0, Math.round(100 - (diff / activeChallenge.tolerance) * 100));
    return Math.min(100, score);
  };

  const currentScore = calculateScore();

  const handleNextChallenge = () => {
    const nextIdx = (currentIndex + 1) % CHALLENGES.length;
    const nextChallenge = CHALLENGES[nextIdx];
    setCurrentIndex(nextIdx);
    setHasChecked(false);
    setViewMode('user');
    const spread = (nextChallenge.max - nextChallenge.min) * 0.35;
    setSliderValue(Math.round(nextChallenge.targetValue + (Math.random() > 0.5 ? spread : -spread)));
  };

  const handleReset = () => {
    setHasChecked(false);
    setViewMode('user');
  };

  const handleShare = () => {
    const text = `Logo Balance #0${currentIndex + 1}: ${currentScore}% optical precision on ${activeChallenge.brandName}.\nPlay on https://dg.tools/games/logo-balance`;
    navigator.clipboard.writeText(text);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '1rem 0 5rem 0' }}>
      {/* Top Breadcrumb & Status */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className="mono-label" style={{ color: '#10b981', fontWeight: 700 }}>
            Daily Challenge
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Challenge {currentIndex + 1} of {CHALLENGES.length}
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '0.5rem' }}>
          Logo Balance: {activeChallenge.brandName}
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {activeChallenge.taskPrompt}
        </p>
      </div>

      {/* Interactive Arena */}
      <div 
        className="hub-card" 
        style={{ 
          padding: '2.5rem 2rem', 
          backgroundColor: '#0d0d11',
          border: '1px solid var(--border-subtle)'
        }}
      >
        {/* Toggle Mode Bar if checked */}
        {hasChecked && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ backgroundColor: 'var(--bg-page)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '0.25rem', display: 'inline-flex', gap: '0.25rem' }}>
              <button
                onClick={() => setViewMode('user')}
                style={{
                  backgroundColor: viewMode === 'user' ? '#f4f4f5' : 'transparent',
                  color: viewMode === 'user' ? '#09090b' : 'var(--text-secondary)',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.775rem',
                  fontWeight: 700,
                  padding: '0.35rem 0.85rem',
                  cursor: 'pointer'
                }}
              >
                Your Balance ({sliderValue}{activeChallenge.unit})
              </button>
              <button
                onClick={() => setViewMode('official')}
                style={{
                  backgroundColor: viewMode === 'official' ? '#10b981' : 'transparent',
                  color: viewMode === 'official' ? '#09090b' : 'var(--text-secondary)',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.775rem',
                  fontWeight: 700,
                  padding: '0.35rem 0.85rem',
                  cursor: 'pointer'
                }}
              >
                Official Spec ({activeChallenge.targetValue}{activeChallenge.unit})
              </button>
            </div>
          </div>
        )}

        {/* Vector Canvas Container */}
        <div 
          style={{ 
            backgroundColor: '#000000', 
            borderRadius: '12px', 
            border: '1px solid var(--border-subtle)',
            padding: '3rem 2rem', 
            minHeight: '280px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            position: 'relative',
            marginBottom: '2.5rem'
          }}
        >
          {activeChallenge.renderLogo(sliderValue, viewMode === 'official')}

          <div style={{ position: 'absolute', bottom: '0.75rem', right: '1rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            {viewMode === 'official' ? 'Official Brand Geometry' : 'Interactive Optical Canvas'}
          </div>
        </div>

        {/* Controls */}
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Optical Adjustment</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'monospace' }}>
              {sliderValue > 0 && activeChallenge.unit === 'px' ? `+${sliderValue}${activeChallenge.unit}` : `${sliderValue}${activeChallenge.unit}`}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <button
              onClick={() => setSliderValue(v => Math.max(activeChallenge.min, v - activeChallenge.step))}
              disabled={hasChecked}
              style={{
                backgroundColor: 'var(--bg-card-muted)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                width: '36px',
                height: '36px',
                cursor: hasChecked ? 'default' : 'pointer',
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
              min={activeChallenge.min}
              max={activeChallenge.max}
              step={activeChallenge.step}
              value={sliderValue}
              onChange={(e) => {
                setSliderValue(parseFloat(e.target.value));
                if (hasChecked) {
                  setHasChecked(false);
                  setViewMode('user');
                }
              }}
              disabled={hasChecked}
              style={{ flex: 1 }}
            />

            <button
              onClick={() => setSliderValue(v => Math.min(activeChallenge.max, v + activeChallenge.step))}
              disabled={hasChecked}
              style={{
                backgroundColor: 'var(--bg-card-muted)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                width: '36px',
                height: '36px',
                cursor: hasChecked ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700
              }}
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
            {!hasChecked ? (
              <button
                onClick={() => setHasChecked(true)}
                style={{
                  backgroundColor: '#f4f4f5',
                  color: '#09090b',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  padding: '0.75rem 2rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.15s ease'
                }}
              >
                <CheckCircle2 size={16} />
                <span>Check Balance</span>
              </button>
            ) : (
              <>
                <button
                  onClick={handleNextChallenge}
                  style={{
                    backgroundColor: '#f4f4f5',
                    color: '#09090b',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>Next Challenge</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={handleShare}
                  style={{
                    backgroundColor: 'var(--bg-card-muted)',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  {copiedShare ? <Check size={14} style={{ color: '#10b981' }} /> : <Share2 size={14} />}
                  <span>{copiedShare ? 'Copied' : 'Share Score'}</span>
                </button>

                <button
                  onClick={handleReset}
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                    padding: '0.75rem 1rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Retry
                </button>
              </>
            )}
          </div>
        </div>

        {/* Evaluation Insight Card */}
        {hasChecked && (
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
                  {currentScore >= 95 ? 'Master Creative Director Eye' : currentScore >= 85 ? 'High Optical Intuition' : currentScore >= 70 ? 'Competent Eye' : 'Needs Geometric Training'}
                </span>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {currentScore}% Optical Accuracy
                </div>
              </div>

              <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <div>Target: <strong style={{ color: 'var(--text-primary)' }}>{activeChallenge.targetValue}{activeChallenge.unit}</strong></div>
                <div>Your guess: <strong style={{ color: 'var(--text-primary)' }}>{sliderValue}{activeChallenge.unit}</strong></div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '0.75rem' }}>
              {activeChallenge.designerInsight}
            </p>
          </div>
        )}
      </div>

      {/* Cross-Promotion / VeloTime Subtle Footer */}
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
            VeloTime: Time Tracking for Designers
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
            Built with the same focus on craft. Fast weekly grid, $5/user/month, zero spyware.
          </p>
        </div>

        <a
          href="https://velotime.dg.tools"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#f4f4f5',
            color: '#09090b',
            fontSize: '0.825rem',
            fontWeight: 700,
            padding: '0.6rem 1.2rem',
            borderRadius: '6px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <span>Try VeloTime Demo</span>
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

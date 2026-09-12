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

function degToRad(deg: number) { 
  return (deg * Math.PI) / 180; 
}

function pt(deg: number, r: number): [number, number] {
  const rad = degToRad(deg);
  return [
    Math.round(r * Math.cos(rad) * 10) / 10, 
    Math.round(-r * Math.sin(rad) * 10) / 10
  ];
}

function arcPath(a1: number, a2: number, rIn: number, rOut: number): string {
  let delta = (a2 - a1) % 360;
  if (delta < 0) delta += 360;
  const large = delta > 180 ? 1 : 0;
  const [x1, y1] = pt(a1, rOut);
  const [x2, y2] = pt(a2, rOut);
  const [x3, y3] = pt(a2, rIn);
  const [x4, y4] = pt(a1, rIn);
  return `M ${x1} ${y1} A ${rOut} ${rOut} 0 ${large} 0 ${x2} ${y2} L ${x3} ${y3} A ${rIn} ${rIn} 0 ${large} 1 ${x4} ${y4} Z`;
}

interface SingleSliderChallenge {
  type: 'single';
  id: string;
  brandName: string;
  taskPrompt: string;
  designerInsight: string;
  min: number;
  max: number;
  step: number;
  targetValue: number;
  tolerance: number;
  unit: string;
  renderLogo: (value: number, showOfficial: boolean) => React.ReactNode;
}

interface MultiSliderParameter {
  id: string;
  label: string;
  colorA: string;
  colorB: string;
  min: number;
  max: number;
  step: number;
  targetValue: number;
  tolerance: number;
}

interface MultiSliderChallenge {
  type: 'multi';
  id: string;
  brandName: string;
  taskPrompt: string;
  designerInsight: string;
  parameters: MultiSliderParameter[];
  renderLogo: (values: Record<string, number>, showOfficial: boolean) => React.ReactNode;
}

type LogoChallenge = SingleSliderChallenge | MultiSliderChallenge;

const CHALLENGES: LogoChallenge[] = [
  {
    type: 'multi',
    id: 'google-g',
    brandName: 'Google "G" Color Seams',
    taskPrompt: 'Adjust the 3 color transition lines where Red meets Yellow, Yellow meets Green, and Green meets Blue.',
    designerInsight: 'Google’s 2015 brand redesign purposefully engineered an open letterform with a distinctive negative-space mouth above the horizontal crossbar. The color boundaries are optically balanced: Red meets Yellow in the top-left at 140° for a welcoming header arch, Yellow meets Green at 218° to balance warm and cool tones, and Green meets Blue at 315° where the lower curve sweeps into the crossbar.',
    parameters: [
      {
        id: 'redYellow',
        label: 'Red / Yellow Seam (Top-Left)',
        colorA: '#EA4335',
        colorB: '#FBBC05',
        min: 115,
        max: 165,
        step: 1,
        targetValue: 140,
        tolerance: 25
      },
      {
        id: 'yellowGreen',
        label: 'Yellow / Green Seam (Bottom-Left)',
        colorA: '#FBBC05',
        colorB: '#34A853',
        min: 195,
        max: 245,
        step: 1,
        targetValue: 218,
        tolerance: 25
      },
      {
        id: 'greenBlue',
        label: 'Green / Blue Seam (Bottom-Right)',
        colorA: '#34A853',
        colorB: '#4285F4',
        min: 290,
        max: 335,
        step: 1,
        targetValue: 315,
        tolerance: 25
      }
    ],
    renderLogo: (values, showOfficial) => {
      const aRedYellow = showOfficial ? 140 : values['redYellow'];
      const aYellowGreen = showOfficial ? 218 : values['yellowGreen'];
      const aGreenBlue = showOfficial ? 315 : values['greenBlue'];

      const rIn = 52;
      const rOut = 96;
      const barTop = -22;
      const barBottom = 22;

      // Authentic Google G gap: Red ends at 44 degrees on top-right
      const fixedRedStart = 44;

      const pathRed = arcPath(fixedRedStart, aRedYellow, rIn, rOut);
      const pathYellow = arcPath(aRedYellow, aYellowGreen, rIn, rOut);
      const pathGreen = arcPath(aYellowGreen, aGreenBlue, rIn, rOut);

      // Blue covers from Green seam up to the horizontal crossbar (with open gap above barTop)
      const xBarTopOut = Math.round(Math.sqrt(rOut * rOut - barTop * barTop) * 10) / 10;
      const xBarBottomIn = Math.round(Math.sqrt(rIn * rIn - barBottom * barBottom) * 10) / 10;
      const [xGOut, yGOut] = pt(aGreenBlue, rOut);
      const [xGIn, yGIn] = pt(aGreenBlue, rIn);

      const pathBlue = `M ${xGOut} ${yGOut} A ${rOut} ${rOut} 0 0 0 ${xBarTopOut} ${barTop} L 0 ${barTop} L 0 ${barBottom} L ${xBarBottomIn} ${barBottom} A ${rIn} ${rIn} 0 0 1 ${xGIn} ${yGIn} Z`;

      // Line endpoints for seam indicators
      const seamLine = (deg: number, color: string) => {
        const [x1, y1] = pt(deg, rIn - 4);
        const [x2, y2] = pt(deg, rOut + 6);
        return (
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      };

      return (
        <svg viewBox="-120 -120 240 240" width="240" height="240" style={{ overflow: 'visible' }}>
          <defs>
            <clipPath id="googleOuterCircle">
              <circle cx="0" cy="0" r="96" />
            </clipPath>
          </defs>

          {/* Color Ring Arcs with Open Mouth Gap */}
          <g clipPath="url(#googleOuterCircle)">
            {/* Red Arc */}
            <path d={pathRed} fill="#EA4335" />
            {/* Yellow Arc */}
            <path d={pathYellow} fill="#FBBC05" />
            {/* Green Arc */}
            <path d={pathGreen} fill="#34A853" />
            {/* Blue Arc & Crossbar (Leaves open gap above crossbar) */}
            <path d={pathBlue} fill="#4285F4" />
          </g>

          {/* 3 Active Seam Indicator Lines */}
          {seamLine(aRedYellow, '#ffffff')}
          {seamLine(aYellowGreen, '#ffffff')}
          {seamLine(aGreenBlue, '#ffffff')}

          {/* Official Spec Reference Radial Lines */}
          {showOfficial && (
            <>
              {seamLine(140, '#10B981')}
              {seamLine(218, '#10B981')}
              {seamLine(315, '#10B981')}
            </>
          )}
        </svg>
      );
    }
  },
  {
    type: 'single',
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
    type: 'single',
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
    type: 'single',
    id: 'spotify-waves',
    brandName: 'Spotify Soundwaves',
    taskPrompt: 'Adjust the counter-clockwise rotation angle of the soundwaves inside the green badge.',
    designerInsight: 'Spotify\'s soundwaves are not horizontally level. Daniel Ek and the founding team tilted them precisely 16.5 degrees counter-clockwise to convey forward momentum and musical rhythm. A horizontal wave looks stagnant and static.',
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

  // Single slider state
  const [singleValue, setSingleValue] = useState<number>(() => {
    if (activeChallenge.type === 'single') {
      const spread = (activeChallenge.max - activeChallenge.min) * 0.35;
      return Math.round(activeChallenge.targetValue + (Math.random() > 0.5 ? spread : -spread));
    }
    return 0;
  });

  // Multi slider state (e.g. for Google 4 seams)
  const [multiValues, setMultiValues] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    if (activeChallenge.type === 'multi') {
      activeChallenge.parameters.forEach(p => {
        const offset = Math.round((Math.random() - 0.5) * 24);
        initial[p.id] = p.targetValue + (offset === 0 ? 12 : offset);
      });
    }
    return initial;
  });

  const [hasChecked, setHasChecked] = useState(false);
  const [viewMode, setViewMode] = useState<'user' | 'official'>('user');
  const [copiedShare, setCopiedShare] = useState(false);

  // Score Calculation
  const calculateTotalScore = () => {
    if (activeChallenge.type === 'single') {
      const diff = Math.abs(singleValue - activeChallenge.targetValue);
      const score = Math.max(0, Math.round(100 - (diff / activeChallenge.tolerance) * 100));
      return Math.min(100, score);
    } else {
      let sumScores = 0;
      activeChallenge.parameters.forEach(p => {
        const val = multiValues[p.id] ?? p.targetValue;
        const diff = Math.abs(val - p.targetValue);
        const pScore = Math.max(0, Math.round(100 - (diff / p.tolerance) * 100));
        sumScores += Math.min(100, pScore);
      });
      return Math.round(sumScores / activeChallenge.parameters.length);
    }
  };

  const totalScore = calculateTotalScore();

  const handleNextChallenge = () => {
    const nextIdx = (currentIndex + 1) % CHALLENGES.length;
    const nextChallenge = CHALLENGES[nextIdx];
    setCurrentIndex(nextIdx);
    setHasChecked(false);
    setViewMode('user');

    if (nextChallenge.type === 'single') {
      const spread = (nextChallenge.max - nextChallenge.min) * 0.35;
      setSingleValue(Math.round(nextChallenge.targetValue + (Math.random() > 0.5 ? spread : -spread)));
    } else {
      const nextMulti: Record<string, number> = {};
      nextChallenge.parameters.forEach(p => {
        const offset = Math.round((Math.random() - 0.5) * 24);
        nextMulti[p.id] = p.targetValue + (offset === 0 ? 12 : offset);
      });
      setMultiValues(nextMulti);
    }
  };

  const handleReset = () => {
    setHasChecked(false);
    setViewMode('user');
  };

  const handleShare = () => {
    const text = `Logo Balance: ${totalScore}% optical precision on ${activeChallenge.brandName}.\nPlay on https://dg.tools/games/logo-balance`;
    navigator.clipboard.writeText(text);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div style={{ maxWidth: '840px', margin: '0 auto', padding: '1rem 0 5rem 0' }}>
      {/* Top Breadcrumb & Status */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <Link 
          href="/games"
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
          <span>Games Portal</span>
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
                Your Balance
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
                Official Spec (Green Overlay)
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
          {activeChallenge.type === 'single'
            ? activeChallenge.renderLogo(singleValue, viewMode === 'official')
            : activeChallenge.renderLogo(multiValues, viewMode === 'official')}

          <div style={{ position: 'absolute', bottom: '0.75rem', right: '1rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            {viewMode === 'official' ? 'Official Brand Geometry' : 'Interactive Optical Canvas'}
          </div>
        </div>

        {/* Controls Section */}
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          {activeChallenge.type === 'single' ? (
            /* Single Slider Controls */
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Optical Adjustment</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'monospace' }}>
                  {singleValue > 0 && activeChallenge.unit === 'px' ? `+${singleValue}${activeChallenge.unit}` : `${singleValue}${activeChallenge.unit}`}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <button
                  onClick={() => setSingleValue(v => Math.max(activeChallenge.min, v - activeChallenge.step))}
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
                  value={singleValue}
                  onChange={(e) => {
                    setSingleValue(parseFloat(e.target.value));
                    if (hasChecked) {
                      setHasChecked(false);
                      setViewMode('user');
                    }
                  }}
                  disabled={hasChecked}
                  style={{ flex: 1 }}
                />

                <button
                  onClick={() => setSingleValue(v => Math.min(activeChallenge.max, v + activeChallenge.step))}
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
            </div>
          ) : (
            /* Multi Slider Controls for Google 4 Seams */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {activeChallenge.parameters.map((param) => {
                const currentVal = multiValues[param.id] ?? param.targetValue;
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: param.colorA, display: 'inline-block' }}></span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/</span>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: param.colorB, display: 'inline-block' }}></span>
                        </div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {param.label}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {hasChecked && (
                          <span className="mono-label" style={{ color: paramAccuracy >= 90 ? '#10b981' : paramAccuracy >= 75 ? '#f59e0b' : '#ef4444' }}>
                            {paramAccuracy}%
                          </span>
                        )}
                        <span style={{ fontSize: '0.85rem', fontWeight: 800, fontFamily: 'monospace', color: 'var(--text-primary)' }}>
                          {currentVal}°
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <button
                        onClick={() => setMultiValues(prev => ({
                          ...prev,
                          [param.id]: Math.max(param.min, (prev[param.id] ?? param.targetValue) - param.step)
                        }))}
                        disabled={hasChecked}
                        style={{
                          backgroundColor: 'var(--bg-card-muted)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '5px',
                          width: '30px',
                          height: '30px',
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
                        min={param.min}
                        max={param.max}
                        step={param.step}
                        value={currentVal}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          setMultiValues(prev => ({ ...prev, [param.id]: val }));
                          if (hasChecked) {
                            setHasChecked(false);
                            setViewMode('user');
                          }
                        }}
                        disabled={hasChecked}
                        style={{ flex: 1 }}
                      />

                      <button
                        onClick={() => setMultiValues(prev => ({
                          ...prev,
                          [param.id]: Math.min(param.max, (prev[param.id] ?? param.targetValue) + param.step)
                        }))}
                        disabled={hasChecked}
                        style={{
                          backgroundColor: 'var(--bg-card-muted)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '5px',
                          width: '30px',
                          height: '30px',
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
                  </div>
                );
              })}
            </div>
          )}

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
                <span className="mono-label" style={{ color: totalScore >= 90 ? '#10b981' : totalScore >= 75 ? '#f59e0b' : '#ef4444' }}>
                  {totalScore >= 95 ? 'Master Creative Director Eye' : totalScore >= 85 ? 'High Optical Intuition' : totalScore >= 70 ? 'Competent Eye' : 'Needs Geometric Calibration'}
                </span>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {totalScore}% Overall Accuracy
                </div>
              </div>

              {activeChallenge.type === 'single' && (
                <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <div>Target: <strong style={{ color: 'var(--text-primary)' }}>{activeChallenge.targetValue}{activeChallenge.unit}</strong></div>
                  <div>Your guess: <strong style={{ color: 'var(--text-primary)' }}>{singleValue}{activeChallenge.unit}</strong></div>
                </div>
              )}
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

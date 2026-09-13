import React from 'react';
import { DayChallenge } from './types';

export function degToRad(deg: number) { 
  return (deg * Math.PI) / 180; 
}

export function pt(deg: number, r: number): [number, number] {
  const rad = degToRad(deg);
  return [
    Math.round(r * Math.cos(rad) * 10) / 10, 
    Math.round(-r * Math.sin(rad) * 10) / 10
  ];
}

export function arcPath(a1: number, a2: number, rIn: number, rOut: number): string {
  let delta = (a2 - a1) % 360;
  if (delta < 0) delta += 360;
  const large = delta > 180 ? 1 : 0;
  const [x1, y1] = pt(a1, rOut);
  const [x2, y2] = pt(a2, rOut);
  const [x3, y3] = pt(a2, rIn);
  const [x4, y4] = pt(a1, rIn);
  return `M ${x1} ${y1} A ${rOut} ${rOut} 0 ${large} 0 ${x2} ${y2} L ${x3} ${y3} A ${rIn} ${rIn} 0 ${large} 1 ${x4} ${y4} Z`;
}

function getVal(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean, paramId: string): number {
  const param = challenge.parameters.find(p => p.id === paramId);
  if (!param) return 0;
  return showOfficial ? param.targetValue : (userValues[paramId] ?? param.targetValue);
}

// =========================================================================
// 1. RADIAL SEAMS & QUADRANTS
// =========================================================================

export function renderGoogleG(values: Record<string, number>, showOfficial: boolean) {
  const aRedYellow = showOfficial ? 140 : (values['redYellow'] ?? 140);
  const aYellowGreen = showOfficial ? 218 : (values['yellowGreen'] ?? 218);
  const aGreenBlue = showOfficial ? 315 : (values['greenBlue'] ?? 315);

  const rIn = 52;
  const rOut = 96;
  const barTop = -22;
  const barBottom = 22;
  const fixedRedStart = 44;

  const pathRed = arcPath(fixedRedStart, aRedYellow, rIn, rOut);
  const pathYellow = arcPath(aRedYellow, aYellowGreen, rIn, rOut);
  const pathGreen = arcPath(aYellowGreen, aGreenBlue, rIn, rOut);

  const xBarTopOut = Math.round(Math.sqrt(rOut * rOut - barTop * barTop) * 10) / 10;
  const xBarBottomIn = Math.round(Math.sqrt(rIn * rIn - barBottom * barBottom) * 10) / 10;
  const [xGOut, yGOut] = pt(aGreenBlue, rOut);
  const [xGIn, yGIn] = pt(aGreenBlue, rIn);

  const pathBlue = `M ${xGOut} ${yGOut} A ${rOut} ${rOut} 0 0 0 ${xBarTopOut} ${barTop} L 0 ${barTop} L 0 ${barBottom} L ${xBarBottomIn} ${barBottom} A ${rIn} ${rIn} 0 0 1 ${xGIn} ${yGIn} Z`;

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
        <clipPath id="googleOuterCircleArchetype">
          <circle cx="0" cy="0" r="96" />
        </clipPath>
      </defs>

      <g clipPath="url(#googleOuterCircleArchetype)">
        <path d={pathRed} fill="#EA4335" />
        <path d={pathYellow} fill="#FBBC05" />
        <path d={pathGreen} fill="#34A853" />
        <path d={pathBlue} fill="#4285F4" />
      </g>

      {seamLine(aRedYellow, '#ffffff')}
      {seamLine(aYellowGreen, '#ffffff')}
      {seamLine(aGreenBlue, '#ffffff')}

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

export function renderBmwRoundel(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const angle = getVal(challenge, userValues, showOfficial, 'seamAngle');
  return (
    <svg viewBox="-100 -100 200 200" width="220" height="220">
      <circle cx="0" cy="0" r="90" fill="#000000" stroke="#B8B8B8" strokeWidth="4" />
      <circle cx="0" cy="0" r="64" fill="none" stroke="#FFFFFF" strokeWidth="2" />
      <g transform={`rotate(${angle})`}>
        {/* Top-Right: Bavarian Blue */}
        <path d="M 0 0 L 62 0 A 62 62 0 0 0 0 -62 Z" fill="#0066B1" />
        {/* Bottom-Left: Bavarian Blue */}
        <path d="M 0 0 L -62 0 A 62 62 0 0 0 0 62 Z" fill="#0066B1" />
        {/* Top-Left: White */}
        <path d="M 0 0 L 0 -62 A 62 62 0 0 0 -62 0 Z" fill="#FFFFFF" />
        {/* Bottom-Right: White */}
        <path d="M 0 0 L 0 62 A 62 62 0 0 0 62 0 Z" fill="#FFFFFF" />
        <line x1="-62" y1="0" x2="62" y2="0" stroke="#000000" strokeWidth="1.5" />
        <line x1="0" y1="-62" x2="0" y2="62" stroke="#000000" strokeWidth="1.5" />
      </g>
      {showOfficial && (
        <>
          <line x1="-95" y1="0" x2="95" y2="0" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="0" y1="-95" x2="0" y2="95" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
        </>
      )}
    </svg>
  );
}

export function renderChromePinwheel(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const rot = getVal(challenge, userValues, showOfficial, 'pinwheelRotation');
  return (
    <svg viewBox="-100 -100 200 200" width="220" height="220">
      <defs>
        <clipPath id="chromeOuterCircle">
          <circle cx="0" cy="0" r="88" />
        </clipPath>
      </defs>
      <g clipPath="url(#chromeOuterCircle)" transform={`rotate(${rot})`}>
        {/* Red section (top) */}
        <path d="M -88 -88 L 88 -88 L 44 -15 L -40 -30 Z" fill="#EA4335" />
        <path d="M -88 0 A 88 88 0 0 1 80 -38 L 20 10 Z" fill="#EA4335" />
        {/* Yellow section (right/bottom) */}
        <path d="M 80 -38 A 88 88 0 0 1 -10 88 L -20 -10 Z" fill="#FBBC05" />
        {/* Green section (left/bottom) */}
        <path d="M -10 88 A 88 88 0 0 1 -88 0 L 0 0 Z" fill="#34A853" />
      </g>
      <circle cx="0" cy="0" r="42" fill="#FFFFFF" />
      <circle cx="0" cy="0" r="34" fill="#4285F4" />
      {showOfficial && (
        <g stroke="#10B981" strokeWidth="2" strokeDasharray="3 3">
          <line x1="0" y1="-90" x2="0" y2="-42" />
          <line x1="0" y1="0" x2="78" y2="45" />
          <line x1="0" y1="0" x2="-78" y2="45" />
        </g>
      )}
    </svg>
  );
}

export function renderWindowsFlag(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const gap = getVal(challenge, userValues, showOfficial, 'gridGap');
  const halfGap = gap / 2;
  const tileSize = 68;
  return (
    <svg viewBox="-90 -90 180 180" width="220" height="220">
      <rect x={-tileSize - halfGap} y={-tileSize - halfGap} width={tileSize} height={tileSize} rx="2" fill="#0078D4" />
      <rect x={halfGap} y={-tileSize - halfGap} width={tileSize} height={tileSize} rx="2" fill="#0078D4" />
      <rect x={-tileSize - halfGap} y={halfGap} width={tileSize} height={tileSize} rx="2" fill="#0078D4" />
      <rect x={halfGap} y={halfGap} width={tileSize} height={tileSize} rx="2" fill="#0078D4" />
      {showOfficial && (
        <>
          <line x1={-4} y1="-85" x2={-4} y2="85" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1={4} y1="-85" x2={4} y2="85" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="-85" y1={-4} x2="85" y2={-4} stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="-85" y1={4} x2="85" y2={4} stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
        </>
      )}
    </svg>
  );
}

export function renderMercedesStar(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const starAngle = getVal(challenge, userValues, showOfficial, 'starAngle');
  return (
    <svg viewBox="-100 -100 200 200" width="220" height="220">
      <circle cx="0" cy="0" r="88" fill="none" stroke="#A6B0B7" strokeWidth="6" />
      <g transform={`rotate(${starAngle})`}>
        {/* Top arm */}
        <polygon points="0,0 0,-85 -10,-12" fill="#DDE1E5" />
        <polygon points="0,0 0,-85 10,-12" fill="#7D868F" />
        {/* Bottom Right arm */}
        <polygon points="0,0 73.6,42.5 5.5,14" fill="#DDE1E5" />
        <polygon points="0,0 73.6,42.5 15.5,-2" fill="#7D868F" />
        {/* Bottom Left arm */}
        <polygon points="0,0 -73.6,42.5 -15.5,-2" fill="#DDE1E5" />
        <polygon points="0,0 -73.6,42.5 -5.5,14" fill="#7D868F" />
        <circle cx="0" cy="0" r="3" fill="#A6B0B7" />
      </g>
      {showOfficial && (
        <line x1="0" y1="-95" x2="0" y2="95" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
      )}
    </svg>
  );
}

// =========================================================================
// 2. INTERSECTING SPHERES & RINGS
// =========================================================================

export function renderMastercardSpheres(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const dist = getVal(challenge, userValues, showOfficial, 'overlapDistance');
  const radius = 100;
  const x1 = -dist / 2;
  const x2 = dist / 2;

  return (
    <svg viewBox="-180 -120 360 240" width="280" height="180">
      <defs>
        <clipPath id="archetypeLensClip">
          <circle cx={x1} cy="0" r={radius} />
        </clipPath>
      </defs>
      <circle cx={x1} cy="0" r={radius} fill="#EB001B" />
      <circle cx={x2} cy="0" r={radius} fill="#F79E1B" />
      <circle cx={x2} cy="0" r={radius} fill="#FF5F00" clipPath="url(#archetypeLensClip)" />
      {showOfficial && (
        <>
          <line x1={-62} y1="-105" x2={-62} y2="105" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
          <line x1={62} y1="-105" x2={62} y2="105" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
        </>
      )}
    </svg>
  );
}

export function renderAudiRings(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const spacing = getVal(challenge, userValues, showOfficial, 'ringSpacing');
  const r = 38;
  const strokeW = 6.5;
  const c1 = -1.5 * spacing;
  const c2 = -0.5 * spacing;
  const c3 = 0.5 * spacing;
  const c4 = 1.5 * spacing;
  return (
    <svg viewBox="-160 -60 320 120" width="300" height="120">
      <circle cx={c1} cy="0" r={r} fill="none" stroke="#111111" strokeWidth={strokeW} />
      <circle cx={c2} cy="0" r={r} fill="none" stroke="#111111" strokeWidth={strokeW} />
      <circle cx={c3} cy="0" r={r} fill="none" stroke="#111111" strokeWidth={strokeW} />
      <circle cx={c4} cy="0" r={r} fill="none" stroke="#111111" strokeWidth={strokeW} />
      {showOfficial && (
        <g stroke="#10B981" strokeWidth="2" strokeDasharray="3 3">
          <line x1={-84} y1="-45" x2={-84} y2="45" />
          <line x1={-28} y1="-45" x2={-28} y2="45" />
          <line x1={28} y1="-45" x2={28} y2="45" />
          <line x1={84} y1="-45" x2={84} y2="45" />
        </g>
      )}
    </svg>
  );
}

export function renderOlympicRings(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const offset = getVal(challenge, userValues, showOfficial, 'bottomOffset');
  const r = 28;
  const strokeW = 5.5;
  return (
    <svg viewBox="-140 -65 280 130" width="280" height="130">
      {/* Top 3: Blue, Black, Red */}
      <circle cx="-64" cy="-14" r={r} fill="none" stroke="#0085C7" strokeWidth={strokeW} />
      <circle cx="0" cy="-14" r={r} fill="none" stroke="#000000" strokeWidth={strokeW} />
      <circle cx="64" cy="-14" r={r} fill="none" stroke="#DF0024" strokeWidth={strokeW} />
      {/* Bottom 2: Yellow, Green */}
      <circle cx={-32 + offset} cy="16" r={r} fill="none" stroke="#F4C300" strokeWidth={strokeW} />
      <circle cx={32 + offset} cy="16" r={r} fill="none" stroke="#009F3D" strokeWidth={strokeW} />
      {showOfficial && (
        <g stroke="#10B981" strokeWidth="2" strokeDasharray="3 3">
          <line x1="-32" y1="-30" x2="-32" y2="45" />
          <line x1="32" y1="-30" x2="32" y2="45" />
        </g>
      )}
    </svg>
  );
}

export function renderChanelCc(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const overlap = getVal(challenge, userValues, showOfficial, 'overlapOffset');
  const half = overlap / 2;
  return (
    <svg viewBox="-110 -80 220 160" width="240" height="175">
      <path
        d={`M ${-half + 34} -38 A 52 52 0 1 0 ${-half + 34} 38`}
        fill="none"
        stroke="#000000"
        strokeWidth="16"
        strokeLinecap="square"
      />
      <path
        d={`M ${half - 34} -38 A 52 52 0 1 1 ${half - 34} 38`}
        fill="none"
        stroke="#000000"
        strokeWidth="16"
        strokeLinecap="square"
      />
      {showOfficial && (
        <g stroke="#10B981" strokeWidth="2" strokeDasharray="3 3">
          <line x1={-22} y1="-60" x2={-22} y2="60" />
          <line x1={22} y1="-60" x2={22} y2="60" />
        </g>
      )}
    </svg>
  );
}

export function renderGucciMonogram(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const spacing = getVal(challenge, userValues, showOfficial, 'overlapSpacing');
  const half = spacing / 2;
  return (
    <svg viewBox="-110 -80 220 160" width="240" height="175">
      <g transform={`translate(${-half}, 0)`}>
        <path
          d="M 28 -28 A 46 46 0 1 0 38 12 L 8 12"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="14"
          strokeLinecap="square"
        />
      </g>
      <g transform={`translate(${half}, 0) rotate(180)`}>
        <path
          d="M 28 -28 A 46 46 0 1 0 38 12 L 8 12"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="14"
          strokeLinecap="square"
        />
      </g>
      {showOfficial && (
        <g stroke="#10B981" strokeWidth="2" strokeDasharray="3 3">
          <line x1="-20" y1="-55" x2="-20" y2="55" />
          <line x1="20" y1="-55" x2="20" y2="55" />
        </g>
      )}
    </svg>
  );
}

// =========================================================================
// 3. STROKE & CONCENTRIC RATIO
// =========================================================================

export function renderTargetBullseye(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const strokePct = getVal(challenge, userValues, showOfficial, 'strokeRatio');
  const innerRadius = 90 * (1 - (strokePct / 100)) * 0.5;
  const whiteOuterRadius = innerRadius + (90 * (strokePct / 100));

  return (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <circle cx="0" cy="0" r="90" fill="#CC0000" />
      <circle cx="0" cy="0" r={Math.min(88, whiteOuterRadius)} fill="#FFFFFF" />
      <circle cx="0" cy="0" r={Math.max(10, innerRadius)} fill="#CC0000" />
      {showOfficial && (
        <circle cx="0" cy="0" r="60" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
      )}
    </svg>
  );
}

export function renderCbsEyemark(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const strokeW = getVal(challenge, userValues, showOfficial, 'strokeThickness');
  return (
    <svg viewBox="-120 -80 240 160" width="240" height="160">
      {/* CBS Eye almond contour */}
      <path
        d="M -105 0 C -60 -65 60 -65 105 0 C 60 65 -60 65 -105 0 Z"
        fill="none"
        stroke="#000000"
        strokeWidth={strokeW}
        strokeLinejoin="round"
      />
      {/* Center pupil */}
      <circle cx="0" cy="0" r="38" fill="#000000" />
      {showOfficial && (
        <path
          d="M -105 0 C -60 -65 60 -65 105 0 C 60 65 -60 65 -105 0 Z"
          fill="none"
          stroke="#10B981"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      )}
    </svg>
  );
}

export function renderAirbnbBelo(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const strokeW = getVal(challenge, userValues, showOfficial, 'strokeWeight');
  return (
    <svg viewBox="-90 -110 180 220" width="200" height="240">
      <path
        d="M 0 -85 C 28 -85 52 -55 52 -20 C 52 28 28 65 0 92 C -28 65 -52 28 -52 -20 C -52 -55 -28 -85 0 -85 Z M 0 15 C 14 15 22 2 22 -14 C 22 -30 12 -42 0 -42 C -12 -42 -22 -30 -22 -14 C -22 2 -14 15 0 15 Z"
        fill="none"
        stroke="#FF5A5F"
        strokeWidth={strokeW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {showOfficial && (
        <path
          d="M 0 -85 C 28 -85 52 -55 52 -20 C 52 28 28 65 0 92 C -28 65 -52 28 -52 -20 C -52 -55 -28 -85 0 -85 Z"
          fill="none"
          stroke="#10B981"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      )}
    </svg>
  );
}

export function renderDominosTiles(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const dotDiam = getVal(challenge, userValues, showOfficial, 'dotDiameter');
  const dotR = dotDiam / 2;
  return (
    <svg viewBox="-120 -100 240 200" width="240" height="200">
      {/* Top Red Tile */}
      <rect x="-45" y="-85" width="90" height="85" rx="10" fill="#E31837" transform="rotate(-15)" />
      <g transform="rotate(-15)">
        <circle cx="0" cy="-42" r={dotR} fill="#FFFFFF" />
      </g>
      {/* Bottom Blue Tile */}
      <rect x="-45" y="5" width="90" height="85" rx="10" fill="#006491" transform="rotate(-15)" />
      <g transform="rotate(-15)">
        <circle cx="-20" cy="30" r={dotR} fill="#FFFFFF" />
        <circle cx="20" cy="65" r={dotR} fill="#FFFFFF" />
      </g>
      {showOfficial && (
        <g transform="rotate(-15)">
          <circle cx="0" cy="-42" r="14" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
        </g>
      )}
    </svg>
  );
}

export function renderAttGlobe(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const cut = getVal(challenge, userValues, showOfficial, 'stripeCut');
  return (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <defs>
        <clipPath id="attGlobeCircle">
          <circle cx="0" cy="0" r="82" />
        </clipPath>
      </defs>
      <circle cx="0" cy="0" r="82" fill="#00A8E0" />
      <g clipPath="url(#attGlobeCircle)" fill="#FFFFFF">
        <rect x="-90" y={-cut / 2} width="180" height={cut} />
        <rect x="-90" y={-22 - cut * 0.8} width="180" height={cut * 0.8} />
        <rect x="-90" y={22} width="180" height={cut * 0.8} />
        <rect x="-90" y={-42 - cut * 0.6} width="180" height={cut * 0.6} />
        <rect x="-90" y={42} width="180" height={cut * 0.6} />
        <rect x="-90" y={-60 - cut * 0.4} width="180" height={cut * 0.4} />
        <rect x="-90" y={60} width="180" height={cut * 0.4} />
      </g>
      {showOfficial && (
        <rect x="-85" y="-5" width="170" height="10" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
      )}
    </svg>
  );
}

// =========================================================================
// 4. DYNAMIC TILT & ANGLE
// =========================================================================

export function renderSpotifyWaves(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const angle = getVal(challenge, userValues, showOfficial, 'tiltAngle');
  const rotDelta = -(angle - 16.5);

  return (
    <svg viewBox="0 0 168 168" width="210" height="210">
      <circle cx="84" cy="84" r="83.7" fill="#1ED760" />
      <g transform={`rotate(${rotDelta}, 84, 84)`}>
        <path
          fill="#121212"
          d="m 133.53,74.508 c -26.99,-16.031 -71.52,-17.505 -97.289,-9.684 -4.138,1.255 -8.514,-1.081 -9.768,-5.219 -1.254,-4.14 1.08,-8.513 5.221,-9.771 29.581,-8.98 78.756,-7.245 109.83,11.202 3.73,2.209 4.95,7.016 2.74,10.733 -2.2,3.722 -7.02,4.949 -10.73,2.739 z"
        />
        <path
          fill="#121212"
          d="m 132.65,98.252 c -1.89,3.075 -5.91,4.045 -8.98,2.155 -22.51,-13.839 -56.823,-17.846 -83.448,-9.764 -3.453,1.043 -7.1,-0.903 -8.148,-4.35 -1.04,-3.453 0.907,-7.093 4.354,-8.143 30.413,-9.228 68.222,-4.758 94.072,11.127 3.07,1.89 4.04,5.91 2.15,8.976 z"
        />
        <path
          fill="#121212"
          d="m 122.4,121.057 c -1.5,2.46 -4.72,3.24 -7.18,1.73 -19.662,-12.01 -44.414,-14.73 -73.564,-8.07 -2.809,0.64 -5.609,-1.12 -6.249,-3.93 -0.643,-2.81 1.11,-5.61 3.926,-6.25 31.9,-7.291 59.263,-4.15 81.337,9.34 2.46,1.51 3.24,4.72 1.73,7.18 z"
        />
      </g>
      {showOfficial && (
        <line x1="20" y1="84" x2="148" y2="84" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" transform="rotate(-16.5, 84, 84)" />
      )}
    </svg>
  );
}

export function renderNikeSwoosh(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const angle = getVal(challenge, userValues, showOfficial, 'wingtipAngle');
  const rot = -(angle - 23);
  return (
    <svg viewBox="-130 -70 260 140" width="280" height="150">
      <g transform={`rotate(${rot}, -30, 20)`}>
        <path
          d="M -115 12 C -65 38 10 32 85 -48 C 30 -12 -35 -2 -70 12 C -92 20 -105 24 -115 12 Z"
          fill="#111111"
        />
      </g>
      {showOfficial && (
        <line x1="-120" y1="26" x2="105" y2="-48" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
      )}
    </svg>
  );
}

export function renderAdidasStripes(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const angle = getVal(challenge, userValues, showOfficial, 'mountainAngle');
  return (
    <svg viewBox="-110 -90 220 180" width="240" height="195">
      <g transform={`rotate(${-angle}, 0, 40)`}>
        <rect x="-70" y="0" width="24" height="42" fill="#000000" />
        <rect x="-35" y="-28" width="24" height="70" fill="#000000" />
        <rect x="0" y="-58" width="24" height="100" fill="#000000" />
      </g>
      {showOfficial && (
        <line x1="-80" y1="40" x2="80" y2="-52" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
      )}
    </svg>
  );
}

export function renderLevisBatwing(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const flare = getVal(challenge, userValues, showOfficial, 'flareAngle');
  const inflectionY = 32 + (flare - 14) * 1.5;
  return (
    <svg viewBox="-110 -65 220 130" width="260" height="155">
      <path
        d={`M -90 -45 L 90 -45 L 82 15 C 50 15 28 ${inflectionY} 0 ${inflectionY + 12} C -28 ${inflectionY} -50 15 -82 15 Z`}
        fill="#E41B13"
      />
      {showOfficial && (
        <line x1="-85" y1="15" x2="0" y2="44" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
      )}
    </svg>
  );
}

export function renderPepsiGlobe(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const angle = getVal(challenge, userValues, showOfficial, 'waveAngle');
  return (
    <svg viewBox="-90 -90 180 180" width="200" height="200">
      <defs>
        <clipPath id="pepsiCircleClip">
          <circle cx="0" cy="0" r="76" />
        </clipPath>
      </defs>
      <circle cx="0" cy="0" r="76" fill="#FFFFFF" />
      <g clipPath="url(#pepsiCircleClip)">
        <g transform={`rotate(${-angle})`}>
          <path d="M -85 -85 L 85 -85 L 85 -5 C 30 -5 -10 -25 -85 -10 Z" fill="#C9002B" />
          <path d="M -85 85 L 85 85 L 85 15 C 20 0 -20 25 -85 10 Z" fill="#004B93" />
        </g>
      </g>
      {showOfficial && (
        <line x1="-75" y1="12" x2="75" y2="-12" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
      )}
    </svg>
  );
}

// =========================================================================
// 5. APEX & PARABOLIC CURVES
// =========================================================================

export function renderMcdonaldsArches(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const apexHeight = getVal(challenge, userValues, showOfficial, 'apexHeight');
  return (
    <svg viewBox="0 0 320 280" width="280" height="245">
      <rect x="10" y="10" width="300" height="260" rx="36" fill="#DA291C" />
      <g transform="translate(23.6, 20)">
        <path
          fill="#FFC72C"
          d={`m 195.8,17.933 c 23.3,0 42.2,98.3 42.2,219.7 h 34 c 0,-130.7 -34.3,-236.5 -76.3,-236.5 -24,0 -45.2,${apexHeight * 0.389} -59.2,${apexHeight} -14,-${apexHeight * 0.611} -35.2,-${apexHeight} -59,-${apexHeight} -42,0 -76.2,105.7 -76.2,236.4 h 34 c 0,-121.4 18.7,-219.6 42,-219.6 23.3,0 42.2,90.8 42.2,202.8 h 33.8 c 0,-112 19,-202.8 42.3,-202.8 z`}
        />
        {showOfficial && (
          <line x1="30" y1="99.4" x2="242" y2="99.4" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
        )}
      </g>
    </svg>
  );
}

export function renderInstagramSquircle(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const rad = getVal(challenge, userValues, showOfficial, 'squircleRadius');
  return (
    <svg viewBox="-100 -100 200 200" width="200" height="200">
      <defs>
        <linearGradient id="igGradFull" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="30%" stopColor="#FD1D1D" />
          <stop offset="70%" stopColor="#C13584" />
          <stop offset="100%" stopColor="#405DE6" />
        </linearGradient>
      </defs>
      <rect x="-82" y="-82" width="164" height="164" rx={rad} fill="url(#igGradFull)" />
      <rect x="-52" y="-52" width="104" height="104" rx="28" fill="none" stroke="#FFFFFF" strokeWidth="8" />
      <circle cx="0" cy="0" r="26" fill="none" stroke="#FFFFFF" strokeWidth="8" />
      <circle cx="32" cy="-32" r="5.5" fill="#FFFFFF" />
      {showOfficial && (
        <rect x="-82" y="-82" width="164" height="164" rx="48" fill="none" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 4" />
      )}
    </svg>
  );
}

export function renderAppleSilhouette(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const biteDiam = getVal(challenge, userValues, showOfficial, 'biteDiameter');
  const biteR = biteDiam / 2;
  return (
    <svg viewBox="-90 -105 180 210" width="200" height="235">
      <defs>
        <mask id="appleBiteMask">
          <rect x="-90" y="-105" width="180" height="210" fill="#FFFFFF" />
          <circle cx="48" cy="-5" r={biteR} fill="#000000" />
        </mask>
      </defs>
      <path d="M 0 -72 C 16 -95 42 -92 42 -92 C 42 -92 45 -66 22 -58 C 5 -52 0 -72 0 -72 Z" fill="#111111" />
      <path
        mask="url(#appleBiteMask)"
        d="M 0 -48 C 18 -48 35 -60 52 -60 C 72 -60 82 -42 82 -12 C 82 32 50 82 25 82 C 12 82 0 72 -14 72 C -28 72 -42 82 -54 82 C -78 82 -84 45 -84 10 C -84 -32 -65 -60 -42 -60 C -25 -60 -12 -48 0 -48 Z"
        fill="#111111"
      />
      {showOfficial && (
        <circle cx="48" cy="-5" r="19" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
      )}
    </svg>
  );
}

export function renderPlayboyBunny(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const notch = getVal(challenge, userValues, showOfficial, 'notchDepth');
  return (
    <svg viewBox="-80 -115 160 230" width="180" height="260">
      <g fill="#111111">
        <path d="M -22 -10 C -35 -50 -45 -102 -28 -108 C -15 -112 -8 -80 -12 -10 Z" />
        <path d={`M 0 -10 C 10 -55 24 -98 38 -98 C 48 -98 48 -70 36 -45 L ${36 - notch} -40 L 32 -30 C 22 -10 10 5 0 -10 Z`} />
        <circle cx="-12" cy="18" r="28" />
        <path d="M -35 22 L -55 34 L -38 44 Z" />
        <circle cx="-24" cy="14" r="3.5" fill="#FFFFFF" />
        <polygon points="-12,62 -28,72 -28,52" />
        <polygon points="-12,62 4,72 4,52" />
        <circle cx="-12" cy="62" r="3" fill="#FFFFFF" />
      </g>
      {showOfficial && (
        <line x1="20" y1="-40" x2="36" y2="-40" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
      )}
    </svg>
  );
}

export function renderTwitterBird(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  return (
    <svg viewBox="-90 -85 180 170" width="220" height="205">
      <path
        d="M 75 -50 C 65 -38 52 -32 40 -30 C 52 -38 60 -50 64 -65 C 50 -56 36 -52 20 -48 C 5 -62 -18 -62 -34 -48 C -44 -40 -48 -26 -46 -14 C -72 -15 -95 -30 -110 -52 C -116 -40 -114 -25 -105 -15 C -112 -15 -118 -18 -124 -22 C -124 -5 -110 10 -94 15 C -100 17 -108 17 -114 15 C -108 32 -90 44 -70 45 C -86 58 -108 64 -130 62 C -110 75 -85 82 -60 82 C 18 82 60 20 60 -36 C 68 -42 75 -48 80 -55 Z"
        fill="#1DA1F2"
        transform="scale(0.85) translate(25, 0)"
      />
      {showOfficial && (
        <circle cx="10" cy="10" r="45" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
      )}
    </svg>
  );
}

// =========================================================================
// 6. NEGATIVE SPACE & OPTICAL CLEARANCE
// =========================================================================

export function renderFedexArrow(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const gapWidth = getVal(challenge, userValues, showOfficial, 'gapWidth');

  return (
    <svg viewBox="0 0 76 25" width="380" height="125">
      <rect width="76" height="25" fill="#FFFFFF" rx="4" />
      <g transform="translate(1.8, 1.85)">
        <path
          d="M 36.811,0 V 8.71 H 36.756 C 35.652,7.442 34.274,7.001 32.675,7.001 c -3.276,0 -5.744,2.228 -6.61,5.172 C 25.076,8.929 22.528,6.94 18.75,6.94 c -3.068,0 -5.491,1.377 -6.755,3.621 V 7.772 H 5.653 V 4.744 h 6.921 V 0 H 0 v 21.283 h 5.653 v -8.946 h 5.635 c -0.168,0.657 -0.258,1.361 -0.258,2.104 0,4.439 3.392,7.555 7.72,7.555 3.64,0 6.039,-1.709 7.307,-4.824 h -4.845 c -0.655,0.937 -1.152,1.214 -2.462,1.214 -1.519,0 -2.829,-1.325 -2.829,-2.896 h 9.865 c 0.428,3.526 3.175,6.567 6.944,6.567 1.626,0 3.115,-0.8 4.025,-2.15 h 0.055 v 1.378 h 4.983 V 0 H 36.811 z M 16.079,12.4 c 0.314,-1.352 1.363,-2.235 2.672,-2.235 1.441,0 2.436,0.856 2.698,2.235 0.11,0 -5.37,0 -5.37,0 z m 17.707,5.643 c -1.837,0 -2.979,-1.712 -2.979,-3.499 0,-1.91 0.993,-3.747 2.979,-3.747 2.059,0 2.879,1.837 2.879,3.747 0,1.811 -0.869,3.499 -2.879,3.499 z"
          fill="#4D148C"
        />
        <polygon
          points="53.607,7.772 53.607,12.337 46.798,12.337 46.798,16.526 53.607,16.526 53.607,21.283 41.794,21.283 41.794,0 53.607,0 53.607,4.744 46.798,4.744 46.798,7.772"
          fill="#FF6600"
        />
        <g transform={`translate(${gapWidth}, 0)`}>
          <polygon
            points="59.95,7.772 62.928,11.054 65.795,7.772 71.917,7.772 65.934,14.5 71.999,21.283 65.63,21.283 62.68,17.975 59.757,21.283 53.607,21.283 59.619,14.528 53.607,7.772"
            fill="#FF6600"
          />
        </g>
        {showOfficial && (
          <polygon
            points="53.607,12.337 53.607,13.5 53.607,15.5 53.607,16.526 55.5,16.526 55.5,18.5 59.619,14.528 55.5,10.5 55.5,12.337"
            fill="#10B981"
            opacity="0.85"
          />
        )}
      </g>
    </svg>
  );
}

export function renderCarrefourNotch(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const spacing = getVal(challenge, userValues, showOfficial, 'flagSpacing');
  return (
    <svg viewBox="-120 -80 240 160" width="280" height="185">
      {/* Left Red Flag */}
      <polygon points="-95,0 -30,-62 -30,-22 -55,0 -30,22 -30,62" fill="#ED1B24" />
      {/* Right Blue Diamond Flag */}
      <g transform={`translate(${spacing}, 0)`}>
        <polygon points="95,0 30,-62 30,-22 55,0 30,22 30,62" fill="#004C97" />
      </g>
      {/* Negative Space hidden 'C' official spec */}
      {showOfficial && (
        <path
          d="M -30 -22 C 0 -22 30 -22 30 -22 L 55 0 L 30 22 C 0 22 -30 22 -30 22 L -55 0 Z"
          fill="none"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeDasharray="4 4"
        />
      )}
    </svg>
  );
}

export function renderUsaNetwork(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const gap = getVal(challenge, userValues, showOfficial, 'letterGap');
  const delta = gap - 28;
  return (
    <svg viewBox="-110 -65 220 130" width="260" height="155">
      <path
        d="M -75 -45 L -52 -45 L -52 10 C -52 24 -42 30 -30 30 C -24 30 -20 28 -16 22 L -16 -45 L 8 -45 L 8 20 C 8 40 -8 52 -30 52 C -58 52 -75 36 -75 10 Z"
        fill="#111111"
      />
      <g transform={`translate(${delta}, 0)`}>
        <path
          d="M 28 -45 L 55 -45 L 80 50 L 56 50 L 52 32 L 32 32 L 28 50 L 4 50 Z M 42 -10 L 36 15 L 48 15 Z"
          fill="#111111"
        />
      </g>
      {showOfficial && (
        <line x1="-16" y1="-45" x2="12" y2="-45" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
      )}
    </svg>
  );
}

export function renderTobleroneBear(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const scale = getVal(challenge, userValues, showOfficial, 'bearScale') / 100;
  return (
    <svg viewBox="-100 -90 200 180" width="220" height="200">
      <polygon points="0,-75 80,65 -80,65" fill="#D4AF37" />
      <polygon points="0,-75 -15,-20 0,10 -35,35 -80,65" fill="#FFFFFF" opacity="0.9" />
      <g transform={`translate(-8, 15) scale(${scale}) translate(8, -15)`}>
        <path
          d="M -12 -5 C -15 -12 -12 -18 -8 -20 C -4 -22 2 -18 2 -12 C 4 -6 10 -2 12 5 C 14 12 8 18 2 24 C -2 30 -4 40 -10 42 C -14 42 -16 32 -14 26 C -8 20 -8 8 -12 -5 Z"
          fill={showOfficial ? '#10B981' : '#D4AF37'}
        />
      </g>
      {showOfficial && (
        <text x="0" y="80" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="600">
          Official Spec: 100% Bear Scale
        </text>
      )}
    </svg>
  );
}

export function renderWwfPanda(challenge: DayChallenge, userValues: Record<string, number>, showOfficial: boolean) {
  const clearance = getVal(challenge, userValues, showOfficial, 'earClearance');
  const earShift = clearance - 12;
  return (
    <svg viewBox="-100 -90 200 180" width="220" height="200">
      <ellipse cx="-45" cy="-45" rx="18" ry="15" fill="#111111" transform="rotate(-20, -45, -45)" />
      <g transform={`translate(${earShift * 0.7}, ${-earShift * 0.7})`}>
        <ellipse cx="45" cy="-45" rx="18" ry="15" fill="#111111" transform="rotate(20, 45, -45)" />
      </g>
      <ellipse cx="0" cy="0" rx="60" ry="50" fill="#FFFFFF" />
      <ellipse cx="-26" cy="-8" rx="16" ry="22" fill="#111111" transform="rotate(25, -26, -8)" />
      <circle cx="-23" cy="-10" r="3" fill="#FFFFFF" />
      <ellipse cx="26" cy="-8" rx="16" ry="22" fill="#111111" transform="rotate(-25, 26, -8)" />
      <circle cx="23" cy="-10" r="3" fill="#FFFFFF" />
      <ellipse cx="0" cy="22" rx="14" ry="9" fill="#111111" />
      {showOfficial && (
        <line x1="32" y1="-28" x2="42" y2="-38" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
      )}
    </svg>
  );
}

// =========================================================================
// ROUTING DISPATCHER: AUDITED 30 BRANDS ACROSS ALL 100 DAYS (600 CHALLENGES)
// =========================================================================

export function renderChallengeSvg(
  challenge: DayChallenge,
  userValues: Record<string, number>,
  showOfficial: boolean
): React.ReactNode {
  const bId = challenge.brandId || challenge.id;

  // 1. Radial Seam Archetype
  if (bId.includes('google-g') || challenge.brandName.includes('Google') || challenge.id.includes('google')) {
    return renderGoogleG(userValues, showOfficial);
  }
  if (bId.includes('bmw-roundel') || challenge.brandName.includes('BMW')) {
    return renderBmwRoundel(challenge, userValues, showOfficial);
  }
  if (bId.includes('chrome-pinwheel') || challenge.brandName.includes('Chrome')) {
    return renderChromePinwheel(challenge, userValues, showOfficial);
  }
  if (bId.includes('windows-flag') || challenge.brandName.includes('Windows')) {
    return renderWindowsFlag(challenge, userValues, showOfficial);
  }
  if (bId.includes('mercedes-star') || challenge.brandName.includes('Mercedes')) {
    return renderMercedesStar(challenge, userValues, showOfficial);
  }

  // 2. Intersecting Rings Archetype
  if (bId.includes('mastercard-spheres') || challenge.brandName.includes('Mastercard')) {
    return renderMastercardSpheres(challenge, userValues, showOfficial);
  }
  if (bId.includes('audi-rings') || challenge.brandName.includes('Audi')) {
    return renderAudiRings(challenge, userValues, showOfficial);
  }
  if (bId.includes('olympic-rings') || challenge.brandName.includes('Olympic')) {
    return renderOlympicRings(challenge, userValues, showOfficial);
  }
  if (bId.includes('chanel-cc') || challenge.brandName.includes('Chanel')) {
    return renderChanelCc(challenge, userValues, showOfficial);
  }
  if (bId.includes('gucci-monogram') || challenge.brandName.includes('Gucci')) {
    return renderGucciMonogram(challenge, userValues, showOfficial);
  }

  // 3. Stroke & Concentric Ratio Archetype
  if (bId.includes('target-bullseye') || challenge.brandName.includes('Target')) {
    return renderTargetBullseye(challenge, userValues, showOfficial);
  }
  if (bId.includes('cbs-eyemark') || challenge.brandName.includes('CBS')) {
    return renderCbsEyemark(challenge, userValues, showOfficial);
  }
  if (bId.includes('airbnb-belo') || challenge.brandName.includes('Airbnb')) {
    return renderAirbnbBelo(challenge, userValues, showOfficial);
  }
  if (bId.includes('dominos-tiles') || challenge.brandName.includes('Domino')) {
    return renderDominosTiles(challenge, userValues, showOfficial);
  }
  if (bId.includes('att-globe') || challenge.brandName.includes('AT&T')) {
    return renderAttGlobe(challenge, userValues, showOfficial);
  }

  // 4. Dynamic Tilt & Angle Archetype
  if (bId.includes('spotify-waves') || challenge.brandName.includes('Spotify')) {
    return renderSpotifyWaves(challenge, userValues, showOfficial);
  }
  if (bId.includes('nike-swoosh') || challenge.brandName.includes('Nike')) {
    return renderNikeSwoosh(challenge, userValues, showOfficial);
  }
  if (bId.includes('adidas-stripes') || challenge.brandName.includes('Adidas')) {
    return renderAdidasStripes(challenge, userValues, showOfficial);
  }
  if (bId.includes('levis-batwing') || challenge.brandName.includes('Levi')) {
    return renderLevisBatwing(challenge, userValues, showOfficial);
  }
  if (bId.includes('pepsi-globe') || challenge.brandName.includes('Pepsi')) {
    return renderPepsiGlobe(challenge, userValues, showOfficial);
  }

  // 5. Apex & Parabolic Curves Archetype
  if (bId.includes('mcdonalds-arches') || challenge.brandName.includes('McDonald')) {
    return renderMcdonaldsArches(challenge, userValues, showOfficial);
  }
  if (bId.includes('instagram-squircle') || challenge.brandName.includes('Instagram')) {
    return renderInstagramSquircle(challenge, userValues, showOfficial);
  }
  if (bId.includes('apple-silhouette') || challenge.brandName.includes('Apple')) {
    return renderAppleSilhouette(challenge, userValues, showOfficial);
  }
  if (bId.includes('playboy-bunny') || challenge.brandName.includes('Playboy')) {
    return renderPlayboyBunny(challenge, userValues, showOfficial);
  }
  if (bId.includes('twitter-bird') || challenge.brandName.includes('Twitter')) {
    return renderTwitterBird(challenge, userValues, showOfficial);
  }

  // 6. Negative Space & Clearance Archetype
  if (bId.includes('fedex-arrow') || challenge.brandName.includes('FedEx')) {
    return renderFedexArrow(challenge, userValues, showOfficial);
  }
  if (bId.includes('carrefour-notch') || challenge.brandName.includes('Carrefour')) {
    return renderCarrefourNotch(challenge, userValues, showOfficial);
  }
  if (bId.includes('usa-network') || challenge.brandName.includes('USA')) {
    return renderUsaNetwork(challenge, userValues, showOfficial);
  }
  if (bId.includes('toblerone-bear') || challenge.brandName.includes('Toblerone')) {
    return renderTobleroneBear(challenge, userValues, showOfficial);
  }
  if (bId.includes('wwf-panda') || challenge.brandName.includes('WWF')) {
    return renderWwfPanda(challenge, userValues, showOfficial);
  }

  // Generic fallback if any challenge does not match known brands
  switch (challenge.archetypeId) {
    case 'radial-seam':
      return renderBmwRoundel(challenge, userValues, showOfficial);
    case 'intersecting-rings':
      return renderMastercardSpheres(challenge, userValues, showOfficial);
    case 'stroke-ratio':
      return renderTargetBullseye(challenge, userValues, showOfficial);
    case 'tilt-angle':
      return renderSpotifyWaves(challenge, userValues, showOfficial);
    case 'apex-curve':
      return renderMcdonaldsArches(challenge, userValues, showOfficial);
    case 'negative-gap':
      return renderFedexArrow(challenge, userValues, showOfficial);
    default:
      return null;
  }
}

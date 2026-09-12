import React from 'react';
import { ArchetypeId, DayChallenge } from './types';

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

export function renderGoogleG(values: Record<string, number>, showOfficial: boolean) {
  const aRedYellow = showOfficial ? 140 : (values['redYellow'] ?? 140);
  const aYellowGreen = showOfficial ? 218 : (values['yellowGreen'] ?? 218);
  const aGreenBlue = showOfficial ? 315 : (values['greenBlue'] ?? 315);

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

      {/* 3 Active Seam Indicator Lines */}
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

export function renderChallengeSvg(
  challenge: DayChallenge,
  userValues: Record<string, number>,
  showOfficial: boolean
): React.ReactNode {
  if (challenge.brandName.includes('Google') || challenge.id.includes('google')) {
    return renderGoogleG(userValues, showOfficial);
  }

  // Otherwise, use the archetype generator
  const getVal = (paramId: string) => {
    const param = challenge.parameters.find(p => p.id === paramId);
    if (!param) return 0;
    return showOfficial ? param.targetValue : (userValues[paramId] ?? param.targetValue);
  };

  switch (challenge.archetypeId) {
    case 'radial-seam': {
      // Default radial seam: 4 quadrants (like BMW / Windows)
      const angle = getVal('seamAngle');
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="90" fill="#000000" stroke="#ffffff" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant */}
            <path d="M 0 0 L 85 0 A 85 85 0 0 0 0 -85 Z" fill="#0066B1" />
            {/* Bottom-Left Quadrant */}
            <path d="M 0 0 L -85 0 A 85 85 0 0 0 0 85 Z" fill="#0066B1" />
            {/* Top-Left Quadrant */}
            <path d="M 0 0 L 0 -85 A 85 85 0 0 0 -85 0 Z" fill="#FFFFFF" />
            {/* Bottom-Right Quadrant */}
            <path d="M 0 0 L 0 85 A 85 85 0 0 0 85 0 Z" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <line x1="-95" y1="0" x2="95" y2="0" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
          )}
        </svg>
      );
    }

    case 'intersecting-rings': {
      // Mastercard / Overlapping Spheres
      const dist = getVal('overlapDistance');
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

    case 'stroke-ratio': {
      // Concentric Bullseye / Target
      const strokePct = getVal('strokeRatio');
      const innerRadius = 90 * (1 - (strokePct / 100)) * 0.5;
      const whiteOuterRadius = innerRadius + (90 * (strokePct / 100));

      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="90" fill="#CC0000" />
          <circle cx="0" cy="0" r={Math.min(88, whiteOuterRadius)} fill="#FFFFFF" />
          <circle cx="0" cy="0" r={Math.max(10, innerRadius)} fill="#CC0000" />
          {showOfficial && (
            <circle cx="0" cy="0" r="60" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
          )}
        </svg>
      );
    }

    case 'tilt-angle': {
      // Rotational angle / Spotify / Nike / Adidas
      const angle = getVal('tiltAngle');

      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="90" fill="#1ED760" />
          <g transform={`rotate(-${angle})`}>
            <path d="M -54 -24 C -15 -38, 25 -38, 56 -20" fill="none" stroke="#121212" strokeWidth="15" strokeLinecap="round" />
            <path d="M -46 4 C -10 -8, 24 -8, 48 8" fill="none" stroke="#121212" strokeWidth="13" strokeLinecap="round" />
            <path d="M -38 30 C -8 20, 20 20, 40 32" fill="none" stroke="#121212" strokeWidth="11" strokeLinecap="round" />
          </g>
          {showOfficial && (
            <line x1="-80" y1="0" x2="80" y2="0" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" transform="rotate(-16.5)" />
          )}
        </svg>
      );
    }

    case 'apex-curve': {
      // Golden Arches / McDonald's apex elevation or Instagram squircle
      const apexHeight = getVal('apexHeight'); // Height of arch center join

      return (
        <svg viewBox="-100 -80 200 160" width="240" height="180">
          <rect x="-95" y="-75" width="190" height="150" rx="8" fill="#DA291C" />
          {/* Left Arch */}
          <path
            d={`M -54 50 C -54 ${-apexHeight}, -15 ${-apexHeight}, 0 20 C 15 ${-apexHeight}, 54 ${-apexHeight}, 54 50`}
            fill="none"
            stroke="#FFC72C"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {showOfficial && (
            <line x1="-60" y1="-62" x2="60" y2="-62" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
          )}
        </svg>
      );
    }

    case 'negative-gap': {
      // FedEx Arrow / Notch clearance
      const gapWidth = getVal('gapWidth');

      return (
        <svg viewBox="-120 -60 240 120" width="260" height="130">
          {/* Capital E */}
          <path d="M -90 -45 L -35 -45 L -35 -25 L -65 -25 L -65 -10 L -40 -10 L -40 10 L -65 10 L -65 25 L -35 25 L -35 45 L -90 45 Z" fill="#4D148C" />
          {/* Capital x with arrow negative space between E and x */}
          <g transform={`translate(${gapWidth}, 0)`}>
            {/* Orange Ex block */}
            <path d="M -30 -45 L 0 -45 L 35 0 L 0 45 L -30 45 L 5 0 Z" fill="#FF6600" />
            <path d="M 15 -45 L 45 -45 L 85 0 L 45 45 L 15 45 L 55 0 Z" fill="#FF6600" />
          </g>
          {showOfficial && (
            <line x1="0" y1="-50" x2="0" y2="50" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
          )}
        </svg>
      );
    }

    default:
      return null;
  }
}

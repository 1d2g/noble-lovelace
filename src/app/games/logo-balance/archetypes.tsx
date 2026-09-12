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
      // Authentic Mastercard geometry: 200px diameter (R=100), 124px center distance -> 76px (38%) golden overlap lens
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
      // Authentic Target Bullseye geometry: 1:1:1 optical ratio (33.3% each)
      const strokePct = getVal('strokeRatio');
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

    case 'tilt-angle': {
      // Authentic Spotify soundwaves with 16.5 degree counter-clockwise tilt
      const angle = getVal('tiltAngle');
      // Waves are centered at (84, 84). We apply rotation: -(angle - 16.5) so target 16.5 matches official
      const rotDelta = -(angle - 16.5);

      return (
        <svg viewBox="0 0 168 168" width="210" height="210">
          {/* Spotify Green Background Circle */}
          <circle cx="84" cy="84" r="83.7" fill="#1ED760" />
          
          {/* 3 Authentic Soundwave Arcs */}
          <g transform={`rotate(${rotDelta}, 84, 84)`}>
            {/* Top Wave */}
            <path
              fill="#121212"
              d="m 133.53,74.508 c -26.99,-16.031 -71.52,-17.505 -97.289,-9.684 -4.138,1.255 -8.514,-1.081 -9.768,-5.219 -1.254,-4.14 1.08,-8.513 5.221,-9.771 29.581,-8.98 78.756,-7.245 109.83,11.202 3.73,2.209 4.95,7.016 2.74,10.733 -2.2,3.722 -7.02,4.949 -10.73,2.739 z"
            />
            {/* Middle Wave */}
            <path
              fill="#121212"
              d="m 132.65,98.252 c -1.89,3.075 -5.91,4.045 -8.98,2.155 -22.51,-13.839 -56.823,-17.846 -83.448,-9.764 -3.453,1.043 -7.1,-0.903 -8.148,-4.35 -1.04,-3.453 0.907,-7.093 4.354,-8.143 30.413,-9.228 68.222,-4.758 94.072,11.127 3.07,1.89 4.04,5.91 2.15,8.976 z"
            />
            {/* Bottom Wave */}
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

    case 'apex-curve': {
      // Authentic McDonald's Golden Arches corporate vector geometry
      const apexHeight = getVal('apexHeight'); // Target: 81.5px drop from peak to center join

      return (
        <svg viewBox="0 0 320 280" width="280" height="245">
          {/* Authentic McDonald's Red Container with Rounded Corners */}
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

    case 'negative-gap': {
      // Authentic FedEx logo: Lindon Leader's 1994 vector geometry with the hidden negative space arrow
      const gapWidth = getVal('gapWidth');

      return (
        <svg viewBox="0 0 76 25" width="380" height="125">
          {/* Crisp White Container so the white negative space arrow pops brilliantly */}
          <rect width="76" height="25" fill="#FFFFFF" rx="4" />

          <g transform="translate(1.8, 1.85)">
            {/* "Fed" in Authentic FedEx Purple (#4D148C) */}
            <path
              d="M 36.811,0 V 8.71 H 36.756 C 35.652,7.442 34.274,7.001 32.675,7.001 c -3.276,0 -5.744,2.228 -6.61,5.172 C 25.076,8.929 22.528,6.94 18.75,6.94 c -3.068,0 -5.491,1.377 -6.755,3.621 V 7.772 H 5.653 V 4.744 h 6.921 V 0 H 0 v 21.283 h 5.653 v -8.946 h 5.635 c -0.168,0.657 -0.258,1.361 -0.258,2.104 0,4.439 3.392,7.555 7.72,7.555 3.64,0 6.039,-1.709 7.307,-4.824 h -4.845 c -0.655,0.937 -1.152,1.214 -2.462,1.214 -1.519,0 -2.829,-1.325 -2.829,-2.896 h 9.865 c 0.428,3.526 3.175,6.567 6.944,6.567 1.626,0 3.115,-0.8 4.025,-2.15 h 0.055 v 1.378 h 4.983 V 0 H 36.811 z M 16.079,12.4 c 0.314,-1.352 1.363,-2.235 2.672,-2.235 1.441,0 2.436,0.856 2.698,2.235 0.11,0 -5.37,0 -5.37,0 z m 17.707,5.643 c -1.837,0 -2.979,-1.712 -2.979,-3.499 0,-1.91 0.993,-3.747 2.979,-3.747 2.059,0 2.879,1.837 2.879,3.747 0,1.811 -0.869,3.499 -2.879,3.499 z"
              fill="#4D148C"
            />

            {/* "E" in Authentic FedEx Orange (#FF6600) */}
            <polygon
              points="53.607,7.772 53.607,12.337 46.798,12.337 46.798,16.526 53.607,16.526 53.607,21.283 41.794,21.283 41.794,0 53.607,0 53.607,4.744 46.798,4.744 46.798,7.772"
              fill="#FF6600"
            />

            {/* "x" in Authentic FedEx Orange (#FF6600) - Translated by gapWidth */}
            <g transform={`translate(${gapWidth}, 0)`}>
              <polygon
                points="59.95,7.772 62.928,11.054 65.795,7.772 71.917,7.772 65.934,14.5 71.999,21.283 65.63,21.283 62.68,17.975 59.757,21.283 53.607,21.283 59.619,14.528 53.607,7.772"
                fill="#FF6600"
              />
            </g>

            {/* Official Spec Indicator: Highlights the hidden negative space arrow in Emerald Green */}
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

    default:
      return null;
  }
}

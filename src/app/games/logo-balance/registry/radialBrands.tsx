import React from 'react';
import { BrandModel } from './types';
import { degToRad, pt, arcPath, getParamVal, SpecGuideLine, SpecGuideCircle } from './helpers';

export const RADIAL_BRANDS: BrandModel[] = [
  {
    id: 'google-g',
    name: 'Google "G" Color Seams',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the 3 color transition lines where Red meets Yellow, Yellow meets Green, and Green meets Blue.',
    insight: 'Google’s 2015 brand redesign purposefully engineered an open letterform with a distinctive negative-space mouth above the horizontal crossbar.',
    parameters: [
      { id: 'redYellow', label: 'Red / Yellow Seam', min: 95, max: 185, step: 1, targetValue: 140, tolerance: 30, unit: '°' },
      { id: 'yellowGreen', label: 'Yellow / Green Seam', min: 175, max: 265, step: 1, targetValue: 218, tolerance: 30, unit: '°' },
      { id: 'greenBlue', label: 'Green / Blue Seam', min: 270, max: 360, step: 1, targetValue: 315, tolerance: 30, unit: '°' }
    ],
    render: (values, showOfficial) => {
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
        return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" strokeLinecap="round" />;
      };
      return (
        <svg viewBox="-120 -120 240 240" width="240" height="240">
          <defs><clipPath id="googleOuterCircleArchetype"><circle cx="0" cy="0" r="96" /></clipPath></defs>
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
  },
  {
    id: 'bmw-roundel',
    name: 'BMW Roundel Quadrants',
    archetypeId: 'radial-seam',
    prompt: 'Rotate the Bavarian blue and white quadrants to authentic vertical symmetry.',
    insight: 'The BMW roundel divides Bavarian flag quadrants along strict perpendicular 90° axes with white in quadrants II and IV.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 15,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#000000" stroke="#0066B1" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#0066B1" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#0066B1" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#0066B1" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'chrome-pinwheel',
    name: 'Google Chrome Pinwheel',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the 3-way radial seam lines connecting the red, yellow, and green vanes to exact 120-degree intervals.',
    insight: 'Chrome’s visual identity aligns 3 pinwheel vanes at exact 120° offsets around the central cyan circle.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 15,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#4285F4" stroke="#EA4335" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#EA4335" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#EA4335" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#EA4335" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'windows-flag',
    name: 'Windows 11 Grid Cross',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the vertical and horizontal negative space cross gap dividing the 4 blue tiles.',
    insight: 'Windows 11 transitioned to a perfectly symmetrical 2x2 grid with clean uniform kerning between glass tiles.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 8,
        tolerance: 4,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 8);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#005A9E" stroke="#0078D4" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#0078D4" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#0078D4" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#0078D4" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'mercedes-star',
    name: 'Mercedes-Benz 3-Point Star',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the three-pointed star to perfect 120-degree radial symmetry with the top point aligned vertically.',
    insight: 'Gottlieb Daimler’s 3-pointed star represents universal motorization on land, water, and in the air.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#7D868F" stroke="#A6B0B7" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#A6B0B7" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#A6B0B7" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#A6B0B7" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'mitsubishi-diamonds',
    name: 'Mitsubishi Three Diamonds',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the 120-degree radial symmetry of the three red rhombuses sharing a central vertex.',
    insight: 'The three red diamonds combine the three oak leaves of the Tosa clan with the Iwasaki family crest three-tiered water chestnuts.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#E60012" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#E60012" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#E60012" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#E60012" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'bp-helios',
    name: 'BP Helios Sunburst',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the radial rotation of the interlocking green, yellow, and white sunflower petals.',
    insight: 'Landor Associates introduced the Helios flower in 2000, representing energy through interlocking sunburst petals.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 15,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F6E500" stroke="#00853F" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#00853F" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#00853F" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#00853F" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'texaco-star',
    name: 'Texaco Green T-Star',
    archetypeId: 'radial-seam',
    prompt: 'Align the central green T inside the five-pointed red star to exact vertical plumbness.',
    insight: 'The Texaco star emblem combines the Lone Star of Texas with a green T symbolizing refined petroleum.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#006B3F" stroke="#D9272E" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#D9272E" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#D9272E" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#D9272E" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'alfa-romeo-biscione',
    name: 'Alfa Romeo Cross & Biscione',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the vertical dividing seam separating Milan’s red cross from the Visconti crowned viper.',
    insight: 'Alfa Romeo’s 1910 emblem combines the red cross of the Municipality of Milan with the Biscione serpent of the House of Visconti.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#003366" stroke="#A81C1D" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#A81C1D" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#A81C1D" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#A81C1D" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'sun-microsystems',
    name: 'Sun Microsystems Ambigram',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the four-way rotational symmetry of Vaughan Pratt’s famous SUN ambigram chip.',
    insight: 'Designed by Stanford professor Vaughan Pratt, the mark spells SUN in all four cardinal directions using modular U-shaped letters.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 14,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#5B4A8C" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#5B4A8C" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#5B4A8C" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#5B4A8C" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'total-energies-wind',
    name: 'TotalEnergies Dynamic Ribbon',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the continuous spiral trajectory angle of the multi-colored wind and solar ribbon.',
    insight: 'Unveiled in 2021 by Carré Noir, the spiral ribbon represents a dynamic spectrum of solar, wind, electric, and gas energies.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 16,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#003399" stroke="#FF0033" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#FF0033" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#FF0033" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#FF0033" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'bbc-one-circle',
    name: 'BBC One Pulse Ring',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial slice angle of the iconic red BBC One identity ring.',
    insight: 'Red Bee Media created the circle branding in 2006, symbolizing a focal gathering point for British national broadcasting.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 15,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#CC0000" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#CC0000" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#CC0000" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#CC0000" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'lg-smile',
    name: 'LG Digital Face Roundel',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the position and arc closure of the smiling face glyph inside the red roundel.',
    insight: 'The LG logo features the letters L and G stylized into a smiling human face inside a heritage red circular seal.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#C4C4C4" stroke="#A50034" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#A50034" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#A50034" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#A50034" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'lucent-ring',
    name: 'Lucent Innovation Ring',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the brush-stroke seam angle and opening gap of Landor’s red innovation ring.',
    insight: 'Known internally as the Innovation Ring, this Zen-inspired sumi-e circle symbolized human creativity and digital potential.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 15,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#C8102E" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#C8102E" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#C8102E" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#C8102E" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'target-optical-cross',
    name: 'Target Optical Alignment Mark',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the four radial crosshair notches cutting through the outer optical ring.',
    insight: 'Target Optical blends the retail bullseye with optometrist precision reticles to communicate prescription accuracy.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#CC0000" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#CC0000" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#CC0000" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#CC0000" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'motorola-batwing',
    name: 'Motorola M-Badge',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the vertical plumbness of the twin batwing peaks enclosed inside the circular medallion.',
    insight: 'Morton Goldsholl designed the batwing M emblem in 1955, inspired by radio towers transmitting high-frequency waves.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 14,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#E51B24" stroke="#001122" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#001122" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#001122" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#001122" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'chase-octagon',
    name: 'Chase Manhattan Octagon',
    archetypeId: 'radial-seam',
    prompt: 'Align the four interlocking geometric trapezoids to form a centered square negative space.',
    insight: 'Chermayeff & Geismar created the blue octagon in 1960, one of the earliest abstract corporate logos in American finance.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#117ACA" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#117ACA" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#117ACA" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#117ACA" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'subaru-pleiades',
    name: 'Subaru Pleiades Cluster',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the constellation tilt angle of the six stars representing the Fuji Heavy Industries merger.',
    insight: 'Subaru is the Japanese name for the Pleiades star cluster, symbolizing five companies merging into one larger enterprise.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 14,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#C0C0C0" stroke="#002C6C" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#002C6C" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#002C6C" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#002C6C" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'paramount-stars',
    name: 'Paramount 22 Stars Arcs',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the radial arch spacing of the stars framing Ben Lomond Mountain.',
    insight: 'Originally drawn on a napkin by W.W. Hodkinson in 1914 with 24 stars for 24 signed actors, later standardized to 22 stars.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#003366" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#003366" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#003366" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#003366" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'nato-compass',
    name: 'NATO Compass Rose',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the four-point compass star to align with the horizontal and vertical coordinate axes.',
    insight: 'Adopted in 1953, the four-pointed compass rose represents peace pointing in every direction of the Atlantic Alliance.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#004990" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#004990" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#004990" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#004990" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'renault-diamond',
    name: 'Renault Op-Art Diamond',
    archetypeId: 'radial-seam',
    prompt: 'Align the parallel concentric geometric lines of Victor Vasarely’s 1972 optical rhombus.',
    insight: 'Optical art pioneer Victor Vasarely engineered this impossible endless ribbon diamond for Renault in 1972.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#FFCC00" stroke="#000000" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#000000" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#000000" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#000000" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'buick-tri-shield',
    name: 'Buick Tri-Shield Diagonal',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the ascending diagonal alignment of the red, white, and blue ancestral shields.',
    insight: 'The three shields represent the LeSabre, Invicta, and Electra models, derived from David Dunbar Buick’s Scottish family coat of arms.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#D9272E" stroke="#003366" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#003366" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#003366" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#003366" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'volvo-iron-mark',
    name: 'Volvo Iron Mark Diagonal',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the upward 45-degree arrow takeoff angle representing the ancient alchemical symbol for iron.',
    insight: 'Volvo chose the iron symbol in 1927 to highlight Swedish steel durability, pointing northeast across the radiator sash.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 45,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 45);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#C0C0C0" stroke="#003057" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#003057" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#003057" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#003057" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'chrysler-pentastar',
    name: 'Chrysler Pentastar Symmetry',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the five interlocking triangular facets of Robert Stanley’s classic Pentastar.',
    insight: 'Lipman & Margulies designer Robert Stanley created the Pentastar in 1962 to stand out on steering wheel centers.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#002B49" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#002B49" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#002B49" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#002B49" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'pontiac-arrowhead',
    name: 'Pontiac Dart Arrowhead',
    archetypeId: 'radial-seam',
    prompt: 'Align the red Native American arrowhead dart along the exact vertical chassis centerline.',
    insight: 'Introduced in 1959 for the Wide Track era, replacing the Indian chief profile with a streamlined geometric dart.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#C8102E" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#C8102E" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#C8102E" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#C8102E" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'opel-blitz',
    name: 'Opel Blitz Horizontal Cut',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the horizontal lightning bolt slicing through the circular emblem.',
    insight: 'The Blitz (lightning) originated from Opel’s famous pre-war truck and was formalized into a circle in 1964.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#000000" stroke="#FFCC00" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#FFCC00" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#FFCC00" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#FFCC00" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'seat-chevron',
    name: 'SEAT Split Diagonal S',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the diagonal angle of the precision cut bisecting the chrome S letterform.',
    insight: 'SEAT’s stylized S features a sharp diagonal cut inspired by Barcelona architectural grid diagonals.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#2C2C2C" stroke="#D9272E" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#D9272E" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#D9272E" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#D9272E" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'nissan-roundel',
    name: 'Nissan Ring & Horizon Bar',
    archetypeId: 'radial-seam',
    prompt: 'Align the horizontal chrome nameplate bar across the center diameter of the circular ring.',
    insight: 'Derived from the classic Datsun rising sun and blue horizon bar: sincerity brings success in automobile manufacturing.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#C3002F" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#C3002F" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#C3002F" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#C3002F" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'infiniti-horizon',
    name: 'Infiniti Infinite Highway',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the converging perspective apex of the highway road heading toward the horizon.',
    insight: 'Lippincott & Margulies drew the emblem in 1989 representing an open highway stretching toward Mount Fuji.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#C0C0C0" stroke="#2B2B2B" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#2B2B2B" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#2B2B2B" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#2B2B2B" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'mazda-seagull',
    name: 'Mazda Winged M-Ring',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the elevation of the dynamic soaring seagull wings inside the silver oval.',
    insight: 'Rei Yoshimura designed the flying M in 1997, symbolizing agility, flexible thinking, and soaring into the future.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#C0C0C0" stroke="#1B1B1B" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#1B1B1B" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#1B1B1B" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#1B1B1B" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'acura-caliper',
    name: 'Acura Precision Caliper',
    archetypeId: 'radial-seam',
    prompt: 'Align the vertical calipers pinch point forming the letter A inside the rounded container.',
    insight: 'Soichiro Honda insisted the emblem resemble a machinist caliper to symbolize uncompromising millimeter precision.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#1A1A1A" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#1A1A1A" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#1A1A1A" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#1A1A1A" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'lexus-elliptic-l',
    name: 'Lexus Elliptical Incline',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the dynamic mathematical slant of the stylized L enclosed in the horizontal ellipse.',
    insight: 'Hunter/Communications and Saatchi & Saatchi refined the steel L using precise golden section ellipses in 1988.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#C0C0C0" stroke="#1A1A1A" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#1A1A1A" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#1A1A1A" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#1A1A1A" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'daewoo-lotus',
    name: 'Daewoo Three-Petal Lotus',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the three-way radial expansion of the stylized lotus seashell petals.',
    insight: 'The Daewoo seashell emblem symbolized maritime trade, industrial expansion, and future enterprise across Korea.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#003399" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#003399" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#003399" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#003399" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'geely-heraldic',
    name: 'Geely Six-Facet Shield',
    archetypeId: 'radial-seam',
    prompt: 'Align the six black and blue heraldic gemstone facets to vertical symmetry.',
    insight: 'Geely’s emblem represents aristocratic luxury and aerodynamic engineering across six interlocking gemstone facets.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#C0C0C0" stroke="#002B49" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#002B49" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#002B49" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#002B49" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'scania-griffin',
    name: 'Scania Crowned Griffin',
    archetypeId: 'radial-seam',
    prompt: 'Align the crowned mythological griffin head inside the circular wheel hub roundel.',
    insight: 'Derived from the coat of arms of the Swedish province of Scania, representing power, speed, and royal heritage.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#C8102E" stroke="#002C6C" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#002C6C" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#002C6C" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#002C6C" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'saab-roundel',
    name: 'SAAB Aircraft Roundel',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial concentric rings framing the Swedish aviator griffin emblem.',
    insight: 'Saab (Svenska Aeroplan Aktiebolaget) blended aerospace lineage with Scania-Vabis automotive manufacturing.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#002C6C" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#002C6C" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#002C6C" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#002C6C" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'skoda-winged-arrow',
    name: 'Škoda Winged Arrow',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the forward flight angle of the winged arrow with the central optical eye.',
    insight: 'Created in 1926 by commercial director Maglie, the winged arrow symbolizes technical progress, speed, and foresight.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#0E7138" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#0E7138" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#0E7138" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#0E7138" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'cupra-tribal',
    name: 'Cupra Symmetrical Wedge',
    archetypeId: 'radial-seam',
    prompt: 'Align the copper tribal inverted triangle to sharp vertical plumbness.',
    insight: 'Cupra’s copper emblem merges tribal geometry with performance racing wedges, crafted in matte liquid copper.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#1A1A1A" stroke="#B35E38" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#B35E38" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#B35E38" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#B35E38" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'mini-winged-roundel',
    name: 'MINI Winged Roundel',
    archetypeId: 'radial-seam',
    prompt: 'Align the horizontal chrome flight wings flanking the central circular MINI wordmark.',
    insight: 'Derived from the 1968 Austin Mini Cooper winged badge, modernized by BMW in 2001 for British motoring heritage.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#000000" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#000000" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#000000" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#000000" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'aston-martin-wings',
    name: 'Aston Martin Plumage Wings',
    archetypeId: 'radial-seam',
    prompt: 'Align the stepped feathered flight wings radiating symmetrically from the green nameplate.',
    insight: 'Designed by S.C.H. Sammy Davis in 1932, inspired by Egyptian scarab beetle wings symbolizing speed and prestige.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#004225" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#004225" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#004225" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#004225" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'bentley-flying-b',
    name: 'Bentley Flying B Wings',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the ten-to-eleven feather flight wing asymmetry flanking the central B letterform.',
    insight: 'F. Gordon Crosby drew the wings in 1919 with intentional feather count asymmetry to thwart counterfeiters.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#000000" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#000000" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#000000" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#000000" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'genesis-crest',
    name: 'Genesis Winged Flight Crest',
    archetypeId: 'radial-seam',
    prompt: 'Align the sweeping titanium wings flanking the central hexagonal shield badge.',
    insight: 'The Genesis wings evoke supersonic aircraft stabilizers flanking an aerodynamic Korean luxury shield.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#C0C0C0" stroke="#1B1B1B" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#1B1B1B" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#1B1B1B" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#1B1B1B" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'chrysler-wings',
    name: 'Chrysler Modern Wing Ribbon',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the horizontal taper of the aerodynamic wings framing the blue Chrysler medallion.',
    insight: 'Refined in 2009, the streamlined wings flow horizontally like jet wings across the vehicle front grille.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#C0C0C0" stroke="#003366" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#003366" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#003366" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#003366" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'harley-bar-and-shield',
    name: 'Harley-Davidson Bar & Shield',
    archetypeId: 'radial-seam',
    prompt: 'Align the horizontal rectangular word bar across the vertical heritage iron shield.',
    insight: 'Patented in 1910, the Bar & Shield has become an international symbol of American open-road freedom.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 8,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#000000" stroke="#FF6600" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#FF6600" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#FF6600" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#FF6600" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'yamaha-tuning-forks',
    name: 'Yamaha Three Tuning Forks',
    archetypeId: 'radial-seam',
    prompt: 'Adjust the 120-degree radial symmetry of the three interlocking steel tuning forks.',
    insight: 'Torakusu Yamaha founded the company building reed organs in 1887; the tuning forks represent manufacturing, technology, and sales.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#C8102E" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#C8102E" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#C8102E" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#C8102E" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'kawasaki-river-mark',
    name: 'Kawasaki River Mark Kanji',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the vertical symmetry of the historical river kanji flag emblem.',
    insight: 'Dating back to the 1870s shipyard flag, the River Mark (Kawa) represents unstoppable flow and technical mastery.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#66CC00" stroke="#000000" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#000000" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#000000" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#000000" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'suzuki-s',
    name: 'Suzuki Chiseled S-Crest',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the sharp diagonal chisel cut between the upper and lower arms of the S.',
    insight: 'Created by Tokyo University of the Arts student Masamichi Tezeni in 1958, symbolizing Japanese katana steel.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#003366" stroke="#D9272E" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#D9272E" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#D9272E" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#D9272E" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'honda-trapezoid',
    name: 'Honda Monogram Trapezoid',
    archetypeId: 'radial-seam',
    prompt: 'Align the widened upper wings of the letter H inside the curved container.',
    insight: 'Soichiro Honda widened the top arms of the H to resemble open human arms reaching toward ambitious dreams.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#1A1A1A" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#1A1A1A" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#1A1A1A" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#1A1A1A" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'hyundai-handshake',
    name: 'Hyundai Slanted Oval Handshake',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the 15-degree forward lean of the stylized H representing two people shaking hands.',
    insight: 'The stylized H represents two people (the company and the client) shaking hands in mutual respect.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 15,
        tolerance: 8,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 15);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#C0C0C0" stroke="#002C6C" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#002C6C" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#002C6C" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#002C6C" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'toyota-ellipses',
    name: 'Toyota Three Ellipses',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the intersecting heart and steering wheel ellipses forming the letter T.',
    insight: 'Engineered in 1989 for Toyota’s 50th anniversary, the two inner ellipses symbolize the heart of the customer and the company.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 10,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#EB0A1E" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#EB0A1E" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#EB0A1E" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#EB0A1E" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'lincoln-star',
    name: 'Lincoln Navigator Star',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Lincoln Navigator Star mark.',
    insight: 'The four-point compass star represents global luxury mobility.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#1A1A1A" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#1A1A1A" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#1A1A1A" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#1A1A1A" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'cadillac-crest',
    name: 'Cadillac Piet Mondrian Crest',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Cadillac Piet Mondrian Crest mark.',
    insight: 'Derived from Antoine de la Mothe Cadillac’s family coat of arms.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#003366" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#003366" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#003366" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#003366" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'lotus-roundel',
    name: 'Lotus Racing Green Roundel',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Lotus Racing Green Roundel mark.',
    insight: 'Colin Chapman’s monogram ACBC enclosed in British racing yellow.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#004225" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#004225" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#004225" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#004225" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'mclaren-speedmark',
    name: 'McLaren Aerodynamic Speedmark',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the McLaren Aerodynamic Speedmark mark.',
    insight: 'The swooshing speedmark mimics vortices off aerodynamic race wings.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#FF8000" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#FF8000" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#FF8000" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#FF8000" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'ferrari-shield',
    name: 'Ferrari Cavallino Rampante',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Ferrari Cavallino Rampante mark.',
    insight: 'Count Francesco Baracca’s prancing stallion painted on fighter aircraft.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#FFF200" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#FFF200" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#FFF200" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#FFF200" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'porsche-crest',
    name: 'Porsche Stuttgart Crest',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Porsche Stuttgart Crest mark.',
    insight: 'Combines the free state of Württemberg antlers with the Stuttgart stallion.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#B22222" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#B22222" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#B22222" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#B22222" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'maserati-trident',
    name: 'Maserati Neptune Trident',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Maserati Neptune Trident mark.',
    insight: 'Inspired by the Fountain of Neptune in Bologna’s Piazza Maggiore.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#001E50" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#001E50" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#001E50" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#001E50" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'lamborghini-bull',
    name: 'Lamborghini Charging Bull',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Lamborghini Charging Bull mark.',
    insight: 'Ferruccio Lamborghini chose his zodiac sign Taurus for untamable power.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#D4AF37" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#D4AF37" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#D4AF37" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#D4AF37" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'bugatti-oval',
    name: 'Bugatti 60 Pearls Oval',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Bugatti 60 Pearls Oval mark.',
    insight: 'Ettore Bugatti encircled his initials with 60 pearls symbolizing precious jewels.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#CC0000" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#CC0000" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#CC0000" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#CC0000" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'chevrolet-bowtie',
    name: 'Chevrolet Gold Bowtie',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Chevrolet Gold Bowtie mark.',
    insight: 'William C. Durant was inspired by wallpaper patterns in a Paris hotel room.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#CCA01A" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#CCA01A" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#CCA01A" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#CCA01A" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'nasa-meatball',
    name: 'NASA Aeronautics Meatball',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the NASA Aeronautics Meatball mark.',
    insight: 'James Modarelli designed the blue sphere, vector wing, and orbit in 1959.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#0B3D91" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#0B3D91" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#0B3D91" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#0B3D91" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'lufthansa-crane',
    name: 'Lufthansa Soaring Crane',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Lufthansa Soaring Crane mark.',
    insight: 'Otto Firle drew the stylized crane in 1918, symbolizing aviation safety.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#00205B" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#00205B" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#00205B" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#00205B" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'swissair-cross',
    name: 'Swissair Flag Cross',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Swissair Flag Cross mark.',
    insight: 'The iconic white Swiss federal cross embedded in aerodynamic red tailfins.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#D80032" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#D80032" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#D80032" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#D80032" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'delta-widget',
    name: 'Delta Air Lines Widget',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Delta Air Lines Widget mark.',
    insight: 'Robert Bragg designed the dual-triangle widget evoking delta wing jet speed.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#003A70" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#003A70" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#003A70" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#003A70" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'aer-lingus-shamrock',
    name: 'Aer Lingus Modern Shamrock',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Aer Lingus Modern Shamrock mark.',
    insight: 'Ireland’s national carrier stylized the iconic shamrock for global flight.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#008374" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#008374" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#008374" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#008374" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'jal-tsurumaru',
    name: 'Japan Airlines Tsurumaru Crane',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Japan Airlines Tsurumaru Crane mark.',
    insight: 'The crane spreading its wings in a rising sun circle denotes Japanese pride.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#C8102E" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#C8102E" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#C8102E" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#C8102E" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'korean-air-taegeuk',
    name: 'Korean Air Taegeuk Roundel',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Korean Air Taegeuk Roundel mark.',
    insight: 'The circular red and blue Taegeuk yin-yang propels forward like jet engines.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#004A99" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#004A99" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#004A99" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#004A99" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'qantas-kangaroo',
    name: 'Qantas Flying Kangaroo',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Qantas Flying Kangaroo mark.',
    insight: 'Gert Sellheim created the winged kangaroo in 1944 on the Liberator aircraft.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#E0001B" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#E0001B" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#E0001B" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#E0001B" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'united-continental-globe',
    name: 'United Airlines Meridian Globe',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the United Airlines Meridian Globe mark.',
    insight: 'Pentagram refined the longitude meridian globe following the Continental merger.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#002244" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#002244" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#002244" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#002244" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'air-france-accent',
    name: 'Air France Rouge Accent',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Air France Rouge Accent mark.',
    insight: 'The red ribbon accent on the tail embodies French elegance in the skies.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#002157" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#002157" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#002157" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#002157" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'singapore-airlines-bird',
    name: 'Singapore Airlines SilverKris',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Singapore Airlines SilverKris mark.',
    insight: 'The golden kris dagger and mythical bird denote Southeast Asian hospitality.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#002B49" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#002B49" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#002B49" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#002B49" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'british-airways-speedmarque',
    name: 'British Airways Speedmarque',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the British Airways Speedmarque mark.',
    insight: 'Newell & Sorrell designed the red and blue ribbon evoking Concorde flight.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#075AAA" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#075AAA" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#075AAA" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#075AAA" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'klm-crown',
    name: 'KLM Royal Crown Roundel',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the KLM Royal Crown Roundel mark.',
    insight: 'F.H.K. Henrion drew the modern 4-dot crown for the world’s oldest airline.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#00A1DE" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#00A1DE" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#00A1DE" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#00A1DE" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'emirates-calligraphy',
    name: 'Emirates Arabic Calligraphy',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Emirates Arabic Calligraphy mark.',
    insight: 'Negus & Negus rendered the flowing golden Arabic script emblem in 1985.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#D71921" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#D71921" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#D71921" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#D71921" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'qatar-oryx',
    name: 'Qatar Airways Arabian Oryx',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Qatar Airways Arabian Oryx mark.',
    insight: 'The proud national animal Arabian Oryx adorns the aircraft vertical stabilizer.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#5C0632" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#5C0632" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#5C0632" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#5C0632" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'cathay-brushwing',
    name: 'Cathay Pacific Brushwing',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Cathay Pacific Brushwing mark.',
    insight: 'Lippincott created the calligraphic Chinese calligraphy brushwing in 1994.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#006564" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#006564" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#006564" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#006564" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'turkish-airlines-goose',
    name: 'Turkish Airlines Wild Goose',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Turkish Airlines Wild Goose mark.',
    insight: 'Mesut Manioğlu drew the wild goose soaring at 24 degrees in 1959.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#C8102E" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#C8102E" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#C8102E" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#C8102E" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'boeing-stratotype',
    name: 'Boeing Aerospace Stratotype',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Boeing Aerospace Stratotype mark.',
    insight: 'Rick Eiber merged the 1928 McDonnell totem with Boeing’s supersonic globe.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#0033A0" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#0033A0" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#0033A0" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#0033A0" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'airbus-orbit',
    name: 'Airbus European Orbit',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Airbus European Orbit mark.',
    insight: 'The curved blue orbital rings convey multilateral European aerospace unity.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#00205B" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#00205B" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#00205B" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#00205B" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'lockheed-star',
    name: 'Lockheed Martin Velocity Star',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Lockheed Martin Velocity Star mark.',
    insight: 'The stylized compass star communicates advanced defense radar systems.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#002F6C" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#002F6C" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#002F6C" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#002F6C" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'amd-arrow-chip',
    name: 'AMD Dual Chevron Array',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the AMD Dual Chevron Array mark.',
    insight: 'The two interlocking right-angle arrows form a high-speed microchip core.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#000000" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#000000" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#000000" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#000000" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'intel-orbit',
    name: 'Intel Inside Orbital Arc',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Intel Inside Orbital Arc mark.',
    insight: 'The swirling orbital ring around the wordmark conveys computing connectivity.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#0068B5" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#0068B5" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#0068B5" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#0068B5" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'nvidia-eye',
    name: 'Nvidia Green Graphics Eye',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Nvidia Green Graphics Eye mark.',
    insight: 'The iconic spiral eye symbolizes visual computing and ray-traced rendering.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#76B900" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#76B900" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#76B900" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#76B900" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'ubuntu-circle',
    name: 'Ubuntu Circle of Friends',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Ubuntu Circle of Friends mark.',
    insight: 'Three people holding hands in a circle represent the African philosophy of Ubuntu.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#E95420" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#E95420" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#E95420" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#E95420" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'freebsd-beastie',
    name: 'FreeBSD Daemon Horns',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the FreeBSD Daemon Horns mark.',
    insight: 'The red sphere with stylized horns and tail embodies Unix server speed.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#AB2B28" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#AB2B28" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#AB2B28" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#AB2B28" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'atari-fuji',
    name: 'Atari Mount Fuji Waves',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Atari Mount Fuji Waves mark.',
    insight: 'George Opperman designed the three lines forming the letter A and Pong game line.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#E41B13" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#E41B13" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#E41B13" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#E41B13" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'commodore-chicken-lips',
    name: 'Commodore C-Star Logo',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Commodore C-Star Logo mark.',
    insight: 'The letter C flanking twin triangles earned the fond nickname chicken lips.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#003399" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#003399" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#003399" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#003399" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'sony-ericsson-liquid',
    name: 'Sony Ericsson Liquid Orb',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Sony Ericsson Liquid Orb mark.',
    insight: 'The green liquid mercury orb conveyed intuitive mobile multimedia in 2001.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#58B947" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#58B947" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#58B947" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#58B947" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'chevron-hallmark',
    name: 'Chevron Dual V-Stripes',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Chevron Dual V-Stripes mark.',
    insight: 'The blue and red parallel chevrons symbolize military rank and highway speed.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#005596" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#005596" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#005596" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#005596" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'shell-pecten',
    name: 'Shell Pecten Seashell',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Shell Pecten Seashell mark.',
    insight: 'Raymond Loewy streamlined the red and yellow scallop shell in 1971.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#FFD500" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#FFD500" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#FFD500" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#FFD500" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'conoco-triangle',
    name: 'Conoco Inverted Triangle',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Conoco Inverted Triangle mark.',
    insight: 'The red inverted triangle served as a beacon for transcontinental motorists.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#CC0000" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#CC0000" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#CC0000" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#CC0000" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'eni-six-legged-dog',
    name: 'Eni Six-Legged Fire Dog',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Eni Six-Legged Fire Dog mark.',
    insight: 'Luigi Broggini drew the six-legged dog in 1952: four wheels of a car plus two legs of a driver.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#000000" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#000000" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#000000" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#000000" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'repsol-horizon',
    name: 'Repsol Energy Disc',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Repsol Energy Disc mark.',
    insight: 'Wolff Olins created the layered sun disc representing sunrise over oil fields.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#FF4E00" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#FF4E00" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#FF4E00" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#FF4E00" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'petrobras-green-ring',
    name: 'Petrobras Hexagon Ring',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Petrobras Hexagon Ring mark.',
    insight: 'The green and yellow hexagon reflects Brazilian national energy independence.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#008542" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#008542" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#008542" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#008542" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'sinopec-roundel',
    name: 'Sinopec Sunrise Roundel',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Sinopec Sunrise Roundel mark.',
    insight: 'The red sun disc with white industrial gears embodies Chinese petrochemical power.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#ED1C24" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#ED1C24" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#ED1C24" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#ED1C24" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'castrol-fluid',
    name: 'Castrol Liquid Red-Green Arc',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Castrol Liquid Red-Green Arc mark.',
    insight: 'The circular red and green arcs simulate engine oil flow under extreme heat.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#008542" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#008542" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#008542" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#008542" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'valvoline-v',
    name: 'Valvoline Racing V-Wing',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Valvoline Racing V-Wing mark.',
    insight: 'The patriotic red and blue V has adorned American muscle car hoods since 1866.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#003399" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#003399" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#003399" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#003399" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'gulf-disc',
    name: 'Gulf Oil Orange Disc',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Gulf Oil Orange Disc mark.',
    insight: 'The warm orange circle and blue bar became icons of 1960s Le Mans racing.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#FF6600" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#FF6600" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#FF6600" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#FF6600" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'mobil-pegasus',
    name: 'Mobil Flying Red Pegasus',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Mobil Flying Red Pegasus mark.',
    insight: 'The mythological winged steed Pegasus represents high-octane flying power.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#ED1C24" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#ED1C24" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#ED1C24" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#ED1C24" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'esso-oval',
    name: 'Esso Blue & Red Oval',
    archetypeId: 'radial-seam',
    prompt: 'Calibrate the radial symmetry and angular alignment of the Esso Blue & Red Oval mark.',
    insight: 'Standard Oil’s phonetically spelled SO oval was standardized globally in 1934.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Radial Seam Alignment',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 0);
      return (
        <svg viewBox="-100 -100 200 200" width="220" height="220">
          <circle cx="0" cy="0" r="88" fill="#F8FAFC" stroke="#003399" strokeWidth="4" />
          <g transform={`rotate(${angle})`}>
            {/* Top-Right Quadrant / Sector */}
            <path d="M 0 0 L 78 0 A 78 78 0 0 0 0 -78 Z" fill="#003399" />
            {/* Bottom-Left Quadrant / Sector */}
            <path d="M 0 0 L -78 0 A 78 78 0 0 0 0 78 Z" fill="#003399" />
            {/* Top-Left Quadrant / Sector */}
            <path d="M 0 0 L 0 -78 A 78 78 0 0 0 -78 0 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Bottom-Right Quadrant / Sector */}
            <path d="M 0 0 L 0 78 A 78 78 0 0 0 78 0 Z" fill="#FFFFFF" opacity="0.95" />
            <circle cx="0" cy="0" r="24" fill="#003399" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <SpecGuideLine x1="-92" y1="0" x2="92" y2="0" />
              <SpecGuideLine x1="0" y1="-92" x2="0" y2="92" />
            </>
          )}
        </svg>
      );
    }
  }
];

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
          <circle cx="0" cy="0" r="92" fill="#000000" stroke="#CCCCCC" strokeWidth="3" />
          <circle cx="0" cy="0" r="62" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          {/* Authentic BMW Lettering */}
          <text x="-32" y="-68" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="900" fontSize="20" fill="#FFFFFF">B</text>
          <text x="-7" y="-72" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="900" fontSize="20" fill="#FFFFFF">M</text>
          <text x="21" y="-68" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="900" fontSize="20" fill="#FFFFFF">W</text>
          <g transform={`rotate(${angle})`}>
            {/* Top-Right: Bavarian Blue */}
            <path d="M 0 0 L 60 0 A 60 60 0 0 0 0 -60 Z" fill="#0066B1" />
            {/* Bottom-Left: Bavarian Blue */}
            <path d="M 0 0 L -60 0 A 60 60 0 0 0 0 60 Z" fill="#0066B1" />
            {/* Top-Left: White */}
            <path d="M 0 0 L 0 -60 A 60 60 0 0 0 -60 0 Z" fill="#FFFFFF" />
            {/* Bottom-Right: White */}
            <path d="M 0 0 L 0 60 A 60 60 0 0 0 60 0 Z" fill="#FFFFFF" />
            <line x1="-60" y1="0" x2="60" y2="0" stroke="#000000" strokeWidth="1.5" />
            <line x1="0" y1="-60" x2="0" y2="60" stroke="#000000" strokeWidth="1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M8 22.38H0l4-6.92h8zm8 0h8l-4-6.92h-8zm0-13.84l-4-6.92-4 6.92 4 6.92Z" fill="#E60012" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M20.788 3.832c-.101-.105-.197-.213-.301-.317-.103-.103-.211-.202-.32-.302A11.903 11.903 0 0 0 12 0a11.926 11.926 0 0 0-8.486 3.514C-1.062 8.09-1.16 15.47 3.213 20.168c.099.108.197.214.3.32.104.103.21.2.317.3A11.92 11.92 0 0 0 12 24c3.206 0 6.22-1.247 8.487-3.512 4.576-4.576 4.673-11.956.301-16.656zm-16.655.301A11.057 11.057 0 0 1 12 .874c2.825 0 5.49 1.048 7.55 2.958l-1.001 1.002A9.646 9.646 0 0 0 12 2.292a9.644 9.644 0 0 0-6.865 2.844A9.644 9.644 0 0 0 2.292 12c0 2.448.9 4.753 2.542 6.549L3.831 19.55C-.201 15.191-.101 8.367 4.133 4.133zm13.798 1.318v.002l-1.015 1.014A7.346 7.346 0 0 0 12 4.589 7.357 7.357 0 0 0 6.761 6.76 7.362 7.362 0 0 0 4.589 12a7.34 7.34 0 0 0 1.877 4.913l-1.014 1.016A8.77 8.77 0 0 1 3.167 12a8.77 8.77 0 0 1 2.588-6.245A8.771 8.771 0 0 1 12 3.167c2.213 0 4.301.809 5.931 2.284zM18.537 12c0 1.745-.681 3.387-1.916 4.622S13.746 18.538 12 18.538a6.491 6.491 0 0 1-4.296-1.621l-.001-.004c-.11-.094-.22-.188-.324-.291a6.027 6.027 0 0 1-.293-.326A6.47 6.47 0 0 1 5.466 12c0-1.746.679-3.387 1.914-4.621A6.488 6.488 0 0 1 12 5.465c1.599 0 3.105.576 4.295 1.62.111.096.224.19.326.295.104.104.2.214.295.324A6.482 6.482 0 0 1 18.537 12zM7.084 17.534h.001A7.349 7.349 0 0 0 12 19.413a7.35 7.35 0 0 0 5.239-2.174A7.354 7.354 0 0 0 19.412 12a7.364 7.364 0 0 0-1.876-4.916l1.013-1.012A8.777 8.777 0 0 1 20.834 12a8.765 8.765 0 0 1-2.589 6.246A8.764 8.764 0 0 1 12 20.834a8.782 8.782 0 0 1-5.93-2.285l1.014-1.015zm12.783 2.333A11.046 11.046 0 0 1 12 23.125a11.042 11.042 0 0 1-7.551-2.957l1.004-1.001a9.64 9.64 0 0 0 6.549 2.542 9.639 9.639 0 0 0 6.865-2.846A9.642 9.642 0 0 0 21.71 12a9.64 9.64 0 0 0-2.543-6.548l1.001-1.002c4.031 4.359 3.935 11.182-.301 15.417z" fill="#8669AE" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M14.522 14.078h3.27v1.33h-4.847v-6.83h1.577v5.5zm6.74-1.274h1.284v1.195c-.236.09-.698.18-1.137.18-1.42 0-1.893-.721-1.893-2.186 0-1.398.45-2.221 1.869-2.221.791 0 1.24.248 1.612.722l.982-.903c-.6-.855-1.646-1.114-2.629-1.114-2.208 0-3.368 1.205-3.368 3.504 0 2.288 1.047 3.528 3.358 3.528 1.06 0 2.096-.27 2.66-.665V11.53h-2.739v1.274zM5.291 6.709a5.29 5.29 0 1 1 0 10.582 5.291 5.291 0 1 1 0-10.582m3.16 8.457a4.445 4.445 0 0 0 1.31-3.161v-.242l-.22.001H6.596v.494h2.662l-.001.015a3.985 3.985 0 0 1-3.965 3.708 3.95 3.95 0 0 1-2.811-1.165 3.952 3.952 0 0 1-1.164-2.811c0-1.061.414-2.059 1.164-2.81a3.951 3.951 0 0 1 2.81-1.164l.252.003v-.495l-.251-.003a4.475 4.475 0 0 0-4.47 4.469c0 1.194.465 2.316 1.309 3.161a4.444 4.444 0 0 0 3.16 1.31 4.444 4.444 0 0 0 3.162-1.31m-2.91-1.297V9.644H5.04v4.72h1.556v-.495H5.543zm-1.265-3.552a.676.676 0 1 0-.675.674.676.676 0 0 0 .675-.674" fill="#A50034" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M24 16.375a3.05 3.05 0 0 1-.246 1.231 3.114 3.114 0 0 1-1.672 1.66 3.068 3.068 0 0 1-1.225.247 3.695 3.695 0 0 1-.71-.073 4.05 4.05 0 0 1-.739-.218 3.184 3.184 0 0 1-.676-.37 2.02 2.02 0 0 1-.507-.515.46.46 0 0 1-.08-.275.442.442 0 0 1 .152-.346.504.504 0 0 1 .346-.138.553.553 0 0 1 .201.04.392.392 0 0 1 .186.17.046.046 0 0 0 .016.032l.064.065a1.806 1.806 0 0 0 .798.507 3.052 3.052 0 0 0 .943.154 2.12 2.12 0 0 0 .846-.17 2.189 2.189 0 0 0 1.16-1.16 2.115 2.115 0 0 0 .176-.841v-1.109a3.132 3.132 0 0 1-.985.637 3.089 3.089 0 0 1-1.193.234 3.046 3.046 0 0 1-1.231-.246 3.137 3.137 0 0 1-1.66-1.66 3.04 3.04 0 0 1-.247-1.232v-2.544a3.058 3.058 0 0 1 .247-1.225 3.154 3.154 0 0 1 .668-1 3.202 3.202 0 0 1 .986-.669 3.15 3.15 0 0 1 2.463 0 3.09 3.09 0 0 1 1.668 1.668 3.066 3.066 0 0 1 .246 1.225v5.92zm-.967-5.92a2.118 2.118 0 0 0-.17-.846 2.189 2.189 0 0 0-1.16-1.16 2.201 2.201 0 0 0-1.692 0 2.191 2.191 0 0 0-1.166 1.16 2.134 2.134 0 0 0-.168.845v2.531a2.133 2.133 0 0 0 .168.853 2.194 2.194 0 0 0 .468.693 2.171 2.171 0 0 0 .694.467 2.201 2.201 0 0 0 1.692 0 2.189 2.189 0 0 0 1.16-1.16 2.117 2.117 0 0 0 .174-.853zm-7.252 5.356a.435.435 0 0 1-.154.363.511.511 0 0 1-.66 0 .434.434 0 0 1-.153-.363v-5.356a2.118 2.118 0 0 0-.17-.846 2.189 2.189 0 0 0-1.16-1.16 2.201 2.201 0 0 0-1.692 0 2.19 2.19 0 0 0-1.16 1.16 2.127 2.127 0 0 0-.17.846v5.356a.434.434 0 0 1-.152.363.511.511 0 0 1-.661 0 .434.434 0 0 1-.153-.363v-5.356a3.058 3.058 0 0 1 .246-1.225 3.163 3.163 0 0 1 .67-1 3.202 3.202 0 0 1 .984-.669 3.15 3.15 0 0 1 2.464 0 3.091 3.091 0 0 1 1.667 1.668 3.066 3.066 0 0 1 .247 1.225zm-8.383 0a.435.435 0 0 1-.152.363.511.511 0 0 1-.662 0 .434.434 0 0 1-.152-.363V7.956a.435.435 0 0 1 .152-.363.512.512 0 0 1 .662 0 .436.436 0 0 1 .152.363zM4.982 8.44a.463.463 0 0 1-.145.338.483.483 0 0 1-.355.142.503.503 0 0 1-.339-.145l-.016-.017a.149.149 0 0 0-.032-.024.123.123 0 0 1-.033-.025 1.9 1.9 0 0 0-1.24-.43q-.871 0-1.363.595-.491.596-.492 1.693v5.243a.435.435 0 0 1-.153.363.525.525 0 0 1-.33.123.525.525 0 0 1-.33-.123.434.434 0 0 1-.153-.363v-5.243A4.362 4.362 0 0 1 .18 9.303a3.034 3.034 0 0 1 .53-1.031 2.546 2.546 0 0 1 .878-.706 2.763 2.763 0 0 1 1.231-.257 3.08 3.08 0 0 1 1.065.209 2.573 2.573 0 0 1 .934.58.48.48 0 0 1 .163.343zm2.76-3.128a.826.826 0 0 1-.826.827.826.826 0 0 1-.827-.827.826.826 0 0 1 .827-.826.826.826 0 0 1 .826.826Z" fill="#1C9AD6" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M12.0005 0C18.627 0 24 5.373 24 12.0005 24 18.627 18.627 24 11.9995 24 5.373 24 0 18.627 0 11.9995 0 5.373 5.373 0 12.0005 0zm0 19.826a7.8265 7.8265 0 10-.001-15.652C7.7133 4.2246 4.2653 7.7136 4.2653 12c0 4.2864 3.448 7.7754 7.7342 7.826h.001zm0-3.9853a3.8402 3.8402 0 110-7.6803c2.1204.0006 3.839 1.7197 3.839 3.8401s-1.7186 3.8396-3.839 3.8402z" fill="#CC0000" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C24.002 5.375 18.632.002 12.007 0H12zm7.327 18.065s-.581-2.627-1.528-4.197c-.514-.857-1.308-1.553-2.368-1.532-.745 0-1.399.423-2.2 1.553-.469.77-.882 1.573-1.235 2.403 0 0-.29-.675-.63-1.343a8.038 8.038 0 0 0-.605-1.049c-.804-1.13-1.455-1.539-2.2-1.553-1.049-.021-1.854.675-2.364 1.528-.948 1.574-1.528 4.197-1.528 4.197h-.864l4.606-15.12 3.56 11.804.024.021.024-.021 3.56-11.804 4.61 15.113h-.862z" fill="#E1140A" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M0 15.415c0 .468.38.85.848.85h5.937V.575L0 7.72v7.695m15.416 8.582c.467 0 .846-.38.846-.849v-5.937H.573l7.146 6.785h7.697M24 8.587a.844.844 0 0 0-.847-.846h-5.938V23.43l6.782-7.148L24 8.586M8.585.003a.847.847 0 0 0-.847.847v5.94h15.688L16.282.003H8.585Z" fill="#117ACA" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M12 4.983c3.004 0 6.224.612 8.786 2.239C22.451 8.286 24 9.9 24 12.002c0 2.456-2.097 4.242-4.106 5.287-2.391 1.238-5.216 1.728-7.894 1.728-3.003 0-6.217-.605-8.78-2.238C1.556 15.714 0 14.101 0 12.003 0 9.536 2.092 7.757 4.106 6.71 6.504 5.474 9.323 4.983 12 4.983zm-.025.746c-2.793 0-5.802.523-8.225 1.983-1.524.912-3.03 2.347-3.03 4.253 0 2.239 2.04 3.806 3.864 4.706 2.258 1.102 4.897 1.53 7.391 1.53 2.798 0 5.809-.523 8.232-1.983 1.517-.918 3.029-2.346 3.029-4.253 0-2.243-2.035-3.813-3.864-4.705-2.258-1.104-4.898-1.53-7.397-1.53zm-10.54 4.686l4.597-.784 1.384-3.003L8.794 9.63l4.596.784-4.596.792-1.378 3.01-1.384-3.01zm10.106 2.289l2.028-.356.605-1.359.606 1.359 2.028.356-2.028.35-.606 1.36-.605-1.36zm4.196-3.621l2.028-.35.605-1.365.606 1.364 2.028.35-2.028.357-.606 1.36-.606-1.36zM13.57 15.51l2.02-.35.607-1.365.612 1.365 2.027.35-2.027.357-.612 1.36-.606-1.36zm-6.23.491l2.028-.35.612-1.366.605 1.366 2.028.35-2.028.357-.605 1.359-.612-1.359zm10.196-3.353l2.022-.357.605-1.359.612 1.359 2.028.357-2.028.35-.612 1.357-.606-1.357Z" fill="#013C74" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M16.347 21.373c.057-.084.151-.314-.025-.74l-.53-1.428c-.073-.182.084-.293.19-.173 0 0 1.004 1.157 1.264 1.64l.495.822c.425.028 1.6.06 2.732.06a3.26 3.26 0 0 1-.316-.364c-1.93-2.392-3.154-3.724-3.166-3.737-.391-.426-.572-.508-.87-.643a4.82 4.82 0 0 1-.138-.065v.364c0 .047-.057.073-.086.022l-2.846-5.001a1.598 1.598 0 0 0-.508-.587l-.277-.194-1.354 3.123c.212 0 .354.216.27.409l-1.25 2.893h1.147c.443 0 .883.087 1.294.255l.302.125s-.913 1.878-.913 2.867c0 .181.028.362.075.534h2.104l-.096-.595s1.266.294 2.502.413M12 2.437c-6.627 0-12 5.373-12 12 0 2.669.873 5.133 2.346 7.126.503-.218.783-.542.983-.791l2.234-2.858a.467.467 0 0 1 .179-.138l.336-.146 3.674-4.659.534-.417 1.094-1.524a.482.482 0 0 1 .101-.102l.478-.347a.34.34 0 0 1 .398-.004l.578.407c.308.216.557.504.726.84l2.322 4.077c.051.09.09.129.182.174.454.227.732.268 1.33.913.277.304 1.495 1.666 3.203 3.784.236.318.538.588.963.783A11.948 11.948 0 0 0 24 14.437c0-6.627-5.373-12-12-12M3.236 15.1l-.778-.253-.48.662v-.818l-.778-.253.778-.253v-.818l.48.662.778-.253-.48.662Zm-.185 2.676-.252.778-.253-.778h-.818l.661-.481-.253-.777.663.48.66-.48-.252.777.662.481Zm.156-6.195.253.778-.661-.48-.663.48.253-.778-.66-.48h.817l.253-.778.252.777h.818Zm1.314-1.76L4.04 9.16l-.778.253.48-.661-.48-.663.778.254.48-.662v.818l.778.253-.777.252Zm2.045-2.862-.253.777-.252-.777h-.818l.662-.48-.253-.778.661.48.661-.48-.252.777.662.48Zm2.577-1.313-.48.661V5.49l-.779-.254.778-.253v-.817l.48.66.78-.253-.481.663.48.66zm3.265-.75.253.778-.661-.48-.662.48.252-.777-.66-.481h.818L12 3.637l.252.778h.818zm2.93.595v.816l-.481-.661-.777.252.48-.662-.48-.662.777.253.48-.66v.817l.779.252zm5.426 8.285.778.253.48-.662v.818l.778.253-.778.253v.818l-.48-.662-.778.253.48-.662zm-3.077-6.04-.253-.777h-.818l.662-.48-.253-.778.662.48.662-.48-.254.778.662.48h-.818zm1.792 2.086v-.818l-.777-.252.777-.253V7.68l.481.662.777-.254-.48.663.48.66-.777-.252zm1.469 1.278.253-.777.254.777h.816l-.66.481.252.778-.662-.48-.661.48.253-.778-.662-.48zm.506 6.676-.253.778-.253-.778h-.817l.662-.481-.253-.777.66.48.663-.48-.253.777.661.481zm-12.08-.615.76-1.588c.024-.048-.032-.108-.067-.067l-.664.668c-.313.329-.847 1.25-.95 1.421l-.808 1.335a.109.109 0 0 1 .1.162l-.739 1.238c-.18.309.145.523.189.452 1.157-1.868 1.832-1.719 1.832-1.719l.387-.897c.022-.047-.001-.1-.05-.12-.12-.05-.316-.27.01-.885z" fill="#0064FF" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M17.463 11.99l-4.097-7.692-.924 1.707 3.213 5.985-5.483 10.283L4.69 11.99 11.096 0H9.27L2.882 11.99 9.269 24h1.807zm3.655 0L14.711 0h-1.807L6.517 11.99l4.117 7.712.904-1.707-3.193-6.005 5.463-10.263L19.29 11.99 12.904 24h1.807Z" fill="#FFCC33" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        label: 'Arrow Takeoff Angle',
        min: 15,
        max: 75,
        step: 1,
        targetValue: 45,
        tolerance: 8,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'seamAngle', 45);
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle - 45}) translate(-12, -12)`}>
            <path d="M10.873 12.584h.49l-.001-1.452h-.489v-.322h1.94v.322h-.483v1.451h.449c.415 0 .687-.274.687-.646h.32v.972h-2.913v-.325zm4.313.327h1.134l.962-1.779h.482v-.322h-1.45v.322h.419l-.701 1.295-.71-1.295h.51l-.002-.322h-2.104v.322h.482l.978 1.779zM5.073 10.81H2.968v.322h.481l.98 1.779h1.133l.962-1.779h.482v-.322h-1.45v.322h.418l-.7 1.295-.71-1.295h.509v-.322zm3.707-.044c.975 0 1.498.486 1.498 1.096 0 .618-.494 1.111-1.493 1.111-.999 0-1.497-.493-1.497-1.111 0-.61.517-1.096 1.492-1.096zm.017.33c-.333-.005-.527.348-.534.753-.006.39.15.784.506.79.366.007.524-.39.53-.772.008-.405-.168-.764-.502-.77zm10.738-.33c.974 0 1.497.486 1.497 1.096 0 .618-.493 1.111-1.492 1.111-1 0-1.498-.493-1.498-1.111 0-.61.518-1.096 1.493-1.096zm-.517 1.083c-.007.39.15.784.506.79.366.007.524-.39.53-.772.008-.405-.168-.764-.502-.77-.333-.006-.527.347-.534.752zm2.857-6.667L20.656 6.4A10.26 10.26 0 0 1 22.308 12c0 5.693-4.615 10.308-10.308 10.308S1.692 17.693 1.692 12 6.307 1.692 12 1.692c2.07 0 3.996.61 5.611 1.66l1.219-1.219A11.944 11.944 0 0 0 12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12c0-2.533-.785-4.882-2.125-6.818zM18.036.472v.337c.728.394 1.413.859 2.047 1.382l-1.71 1.71a10.29 10.29 0 0 1 1.735 1.732l1.708-1.708c.524.636.989 1.322 1.384 2.038h.328V.473h-5.492z" fill="#003057" />
          </g>
          {showOfficial && (
            <>
              <line x1="0" y1="24" x2="24" y2="0" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <circle cx="12" cy="12" r="10.3" fill="none" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M23.9996 12.1455c0-.0003.0004-.0007.0004-.001l-.0007.0003c-.0039-.0173-.0638-.0248-.172-.0258l-1.595-.0216c-2.4391-.0216-6.9786-.0638-7.1847-.0638h-.0501a1.8954 1.8954 0 0 0-.7028.0982l-.0913.0275a3.2546 3.2546 0 0 1-.795.1718c-.2837.0108-1.3633.0088-1.4085.0088s-1.1258 0-1.4085-.0078a3.2434 3.2434 0 0 1-.795-.1718l-.0913-.0275a1.9045 1.9045 0 0 0-.7037-.0982h-.0441c-.2071 0-4.7466.0206-7.1847.0432l-1.6008.0196c-.1089 0-.1727.0088-.1718.0265l.0913.0226c.336.069.6771.1107 1.0198.1247.6527.0128 5.4346.1325 5.5495.1345.2584-.0067.5155.039.7557.1343h1.4968s-.6046.0353-.6134.0726h-.0373c-.1512 0-.6066 0-.8647-.0118 0 0-.0186.0726.2444.0726.0923.0618.1884.1207.2758.1698h1.2868s-.5055.0304-.5153.0677c-.0599 0-.2797-.0059-.4908-.0118l-.2945-.0088s-.0147.0638.2267.0648l.0412.0255c.4833.217.9953.3632 1.5204.4338.1992.0382.4004.0648.6027.0795 0 0 .2444.0216.2022.0206a9.6487 9.6487 0 0 1-1.701-.2218 4.3198 4.3198 0 0 1-1.276-.5398 1.3917 1.3917 0 0 0-.7381-.2316c-.1698-.0118-5.6486-.2277-5.6604-.2277a5.3434 5.3434 0 0 1-1.0434-.1404L0 12.1258c0 .0147.0383.055.0707.0844.1688.1502.8097.4613 1.1837.5526.6488.157 4.6445.6655 5.3542.745l.3926.0442c1.0728.1158 2.4214.264 3.1085.3337a.8442.8442 0 0 0 .3926-.0216A4.1449 4.1449 0 0 1 12 13.606a4.3124 4.3124 0 0 1 1.5027.2581.8354.8354 0 0 0 .3877.0216c.6871-.0687 2.0396-.2189 3.1035-.3367l.3975-.0442c.7096-.0785 4.7044-.5673 5.3532-.7244.3749-.0903 1.0149-.4024 1.1847-.5526.0303-.0274.067-.0653.0697-.0812l.001-.0001c0-.0004-.0004-.0007-.0004-.001zm-12.2646.9952c-.795 0-1.5812-.0108-1.8099-.0677-.5447-.1354-.7989-.3838-.8421-.4593-.0432-.0756-.0324-.0746.0353-.0746h5.7595c.0677 0 .0726.0069.0344.0746-.0383.0677-.2945.3239-.8412.4593-.2287.0569-1.0149.0658-1.8099.0677h-.5261zm12.1884-.9707a5.345 5.345 0 0 1-1.0443.1413c-.0118 0-5.4965.1963-5.6614.21a1.3917 1.3917 0 0 0-.7381.2316 4.3198 4.3198 0 0 1-1.276.5398 9.6487 9.6487 0 0 1-1.701.2218c-.0422 0 .2022-.0206.2022-.0206a5.1874 5.1874 0 0 0 .6017-.0795 5.5189 5.5189 0 0 0 1.5213-.4338l.0471-.0255c.2415 0 .2277-.0648.2277-.0648l-.2945.0088c-.2179.0059-.4417.0118-.4976.0118-.0098-.0373-.5114-.0677-.5114-.0677h1.2858a5.3585 5.3585 0 0 0 .2709-.1678c.263 0 .2454-.0726.2454-.0726-.2827.0069-.8088.0137-.902.0108-.0088-.0373-.5693-.0726-.5693-.0726h1.4458a1.9327 1.9327 0 0 1 .7597-.1335l5.5534-.1139a6.3607 6.3607 0 0 0 1.0198-.1247l.0684-.0169-.0536.018zm-11.9627.532h.0903l-.1747.1247v.0991h-.1325v-.0972l-.1884-.1266h.1541l.1286.0805.1226-.0805zm.8088.1826h.3023v.0412h-.4338v-.2248h.1315v.1836zm.5408 0h.3131v.0412h-.4427v-.2248h.4378v.0412h-.3082v.051h.3023v.0412h-.3023v.0502zm-2.5225-.1826h.1325v.2238h-.1354v-.0913h-.2778v.0913h-.1325v-.2238h.1325v.0903h.2778l.0029-.0903zm.5978.1256l.1698.0982h-.1492s-.1364-.0972-.1678-.1217c.1345.0049.157-.0098.157-.0324s-.106-.0353-.2267-.0285v.1826h-.1404v-.2228h.3053c.1502 0 .1963.0314.1963.0628 0 .0285-.055.054-.1443.0618zm2.7148-.0559c0-.0226-.106-.0353-.2267-.0285v.1845h-.1394v-.2228h.3013c.1502 0 .1963.0344.1963.0628 0 .0285-.055.054-.1443.0599l.1698.0982h-.1492s-.1364-.0972-.1678-.1217c.1335.0049.16-.0098.16-.0324zm-1.5576.0873c0 .0569-.1227.0756-.2513.0756a1.6114 1.6114 0 0 1-.2071-.0137l.0137-.0481a.9392.9392 0 0 0 .1894.0137c.108 0 .1148-.0128.1148-.0265 0-.0137-.0304-.0226-.0785-.0226l-.0982-.0118c-.0952-.0118-.1345-.0157-.1345-.0726s.1237-.0667.2032-.0667a1.814 1.814 0 0 1 .2081.0177l-.0108.0432a1.1384 1.1384 0 0 0-.1639-.0137c-.0844 0-.1031.0049-.1031.0196s.0275.0236.0697.0236l.1139.0079c.0894.0136.1326.0352.1346.0744zM9.875 12.81c0 .052.1266.0736.211.0736s.1639-.0088.1826-.0088l-.0137.0461c-.0236.002-.106.0108-.1963.0108-.1678 0-.318-.0402-.318-.1217s.1502-.1217.318-.1217c.0982 0 .1757.0098.1963.0098l.0137.0471a1.9641 1.9641 0 0 0-.1826-.0098c-.0883 0-.211.0225-.211.0746zm.9972-2.1996l-.5497-.4976h.3651l.2091.1767.2287.1963.0412.0373.0412-.0363.422-.371h.1423c-.1777.1698-.5094.4908-.5094.4908l-.0196.0186v.4319h-.3494v-.4281l-.0215-.0186zm5.3768.4466h-1.4732v-.9452h.3259v.8284h1.1474v.1168zm2.1858-.0059H16.938v-.9374h1.4782v.1168h-1.1631v.2915h1.1435v.1207h-1.1435v.2925h1.1817v.1159zm-12.4142.002h-.3327v-.9432h.3327v.4172h.9148V10.11h.3308v.9432h-.3308V10.64h-.9148v.4131zm2.5441-.003H8.229v-.9452h.8834c.168-.0107.3362.0186.4908.0854a.1964.1964 0 0 1 .1188.1678c-.001.108-.0805.214-.3612.2444l-.0805.0088.0618.0491c.0893.0726.3121.2945.4162.3926l.0097.003h-.3847c-.0569-.0628-.373-.3494-.5104-.4908a2.1988 2.1988 0 0 0 .3926-.0481.1433.1433 0 0 0 .0982-.1315.1152.1152 0 0 0-.052-.0913c-.0805-.0677-.265-.0677-.4809-.0677h-.266v.8235zm4.9056-.2424c0-.0569-.0491-.0834-.0982-.0982a1.2952 1.2952 0 0 0-.2032-.0363c-.1845-.0236-.2787-.0373-.3435-.0481a.9384.9384 0 0 1-.3406-.0982.1872.1872 0 0 1-.0932-.1727c-.001-.0991.0844-.162.2228-.2032.146-.0362.2962-.053.4466-.0501.2342.0027.468.0208.6998.054l-.0226.1139a3.124 3.124 0 0 0-.5408-.0501 1.2286 1.2286 0 0 0-.2945.0236c-.0609.0167-.0982.054-.0982.0982a.1091.1091 0 0 0 .0883.0982c.06.017.1214.0282.1835.0334.1031.0098.2483.0304.3867.0491a.8507.8507 0 0 1 .3308.0982.1906.1906 0 0 1 .0982.1698c.001.0962-.0864.1698-.2444.2208a2.0935 2.0935 0 0 1-.5889.0707l.001-.0069a4.8331 4.8331 0 0 1-.6743-.053l.0294-.1345c.2054.0451.415.0678.6252.0677a.8745.8745 0 0 0 .3514-.0481.112.112 0 0 0 .0787-.0982zm-10.2872-.2209c0-.158.1031-.2709.2778-.3543a1.622 1.622 0 0 1 .6782-.1276c.1911.0011.3819.0146.5712.0402l.0265.1286a5.1308 5.1308 0 0 0-.5212-.0353 1.2396 1.2396 0 0 0-.4397.0766c-.1325.052-.2434.1374-.2434.2689.001.1315.1109.2169.2434.2689.1407.0519.2897.0778.4397.0766a5.1308 5.1308 0 0 0 .5212-.0353l-.0344.1315a4.4382 4.4382 0 0 1-.5712.0402 1.6324 1.6324 0 0 1-.6704-.1247c-.1796-.0834-.2777-.2002-.2777-.3543zm16.4207.4731h-.3318v-.9462h.8834a1.0791 1.0791 0 0 1 .4908.0864.1964.1964 0 0 1 .1188.1669c-.001.1089-.0805.215-.3612.2454l-.0805.0079.0618.0491c.0893.0726.3121.2895.4162.3926v.001h-.3789c-.0569-.0628-.374-.3494-.5104-.4908a2.1177 2.1177 0 0 0 .3926-.0491.1424.1424 0 0 0 .0982-.1305.1152.1152 0 0 0-.052-.0913c-.0815-.0687-.265-.0687-.4809-.0687h-.266v.8273z" fill="#000000" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z" fill="#0175C2" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M12.291 4.57a7.46 7.46 0 0 0-7.338 5.006h.568a6.926 6.926 0 0 1 6.483-4.494 6.922 6.922 0 0 1 6.922 6.924c0 .116 0 .234-.01.351l.533.059c0-.134.01-.273.01-.4a7.46 7.46 0 0 0-7.168-7.446zM.869 10.113 0 10.566l13.25 1.44 3.63-1.893H.87zm3.682 1.483v.41a7.46 7.46 0 0 0 14.498 2.441h-.57a6.924 6.924 0 0 1-6.475 4.487 6.928 6.928 0 0 1-6.92-6.928v-.352l-.533-.058zm6.193.414-3.63 1.898h16.011l.873-.453v-.006l-13.254-1.44zm13.254 1.44H24l-.002-.007v.006z" fill="#F7FF14" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M0 10.325l23.98 4.46c-.021.657-.062 2.712-.103 3.903-.041 1.418-.35 2.281-.925 2.815-.801.72-1.747.884-4.007 1.007-5.219.288-10.54.247-17.219-.226-.699-.04-.966-.185-1.089-.267-.288-.205-.329-.431-.411-1.603-.062-.801-.164-3.123-.205-3.904 3.102.206 7.849.37 11.712.37.966 0 3.493.02 4.171.02.534 0 1.233-.143 1.582-.698L0 13.222zm.02-1.253c.021-.76.062-2.65.103-3.76.041-1.418.35-2.281.925-2.815.801-.72 1.747-.884 4.007-1.007 5.219-.288 10.54-.247 17.219.226.699.04.966.185 1.089.267.288.205.329.431.411 1.603.041.678.144 2.486.185 3.472-2.301-.123-6.206-.308-9.596-.35-3.39-.04-6.452.021-6.822.063-.74.102-1.089.452-1.192.595L24 10.634v2.568Z" fill="#33302E" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M20.576 14.955l-.01.028c-1.247 3.643-4.685 6.086-8.561 6.086-3.876 0-7.32-2.448-8.562-6.09l-.01-.029H.71v.329l1.133.133c.7.08.847.39 1.038.78l.048.096c1.638 3.495 5.204 5.752 9.08 5.752 3.877 0 7.443-2.257 9.081-5.747l.048-.095c.19-.39.338-.7 1.038-.781l1.134-.134v-.328zM3.443 9.012c1.247-3.643 4.686-6.09 8.562-6.09 3.876 0 7.319 2.447 8.562 6.09l.01.028h2.728v-.328l-1.134-.133c-.7-.081-.847-.39-1.038-.781l-.047-.096C19.448 4.217 15.88 1.96 12.005 1.96c-3.881 0-7.443 2.257-9.081 5.752l-.048.095c-.19.39-.338.7-1.038.781l-1.133.133v.329h2.724zm13.862 1.586l-1.743 2.795h.752l.31-.5h2.033l.31.5h.747l-1.743-2.795zm1.033 1.766h-1.395l.7-1.124zm2.81-1.066l2.071 2.095H24v-2.795h-.614v2.085l-2.062-2.085h-.795v2.795h.619zM0 13.393h.619v-2.095l2.076 2.095h.781v-2.795h-.619v2.085L.795 10.598H0zm4.843-2.795h.619v2.795h-.62zm4.486 2.204c-.02.005-.096.005-.124.005H6.743v.572h2.5c.019 0 .167 0 .195-.005.51-.048.743-.472.743-.843 0-.381-.243-.79-.705-.833-.09-.01-.166-.01-.2-.01H7.643a.83.83 0 0 1-.181-.014c-.129-.034-.176-.148-.176-.243 0-.086.047-.2.18-.238a.68.68 0 0 1 .172-.014h2.357v-.562H7.6c-.1 0-.176.004-.238.014a.792.792 0 0 0-.695.805c0 .343.214.743.685.81.086.009.205.009.258.009H9.2c.029 0 .1 0 .114.005.181.023.243.157.243.276a.262.262 0 0 1-.228.266zm4.657 0c-.02.005-.096.005-.129.005H11.4v.572h2.5c.019 0 .167 0 .195-.005.51-.048.743-.472.743-.843 0-.381-.243-.79-.705-.833-.09-.01-.166-.01-.2-.01H12.3a.83.83 0 0 1-.181-.014c-.129-.034-.176-.148-.176-.243 0-.086.047-.2.18-.238a.68.68 0 0 1 .172-.014h2.357v-.562h-2.395c-.1 0-.176.004-.238.014a.792.792 0 0 0-.695.805c0 .343.214.743.686.81.085.009.204.009.257.009h1.59c.029 0 .1 0 .114.005.181.023.243.157.243.276a.267.267 0 0 1-.228.266Z" fill="#C3002F" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M1.953 11.643c0 1.51 1.83 2.69 4.601 3.344l4.841-5.523H12l-4.19 8.06C3.25 16.744 0 14.71 0 12.233c0-3.184 5.376-5.757 12-5.757s12 2.573 12 5.757c0 2.477-3.25 4.511-7.81 5.293L12 9.464h.605l4.84 5.523c2.772-.654 4.601-1.834 4.601-3.344 0-2.664-4.484-4.88-10.047-4.88-5.562 0-10.046 2.216-10.046 4.88z" fill="#020B24" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M11.999 12.876c-.036 0-.105-.046-.222-.26a7.531 7.531 0 00-1.975-2.353A8.255 8.255 0 007.7 9.065a17.945 17.945 0 00-.345-.136c-1.012-.4-2.061-.813-3.035-1.377A8.982 8.982 0 014 7.362c.194-.34.42-.665.67-.962a6.055 6.055 0 011.253-1.131 7.126 7.126 0 011.618-.806c1.218-.434 2.677-.647 4.458-.649 1.783.002 3.241.215 4.459.65a7.097 7.097 0 011.619.805c.471.319.892.699 1.253 1.13.25.298.475.623.67.963-.103.064-.212.129-.32.192-.976.564-2.023.977-3.037 1.376l-.345.136a8.26 8.26 0 00-2.1 1.198 7.519 7.519 0 00-1.975 2.354c-.117.213-.187.259-.224.259m0 7.072c-1.544-.002-2.798-.129-3.83-.387-1.013-.252-1.855-.64-2.576-1.188a5.792 5.792 0 01-1.392-1.537 7.607 7.607 0 01-.81-1.768 10.298 10.298 0 01-.467-2.983c0-.674.047-1.313.135-1.901 1.106.596 2.153.895 3.08 1.16l.215.06c1.29.371 2.314.857 3.135 1.488.475.368.89.793 1.23 1.264.369.508.663 1.088.877 1.725.096.289.2.468.403.468.207 0 .308-.18.405-.468a6.124 6.124 0 012.107-2.988c.82-.632 1.845-1.118 3.135-1.489l.216-.06c.926-.265 1.973-.564 3.078-1.16.09.589.136 1.227.136 1.9 0 .458-.046 1.664-.465 2.984a7.626 7.626 0 01-.809 1.768 5.789 5.789 0 01-1.396 1.537c-.723.548-1.565.936-2.574 1.188-1.035.258-2.288.385-3.833.387m9.692-14.556c-1.909-2.05-4.99-2.99-9.692-2.995-4.7.005-7.781.944-9.69 2.994C.89 6.913 0 9.018 0 11.874c0 1.579.39 5.6 3.564 7.676 1.9 1.242 4.354 2.046 8.435 2.052 4.083-.006 6.536-.81 8.437-2.052C23.609 17.474 24 13.452 24 11.874c0-2.848-.897-4.968-2.31-6.483Z" fill="#101010" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M23.77 10.908c-.23-4.018-1.492-6.89-3.33-8.496C18.489.689 14.814 0 12.057 0c-2.87 0-6.43.689-8.382 2.412C1.839 4.019.46 7.004.23 10.908c-.23 3.675.574 7.81 2.641 10.106C4.823 23.31 8.843 24 11.943 24s7.12-.689 9.072-2.986c2.18-2.296 2.986-6.316 2.755-10.106m-12.4-9.761h1.377v8.73H11.37ZM1.839 14.585c-.116-1.493-.575-6.89 1.607-9.99.919-1.38 2.182-2.297 3.56-2.757 1.838-.689 4.134-.689 4.134-.689-.919 2.181-2.641 6.89-2.985 7.924-.46 1.263-.804 1.952-1.15 4.248-.229 1.838-.688 6.546-.688 8.612-2.641-1.262-4.133-3.56-4.478-7.35m15.847 7.466c-1.723.803-3.905.918-5.628.918-1.722 0-3.903-.23-5.626-.918.574-1.607 3.33-8.269 4.823-10.91h1.608c1.493 2.643 4.248 9.417 4.823 10.91m4.592-7.466c-.344 3.79-1.837 6.088-4.363 7.35-.115-2.066-.459-6.774-.689-8.612-.345-2.296-.688-2.985-1.148-4.248-.345-1.034-2.182-5.742-2.986-7.924 0 0 2.181 0 4.134.69 1.378.458 2.642 1.377 3.56 2.756 1.952 3.1 1.607 8.497 1.493 9.99" fill="#000000" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M12 .6c-2.167 0-4.264.667-6.019 1.888a32.768 32.768 0 0 1-2.167-.48A12.262 12.262 0 0 0 0 8.615a32.75 32.75 0 0 1 1.5 1.636c-.3705 4.3908 2.0301 8.5486 6.018 10.423.247.699.47 1.404.668 2.117a12.266 12.266 0 0 0 7.629 0c.197-.713.42-1.419.667-2.118 3.9876-1.8737 6.3882-6.0307 6.018-10.421.482-.563.982-1.11 1.5-1.636a12.261 12.261 0 0 0-3.814-6.609c-.716.185-1.439.345-2.167.481A10.535 10.535 0 0 0 12 .6zm0 .642c1.806 0 3.562.494 5.086 1.407a32.724 32.724 0 0 1-10.172 0A9.896 9.896 0 0 1 12 1.242zM3.994 2.715c.431.107.865.204 1.301.293a10.537 10.537 0 0 0-3.687 6.387c-.295-.332-.597-.659-.904-.98a11.619 11.619 0 0 1 3.29-5.7zm16.012 0a11.62 11.62 0 0 1 3.29 5.7c-.307.321-.609.648-.904.98a10.537 10.537 0 0 0-3.687-6.387c.436-.089.87-.186 1.301-.293zm-13.873.454a33.353 33.353 0 0 0 11.734 0 9.885 9.885 0 0 1 3.966 6.873 33.352 33.352 0 0 0-5.866 10.16 9.89 9.89 0 0 1-7.935 0 33.367 33.367 0 0 0-5.866-10.16 9.895 9.895 0 0 1 3.967-6.873zm6.018.867a.662.662 0 0 0-.448 1.132.652.652 0 0 0-.971.573.652.652 0 0 0 1.03.535c-.241.404-.606.944-1.13.944-.547 0-.811-.228-1.052-.633a.548.548 0 0 0 .318-.021c.316-.105.493-.423.404-.823-.079-.354-.456-.55-.799-.45a.637.637 0 0 0-.291.18.698.698 0 0 0 .064-.519c-.098-.349-.512-.628-.873-.574l1.415 3.475c-.073.078-.18.196-.256.329-.302-.153-.909-.379-1.514-.135a1.553 1.553 0 0 0-.522.349c-.45.45-.676 1.2-.793 1.731a8.3307 8.3307 0 0 0-.08.415c.188-.141.31-.23.424-.306.102-.068.2-.124.336-.194.247-.127.583-.264.886-.264.163 0 .347.043.472.148.045.037.405.543 1.114.729.666.175.68.287.69.377 0 0-.116.19-.367.365a2.685 2.685 0 0 0-.346-.445c-.331-.346-.862-.532-1.296-.529-.413.004-.718.192-1.526.192-.82 0-1.39-.207-1.81-.454-.302-.164-.52-.37-.723-.535.108.263.213.472.307.684.07.151.327.667.648.947.413.35.822.465 1.224.465.408 0 .81-.119 1.206-.236.39-.116.766-.228 1.142-.228.487 0 .752.163.964.294a6.196 6.196 0 0 1-.225.15c-.3.191-.539.262-.771.262-.286 0-.801-.15-1.25-.33a1.2368 1.2368 0 0 0-.006.102v.116c0 .253.041.557.326.85.123.125.275.222.454.29.187.07.407.105.646.117-.109.1-.211.194-.31.316-.24.296-.435.692-.435 1.202 0 .262.046.481.111.691.047.149.093.284.157.445l.212-.255c.004-.004.236-.278.555-.51a2.98 2.98 0 0 0-.326 1.325c0 1.012.563 1.834 1.332 2.48 0 0 .183.163.312.263-.003-.162 0-.267 0-.408 0-.493.08-1.448.405-2.025.035.135.075.334.11.558.045.298.081.641.081.94 0 .496-.072.863-.156 1.127-.098.304-.18.42-.255.547a3.34 3.34 0 0 0 .882-.09 2.3 2.3 0 0 0 1.72-1.555c.09-.283.136-.596.136-.94 0-.198-.018-.403-.046-.603l-.024-.16c.055.044.093.085.14.138.18.207.343.524.343 1.036 0 .175-.01.445-.084.749.174-.058.351-.163.52-.27.204-.13.397-.284.572-.46.48-.48.811-1.117.818-1.845.005-.475-.096-.855-.32-1.299-.024-.048-.052-.097-.077-.146.052.022.101.05.147.08.255.164.42.424.53.718.066.177.114.35.147.554.074-.09.162-.212.262-.385.201-.348.414-.883.414-1.647 0-.375-.049-.806-.22-1.255a2.883 2.883 0 0 0-.85-1.202c.2643.0287.511.146.7.333.125.126.223.28.313.452l.095.19c.009-.093.008-.123.01-.204-.02-1.351-.397-2.34-1.626-2.978l-.007-.004c.43-.488.638-1.038.783-1.63-.296-.075-.843-.138-1.673.25l1.32-3.254c-.362-.054-.775.225-.873.574a.695.695 0 0 0 .065.519.642.642 0 0 0-.292-.181c-.343-.1-.72.097-.8.451-.088.4.089.718.405.822.134.04.177.045.318.021-.241.405-.494.629-1.041.629-.524 0-.892-.535-1.133-.94 0 0 .246.122.385.122a.651.651 0 0 0 .645-.657.652.652 0 0 0-.645-.658.634.634 0 0 0-.33.093.694.694 0 0 0 .202-.481.651.651 0 0 0-.645-.658zm3.608 3.585h.147l-.047.14c-.151.447-.629 1.516-1.802 1.779l.005.022.05.247c.497-.092.817-.303 1.107-.555.742.361 1.242.961 1.42 1.76l.034.157a.668.668 0 0 0-.114-.1 1.345 1.345 0 0 0-.719-.194c-.262 0-.489.063-.602.102.186.159.337.297.471.431.41.411.677.803.837 1.235.12.326.18.67.18 1.048 0 .403-.072.772-.213 1.098-.011.026-.04.092-.052.127a.706.706 0 0 0-.044-.126c-.341-.72-.91-.872-1.328-.872-.07 0-.13.004-.184.008l.006.01c.278.428.698 1.075.698 1.87 0 .26-.048.516-.142.759a2.4 2.4 0 0 1-.55.83c-.118.117-.222.214-.397.333l-.1.071a.465.465 0 0 0 .02-.12c.024-.897-.475-1.61-1.272-1.827l.018.076c.087.353.186.752.186 1.292 0 .583-.145 1.066-.43 1.436a1.954 1.954 0 0 1-.688.556 2.23 2.23 0 0 1-.652.219l-.109.018c.011-.014.034-.063.045-.087a1.0898 1.0898 0 0 0 .054-.161c.124-.455.127-1.001.127-1.069 0-.845-.21-1.618-.336-2.08l-.026-.098c-.1.074-.166.14-.211.186l-.02.021c-.263.263-.455.723-.57 1.367-.035.197-.052.362-.07.537l-.013.195-.003.121s-.072-.08-.09-.098a4.643 4.643 0 0 1-.188-.204 3.207 3.207 0 0 1-.483-.71 2.495 2.495 0 0 1-.177-.482 2.302 2.302 0 0 1-.07-.561c0-1.062.641-1.774.918-2.058l-.09.016a3.31 3.31 0 0 0-.326.08 2.172 2.172 0 0 0-.546.252 3.171 3.171 0 0 0-.603.513s-.018-.083-.021-.107a2.518 2.518 0 0 1-.04-.391c0-.441.168-.833.5-1.163.312-.313.551-.413 1.265-.712l.218-.091-.314.043c-.438.062-.638.09-1.009.09-.525 0-.887-.107-1.106-.327a.75.75 0 0 1-.123-.158 1.549 1.549 0 0 1-.117-.243l.272.099c.054.017.117.036.17.05a1.9 1.9 0 0 0 .49.07c.444 0 .804-.194 1.24-.508.182-.13.336-.258.456-.378.182-.182.221-.28.222-.297-.008-.269-.016-.523-.951-.768a1.782 1.782 0 0 1-.913-.59.8119.8119 0 0 0-.063-.068 1.046 1.046 0 0 0-.682-.229c-.196 0-.409.043-.651.132a4.7942 4.7942 0 0 0-.395.166l-.108.05.036-.113c.04-.132.085-.252.144-.391.05-.118.1-.22.156-.314.184-.31.412-.522.676-.629.138-.056.288-.084.447-.084.385 0 .732.167.875.247.01.71.438 1.12.93 1.12a.856.856 0 0 0 .643-.275c.121-.122.196-.258.244-.366.039-.087.067-.15.07-.2l.005.001a.496.496 0 0 1 .211.132l.236-.21a1.118 1.118 0 0 0-.401-.264 1.424 1.424 0 0 0-.464-.098 1.68 1.68 0 0 0-.36.026c-.123.02-.222.048-.396.048a.693.693 0 0 1-.358-.09 1.73 1.73 0 0 1 .525-.535l.006-.004h3.817l.074.003a3.287 3.287 0 0 0-.747.655l.215.17c.498-.622 1.272-1.01 2.02-1.01v.001zm-.457.494c-.621.08-1.182.635-1.182.635l.127.27c.293-.062.521-.22.69-.389.248-.248.347-.437.365-.516zm-5.542.543l.138.038c.055.016.132.032.207.042l.036.006.007.035a.27.27 0 0 0 .072.144.302.302 0 0 0 .43 0 .297.297 0 0 0 .088-.196l.002-.048.047-.002a2.6025 2.6025 0 0 1 .22 0l.117.008-.018.07a.852.852 0 0 1-.228.425.609.609 0 0 1-.469.192.578.578 0 0 1-.41-.175.81.81 0 0 1-.219-.43l-.02-.109zm4.513 1.49l-.133.416c.085.098.148.19.2.267.146.214.238.41.29.614.05.2.056.392.056.57 0 .142-.015.285-.046.425-.022.101-.053.21-.079.293-.024.08-.079.226-.079.226s-.008-.165-.023-.255-.029-.186-.053-.264a1.437 1.437 0 0 0-.353-.604 1.41 1.41 0 0 0-.35-.253 1.821 1.821 0 0 0-.284-.118c.022.083.045.173.07.28.064.276.093.504.093.716 0 .337-.075.622-.232.871a1.323 1.323 0 0 1-.187.234 2.039 2.039 0 0 1-.386.316c.036-.06.065-.122.1-.193.042-.087.068-.18.087-.248.186-.657-.121-1.063-.37-1.312a2.3783 2.3783 0 0 0-.103-.098c-.004.092-.008.184-.014.277-.022.318-.08.68-.35.948a1.942 1.942 0 0 1-.139.13c-.052.042-.111.092-.19.14.033-.064.06-.096.11-.218a.97.97 0 0 0-.029-.78l-.34.183c.01.025.017.052.024.076a.71.71 0 0 1-.086.577c-.05.08-.115.16-.204.25-.079.077-.162.152-.235.218l-.156.141.139-.001c.15-.002.35-.01.563-.047.34-.062.605-.192.813-.4a1.34 1.34 0 0 0 .218-.287c-.01.11-.037.222-.084.34a2.265 2.265 0 0 1-.239.436c-.065.095-.138.2-.232.315l-.086.105.134-.02c.162-.023.323-.056.48-.098a1.742 1.742 0 0 0 1.078-.777c.1-.158.172-.323.218-.504a2.35 2.35 0 0 0 .066-.696c.03.052.057.109.083.172.054.136.09.29.11.47.01.112.016.235.016.385v.03c0 .144 0 .281-.011.436l-.011.152.103-.112c.134-.147.279-.315.427-.55a2.543 2.543 0 0 0 .332-1.978 2.31 2.31 0 0 0-.359-.76 3.15 3.15 0 0 0-.349-.417l-.018-.019zm-3.275.165a.5.5 0 0 0-.215.049c.273.029.341.113.467.238.066.067.129.138.194.204.12.12.231.219.436.219a.613.613 0 0 0 .157-.022.981.981 0 0 0 .305-.141.528.528 0 0 1-.203.041c-.511 0-.663-.588-1.14-.588h-.001zm-5.83.1c.06.038.186.127.365.2.167.07.343.135.55.184.278.065.586.097.94.097.326 0 .717-.052 1.162-.153.143-.032.292-.062.413-.062.215 0 .424.035.578.116.153.082.261.17.395.279a2.71 2.71 0 0 0-.48-.071c-.143-.01-.34.003-.465.022-.28.041-.525.114-.783.19l-.03.01c-.39.115-.759.224-1.123.224-.422 0-.803-.157-1.101-.455-.065-.065-.171-.17-.242-.27a1.994 1.994 0 0 1-.179-.31v-.001zm-3.061.567a32.694 32.694 0 0 1 5.084 8.805 9.895 9.895 0 0 1-5.086-8.647c0-.054 0-.106.002-.158zm19.786 0l.002.157a9.895 9.895 0 0 1-5.086 8.648 32.665 32.665 0 0 1 5.085-8.805h-.001zM8.313 21.007a10.535 10.535 0 0 0 7.375 0c-.14.423-.273.847-.396 1.274a11.616 11.616 0 0 1-6.583 0 33.2233 33.2233 0 0 0-.397-1.273l.001-.001z" fill="#041E42" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M12 0C5.3726 0 0 5.3726 0 12s5.3726 12 12 12 12-5.3726 12-12S18.6274 0 12 0Zm0 22.9636C5.945 22.9636 1.0364 18.055 1.0364 12 1.0364 5.945 5.945 1.0364 12 1.0364S22.9636 5.945 22.9636 12 18.055 22.9636 12 22.9636Zm5.189-7.2325-.269.7263h-.984c.263-.7089 3.5783-8.6177-2.9362-13.9819a9.5254 9.5254 0 0 0-4.0531.4483c.2172.175 2.474 2.0276 3.5373 4.315l-.312.084c-.5861-.6387-2.7156-2.9833-4.7448-3.7379a9.6184 9.6184 0 0 0-2.8448 2.3597c.953.4875 3.4432 1.9748 4.3896 3.1302-.0542.0244-.267.139-.267.139-1.736-1.3195-4.8199-2.0043-4.9775-2.0383a9.5126 9.5126 0 0 0-1.2267 3.6098c4.7759.9613 6.0618 3.1715 6.2818 5.6721H7.878l-1.5545-.6776a.8563.8563 0 0 0-.2524-.0531H3.1767a9.587 9.587 0 0 0 1.9267 2.9155h1.2334c.1063 0 .1993-.0133.2923-.0664l1.2489-.6378h9.042l.269.7264a4.8386 4.8386 0 0 0 2.9466-1.4667 4.839 4.839 0 0 0-2.9467-1.4666zm-4.14-.5786a1.1863 1.1863 0 0 1-.5038-1.2162 1.1862 1.1862 0 0 1 .931-.9309 1.1863 1.1863 0 0 1 1.2161.5038c.3098.4636.2563 1.0924-.1473 1.496-.4032.4032-1.0318.4574-1.496.1473z" fill="#0E3A2F" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M0 9.1723h7.5563c.48-.749 1.1108-1.3428 1.8935-1.7828.7822-.4393 1.6314-.659 2.5484-.659.9163 0 1.7673.2203 2.5526.6615.7852.4412 1.4154 1.035 1.8892 1.7803H24l-.7483.7483h-6.3994a4.278 4.278 0 0 1 .299.8886h5.2333l-.7483.749h-4.3692c.0129.1932.019.3396.019.4393 0 .0997-.0061.2468-.019.44h3.4904l-.7489.7483h-2.8572a4.0661 4.0661 0 0 1-.299.8844h2.264l-.7582.7483H16.44c-.4738.7464-1.104 1.3421-1.8892 1.7858-.7853.4437-1.6363.6652-2.5526.6652-.917 0-1.7662-.2209-2.5484-.6627-.7827-.4425-1.4135-1.0388-1.8935-1.7883H5.6418l-.744-.7483h2.2597a4.093 4.093 0 0 1-.296-.8844H4.0062l-.7582-.7483h3.4898c-.0129-.1932-.019-.3403-.019-.44 0-.0997.0061-.2461.019-.4393h-4.36l-.7581-.749h5.2418a4.306 4.306 0 0 1 .296-.8886H.7483zm7.8437 1.0714c-.2382.5581-.3575 1.1428-.3575 1.7538 0 .6111.1193 1.1963.3575 1.7545.2381.5575.5594 1.0394.963 1.4443.4038.405.8838.7268 1.44.9662.5564.2393 1.1404.3587 1.7515.3587.6104 0 1.195-.1194 1.7532-.3587.5575-.2394 1.0388-.5613 1.4424-.9662.4037-.405.725-.8868.9656-1.4443.24-.5582.36-1.1434.36-1.7545 0-.611-.12-1.1957-.36-1.7538-.2406-.5582-.5619-1.0388-.9656-1.4425-.4036-.403-.8849-.7243-1.4424-.9637-.5582-.2393-1.1428-.3587-1.7532-.3587-.6111 0-1.1951.1194-1.7514.3587-.5563.2394-1.0363.5607-1.44.9637-.4037.4037-.725.8843-.9631 1.4425zm.5538 2.9421h.4677l-.0135-1.7729.5661 1.773.52-.0032.5557-1.7606v1.7637h.4991v-2.3766l-.7028-.0006-.603 1.8954-.6148-1.893-.6745-.0018zm3.133 0h.4953v-2.3766h-.4953zm1.0332 0h.477v-1.712l.9488 1.712h.5754v-2.3766h-.4677v1.7219l-.9489-1.7219h-.5846zm2.5483 0h.4862v-2.3766h-.4862z" fill="#000000" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M.383 9.258c-.158 0-.282.068-.338.182-.068.114-.057.262.022.387l.17.296c.09.16.214.182.304.205.08.012.136.023.192.137l.158.273c.125.228.26.25.362.273.079.012.158.023.259.205.102.182.249.456.621.569.034.012 3.601 1.059 3.613 1.059.373.126.474.262.587.433.068.102.26.376.711.501l3.432.933a.704.704 0 0 0 .711-.182l.621-.592c.091-.08.136-.114.192-.114.057 0 .102.034.192.114l.621.592c.113.091.339.273.712.182l3.431-.933c.463-.125.644-.399.711-.501.113-.171.215-.319.587-.433 0 0 3.568-1.047 3.613-1.059.361-.113.52-.387.621-.569.102-.182.169-.193.248-.205.102-.023.249-.045.373-.273l.158-.273c.068-.114.113-.125.192-.137.09-.023.214-.046.305-.205l.169-.296c.079-.136.091-.273.023-.387a.386.386 0 0 0-.339-.182h-9.675c-.158 0-.406 0-.666.262a.938.938 0 0 0-.169.239c-.079.148-.136.25-.407.25h-1.411c-.26 0-.327-.102-.406-.25a1.017 1.017 0 0 0-.17-.239c-.259-.262-.508-.262-.666-.262H.383Zm.001.239h9.675c.146 0 .316 0 .497.193.112.114.146.24.248.365H.812c-.293 0-.327 0-.417-.137l-.124-.216c-.034-.057-.045-.114-.023-.148.023-.034.068-.057.136-.057Zm13.569 0h9.675c.068 0 .113.023.136.057a.186.186 0 0 1-.023.148l-.124.216c-.09.137-.124.137-.418.137h-9.991c.102-.125.136-.251.248-.365.192-.193.351-.193.497-.193Zm-7.304.74h10.702v1.708H6.649v-1.708Zm10.894.023h5.566c-.023.034-.034.057-.056.08 0 0-.09.148-.124.227-.136.217-.204.216-.587.182l-4.799-.284v-.205Zm-16.641.011h5.566v.205l-4.798.285c-.383.022-.451.034-.587-.182l-.124-.228c-.023-.034-.045-.057-.057-.08Zm7.354.311a.341.341 0 0 0-.219.077.287.287 0 0 0-.09.204c0 .126.067.217.203.285.147.068.214.091.248.137a.115.115 0 0 1-.011.171.245.245 0 0 1-.135.034.453.453 0 0 1-.294-.125l.011.182c.085.043.177.07.271.079a.438.438 0 0 0 .26-.079c.124-.091.124-.285.045-.376-.056-.08-.147-.114-.316-.205-.079-.045-.113-.08-.113-.137 0-.113.147-.147.282-.102a.44.44 0 0 1 .124.068l-.011-.171a2.09 2.09 0 0 0-.113-.034c-.011 0-.07-.011-.142-.008Zm.368.008-.011.148c.124-.012.214-.023.293-.023v.865h.192v-.865c.046 0 .136 0 .294.023l-.011-.148h-.757Zm1.264 0c-.293 0-.496.205-.496.512 0 .296.203.513.496.513.294 0 .497-.217.497-.513 0-.307-.203-.512-.497-.512Zm4.957 0-.012.148c.124-.012.215-.023.294-.023v.877-.012h.192v-.865c.045 0 .135 0 .293.023l-.011-.148h-.756Zm-.508.011c-.102 0-.17 0-.226.011v.991h.192v-.421h.067l.305.421h.226l-.35-.444a.32.32 0 0 0 .158-.103.338.338 0 0 0 .057-.17c0-.148-.113-.217-.204-.251a.62.62 0 0 0-.225-.034Zm-6.932 0-.418.991h.169l.102-.251h.373l.09.251h.215l-.418-.991h-.113Zm3.138 0v.991h.136v-.672l.587.672h.102v-.991h-.136v.672l-.587-.672h-.102Zm1.468 0-.111.979h.156l.057-.603.282.569h.09l.271-.569.056.615h.204l-.113-.991h-.102l-.338.695-.35-.695h-.102Zm-.111.979h-.002v.012l.002-.012Zm1.601-.979-.417.991h.169l.101-.251h.373l.09.251h.215l-.418-.991h-.113Zm2.235 0v.991h.192v-.991h-.192Zm.384 0v.991h.136v-.672l.587.672h.102v-.991h-.136v.672l-.587-.672h-.102Zm-9.652.091v.251l-3.985.455c-.429.046-.519.057-.654-.137a1.834 1.834 0 0 1-.102-.159c-.023-.046-.045-.091-.079-.125.09-.012.192-.012.226-.012l4.594-.273Zm11.064 0 4.595.273c.034 0 .124.012.226.012-.023.034-.057.08-.079.125a1.834 1.834 0 0 1-.102.159c-.135.194-.226.183-.655.137l-3.985-.455v-.251Zm-7.644 0c.068 0 .114.011.159.046.135.114.135.33.135.352 0 .274-.136.399-.294.399-.146 0-.282-.125-.293-.398 0-.205.09-.399.293-.399Zm4.415.023h.067c.113 0 .204.046.204.171 0 .08-.046.171-.204.171-.022 0-.056-.012-.078-.012h.011v-.33Zm-6.887.136.147.376h-.282l.135-.376Zm6.096.001.147.375h-.282l.135-.375Zm4.043.318 4.03.455-.824.24c-.226.056-.429.034-.745-.023l-2.461-.41v-.262Zm-11.087 0v.262l-2.461.41c-.327.057-.531.08-.745.023l-.824-.239 4.03-.456Zm0 .478v.331l-.925.238c-.283.069-.452.103-.587.103-.192 0-.305-.045-.994-.25l2.506-.422Zm11.064 0 2.506.422c-.688.205-.801.25-.993.25-.135 0-.305-.023-.587-.102l-.926-.24v-.33Zm-9.449.479h.768c-.463.341-1.163.853-1.468 1.07a.853.853 0 0 1-.486.182c-.18 0-.259-.08-.361-.239-.056-.068-.113-.148-.18-.217.045-.011.09-.011.135-.034.271-.079.666-.284 1.592-.762Zm1.14 0h.643a66.598 66.598 0 0 1-1.309 1.389c-.113.113-.271.273-.508.273-.09 0-.079 0-.903-.228.158-.045.293-.137.361-.182.373-.251 1.31-.945 1.716-1.252Zm.937 0h.587c-.327.557-.768 1.297-.959 1.605-.091.148-.249.376-.542.376-.113.011-.125-.001-.836-.194.147-.08.248-.182.294-.239a74.643 74.643 0 0 0 1.456-1.548Zm.836 0h.53a79.998 79.998 0 0 1-.621 1.912c-.067.182-.158.41-.418.41-.09.011-.067.012-.88-.216.203-.125.327-.319.361-.387.226-.353.745-1.23 1.028-1.719Zm3.149 0h.644a58.301 58.301 0 0 0 1.716 1.252c.068.045.203.125.361.182-.834.228-.813.228-.903.228-.226 0-.395-.16-.508-.273a66.367 66.367 0 0 1-1.31-1.389Zm2.258 0h.836l1.174.296c.079.022.158.034.225.056-.666.205-.767.228-.88.228-.214 0-.497-.148-1.355-.58Zm-9.63.011h.836c-.858.432-1.141.581-1.355.581-.124-.012-.226-.035-.88-.228.067-.011.146-.034.225-.057l1.174-.296Zm4.99 0h.486c.124.398.564 1.787.643 1.992a.857.857 0 0 0 .136.274c-.012-.012-.034-.023-.046-.035l-.62-.592c-.102-.091-.204-.182-.35-.182-.147 0-.26.091-.351.182l-.62.592c-.023.012-.045.023-.057.035.045-.057.079-.137.136-.274.079-.205.519-1.605.643-1.992Zm.711 0h.531c.336.577.678 1.15 1.027 1.719.046.069.158.262.362.387-.813.216-.791.216-.881.216-.259 0-.35-.227-.418-.409-.079-.205-.496-1.549-.621-1.913Zm.791 0h.587c.372.399 1.151 1.229 1.456 1.548.045.046.147.148.294.239-.723.182-.723.194-.836.194-.293 0-.451-.228-.542-.376a95.865 95.865 0 0 1-.959-1.605Zm1.896 0h.768c.937.467 1.332.683 1.592.763l.135.034c-.079.057-.124.136-.18.216-.102.16-.181.239-.361.239-.17 0-.339-.079-.486-.182a75.759 75.759 0 0 1-1.468-1.07Z" fill="#00665E" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M11.535 8.114a5.407 5.407 0 0 0-1.49.34c-.131.05-.269.135-.414.079-.654-.153-1.331-.096-1.992-.025-.859.09-1.72-.003-2.579-.045a21.543 21.543 0 0 0-2.349.05c-.713.044-1.429-.01-2.138-.086-.088-.002-.178-.02-.265-.002-.135.088-.22.232-.308.363v.068c.185.158.404.262.625.358-.062.151-.101.31-.13.47.264.124.54.227.796.368-.029.095-.072.186-.083.285-.006.059.024.121.083.142.21.11.448.142.665.23.021.01.05.02.05.048.017.128.02.258.047.385a.173.173 0 0 0 .057.035c.287.095.588.131.881.196.034.11.022.249.106.336.375.196.82.1 1.213.228.098.096.075.29.223.344.296.09.614.01.918.05.069.079.077.193.144.273a.249.249 0 0 0 .169.076c.287.008.562-.087.846-.12.059.099.087.247.213.277.229.045.452-.042.665-.116.08.26.166.521.303.758.473.858 1.288 1.499 2.198 1.841.128.036.172.175.238.276.127-.048.252-.102.384-.134l.2.297c.119-.06.237-.122.356-.184.08.094.16.187.242.28l.31-.22c.09.078.173.164.254.251h.035c.096-.085.187-.177.282-.263.106.077.21.156.316.235.081-.095.163-.19.246-.284.12.06.238.123.357.184.063-.098.124-.196.185-.295.14.031.27.089.404.136.033-.068.065-.138.102-.204.053-.142.22-.164.336-.232.972-.447 1.78-1.286 2.099-2.318.162.06.345.134.517.064.09-.046.125-.144.168-.228.24.053.48.154.73.102.13-.039.194-.161.253-.271.23.03.456.095.69.075.104-.013.247 0 .318-.096.059-.096.067-.215.124-.312.315-.042.648.042.954-.072.096-.108.097-.27.184-.383.247-.018.495 0 .742-.018a.286.286 0 0 0 .215-.123c.056-.107.064-.23.1-.344.007-.024.02-.05.044-.061.241-.1.534-.022.755-.177.108-.12.021-.31.088-.443.207-.118.477-.088.669-.241.129-.11.032-.282.014-.42.225-.077.472-.119.657-.279-.052-.14-.113-.275-.17-.412A4.67 4.67 0 0 0 24 8.871v-.087a1.176 1.176 0 0 0-.272-.34c-.071-.053-.17-.01-.25-.018-.696.062-1.396.13-2.095.092-.417-.022-.833-.062-1.25-.062-.522 0-1.044-.015-1.564.027-.77.046-1.544.103-2.313.017-.657-.077-1.335-.115-1.981.053-.103.043-.211.009-.305-.037-.516-.234-1.077-.348-1.638-.402zm.521.155c.327.014.654.049.974.122.31.072.622.149.91.287-.103.065-.227.164-.354.11a5.088 5.088 0 0 0-1.716-.29c-.326.02-.652.046-.97.125-.204.04-.4.116-.606.149-.096-.026-.184-.073-.272-.119a5.653 5.653 0 0 1 2.034-.384zm11.467.278c.17-.01.308.126.395.26a2.31 2.31 0 0 1-1.093.252c-1.65.027-3.298.095-4.947.137 0 .027.002.054.004.081a2.744 2.744 0 0 1-.048-.154c.361-.05.72-.12 1.085-.142.668-.05 1.34-.068 2.01-.075a.394.394 0 0 0 .245-.072c-.533-.057-1.07-.026-1.604-.013-.371.027-.744.033-1.114.08-.495.06-.989.154-1.489.16-.312.005-.625.032-.937.01-.39-.007-.786-.042-1.17.045-.108.035-.239.073-.282.192-.093.188.01.398.095.569.103.217.279.425.247.682-.015.091-.092.151-.162.203a2.4 2.4 0 0 1-.198-.251c.04-.08.106-.155.088-.252-.033-.2-.178-.358-.314-.498-.196-.19-.414-.367-.547-.61-.039-.07-.066-.17.009-.227.22-.156.491-.209.752-.252.715-.1 1.436-.015 2.153.015.353.035.709.03 1.063 0 .838-.054 1.68-.138 2.52-.082.378.021.757.038 1.135.047.692.028 1.38-.062 2.07-.101a.308.308 0 0 1 .034-.004zM.55 8.55c.196-.002.392.027.587.04.542.048 1.086.079 1.63.056.674-.008 1.345-.088 2.019-.052.687.022 1.37.098 2.058.119.525-.018 1.049-.06 1.574-.084.533-.017 1.087-.011 1.59.187.097.04.217.093.24.207-.02.158-.14.28-.238.399-.175.216-.429.36-.57.605-.11.14-.126.35-.005.488a1.808 1.808 0 0 1-.219.243c-.083-.076-.16-.17-.15-.292.038-.346.347-.593.383-.94.031-.121-.031-.239-.108-.327a1.155 1.155 0 0 0-.468-.124c-.562-.048-1.126.027-1.689-.007-.557.004-1.107-.093-1.657-.167a26.874 26.874 0 0 0-2.115-.106c-.195-.003-.39.015-.585.032.063.052.14.087.225.078.733.01 1.466.022 2.197.085.307.029.61.084.916.131l-.023.084c-.536-.033-1.074-.028-1.611-.05-.965-.035-1.93-.065-2.895-.081-.411-.027-.841.017-1.234-.134-.11-.037-.213-.088-.317-.136.076-.093.153-.199.27-.24.065-.01.13-.014.195-.014zm11.455.114a4.324 4.324 0 0 1 1.597.296c.004.104-.029.218.024.313a1.245 1.245 0 0 0 .16.229c.18.212.41.383.588.597a.716.716 0 0 1 .157.272 3.76 3.76 0 0 0-1.267-.755 3.848 3.848 0 0 0-3.158.28c-.174.098-.332.22-.486.348l-.152.128a.502.502 0 0 1 .06-.147c.223-.315.556-.533.781-.846.11-.133.1-.31.083-.47a5.558 5.558 0 0 1 1.613-.245zm5.762.455c.016.044.03.088.044.132-.313.18-.688.135-1.032.09-.078-.007-.124-.074-.155-.139.38-.041.763-.038 1.143-.083zm-11.55.016c.386.006.771.025 1.154.064-.03.051-.054.124-.122.132-.203.035-.41.041-.614.049-.158.01-.303-.062-.44-.129l.023-.116zm1.207.055c.154.003.309.005.463.014.41.017.831-.016 1.23.105.099.034.208.08.259.178.039.172-.06.325-.144.464-.083.151-.197.293-.235.464-.048.16.05.294.124.423-.112.004-.25.051-.338-.04-.041-.082.007-.179.024-.263l-.16.143-.195-.012c-.015-.203.141-.35.221-.521-.138.123-.278.297-.483.281-.081.003-.143-.104-.093-.169.111-.141.255-.254.359-.402-.124.096-.25.195-.397.251a.464.464 0 0 1-.326-.038c.018-.204.234-.276.35-.417-.127.053-.24.154-.387.145-.058.002-.115-.016-.17-.029-.01-.173.171-.234.273-.337-.09.02-.177.062-.27.06-.062-.022-.11-.072-.164-.108.015-.066.035-.13.06-.192zm9.156 0c.018.078.087.178-.005.237-.1.125-.268.022-.39-.002.112.096.285.167.284.343-.096.017-.2.05-.295.01-.088-.036-.173-.081-.259-.122.027.027.055.053.084.078l.087.076c.057.051.113.104.16.164.016.068-.033.14-.106.139-.233.059-.415-.127-.584-.254.089.121.195.226.297.335.051.054.046.135.064.203-.084.011-.174.044-.256.008-.128-.052-.225-.155-.33-.243.091.16.23.305.216.502l-.208.008a10.001 10.001 0 0 1-.137-.132c.008.082.06.176.007.25-.062.07-.158.065-.246.063-.03 0-.059 0-.086.003.047-.119.14-.222.137-.356-.036-.35-.358-.587-.406-.932-.01-.149.154-.218.273-.261.554-.145 1.133-.073 1.7-.117zM.698 9.192c.77 0 1.54.04 2.31.047.963.021 1.926.028 2.888.053.2-.014.365.116.53.207l-.018.19a5.46 5.46 0 0 1-.089.043l.026-.073c-.899.024-1.796.085-2.695.112-.566.012-1.13.06-1.697.05A3.707 3.707 0 0 1 .89 9.705c-.115-.034-.247-.052-.338-.137-.001-.135.073-.264.145-.376zm22.62.022c.064.111.132.222.179.342-.43.14-.89.133-1.336.116-.828-.002-1.656-.055-2.484-.083-.699-.032-1.398-.06-2.097-.1.143-.102.305-.202.486-.196 1.751-.007 3.501-.078 5.252-.08zm-16.073.214c.077.005.136.074.194.12a.138.138 0 0 1 .05.116c-.078.06-.181.068-.273.092-.186.034-.37.09-.56.097-.067-.026-.14-.055-.185-.116-.016-.084.01-.2.104-.222.21-.042.425-.054.636-.085a.139.139 0 0 1 .034-.002zm9.465.008c.235 0 .47.03.7.073.109.021.106.15.134.234-.09.05-.177.13-.29.107-.163-.025-.323-.066-.485-.096-.087-.022-.187-.029-.258-.09.005-.108.116-.177.2-.228zm-4.785.138c.908-.02 1.842.29 2.495.935.358.365.62.856.612 1.377.01.47-.199.926-.507 1.274-.566.642-1.415.983-2.256 1.046a3.577 3.577 0 0 1-2.17-.514c-.345-.22-.66-.5-.867-.858a1.853 1.853 0 0 1-.227-1.365c.099-.415.356-.774.668-1.057.565-.51 1.318-.775 2.07-.83.06-.004.121-.006.182-.008zm5.64.023c.218-.005.435.025.653.035 1.44.088 2.882.14 4.322.224.093.014.198-.004.283.043.057.083.072.185.087.283-.302.185-.678.14-1.015.149-.425-.028-.85-.08-1.274-.121a15.638 15.638 0 0 0-.425-.036c-.872-.087-1.747-.139-2.615-.258a1.474 1.474 0 0 0-.016-.32zm-5.553.01c-.116 0-.23.005-.345.016-.805.077-1.627.39-2.161 1.02-.308.348-.518.809-.484 1.282.018.674.448 1.273.985 1.65.884.618 2.057.75 3.079.44.46-.149.903-.38 1.245-.727.428-.414.714-1.017.635-1.622-.065-.495-.35-.941-.723-1.265-.61-.536-1.425-.795-2.231-.794zm-5.915.175c.059 0 .118 0 .178.002.148.042.249.167.359.266-.027.077-.05.155-.072.234.072.057.149.108.23.15-.517.084-1.03.193-1.544.292l-.464.102-.465.098c-.31.063-.621.123-.934.174-.405.072-.828.05-1.222-.069-.113-.032-.141-.162-.095-.262.017-.1.141-.09.215-.105 1.276-.13 2.548-.295 3.82-.447.178-.019.38-.023.51-.163-.701.064-1.402.142-2.102.22l-1.051.113c-.35.036-.701.07-1.052.1-.394.04-.802.002-1.17-.153a1.65 1.65 0 0 1 .144-.328c1.393-.063 2.789-.092 4.18-.195.178-.008.356-.025.535-.029zm1.256.064a.56.56 0 0 1 .122.008c.084.025.162.067.24.105-.009.132-.138.166-.238.212-.125.051-.247.11-.375.153-.162.052-.325-.028-.474-.087.02-.068.028-.144.07-.203a.916.916 0 0 1 .297-.12c.117-.03.237-.064.358-.068zm9.248 0c.177-.004.35.054.517.106.064.026.144.036.192.092.032.06.04.13.064.192-.146.053-.302.145-.462.093a6.866 6.866 0 0 1-.632-.271c.018-.123.137-.18.245-.206a.718.718 0 0 1 .076-.006zm.887.172c.239-.004.474.041.711.066.758.085 1.517.168 2.276.246.543.068 1.09.108 1.632.19.013.107.126.312-.033.35a4.135 4.135 0 0 1-1.12.025c-1.182-.184-2.36-.394-3.544-.566a4.356 4.356 0 0 0-.024-.307c.034-.002.068-.004.102-.004zm-5.377.111c.253.001.504.032.748.103.282.084.568.226.73.482.111.16.124.368.087.554-.056.226-.263.365-.442.492l.004.042c.265.181.554.434.545.785.025.254-.11.492-.293.657-.129.098-.27.183-.422.241-.43.149-.892.168-1.342.138-.552-.069-1.13-.224-1.537-.627.07-.094.16-.17.224-.268a23.17 23.17 0 0 0 .006-1.615c-.066-.099-.157-.177-.231-.27.274-.375.732-.545 1.17-.64.247-.047.5-.075.753-.074zm4.163.063c.029 0 .058.001.086.008.169.065.332.144.494.225.036.024.09.036.106.082.004.08-.034.168-.113.197-.115.048-.253.078-.37.024-.191-.084-.365-.202-.544-.307.017-.042.025-.095.054-.13a.1.1 0 0 1 .038-.027.606.606 0 0 1 .249-.072zm-8.563 0a.555.555 0 0 1 .276.078c.065.031.079.14.017.18-.162.11-.332.21-.514.281-.143.047-.287-.007-.42-.053l-.04-.194c.168-.088.34-.173.514-.25a.36.36 0 0 1 .167-.042zm4.37.172a2.535 2.535 0 0 0-.282.015.623.623 0 0 0-.361.168c-.163.169-.176.422-.145.641a.563.563 0 0 0 .367.487c.233.079.49.075.725.01.254-.085.382-.362.376-.614.013-.213-.04-.462-.231-.586a.807.807 0 0 0-.449-.12zm5.287.085c.27.006.54.052.806.099.833.15 1.666.301 2.498.458.21.043.423.079.63.138-.028.125-.043.32-.202.344-.513.065-1.028-.05-1.52-.187-.814-.22-1.637-.414-2.45-.64a.435.435 0 0 0-.149-.007c.013-.052.017-.107.042-.154.064-.048.153-.045.229-.05h.116zm-10.387.055c.028.114.052.229.097.337-.634.195-1.267.39-1.904.572-.338.097-.67.223-1.02.27-.316.028-.64.013-.948-.066-.126-.034-.16-.17-.163-.284.89-.193 1.777-.399 2.67-.577.422-.085.839-.203 1.268-.252zm8.897.051a.266.266 0 0 1 .177.063c.15.099.297.2.448.296a.196.196 0 0 0-.014.043l-.01.047c-.009.032-.021.061-.05.077-.13.014-.269.043-.396-.006a2.215 2.215 0 0 1-.396-.324c-.046-.039-.041-.116-.002-.158a.093.093 0 0 1 .05-.027c.061-.003.128-.013.193-.01zm-7.713 0c.051 0 .102.004.152.01.069.017.116.122.047.169-.156.156-.318.354-.557.365-.08-.001-.16.002-.238-.015-.057-.038-.052-.12-.071-.176.173-.11.338-.231.516-.333a.63.63 0 0 1 .15-.02zm8.857.204c.162.017.316.07.473.108.766.225 1.533.447 2.298.674.143.043.289.079.426.138-.038.095-.074.203-.163.262a2.07 2.07 0 0 1-1.1-.072c-.27-.103-.527-.233-.792-.346-.48-.205-.958-.419-1.445-.61.103-.047.195-.121.303-.154zm-1.563.04c.105 0 .19.084.266.148.072.072.167.131.212.225.015.085-.055.159-.079.235-.104-.02-.234.02-.318-.066a1.57 1.57 0 0 1-.322-.397c-.016-.086.083-.138.163-.141l.032.001a.202.202 0 0 1 .046-.005zm-6.891.004a.423.423 0 0 1 .23.082 1.5 1.5 0 0 1-.34.455c-.074.09-.2.075-.3.045-.063-.047-.086-.13-.124-.196.123-.127.24-.262.389-.359a.32.32 0 0 1 .145-.027zm-1.326.12a.848.848 0 0 1 .108.002c.102.015.115.135.153.212-.178.06-.341.153-.508.236-.434.208-.857.435-1.29.645-.295.156-.643.13-.966.133-.09-.009-.191 0-.27-.052-.052-.067-.074-.152-.1-.232.245-.124.516-.18.77-.283.456-.172.924-.31 1.384-.47.238-.067.471-.179.72-.19zm7.692.011c.093.022.207.015.277.091.098.133.197.272.253.428-.018.12-.154.2-.272.195-.04-.253-.148-.485-.258-.714zm-5.888.003a2.99 2.99 0 0 0-.242.718c-.095-.022-.214-.046-.256-.147-.03-.05-.001-.105.022-.15a2.1 2.1 0 0 1 .225-.346c.071-.054.167-.054.251-.075zm7.515.028c.182.033.342.134.508.212.661.309 1.32.623 1.977.942-.013.07-.011.154-.059.214-.163.063-.344.037-.513.02-.206-.023-.42-.047-.601-.16-.507-.315-.98-.687-1.509-.966.115-.042.154-.159.197-.262zm-8.832.254c.09 0 .18.014.267.042-.194.232-.456.392-.695.571-.28.19-.538.417-.85.553a2.027 2.027 0 0 1-.761.104c-.112-.014-.161-.118-.166-.22.587-.32 1.187-.615 1.774-.933a.83.83 0 0 1 .43-.117zm8.426.018a.6.6 0 0 1 .321.134c.449.335.896.674 1.346 1.007.06.031.091.091.116.152-.126.054-.263.12-.403.078-.041-.01-.084-.018-.126-.027a.946.946 0 0 1-.364-.13c-.427-.27-.773-.65-1.206-.912.092-.082.12-.21.206-.293a.399.399 0 0 1 .11-.009zm-8.156.176c.114.178.334.117.508.165-.38.273-.666.652-1.042.93-.228.169-.583.234-.814.037.113-.175.29-.29.447-.423.3-.236.593-.483.901-.709zm7.554.125c.11.023.233.032.319.116.284.24.551.498.836.738.097.09.227.167.238.315-.095.035-.202.075-.302.033a.672.672 0 0 1-.071-.023c-.162-.063-.295-.183-.424-.297a9.813 9.813 0 0 0-.769-.679c.056-.069.114-.137.173-.203zm-7.068.176c.102.027.201.065.303.091.013.1.02.2.026.3-.174.175-.307.406-.541.51-.156.06-.327.081-.493.06-.057-.012-.097-.057-.138-.095.278-.292.54-.6.843-.866zm6.729.073c.151-.002.25.118.344.218.196.228.42.428.622.649-.043.057-.09.136-.18.106a.738.738 0 0 1-.311-.05c-.208-.1-.345-.293-.522-.433l.047-.49zm-3.103.132a1.564 1.564 0 0 0-.255.014c-.274.032-.537.235-.584.515-.03.271-.019.602.204.796.147.12.34.16.525.176.258.008.56-.033.72-.264.175-.264.176-.623.054-.908-.132-.24-.401-.322-.664-.33zm-3.303.33c.066.17.114.346.16.522-.12-.023-.302-.01-.37-.138-.033-.161.117-.274.21-.383zm6.349.15c.087.077.204.181.17.31-.067.117-.218.118-.335.13a33.1 33.1 0 0 0 .165-.44zm-6.69.321c.093.077.195.157.319.176.08.024.173.018.245.063.156.191.294.399.488.555.299.277.658.469.995.692-.058.24-.213.437-.339.644-.92-.353-1.719-1.07-2.085-1.995.126-.042.252-.087.376-.135zm6.993.063c.093.037.186.075.28.11-.185.51-.532.95-.94 1.301a3.133 3.133 0 0 1-1.012.6c-.08-.14-.166-.278-.236-.424-.02-.05-.052-.118-.01-.165.098-.098.227-.156.346-.224.248-.148.476-.327.686-.526.14-.134.228-.312.357-.456.11-.043.238-.024.347-.074.07-.036.124-.092.182-.142zm-7.67.07l.204.003c.174.43.422.837.76 1.157.207.187.408.384.649.527.23.152.482.262.73.38a1.417 1.417 0 0 1-.089.2 4.51 4.51 0 0 1-.699-.352c-.3-.177-.55-.421-.8-.66-.26-.253-.43-.58-.604-.894-.065-.114-.106-.239-.15-.361zm8.027.058l.22.02a3.174 3.174 0 0 1-.847 1.33c-.372.34-.785.665-1.272.82-.034-.07-.068-.14-.1-.212.305-.137.61-.289.87-.504.48-.388.91-.868 1.129-1.454zm-1.348.433c-.19.266-.485.42-.746.605-.12.093-.29.15-.339.31.011.094.087.164.13.245.108.186.215.374.302.57.048.124-.001.252-.048.367-.158-.043-.334-.115-.403-.275-.133-.241-.13-.544-.315-.76-.017.322.216.582.255.893-.016.109-.084.202-.136.297-.139-.078-.31-.156-.343-.329-.095-.256-.037-.563-.192-.797-.063.223.046.44.088.656.023.134.082.303-.023.417a2.76 2.76 0 0 1-.106.133c-.105-.075-.24-.145-.275-.28-.059-.26-.016-.53-.064-.79-.014-.033-.037-.059-.058-.086-.07.31.085.616.047.928-.042.112-.135.229-.26.25-.115-.08-.222-.2-.221-.35-.015-.271.087-.535.073-.807l-.073-.002c-.037.23-.018.465-.033.697a.487.487 0 0 1-.104.294c-.06.054-.127.1-.197.142-.063-.066-.135-.13-.173-.216-.034-.13.013-.26.04-.388.047-.192.115-.384.106-.584h-.066c-.083.259-.081.533-.154.794a.468.468 0 0 1-.273.295c-.054.024-.119-.014-.14-.066-.097-.123-.048-.289-.005-.423.086-.222.192-.439.24-.674l-.066-.027c-.14.26-.174.564-.32.821a.478.478 0 0 1-.311.24c-.045.015-.08-.022-.1-.057a.386.386 0 0 1-.005-.334c.112-.241.27-.46.38-.702.02-.066.056-.155.001-.213-.22-.226-.546-.3-.77-.522.233.138.459.296.716.386.923.372 1.99.383 2.915.011.39-.136.729-.387 1.026-.669Z" fill="#333333" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M23.9996 12.1455c0-.0003.0004-.0007.0004-.001l-.0007.0003c-.0039-.0173-.0638-.0248-.172-.0258l-1.595-.0216c-2.4391-.0216-6.9786-.0638-7.1847-.0638h-.0501a1.8954 1.8954 0 0 0-.7028.0982l-.0913.0275a3.2546 3.2546 0 0 1-.795.1718c-.2837.0108-1.3633.0088-1.4085.0088s-1.1258 0-1.4085-.0078a3.2434 3.2434 0 0 1-.795-.1718l-.0913-.0275a1.9045 1.9045 0 0 0-.7037-.0982h-.0441c-.2071 0-4.7466.0206-7.1847.0432l-1.6008.0196c-.1089 0-.1727.0088-.1718.0265l.0913.0226c.336.069.6771.1107 1.0198.1247.6527.0128 5.4346.1325 5.5495.1345.2584-.0067.5155.039.7557.1343h1.4968s-.6046.0353-.6134.0726h-.0373c-.1512 0-.6066 0-.8647-.0118 0 0-.0186.0726.2444.0726.0923.0618.1884.1207.2758.1698h1.2868s-.5055.0304-.5153.0677c-.0599 0-.2797-.0059-.4908-.0118l-.2945-.0088s-.0147.0638.2267.0648l.0412.0255c.4833.217.9953.3632 1.5204.4338.1992.0382.4004.0648.6027.0795 0 0 .2444.0216.2022.0206a9.6487 9.6487 0 0 1-1.701-.2218 4.3198 4.3198 0 0 1-1.276-.5398 1.3917 1.3917 0 0 0-.7381-.2316c-.1698-.0118-5.6486-.2277-5.6604-.2277a5.3434 5.3434 0 0 1-1.0434-.1404L0 12.1258c0 .0147.0383.055.0707.0844.1688.1502.8097.4613 1.1837.5526.6488.157 4.6445.6655 5.3542.745l.3926.0442c1.0728.1158 2.4214.264 3.1085.3337a.8442.8442 0 0 0 .3926-.0216A4.1449 4.1449 0 0 1 12 13.606a4.3124 4.3124 0 0 1 1.5027.2581.8354.8354 0 0 0 .3877.0216c.6871-.0687 2.0396-.2189 3.1035-.3367l.3975-.0442c.7096-.0785 4.7044-.5673 5.3532-.7244.3749-.0903 1.0149-.4024 1.1847-.5526.0303-.0274.067-.0653.0697-.0812l.001-.0001c0-.0004-.0004-.0007-.0004-.001zm-12.2646.9952c-.795 0-1.5812-.0108-1.8099-.0677-.5447-.1354-.7989-.3838-.8421-.4593-.0432-.0756-.0324-.0746.0353-.0746h5.7595c.0677 0 .0726.0069.0344.0746-.0383.0677-.2945.3239-.8412.4593-.2287.0569-1.0149.0658-1.8099.0677h-.5261zm12.1884-.9707a5.345 5.345 0 0 1-1.0443.1413c-.0118 0-5.4965.1963-5.6614.21a1.3917 1.3917 0 0 0-.7381.2316 4.3198 4.3198 0 0 1-1.276.5398 9.6487 9.6487 0 0 1-1.701.2218c-.0422 0 .2022-.0206.2022-.0206a5.1874 5.1874 0 0 0 .6017-.0795 5.5189 5.5189 0 0 0 1.5213-.4338l.0471-.0255c.2415 0 .2277-.0648.2277-.0648l-.2945.0088c-.2179.0059-.4417.0118-.4976.0118-.0098-.0373-.5114-.0677-.5114-.0677h1.2858a5.3585 5.3585 0 0 0 .2709-.1678c.263 0 .2454-.0726.2454-.0726-.2827.0069-.8088.0137-.902.0108-.0088-.0373-.5693-.0726-.5693-.0726h1.4458a1.9327 1.9327 0 0 1 .7597-.1335l5.5534-.1139a6.3607 6.3607 0 0 0 1.0198-.1247l.0684-.0169-.0536.018zm-11.9627.532h.0903l-.1747.1247v.0991h-.1325v-.0972l-.1884-.1266h.1541l.1286.0805.1226-.0805zm.8088.1826h.3023v.0412h-.4338v-.2248h.1315v.1836zm.5408 0h.3131v.0412h-.4427v-.2248h.4378v.0412h-.3082v.051h.3023v.0412h-.3023v.0502zm-2.5225-.1826h.1325v.2238h-.1354v-.0913h-.2778v.0913h-.1325v-.2238h.1325v.0903h.2778l.0029-.0903zm.5978.1256l.1698.0982h-.1492s-.1364-.0972-.1678-.1217c.1345.0049.157-.0098.157-.0324s-.106-.0353-.2267-.0285v.1826h-.1404v-.2228h.3053c.1502 0 .1963.0314.1963.0628 0 .0285-.055.054-.1443.0618zm2.7148-.0559c0-.0226-.106-.0353-.2267-.0285v.1845h-.1394v-.2228h.3013c.1502 0 .1963.0344.1963.0628 0 .0285-.055.054-.1443.0599l.1698.0982h-.1492s-.1364-.0972-.1678-.1217c.1335.0049.16-.0098.16-.0324zm-1.5576.0873c0 .0569-.1227.0756-.2513.0756a1.6114 1.6114 0 0 1-.2071-.0137l.0137-.0481a.9392.9392 0 0 0 .1894.0137c.108 0 .1148-.0128.1148-.0265 0-.0137-.0304-.0226-.0785-.0226l-.0982-.0118c-.0952-.0118-.1345-.0157-.1345-.0726s.1237-.0667.2032-.0667a1.814 1.814 0 0 1 .2081.0177l-.0108.0432a1.1384 1.1384 0 0 0-.1639-.0137c-.0844 0-.1031.0049-.1031.0196s.0275.0236.0697.0236l.1139.0079c.0894.0136.1326.0352.1346.0744zM9.875 12.81c0 .052.1266.0736.211.0736s.1639-.0088.1826-.0088l-.0137.0461c-.0236.002-.106.0108-.1963.0108-.1678 0-.318-.0402-.318-.1217s.1502-.1217.318-.1217c.0982 0 .1757.0098.1963.0098l.0137.0471a1.9641 1.9641 0 0 0-.1826-.0098c-.0883 0-.211.0225-.211.0746zm.9972-2.1996l-.5497-.4976h.3651l.2091.1767.2287.1963.0412.0373.0412-.0363.422-.371h.1423c-.1777.1698-.5094.4908-.5094.4908l-.0196.0186v.4319h-.3494v-.4281l-.0215-.0186zm5.3768.4466h-1.4732v-.9452h.3259v.8284h1.1474v.1168zm2.1858-.0059H16.938v-.9374h1.4782v.1168h-1.1631v.2915h1.1435v.1207h-1.1435v.2925h1.1817v.1159zm-12.4142.002h-.3327v-.9432h.3327v.4172h.9148V10.11h.3308v.9432h-.3308V10.64h-.9148v.4131zm2.5441-.003H8.229v-.9452h.8834c.168-.0107.3362.0186.4908.0854a.1964.1964 0 0 1 .1188.1678c-.001.108-.0805.214-.3612.2444l-.0805.0088.0618.0491c.0893.0726.3121.2945.4162.3926l.0097.003h-.3847c-.0569-.0628-.373-.3494-.5104-.4908a2.1988 2.1988 0 0 0 .3926-.0481.1433.1433 0 0 0 .0982-.1315.1152.1152 0 0 0-.052-.0913c-.0805-.0677-.265-.0677-.4809-.0677h-.266v.8235zm4.9056-.2424c0-.0569-.0491-.0834-.0982-.0982a1.2952 1.2952 0 0 0-.2032-.0363c-.1845-.0236-.2787-.0373-.3435-.0481a.9384.9384 0 0 1-.3406-.0982.1872.1872 0 0 1-.0932-.1727c-.001-.0991.0844-.162.2228-.2032.146-.0362.2962-.053.4466-.0501.2342.0027.468.0208.6998.054l-.0226.1139a3.124 3.124 0 0 0-.5408-.0501 1.2286 1.2286 0 0 0-.2945.0236c-.0609.0167-.0982.054-.0982.0982a.1091.1091 0 0 0 .0883.0982c.06.017.1214.0282.1835.0334.1031.0098.2483.0304.3867.0491a.8507.8507 0 0 1 .3308.0982.1906.1906 0 0 1 .0982.1698c.001.0962-.0864.1698-.2444.2208a2.0935 2.0935 0 0 1-.5889.0707l.001-.0069a4.8331 4.8331 0 0 1-.6743-.053l.0294-.1345c.2054.0451.415.0678.6252.0677a.8745.8745 0 0 0 .3514-.0481.112.112 0 0 0 .0787-.0982zm-10.2872-.2209c0-.158.1031-.2709.2778-.3543a1.622 1.622 0 0 1 .6782-.1276c.1911.0011.3819.0146.5712.0402l.0265.1286a5.1308 5.1308 0 0 0-.5212-.0353 1.2396 1.2396 0 0 0-.4397.0766c-.1325.052-.2434.1374-.2434.2689.001.1315.1109.2169.2434.2689.1407.0519.2897.0778.4397.0766a5.1308 5.1308 0 0 0 .5212-.0353l-.0344.1315a4.4382 4.4382 0 0 1-.5712.0402 1.6324 1.6324 0 0 1-.6704-.1247c-.1796-.0834-.2777-.2002-.2777-.3543zm16.4207.4731h-.3318v-.9462h.8834a1.0791 1.0791 0 0 1 .4908.0864.1964.1964 0 0 1 .1188.1669c-.001.1089-.0805.215-.3612.2454l-.0805.0079.0618.0491c.0893.0726.3121.2895.4162.3926v.001h-.3789c-.0569-.0628-.374-.3494-.5104-.4908a2.1177 2.1177 0 0 0 .3926-.0491.1424.1424 0 0 0 .0982-.1305.1152.1152 0 0 0-.052-.0913c-.0815-.0687-.265-.0687-.4809-.0687h-.266v.8273z" fill="#000000" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M.643 1.475c0 .814.668 1.475 1.49 1.475H14.49c1.408 0 2.568.43 3.48 1.29.91.861 1.366 1.967 1.366 3.32 0 1.25-.456 2.274-1.367 3.072-.911.78-2.07 1.168-3.479 1.168H9.12c-.824 0-1.491.66-1.491 1.475 0 .815.667 1.475 1.491 1.475h5.93l5.342 8.482c.332.512.797.768 1.398.768.663 0 1.129-.256 1.398-.768.269-.533.217-1.096-.155-1.69l-4.753-7.56c1.284-.574 2.299-1.414 3.044-2.52.746-1.127 1.119-2.427 1.119-3.902 0-1.496-.342-2.807-1.026-3.934-.662-1.127-1.594-2.008-2.795-2.643C17.42.327 16.044 0 14.49 0H2.134C1.311 0 .643.66.643 1.475Z" fill="#1D1D1D" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M17.369 19.995C13.51 22.39 12 24 12 24L.105 15.705s5.003-3.715 9.186-.87l5.61 3.882.683-.453L.106 7.321s2.226-.65 6.524-3.315C10.49 1.609 12 0 12 0l11.895 8.296s-5.003 3.715-9.187.87L9.1 5.281l-.683.454L23.893 16.68s-2.224.649-6.524 3.315Z" fill="#E30613" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M23.902 6.87c-.33-3.218-2.47-3.895-4.354-4.204-.946-.16-2.63-.3-3.716-.34-.946-.06-3.168-.09-3.835-.09-.657 0-2.89.03-3.835.09-1.076.04-2.77.18-3.716.34C2.563 2.985.42 3.66.092 6.87c-.08.877-.1 2.023-.09 3.248.03 2.031.2 3.406.3 4.363.07.657.338 2.62.687 3.636.478 1.395.916 1.803 1.424 2.222.937.757 2.471.996 2.79 1.056 1.733.31 5.24.368 6.784.368 1.544 0 5.05-.05 6.784-.368.329-.06 1.863-.29 2.79-1.056.508-.419.946-.827 1.424-2.222.35-1.016.628-2.979.698-3.636.1-.957.279-2.332.299-4.363.04-1.225.01-2.371-.08-3.248m-1.176 5.4c-.19 2.57-.418 4.104-.747 5.22-.29.976-.637 1.623-1.165 2.092-.867.787-2.063.956-2.76 1.056-1.514.23-4.055.3-6.057.3-2.002 0-4.543-.08-6.057-.3-.697-.1-1.893-.269-2.76-1.056-.518-.469-.876-1.126-1.155-2.093-.329-1.105-.558-2.65-.747-5.22-.11-1.543-.09-4.054.08-5.4.258-2.011 1.255-3.018 3.387-3.396.996-.18 2.34-.31 3.606-.37 1.016-.07 2.7-.1 3.636-.09.936-.01 2.62.03 3.636.09 1.275.06 2.61.19 3.606.37 2.142.378 3.139 1.395 3.388 3.397.199 1.345.229 3.856.11 5.4m-5.202-8.39c-.548 2.462-.767 3.588-1.216 5.37-.428 1.715-.767 3.298-1.335 4.065-.587.777-1.365.947-1.893 1.006-.279.03-.478.04-1.066.05-.596 0-.796-.02-1.075-.05-.528-.06-1.315-.229-1.892-1.006-.578-.767-.907-2.35-1.335-4.064-.47-1.773-.678-2.91-1.236-5.37 0 0-.548.02-.797.04-.329.02-.588.05-.867.09.343 5.372.692 11.079 1.126 16.13a21.983 21.983 0 002.39.169c.33-1.266.748-3.02 1.207-3.767.378-.608.966-.677 1.295-.717.518-.07.956-.08 1.165-.08.2-.01.637 0 1.165.08.33.05.917.11 1.295.717.47.747.877 2.5 1.206 3.766 0 0 .358-.01 1.165-.05.41-.018.82-.058 1.226-.12.458-5.39.785-10.728 1.126-16.128-.28-.04-.538-.07-.867-.09-.23-.02-.787-.04-.787-.04z" fill="#E40521" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M12 18.1622c-6.6275 0-12-2.7586-12-6.163 0-3.4028 5.3725-6.1614 12-6.1614 6.6278 0 12 2.7586 12 6.1614 0 3.4044-5.3722 6.163-12 6.163zM7.6023 7.17C3.701 7.9784.973 9.8302.973 11.9844c0 1.1929.8382 2.2932 2.248 3.1757.1174.0724.1941.0862.251.0826.1019-.006.1593-.0698.201-.146.028-.0485.0631-.1225.0972-.1968.4601-1.0834 2.0776-4.8333 4.2023-7.3758a1.1775 1.1775 0 0 0 .1048-.1461c.046-.084.0356-.1513.0006-.192-.0593-.0647-.2247-.065-.4756-.016zM9.742 8.8995c-1.1728 2.8492 1.0473 2.4961 1.6478 2.3637 1.0203-.2258 1.9944-.6128 2.7746-.925 2.2216-.8887 3.4012-1.7804 3.7925-2.123a1.9839 1.9839 0 0 0 .1076-.0988c.0557-.058.0976-.1192.0976-.2002 0-.0936-.081-.1687-.2374-.2231-.012-.0049-.0517-.021-.0641-.025-1.698-.5415-3.724-.8563-5.9016-.8563-.0168 0-.0586-.0022-.1169 0-.2608.0078-.5509.0664-.787.1888-.7777.4049-1.1163 1.4235-1.313 1.899zm10.5851.0037c-.0268.0487-.0612.1224-.0962.1974-.4599 1.0826-2.0774 4.831-4.2018 7.3733-.0515.063-.0796.1031-.1042.1467-.0492.0846-.0388.1535 0 .1935.0572.0641.2235.0654.474.0157 3.8998-.81 6.628-2.6606 6.628-4.8149 0-1.1925-.836-2.2928-2.2472-3.1745-.1161-.073-.1934-.0871-.25-.083-.1028.0067-.16.0699-.2026.1458zM14.258 15.099c1.173-2.849-1.0483-2.494-1.6467-2.3622-1.0218.225-1.996.613-2.7757.924-2.2226.8883-3.4017 1.782-3.7944 2.1234-.0468.0428-.0833.0742-.1066.0995-.0564.0573-.0967.1178-.0967.2007 0 .0923.08.1688.2362.2229.012.0048.0511.0213.0657.0255 1.696.54 3.722.8557 5.9.8557.0177 0 .0592.0016.1178 0 .2609-.0081.5522-.0677.7871-.1888.7781-.4052 1.1169-1.4234 1.3133-1.9007z" fill="#002C5E" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M12 3.848C5.223 3.848 0 7.298 0 12c0 4.702 5.224 8.152 12 8.152S24 16.702 24 12c0-4.702-5.223-8.152-12-8.152zm7.334 3.839c0 1.08-1.725 1.913-4.488 2.246-.26-2.58-1.005-4.279-1.963-4.913 2.948.184 6.45 1.227 6.45 2.667zM12 16.401c-.96 0-1.746-1.5-1.808-4.389.577.047 1.18.072 1.808.072.628 0 1.23-.025 1.807-.072-.061 2.89-.847 4.389-1.807 4.389zm0-6.308c-.59 0-1.155-.019-1.69-.054.261-1.728.92-3.15 1.69-3.15.77 0 1.428 1.422 1.689 3.15-.535.034-1.099.054-1.689.054zm-.882-5.075c-.956.633-1.706 2.333-1.964 4.915C6.391 9.6 4.665 8.767 4.665 7.687c0-1.44 3.504-2.49 6.453-2.669zM2.037 11.68a5.265 5.265 0 011.048-3.164c.27 1.547 2.522 2.881 5.972 3.37V12c0 3.772.879 6.203 2.087 6.97-5.107-.321-9.107-3.48-9.107-7.29zm10.823 7.29c1.207-.767 2.087-3.198 2.087-6.97v-.115c3.447-.488 5.704-1.826 5.972-3.37a5.26 5.26 0 011.049 3.165c-.004 3.81-4.008 6.969-9.109 7.29z" fill="#EB0A1E" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M2.787 9.414h2.104l-.398-.719h7.139v.717h.238v-.965H2.135l.652.967zm.202.948h8.879v-.719H2.874l.115.719zm2.255 1.204h-2.06l-.16-.981h8.846v.981h-.239v-.751H5.169l.075.751zm3.299.692h3.326v.515H8.543v-.515zm3.589-3.811h3.357v1.444h-3.357V8.447zm-8.469 5.569c.054.086.155.186.49.281.146.037.305.074.515.122l.08.019H8.31v-.51H3.616c.013.03.028.06.046.088h.001zm4.647-.779H3.459l-.238-1.44H8.31v1.44zm.232 2.021c1.243.253 2.457.488 3.329.63V13.47H8.542V15.258zm12.276-3.692h-5.1v-1.445h5.333l-.233 1.445zm-5.1-2.66v.513l5.485-.002.344-.511h-5.829zM0 7.306l1.616 2.369c.177 1.006.64 3.599.693 3.85l.006.032c.148.706.239 1.139 1.59 1.473 1.825.45 5.997 1.323 8.094 1.664 2.097-.341 6.271-1.215 8.097-1.664 1.35-.334 1.44-.767 1.589-1.473l.006-.032c.053-.253.516-2.844.693-3.85L24 7.306H0zm21.454 2.335-.277 1.717c-.16.994-.267 1.657-.32 1.951l-.007.035-.012.07c-.127.692-.183 1.002-.91 1.205-1.516.373-5.908 1.31-7.927 1.626-2.018-.316-6.41-1.254-7.925-1.626-.727-.203-.783-.513-.91-1.206l-.019-.104c-.053-.288-.156-.93-.31-1.89v-.001L2.55 9.64 1.276 7.75h21.45l-1.272 1.89v.001zm-9.084 3.132h-.238v-.976h8.65l-.16.978h-2.004c.031-.171.09-.659.099-.73H12.37v.728zm-.238.942h8.322l.134-.716h-8.456v.716zm0-3.129h3.358v.516h-3.358v-.516zm0 3.342v1.959c2.115-.36 6.223-1.205 7.718-1.592.338-.087.438-.193.492-.279a.448.448 0 0 0 .045-.088h-8.255zm2.296 1.282-.415.082c-.21.042-.665.125-1.065.199l-.577.106v-1.422h5.88c-.27.33-.812.437-3.823 1.035z" fill="#000000" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M19.062 11.713c3.305-2.139 7.748-2.208 2.564 1.248l.082-.11c1.467-2.016-1.522-1.563-2.578-1.166l-.068.028zM6.967 13.236h1.399v.549H6.747c-.686 0-.987-.206-.987-.754v-.123c0-.466.274-.768.96-.768h1.646v.549H6.967a.248.248 0 0 0-.247.247v.069a.246.246 0 0 0 .247.231zM9.6 11.864v1.371h.823v.549h-1.92v-1.92H9.6zm-5.198.247c.191-.154.427-.241.672-.247h.549v1.92H4.525v-.96l-1.056.96H2.468v-.96l-1.221.96H0l2.18-1.646c.206-.151.343-.274.699-.274h.686v.96l.837-.713zm9.312.206a.316.316 0 0 1 .343-.316h1.303v.549h-.686v1.234h-.96v-1.467zm6.431-.316c.823 0 1.111.178 1.111.782v1.001h-.96v-.686a.411.411 0 0 0-.411-.411h-.411v1.097h-.96v-1.783h1.631zm-7.487 0c.631 0 .919.261.919.699v.411c0 .507-.288.672-.987.672h-1.083c-.398 0-.686-.041-.837-.178a.495.495 0 0 1-.11-.315v-.069c0-.274.165-.535.686-.535h1.234c0-.123.014-.137-.137-.137h-1.646V12h1.961zm-.179 1.166v-.069h-.754a.07.07 0 0 0 0 .138h.686a.068.068 0 0 0 .068-.069zm5.02-1.166c.727 0 .878.219.878.521v.069c0 .329-.261.507-.686.507h-1.234c0 .123.123.137.274.137h1.508v.549H16.36c-.59 0-.864-.247-.864-.699v-.315c0-.521.288-.768.946-.768h1.057zm-.151.686a.07.07 0 0 0 0-.138h-.823a.07.07 0 0 0-.069.069v.069h.892z" fill="#FF0000" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M11.543 0s-.01.141-.053.227c-.032.075-.118.128-.107.182.01.054.064.119.15.162.086.043.117.074.203.096.075.021.184.076.205.011.033-.064-.01-.151-.064-.226-.086-.14-.13-.172-.248-.365C11.607.044 11.586 0 11.543 0zm.678 0c-.022.011-.054.174-.108.313-.064.161-.022.236.01.3.043.065.098.108-.01.173-.107.064-.248.043-.248.043s-.118-.023-.215-.076a23.832 23.832 0 0 0-.3-.13s-.194-.053-.323-.042c-.129.01-.14.022-.236.033-.054 0-.075-.001-.129.01-.043.01-.096-.02-.096.033s.107.054.182.086c.075.032.247.031.215.074-.043.043-.204.054-.215.043-.01 0-.117-.021-.203-.021-.14.01-.15.01-.353.107-.033.01-.022.086.042.064a1.12 1.12 0 0 1 .301-.043c.13 0 .203.044.332.077.108.032.118.052.28.074.032 0 .095-.022.095.021 0 .022-.043.055-.043.055s-.096.02-.086.053c.022.043.108 0 .15 0 .044 0 .11.012.098.054l-.021.032a2.312 2.312 0 0 0-.291.097c-.269.108-.375.237-.633.366-.247.118-.644.267-.644.267s-.118.065-.29.107c-.171.044-.182.034-.3.055a.571.571 0 0 0-.27.086.52.52 0 0 0-.15.117l-.15.227-.087.127c-.021.043-.042.064-.052.107-.022.054-.033.076-.043.13-.032.128 0 .204.021.333.011.032.011.054.022.086.01.032.052.065.052.065l.043.01s.152-.01.248-.032c.097-.021.237-.055.237-.055l.181-.052.12-.043s.075 0 .086.043c.01.032-.022.086-.022.086s-.065.03-.119.052c-.054.022-.183.054-.193.065l-.14.043-.118.011s-.022.011-.043.043c-.022.033-.022.032-.022.053.022.022.033.043.055.065.043.032.064.053.117.064.075.032.118.022.193.022a.587.587 0 0 0 .27-.065c.086-.054.118-.053.236-.096a.543.543 0 0 1 .118-.021c.204-.022.32.01.525.043.204.032.302.097.506.129.215.032.343.096.568.043.108-.022.173-.076.227.031.053.097.043.15.043.15s-.001.066-.076.27c-.076.204-.311.709-.311.709l-.162.322s-.13.257-.43.59a54.284 54.284 0 0 1-.32.353s-.161.119-.322.323c-.161.204-.163.279-.313.43-.097.096-.15.15-.268.226-.118.075-.258.053-.634.31-.322.226-.494.41-.516.399-.021-.01-.129-.098-.172-.12-.032-.02-.654-.439-.654-.439l-.258-.172-.119-.076-.021-.043-.063-.086s-.097-.118-.215-.214a.92.92 0 0 0-.441-.237c-.183-.053-.3-.086-.482-.021a.646.646 0 0 0-.27.172c-.107.107-.129.193-.215.322s-.172.248-.215.312c-.043.065-.129.237-.129.237s-.214.343-.332.568c-.14.247-.193.399-.322.635-.204.376-.495.762-.57.933l-.084.194s-.023.095-.033.16c-.011.064-.011.172-.022.215a.312.312 0 0 1-.053.119c-.01.01-.129.257-.172.418-.043.16-.14.666-.021.73.118.065.987-.31 1.105-.676.076-.236-.236-.355-.15-.57.032-.075.054-.085.107-.16.086-.14.054-.429.215-.697.118-.193.354-.442.676-.807.204-.225.398-.59.398-.59s.043-.129.13-.107c.096.021.181.01.181.01l.043.033.086.086.129.193s.216.31.29.397c.076.086.151.15.259.236.118.107.16.161.31.28.215.171.139.236-.14.085a1.82 1.82 0 0 0-.364-.138c-.128-.033-.612-.162-.859-.194-.236-.032-.28-.021-.28-.021s-.118-.012-.257.074c-.14.086-.215.15-.215.15s-.161.183-.172.215c-.01.032-.086.16-.086.16s-.044.066-.054.14c-.022.076-.01.151-.01.151l.01.16.011.15s.033.377.108.753c.021.107.043.279.043.279l.052.387s.033.409.065.548c.032.13.054.14.076.225.043.161-.032.236.043.43.075.193.14.17.215.289.054.086.074.107.117.215.043.107.183.463.344.72.172.269.398.601.549.569.15-.033.257-.268.257-.268s.172-.463.065-.914c-.108-.462-.602-.245-.666-.578-.01-.075 0-.193 0-.193s-.012-.141-.033-.184c-.022-.043-.194-.364-.258-.633-.054-.204-.043-.86-.086-1.043-.118-.472-.129-.43-.065-.515.076-.086.141-.065.141-.065l.096.012.076.031.139.086c.043.032.193.15.193.15l.365.237s.205.119.291.162c.086.043.16.096.16.096l.096.064.162.12.031.03.022.043s.076.173.398.356c.258.15.484.106.58.225.022.021.203.27.29.42.107.171.236.374.279.439.043.064.312.396.312.396l.354.387.463.43.418.355.267.215s.237.226.506.408c.258.172.268.193.44.31.128.087.3.206.472.335.172.14.366.396.291.482-.054.032-.151-.106-.334-.267a4.298 4.298 0 0 0-.375-.301c-.193-.15-.291-.227-.506-.356-.107-.064-.3-.181-.31-.16-.075.226-.066.44-.055.719.01.193.043.386.107.633.054.236.108.366.194.591.086.226.248.58.248.58l.246.495.226.375.118.193.043.064s.053.13 0 .215-.119.269-.215.28c-.097.021-.322.033-.322.033l-1.278-.022-.666-.054s-.074-.043-.46-.043c-.226 0-.409.096-.538.107-.107.01-.634-.032-.988.107-.333.14-.484.172-.602.387-.086.161.42.42.838.516.677.15.483-.14.74-.322.033-.022.044-.042.077-.053.171-.054.267.084.44.084.192 0 .3-.064.493-.096.977-.129 2.502.332 2.502.332s.377.118.549.086c.204-.043.16-.118.224-.236.054-.097.033-.117.043-.225 0-.064-.01-.096-.021-.16-.043-.183-.16-.441-.16-.441s-.087-.193-.12-.29c-.042-.139-.085-.226-.107-.376-.064-.398-.053-.365-.053-.59 0-.408.043-.634.15-1.031.162-.58.463-.827.688-1.385.065-.15.064-.365.14-.387.085-.01.075.269.032.43-.14.558-.483.794-.644 1.363-.118.44-.183.697-.15 1.148.01.247.107.635.107.635s.129.429.193.59c.065.161.193.43.193.43l.29.515.15.246s.106.097.053.258c-.054.161-.16.26-.29.399-.364.43-1.212 1.062-1.427 1.212-.3.226-.291.291-.313.356-.118.344-.462.354-.837.762-.086.086-.311.321-.268.525.021.075.945.237 1.482.012.42-.183.054-.388.172-.592.086-.15.3-.15.397-.28.16-.214.053-.203.193-.374.462-.559.763-.88 1.59-1.385.075-.043.215-.107.215-.107s.117-.055.16-.12c.054-.086.043-.16.043-.257 0-.065-.01-.096-.01-.16 0-.076.01-.119-.012-.194-.021-.118-.095-.215-.138-.28a.772.772 0 0 1-.162-.355.894.894 0 0 1 .033-.6c.086-.225.279-.407.279-.407l.482-.323s.42-.301.55-.42c.139-.118.407-.365.6-.644.226-.311.344-.505.44-.88.032-.14.065-.354.065-.354s0-.15.086-.16c.085-.011.107.02.107.02s.074.042.096.257c.01.215-.053.463-.053.463s-.065.246-.086.396c-.01.097-.012.15-.012.258 0 .183.076.334.076.334s.043.032.043-.043a1.6 1.6 0 0 1 .055-.344c.032-.107.053-.087.117-.27.086-.236.01-.213.053-.353.022-.064.076-.129.14-.129.065 0 .075.086.075.086s.065.28.012.537c-.054.258-.248.612-.248.612l-.149.257s-.107.183-.15.301c-.043.129-.055.183-.033.3.032.13.13.303.183.27.043-.032-.064-.14.065-.398s.298-.418.298-.418.237-.28.344-.494c.097-.193.194-.506.194-.506s.076-.28.054-.516c-.01-.225-.054-.343-.054-.343l-.096-.172-.055-.127.022-.076c.021-.011.097.043.162.129a.854.854 0 0 1 .16.343 1.018 1.018 0 0 1 .043.301c0 .086-.031.44.097.666.054.108.183.354.194.246.021-.247-.087-.364-.076-.59.01-.257.076-.193.097-.322.022-.14.053-.173.032-.355a2.632 2.632 0 0 0-.096-.397l-.076-.172-.032-.064s.021-.031.053-.031l.258-.086s.334-.15.463-.258c.14-.097.3-.27.3-.27s.215-.267.323-.46c.258-.484.257-1.096.246-1.376-.01-.268-.086-.623-.086-.623s-.086-.43-.064-.709c.021-.279.043-.408.043-.408s-.01-.279.226-.58c.236-.3.342-.493.385-.719.043-.193-.022-.504-.108-.386-.096.129-.137.387-.277.601-.193.301-.474.666-.613.666-.075 0-.096-.172-.096-.172s-.096-.29.065-.656c.118-.258.181-.332.332-.525.14-.183.225-.28.322-.473.086-.172.106-.204.16-.472.01-.065-.01-.204-.074-.194-.086 0-.322.517-.569.807-.236.268-.677.611-.677.611s-.043.031-.043-.055c-.01-.075-.022-.3.021-.503a2.22 2.22 0 0 1 .291-.72c.204-.354.461-.6.59-.73.054-.053.215-.151.13-.205-.076-.043-.302.15-.474.28-.214.16-.289.205-.503.463-.215.257-.27.365-.27.365s-.204.332-.258.654c-.054.322-.053.504-.053.504s0 .291.032.463c.021.182.097.46.097.46s.108.313.15.507c.044.193.118.761.118.761s.054.409.021.795c-.032.387-.064.612-.107.73-.043.119-.16.43-.354.645-.182.204-.226.236-.226.236s-.193.16-.354.246a3.743 3.743 0 0 1-.505.227 2.211 2.211 0 0 1-.268.031h-.139l-.043-.03-.023-.087s-.106-.419-.234-.687c-.108-.226-.334-.537-.334-.537s-.387-.527-.688-.817c-.344-.343-.73-.6-.967-.783-.086-.064-.279-.184-.279-.184s-.783-.783-1.062-1.406c-.194-.43-.322-.74-.268-1.213.01-.107.053-.312.074-.312l.14.043c.012.01.14.129.259.172.064.021.181.043.181.043s.097.01.15.021c.054.022.151.054.215.086.065.032.16.098.16.098l.184.138.194.15s.106.076.138.087c.032.01.054.021.065.021h.043s.044-.012.054-.055c.011-.053-.053-.01-.15-.117a.698.698 0 0 1-.15-.181s-.022-.087-.108-.184-.193-.182-.193-.182-.076-.053-.184-.086c-.107-.032-.14-.033-.15-.076-.01-.043.129-.021.129-.021s.162.021.29.086c.13.064.204.14.204.14l.086.075.055.054.052.032s.054.053.065-.022c.01-.064-.011-.118-.022-.129l-.053-.053-.214-.183a1.076 1.076 0 0 0-.172-.15 1.303 1.303 0 0 0-.28-.15c-.107-.044-.171-.033-.279-.087-.075-.032-.14-.053-.183-.117-.011-.01-.064-.055.033-.033.096.021.16.054.267.076.172.043.28.042.442.096.064.021.15.064.15.064l.203.086s.28.151.473.162a.938.938 0 0 0 .42-.064.814.814 0 0 0 .215-.13.36.36 0 0 0 .052-.064l.022-.054v-.043c-.054-.065-.16.108-.332.14-.183.033-.173.053-.291.032a.477.477 0 0 1-.3-.15c-.173-.162-.236-.312-.462-.409-.096-.043-.27-.086-.27-.086s-.236-.075-.365-.15c-.096-.054-.298-.086-.234-.172.032-.043.29.107.482.129.14.021.237.011.344.011s.258-.033.28-.033c.021-.01.106 0 .181.022.075.021.118.053.193.086.076.032.163.086.184.086l.043.011.022-.021.01-.022-.01-.021-.034-.022-.064-.043s-.096-.054-.182-.14c-.086-.086-.162-.182-.29-.225-.13-.043-.28-.064-.28-.064l-.15-.012-.065-.01s-.107-.033-.021-.054a.888.888 0 0 1 .15-.032.495.495 0 0 1 .248.01c.086.032.226.107.236.107.011.011.14.109.28.141.14.032.322.043.322.043l.086-.021.043-.012.031-.022-.01-.052s0-.044-.064-.055a.697.697 0 0 1-.313-.117c-.118-.086-.203-.172-.203-.172s-.086-.076-.258-.12c-.16-.042-.214-.042-.214-.042l-.055-.022-.117-.052s-.055-.033-.098-.086c-.043-.054-.106-.152.076-.098.183.054.225.086.225.086s.097.097.183.107c.054.011.097.022.13-.021.053-.054-.098-.118-.206-.194a.725.725 0 0 1-.172-.193s-.063-.053.034-.031c.096.021.267.129.267.129s.086.042.13.053c.031.01.118.064.161.085.032.011.13.033.193.065.086.054.13.14.172.172.043.032.076.087.13.097.053.011.063.032.095.01a.418.418 0 0 0 .043-.031s.01-.023-.043-.055-.117-.117-.117-.117l-.022-.043-.011-.043-.053-.086-.098-.14s-.15-.204-.289-.28c-.129-.075-.226-.117-.226-.117s-.064-.031-.096-.053c-.054-.043-.076-.077-.12-.13-.053-.065-.073-.106-.138-.17-.118-.118-.483-.184-.344-.27.076-.043.172-.02.215-.01.043.011.14.052.237.084.064.022.107.024.171.045.065.022.14.031.172.053.032.021.065.065.086.076.011.01.096.15.246.225.15.075.227.128.377.138.118.011.31-.03.31-.03s.055-.023.012-.077c-.053-.054-.054-.064-.097-.074-.172-.065-.31-.043-.44-.172-.053-.054-.076-.065-.119-.15-.043-.086-.02-.107-.052-.16-.022-.054-.077-.13-.077-.13s-.16-.194-.332-.29a1.955 1.955 0 0 1-.334-.215c-.032-.022-.095-.108-.095-.108l-.055-.086-.031-.064c-.022-.118.192.033.31.076.194.064.291.15.485.215.107.032.172.031.279.074.182.075.236.258.43.28.107.01.322.053.279-.044-.043-.107-.258-.107-.365-.236-.054-.054-.054-.106-.108-.16-.086-.108-.29-.205-.29-.205s-.064-.053-.14-.203c-.064-.15-.225-.26-.515-.399-.193-.096-.58-.118-.43-.215.086-.064.161-.053.28-.021.118.043.16.098.257.14.097.044.14.054.16.065.022.01.097.043.13.043.02.01.183.032.226.043l.215.053.172.064s.085.033.138.033.141-.021.141-.021l.064-.043.01-.022s.033-.053-.053-.064a.986.986 0 0 0-.128-.012l-.077-.021-.03-.01s-.151-.118-.28-.172a4.841 4.841 0 0 1-.162-.064l-.053-.012-.064-.01s-.055 0-.141-.076c-.086-.075-.118-.118-.193-.193l-.096-.096s-.086-.066-.086-.12c.01-.085.193.098.193.098l.13.086s.107.076.3.086c.193.011.43-.054.43-.054s.031-.02.138.011.194.096.194.096l.086.076.129.139.021-.01c.01-.01.065-.065-.031-.183-.097-.119-.258-.225-.258-.225s-.215-.129-.43-.172c-.214-.043-.312-.043-.312-.043s-.161 0-.258-.107c-.097-.108-.16-.215-.16-.215l-.033-.15s-.053-.065-.16-.108c-.097-.043-.206-.107-.206-.107s-.16-.054-.172-.13c-.032-.139.27 0 .43.032.15.032.215.087.365.12a.915.915 0 0 0 .344.03c.075 0 .118-.008.193-.02.076 0 .13-.01.206 0 .107.022.15.075.257.118.065.032.097.063.172.074.065.011.194.055.172-.01l-.033-.043c-.054-.075-.117-.075-.182-.128-.14-.108-.204-.193-.365-.268a.932.932 0 0 0-.29-.098c-.087-.01-.151.012-.237-.01-.097-.032-.128-.075-.225-.128-.15-.086-.237-.162-.398-.227a2.663 2.663 0 0 0-.29-.086l-.076-.01-.03-.011c-.151-.054.267-.171.46-.225.097-.021.14-.044.236-.033.086.01.183.13.28.076.14-.075-.161-.28-.258-.312-.129-.054-.354-.01-.354-.01l-.494-.012-.14-.021s-.086 0-.15-.075c-.065-.075-.311-.377-.59-.42-.29-.043-.376 0-.397-.02-.247-.388-.506-.473-.7-.655-.053-.054-.138-.173-.16-.162zm1.173 1.14a.53.53 0 0 1 .051 0l.053.033a.54.54 0 0 1 .107.15c.011.043-.128-.01-.181-.022a.43.43 0 0 1-.15-.076s-.023-.032.03-.064a.197.197 0 0 1 .09-.022zm.252.53c.026 0 .045.006.045.006l.053.034a.538.538 0 0 1 .107.15c.011.043-.128-.01-.181-.022a.43.43 0 0 1-.15-.076s-.022-.032.043-.064a.133.133 0 0 1 .083-.027zm-1.882.014a.398.398 0 0 1 .08.004s.043 0 .107.031c.065.043.108.172.108.172s.01.022-.043.022c-.033 0-.033-.053-.065-.075-.043-.032-.075-.043-.129-.064-.053-.021-.128.01-.138-.043 0-.032.04-.044.08-.047zm-.844.125c.042-.012 0 .072 0 .072s-.139.225-.332.311-.322.13-.688.162c-.053 0-.03-.033-.03-.033s.417-.117.654-.246a2.36 2.36 0 0 0 .322-.215.25.25 0 0 1 .074-.05zm.752.06s.065.002.14.055c.076.054.14.237.14.237s.022.117-.032.16-.14-.031-.184-.096a.269.269 0 0 0-.16-.107c-.086-.032-.215.064-.236 0 0-.022.01-.076.01-.076s.022-.064.119-.117c.086-.054.203-.055.203-.055zm1.998.415c.043.004.103.037.15.037.14 0 .257 0 .354.021.086.022.107.075.064.075a.33.33 0 0 1-.096.011c-.096 0-.086-.043-.214.022-.13.064-.033.033-.215.097-.172.065-.13-.107-.13-.107s.013-.033.034-.12c.008-.031.027-.039.053-.036zm-4.844.498c.065 0 .184.044.184.14.01.097-.066.054-.12.086-.031.022-.052.033-.095.065-.054.043-.108.15-.14.117-.044-.032-.022-.15-.022-.15s.033-.086.076-.172c.054-.086.117-.086.117-.086zm5.137.111a.228.228 0 0 1 .05.008s.032.01.053.031c.022.022.108.098.108.14 0 .033-.139-.022-.203-.032-.065-.011-.15-.075-.15-.075s-.022-.02.042-.052a.21.21 0 0 1 .1-.02zm-1.895.088c.01 0 .009.015-.01.049-.042.086-.171.193-.171.193s-.15.214-.182.246c-.14.108-.312.044-.387.055-.064.01-.021-.055-.021-.055s.183-.074.3-.138c.158-.079.427-.35.471-.35zM9.86 3.17c.023 0 .041.01.041.043.011.075-.128.128-.128.128s-.042.011-.053-.064c-.01-.075.053-.086.053-.086s.05-.024.087-.021zm2.66.117c.018-.01.003.097.003.097s-.033.141-.108.184c-.096.054-.334.118-.355.086 0-.022.311-.12.45-.355a.034.034 0 0 1 .01-.012zm1.454.039a.239.239 0 0 1 .052.006s.03.01.063.03c.032.033.108.12.119.163.01.043-.14-.01-.215-.021-.064-.011-.162-.086-.162-.086s-.02-.033.045-.065a.175.175 0 0 1 .098-.027zm-1.301.244c.02-.006-.012.084-.012.084s-.043.14-.129.172c-.107.032-.514.042-.525.01-.01-.033.472-.076.654-.258a.026.026 0 0 1 .012-.008zm1.334.185a.3.3 0 0 1 .06.006s.033.01.065.032c.032.032.118.13.129.183.01.065-.15 0-.225-.021a.535.535 0 0 1-.184-.098s-.021-.031.043-.074a.207.207 0 0 1 .112-.028zm0 .537a.3.3 0 0 1 .06.006s.033.01.065.032c.032.032.118.13.129.183.01.054-.15-.011-.225-.033a.525.525 0 0 1-.184-.096s-.021-.021.043-.064a.207.207 0 0 1 .112-.027zm-1.568.514c.083.024.007.629-.153.91a4.718 4.718 0 0 1-.742.944c-.15.107-.053-.086-.053-.086s.418-.579.612-.987c.14-.29.226-.676.29-.752.02-.022.034-.032.046-.029zm1.55.008a.314.314 0 0 1 .069.01s.042.01.074.043c.032.032.14.151.15.205 0 .064-.182-.023-.267-.033a.54.54 0 0 1-.203-.108s-.023-.043.052-.086a.206.206 0 0 1 .125-.031zm-.068.52a.3.3 0 0 1 .06.005s.033.012.065.034c.032.032.118.128.129.181.01.054-.15-.01-.225-.021a.526.526 0 0 1-.182-.096s-.02-.033.043-.076a.201.201 0 0 1 .11-.027zm-.031.466a.482.482 0 0 1 .048 0l.055.033a.542.542 0 0 1 .108.15c0 .044-.13-.01-.194-.02-.064-.011-.15-.075-.15-.075s-.022-.032.043-.064a.2.2 0 0 1 .09-.024zm-.059.457a.32.32 0 0 1 .045.006l.043.022c.021.021.084.085.084.117 0 .043-.117-.01-.16-.01a.32.32 0 0 1-.117-.064s-.012-.023.03-.055c.022-.016.05-.017.075-.016zm-.09.422a.31.31 0 0 1 .037.002l.043.022c.022.021.074.075.074.107-.01.022-.107-.021-.15-.021a.475.475 0 0 1-.107-.053s-.01-.022.033-.043a.165.165 0 0 1 .07-.014zm-7.609.207c.118.022.14.032.129.086.01.054-.139.053-.139.053s-.216.044-.183-.031c.043-.076.193-.108.193-.108zm7.511.125c.022 0 .04.004.04.004l.043.022c.021.021.074.075.074.107-.011.032-.108-.01-.15-.021-.044-.011-.108-.055-.108-.055s-.01-.022.033-.043a.156.156 0 0 1 .068-.014zm-.12.377a.22.22 0 0 1 .03.002l.032.022c.01.01.064.064.064.086 0 .032-.076 0-.119-.01-.032-.01-.084-.043-.084-.043s-.01-.022.022-.043a.1.1 0 0 1 .054-.014zm-3.061.12a1.5 1.5 0 0 1 .182.011c.3.043.59.312.546.344-.043.032-.107 0-.129 0l-.107-.053-.162-.043s-.29-.065-.504-.055c-.215.011-.408.086-.408.086s-.086.044-.107-.01c-.011-.064.033-.097.033-.097l.01-.022s.246-.164.646-.162zm-5.113.128c.007 0 .01.002.01.002l.021.022c-.01 0 .032.107-.064.214-.097.108-.397.677-.461.58-.065-.075.29-.613.365-.72.056-.089.107-.098.129-.098zm8.05.117c.015 0 .026.002.026.002l.031.012.055.074c-.011.032-.076.011-.108 0-.032 0-.076-.043-.076-.043s-.01-.01.022-.03a.094.094 0 0 1 .05-.015zm-6.783.303c.017-.006.029.008.043.012l.053.021.033.032.108.107c.043.064.16.28.138.3-.096.097-.128-.032-.267-.193-.14-.15-.108-.279-.108-.279zm6.633.05a.079.079 0 0 1 .025.005l.032.01.054.076c0 .021-.065-.012-.097-.012-.033 0-.075-.043-.075-.043s-.022-.01.01-.021a.094.094 0 0 1 .051-.014zM8.4 8.497c.035.003-.013.065-.013.065s-.184.246-.291.397c-.14.203-.312.514-.344.482-.032-.032.151-.374.248-.557.107-.225.268-.343.332-.365a.173.173 0 0 1 .068-.021zm-3.052.805l.021.022s.011.042-.064.16-.13.119-.13.119c0-.01-.02-.053.044-.182s.129-.119.129-.119zm-1.317.42a.032.032 0 0 1 .016.01c.032.043-.064.236-.064.236s-.097.203-.13.117c-.032-.075.034-.214.034-.214.075-.066.108-.156.144-.149zm8.565.277c.096.011.086.194.086.237.032.311.162.624.398 1 .333.526.87.934.848.967-.054.053-.59-.366-.784-.602-.322-.387-.56-.806-.634-1.332-.022-.118-.022-.291.086-.27zm-6.324.15c.021 0 .117.034.117.034l.236.096c.01 0 .13.054.227.107l.234.15.066.055c0 .022.075.14-.076.108-.15-.033-.472-.28-.601-.344-.13-.064-.343-.086-.246-.172.01-.01.021-.033.043-.033zm-1.14.593a.058.058 0 0 1 .022 0c.065 0 .065.052.065.052v.033s-.001.194.01.344c0 .043.119.526.119.526s.021.043-.022.043c-.032 0-.064-.065-.064-.065s-.087-.128-.12-.224c-.031-.086-.042-.227-.042-.227s-.022-.182-.022-.246c.011-.086.011-.162.022-.205a.039.039 0 0 1 .031-.031zm-1.49.257a.06.06 0 0 1 .03 0c.064.011.031.128.031.182s-.062.15-.084.15c-.021 0-.065-.096-.054-.15.01-.047.018-.167.078-.182zm5.442.893c.122-.01.475.497.988 1.05.58.624 1.256 1.215 1.278 1.29.043.129-.473-.28-.752-.494-.741-.57-1.643-1.729-1.535-1.836a.036.036 0 0 1 .021-.01zm10.273.523c.02-.002.037.024.037.024l.022.031c0 .022.128.526.117.848-.022.45-.042.773-.31 1.117-.323.419-.882.85-.764.506.075-.204.57-.462.763-1.031.108-.344.13-.667.13-.667l-.022-.654s-.012-.053-.012-.129c.012-.032.027-.043.04-.045zm-5.478 1.12c.1.011.145.074.027.16-.14.096-.193.085-.28.181-.096.118-.127.517-.224.356-.096-.161-.032-.387.13-.559a.418.418 0 0 1 .347-.139zm-7.799.439c.041-.008.149.074.149.074.053.01.107.108.107.108s.022.076-.043.097c-.064.032-.107-.033-.107-.033s-.14-.193-.12-.236a.019.019 0 0 1 .014-.01zm10.307 1.525c.021 0 .065.022.119.13s-.086.868-.258.76c-.097-.064.053-.256.053-.417 0-.129-.022-.227-.022-.334 0-.107.108-.139.108-.139zM13.2 16.824c.038.004.048.058-.004.166-.075.161-.096.215-.107.366-.022.16.076.61-.074.44-.054-.076-.108-.43-.065-.602.047-.242.186-.375.25-.37zm-.82 2.118c.036-.005.054.013.054.013.022.043-.022.087-.033.098a.435.435 0 0 1-.129.043c-.064.01-.03-.043-.03-.043s.041-.066.095-.098a.134.134 0 0 1 .043-.013zm-2.877.228c.086 0 .086.043.086.043 0 .032-.033.044-.12.033-.074-.01-.084-.032-.073-.043 0-.01.021-.033.107-.033zm.652.031a.063.063 0 0 1 .024.002s.365.064.601.074c.172.011.258.023.43.012.097 0 .043-.012.193-.012.054-.01.022.066-.021.077-.161.043-.226.02-.365.031-.119.01-.173.021-.291.021-.204 0-.224.012-.514-.074-.054-.021-.12-.086-.098-.107a.055.055 0 0 1 .041-.024zm-2.435.065c.126.003.086.045.086.045s-.001.042-.076.095c-.076.054-.107.022-.118.022-.01 0-.086-.043-.086-.086.011-.043.13-.074.13-.074a.489.489 0 0 1 .064-.002zm6.761 1.48a.133.133 0 0 1 .026.002l.021.043c0 .01-.086.13-.129.13-.053-.012-.033-.075-.033-.075s-.021-.065.043-.086a.232.232 0 0 1 .072-.014zm-.802.318c.008 0 .018.001.023.006v.043c.01.033-.27.345-.463.528-.182.172-.494.408-.494.408h-.043v-.055l.012-.021.021-.032.022-.033.021-.03.065-.077.15-.139.15-.14.237-.237s.085-.095.117-.117c.032-.021.054-.043.086-.064.032-.016.07-.038.096-.04zm-1.553 1.293a.064.064 0 0 1 .05.014c.033.075-.02.096-.02.096l-.098.076c-.011 0-.075.054-.096.021-.022-.032.01-.075.01-.086 0-.01.065-.085.119-.107a.093.093 0 0 1 .035-.014zm-1.047.994c.044-.005.076.061.076.061s.022.031.022.074c0 .033-.097.022-.15.065-.065.043.065.173-.14.162-.117-.01-.053-.118-.042-.129l.074-.107c.054-.076.087-.087.14-.12a.046.046 0 0 1 .02-.006z" fill="#D40000" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M11.972 0A25.68 25.68 0 0 0 9.93.091a27.858 27.858 0 0 0-4.248.685 23.565 23.565 0 0 0-2.975.966l-.06.022s.118 7.243.21 10.831a9.934 9.934 0 0 0 .569 3.098 14.899 14.899 0 0 0 1.622 3.214A12.884 12.884 0 0 0 7.56 21.66a11.234 11.234 0 0 0 1.192.873 15.214 15.214 0 0 0 2.038 1.031c.233.098.436.192.62.255A4.58 4.58 0 0 0 12 24a4.58 4.58 0 0 0 .59-.182c.182-.063.387-.156.62-.255a15.22 15.22 0 0 0 2.037-1.031 11.25 11.25 0 0 0 1.194-.873 12.88 12.88 0 0 0 2.511-2.752 14.889 14.889 0 0 0 1.622-3.214 9.934 9.934 0 0 0 .57-3.098c.091-3.588.21-10.827.21-10.827a.635.635 0 0 0-.057-.026 23.564 23.564 0 0 0-2.976-.966 27.856 27.856 0 0 0-4.248-.684A26.068 26.068 0 0 0 12.031 0zm0 .361h.057c.679.008 1.288.03 1.963.09a26.585 26.585 0 0 1 4.084.663 22.53 22.53 0 0 1 2.861.937.619.619 0 0 1 .057.025l-.038 2.274a.113.113 0 0 0-.019-.01 22.55 22.55 0 0 0-2.86-.937 26.61 26.61 0 0 0-4.085-.662c-.675-.06-1.281-.1-1.96-.108h-.058c-.679.009-1.29.048-1.965.108a26.608 26.608 0 0 0-4.084.665 22.547 22.547 0 0 0-2.861.938.116.116 0 0 0-.02.01l-.038-2.281.058-.022a22.527 22.527 0 0 1 2.86-.937A26.581 26.581 0 0 1 10.01.45c.675-.06 1.284-.08 1.963-.089zm.288.216a16.633 16.633 0 0 0-.902.008c-.121.005-.288.109-.29.23l-.007.648c-.002.132.172.236.305.239.462.01.87.002 1.318.03.033.003.062.023.062.056l-.003.13a.042.042 0 0 1-.045.046c-.521 0-1.066-.025-1.593.017-.028.002-.027-.005-.028.023l-.024.384-.002.03a16.318 16.318 0 0 1 1.882 0 .32.32 0 0 0 .305-.262l.006-.627c0-.129-.158-.224-.261-.23-.442-.028-.945-.013-1.394-.025a.046.046 0 0 1-.044-.05l.009-.145c0-.028.019-.036.047-.037.444-.016 1.107.005 1.562.019a.072.072 0 0 0 .06-.07V.674c0-.017-.032-.067-.063-.068V.605a33.113 33.113 0 0 0-.9-.028zm-1.88.064c-.423.008-1.341.125-1.862.19L8.515 2.64v.023l.47-.06a.014.014 0 0 0 .01-.006.014.014 0 0 0 .003-.01v-.523l.947-.102c.083-.015.18.046.256.169a.88.88 0 0 1 .114.339l.467-.035c.01 0 .03 0 .028-.01a.988.988 0 0 0-.307-.663.316.316 0 0 0 .197-.31 4.34 4.34 0 0 0-.022-.564.32.32 0 0 0-.3-.247zm3.59.019a.404.404 0 0 0-.413.332l-.01 1.195a.312.312 0 0 0 .24.289c.61.057 1.21.112 1.89.215.011 0 .032-.007.032-.017v-.416c0-.009-.02-.028-.027-.03-.454-.057-1.053-.137-1.589-.193a.076.076 0 0 1-.058-.07v-.812c0-.034.05-.052.084-.05.529.044 1.056.14 1.584.197.014.002.036-.007.037-.021l.01-.382a.037.037 0 0 0-.029-.033 36.382 36.382 0 0 0-1.75-.204zm1.98.237c-.012 0-.022.014-.022.025-.006.274-.045 1.457-.053 1.772v.027c.155.027.326.048.453.074.014.002.035-.008.035-.022-.002-.207 0-.448-.004-.636 0-.013.006-.014.02-.012a31.392 31.392 0 0 1 1.102.22c.008 0 .052.007.052.03-.003.217-.007.4-.013.617a.041.041 0 0 0 .027.04c.145.033.283.067.42.1.037.008.043.001.044-.012.022-.451.03-1.174.036-1.784 0-.008-.003-.02-.01-.022-.153-.035-.297-.072-.453-.105-.014-.003-.022.02-.023.035-.015.223-.009.43-.026.652 0 .008 0 .012-.009.01-.37-.076-.765-.158-1.132-.227-.01-.002-.006-.02-.005-.031l.003-.653a.033.033 0 0 0-.026-.03 23.196 23.196 0 0 0-.417-.068zM7.934.92a.303.303 0 0 0-.037 0c-.543.086-1.089.201-1.64.32a.5.5 0 0 0-.23.143.322.322 0 0 0-.102.205l.004 1.118a.434.434 0 0 0 .106.266.24.24 0 0 0 .204.11 38.518 38.518 0 0 1 1.633-.323.497.497 0 0 0 .268-.166.362.362 0 0 0 .098-.23L8.236 1.2a.28.28 0 0 0-.11-.198.303.303 0 0 0-.191-.08zm2.157.197a.076.076 0 0 1 .08.069l.003.189a.172.172 0 0 1-.14.166l-1.062.104-.009-.008V1.23l.009-.004 1.111-.108a.076.076 0 0 1 .008 0zm-2.52.29a.167.167 0 0 1 .078.022.117.117 0 0 1 .054.106l-.009.704a.125.125 0 0 1-.049.105.291.291 0 0 1-.12.047 61.16 61.16 0 0 1-.997.19.106.106 0 0 1-.088-.017.133.133 0 0 1-.03-.1v-.726a.143.143 0 0 1 .04-.097.243.243 0 0 1 .12-.06c.29-.054.67-.129.968-.172a.167.167 0 0 1 .033-.002zm10.81 0l-.001.001c-.008 0-.008.012-.008.019-.014.606-.03 1.167-.035 1.773 0 .013.006.03.018.033a22.245 22.245 0 0 1 2.158.7c.032.011.031-.013.031-.022.003-.138.01-.278.003-.416a.041.041 0 0 0-.025-.033 16.602 16.602 0 0 0-1.66-.541.028.028 0 0 1-.019-.026l.008-.18c0-.008.014-.01.022-.008a21.848 21.848 0 0 1 1.67.542c.01.003.01-.01.01-.019a5.121 5.121 0 0 0 0-.468.029.029 0 0 0-.02-.026 21.457 21.457 0 0 0-1.638-.523c-.008-.002-.018-.01-.018-.018v-.192c0-.008.013-.013.021-.01.564.144 1.184.36 1.615.519.038.014.06.008.06-.027 0-.157.006-.168-.002-.324-.002-.02-.004-.04-.022-.047a21.383 21.383 0 0 0-2.169-.707zm-12.97.064a.365.365 0 0 0-.084.009c-.65.166-1.303.414-1.956.652a.063.063 0 0 0-.03.052V3.65l.003.33s.471-.177.573-.21c.013-.004.013-.017.013-.031l-.01-.52c0-.015.002-.037.016-.04l1.625-.502a.306.306 0 0 0 .138-.101.237.237 0 0 0 .052-.156l-.017-.683a.272.272 0 0 0-.119-.197.365.365 0 0 0-.204-.068zm-.286.496c.036-.01.07.031.072.063a1.86 1.86 0 0 1 .012.25c-.001.045-.066.097-.11.11l-1.184.386c-.011.004-.031 0-.031-.012l.002-.358c0-.017.02-.031.036-.036a10.796 10.796 0 0 1 1.203-.403zm6.967.981c.653.01 1.246.03 1.9.088a26.591 26.591 0 0 1 4.083.663 22.501 22.501 0 0 1 2.861.937.107.107 0 0 1 .014.007 89.441 89.441 0 0 0-.007.448h-8.851zm-.317.002l-.001 4.618H8.827c-.043-.004-.015-.023.015-.052a1.71 1.71 0 0 1 .715-.312c.022-.002.028-.014-.003-.054a.898.898 0 0 0-.93-.212.985.985 0 0 0-.624.603.04.04 0 0 1-.04.031 6.734 6.734 0 0 1-.47.013c-.025 0-.037-.032-.035-.056a.737.737 0 0 1 .343-.484 1.1 1.1 0 0 1 .519-.178.04.04 0 0 0 .02-.063.515.515 0 0 0-.105-.093.758.758 0 0 0-.504-.077 1.053 1.053 0 0 0-.948.964c-.01.06.006.074-.053.094-.112.038-.322.064-.434.088-.02.003-.05-.043-.045-.063a1.309 1.309 0 0 1 .244-.522 1.006 1.006 0 0 1 .342-.291c.026-.013.05-.044.026-.064-.253-.22-.771.012-.98.241a1.37 1.37 0 0 0-.275.91c0 .016.014.041 0 .047a4.942 4.942 0 0 1-.4.15c-.012.003-.014-.028-.016-.04a.93.93 0 0 1 .147-.677.661.661 0 0 1 .244-.241c.01-.006.008-.018 0-.028-.115-.149-.569-.042-.708.094-.32.312-.297.615-.312 1.097-.001.023-.03.111-.056.123a.57.57 0 0 1-.184.07c-.021.006-.023.014-.028-.007a.39.39 0 0 0-.57-.222.356.356 0 0 0-.077.532c.015.017.02.034-.003.041a.42.42 0 0 0-.275.534.336.336 0 0 0 .296.21.628.628 0 0 0 .37-.108.043.043 0 0 1 .06.01.386.386 0 0 0 .531.124c.162-.107.234-.273.114-.559-.007-.016.02-.046.034-.054a6.615 6.615 0 0 1 3.144-.88 1.78 1.78 0 0 1 .456.101.094.094 0 0 1 .023.008l.002.941a.19.19 0 0 1-.034.025 1.005 1.005 0 0 0-.432.55c-.004.017-.006.021-.035.024-.193.019-.399.047-.591.062-.011.002-.032-.019-.028-.03a1.87 1.87 0 0 1 .725-.908.057.057 0 0 0 .01-.067.375.375 0 0 0-.168-.093 1.087 1.087 0 0 0-.895.362 1.418 1.418 0 0 0-.312.875c-.001.022.003.058-.019.065-.124.039-.261.074-.39.11-.015.004-.035-.011-.038-.027a1.006 1.006 0 0 1 .486-1.03c.051-.04-.038-.102-.102-.102a.963.963 0 0 0-.913.53 1.301 1.301 0 0 0-.03.793c.003.023.019.063-.006.069-.079.019-.265.09-.323.108-.021.007-.035-.003-.047-.03a1.041 1.041 0 0 1-.021-.488 1.102 1.102 0 0 1 .268-.493c.008-.01.011-.032 0-.037a.54.54 0 0 0-.378-.025.74.74 0 0 0-.477.38c-.159.297-.118.583.051 1.005.008.02.018.058 0 .07l-.137.08c-.017.013-.032.002-.044-.015-.055-.078-.124-.202-.21-.24a.415.415 0 0 0-.428.035.406.406 0 0 0-.12.431.875.875 0 0 0 .1.152c.01.014-.001.036-.013.047-.059.052-.14.09-.188.14a.395.395 0 0 0-.01.471.365.365 0 0 0 .45.123 1.624 1.624 0 0 0 .232-.122c.027-.018.045-.051.07-.025a.546.546 0 0 0 .224.153.427.427 0 0 0 .354-.062.305.305 0 0 0 .168-.338.875.875 0 0 0-.143-.27c-.033-.035-.035-.033 0-.054a7.435 7.435 0 0 1 1.66-.724 5.024 5.024 0 0 1 1.69-.207h.046l.003 1.949H3.206c-.054-2.133-.116-5.51-.156-7.836a.113.113 0 0 1 .014-.007 22.499 22.499 0 0 1 2.86-.937 26.59 26.59 0 0 1 4.084-.663 23.38 23.38 0 0 1 1.768-.086zm-3.088.816a1.237 1.237 0 0 0-.693.232c-.286.188-.456.773-.49.982a.044.044 0 0 1-.04.036 5.998 5.998 0 0 0-.676.125c-.007.001-.012-.01-.012-.017a.983.983 0 0 1 .258-.59 3.506 3.506 0 0 1 .493-.396c.013-.011.004-.045-.012-.051a1.035 1.035 0 0 0-.797.012 1.129 1.129 0 0 0-.675.867 2.062 2.062 0 0 0-.029.41c.002.017-.03.018-.045.023-.246.077-.504.167-.71.236-.01.004-.039.002-.039-.01a1.168 1.168 0 0 1 .175-.655c.12-.195.343-.305.505-.469.011-.012.028-.044.011-.051-.41-.165-.797.004-1.124.375a1.395 1.395 0 0 0-.2 1.124c.009.036 0 .075-.019.083a1.805 1.805 0 0 1-.23.089.025.025 0 0 1-.033-.02c-.093-.296-.44-.238-.597-.148a.361.361 0 0 0-.139.489.031.031 0 0 1-.01.044.442.442 0 0 0-.205.596.352.352 0 0 0 .428.137 1.208 1.208 0 0 0 .246-.129.027.027 0 0 1 .03.004.393.393 0 0 0 .566.08c.115-.082.16-.096.204-.244a.39.39 0 0 0-.09-.3c-.012-.01-.001-.04.013-.047A9.692 9.692 0 0 1 8.947 5.51a2.35 2.35 0 0 1 1.446.553.072.072 0 0 0 .062.031.098.098 0 0 0 .054-.056.66.66 0 0 0-.204-.678 1.21 1.21 0 0 0-.612-.344c-.012-.003-.02-.029-.01-.037a.968.968 0 0 1 .335-.22 3.587 3.587 0 0 1 .605-.05c.014-.001.035-.015.03-.028a.606.606 0 0 0-.527-.4 1.325 1.325 0 0 0-.693.1 1.118 1.118 0 0 0-.5.553.036.036 0 0 1-.032.02 12.139 12.139 0 0 0-.594-.007c-.014 0-.035 0-.035-.014a.943.943 0 0 1 .255-.517 1.989 1.989 0 0 1 .68-.386c.019-.006.04-.036.029-.051a.549.549 0 0 0-.201-.17 1.237 1.237 0 0 0-.347-.041zm3.405 1.607h8.845c-.012.686-.025 1.433-.04 2.195h-8.805zM8.681 7.801l6.666.003a.016.016 0 0 1 .017.013l-.002 5.138a2.354 2.354 0 0 1-.143.764 3.327 3.327 0 0 1-1.44 1.725 3.468 3.468 0 0 1-1.74.491 3.512 3.512 0 0 1-2.26-.86 3.078 3.078 0 0 1-1.105-2.31L8.667 7.82c0-.013.001-.019.014-.019zm6.994.086h5.217c-.012.645-.025 1.296-.034 1.926h-5.183V8.318zm-6.839.071c-.013 0-.014.005-.014.018l.007 4.753a2.97 2.97 0 0 0 1.054 2.225 3.333 3.333 0 0 0 2.153.827 3.284 3.284 0 0 0 1.66-.473 3.193 3.193 0 0 0 1.374-1.66 2.28 2.28 0 0 0 .136-.734l.002-4.94a.015.015 0 0 0-.016-.014zm4.436.304a.101.101 0 0 1 .001 0 .11.11 0 0 1 .087.071l.242.715a.079.079 0 0 1-.003.07.066.066 0 0 1-.054.024.065.065 0 0 1-.063-.044l-.038-.125h-.33l-.036.128c-.01.04-.04.044-.071.044a.063.063 0 0 1-.044-.028.057.057 0 0 1-.01-.052l.232-.728a.101.101 0 0 1 .087-.075zm-.763.007a.226.226 0 0 1 .023 0 .232.232 0 0 1 .235.157.046.046 0 0 1-.031.059.053.053 0 0 1-.07-.02.166.166 0 0 0-.132-.09.151.151 0 0 0-.133.1.498.498 0 0 0-.055.222.524.524 0 0 0 .046.228.159.159 0 0 0 .154.102.233.233 0 0 0 .166-.243v-.039h-.135a.057.057 0 0 1-.059-.063c0-.023.007-.05.059-.05h.192c.064 0 .073.048.073.09a.792.792 0 0 1-.011.152.399.399 0 0 1-.15.236.301.301 0 0 1-.15.043.257.257 0 0 1-.227-.145.618.618 0 0 1-.073-.31.577.577 0 0 1 .08-.304.226.226 0 0 1 .198-.125zm-2.988.002a.318.318 0 0 1 .004 0c.183.002.243.111.243.15 0 .035-.061.08-.095.039a.2.2 0 0 0-.157-.068.143.143 0 0 0-.15.096.114.114 0 0 0 .094.135.61.61 0 0 1 .267.08h-.001a.202.202 0 0 1 .081.18.247.247 0 0 1-.067.175.327.327 0 0 1-.247.088.297.297 0 0 1-.263-.14c-.004-.01-.01-.063.034-.078a.084.084 0 0 1 .082.026.239.239 0 0 0 .156.063.223.223 0 0 0 .148-.05.105.105 0 0 0 .024-.116.219.219 0 0 0-.193-.098.25.25 0 0 1-.172-.07.25.25 0 0 1-.069-.196.219.219 0 0 1 .1-.163.318.318 0 0 1 .181-.053zm1.649 0a.06.06 0 0 1 .001 0 .06.06 0 0 1 .006 0h.355a.06.06 0 1 1 0 .12l-.114.002v.682a.063.063 0 0 1-.125 0v-.683h-.116a.06.06 0 0 1-.007-.12zm.56 0a.06.06 0 0 1 .001 0 .06.06 0 0 1 .006 0h.354a.06.06 0 1 1 0 .12l-.114.002v.682a.063.063 0 0 1-.125 0v-.683h-.115a.06.06 0 0 1-.007-.12zm2.74 0a.06.06 0 0 1 .002 0 .06.06 0 0 1 .006 0h.353a.06.06 0 1 1 0 .12l-.112.002v.682a.063.063 0 0 1-.125 0v-.683h-.116a.06.06 0 0 1-.007-.12zm-.677.004a.063.063 0 0 1 .012 0h.19a.364.364 0 0 1 .208.058.278.278 0 0 1 .108.206.235.235 0 0 1-.071.198.305.305 0 0 1-.117.075l-.02.007.158.2a.086.086 0 0 1 .023.056c-.002.032-.023.05-.06.05a.066.066 0 0 1-.056-.027l-.187-.258h-.117v.23a.059.059 0 0 1-.063.067.06.06 0 0 1-.062-.067v-.726a.073.073 0 0 1 .016-.05.063.063 0 0 1 .038-.019zm-3.87.002a.06.06 0 0 1 .003 0h.357a.06.06 0 0 1 0 .121h-.116v.684a.063.063 0 0 1-.125 0v-.684h-.116a.06.06 0 0 1-.003-.12zm.583 0a.063.063 0 0 1 .002 0 .063.063 0 0 1 .065.064v.471a.258.258 0 0 0 .037.151.146.146 0 0 0 .127.056.138.138 0 0 0 .125-.056.265.265 0 0 0 .035-.15V8.34h.001a.063.063 0 0 1 .125 0v.432a.474.474 0 0 1-.056.262.25.25 0 0 1-.228.104.26.26 0 0 1-.23-.104.456.456 0 0 1-.061-.262V8.34a.063.063 0 0 1 .058-.063zm3.354.115v.328h.13a.18.18 0 0 0 .2-.174.15.15 0 0 0-.051-.109.178.178 0 0 0-.13-.045zm-.584.015l-.136.469h.278zm-1.14 1.005c.011 0 .021.002.022.011.002.018-.016.029-.042.042a.206.206 0 0 0-.094.08.31.31 0 0 0-.039.163.115.115 0 0 0 .063.079.298.298 0 0 0 .142.028.502.502 0 0 0 .215-.063.581.581 0 0 1 .276-.02.341.341 0 0 1 .194.063c.024.017.02.038.011.04-.014.005-.029-.012-.044-.01a.674.674 0 0 0-.142.03c-.06.027-.087.037-.116.09a.099.099 0 0 0-.007.073c.01.024.035.04.04.057a.446.446 0 0 0 .064.125.205.205 0 0 0 .03.023 2.668 2.668 0 0 1 .282.243.26.26 0 0 1 .04.093c.003.012-.007.03-.018.025a.255.255 0 0 1-.036-.029.178.178 0 0 0-.053-.039.368.368 0 0 0-.176-.025c-.027 0-.081.024-.05.036a.357.357 0 0 1 .132.116.43.43 0 0 1 .107.31c0 .006-.012.01-.015.006a.359.359 0 0 0-.102-.109.324.324 0 0 0-.21-.062c-.015.001-.06 0-.055.014a1.19 1.19 0 0 1 .123.191.562.562 0 0 1 .039.276c-.001.005-.02.01-.023.005a.61.61 0 0 0-.077-.076.349.349 0 0 0-.094-.06.29.29 0 0 0-.204.028.325.325 0 0 0-.13.132.492.492 0 0 0-.062.205.46.46 0 0 0 .042.257.368.368 0 0 0 .19.164.955.955 0 0 0 .334.044c.139.005.278-.016.417-.02a1.943 1.943 0 0 1 .396.003.88.88 0 0 1 .3.12 2.64 2.64 0 0 1 .215.183c.008.006.026-.003.035-.009a.462.462 0 0 0 .131-.233.346.346 0 0 0-.056-.246c-.047-.085-.116-.18-.17-.27a2.962 2.962 0 0 1-.202-.296.305.305 0 0 1-.017-.221.238.238 0 0 1 .107-.128c.011-.007.022.006.017.021a.184.184 0 0 0-.008.112.32.32 0 0 0 .089.14c.013.01.047-.005.055-.021.018-.043.007-.11.023-.154a.619.619 0 0 1 .108-.226 1.47 1.47 0 0 1 .36-.196c.033-.019.054-.105.091-.091.037.013.017.1-.011.142-.04.062-.087.1-.131.156a1.536 1.536 0 0 0-.157.247.222.222 0 0 0-.029.137.14.14 0 0 0 .073.094c.022.01.05-.01.07-.025a.385.385 0 0 0 .097-.103c.023-.038.01-.089.032-.128.006-.009.03-.007.037 0a.139.139 0 0 1 .044.084.393.393 0 0 1-.01.113c-.003.008-.024.027-.031.045a.244.244 0 0 1-.02.04c-.036.063-.078.116-.125.126-.01.001-.017.021-.01.03a.391.391 0 0 0 .113.132.198.198 0 0 0 .152.01c.027-.008.048-.027.079-.037.013-.004.005.004.005.017a.27.27 0 0 1-.015.086.19.19 0 0 1-.075.083.395.395 0 0 1-.166.05c-.027.005-.068.025-.058.051a.256.256 0 0 0 .042.085.122.122 0 0 0 .08.039.205.205 0 0 0 .125-.036c.04-.026.061-.074.096-.108.007-.006.026 0 .026.01a.36.36 0 0 1-.041.158.497.497 0 0 1-.128.138c-.015.013-.033.029-.033.049a.2.2 0 0 0 .044.084.134.134 0 0 0 .083.054.269.269 0 0 0 .1 0c.013 0 .01.023-.001.031a.253.253 0 0 1-.117.068.25.25 0 0 1-.128.008c-.081-.02-.134-.05-.214-.073a.23.23 0 0 0-.135-.009.227.227 0 0 0-.106.083.133.133 0 0 0-.03.064c-.006.063.025.13.005.192a1.415 1.415 0 0 1-.081.234 1.314 1.314 0 0 1-.115.165c-.04.054-.093.074-.12.133a.638.638 0 0 1-.038.063.515.515 0 0 0-.058.229.452.452 0 0 0 .085.209l.153.237a.149.149 0 0 1 .009.083.088.088 0 0 1-.044.07.893.893 0 0 0-.419.527l-.002.013v.004a.106.106 0 0 1-.021.042.334.334 0 0 1-.19.096c-.055.015-.11.029-.165.046a.077.077 0 0 0-.044.031.08.08 0 0 0 .009.097.137.137 0 0 1 .03.071.063.063 0 0 1-.013.042.108.108 0 0 1-.028.022.865.865 0 0 1-.216.087c-.05.011-.086-.002-.07-.059a3.075 3.075 0 0 1 .098-.293.42.42 0 0 1 .133-.14 2.289 2.289 0 0 1 .212-.162.411.411 0 0 0 .119-.126 3.299 3.299 0 0 1 .19-.275.163.163 0 0 0 .029-.129.246.246 0 0 0-.142-.185 1.052 1.052 0 0 0-.085-.034.534.534 0 0 1-.246-.175.09.09 0 0 0-.062-.04c-.063.002-.081.09-.083.138a1.17 1.17 0 0 0 .004.212.18.18 0 0 1 .004.072.055.055 0 0 1-.039.034 2.74 2.74 0 0 0-.565.279.24.24 0 0 0-.063.07l-.017.029a.187.187 0 0 1-.223.08.5.5 0 0 0-.044-.011.094.094 0 0 0-.064.017.162.162 0 0 0-.041.036.06.06 0 0 0-.01.019v.006a.057.057 0 0 0 0 .008.07.07 0 0 0 .004.017l.022.06a.066.066 0 0 1-.038.096.881.881 0 0 1-.203.055c-.04.005-.075-.01-.065-.057a1.1 1.1 0 0 1 .07-.237.094.094 0 0 1 .057-.06.79.79 0 0 0 .179-.14.266.266 0 0 1 .169-.073.512.512 0 0 0 .262-.1 1.73 1.73 0 0 0 .225-.186.37.37 0 0 0-.006-.46l-.02-.035c-.019-.03-.03-.073-.046-.104a.24.24 0 0 1-.039-.104c0-.068.027-.133.031-.201a.024.024 0 0 0-.016-.025.488.488 0 0 0-.137-.03 2.677 2.677 0 0 1-.56.006 1.423 1.423 0 0 1-.39-.18c-.053-.033-.085-.07-.139-.101-.014-.008-.015-.005-.028.006a.672.672 0 0 1-.459.125h-.002a1.766 1.766 0 0 1-.294-.077c-.073-.027-.19-.074-.26-.015-.029.025-.022.06-.022.093a1.244 1.244 0 0 1-.01.305.038.038 0 0 0 .003.032.044.044 0 0 0 .006.006.136.136 0 0 0 .036.02l.01.004c.028.01.033.023.05.058a.196.196 0 0 1 .016.062.159.159 0 0 1-.003.062.544.544 0 0 1-.009.039.207.207 0 0 0 .008.135.115.115 0 0 0 .042.053.073.073 0 0 0 .01.004.063.063 0 0 0 .01.003.068.068 0 0 0 .01 0h.01a.074.074 0 0 0 .02-.008l.004-.002a.05.05 0 0 1 .035-.012.046.046 0 0 1 .01.003.08.08 0 0 1 .063.074.484.484 0 0 1-.046.221.058.058 0 0 1-.077.03l-.018-.007a.445.445 0 0 1-.14-.117.19.19 0 0 1-.049-.112.12.12 0 0 0-.028-.082.09.09 0 0 0-.032-.016.144.144 0 0 1-.07-.046.268.268 0 0 1-.052-.219 1.5 1.5 0 0 0-.046-.64.149.149 0 0 1 .002-.108l.016-.043a.148.148 0 0 1 .007-.016.06.06 0 0 1 .042-.032.167.167 0 0 1 .029-.003 1.516 1.516 0 0 0 .45-.07.152.152 0 0 1 .062-.01.89.89 0 0 0 .073.002c.03 0 .06-.027.024-.05a.847.847 0 0 1-.084-.087.046.046 0 0 0-.052-.022.072.072 0 0 0-.01.005l-.009.005a.098.098 0 0 1-.152-.029.824.824 0 0 1-.087-.202.555.555 0 0 0-.109-.238.235.235 0 0 0-.19-.063.216.216 0 0 0-.13.098l-.063.088a.144.144 0 0 0-.031.067.107.107 0 0 0 0 .016.14.14 0 0 0 .008.032.133.133 0 0 1-.039.154l-.094.075a.087.087 0 0 0-.03.06.527.527 0 0 1-.012.06.13.13 0 0 0-.003.045.088.088 0 0 0 .002.012.081.081 0 0 0 .031.04.156.156 0 0 1 .013.012.074.074 0 0 1 .012.017.06.06 0 0 1-.012.07.219.219 0 0 1-.024.021.753.753 0 0 1-.19.108.098.098 0 0 1-.026.006c-.038.003-.05-.026-.052-.06-.003-.044-.003-.089-.003-.134a.207.207 0 0 1 .057-.137.36.36 0 0 0 .072-.225.197.197 0 0 1 .04-.13.305.305 0 0 0 .057-.09.257.257 0 0 1 .039-.066 3.861 3.861 0 0 0 .281-.384c.054-.086.155-.192.237-.073a.357.357 0 0 0 .078.084 2.395 2.395 0 0 0 .259.164c.094.053.109-.042.125-.121v-.003a.331.331 0 0 1 .038-.092 1.26 1.26 0 0 1 .202-.247c.043-.038.105-.076.15-.113.018-.016.023-.018.03-.04.009-.022.024-.05.034-.078.01-.027.015-.055.024-.076a.344.344 0 0 0 .044-.098v-.003a.023.023 0 0 0 0-.005v-.007l-.003-.007a.05.05 0 0 0-.021-.024.18.18 0 0 0-.102-.026h-.003a.384.384 0 0 0-.148.031.106.106 0 0 0-.054.054.226.226 0 0 1-.042.063.098.098 0 0 1-.13.006c-.024-.016-.014-.043 0-.063a.414.414 0 0 0 .035-.05.042.042 0 0 0 .005-.025v-.004l-.002-.005a.031.031 0 0 0-.005-.006.046.046 0 0 0-.045-.007.98.98 0 0 0-.083.027.064.064 0 0 1-.094-.047.174.174 0 0 1-.003-.055.055.055 0 0 1 .04-.05c.02-.006.05-.017.046-.042a.079.079 0 0 1 0-.023.052.052 0 0 1 .012-.024.14.14 0 0 1 .03-.025 3.869 3.869 0 0 0 .32-.234.05.05 0 0 1 .064-.01l.01.006a.223.223 0 0 0 .151.02.046.046 0 0 0 .041-.03.025.025 0 0 0 0-.005v-.005l-.002-.006-.003-.004a.071.071 0 0 0-.035-.021l-.058-.021a.269.269 0 0 1-.052-.025.053.053 0 0 1-.025-.059c.023-.113.147-.114.241-.105h.004a.505.505 0 0 0 .14-.022c.06-.021.106-.067.163-.094.057-.027.117-.057.176-.08.018-.006.033-.002.049-.009a.091.091 0 0 0 .035-.025.965.965 0 0 1 .142-.163.822.822 0 0 1 .236-.092.107.107 0 0 1 .03-.006zm-.425.557a.219.219 0 0 0-.105.026c-.009.005-.015.016-.008.024.018.021.049.03.07.05a.16.16 0 0 1 .035.046c.009.019.024.04.033.06a1.296 1.296 0 0 1 .045.123 1.227 1.227 0 0 1 .05.209c.01.057.007.117.01.175v.081c-.001.023-.001.047-.003.07a1.143 1.143 0 0 0-.004.098v.08c.002.07.013.12.044.12a.18.18 0 0 0 .084-.019.175.175 0 0 0 .085-.148 2.026 2.026 0 0 0-.003-.576.51.51 0 0 0-.188-.362.219.219 0 0 0-.144-.057zm3.96.161h5.177c-.017.825-.034 1.6-.05 2.263h-5.13l.004-1.862zm-.006 2.544h5.123a9.697 9.697 0 0 1-.545 2.911 14.495 14.495 0 0 1-1.56 3.118 12.45 12.45 0 0 1-2.415 2.669 10.809 10.809 0 0 1-1.147.848 14.592 14.592 0 0 1-1.96.999c-.224.096-.418.186-.596.247-.193.065-.358.125-.474.156v-.115l.003-7.295a3.552 3.552 0 0 0 .316-.023c.005.015.016.057.031.1a.333.333 0 0 0 .219.166.317.317 0 0 0 .306-.107.373.373 0 0 0 .388.067.235.235 0 0 0 .175-.227.43.43 0 0 0-.033-.208l-.036-.066a3.925 3.925 0 0 0 .744-.41l.02-.006c.373-.094 1.872-.631 2.791-.643a3.28 3.28 0 0 1 1.627.39 2.792 2.792 0 0 1 .682.56c.006.009.013.028.037.032a.036.036 0 0 0 .034-.022 1.139 1.139 0 0 0 .079-.516c-.02-.282-.3-.486-.383-.57-.003-.003-.01-.021.02-.041a.674.674 0 0 1 .105-.085.983.983 0 0 1 .562-.212c.03.003.02-.04.012-.076-.058-.25-.415-.412-.79-.354a.963.963 0 0 0-.613.417c-.007.011-.042.027-.056.013a2.926 2.926 0 0 0-.369-.107c-.045-.01-.021-.044-.019-.05a1.003 1.003 0 0 1 .304-.337 1.125 1.125 0 0 1 .494-.224c.022 0 .022-.03.016-.04a.55.55 0 0 0-.375-.302.844.844 0 0 0-.78.14 1.397 1.397 0 0 0-.445.673c-.014.02-.018.036-.036.032-.099-.02-.345-.007-.367-.022-.015-.007-.012-.03-.009-.045a.91.91 0 0 1 .222-.38.882.882 0 0 1 .364-.286.055.055 0 0 0 .01-.094.98.98 0 0 0-1.22.263 2.192 2.192 0 0 0-.304.696c-.002.009-.017.036-.036.036l-.508.112-.083.019-.022.023a3.29 3.29 0 0 0 .497-1.65zm-12.45.085h5.19v.09a3.145 3.145 0 0 0 .837 2.098H3.556a9.74 9.74 0 0 1-.342-2.188zm.415 2.443h5.863a2.566 2.566 0 0 0 .112.1 3.897 3.897 0 0 0 2.17.898v1.21h-7.22a13.789 13.789 0 0 1-.8-1.827 10.401 10.401 0 0 1-.125-.38zm10.584.29l-.01.012h-.002l-.002-.002a3.29 3.29 0 0 0 .015-.01zm1.738.185a.911.911 0 0 0-.507.155.934.934 0 0 0-.392.41 2.65 2.65 0 0 0-.172.775.063.063 0 0 1-.038.035 2.897 2.897 0 0 0-.335.087.026.026 0 0 1-.023-.02 1.105 1.105 0 0 1 .15-.727.886.886 0 0 1 .218-.263.037.037 0 0 0-.017-.068.98.98 0 0 0-.648.114.888.888 0 0 0-.452.667 1.589 1.589 0 0 0 .042.594c0 .006.006.027-.016.031-.076.037-.282.145-.355.18-.005.002-.019.005-.022-.006a.58.58 0 0 0-.268-.358.526.526 0 0 0-.446.022.548.548 0 0 0-.216.224.375.375 0 0 0 .127.455c.006.006.017.02 0 .025-.09.049-.092.06-.16.161a.428.428 0 0 0 .052.45.465.465 0 0 0 .7.082c.004-.003.018.005.025.02a.548.548 0 0 0 .143.151.463.463 0 0 0 .455 0 .413.413 0 0 0 .21-.415.378.378 0 0 0-.111-.262c-.013-.016 0-.024.034-.046a5.404 5.404 0 0 1 1.96-.666 3.121 3.121 0 0 1 1.076.022 1.504 1.504 0 0 1 .629.312 2.841 2.841 0 0 1 .406.402.164.164 0 0 0 .117-.025.66.66 0 0 0 .014-.517 1.604 1.604 0 0 0-.384-.59c-.003-.002-.003-.013-.003-.02-.004-.03.015-.045.052-.079a1.211 1.211 0 0 1 .562-.297c.027-.002.038-.022.02-.053a.656.656 0 0 0-.808-.298h-.001a.916.916 0 0 0-.454.416c-.006.011-.022.05-.037.038-.09-.008-.242-.032-.331-.04-.041-.002-.025-.039-.024-.045a.744.744 0 0 1 .194-.316 1.176 1.176 0 0 1 .444-.318.021.021 0 0 0 .016-.031.627.627 0 0 0-.465-.229.81.81 0 0 0-.617.238 1.255 1.255 0 0 0-.337.74c-.009.023-.02.035-.037.035a2 2 0 0 1-.278.025c-.015-.004-.014-.02-.014-.036a.91.91 0 0 1 .101-.406 1.491 1.491 0 0 1 .55-.582c.036-.025.038-.076.026-.082a.911.911 0 0 0-.355-.071zM4.707 17.692h7.069v2.19H6.213a11.237 11.237 0 0 1-.898-1.181 16.446 16.446 0 0 1-.609-1.01zm10.076 1.176a.497.497 0 0 0-.273.069.982.982 0 0 0-.475.56 1.09 1.09 0 0 0 .012.571c.003.007.012.024-.002.03-.078.03-.136.065-.213.096-.004 0-.024.005-.028-.005a.631.631 0 0 1 .088-.736c.017-.015.027-.035-.008-.047a.588.588 0 0 0-.531.193.677.677 0 0 0-.117.659.922.922 0 0 0 .099.261c.003.005.03.021.014.028l-.15.115c-.003.003-.014.008-.019 0a.486.486 0 0 0-.29-.238.341.341 0 0 0-.317.088.361.361 0 0 0 .147.602c.007.003.017.012.005.02a.587.587 0 0 0-.19.212.377.377 0 0 0 .085.406.37.37 0 0 0 .29.089.605.605 0 0 0 .357-.313c.002-.003.021-.017.031-.006a.531.531 0 0 0 .264.2.324.324 0 0 0 .323-.065.35.35 0 0 0 .111-.4.61.61 0 0 0-.201-.216c-.013-.01-.003-.035.023-.055a2.972 2.972 0 0 1 1.402-.62 1.801 1.801 0 0 1 1.025.166 1.547 1.547 0 0 1 .337.267c.013.007.05.02.063.008a.397.397 0 0 0 .035-.548.654.654 0 0 0-.206-.165.043.043 0 0 1-.007-.015.906.906 0 0 1 .301-.393 1.382 1.382 0 0 1 .295-.143c.022-.006.018-.02.007-.047-.128-.293-.635-.304-.874-.15a1.088 1.088 0 0 0-.346.396c-.005.01-.012.04-.025.031l-.213-.064c-.004 0-.004-.024-.002-.028a1.115 1.115 0 0 1 .696-.565c.015-.006.01-.02.007-.028-.11-.268-.661-.245-.93-.074a1.167 1.167 0 0 0-.493.714c-.003.02.006.037-.007.04a1.239 1.239 0 0 1-.23.055.024.024 0 0 1-.022-.023.642.642 0 0 1 .067-.392 2 2 0 0 1 .324-.408.043.043 0 0 0-.003-.063.497.497 0 0 0-.236-.07zm-3.006 1.296v3.417c-.098-.032-.214-.074-.342-.117-.178-.06-.373-.151-.597-.247a14.587 14.587 0 0 1-1.96-1 10.816 10.816 0 0 1-1.147-.847 12.861 12.861 0 0 1-1.266-1.206h5.31z" fill="#B12B28" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M9.678 21.213h4.67v.909h-4.67v-.909zm.87 2.787h2.93v-1.409h-2.93V24zm-.844-5.313c.575.523.881 1.28.83 2.056h2.944a2.575 2.575 0 0 1 .818-2.056H9.704zm-3.052-2.17v.683h10.696v-.683H6.652zm.478 3.087a3.833 3.833 0 0 0 1.74-.917H7.009l.121.917zm9.74 0l.121-.917h-1.86c.49.451 1.089.768 1.739.917zm-8.666-4.556A73.645 73.645 0 0 0 5.913 8.63c.644.102 1.283.237 1.913.405A18.885 18.885 0 0 0 3.51 5.583c1.226 2.378 2.378 5.987 2.965 9.465h1.73zm9.326 0c.587-3.478 1.74-7.087 2.961-9.465a18.877 18.877 0 0 0-4.308 3.452c.63-.169 1.268-.304 1.913-.405a65.966 65.966 0 0 0-2.292 6.418h1.726zM6.087 16.17h11.83v-.679H6.087v.679zm5.135-1.144c.312-.74.569-1.5.77-2.278.203.777.462 1.538.773 2.278h2.052c-1.743-2.87-2.234-6.665-2.343-10-.009-.343.13-.43.46-.283l1.053.474A15.501 15.501 0 0 1 11.991 0 15.494 15.494 0 0 1 10 5.217l1.052-.474c.33-.152.457-.06.457.283-.109 3.313-.6 7.109-2.34 10h2.053zm-5.135 3.191h11.83v-.678H6.087v.678z" fill="#0C2340" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M22.192 13.826c-.032.02-.232.114-.288.136-.406.18-.772.152-1.18-.088-.294-.172-.566-.552-.672-.684-.084-.106-.186-.244-.332-.374-.272-.244-.638-.404-1.272-.392a.3.3 0 0 1-.146-.036c-.64-.338-1.746-.752-2.8-.7-.21.016-.24-.136-.31-.306a3.866 3.866 0 0 0-.46-.936c-.168-.238-.24-.24-.378-.278-.152-.042-.32-.06-.42-.236-.012-.022-.062-.116-.006-.182.14-.164.528-.388-.056-.718-.356-.2-.196-.33-.138-.36a.614.614 0 0 1 .392-.042 1 1 0 0 1 .56.36c.19.222.832 1.264 1.222 2.054.006.01.014.066.086.074.108.01.296.01.334.014.06.004.06-.044.054-.064-.552-1.836-1.19-4.124-2.296-5.714-.02-.046-.002-.094.068-.088.988.1 1.276 1.51 1.856 2.434.744 1.19 1.18.724 1.252-.08.048-.56-.1-1.272-.49-1.672-.092-.114-.258-.256-.326-.34-.024-.032-.028-.082.038-.1a.446.446 0 0 1 .118-.006c.458.034 1.092.404 1.36.816.546.846.506 1.3.43 1.6-.128.512-.368.806-.07 1.618.588 1.604.434 1.268.1 2.278-.03.076.018.134.084.128.77-.072 1.004.104 1.17.192.018.01.032.024.044.02.03-.01.04-.048.044-.098.064-.432-.026-.616-.124-.87-.06-.15-.124-.32-.146-.484a.8.8 0 0 1 .07-.488c.131-.274.16-.587.084-.882-.194-.856-.896-2.264-1.344-3.076-.13-.245-.26-.49-.392-.734-.032-.06-.02-.128.006-.184l.054-.136c.108-.274.164-.48.196-.72.104-.766-.098-1.312-.652-1.768-.516-.424-1.432-.612-2.654-.544l-.26.016c-1.148.066-2.452.14-3.434.06-.95-.08-1.504-.23-1.696-.46a.332.332 0 0 1-.076-.262A.844.844 0 0 1 9.74.96c.17-.13.37-.2.514-.18.254.012.536.156.86.322.29.15.62.32 1.004.428a3 3 0 0 0 .952.124c.29-.012.576-.072.846-.18a.892.892 0 0 0 .232-.132c.02-.016.026-.048.004-.08-.014-.016-.03-.016-.09-.016a4.5 4.5 0 0 1-1-.12c-.256-.064-.28-.124-.276-.148.006-.056.14-.108.294-.114.752-.034 1.328.006 1.71.034.161.017.323.022.486.016.022-.002.03-.016.032-.022a.04.04 0 0 0-.012-.04c-.264-.22-1.126-.55-2.11-.724-1.582-.28-2.642-.05-3.252.192a3.103 3.103 0 0 0-.714.4c-.306.238-.476.496-.508.77-.04.364.224.836 1.72 1.01 1.586.184 3.068.158 4.374.136l.402-.008c.828-.012 1.528.188 1.83.522.289.34.393.798.28 1.228-.03.115-.078.224-.14.324-.094.13-.2.168-.39.118-.612-.162-1.704-.52-2.232-.7-.472-.16-.844-.284-1.16-.362-.936-.23-1.228-.078-1.858.32-.152.096-.306.2-.484.322-.26.176-.55.376-.94.62-.285.172-.575.337-.868.494-.332.18-.674.37-1.01.572-1.076.632-1.248 1.48-1.448 2.46-.14.696-.3 1.484-.832 2.284-.058.086-.52.646-.616.804-.366.586-.56 1.092-.484 1.94.06.636-.16 1.188-.37 1.722-.164.42-.32.82-.346 1.244-.02.264-.01.51 0 .748.014.394.02.788-.1 1.128-.092.26-.328.52-.42.772a3.874 3.874 0 0 0-.198 1.212c-.006.36-.272.622-.554.9-.248.246-.508.504-.602.84-.014.044-.02.078-.038.104-.024.04-.06.064-.11.1a.962.962 0 0 0-.336.408c-.096.253-.089.533.02.78.016.028.058.096.122.104.044.004.088-.02.13-.07 0 0 .276-.318.382-.412a.086.086 0 0 1 .108-.008c.032.022.038.06.02.1-.012.024-.178.32-.274.568l-.002.008c-.014.034-.03.08-.006.114.022.036.076.056.17.06.04.004.08.004.12.004.508 0 .776-.136.914-.254a.342.342 0 0 0 .08-.124l.02-.04c.1-.272.168-.588.178-.824 0-.1.028-.128.096-.196.268-.272.268-.628.268-.974 0-.32 0-.648.21-.906.57-.64.866-1.384 1.152-2.104.296-.744.6-1.514 1.208-2.154.154-.158.302-.244.4-.228.05.008.088.04.116.094.13.24.09.562.052.874-.042.354-.082.686.104.904.126.162.16.334.098.494-.08.256-.324 1.032-.902 1.376a2.44 2.44 0 0 0-.216.164.404.404 0 0 0-.064.094.473.473 0 0 1-.312.262.964.964 0 0 0-.536.346c-.22.331-.314.73-.264 1.124.01.06.03.138.088.214.034.048.074.076.116.082a.132.132 0 0 0 .1-.028c.046-.04.088-.084.126-.132.08-.09.178-.204.3-.296.04-.03.08-.022.104-.006.02.016.032.04.024.06a.85.85 0 0 1-.094.174c-.06.094-.134.21-.192.348-.016.03-.018.06-.006.084.016.04.06.056.07.06.37.118.92-.022 1.23-.312a.762.762 0 0 0 .228-.59.36.36 0 0 1 .098-.228c.216-.186.306-.476.4-.784l.072-.222c.098-.317.287-.6.542-.812.406-.38.59-.74.706-.96.118-.238.144-.37.23-.508.17-.268.742-.32.954-.194.088.052.106.124.058.214-.032.058-.334.546-.476.88-.07.164-.228.226-.32.28-.568.332-.672.956-.688 1.212-.006.08.002.186.044.246a.14.14 0 0 0 .09.06.136.136 0 0 0 .106-.028c.032-.026.34-.336.376-.368.052-.044.096-.036.12-.016.022.02.032.062 0 .11-.04.062-.254.382-.228.452.04.118.162.116.282.116.974-.08 1.318-.774 1.318-.774.024-.04.052-.094.036-.238-.028-.26-.088-1.16.432-1.72.154-.172.246-.056.28.02.064.14.156.378.21.498.112.254.188.44.32.692.216.424.546.482.952.432.526-.066.888-.024 1.24.01.3.026.466.046.688-.156.12-.11.35-.31.504-.53.1-.138.128-.226.104-.44-.072-1.082.49-2.022 1.504-2.514.152-.062.32-.044.424.096.228.336.756 1.2.756 1.934a.746.746 0 0 1-.058.234c-.072.2-.16.45.004.79.012.294-.098.524-.194.728-.138.288-.246.516.13.74.141.08.293.14.45.18a.074.074 0 0 0 .04-.012.048.048 0 0 0 .024-.034c.01-.086.02-.38.036-.448.006-.028.02-.06.052-.064.03 0 .06.022.068.046.03.072.106.36.128.404.018.04.04.066.068.076.15.042.356-.216.432-.35.132-.274.078-.68-.138-1.036a.304.304 0 0 1-.036-.158.974.974 0 0 0-.04-.66 1.452 1.452 0 0 1-.088-.344c-.06-.508.254-2.12.282-2.284.054-.3.098-.514.116-.734a.856.856 0 0 0-.216-.62c-.136-.146-.3-.28-.46-.408a4.603 4.603 0 0 1-.378-.33.87.87 0 0 1-.228-.512c0-.02.004-.034.012-.04a.045.045 0 0 1 .026-.006c.24.018.434.176.676.38.22.18.466.384.81.536.684.304 1.332.26 1.984-.136.276-.196.362-.366.376-.388.018-.03-.008-.116-.088-.07ZM7.054 11.124c.04-.316.272-.65.374-1.044.146-.444.186-1.22.266-1.836.04-.308.156-.436.378-.464.146-.014.3.114.378.548.272 1.774.804 2.02 1.114 2.49a.328.328 0 0 1 .016.026c.08.148.104.284-.02.384-.072.06-.316.146-.728-.104-.496-.298-.57-.62-1.392.038 0 0-.11.084-.214.108-.09.02-.188-.014-.172-.146Zm4.3 6.51c-.03.02-.064.006-.112-.024-.326-.21-1.23-.374-1.992-.068-.786.314-1.504.76-1.552-.018-.01-.688.136-.988-.104-1.396l-.02-.032c-.02-.032.004-.04.012-.04 1.102-.086 1.398-.43 1.466-.55.014-.028-.004-.056-.032-.06-.254-.028-1.518-.066-2.024.008-.894.13-1.494 1.474-1.61 1.602-.134.146-.304.034-.304-.1 0-.224.134-1.314.22-1.692.14-.598.332-1.04.916-1.132.408-.062 1.412-.168 1.344-.44a2.388 2.388 0 0 1-.088-.5c0-.132.068-.16.202-.128.1.02.232.08.404.12 1.26.298 1.908.06 2.66-.274l.318-.144a.168.168 0 0 1 .23.222c-.04.086-.094.126-.21.236-.248.24-1.174 1-.616 2.284.434 1 .56 1.26.87 1.942.05.112.058.16.02.184h.002Zm2.346 1.732c-.062.096-.158.164-.34.164-.228 0-.388-.068-.484-.17a.758.758 0 0 1-.174-.688c.03-.12.1-.198.18-.22.032-.012.05-.008.068.014.034.054.156.248.184.288a.342.342 0 0 0 .142.108c.092.038.21.07.272.098.19.082.234.278.152.406Zm3.638-3.54c-.024.04-.046.046-.078.06-1.142.432-2.052 1.6-1.886 3a.338.338 0 0 1-.09.246s-.24.244-.39.348c-.052.036-.11.064-.244.056l-.51-.032c-.08-.014-.046-.084-.04-.1a.34.34 0 0 0 .016-.05c.044-.21.012-.504-.284-.614-.042-.024-.016-.064-.01-.076.126-.314.286-.7.412-1.242.09-.313.023-.65-.18-.906l-.18-.24c-.052-.058-.038-.12.034-.144l.254-.066c.06-.02.056-.114-.004-.13l-.13-.04a.61.61 0 0 1-.256-.228.57.57 0 0 1-.1-.226l-.014-.074c-.002-.038-.06-.04-.088-.012a.62.62 0 0 0-.114.754c.206.344.198.31.38.57.06.084.098.154.118.24.029.21.008.425-.06.626l-.208.632c-.126.28-.266.214-.344.16-.104-.068-.2-.244-.25-.432 0 0-.144-.526-.14-1.228-.008-.084-.066-.222-.25-.1l-.49.404c-.068.038-.188.018-.164-.142 0 0 .352-1.57.73-2.454.284-.72-.032-1.126-.408-1.572-.618-.788-.756-1.846.68-1.266.386.176.524-.052 1-.094.34-.028.452.11.48.168a.422.422 0 0 1 .04.14c0 .012-.004.02-.02.02-.804.048-1.764.716-1.02 1.766.726 1.028 2.73 1.372 3.626.392.012-.012.014-.042-.004-.056a.044.044 0 0 0-.046-.008 2.9 2.9 0 0 1-.556.16c-.428.07-1.334.02-1.76-.47-.246-.28-.24-.602.174-.652.23-.018.344.024.444.026.258-.004.31-.26.258-.38a.976.976 0 0 0-.292-.364c-.134-.094-.06-.194.026-.192.828.048 1.62.192 1.92 1.186.012.038.032.164.064.21.064.096.174.168.298.274.3.262.57.73-.344 2.152Zm1.076-.616c.146-.304.344-.1.44.234.12.426.136 1.108.084 1.46-.064.46-.28.368-.396.204-.184-.258-.38-.6-.52-.836a.294.294 0 0 1-.01-.022c-.064-.134-.074-.24-.006-.336.068-.106.34-.564.408-.704Z" fill="#B6A272" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M0 2.978h18.593c.021.004.042.012.063.013.436.019.863.09 1.279.218 1.459.451 2.507 1.367 3.117 2.772.454 1.046.5 2.259.316 3.156a4.634 4.634 0 0 1-1.37 2.482c-.014.014-.027.03-.04.045.021.026.052.04.077.061a4.774 4.774 0 0 1 1.951 3.564c.001.021.01.042.014.063v.79c-.005.027-.012.053-.014.08-.004.046-.002.093-.007.14a5.501 5.501 0 0 1-.21 1.047c-.398 1.278-1.167 2.262-2.336 2.924-.836.474-1.744.686-2.7.687-6.24.004-12.48.002-18.72.002v-4.74h2.988l.001 1.738c.134.016 7.226.01 7.286-.006v-4.668h-3.06v1.425c-.102.019-2.928.014-2.986-.004V8.912h2.986v1.424c.103.019 3.003.014 3.06-.003V5.976H3V7.51H.008Zm13.753 15.05h4.744c.254 0 .505-.023.75-.09.77-.21 1.3-.683 1.546-1.447a2.605 2.605 0 0 0-.007-1.636 2.068 2.068 0 0 0-1.12-1.274 2.553 2.553 0 0 0-1.092-.239h-4.82zm.003-12.058v4.377h4.397a2.5 2.5 0 0 0 .723-.103c.678-.203 1.147-.63 1.376-1.304.145-.428.163-.868.068-1.308-.161-.742-.598-1.251-1.313-1.515a2.711 2.711 0 0 0-.947-.147Z" fill="#000000" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M23.905 9.784H15.92V8.246a.157.157 0 00-.157-.158H8.238a.157.157 0 00-.157.158v1.538H2.358c-.087 0-.193.07-.237.158L.02 14.058c-.045.088-.011.157.077.157H8.08v1.54c0 .086.07.157.157.157h7.525c.087 0 .157-.07.157-.157v-1.54h5.723c.087 0 .193-.07.238-.157l2.1-4.116c.045-.087.011-.158-.076-.158m-2.494.996l-1.244 2.437h-5.232v1.708H9.07v-1.708H2.595L3.84 10.78h5.232V9.073h5.864v1.707z" fill="#CD9834" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M4.344 13.598c.075.281.195.39.407.39.22 0 .335-.132.335-.39V8.804h1.379v4.794c0 .675-.088.968-.43 1.31-.247.248-.703.439-1.278.439-.464 0-.909-.154-1.192-.438-.249-.25-.386-.505-.599-1.311l-.846-3.196c-.074-.281-.194-.39-.406-.39-.22 0-.336.132-.336.39v4.794H0v-4.794c0-.675.088-.968.43-1.31.247-.248.703-.439 1.278-.439.464 0 .909.154 1.192.438.249.25.385.505.599 1.311zM22.575 15.196l-1.591-4.98a.415.415 0 00-.06-.132.226.226 0 00-.186-.082.226.226 0 00-.185.082.414.414 0 00-.06.132l-1.591 4.98h-1.425l1.739-5.44c.09-.283.22-.524.384-.684.282-.275.614-.419 1.138-.419.525 0 .857.144 1.139.42.164.16.294.4.384.683L24 15.196h-1.425zM15.531 15.196c.903 0 1.344-.192 1.692-.538.385-.383.569-.802.569-1.427 0-.553-.202-1.064-.51-1.37-.403-.4-.903-.527-1.719-.527h-1.142c-.436 0-.61-.053-.748-.188-.094-.093-.139-.23-.139-.393 0-.168.04-.334.156-.448.103-.1.243-.147.511-.147h3.301V8.804h-3.049c-.903 0-1.343.192-1.691.538-.385.383-.57.802-.57 1.427 0 .553.203 1.064.51 1.37.404.4.904.527 1.72.527h1.141c.437 0 .61.053.748.188.095.093.14.23.14.393 0 .169-.041.335-.157.448-.102.1-.242.147-.51.147h-3.405l-1.306-4.086c-.09-.283-.22-.524-.384-.684-.282-.275-.615-.419-1.139-.419s-.857.144-1.138.42c-.165.16-.294.4-.385.683l-1.738 5.44h1.424l1.592-4.98a.415.415 0 01.06-.132.226.226 0 01.185-.082c.082 0 .142.028.186.082a.413.413 0 01.06.132l1.591 4.98h4.144z" fill="#E03C31" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M24,12c0-6.648-5.352-12-12-12C5.376,0,0,5.352,0,12c0,6.624,5.376,12,12,12C18.648,24,24,18.624,24,12z M23.136,12c0,6.12-4.992,11.136-11.136,11.136C5.88,23.136,0.864,18.121,0.864,12C0.864,5.856,5.88,0.864,12,0.864 C18.144,0.864,23.136,5.856,23.136,12z M16.248,11.28c-0.264,0-0.6,0-1.032,0.024l0.312-0.528h0.504c1.8,0,3.144,0.096,4.368,0.312 l0.552-0.528c-1.368-0.24-3.024-0.384-4.704-0.384H15.84l0.264-0.504h0.456c1.752,0,3.336,0.144,4.872,0.432l0.576-0.552 c-1.728-0.336-3.576-0.503-5.568-0.503c-0.849,0.003-1.698,0.043-2.544,0.12c-0.96,2.063-2.496,3.264-4.224,3.24 C9,12.384,8.159,12.097,7.08,11.52l-1.008-0.576l0.312-0.288l2.328,1.008l0.504-0.384L4.512,9.144l-0.72,0.552L2.112,9l0.024,0.696 c2.256,1.032,3.192,1.608,5.568,3.312c3.096,2.208,5.856,3.408,9.696,4.176l1.008-0.96h-0.24c-2.544,0-4.824-0.84-6.144-2.256 c1.104-0.672,2.471-0.983,4.368-0.983c0.504,0,1.224,0.047,1.896,0.119l0.576-0.552c-0.9-0.11-1.805-0.166-2.712-0.168 c-0.609-0.001-1.217,0.023-1.824,0.072l0.432-0.528c0.511-0.03,1.024-0.046,1.536-0.048c1.272,0,2.112,0.048,3.072,0.192 l0.552-0.528C18.912,11.377,17.52,11.28,16.248,11.28z" fill="#05164D" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M24 13.455h-.689l-.288-.739h-1.2l-.289.739h-.644l1.233-2.96h.666zm-1.16-1.233l-.411-1.044-.411 1.044zm-4.315 1.233h.66v-2.438h.995v-.51h-2.644v.51h.989zm-3.826 0h1.927v-.511H15.36v-2.438h-.661zm-3.282-2.438h1.416v-.51h-2.077v2.948h2.121v-.511h-1.46v-.766h1.25v-.511h-1.25zm-4.981 2.438h1.038c1.072 0 1.71-.555 1.71-1.472 0-.916-.638-1.471-1.71-1.471H6.436zm.655-2.438h.383c.694 0 1.044.344 1.044.96 0 .617-.344.961-1.044.961h-.383zm-2.277 2.155a.15.15 0 0 1 .15.15.15.15 0 0 1-.15.15.15.15 0 0 1-.15-.15.15.15 0 0 1 .15-.15m0 .277a.13.13 0 0 0 .134-.127c0-.073-.056-.128-.134-.128a.126.126 0 0 0-.127.128c0 .072.055.127.127.127m-.033-.039H4.76v-.177h.067c.038 0 .055.016.055.05 0 .033-.022.044-.044.05l.055.077h-.028l-.05-.077h-.033zm0-.1h.028c.022 0 .05 0 .05-.027 0-.022-.022-.028-.039-.028h-.039zM0 13.85h4.626l-2.31-.978zm.172-.395l2.144-1.033 2.143 1.033-2.143-3.304Z" fill="#003366" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M11.1381.0342a11.9956 11.9956 0 0 0-8.789 4.8388 9.3446 9.3446 0 0 0 1.3511 7.8206.014.014 0 1 1-.0219.0172A8.229 8.229 0 0 1 1.598 6.0554c0-.0152-.0116-.019-.0188-.0078A11.8789 11.8789 0 0 0 .3624 9.0653a8.7616 8.7616 0 0 0 2.421 5.3574.015.015 0 0 1-.0188.0234A7.1718 7.1718 0 0 1 .125 10.4023c0-.0152-.0195-.0152-.0203 0a12.1316 12.1316 0 0 0-.0578 2.6552 7.2198 7.2198 0 0 0 2.193 3.1536c.0159.0144.0003.0353-.0157.0265a6.5064 6.5064 0 0 1-1.954-1.7806c-.0072-.0112-.0204-.0074-.0172.0062a11.9956 11.9956 0 0 0 23.4805 0c0-.0136-.0092-.0174-.0172-.0062a6.5008 6.5008 0 0 1-1.9555 1.7806c-.0176.0088-.0316-.0121-.0156-.0265a7.223 7.223 0 0 0 2.196-3.1536h.0125a12.1284 12.1284 0 0 0-.0593-2.6552c0-.0152-.0171-.0152-.0203 0a7.1742 7.1742 0 0 1-2.6397 4.0438.015.015 0 0 1-.0187-.0234 8.7576 8.7576 0 0 0 2.4194-5.3574 11.8789 11.8789 0 0 0-1.2167-3.0177c-.008-.0112-.022-.0074-.0188.0078a8.2322 8.2322 0 0 1-2.079 6.6554.0145.0145 0 1 1-.0233-.0172 9.3422 9.3422 0 0 0 1.3526-7.8206A11.9956 11.9956 0 0 0 11.138.0342zm.0438.3108a7.7212 7.7212 0 0 1 6.2383 13.1733l-.0016.0016c-2.4535 2.3871-6.1174.8622-5.7448-2.0695.2863-2.26 3.0575-4.5112 5.156-5.7323a.016.016 0 0 0 0-.0266c-.2751-.2623-.8466-.8526-1.2136-1.2964a2.4127 2.4127 0 0 0-3.8549.0672l-6.0321.5591a.0188.0188 0 0 0 0 .0375l6.4663.3749c1.1468.0647 1.5207 1.1057.4155 1.943-4.1073 3.1133-4.8401 6.4075-3.9189 9.0186a.0171.0171 0 0 1-.0312.014 5.3045 5.3045 0 0 1-.8138-1.8758A7.7212 7.7212 0 0 1 11.1818.345ZM9.12 17.3357h1.6353l-.8746 2.2804a2.1952 2.1952 0 0 1-2.3382 1.262 5.3005 5.3005 0 0 1-1.1387-.1124l.2796-.7279c.7485.0872 1.3905.0216 1.6416-.6326zm3.8658 0h1.4635l.328 3.43h-1.6369l-.025-.678H11.638l-.5435.678h-1.351l2.7395-3.1754a.7005.7005 0 0 1 .503-.2546zm3.5456 0h1.6353l-1.0387 2.7037h2.079l-.2796.7263h-3.7112zm-3.4707.998-.8793 1.0965h.92z" fill="#C00000" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M0 3.47l.218.572c1.925 5.006 5.566 2.689 10.415 7.139l.056.05c.652.599 1.1.044.888-.306a.76.76 0 0 1-.165-.532 6.7 6.7 0 0 1 2.606 1.369l-.06.126c-.366.73-3.959.421-4 1.943a.969.969 0 0 0 .607.923l.71.287a17.34 17.34 0 0 1 6.086 4.146.086.086 0 0 1-.063.147.079.079 0 0 1-.054-.018 17.32 17.32 0 0 0-8.173-3.61.467.467 0 0 1-.39-.41c-.548-5.089-5.575-5.434-7.492-8.705l5.313 13.94H24L9.979 6.449a10.022 10.022 0 0 0-7.045-2.98Z" fill="#E40000" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="#00C300" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M13.776 3.9L5.184 16.332C4.051 17.969 2.208 19.548 0 19.721v.379h9.552c2.544 0 4.397-1.656 5.616-3.48L24 3.9Z" fill="#002157" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="#00C300" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M23.489 13.252c-.25.212-.605.444-1.241.767-1.347.72-2.198.983-2.198.983s-1.617-.234-4.207-1.007c0 0 1.306-.378 1.93-.581a40.11 40.11 0 0 0 1.958-.681c1.055-.396 1.73-.761 2.18-1.088.03-.022.058-.046.085-.068 0 0 .32.036.593.113.294.083.604.245.786.386.191.147.28.308.308.358a.681.681 0 0 1 .071.226s.014.085-.003.177a.579.579 0 0 1-.147.313zM24 12.196a.662.662 0 0 0-.08-.157 1.348 1.348 0 0 0-.197-.23 1.685 1.685 0 0 0-.227-.178c-.354-.232-.81-.362-1.215-.416-.627-.083-1.342-.07-1.411-.07-.23-.005-1.722.007-2.105.015-1.702.034-3.787.039-4.333.038-5.636.027-8.089-.094-10.82-.642C1.289 10.094 0 9.658 0 9.658c2.05-.073 14.004-.568 16.186-.627 1.427-.04 2.44-.048 3.253 0 .413.023.802.058 1.287.14a6.2 6.2 0 0 1 1.064.286c.486.18.893.442 1.096.707 0 0 .06.06.14.17.093.126.197.282.234.34.294.447.434.73.484.828.052.102.1.209.145.315.044.104.063.166.076.21.02.064.03.125.035.17Z" fill="#2E5C99" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M6.75 13.034H4.5l-2.25 2.257v-2.257H0v6.018h2.25v-2.257l2.25 2.257h3l-3.375-3.385zm3 0H7.5v6.018h6v-1.518H9.75zm10.5 0l-1.125 3.385L18 13.034h-3.75v6.018h2.25v-4.514l1.5 4.514h2.25l1.5-4.514v4.514H24v-6.018zM10.5 9.649c.725 0 1.313-.589 1.313-1.316s-.588-1.317-1.313-1.317-1.312.589-1.312 1.317.587 1.316 1.312 1.316zm1.688-1.316c0 .727.588 1.316 1.312 1.316.725 0 1.313-.589 1.313-1.316s-.588-1.317-1.313-1.317-1.312.589-1.312 1.317zm2.999 0c0 .727.588 1.316 1.312 1.316.725 0 1.313-.589 1.313-1.316s-.588-1.317-1.313-1.317-1.312.589-1.312 1.317zm-6.375 0c0-.727-.588-1.317-1.313-1.317s-1.312.589-1.312 1.317.588 1.316 1.313 1.316 1.312-.589 1.312-1.316zM7.5 10.025h9v1.505h-9zm4.125-2.821h.75v-.752h.75V5.7h-.75v-.753h-.75V5.7h-.75v.752h.75z" fill="#00A1DE" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M6.247 15.56l-1.386 1.385c.945.945 1.26 1.386 1.323 1.827.063-.063 1.323-1.134 1.323-1.512 0-.567-.378-.756-1.26-1.7m-3.15-2.458h-.755s.756.441.756 1.45v3.4c0 2.205 1.826 4.284 4.031 4.284h1.827c1.134 0 1.512-.252 2.142-.882l.692-.693c.378-.44.82-.755.82-1.952v-1.134c0-.945-.568-1.386-.82-1.638l-.63-.63v2.268s.441.504.693.63c.945.756.19 2.078-.692 2.078H7.066c-1.89-.063-3.402-1.637-3.465-3.527v-1.827c0-1.827-.503-1.827-.503-1.827m5.92 2.457l-1.385 1.386c.945.945 1.26 1.386 1.323 1.827.063-.063 1.323-1.134 1.323-1.512 0-.567-.378-.82-1.26-1.7M11.853 0l-.944.945c-.378.378-.252 1.134.504 1.89v1.89c0 .188-.19.377-.19.377s-1.133-1.008-2.14-1.008H7.57c-.945 0-1.7.882-1.827.945-.504.504-.504 1.45-.126 1.89L6.688 8s-.252-1.7 0-2.835c.063-.252.378-.567.693-.567l2.457 1.89-2.835 2.96c-.126.127-.504.379-.882.379-.44 0-.63-.252-.819-.504v1.386c0 .44.63.945 1.197.945h3.78c.252 0 .567-.063.819-.315l1.26-1.26c.188-.19.251-.441.251-.756V7.874c0-1.386-1.07-2.457-1.07-2.457s.251-.189.251-.756V3.213s.441.44.504.63l.82-.82c.377-.377-.253-1.07-.505-1.385C11.853.818 11.853 0 11.853 0M7.13 9.953c.378-.19.441-.315.756-.693l2.394-2.52s1.322 1.386 1.763 2.142c.19.378.441 1.07-.692 1.07H7.13M3.915 7.056h-.692c.44.252.755 1.008.755 1.449v2.772c0 .755.567 3.464 3.024 3.464h7.118v4.536c0 .755-.252 1.196-.44 1.385l-1.072 1.008h.504l1.953-1.763c.378-.441.819-.882.819-2.268V14.74l.819-.819 1.386-1.323c0 1.134.567 1.638 1.07 1.638a1.26 1.26 0 0 0 .756-.315l1.26-1.197c.567-.567.882-2.33-.504-2.33-.882 0-1.89 1.26-1.952 1.386-.315-.19-.567-.63-.567-.63v1.07c-.126.19-.693.63-1.134.63h-1.134v-1.07c0-.504.189-1.071.44-1.323l1.072-1.008h-.504l-2.142 1.953c-.378.44-.63 1.26-.63 1.448H6.058c-1.008 0-1.638-1.007-1.638-1.826v-2.08c0-1.7-.44-1.889-.504-1.889m16.315 6.047c-.189 0-.378-.063-.63-.252-.251-.189-.692-.819-.692-.819.126-.125.504-.251.818-.251.252 0 .504.063.567.189.441.566.378 1.133-.063 1.133M16.893 0L14.75 1.953c-.126.126-.63.882-.63 1.764v5.606c0 .378-.252.945-.44 1.134l-1.072 1.008h.504l2.016-1.827c.252-.252.756-.882.756-1.953V2.331c0-.82.378-1.26.567-1.45L17.397 0h-.504m.315 14.362v2.205l.756.819c.63.63.567 1.827-1.323 3.653a3.78 3.78 0 0 1-2.583 1.197h-3.401L12.672 24h1.386c1.386 0 2.646-.567 3.465-1.449.756-.819 1.197-1.89 1.134-3.023V16.63c0-1.008-.63-1.575-.756-1.7-.126 0-.693-.568-.693-.568Z" fill="#D71921" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M18.633 13.143c.011.283.008.564-.006.84-2.752.11-5.362.274-5.362.462 0 .183 2.552.347 5.27.454a7.221 7.221 0 0 1-.186.924c-2.68.11-5.17.273-5.17.456 0 .174 2.326.33 4.897.44-.116.33-.25.647-.396.954-2.21.105-4.04.247-4.04.402 0 .145 1.595.279 3.609.38a9.968 9.968 0 0 1-.354.536c-.134.184-.274.369-.422.55-1.26.094-2.123.203-2.123.32 0 .1.616.193 1.568.276a9.055 9.055 0 0 1-1.856 1.414s-.854-.733-1.557-1.592c-.63-.764-1.96-2.78-2.271-3.229-.314-.451-.52-.585-.887-.453-.491.173-1.063.26-1.238.26-.176 0-.271-.067.025-.184.291-.118 1.45-.665 2.023-1.799.64-1.274.077-3.033.077-3.033-.216.94-.705 1.29-.705 1.29.159-.872-.014-1.664-.446-2.22l-.24 1.107s-.15-.01-.525.304c-.37.314-.474.77-.474.77.296.12.644-.176.644-.176-.446 1.685-1.093 3.054-1.562 3.78-.472.724-.856.998-1.33 1.19-.396.159-.529-.028-.529-.028a7.17 7.17 0 0 1-.878-.902s-.021-.04.05-.036c.196.003.54-.327.616-.467.084-.158.078-.277.033-.286-.04-.007-.115.119-.492.353-.37.236-.537.074-.665-.06-.093-.1 0-.232.057-.312.06-.074 2.025-3.736 7.222-7.588 6.822-5.045 11.171-6.405 11.42-6.505.166-.065.434-.15.496-.088.065.071.1.128.088.211-.008.082-.05.123-.363.262-2.62 1.154-5.674 3.073-7.408 4.191-2.136 1.04-4.172 2.525-4.245 2.561-.164.101-.046.25.058.188 3.6-2.397 7.826-4.03 12.498-5.368.22-.062.342-.062.382-.014a.377.377 0 0 1 .064.187c.006.084-.064.13-.258.206-5.011 1.864-8.71 3.592-11.091 5.194 0 0-.245.146-.248.318 0 .065.132.073.132.073 1.19.021 2.784.092 3.538.136 0 0-.104.384-.83.692-.56.24-1.077.202-1.592.204-.117 0-.21.112-.122.238.047.06 1.14 1.816 5.104 2.217m-9.09 3.693c-.539.193-1.177.296-1.437.296-.451 0-1.189.25-1.45.476a337.1 337.1 0 0 0 3.413-.069 58.21 58.21 0 0 1-.322-.472 1.552 1.552 0 0 0-.187-.236c-.01.003-.008 0-.016.005M2.92 8.682c1.43 0 4.068-.035 6.675-.095.297-.239.606-.477.928-.718-2.89-.073-6.003-.119-7.603-.119-.676 0-1.226.21-1.226.466 0 .257.55.465 1.226.465m.407-2.247c0 .202.433.366.965.366 1.631 0 5.267-.059 7.918-.15.198-.138.395-.279.591-.411a283.4 283.4 0 0 0-8.509-.171c-.532 0-.965.164-.965.366m11.784 5.069c.29.173.647.348 1.085.508 1.387-.07 2.28-.147 2.28-.23 0-.1-1.374-.195-3.365-.278m-13.018-.982c1.214 0 3.196-.023 5.36-.064.309-.298.642-.6.991-.906a352.416 352.416 0 0 0-6.351-.082c-.762 0-1.378.236-1.378.526 0 .29.616.526 1.378.526m13.8-2.448a30.5 30.5 0 0 0-.606.322c1.023-.055 1.67-.115 1.67-.179 0-.05-.402-.097-1.063-.143m-9.433-2.8c1.556 0 6.286-.116 6.286-.258 0-.145-4.732-.261-6.286-.261-.301 0-.547.116-.547.26 0 .143.246.26.547.26M16.645 9.95a.89.89 0 0 1-.095.218c.862-.054 1.391-.113 1.391-.173 0-.058-.479-.113-1.264-.165zm-5.878 8.619c-2.952-.077-6.2-.124-7.846-.124-.676 0-1.226.209-1.226.466 0 .256.55.465 1.226.465 1.735 0 5.237-.053 8.314-.137-.156-.22-.313-.445-.468-.67m1.402 1.905c-2.654-.09-6.254-.148-7.876-.148-.532 0-.965.164-.965.367 0 .2.433.364.965.364 1.702 0 5.575-.062 8.245-.161a13.13 13.13 0 0 1-.37-.422m-6.253 1.638c0 .142.246.262.547.262 1.554 0 6.286-.12 6.286-.262 0-.143-4.73-.258-6.286-.258-.301 0-.547.115-.547.258m-2.798-6.218c.028-.13.087-.274.205-.43-.017.02-.024.039-.006.007.106-.183.244-.41.419-.671-.814-.009-1.53-.014-2.093-.014-.808 0-1.465.25-1.465.558 0 .309.657.558 1.465.558.415 0 .915-.003 1.475-.008m1.2 1.748c-.198-.193-.862-.957-.943-1.03-.483-.003-.918-.006-1.28-.006-.762 0-1.378.234-1.378.527 0 .288.616.525 1.378.525.587 0 1.348-.007 2.223-.016m-.105-3.532c.243-.327.517-.692.839-1.084-1.427-.019-2.678-.03-3.556-.03-.827 0-1.495.254-1.495.567 0 .313.668.568 1.495.568.698 0 1.644-.007 2.717-.02m-2.57-1.771c.97 0 2.404-.015 4.025-.039.298-.327.607-.67.949-1.023a298.993 298.993 0 0 0-4.974-.052c-.808 0-1.465.246-1.465.556 0 .31.657.558 1.465.558Z" fill="#5C0D34" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="#00C300" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M6.9044 17.2866a6.0512 6.0512 0 01-3.7595-1.3008c1.2048-2.7146 3.6545-6.3581 6.998-9.9166a6.0702 6.0702 0 012.2617 7.729c-1.0599-.49-2.0497-1.106-2.8876-1.8798l1.8307 3.4375a6.0582 6.0582 0 01-4.4433 1.9307M.8292 11.2115a6.0752 6.0752 0 016.0762-6.0772c.8998 0 1.7527.196 2.5226.546-3.2935 2.9095-5.8432 6.293-7.353 9.2177a6.0512 6.0512 0 01-1.2458-3.6875m12.3403 2.9126a6.862 6.862 0 00.6419-2.9126c0-2.3997-1.2248-4.5144-3.0846-5.7532a49.6072 49.6072 0 013.5825-3.3416A31.1727 31.1727 0 0010.11 5.0903a6.907 6.907 0 00-8.4368 10.6265C.3493 18.5795.1193 20.8781 1.285 21.654c1.2489.832 3.9625-.6769 5.5903-3.1345 0 0-2.5177 2.2736-3.9015 1.7517-.8519-.322-.8549-1.6248-.152-3.4925a6.871 6.871 0 004.0835 1.3378c1.8937 0 3.6065-.7599 4.8533-1.9917l.245.462c3.0095-.245 11.9963-.483 11.9963-.483 0-.431-5.9502-.04-10.8325-1.9797" fill="#1D439C" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M11.0673 11.296c0-.8153-.5311-1.4329-1.6304-1.4329h-2.211v4.2614h1.0375v-3.335H9.437c.4323 0 .5928.247.5928.5311 0 .2965-.1605.5312-.5928.5312H8.4363l1.4329 2.2727h1.1858s-.9758-1.5316-.9635-1.5316c.5929-.1359.9758-.5558.9758-1.297M5.4966 9.8631h1.0376v4.2614H5.4966Zm-3.3227 0L0 14.137h1.1734l.3459-.7164h1.754l-.4324-.9017h-.877l.6424-1.3093h.0123l1.4575 2.9274h1.1982L3.1003 9.863Zm12.6854 2.0504c.3335-.1852.5065-.4693.5065-.9017 0-.6917-.5188-1.1487-1.3711-1.1487h-2.4333v4.2614h2.5198c.877 0 1.4575-.4693 1.4575-1.1981.0123-.494-.2718-.8646-.6794-1.0129m-2.2604-1.1487h1.3835c.21 0 .3705.1606.3705.3706s-.1606.3705-.3705.3705h-1.3835zm1.4205 2.4704H12.599v-.8646h1.4205c.247 0 .4447.1852.4447.4323 0 .247-.1977.4323-.4447.4323m4.8049-.9882c0 .6423-.2964 1.0005-.8893 1.0005-.5806 0-.877-.3582-.877-1.0005V9.8631h-1.0623v2.3098c0 1.3217.6917 2.0504 1.9516 2.0504 1.26 0 1.9516-.7287 1.9516-2.0504V9.8631h-1.0623v2.384zm3.8414-.6793c-.9881-.2347-1.1981-.2594-1.1981-.5435 0-.2223.247-.3211.667-.3211.5558 0 1.1364.1358 1.4699.3458l.3335-.8646c-.4447-.247-1.0623-.4076-1.8034-.4076-1.0993 0-1.717.5434-1.717 1.2846 0 .7905.4571 1.1116 1.5194 1.334.8276.1852 1.0005.2964 1.0005.531 0 .2471-.2224.3583-.6794.3583-.6546 0-1.2352-.1606-1.7045-.42l-.3212.914c.5188.2718 1.2846.4447 2.0504.4447 1.0746 0 1.717-.494 1.717-1.334.0123-.6793-.42-1.1116-1.334-1.3216" fill="#00205B" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="m7.623 6.719-4.752.959a.65.65 0 0 0-.44.324L.083 12.248a.65.65 0 0 0 .045.701l2.986 4.076a.66.66 0 0 0 .657.256l4.736-.957a.65.65 0 0 0 .363-.215h11.694a.542.542 0 0 0 0-1.084h-2.95a.53.53 0 0 1-.394-.152.545.545 0 0 1 0-.78.55.55 0 0 1 .394-.152h5.875a.53.53 0 0 0 .512-.33v-.422a.53.53 0 0 0-.512-.33h-9.79a.547.547 0 0 1-.544-.543.54.54 0 0 1 .543-.54h5.85a.544.544 0 0 0 .525-.542.54.54 0 0 0-.525-.543H15.68a.54.54 0 1 1 0-1.082h5.86a.546.546 0 0 0 .524-.543.54.54 0 0 0-.525-.54H9.416L8.279 6.972a.65.65 0 0 0-.656-.254M7.576 7.77a.527.527 0 0 1 .207.715l-1.451 2.631a.88.88 0 0 0 .059.945L8.1 14.39a.528.528 0 0 1-.854.623l-1.709-2.326a.88.88 0 0 0-.88-.344l-2.897.586a.523.523 0 0 1-.621-.412.525.525 0 0 1 .41-.621l3.14-.635a.9.9 0 0 0 .596-.438l1.576-2.845a.524.524 0 0 1 .715-.206m13.608 2.92a.54.54 0 1 0-.001 1.082.54.54 0 0 0 0-1.082" fill="#1BBAE0" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M18.324 9.137l1.559 1.56h2.556v2.557L24 14.814V9.137zM2 9.52l-2 4.96h1.309l.37-.982H3.9l.408.982h1.338L3.432 9.52zm4.209 0v4.955h1.238v-3.092l1.338 1.562h.188l1.338-1.556v3.091h1.238V9.52H10.47l-1.592 1.845L7.287 9.52zm6.283 0v4.96h2.057c1.979 0 2.88-1.046 2.88-2.472 0-1.36-.937-2.488-2.747-2.488zm1.237.91h.792c1.17 0 1.63.711 1.63 1.57 0 .728-.372 1.572-1.616 1.572h-.806zm-10.985.273l.791 1.932H2.008zm17.137.307l-1.604 1.603v2.25h2.246l1.604-1.607h-2.246z" fill="#ED1C24" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M20.42 7.345v9.18h1.651v-9.18zM0 7.475v1.737h1.737V7.474zm9.78.352v6.053c0 .513.044.945.13 1.292.087.34.235.618.44.828.203.21.475.359.803.451.334.093.754.136 1.255.136h.216v-1.533c-.24 0-.445-.012-.593-.037a.672.672 0 0 1-.39-.173.693.693 0 0 1-.173-.377 4.002 4.002 0 0 1-.037-.606v-2.182h1.193v-1.416h-1.193V7.827zm-3.505 2.312c-.396 0-.76.08-1.082.241-.327.161-.6.384-.822.668l-.087.117v-.902H2.658v6.256h1.639v-3.214c.018-.588.16-1.02.433-1.299.29-.297.642-.445 1.044-.445.476 0 .841.149 1.082.433.235.284.359.686.359 1.2v3.324h1.663V12.97c.006-.89-.229-1.595-.686-2.09-.458-.495-1.1-.742-1.917-.742zm10.065.006a3.252 3.252 0 0 0-2.306.946c-.29.29-.525.637-.692 1.033a3.145 3.145 0 0 0-.254 1.273c0 .452.08.878.241 1.274.161.395.39.742.674 1.032.284.29.637.526 1.045.693.408.173.86.26 1.342.26 1.397 0 2.262-.637 2.782-1.23l-1.187-.904c-.248.297-.841.699-1.583.699-.464 0-.847-.105-1.138-.321a1.588 1.588 0 0 1-.593-.872l-.019-.056h4.915v-.587c0-.451-.08-.872-.235-1.267a3.393 3.393 0 0 0-.661-1.033 3.013 3.013 0 0 0-1.02-.692 3.345 3.345 0 0 0-1.311-.248zm-16.297.118v6.256h1.651v-6.256zm16.278 1.286c1.132 0 1.664.797 1.664 1.255l-3.32.006c0-.458.525-1.255 1.656-1.261zm7.073 3.814a.606.606 0 0 0-.606.606.606.606 0 0 0 .606.606.606.606 0 0 0 .606-.606.606.606 0 0 0-.606-.606zm-.008.105a.5.5 0 0 1 .002 0 .5.5 0 0 1 .5.501.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .498-.5zm-.233.155v.699h.13v-.285h.093l.173.285h.136l-.18-.297a.191.191 0 0 0 .118-.056c.03-.03.05-.074.05-.136 0-.068-.02-.117-.063-.154-.037-.038-.105-.056-.185-.056zm.13.099h.154c.019 0 .037.006.056.012a.064.064 0 0 1 .037.031c.013.013.012.031.012.056a.124.124 0 0 1-.012.055.164.164 0 0 1-.037.031c-.019.006-.037.013-.056.013h-.154Z" fill="#0071C5" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z" fill="#76B900" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M17.61.455a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zM12.92.8C8.923.777 5.137 2.941 3.148 6.451a4.5 4.5 0 0 1 .26-.007 4.92 4.92 0 0 1 2.585.737A8.316 8.316 0 0 1 12.688 3.6 4.944 4.944 0 0 1 13.723.834 11.008 11.008 0 0 0 12.92.8zm9.226 4.994a4.915 4.915 0 0 1-1.918 2.246 8.36 8.36 0 0 1-.273 8.303 4.89 4.89 0 0 1 1.632 2.54 11.156 11.156 0 0 0 .559-13.089zM3.41 7.932A3.41 3.41 0 0 0 0 11.342a3.41 3.41 0 0 0 3.41 3.409 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zm2.027 7.866a4.908 4.908 0 0 1-2.915.358 11.1 11.1 0 0 0 7.991 6.698 11.234 11.234 0 0 0 2.422.249 4.879 4.879 0 0 1-.999-2.85 8.484 8.484 0 0 1-.836-.136 8.304 8.304 0 0 1-5.663-4.32zm11.405.928a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41z" fill="#E95420" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M23.682 2.406c-.001-.149-.097-.187-.24-.189h-.25v.659h.108v-.282h.102l.17.282h.122l-.184-.29c.102-.012.175-.065.172-.18zm-.382.096v-.193h.13c.06-.002.145.011.143.089.005.09-.08.107-.153.103h-.12zM21.851 1.49c1.172 1.171-2.077 6.319-2.626 6.869-.549.548-1.944.044-3.115-1.128-1.172-1.171-1.676-2.566-1.127-3.115.549-.55 5.697-3.798 6.868-2.626zM1.652 6.61C.626 4.818-.544 2.215.276 1.395c.81-.81 3.355.319 5.144 1.334A11.003 11.003 0 0 0 1.652 6.61zm18.95.418a10.584 10.584 0 0 1 1.368 5.218c0 5.874-4.762 10.636-10.637 10.636C5.459 22.882.697 18.12.697 12.246.697 6.371 5.459 1.61 11.333 1.61c1.771 0 3.441.433 4.909 1.199-.361.201-.69.398-.969.574-.428-.077-.778-.017-.998.202-.402.402-.269 1.245.263 2.2.273.539.701 1.124 1.25 1.674.103.104.208.202.315.297 1.519 1.446 3.205 2.111 3.829 1.486.267-.267.297-.728.132-1.287.167-.27.35-.584.538-.927zm2.814-5.088c-.322 0-.584.266-.584.595s.261.595.584.595c.323 0 .584-.266.584-.595s-.261-.595-.584-.595zm0 1.087c-.252 0-.457-.22-.457-.492s.204-.492.457-.492c.252 0 .457.22.457.492s-.204.492-.457.492z" fill="#AB2B28" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M0 21.653s3.154-.355 5.612-2.384c2.339-1.93 3.185-3.592 3.77-5.476.584-1.885.671-6.419.671-7.764V2.346H8.598v1.365c-.024 2.041-.2 5.918-1.135 8.444C5.203 18.242 0 18.775 0 18.775zm24 0s-3.154-.355-5.61-2.384c-2.342-1.93-3.187-3.592-3.772-5.476-.583-1.885-.671-6.419-.671-7.764V2.346H15.4l.001 1.365c.024 2.041.202 5.918 1.138 8.444 2.258 6.087 7.46 6.62 7.46 6.62zM10.659 2.348h2.685v19.306H10.66Z" fill="#E4202E" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M11.202.798C5.016.798 0 5.814 0 12s5.016 11.202 11.202 11.202c1.094 0 2.153-.157 3.154-.45v-5.335a6.27 6.27 0 1 1 0-10.839v-5.33c-1-.293-2.057-.45-3.154-.45Zm3.375 6.343v4.304h5.27L24 7.14Zm-.037 5.377v4.304h9.423l-4.156-4.304z" fill="#1E2A4E" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M8.5505 9.8881c.921 0 1.6574.2303 2.2209.7423.3848.3485.5999.8454.5939 1.3665a1.9081 1.9081 0 0 1-.5939 1.3726c-.5272.4848-1.3483.7423-2.221.7423-.8725 0-1.6785-.2575-2.2148-.7423-.3908-.3485-.609-.8484-.603-1.3726 0-.518.2182-1.015.603-1.3665.5-.4545 1.3847-.7423 2.2149-.7423zm.003 3.6692c.4606 0 .8878-.1606 1.1878-.4575.2999-.2999.4332-.6605.4332-1.1029 0-.4242-.1484-.821-.4333-1.1029-.2938-.2908-.7332-.4545-1.1877-.4545s-.8938.1637-1.1907.4545c-.2848.2818-.4333.6787-.4333 1.103-.006.409.1485.806.4333 1.1029.2969.2939.7332.4575 1.1907.4575zm-4.8418-1.9665c.1605.0424.315.094.4666.1636a1.352 1.352 0 0 1 .3787.2576c.197.206.309.4817.306.7665a.9643.9643 0 0 1-.3787.7788 2.0662 2.0662 0 0 1-.709.3485 3.7231 3.7231 0 0 1-1.1938.1697c-.352 0-.5467-.0406-.8138-.0962l-.077-.016c-.294-.0666-.5817-.1575-.8575-.2787a.0695.0695 0 0 0-.0424-.0121c-.0454 0-.0818.0394-.0818.0848v.203H.1212v-1.4786h.5242a.7559.7559 0 0 0 .1363.418c.2121.2607.4394.3607.6575.4395.3666.1212.7514.1848 1.1362.1969.5526 0 .8756-.134.9455-.163l.009-.0037.0062-.0023c.0616-.0226.3119-.1143.3119-.3916 0-.2743-.2338-.334-.387-.373l-.022-.0058c-.1708-.046-.562-.0872-.9897-.1323l-.1526-.016c-.4848-.0515-.9696-.1273-1.1968-.1758-.4977-.1097-.6942-.2917-.816-.4045l-.0082-.0076A1.0192 1.0192 0 0 1 0 11.1608c0-.497.3394-.797.7575-.9817.4454-.2.9756-.288 1.4392-.288.8211.0031 1.4877.2697 1.727.394.097.0515.1455-.0121.1455-.0606v-.1484h.5272v1.2876h-.4727a.9056.9056 0 0 0-.2939-.4909 1.289 1.289 0 0 0-.297-.1787c-.3968-.1667-.821-.2515-1.2513-.2455-.4423 0-.8665.085-1.0786.2153-.1333.0818-.2.1848-.2.306 0 .1727.1454.2424.2182.2636.1967.0597.6328.103.972.1369.0736.0073.1426.0142.2036.0206.3272.0334 1.012.1243 1.315.2zm18.1673-.9966v-.4787H24v.4696h-.4757c-.1727 0-.2424.0334-.3727.1788l-1.4271 1.63a.098.098 0 0 0-.0182.0698v.7423a1.106 1.106 0 0 0 .0121.103.1496.1496 0 0 0 .1.0909.9368.9368 0 0 0 .1303.009h.4848v.4698h-2.5724v-.4697h.4606a.9343.9343 0 0 0 .1302-.0091.1627.1627 0 0 0 .1031-.091.5626.5626 0 0 0 .009-.1v-.7422c0-.0242 0-.0242-.0333-.0636a606.7592 606.7592 0 0 0-1.4119-1.6028c-.0758-.0788-.2061-.2061-.406-.2061h-.4576v-.4696h2.5876v.4696h-.3121c-.0697 0-.1182.0697-.0576.1455 0 0 .8696 1.0392.8787 1.0513.0091.0122.0152.0122.0273.003.0121-.009.8938-1.0453.8999-1.0543a.0912.0912 0 0 0-.0182-.1273.1095.1095 0 0 0-.0606-.0182zm-6.284-.0031h.4848c.2212 0 .2606.0848.2636.2909l.0273 1.5664-2.5815-2.324H11.944v.4697h.412c.297 0 .3182.1636.3182.309v2.2138c.0004.1285.0009.295-.1818.295h-.506v.4667h2.1634v-.4697h-.5273c-.212 0-.2211-.097-.2242-.303v-1.8816l2.9724 2.6511h.7575l-.0394-2.9966c.003-.218.0182-.2908.2424-.2908h.4726v-.4697H15.595Z" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" fill="#635BFF" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M12 .863C5.34.863 0 6.251 0 12.98c0 .996.038 1.374.246 2.33l3.662 2.71.57 4.515h6.102l.326.227c.377.262.705.375 1.082.375.352 0 .732-.101 1.024-.313l.39-.289h6.094l.563-4.515 3.695-2.71c.208-.956.246-1.334.246-2.33C24 6.252 18.661.863 12 .863zm.996 2.258c.9 0 1.778.224 2.512.649l-2.465 12.548 3.42-12.062c1.059.36 1.863.941 2.508 1.814l.025.034-4.902 10.615 5.572-9.713.033.03c.758.708 1.247 1.567 1.492 2.648l-6.195 7.666 6.436-6.5.01.021c.253.563.417 1.36.417 1.996 0 .509-.024.712-.164 1.25l-3.554 2.602-.467 3.71h-4.475l-.517.395c-.199.158-.482.266-.682.266-.199 0-.483-.108-.682-.266l-.517-.394H6.322l-.445-3.61-3.627-2.666c-.11-.436-.16-.83-.16-1.261 0-.72.159-1.49.426-2.053l.013-.024 6.45 6.551L2.75 9.621c.25-1.063.874-2.09 1.64-2.713l5.542 9.776L4.979 6.1c.555-.814 1.45-1.455 2.546-1.827l3.424 12.069L8.355 3.816l.055-.03c.814-.45 1.598-.657 2.457-.657.195 0 .286.004.528.03l.587 13.05.46-13.059c.224-.025.309-.029.554-.029z" fill="#FFD500" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M24 16.375a3.05 3.05 0 0 1-.246 1.231 3.114 3.114 0 0 1-1.672 1.66 3.068 3.068 0 0 1-1.225.247 3.695 3.695 0 0 1-.71-.073 4.05 4.05 0 0 1-.739-.218 3.184 3.184 0 0 1-.676-.37 2.02 2.02 0 0 1-.507-.515.46.46 0 0 1-.08-.275.442.442 0 0 1 .152-.346.504.504 0 0 1 .346-.138.553.553 0 0 1 .201.04.392.392 0 0 1 .186.17.046.046 0 0 0 .016.032l.064.065a1.806 1.806 0 0 0 .798.507 3.052 3.052 0 0 0 .943.154 2.12 2.12 0 0 0 .846-.17 2.189 2.189 0 0 0 1.16-1.16 2.115 2.115 0 0 0 .176-.841v-1.109a3.132 3.132 0 0 1-.985.637 3.089 3.089 0 0 1-1.193.234 3.046 3.046 0 0 1-1.231-.246 3.137 3.137 0 0 1-1.66-1.66 3.04 3.04 0 0 1-.247-1.232v-2.544a3.058 3.058 0 0 1 .247-1.225 3.154 3.154 0 0 1 .668-1 3.202 3.202 0 0 1 .986-.669 3.15 3.15 0 0 1 2.463 0 3.09 3.09 0 0 1 1.668 1.668 3.066 3.066 0 0 1 .246 1.225v5.92zm-.967-5.92a2.118 2.118 0 0 0-.17-.846 2.189 2.189 0 0 0-1.16-1.16 2.201 2.201 0 0 0-1.692 0 2.191 2.191 0 0 0-1.166 1.16 2.134 2.134 0 0 0-.168.845v2.531a2.133 2.133 0 0 0 .168.853 2.194 2.194 0 0 0 .468.693 2.171 2.171 0 0 0 .694.467 2.201 2.201 0 0 0 1.692 0 2.189 2.189 0 0 0 1.16-1.16 2.117 2.117 0 0 0 .174-.853zm-7.252 5.356a.435.435 0 0 1-.154.363.511.511 0 0 1-.66 0 .434.434 0 0 1-.153-.363v-5.356a2.118 2.118 0 0 0-.17-.846 2.189 2.189 0 0 0-1.16-1.16 2.201 2.201 0 0 0-1.692 0 2.19 2.19 0 0 0-1.16 1.16 2.127 2.127 0 0 0-.17.846v5.356a.434.434 0 0 1-.152.363.511.511 0 0 1-.661 0 .434.434 0 0 1-.153-.363v-5.356a3.058 3.058 0 0 1 .246-1.225 3.163 3.163 0 0 1 .67-1 3.202 3.202 0 0 1 .984-.669 3.15 3.15 0 0 1 2.464 0 3.091 3.091 0 0 1 1.667 1.668 3.066 3.066 0 0 1 .247 1.225zm-8.383 0a.435.435 0 0 1-.152.363.511.511 0 0 1-.662 0 .434.434 0 0 1-.152-.363V7.956a.435.435 0 0 1 .152-.363.512.512 0 0 1 .662 0 .436.436 0 0 1 .152.363zM4.982 8.44a.463.463 0 0 1-.145.338.483.483 0 0 1-.355.142.503.503 0 0 1-.339-.145l-.016-.017a.149.149 0 0 0-.032-.024.123.123 0 0 1-.033-.025 1.9 1.9 0 0 0-1.24-.43q-.871 0-1.363.595-.491.596-.492 1.693v5.243a.435.435 0 0 1-.153.363.525.525 0 0 1-.33.123.525.525 0 0 1-.33-.123.434.434 0 0 1-.153-.363v-5.243A4.362 4.362 0 0 1 .18 9.303a3.034 3.034 0 0 1 .53-1.031 2.546 2.546 0 0 1 .878-.706 2.763 2.763 0 0 1 1.231-.257 3.08 3.08 0 0 1 1.065.209 2.573 2.573 0 0 1 .934.58.48.48 0 0 1 .163.343zm2.76-3.128a.826.826 0 0 1-.826.827.826.826 0 0 1-.827-.827.826.826 0 0 1 .827-.826.826.826 0 0 1 .826.826Z" fill="#1C9AD6" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M12.0011 0A12 12 0 1 0 24 11.9989 12.0114 12.0114 0 0 0 12.0012 0m0 2.4639a9.53 9.53 0 0 1 9.5134 8.8891 9.53 9.53 0 0 1-.8622 4.6487H3.349a9.53 9.53 0 0 1 .6162-9.14 9.53 9.53 0 0 1 8.036-4.398" fill="#DA291C" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z" fill="#BC52EE" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="#00C300" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M0 0h24v24H0V0Zm3.43 20.572h17.143v-3.429H3.43v3.429Z" fill="#FF7900" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
        <svg viewBox="-4 -4 32 32" width="220" height="220" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${angle}) translate(-12, -12)`}>
            <path d="M23.904 10.788V9.522h-4.656c-.972 0-1.41.6-1.482 1.182v.018-1.2h-1.368v1.266h1.362zm-6.144.456l-1.368-.078v1.458c0 .456-.228.594-1.02.594H14.28c-.654 0-.93-.186-.93-.594v-1.596l-1.386-.102v1.812h-.03c-.078-.528-.276-1.14-1.596-1.23L6 11.22c0 .666.474 1.062 1.218 1.14l3.024.306c.24.018.414.09.414.288 0 .216-.18.24-.456.24H5.946V11.22l-1.386-.09v3.348h5.646c1.26 0 1.662-.654 1.722-1.2h.03c.156.864.912 1.2 2.19 1.2h1.41c1.494 0 2.202-.456 2.202-1.524zm4.398.258l-4.338-.258c0 .666.438 1.11 1.182 1.17l3.09.24c.24.018.384.078.384.276 0 .186-.168.258-.516.258h-4.212v1.29h4.302c1.356 0 1.95-.474 1.95-1.554 0-.972-.534-1.338-1.842-1.422zm-10.194-1.98h1.386v1.266h-1.386zM3.798 11.07l-1.506-.15L0 14.478h1.686zm7.914-1.548h-4.23c-.984 0-1.416.612-1.518 1.2v-1.2H3.618c-.33 0-.486.102-.642.33l-.648.936h9.384Z" fill="#000000" />
          </g>
          {showOfficial && (
            <>
              <line x1="-2" y1="12" x2="26" y2="12" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="-2" x2="12" y2="26" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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

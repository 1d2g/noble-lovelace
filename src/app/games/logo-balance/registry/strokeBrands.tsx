import React from 'react';
import { BrandModel } from './types';
import { getParamVal, SpecGuideLine, SpecGuideCircle } from './helpers';

export const STROKE_BRANDS: BrandModel[] = [
  {
    id: 'target-bullseye',
    name: 'Target Bullseye',
    archetypeId: 'stroke-ratio',
    prompt: 'Adjust the negative white ring width to match the official 1:1:1 optical stroke ratio.',
    insight: 'The Target mark uses an exact 1:1:1 ratio: outer red ring thickness, middle white space, and inner red disc are all identical in width (33.3% each).',
    parameters: [
      { id: 'strokeRatio', label: 'White Ring Band Width', min: 10, max: 60, step: 1, targetValue: 33, tolerance: 15, unit: '%' }
    ],
    render: (values, showOfficial) => {
      const strokePct = getParamVal(values, showOfficial, 'strokeRatio', 33);
      const innerRadius = 90 * (1 - (strokePct / 100)) * 0.5;
      const whiteOuterRadius = innerRadius + (90 * (strokePct / 100));
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="90" fill="#CC0000" />
          <circle cx="0" cy="0" r={Math.min(88, whiteOuterRadius)} fill="#FFFFFF" />
          <circle cx="0" cy="0" r={Math.max(10, innerRadius)} fill="#CC0000" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="60" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'cbs-eyemark',
    name: 'CBS Eyemark',
    archetypeId: 'stroke-ratio',
    prompt: 'Adjust the outer pupil border stroke thickness relative to the inner center iris.',
    insight: 'Designed by William Golden in 1951, the CBS eye balances a solid circular pupil centered inside an almond-shaped contour with an exact 16px border stroke.',
    parameters: [
      { id: 'strokeThickness', label: 'Eyelid Outline Stroke Width', min: 6, max: 32, step: 0.5, targetValue: 16, tolerance: 6, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeThickness', 16);
      return (
        <svg viewBox="-120 -80 240 160" width="240" height="160">
          <path d="M -105 0 C -60 -65 60 -65 105 0 C 60 65 -60 65 -105 0 Z" fill="none" stroke="#000000" strokeWidth={strokeW} strokeLinejoin="round" />
          <circle cx="0" cy="0" r="38" fill="#000000" />
          {showOfficial && (
            <path d="M -105 0 C -60 -65 60 -65 105 0 C 60 65 -60 65 -105 0 Z" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'airbnb-belo',
    name: 'Airbnb Bélo Loop',
    archetypeId: 'stroke-ratio',
    prompt: 'Adjust the continuous monoline stroke weight of the paperclip Bélo outline.',
    insight: 'DesignStudio created the Bélo in 2014 combining four symbols: People, Place, Love, and Airbnb with a unified 14px continuous monoline stroke weight.',
    parameters: [
      { id: 'strokeWeight', label: 'Continuous Monoline Stroke Weight', min: 6, max: 28, step: 0.5, targetValue: 14, tolerance: 5, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeWeight', 14);
      return (
        <svg viewBox="-90 -110 180 220" width="200" height="240">
          <path d="M 0 -85 C 28 -85 52 -55 52 -20 C 52 28 28 65 0 92 C -28 65 -52 28 -52 -20 C -52 -55 -28 -85 0 -85 Z M 0 15 C 14 15 22 2 22 -14 C 22 -30 12 -42 0 -42 C -12 -42 -22 -30 -22 -14 C -22 2 -14 15 0 15 Z" fill="none" stroke="#FF5A5F" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round" />
          {showOfficial && (
            <path d="M 0 -85 C 28 -85 52 -55 52 -20 C 52 28 28 65 0 92 C -28 65 -52 28 -52 -20 C -52 -55 -28 -85 0 -85 Z" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'dominos-tiles',
    name: 'Domino’s Pizza Dots',
    archetypeId: 'stroke-ratio',
    prompt: 'Adjust the white dot diameter ratio relative to the domino square tiles.',
    insight: 'The dots represent the original 3 stores from 1965, with white dot diameters calibrated to exactly 28px relative to the red and blue domino squares.',
    parameters: [
      { id: 'dotDiameter', label: 'White Pip Dot Diameter', min: 12, max: 48, step: 1, targetValue: 28, tolerance: 8, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const dotDiam = getParamVal(values, showOfficial, 'dotDiameter', 28);
      const dotR = dotDiam / 2;
      return (
        <svg viewBox="-120 -100 240 200" width="240" height="200">
          <rect x="-45" y="-85" width="90" height="85" rx="10" fill="#E31837" transform="rotate(-15)" />
          <g transform="rotate(-15)"><circle cx="0" cy="-42" r={dotR} fill="#FFFFFF" /></g>
          <rect x="-45" y="5" width="90" height="85" rx="10" fill="#006491" transform="rotate(-15)" />
          <g transform="rotate(-15)">
            <circle cx="-20" cy="30" r={dotR} fill="#FFFFFF" />
            <circle cx="20" cy="65" r={dotR} fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <g transform="rotate(-15)"><SpecGuideCircle cx="0" cy="-42" r={14} /></g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'att-globe',
    name: 'AT&T 12-Stripe Globe',
    archetypeId: 'stroke-ratio',
    prompt: 'Adjust the horizontal negative space stripe cuts carving out the spherical globe illusion.',
    insight: 'Saul Bass’s 1983 12-stripe globe uses tapering negative cuts to convey a three-dimensional sphere. The central equator stripe cut is calibrated at 10px.',
    parameters: [
      { id: 'stripeCut', label: 'Equatorial Negative Stripe Cut', min: 4, max: 20, step: 0.5, targetValue: 10, tolerance: 4, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const cut = getParamVal(values, showOfficial, 'stripeCut', 10);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <defs><clipPath id="attGlobeClip"><circle cx="0" cy="0" r="82" /></clipPath></defs>
          <circle cx="0" cy="0" r="82" fill="#00A8E0" />
          <g clipPath="url(#attGlobeClip)" fill="#FFFFFF">
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
  },
  {
    id: 'beats-by-dre-b',
    name: 'Beats by Dre Inner Disc',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Beats by Dre Inner Disc mark.',
    insight: 'Robert Brunner placed the lowercase b inside a red circle to evoke an over-ear headphone driver.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#E01F3D" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#E01F3D" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'pinterest-p-pin',
    name: 'Pinterest Monoline Script P',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Pinterest Monoline Script P mark.',
    insight: 'Michael Deal styled the letter P as a circular seam pin tacking visual ideas onto boards.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#E60023" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#E60023" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'vodafone-speechmark',
    name: 'Vodafone Teardrop Speechmark',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Vodafone Teardrop Speechmark mark.',
    insight: 'Brand Union created the circular red roundel housing a white speechmark conveying human conversation.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#E60000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#E60000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'hulu-monoline-h',
    name: 'Hulu Monoline Lowercase H',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Hulu Monoline Lowercase H mark.',
    insight: 'The monoline neon green h curves with clean uniform tube stroke weight.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#1CE783" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#1CE783" />
          <circle cx="0" cy="0" r="18" fill="#0B0C0D" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'warner-bros-shield',
    name: 'Warner Bros Concentric Shield',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Warner Bros Concentric Shield mark.',
    insight: 'Pentagram refined the historic WB shield with calibrated concentric blue and gold border strokes.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#004DB3" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#004DB3" />
          <circle cx="0" cy="0" r="18" fill="#FFCC00" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'general-electric-medallion',
    name: 'General Electric Script Medallion',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the General Electric Script Medallion mark.',
    insight: 'The ornate Art Nouveau script monogram has been enclosed in four concentric perimeter nodes since 1898.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#005CA9" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#005CA9" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'sony-trinitron-bands',
    name: 'Sony Precision Typography Bands',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Sony Precision Typography Bands mark.',
    insight: 'Norio Ohga perfected the Clarendon-derived letterforms with razor-thin serif stroke transitions.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#000000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#000000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'panasonic-horizontal-ratio',
    name: 'Panasonic Balanced Letter Stroke',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Panasonic Balanced Letter Stroke mark.',
    insight: 'The bold sans-serif lettering maintains an exact 1.8:1 vertical-to-horizontal stroke weight ratio.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#004098" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#004098" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'canon-calligraphic-c',
    name: 'Canon Inward Incline C',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Canon Inward Incline C mark.',
    insight: 'Derived from the Buddhist goddess of mercy Kwanon, formalized in 1956 with sharp calligraphic stroke tips.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#CC0000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#CC0000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nikon-sequential-rays',
    name: 'Nikon Progressive Ray Bands',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Nikon Progressive Ray Bands mark.',
    insight: 'The yellow sequential ray bars expand progressively from top-left to bottom-right representing optics.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#FFE600" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#FFE600" />
          <circle cx="0" cy="0" r="18" fill="#000000" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'leica-red-dot',
    name: 'Leica Red Dot Roundel',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Leica Red Dot Roundel mark.',
    insight: 'Ernst Leitz’s cursive signature is framed inside an iconic red enamel circle.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#E2001A" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#E2001A" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'olympus-underline-gold',
    name: 'Olympus Gold Optical Underline',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Olympus Gold Optical Underline mark.',
    insight: 'The yellow optical bar beneath the blue wordmark symbolizes high-precision camera sensor light.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#002B49" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#002B49" />
          <circle cx="0" cy="0" r="18" fill="#E5A823" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'carl-zeiss-lens-arc',
    name: 'Carl Zeiss Optical Lens Contour',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Carl Zeiss Optical Lens Contour mark.',
    insight: 'The lens outline follows the exact glass curvature formula of Zeiss Abbe optical glass.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#003399" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#003399" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'bose-italic-angles',
    name: 'Bose Acoustic Wave Stroke',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Bose Acoustic Wave Stroke mark.',
    insight: 'Amar Bose designed the custom slanted letterforms with acoustic waveguide stroke proportions.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#000000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#000000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'bang-olufsen-bo',
    name: 'Bang & Olufsen Geometric Monogram',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Bang & Olufsen Geometric Monogram mark.',
    insight: 'Henning Dahl Mikkelsen created the geometric B&O monogram in 1932 using strict Bauhaus line weights.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#1A1A1A" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#1A1A1A" />
          <circle cx="0" cy="0" r="18" fill="#C0C0C0" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'sennheiser-flow-s',
    name: 'Sennheiser Monoline Flow S',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Sennheiser Monoline Flow S mark.',
    insight: 'The trapezoidal S monogram flows with uninterrupted monoline stroke thickness.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#0072CE" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#0072CE" />
          <circle cx="0" cy="0" r="18" fill="#000000" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'jbl-exclamation-roundel',
    name: 'JBL Sound Exclamation Disc',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the JBL Sound Exclamation Disc mark.',
    insight: 'James B. Lansing’s exclamation point is enclosed in an energetic orange circle.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#FF6600" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#FF6600" />
          <circle cx="0" cy="0" r="18" fill="#000000" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'pioneer-tuning-ohm',
    name: 'Pioneer Tuning Fork & Ohm',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Pioneer Tuning Fork & Ohm mark.',
    insight: 'Combines the electronic omega resistance symbol with a tuning fork inside a circular emblem.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#C8102E" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#C8102E" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'columbia-pictures-torch',
    name: 'Columbia Pictures Torch Halo',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Columbia Pictures Torch Halo mark.',
    insight: 'Concentric sunburst rays radiate from the Torch Lady’s beacon representing Hollywood golden age.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#002B49" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#002B49" />
          <circle cx="0" cy="0" r="18" fill="#FFCC00" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'universal-orbit-globe',
    name: 'Universal Studios Longitude Band',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Universal Studios Longitude Band mark.',
    insight: 'Equatorial ring bands orbit the Earth globe behind the iconic dimensional brass serif wordmark.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#00205B" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#00205B" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'dreamworks-fishing-moon',
    name: 'DreamWorks Crescent Moon Contour',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the DreamWorks Crescent Moon Contour mark.',
    insight: 'Robert Hunt painted his son fishing from a golden crescent moon with balanced sickle thickness.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#00205B" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#00205B" />
          <circle cx="0" cy="0" r="18" fill="#FFD700" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'pixar-luxo-lamp',
    name: 'Pixar Luxo Lamp Geometry',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Pixar Luxo Lamp Geometry mark.',
    insight: 'John Lasseter’s animated desk lamp replaces the letter I with articulated cantilever arm segments.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#1A1A1A" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#1A1A1A" />
          <circle cx="0" cy="0" r="18" fill="#0072CE" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'marvel-red-block',
    name: 'Marvel Bold White-on-Red Slab',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Marvel Bold White-on-Red Slab mark.',
    insight: 'The condensed sans-serif letters touch with exact zero-clearance letter kerning.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#ED1D24" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#ED1D24" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'dc-comics-peel',
    name: 'DC Comics Dual Layer Peel',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the DC Comics Dual Layer Peel mark.',
    insight: 'Landor created the peel logo in 2012 where a blue layer reveals the D over the C.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#0078F0" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#0078F0" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'hbo-circle-in-o',
    name: 'HBO Concentric Bulls-Eye O',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the HBO Concentric Bulls-Eye O mark.',
    insight: 'Gerard Huerta nested a solid black circle inside the counter of the letter O to evoke a camera lens.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#000000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#000000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'showtime-shw-circle',
    name: 'Showtime Red Spotlight Disc',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Showtime Red Spotlight Disc mark.',
    insight: 'The bold uppercase SHO is illuminated inside a crimson cinema spotlight circle.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#CC0000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#CC0000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'cnn-infinite-cable',
    name: 'CNN Dual-Line Coaxial Cable',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the CNN Dual-Line Coaxial Cable mark.',
    insight: 'Anthony Guy Bost designed the red ribbon in 1980 with a continuous unbreaking coaxial cable line.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#CC0000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#CC0000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'reuters-dot-matrix',
    name: 'Reuters 84-Dot Information Sphere',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Reuters 84-Dot Information Sphere mark.',
    insight: 'Designed in 1965 using an 84-dot matrix grid symbolizing telegraph teleprinter ticker tape.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#FF8000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#FF8000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'bloomberg-bold-grotesque',
    name: 'Bloomberg Geometric Monoline',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Bloomberg Geometric Monoline mark.',
    insight: 'A custom neo-grotesque typeface engineered for maximum terminal data readability on black screens.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#000000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#000000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'bell-system-telephone',
    name: 'Bell System Concentric Bell',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Bell System Concentric Bell mark.',
    insight: 'Saul Bass’s 1969 redesign placed a clean silhouette bell inside concentric blue circles.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#0072CE" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#0072CE" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'swisscom-breathing-life',
    name: 'Swisscom Moving Organism Ring',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Swisscom Moving Organism Ring mark.',
    insight: 'Moving Brands created the dynamic morphing 3D ring communicating living Swiss telecommunications.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#001E50" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#001E50" />
          <circle cx="0" cy="0" r="18" fill="#E30613" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'telekom-magenta-t',
    name: 'Deutsche Telekom Digit & Pips',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Deutsche Telekom Digit & Pips mark.',
    insight: 'The magenta T is flanked by four floating square pips symbolizing digital transmission packets.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#E20074" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#E20074" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 't-mobile-dots',
    name: 'T-Mobile Connected Grid Dots',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the T-Mobile Connected Grid Dots mark.',
    insight: 'Concentric square digital pips punctuate the global cellular wordmark.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#E20074" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#E20074" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'orange-square-block',
    name: 'Orange Minimalist Citrus Block',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Orange Minimalist Citrus Block mark.',
    insight: 'Wolff Olins designed the pure square orange block in 1994, eliminating tech jargon for lifestyle warmth.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#FF7900" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#FF7900" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'telefonica-five-dots',
    name: 'Telefónica Five-Point Ring',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Telefónica Five-Point Ring mark.',
    insight: 'Five blue circular dots arranged in a ring celebrate the company’s network topology.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#003245" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#003245" />
          <circle cx="0" cy="0" r="18" fill="#00A9E0" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'telstra-dynamic-t',
    name: 'Telstra Multi-Color Ribbon T',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Telstra Multi-Color Ribbon T mark.',
    insight: 'Interbrand created the fluid ribbon T curving dynamically across Australian telecommunications.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#004A99" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#004A99" />
          <circle cx="0" cy="0" r="18" fill="#FF6600" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nespresso-split-n',
    name: 'Nespresso Dual Bean Monogram',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Nespresso Dual Bean Monogram mark.',
    insight: 'The letter N is formed by two mirrored mirror-image coffee bean parchment curves.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#9B6B43" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#9B6B43" />
          <circle cx="0" cy="0" r="18" fill="#1A1A1A" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'starbucks-double-ring',
    name: 'Starbucks Siren Twin Concentric Band',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Starbucks Siren Twin Concentric Band mark.',
    insight: 'Lippincott removed the outer text ring in 2011, letting the twin-tailed green siren breathe freely.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#00704A" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#00704A" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'dunkin-heavy-rounded',
    name: 'Dunkin’ Rounded Bubble Stroke',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Dunkin’ Rounded Bubble Stroke mark.',
    insight: 'The frankfurter typeface was plumped to mimic fresh rising donut dough.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#FF671F" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#FF671F" />
          <circle cx="0" cy="0" r="18" fill="#DA1884" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'tim-hortons-script-oval',
    name: 'Tim Hortons Heritage Script Oval',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Tim Hortons Heritage Script Oval mark.',
    insight: 'Miles Gilbert Tim Horton’s cursive hockey signature is framed inside an elliptical badge.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#C8102E" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#C8102E" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'krispy-kreme-bowtie',
    name: 'Krispy Kreme Neon Bowtie Contour',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Krispy Kreme Neon Bowtie Contour mark.',
    insight: 'The green neon bowtie contour has framed the glowing hot light sign since 1937.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#008542" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#008542" />
          <circle cx="0" cy="0" r="18" fill="#E31837" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'oreo-embossed-concentric',
    name: 'Oreo Dual Embossed Cookie Rings',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Oreo Dual Embossed Cookie Rings mark.',
    insight: 'William Turnier designed the concentric cookie circles and Lorraine cross pattern in 1952.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#1A1A1A" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#1A1A1A" />
          <circle cx="0" cy="0" r="18" fill="#0055A5" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'campbells-gold-medallion',
    name: 'Campbell’s Paris Exposition Medallion',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Campbell’s Paris Exposition Medallion mark.',
    insight: 'The gold medal won at the 1900 Paris Exposition has sat centered between red and white fields.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#C8102E" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#C8102E" />
          <circle cx="0" cy="0" r="18" fill="#C5A059" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'heinz-keystone-contour',
    name: 'Heinz Pennsylvania Keystone',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Heinz Pennsylvania Keystone mark.',
    insight: 'Derived from Pennsylvania’s nickname the Keystone State, framing the historic 57 varieties.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#C8102E" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#C8102E" />
          <circle cx="0" cy="0" r="18" fill="#006039" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'kelloggs-flowing-k',
    name: 'Kellogg’s Asymmetrical K-Stroke',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Kellogg’s Asymmetrical K-Stroke mark.',
    insight: 'Will Keith Kellogg signed every cereal box personally to guarantee authentic toasted corn flakes.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#D0103A" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#D0103A" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nestle-oak-nest',
    name: 'Nestlé Mother Bird & Fledglings',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Nestlé Mother Bird & Fledglings mark.',
    insight: 'Henri Nestlé adapted his German family coat of arms (Nestle means little nest) in 1868.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#005A9C" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#005A9C" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'unilever-25-icons',
    name: 'Unilever 25-Symbol U-Loop',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Unilever 25-Symbol U-Loop mark.',
    insight: 'Wolff Olins embedded 25 individual icons (sun, bee, bird, wave, tea leaf) into a single flowing U.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#1F36C7" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#1F36C7" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'procter-gamble-moon',
    name: 'P&G Heritage Moon & 13 Stars',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the P&G Heritage Moon & 13 Stars mark.',
    insight: 'Originally carved by wharf hands onto candle crates, refined into a crescent moon with 13 colonies.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#003CAE" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#003CAE" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'johnson-johnson-script',
    name: 'Johnson & Johnson Historic Monoline',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Johnson & Johnson Historic Monoline mark.',
    insight: 'Based on the handwriting of James Wood Johnson in 1887, symbolizing sterile surgical integrity.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#D51900" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#D51900" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'colgate-tri-color-smile',
    name: 'Colgate Red-and-White Smile Arc',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Colgate Red-and-White Smile Arc mark.',
    insight: 'The dynamic white curved brushstroke beneath the wordmark reinforces dental enamel care.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#E31B23" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#E31B23" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'palmolive-palm-olive',
    name: 'Palmolive Dual Oil Concentric Rings',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Palmolive Dual Oil Concentric Rings mark.',
    insight: 'The palm tree and olive branch circles honor the two natural oils used in the soap since 1898.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#00563F" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#00563F" />
          <circle cx="0" cy="0" r="18" fill="#FDB913" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'loreal-expanded-o',
    name: 'L’Oréal Elevated Capital O',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the L’Oréal Elevated Capital O mark.',
    insight: 'The letter O is slightly enlarged relative to adjacent letters to create an optical focal jewel.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#000000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#000000" />
          <circle cx="0" cy="0" r="18" fill="#C5A059" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nivea-blue-tin',
    name: 'Nivea Blue Tin Roundel',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Nivea Blue Tin Roundel mark.',
    insight: 'The Bauhaus blue tin circle with clean white geometric typography was introduced in 1925.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#003366" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#003366" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'dove-silhouetted-bird',
    name: 'Dove Golden Flying Silhouette',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Dove Golden Flying Silhouette mark.',
    insight: 'The minimalist dove bird silhouette in flight conveys pure gentle skin moisturization.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#002B49" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#002B49" />
          <circle cx="0" cy="0" r="18" fill="#C5A059" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'olay-cameo-profile',
    name: 'Olay Graceful Cameo Medallion',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Olay Graceful Cameo Medallion mark.',
    insight: 'Graham Wylie drew the classic woman’s profile cameo silhouette inside an oval brooch.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#1A1A1A" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#1A1A1A" />
          <circle cx="0" cy="0" r="18" fill="#C5A059" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'gillette-razor-slash',
    name: 'Gillette Precision Razor Slice',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Gillette Precision Razor Slice mark.',
    insight: 'The letters G and i are sliced with a 48-degree razor blade cut symbolizing close shaving.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#00205B" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#00205B" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'braun-raised-a',
    name: 'Braun Elevated Center A',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Braun Elevated Center A mark.',
    insight: 'Wolfgang Schmittel raised the center crossbar of the A in 1952 for Dieter Rams functionalism.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#000000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#000000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'fidelity-pyramid-rays',
    name: 'Fidelity Obelisk & Glory Rays',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Fidelity Obelisk & Glory Rays mark.',
    insight: 'The pyramid of integrity emits golden rays of long-term investment stewardship.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#008542" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#008542" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'prudential-rock-strata',
    name: 'Prudential Rock of Gibraltar Strata',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Prudential Rock of Gibraltar Strata mark.',
    insight: 'The stratified sedimentary lines of the Rock of Gibraltar convey unshakeable financial strength.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#003366" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#003366" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'vanguard-three-masted-ship',
    name: 'Vanguard HMS Ship Ribs',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Vanguard HMS Ship Ribs mark.',
    insight: 'John Bogle named the firm after Lord Nelson’s flagship HMS Vanguard from the Battle of the Nile.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#990000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#990000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'charles-schwab-square',
    name: 'Charles Schwab Dynamic Square',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Charles Schwab Dynamic Square mark.',
    insight: 'The bold turquoise square houses clean modern typography conveying accessible investing.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#00A3E0" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#00A3E0" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'blackrock-monolithic-b',
    name: 'BlackRock Solid Typography Block',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the BlackRock Solid Typography Block mark.',
    insight: 'The heavy neo-grotesque block typography reflects the world’s largest asset manager.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#000000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#000000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'state-street-clipper',
    name: 'State Street 1792 Clipper Ship',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the State Street 1792 Clipper Ship mark.',
    insight: 'The historic Boston maritime clipper ship conveys navigating global institutional capital.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#002D62" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#002D62" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'morgan-stanley-tri-facet',
    name: 'Morgan Stanley Clean Minimalist Slate',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Morgan Stanley Clean Minimalist Slate mark.',
    insight: 'The precision typography communicates white-shoe Wall Street underwriting discipline.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#002B49" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#002B49" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'goldman-sachs-square',
    name: 'Goldman Sachs Blue Square Frame',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Goldman Sachs Blue Square Frame mark.',
    insight: 'The historic sky-blue square container frames serif typography dating back to Marcus Goldman in 1869.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#003366" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#003366" />
          <circle cx="0" cy="0" r="18" fill="#7298B3" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'jpmorgan-octagon-bold',
    name: 'JPMorgan Corporate Line Weight',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the JPMorgan Corporate Line Weight mark.',
    insight: 'The bold serif wordmark pairs with the iconic Chase octagon following the 2000 mega-merger.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#002C6C" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#002C6C" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'citigroup-red-umbrella-arc',
    name: 'Citigroup Red Travel Arc',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Citigroup Red Travel Arc mark.',
    insight: 'Paula Scher sketched the Citi red umbrella arc on a napkin in five minutes during a 1998 meeting.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#003B70" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#003B70" />
          <circle cx="0" cy="0" r="18" fill="#ED1C24" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'hsbc-hexagonal-hourglass',
    name: 'HSBC Red Hexagon Hourglass',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the HSBC Red Hexagon Hourglass mark.',
    insight: 'Henry Steiner designed the red and white triangles in 1983 based on the bank’s historic house flag.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#DB0011" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#DB0011" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'barclays-spread-eagle',
    name: 'Barclays Spread Eagle Shield',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Barclays Spread Eagle Shield mark.',
    insight: 'The spread eagle emblem dates back to 1690 goldsmith banking on London’s Lombard Street.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#00AEEF" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#00AEEF" />
          <circle cx="0" cy="0" r="18" fill="#002D62" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'standard-chartered-helix',
    name: 'Standard Chartered Dual Helix Loop',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Standard Chartered Dual Helix Loop mark.',
    insight: 'The interlocking green and blue spiral bands symbolize international trade between East and West.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#00853F" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#00853F" />
          <circle cx="0" cy="0" r="18" fill="#0072CE" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'bnp-paribas-four-stars',
    name: 'BNP Paribas Soaring White Stars',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the BNP Paribas Soaring White Stars mark.',
    insight: 'Four dynamic white stars transform into a flying bird symbolizing European financial dynamism.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#00965E" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#00965E" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'santander-flame-circle',
    name: 'Santander Red Torch Flame',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Santander Red Torch Flame mark.',
    insight: 'The dynamic red flame inside the white circle symbolizes warmth, leadership, and prosperity.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#EC0000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#EC0000" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'bbva-digital-geometric',
    name: 'BBVA Ascending Letter Spacing',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the BBVA Ascending Letter Spacing mark.',
    insight: 'Landor redesigned the mark in 2019 with a raised letter A symbolizing digital banking ascension.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#004481" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#004481" />
          <circle cx="0" cy="0" r="18" fill="#1464A5" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'credit-suisse-sail',
    name: 'Credit Suisse Red-and-Blue Sail',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Credit Suisse Red-and-Blue Sail mark.',
    insight: 'The red and blue triangular sails honor Alfred Escher’s 1856 financing of Swiss railway tunnels.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#001E3C" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#001E3C" />
          <circle cx="0" cy="0" r="18" fill="#E30613" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ubs-three-keys',
    name: 'UBS Three Swiss Security Keys',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the UBS Three Swiss Security Keys mark.',
    insight: 'The three historic keys symbolize confidence, security, and discretion in Swiss private banking.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#000000" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#000000" />
          <circle cx="0" cy="0" r="18" fill="#CC0000" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ing-orange-lion',
    name: 'ING Royal Dutch Orange Lion',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the ING Royal Dutch Orange Lion mark.',
    insight: 'The proud Dutch national lion stands in vibrant national orange symbolizing financial independence.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#FF6200" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#FF6200" />
          <circle cx="0" cy="0" r="18" fill="#000066" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'rabobank-compass-walker',
    name: 'Rabobank Circular Compass Walker',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Rabobank Circular Compass Walker mark.',
    insight: 'The human figure holding a compass inside a blue circle conveys agricultural cooperative roots.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#FF6600" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#FF6600" />
          <circle cx="0" cy="0" r="18" fill="#000066" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'scotiabank-flying-globe',
    name: 'Scotiabank Fluted S-Globe',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Scotiabank Fluted S-Globe mark.',
    insight: 'The stylized S curves around the Earth globe reflecting Canadian international banking networks.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#EC111A" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#EC111A" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'rbc-shield-lion',
    name: 'RBC Lion & Northern Globe',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the RBC Lion & Northern Globe mark.',
    insight: 'The golden lion holding a shield atop the globe represents the Royal Bank of Canada.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#003399" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#003399" />
          <circle cx="0" cy="0" r="18" fill="#FFD200" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'td-green-shield',
    name: 'TD Bank Green Innovation Square',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the TD Bank Green Innovation Square mark.',
    insight: 'The bold green square houses interlocking T and D blocks symbolizing community retail banking.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#008A00" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#008A00" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'bmo-round-globe',
    name: 'BMO Blue Globe & Red M-Bar',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the BMO Blue Globe & Red M-Bar mark.',
    insight: 'The Bank of Montreal blue roundel is bisected by a vibrant red letter bar.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#0079C1" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#0079C1" />
          <circle cx="0" cy="0" r="18" fill="#ED1B2D" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'cibc-double-chevron',
    name: 'CIBC Dual Chevrons Arc',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the CIBC Dual Chevrons Arc mark.',
    insight: 'The two curved gold and burgundy chevrons convey modern Canadian commerce and wealth.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#8B2332" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#8B2332" />
          <circle cx="0" cy="0" r="18" fill="#F1B82D" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'anz-three-lotus-ribbons',
    name: 'ANZ Three-Ribbon Lotus',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the ANZ Three-Ribbon Lotus mark.',
    insight: 'M&C Saatchi designed the three blue petals representing Australia, New Zealand, and Asia.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#004165" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#004165" />
          <circle cx="0" cy="0" r="18" fill="#007DBA" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'commonwealth-bank-diamond',
    name: 'Commonwealth Bank Yellow Diamond',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Commonwealth Bank Yellow Diamond mark.',
    insight: 'Ken Cato created the yellow diamond in 1991 with a black corner cutout reflecting the Southern Cross.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#FFCC00" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#FFCC00" />
          <circle cx="0" cy="0" r="18" fill="#000000" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'westpac-w-ribbons',
    name: 'Westpac Dual Red Ribbons',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Westpac Dual Red Ribbons mark.',
    insight: 'The faceted red ribbons form the letter W representing Western Pacific commercial trade.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#DA1710" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#DA1710" />
          <circle cx="0" cy="0" r="18" fill="#A20000" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nab-red-star-wedge',
    name: 'NAB Red Performance Star',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the NAB Red Performance Star mark.',
    insight: 'The single red point star symbolizes Australian financial focus and navigation.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#C8102E" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#C8102E" />
          <circle cx="0" cy="0" r="18" fill="#000000" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'mitsubishi-ufj-red-circles',
    name: 'MUFG Dual Overlapping Red Discs',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the MUFG Dual Overlapping Red Discs mark.',
    insight: 'Two overlapping red circular discs represent the merger of Tokyo-Mitsubishi and UFJ.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#D71921" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#D71921" />
          <circle cx="0" cy="0" r="18" fill="#1A1A1A" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'sumitomo-mitsui-green-prism',
    name: 'SMBC Rising Sun Green Prism',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the SMBC Rising Sun Green Prism mark.',
    insight: 'The rising sun prism in dual shades of green conveys environmental sustainability in Tokyo.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#004A26" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#004A26" />
          <circle cx="0" cy="0" r="18" fill="#B7D437" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'mizuho-blue-arc-horizon',
    name: 'Mizuho Blue Horizon Arc',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Mizuho Blue Horizon Arc mark.',
    insight: 'The cosmic blue arc and red accent point symbolize the golden ears of fresh Japanese rice fields.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#002B66" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#002B66" />
          <circle cx="0" cy="0" r="18" fill="#E2001A" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nomura-monoline-roundel',
    name: 'Nomura Traditional Brush Roundel',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Nomura Traditional Brush Roundel mark.',
    insight: 'The historic Japanese merchant crest conveys integrity, trust, and global market securities.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#C8102E" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#C8102E" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'daiwa-two-stripes',
    name: 'Daiwa Twin Flying Chevrons',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Daiwa Twin Flying Chevrons mark.',
    insight: 'Two red chevrons slice dynamically through the blue corporate banking foundation.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#003366" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#003366" />
          <circle cx="0" cy="0" r="18" fill="#E60012" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ping-an-orange-square',
    name: 'Ping An Integrated Orange Shield',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Ping An Integrated Orange Shield mark.',
    insight: 'The warm orange Chinese wordmark communicates peace and health insurance security.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#EA5404" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#EA5404" />
          <circle cx="0" cy="0" r="18" fill="#008040" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'icbc-red-coin',
    name: 'ICBC Ancient Bronze Coin',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the ICBC Ancient Bronze Coin mark.',
    insight: 'The ancient Chinese round coin with a square center hole is stylized with the letters I, C, B, C.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#C8102E" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#C8102E" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'china-construction-bank-c',
    name: 'China Construction Bank Dual C',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the China Construction Bank Dual C mark.',
    insight: 'Two nested letters C represent the bank and customer building national infrastructure.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#004A99" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#004A99" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'agricultural-bank-ears',
    name: 'Agricultural Bank of China Wheat Coin',
    archetypeId: 'stroke-ratio',
    prompt: 'Calibrate the concentric stroke and negative space band ratio of the Agricultural Bank of China Wheat Coin mark.',
    insight: 'The green coin features stylized golden wheat sheaves symbolizing national agricultural prosperity.',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'Outer Band Stroke Thickness',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const strokeW = getParamVal(values, showOfficial, 'strokeRatio', 16);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="#008559" strokeWidth={strokeW} />
          <circle cx="0" cy="0" r="42" fill="#008559" />
          <circle cx="0" cy="0" r="18" fill="#F8FAFC" />
          {showOfficial && (
            <SpecGuideCircle cx="0" cy="0" r="82" />
          )}
        </svg>
      );
    }
  }
];

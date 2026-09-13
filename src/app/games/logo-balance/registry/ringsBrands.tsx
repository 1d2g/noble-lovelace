import React from 'react';
import { BrandModel } from './types';
import { getParamVal, SpecGuideLine } from './helpers';

export const RINGS_BRANDS: BrandModel[] = [
  {
    id: 'mastercard-spheres',
    name: 'Mastercard Spheres',
    archetypeId: 'intersecting-rings',
    prompt: 'Adjust the center-to-center distance of the red and yellow spheres to hit the golden overlap lens.',
    insight: 'Pentagram’s Mastercard geometry spaces the 200px diameter circles at 124px center-to-center, yielding an intersection width equal to 62% of a circle diameter (the golden ratio approximation).',
    parameters: [
      { id: 'overlapDistance', label: 'Sphere Center-to-Center Spacing', min: 60, max: 190, step: 1, targetValue: 124, tolerance: 25, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 124);
      const radius = 100;
      const x1 = -dist / 2;
      const x2 = dist / 2;
      return (
        <svg viewBox="-180 -120 360 240" width="280" height="180">
          <defs><clipPath id="mcLens"><circle cx={x1} cy="0" r={radius} /></clipPath></defs>
          <circle cx={x1} cy="0" r={radius} fill="#EB001B" />
          <circle cx={x2} cy="0" r={radius} fill="#F79E1B" />
          <circle cx={x2} cy="0" r={radius} fill="#FF5F00" clipPath="url(#mcLens)" />
          {showOfficial && (
            <>
              <SpecGuideLine x1={-62} y1="-105" x2={-62} y2="105" />
              <SpecGuideLine x1={62} y1="-105" x2={62} y2="105" />
            </>
          )}
        </svg>
      );
    }
  },
  {
    id: 'audi-rings',
    name: 'Audi Four Rings',
    archetypeId: 'intersecting-rings',
    prompt: 'Adjust the interlock spacing between the adjacent aluminum rings to hit the official 25% overlap standard.',
    insight: 'Audi’s four rings represent the 1932 Auto Union merger of Audi, DKW, Horch, and Wanderer. Each adjacent pair overlaps by exactly one-quarter of its diameter.',
    parameters: [
      { id: 'ringSpacing', label: 'Ring Center-to-Center Offset', min: 35, max: 85, step: 0.5, targetValue: 56, tolerance: 12, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const spacing = getParamVal(values, showOfficial, 'ringSpacing', 56);
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
            <g>
              <SpecGuideLine x1={-84} y1="-45" x2={-84} y2="45" />
              <SpecGuideLine x1={-28} y1="-45" x2={-28} y2="45" />
              <SpecGuideLine x1={28} y1="-45" x2={28} y2="45" />
              <SpecGuideLine x1={84} y1="-45" x2={84} y2="45" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'olympic-rings',
    name: 'Olympic Rings Alignment',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the horizontal centering offset of the two lower rings relative to the top three rings.',
    insight: 'Designed by Pierre de Coubertin in 1913, the five rings represent the five continents. The lower two rings sit precisely centered under the interspaces of the top three.',
    parameters: [
      { id: 'bottomOffset', label: 'Lower Rings Horizontal Centering', min: -30, max: 30, step: 1, targetValue: 0, tolerance: 12, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const offset = getParamVal(values, showOfficial, 'bottomOffset', 0);
      const r = 28;
      const strokeW = 5.5;
      return (
        <svg viewBox="-140 -65 280 130" width="280" height="130">
          <circle cx="-64" cy="-14" r={r} fill="none" stroke="#0085C7" strokeWidth={strokeW} />
          <circle cx="0" cy="-14" r={r} fill="none" stroke="#000000" strokeWidth={strokeW} />
          <circle cx="64" cy="-14" r={r} fill="none" stroke="#DF0024" strokeWidth={strokeW} />
          <circle cx={-32 + offset} cy="16" r={r} fill="none" stroke="#F4C300" strokeWidth={strokeW} />
          <circle cx={32 + offset} cy="16" r={r} fill="none" stroke="#009F3D" strokeWidth={strokeW} />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-32" y1="-30" x2="-32" y2="45" />
              <SpecGuideLine x1="32" y1="-30" x2="32" y2="45" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'chanel-cc',
    name: 'Chanel Interlocking CC',
    archetypeId: 'intersecting-rings',
    prompt: 'Adjust the horizontal overlap offset between the two back-to-back C letterforms.',
    insight: 'Coco Chanel’s interlocking Cs feature identical stroke widths and optical ellipse radii derived from stained glass at Aubazine Abbey, intersecting at a calibrated 44px overlap.',
    parameters: [
      { id: 'overlapOffset', label: 'Interlocking C Overlap Width', min: 20, max: 75, step: 1, targetValue: 44, tolerance: 15, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const overlap = getParamVal(values, showOfficial, 'overlapOffset', 44);
      const half = overlap / 2;
      return (
        <svg viewBox="-110 -80 220 160" width="240" height="175">
          <path d={`M ${-half + 34} -38 A 52 52 0 1 0 ${-half + 34} 38`} fill="none" stroke="#000000" strokeWidth="16" strokeLinecap="square" />
          <path d={`M ${half - 34} -38 A 52 52 0 1 1 ${half - 34} 38`} fill="none" stroke="#000000" strokeWidth="16" strokeLinecap="square" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1={-22} y1="-60" x2={-22} y2="60" />
              <SpecGuideLine x1={22} y1="-60" x2={22} y2="60" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'gucci-monogram',
    name: 'Gucci Interlocking G',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center overlap spacing of the opposing G monograms.',
    insight: 'Aldo Gucci’s 1933 monogram utilizes opposing inverted curves with an exact 40px horizontal overlap to achieve optical balance across leather goods.',
    parameters: [
      { id: 'overlapSpacing', label: 'Monogram Overlap Distance', min: 18, max: 68, step: 1, targetValue: 40, tolerance: 14, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const spacing = getParamVal(values, showOfficial, 'overlapSpacing', 40);
      const half = spacing / 2;
      return (
        <svg viewBox="-110 -80 220 160" width="240" height="175">
          <g transform={`translate(${-half}, 0)`}>
            <path d="M 28 -28 A 46 46 0 1 0 38 12 L 8 12" fill="none" stroke="#1A1A1A" strokeWidth="14" strokeLinecap="square" />
          </g>
          <g transform={`translate(${half}, 0) rotate(180)`}>
            <path d="M 28 -28 A 46 46 0 1 0 38 12 L 8 12" fill="none" stroke="#1A1A1A" strokeWidth="14" strokeLinecap="square" />
          </g>
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-20" y1="-55" x2="-20" y2="55" />
              <SpecGuideLine x1="20" y1="-55" x2="20" y2="55" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'under-armour-ua',
    name: 'Under Armour Interlocking UA',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Under Armour Interlocking UA mark.',
    insight: 'The interlocking U and inverted A symbolize athlete armor and relentless drive.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'dc-shoes-monogram',
    name: 'DC Shoes Interlocking Monogram',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the DC Shoes Interlocking Monogram mark.',
    insight: 'Ken Block and Damon Way interlocked the stylized D and C with a seven-point skate star.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'dolce-gabbana-dg',
    name: 'Dolce & Gabbana Interlocking DG',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Dolce & Gabbana Interlocking DG mark.',
    insight: 'The bold serif monogram interlocks the D and G in balanced Italian haute couture.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'louis-vuitton-lv',
    name: 'Louis Vuitton Interlocking LV',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Louis Vuitton Interlocking LV mark.',
    insight: 'Georges Vuitton designed the interlocking LV monogram in 1896 to honor his father.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#8B5A2B" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'givenchy-4g',
    name: 'Givenchy Four-G Quad Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Givenchy Four-G Quad Ring mark.',
    insight: 'Paul Rand stylized four Celtic G letterforms into a perfectly balanced square roundel in 1952.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'fendi-zucca-ff',
    name: 'Fendi Inverted Zucca FF',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Fendi Inverted Zucca FF mark.',
    insight: 'Karl Lagerfeld sketched the inverted Zucca FF monogram in five seconds in 1965 for Fun Furs.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'yves-saint-laurent-ysl',
    name: 'Yves Saint Laurent Monogram Weave',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Yves Saint Laurent Monogram Weave mark.',
    insight: 'Cassandre created the vertical interlocking YSL monogram in 1961, an icon of Parisian elegance.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'michael-kors-mk',
    name: 'Michael Kors MK Roundel Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Michael Kors MK Roundel Ring mark.',
    insight: 'The bold serif M and K interlock seamlessly inside a high-polish metallic medallion ring.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'tory-burch-t',
    name: 'Tory Burch Double-T Medallion',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Tory Burch Double-T Medallion mark.',
    insight: 'Inspired by Moroccan fretwork and interior designer David Hicks’s 1960s geometric wallpapers.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#003366" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'calvin-klein-ck',
    name: 'Calvin Klein CK Overlap',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Calvin Klein CK Overlap mark.',
    insight: 'Peter Saville modernized the minimalist overlap between the uppercase C and lowercase k.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'tommy-hilfiger-flag',
    name: 'Tommy Hilfiger Dual Block Overlap',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Tommy Hilfiger Dual Block Overlap mark.',
    insight: 'The red and white rectangular blocks overlap between navy blue bars like maritime flags.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#002B49" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C8102E" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'cartier-trinity',
    name: 'Cartier Trinity Interlocking Rings',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Cartier Trinity Interlocking Rings mark.',
    insight: 'Louis Cartier designed the three intertwined rings in 1924 symbolizing love, fidelity, and friendship.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#E0A899" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'tiffany-infinity',
    name: 'Tiffany & Co. Interlocking Loops',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Tiffany & Co. Interlocking Loops mark.',
    insight: 'The figure-eight infinity rings celebrate eternal connection in signature Tiffany Blue.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#81D8D0" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'van-cleef-alhambra',
    name: 'Van Cleef & Arpels Alhambra Clovers',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Van Cleef & Arpels Alhambra Clovers mark.',
    insight: 'Jacques Arpels created the four-leaf clover motif in 1968, edged with golden pearl beads.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'bulgari-serpenti',
    name: 'Bulgari Double Serpenti Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Bulgari Double Serpenti Ring mark.',
    insight: 'The ancient Roman snake talisman coils into dual geometric circular scales.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'rolex-coronet',
    name: 'Rolex Five-Point Coronet Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Rolex Five-Point Coronet Ring mark.',
    insight: 'Hans Wilsdorf chose the five-point crown to symbolize the five fingers of a master watchmaker.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#006039" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'chopard-classic',
    name: 'Chopard C-Monogram Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Chopard C-Monogram Ring mark.',
    insight: 'Louis-Ulysse Chopard engraved the interlocking initials onto pocket watch balance wheels in 1860.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'patek-philippe-calatrava',
    name: 'Patek Philippe Calatrava Cross',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Patek Philippe Calatrava Cross mark.',
    insight: 'The 12th-century Spanish chivalric order cross features four interlocking fleur-de-lis petals.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'audemars-piguet-ap',
    name: 'Audemars Piguet Interlocking AP',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Audemars Piguet Interlocking AP mark.',
    insight: 'The intertwined A and P celebrate the 1875 partnership of Jules Audemars and Edward Piguet.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'vacheron-maltese',
    name: 'Vacheron Constantin Maltese Cross',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Vacheron Constantin Maltese Cross mark.',
    insight: 'Inspired by the cross-shaped barrel cover designed to regulate mainspring tension in 1880.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'moncler-cock-rings',
    name: 'Moncler Interlocking Cockerel & M',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Moncler Interlocking Cockerel & M mark.',
    insight: 'The two overlapping French national roosters form the letter M inside a circular alpine crest.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#002B49" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C8102E" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'target-optical-circles',
    name: 'Target Optical Intersecting Lenses',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Target Optical Intersecting Lenses mark.',
    insight: 'Two overlapping optical spheres simulate bifocal lens prescription convergence.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#CC0000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'firefox-orbit',
    name: 'Firefox Orbital Planetary Rings',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Firefox Orbital Planetary Rings mark.',
    insight: 'Jon Hicks rendered the flaming fox encircling a glowing planetary sphere in 2004.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#FF7139" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#0060DF" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'maestro-spheres',
    name: 'Maestro Debit Overlap',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Maestro Debit Overlap mark.',
    insight: 'Mastercard’s debit sibling interlocks blue and red spheres with central purple convergence.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#00A2E8" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#EB001B" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'cirrus-banking',
    name: 'Cirrus ATM Spheres',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Cirrus ATM Spheres mark.',
    insight: 'Two shades of blue spheres overlap to represent global electronic interbank cash clearance.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#0072CE" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#00A3E0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'unionpay-cards',
    name: 'UnionPay Three-Card Overlap',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the UnionPay Three-Card Overlap mark.',
    insight: 'Three overlapping horizontal bank card shapes symbolize China’s unified financial network.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#D9272E" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#004A99" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'american-express-rings',
    name: 'American Express Centurion Rings',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the American Express Centurion Rings mark.',
    insight: 'Concentric engraved bank-note rings frame the Roman Centurion warrior profile.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#0070CE" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#002663" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'visa-gold-dove',
    name: 'Visa Classic Flag Notch',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Visa Classic Flag Notch mark.',
    insight: 'The gold corner flourish symbolizes the golden hills of California where BankAmericard was born.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1F71" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#F7B600" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'toyota-dual-heart',
    name: 'Toyota Dual Interlocking Rings',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Toyota Dual Interlocking Rings mark.',
    insight: 'The two inner perpendicular ellipses represent the mutually trusting hearts of driver and builder.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#EB0A1E" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#111111" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'infiniti-twin-curves',
    name: 'Infiniti Twin Ridge Overlap',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Infiniti Twin Ridge Overlap mark.',
    insight: 'Two metallic arcs converge toward an infinite apex inside an aerodynamic oval frame.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'opel-ring-bolt',
    name: 'Opel Ring & Bolt Interlock',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Opel Ring & Bolt Interlock mark.',
    insight: 'The horizontal lightning bolt interlocks with the outer chassis ring at two precision points.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#FFCC00" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'mercedes-laurel-ring',
    name: 'Mercedes Laurel Wreath Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Mercedes Laurel Wreath Ring mark.',
    insight: 'Benz & Cie’s historic laurel wreath interlocks around Daimler’s three-pointed star.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#002B49" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'subaru-cluster-rings',
    name: 'Subaru Twin Oval Frame',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Subaru Twin Oval Frame mark.',
    insight: 'The outer chrome oval ring frames the inner constellation star cluster.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#002C6C" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'lincoln-cross-ring',
    name: 'Lincoln Compass Ring Interlock',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Lincoln Compass Ring Interlock mark.',
    insight: 'The rectangular star tips intersect with the outer vertical oval frame.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'scania-crown-ring',
    name: 'Scania Hub Ring Interlock',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Scania Hub Ring Interlock mark.',
    insight: 'The circular truck wheel hub ring interlocks with the crowned mythical griffin head.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#002C6C" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C8102E" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'volkswagen-vw-rings',
    name: 'Volkswagen Stacked VW Roundel',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Volkswagen Stacked VW Roundel mark.',
    insight: 'Franz Reimspiess stacked the V and W inside a circular gear ring in 1937.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#001E50" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFFFFF" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'volvo-diagonal-ring',
    name: 'Volvo Sash & Ring Interlock',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Volvo Sash & Ring Interlock mark.',
    insight: 'The diagonal radiator grille mounting sash pierces through the center of the iron mark ring.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#003057" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'nissan-ring-crossbar',
    name: 'Nissan Ring & Bar Interlock',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Nissan Ring & Bar Interlock mark.',
    insight: 'The horizontal nameplate bar overlaps the circular sun ring at exactly 50% diameter height.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#C3002F" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'mazda-wing-ring',
    name: 'Mazda Flying Wings & Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Mazda Flying Wings & Ring mark.',
    insight: 'The curved seagull wingtips touch the inner boundary of the chrome oval frame.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1B1B1B" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'ford-oval-ring',
    name: 'Ford Blue Oval Chrome Border',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Ford Blue Oval Chrome Border mark.',
    insight: 'Childe Harold Wills’s famous Spencerian script is enclosed in an iconic chrome oval border.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#002C6C" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'hyundai-oval-tilt',
    name: 'Hyundai Oval & H-Bar Overlap',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Hyundai Oval & H-Bar Overlap mark.',
    insight: 'The tilted H touches the boundary of the metallic oval at two tangent contact points.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#002C6C" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'honda-ring-crest',
    name: 'Honda Trapeze & Shield Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Honda Trapeze & Shield Ring mark.',
    insight: 'The uppercase H rests suspended inside the curved rectangle border ring.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFFFFF" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'acura-caliper-ring',
    name: 'Acura Caliper & Oval Interlock',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Acura Caliper & Oval Interlock mark.',
    insight: 'The caliper points pinch inside the upper arc of the sleek automotive ellipse.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'lexus-ring-l',
    name: 'Lexus Ellipse & Incline L',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Lexus Ellipse & Incline L mark.',
    insight: 'The italicized chrome L terminates precisely at the perimeter of the horizontal ellipse.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'jaguar-leaper-ring',
    name: 'Jaguar Leaper & Medallion Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Jaguar Leaper & Medallion Ring mark.',
    insight: 'The leaping cat silhouette pounces horizontally across the circular steering wheel medallion.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#005A36" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'land-rover-oval-ring',
    name: 'Land Rover Green Oval Border',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Land Rover Green Oval Border mark.',
    insight: 'The twin hyphen marks on the green oval represent the motto Above and Beyond.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#005A36" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'jeep-seven-slot-ring',
    name: 'Jeep Willys Round Headlights',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Jeep Willys Round Headlights mark.',
    insight: 'Two circular headlights flank the iconic seven-slot vertical grille stamping.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#556B2F" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'ram-head-shield-ring',
    name: 'RAM Horns & Shield Frame',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the RAM Horns & Shield Frame mark.',
    insight: 'The curving bighorn ram horns interlock with the pentagonal truck shield.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#C8102E" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'dodge-twin-stripes',
    name: 'Dodge Twin Racing Stripes',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Dodge Twin Racing Stripes mark.',
    insight: 'Two aggressive diagonal red stripes slice parallel across vehicle grilles.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#D9272E" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'chrysler-wings-medallion',
    name: 'Chrysler Medallion & Wing Ribbons',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Chrysler Medallion & Wing Ribbons mark.',
    insight: 'The central blue wax seal medallion interlocks with the aerodynamic chrome flight wings.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#003366" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'cadillac-crest-frame',
    name: 'Cadillac Shield & Chrome Chevron',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Cadillac Shield & Chrome Chevron mark.',
    insight: 'The geometric Mondrian shield rests suspended inside the lower chrome chevron.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#003366" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'buick-tri-ring',
    name: 'Buick Three-Shield Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Buick Three-Shield Ring mark.',
    insight: 'The circular outer chrome bezel encloses three staggered heraldic shields.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#003366" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'chevrolet-ring-bowtie',
    name: 'Chevrolet Gold Bowtie & Chrome Bezel',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Chevrolet Gold Bowtie & Chrome Bezel mark.',
    insight: 'The gold metallic cross bowtie overlaps the perimeter of the front grille frame.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#CCA01A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'gmc-block-letters',
    name: 'GMC Industrial Block Rings',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the GMC Industrial Block Rings mark.',
    insight: 'The three bold chamfered letters overlap with heavy industrial visual weight.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#CC0000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'renault-dual-ribbon',
    name: 'Renault Interlocking Lozenge Ribbons',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Renault Interlocking Lozenge Ribbons mark.',
    insight: 'Victor Vasarely’s diamond is constructed from continuous parallel interlocking ribbons.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFCC00" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'peugeot-lion-shield',
    name: 'Peugeot Lion Head & Shield',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Peugeot Lion Head & Shield mark.',
    insight: 'The roaring lion head profile is carved inside the heraldic coat of arms shield.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#002B49" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'citroen-double-chevron',
    name: 'Citroën Double Interlocking Chevrons',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Citroën Double Interlocking Chevrons mark.',
    insight: 'André Citroën patented the helical gear tooth chevron in 1900, stacking two gears in symmetry.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#C8102E" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'ds-automobiles-monogram',
    name: 'DS Automobiles Faceted Monogram',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the DS Automobiles Faceted Monogram mark.',
    insight: 'The intertwined D and S mimic haute couture French diamond facets.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C5A059" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'fiat-roundel-slash',
    name: 'Fiat Retro Roundel & Silver Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Fiat Retro Roundel & Silver Ring mark.',
    insight: 'The circular burgundy field is framed by a ribbed chrome steering wheel ring.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#8B0000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'alfa-ring-crest',
    name: 'Alfa Romeo Circular Enamel Bezel',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Alfa Romeo Circular Enamel Bezel mark.',
    insight: 'The blue enamel outer ring encloses the Milanese cross and Visconti dragon serpent.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#003366" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#A81C1D" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'maserati-oval-trident',
    name: 'Maserati Oval & Red-Blue Trident',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Maserati Oval & Red-Blue Trident mark.',
    insight: 'The Neptune trident rests suspended inside the elongated aerodynamic oval.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#001E50" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#CC0000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'ferrari-rectangle-shield',
    name: 'Ferrari Cavallino & Tricolore Bar',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Ferrari Cavallino & Tricolore Bar mark.',
    insight: 'The top horizontal green, white, and red Italian tricolore bars cap the canary yellow shield.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#FFF200" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#008542" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'lamborghini-shield-frame',
    name: 'Lamborghini Gold Shield Frame',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Lamborghini Gold Shield Frame mark.',
    insight: 'The black triangular shield is bordered by a liquid gold metallic rim frame.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#D4AF37" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'porsche-antler-crest',
    name: 'Porsche Antlers & Horse Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Porsche Antlers & Horse Ring mark.',
    insight: 'The Württemberg deer antlers interlock around the central Stuttgart horse roundel.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#B22222" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#D4AF37" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'aston-martin-wings-arch',
    name: 'Aston Martin Inverted Wing Arch',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Aston Martin Inverted Wing Arch mark.',
    insight: 'The curved semi-circular rib cage interlocks with the horizontal flight wings.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#004225" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'bentley-wing-ribs',
    name: 'Bentley Flight Ribs & Roundel',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Bentley Flight Ribs & Roundel mark.',
    insight: 'The circular B roundel interlocks with the radiating aerodynamic feather ribs.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'rolls-royce-spirit',
    name: 'Rolls-Royce Double-R Monogram',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Rolls-Royce Double-R Monogram mark.',
    insight: 'The two overlapping serif R letters honor Charles Rolls and Sir Henry Royce.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'mini-roundel-wings',
    name: 'MINI Wings & Central Bezel',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the MINI Wings & Central Bezel mark.',
    insight: 'The horizontal chrome wings intersect with the central circular black roundel.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'smart-ring-arrow',
    name: 'Smart Ring & Yellow Arrow',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Smart Ring & Yellow Arrow mark.',
    insight: 'The circular C shape interlocks with the forward-pointing yellow chevron arrow.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#808080" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFCC00" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'suzuki-twin-arcs',
    name: 'Suzuki Split Arc Monogram',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Suzuki Split Arc Monogram mark.',
    insight: 'The upper and lower curved arms of the S intersect at two razor-sharp vertices.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#D9272E" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#003366" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'yamaha-tuning-ring',
    name: 'Yamaha Triple Fork Outer Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Yamaha Triple Fork Outer Ring mark.',
    insight: 'The three tuning fork stems terminate precisely at the perimeter of the circular bezel.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#C8102E" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFFFFF" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'kawasaki-k-ring',
    name: 'Kawasaki Flying K Monogram',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Kawasaki Flying K Monogram mark.',
    insight: 'The bold black letter K extends diagonally across the circular racing green disc.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#66CC00" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'ducati-shield-curve',
    name: 'Ducati Corse Curved Road Shield',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Ducati Corse Curved Road Shield mark.',
    insight: 'The red racing shield is bisected by a white curved line symbolizing the racetrack curve.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#CC0000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFFFFF" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'ktm-angled-box',
    name: 'KTM Ready to Race Orange Block',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the KTM Ready to Race Orange Block mark.',
    insight: 'The aggressive angled letters interlock inside the trademark orange perimeter.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#FF6600" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'aprilia-racing-box',
    name: 'Aprilia White-on-Red Racing Box',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Aprilia White-on-Red Racing Box mark.',
    insight: 'The lowercase italicized letters flow continuously across the red competition square.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#CC0000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFFFFF" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'harley-shield-ribbon',
    name: 'Harley-Davidson Heritage Outer Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Harley-Davidson Heritage Outer Ring mark.',
    insight: 'The circular outer ring frames the classic 1910 Bar & Shield casting.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#FF6600" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'triumph-swoop-r',
    name: 'Triumph Flowing R-Line Swoop',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Triumph Flowing R-Line Swoop mark.',
    insight: 'The sweeping decorative line flows out of the letter R through the wordmark base.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFFFFF" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'royal-enfield-wings',
    name: 'Royal Enfield Made Like a Gun Wings',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Royal Enfield Made Like a Gun Wings mark.',
    insight: 'The cannon and bird wings interlock around the brass fuel tank badge.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#B8860B" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'vespa-script-crest',
    name: 'Vespa Flowing Script Oval',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Vespa Flowing Script Oval mark.',
    insight: 'The cursive script was penned in 1946 when Enrico Piaggio exclaimed it looks like a wasp.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#008080" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'piaggio-hex-crest',
    name: 'Piaggio Hexagonal Shield Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Piaggio Hexagonal Shield Ring mark.',
    insight: 'The blue hexagonal shield is framed by the chrome steering column ring.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#0055A5" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'spalding-twin-arcs',
    name: 'Spalding Basketball Seam Arcs',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Spalding Basketball Seam Arcs mark.',
    insight: 'Two intersecting black rubber channel arcs define the authentic basketball grip.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#FF6600" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'wilson-w-arches',
    name: 'Wilson W-Arch Interlock',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Wilson W-Arch Interlock mark.',
    insight: 'The letter W features rounded curved arches optimized for tennis ball felt stamping.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#CC0000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFFFFF" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'head-ski-wishbone',
    name: 'Head Ski Triangular Wishbone',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Head Ski Triangular Wishbone mark.',
    insight: 'Howard Head’s 1950 ski tip emblem interlocks an arrow with a protective shield.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFFFFF" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'rossignol-rooster-ring',
    name: 'Rossignol French Rooster Oval',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Rossignol French Rooster Oval mark.',
    insight: 'The stylized mountain rooster silhouette is framed inside an aerodynamic ski oval.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#002B49" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C8102E" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'blizzard-ski-swirl',
    name: 'Blizzard Double Alpine Swirl',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Blizzard Double Alpine Swirl mark.',
    insight: 'Two interlocking curved swooshes mimic mountain powder snow swirling off edges.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FF6600" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'salomon-s-monogram',
    name: 'Salomon Kinetic S-Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Salomon Kinetic S-Ring mark.',
    insight: 'The interlocking spiral curves form the letter S for mountain trail performance.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFFFFF" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'atomic-star-chevron',
    name: 'Atomic Three-Star Alpine Chevron',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Atomic Three-Star Alpine Chevron mark.',
    insight: 'The three red chevrons interlock to form the Austrian winter sports hallmark.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#CC0000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'fischer-triple-triangles',
    name: 'Fischer Triple Triangle Wedge',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Fischer Triple Triangle Wedge mark.',
    insight: 'Three interlocking yellow geometric triangles symbolize Austrian alpine racing velocity.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#FFCC00" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'babolat-double-line',
    name: 'Babolat Twin Tennis Strings',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Babolat Twin Tennis Strings mark.',
    insight: 'The two bold horizontal lines stamped on racket string beds symbolize natural gut.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#0055A5" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'dunlop-flying-d',
    name: 'Dunlop Flying D-Ring',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Dunlop Flying D-Ring mark.',
    insight: 'The circular arrow flies continuously through the center aperture of the letter D.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFCC00" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'slazenger-panther-ring',
    name: 'Slazenger Pouncing Panther Oval',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Slazenger Pouncing Panther Oval mark.',
    insight: 'The leaping black panther silhouette cuts through the historic British sports oval.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#002B49" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFFFFF" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'everlast-infinity-boxing',
    name: 'Everlast Dual Boxing Glove Rings',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Everlast Dual Boxing Glove Rings mark.',
    insight: 'The curved athletic arches interlock to symbolize heavyweight boxing resilience.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFCC00" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'cleto-reyes-oval',
    name: 'Cleto Reyes Mexican Boxing Oval',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Cleto Reyes Mexican Boxing Oval mark.',
    insight: 'The national red and green boxing glove oval certifies handmade Mexican leather craft.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#CC0000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#006847" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'titleist-script-circle',
    name: 'Titleist Script Golf Medallion',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Titleist Script Golf Medallion mark.',
    insight: 'Helen Robinson’s flowing handwriting was scored into the golf ball mold in 1935.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#000000" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#C0C0C0" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  },
  {
    id: 'callaway-chevron-triad',
    name: 'Callaway Three-Chevron Arc',
    archetypeId: 'intersecting-rings',
    prompt: 'Calibrate the center-to-center intersection overlap spacing of the Callaway Three-Chevron Arc mark.',
    insight: 'Three dynamic chevrons arc together to symbolize aerodynamic golf club head speed.',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Intersection Overlap Spacing',
        min: 40,
        max: 130,
        step: 1,
        targetValue: 70,
        tolerance: 16,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const dist = getParamVal(values, showOfficial, 'overlapDistance', 70);
      const half = dist / 2;
      const r = 54;
      return (
        <svg viewBox="-140 -90 280 180" width="280" height="180">
          <circle cx={-half} cy="0" r={r} fill="none" stroke="#1A1A1A" strokeWidth="12" />
          <circle cx={half} cy="0" r={r} fill="none" stroke="#FFFFFF" strokeWidth="12" />
          {showOfficial && (
            <g>
              <SpecGuideLine x1="-35" y1="-70" x2="-35" y2="70" />
              <SpecGuideLine x1="35" y1="-70" x2="35" y2="70" />
            </g>
          )}
        </svg>
      );
    }
  }
];

import React from 'react';
import { BrandModel } from './types';
import { getParamVal, SpecGuideLine } from './helpers';

export const GAP_BRANDS: BrandModel[] = [
  {
    id: 'fedex-arrow',
    name: 'FedEx Hidden Arrow',
    archetypeId: 'negative-gap',
    prompt: 'Adjust the horizontal tracking of the lowercase "x" to form the iconic hidden forward arrow in the negative space.',
    insight: 'Lindon Leader’s 1994 FedEx identity is one of the most celebrated marks in graphic design history. By optically kerning the custom "E" and "x" until they touch at exactly 0.0px clearance, a crisp, unmistakable forward-pointing arrow is revealed.',
    parameters: [
      { id: 'gapWidth', label: 'Letter "x" Horizontal Clearance', min: -4, max: 4, step: 0.1, targetValue: 0, tolerance: 1.5, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const gapWidth = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="0 0 76 25" width="380" height="125">
          <rect width="76" height="25" fill="#FFFFFF" rx="4" />
          <g transform="translate(1.8, 1.85)">
            <path d="M 36.811,0 V 8.71 H 36.756 C 35.652,7.442 34.274,7.001 32.675,7.001 c -3.276,0 -5.744,2.228 -6.61,5.172 C 25.076,8.929 22.528,6.94 18.75,6.94 c -3.068,0 -5.491,1.377 -6.755,3.621 V 7.772 H 5.653 V 4.744 h 6.921 V 0 H 0 v 21.283 h 5.653 v -8.946 h 5.635 c -0.168,0.657 -0.258,1.361 -0.258,2.104 0,4.439 3.392,7.555 7.72,7.555 3.64,0 6.039,-1.709 7.307,-4.824 h -4.845 c -0.655,0.937 -1.152,1.214 -2.462,1.214 -1.519,0 -2.829,-1.325 -2.829,-2.896 h 9.865 c 0.428,3.526 3.175,6.567 6.944,6.567 1.626,0 3.115,-0.8 4.025,-2.15 h 0.055 v 1.378 h 4.983 V 0 H 36.811 z M 16.079,12.4 c 0.314,-1.352 1.363,-2.235 2.672,-2.235 1.441,0 2.436,0.856 2.698,2.235 0.11,0 -5.37,0 -5.37,0 z m 17.707,5.643 c -1.837,0 -2.979,-1.712 -2.979,-3.499 0,-1.91 0.993,-3.747 2.979,-3.747 2.059,0 2.879,1.837 2.879,3.747 0,1.811 -0.869,3.499 -2.879,3.499 z" fill="#4D148C" />
            <polygon points="53.607,7.772 53.607,12.337 46.798,12.337 46.798,16.526 53.607,16.526 53.607,21.283 41.794,21.283 41.794,0 53.607,0 53.607,4.744 46.798,4.744 46.798,7.772" fill="#FF6600" />
            <g transform={`translate(${gapWidth}, 0)`}>
              <polygon points="59.95,7.772 62.928,11.054 65.795,7.772 71.917,7.772 65.934,14.5 71.999,21.283 65.63,21.283 62.68,17.975 59.757,21.283 53.607,21.283 59.619,14.528 53.607,7.772" fill="#FF6600" />
            </g>
            {showOfficial && (
              <polygon points="53.607,12.337 53.607,13.5 53.607,15.5 53.607,16.526 55.5,16.526 55.5,18.5 59.619,14.528 55.5,10.5 55.5,12.337" fill="#10B981" opacity="0.85" />
            )}
          </g>
        </svg>
      );
    }
  },
  {
    id: 'carrefour-notch',
    name: 'Carrefour Diamond Notch',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the horizontal distance between the red and blue diamond flags to carve the hidden letter "C".',
    insight: 'Miles Newlyn and the Carrefour design team carved a prominent white "C" between the red left triangle and blue right flag, aligning perfectly when the flags are at 0.0px offset.',
    parameters: [
      { id: 'flagSpacing', label: 'Diamond Flag Spacing Offset', min: -12, max: 12, step: 0.2, targetValue: 0, tolerance: 3, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const spacing = getParamVal(values, showOfficial, 'flagSpacing', 0);
      return (
        <svg viewBox="-120 -80 240 160" width="280" height="185">
          <polygon points="-95,0 -30,-62 -30,-22 -55,0 -30,22 -30,62" fill="#ED1B24" />
          <g transform={`translate(${spacing}, 0)`}>
            <polygon points="95,0 30,-62 30,-22 55,0 30,22 30,62" fill="#004C97" />
          </g>
          {showOfficial && (
            <path d="M -30 -22 C 0 -22 30 -22 30 -22 L 55 0 L 30 22 C 0 22 -30 22 -30 22 L -55 0 Z" fill="none" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 4" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'usa-network',
    name: 'USA Network S-Curve',
    archetypeId: 'negative-gap',
    prompt: 'Adjust the horizontal tracking gap carving the negative space letter "S" between U and A.',
    insight: 'Pelham & Court carved the central "S" out of pure negative space between the bold sans-serif letters "U" and "A", balancing at an exact 28px kerning distance.',
    parameters: [
      { id: 'letterGap', label: 'U and A Kerning Gap', min: 14, max: 46, step: 0.5, targetValue: 28, tolerance: 7, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const gap = getParamVal(values, showOfficial, 'letterGap', 28);
      const delta = gap - 28;
      return (
        <svg viewBox="-110 -65 220 130" width="260" height="155">
          <path d="M -75 -45 L -52 -45 L -52 10 C -52 24 -42 30 -30 30 C -24 30 -20 28 -16 22 L -16 -45 L 8 -45 L 8 20 C 8 40 -8 52 -30 52 C -58 52 -75 36 -75 10 Z" fill="#111111" />
          <g transform={`translate(${delta}, 0)`}>
            <path d="M 28 -45 L 55 -45 L 80 50 L 56 50 L 52 32 L 32 32 L 28 50 L 4 50 Z M 42 -10 L 36 15 L 48 15 Z" fill="#111111" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-16" y1="-45" x2="12" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'toblerone-bear',
    name: 'Toblerone Matterhorn Bear',
    archetypeId: 'negative-gap',
    prompt: 'Adjust the scale of the hidden dancing Bern bear silhouette cutout inside the mountain slopes.',
    insight: 'Hidden inside the white snow shadows of the Swiss Matterhorn is the silhouette of a dancing bear honoring the city of Bern, designed to integrate seamlessly at 100% scale.',
    parameters: [
      { id: 'bearScale', label: 'Negative Space Bear Scale', min: 60, max: 145, step: 1, targetValue: 100, tolerance: 15, unit: '%' }
    ],
    render: (values, showOfficial) => {
      const scale = getParamVal(values, showOfficial, 'bearScale', 100) / 100;
      return (
        <svg viewBox="-100 -90 200 180" width="220" height="200">
          <polygon points="0,-75 80,65 -80,65" fill="#D4AF37" />
          <polygon points="0,-75 -15,-20 0,10 -35,35 -80,65" fill="#FFFFFF" opacity="0.9" />
          <g transform={`translate(-8, 15) scale(${scale}) translate(8, -15)`}>
            <path d="M -12 -5 C -15 -12 -12 -18 -8 -20 C -4 -22 2 -18 2 -12 C 4 -6 10 -2 12 5 C 14 12 8 18 2 24 C -2 30 -4 40 -10 42 C -14 42 -16 32 -14 26 C -8 20 -8 8 -12 -5 Z" fill={showOfficial ? '#10B981' : '#D4AF37'} />
          </g>
          {showOfficial && (
            <text x="0" y="80" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="600">Official Spec: 100% Bear Scale</text>
          )}
        </svg>
      );
    }
  },
  {
    id: 'wwf-panda',
    name: 'WWF Panda Ear Gap',
    archetypeId: 'negative-gap',
    prompt: 'Adjust the optical clearance gap between the panda’s black eye patch and floating ear.',
    insight: 'Designed by Sir Peter Scott in 1961, the WWF panda relies on the viewer’s brain to close the open white negative space contours, balancing at a 12px optical ear clearance.',
    parameters: [
      { id: 'earClearance', label: 'Eye Patch to Ear Clearance', min: 2, max: 26, step: 0.5, targetValue: 12, tolerance: 5, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const clearance = getParamVal(values, showOfficial, 'earClearance', 12);
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
            <SpecGuideLine x1="32" y1="-28" x2="42" y2="-38" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'spartan-golf-club',
    name: 'Spartan Golf Helmet Visor',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Spartan Golf Helmet Visor mark.',
    insight: 'Richard Fonteneau designed the golfer in mid-swing forming the cheek and visor of an ancient Greek helmet.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#000000" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#000000" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'pittsburgh-zoo-tree',
    name: 'Pittsburgh Zoo Gorilla & Lioness',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Pittsburgh Zoo Gorilla & Lioness mark.',
    insight: 'Viktors Mekss carved the white negative space of a Baobab tree to reveal a gorilla and lioness facing each other.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#000000" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#000000" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'kolner-zoo-elephant',
    name: 'Kölner Zoo Elephant Cathedral',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Kölner Zoo Elephant Cathedral mark.',
    insight: 'The white negative space inside the elephant’s legs outlines the twin spires of the Cologne Cathedral.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#0072CE" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#0072CE" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nbc-peacock-body',
    name: 'NBC Peacock Negative Space Body',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the NBC Peacock Negative Space Body mark.',
    insight: 'Steff Geissbuhler carved the white silhouette peacock body out of the negative space between the six colorful feathers.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#000000" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#000000" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'goodwill-smiling-g',
    name: 'Goodwill Smiling Half-Face G',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Goodwill Smiling Half-Face G mark.',
    insight: 'Joseph Selame designed the smiling face in 1968, repeating it as both the standalone icon and the lowercase g.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#0055A5" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#0055A5" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'formula-1-negative-one',
    name: 'Formula 1 Hidden Numeral 1',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Formula 1 Hidden Numeral 1 mark.',
    insight: 'The numeral 1 was famously carved out of pure white negative space between the black F and red trailing speed chevrons.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#E10600" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#E10600" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'guild-food-writers-spoon',
    name: 'Guild of Food Writers Spoon Nib',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Guild of Food Writers Spoon Nib mark.',
    insight: '300million carved the bowl of a dining spoon out of the negative space of a classic fountain pen nib.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#000000" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#000000" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'hope-children-africa',
    name: 'Hope for African Children Map',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Hope for African Children Map mark.',
    insight: 'Two adult figures leaning down to support a child form the geographic outline of the African continent.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#E31837" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#E31837" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'girl-scouts-trefoil-faces',
    name: 'Girl Scouts Triple Profile Faces',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Girl Scouts Triple Profile Faces mark.',
    insight: 'Saul Bass nested three young women’s silhouette profiles looking forward inside a green trefoil.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#00AE58" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#00AE58" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'sony-vaio-sine-binary',
    name: 'Sony VAIO Wave & Binary Digits',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Sony VAIO Wave & Binary Digits mark.',
    insight: 'Teiyu Goto styled the letters V-A as an analog sine wave, and I-O as the digital binary numbers 1 and 0.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#000000" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#000000" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'bronx-zoo-skyline-legs',
    name: 'Bronx Zoo Giraffes & City Spire',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Bronx Zoo Giraffes & City Spire mark.',
    insight: 'Two tall giraffes standing side by side reveal the New York City skyscraper skyline under their underbellies.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#8B2332" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#8B2332" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'hartford-whalers-h',
    name: 'Hartford Whalers Whale Tail H',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Hartford Whalers Whale Tail H mark.',
    insight: 'Peter Good carved the letter H out of pure white negative space between the green whale tail and blue W.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#002855" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#002855" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'milwaukee-brewers-glove',
    name: 'Milwaukee Brewers M-B Ball Glove',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Milwaukee Brewers M-B Ball Glove mark.',
    insight: 'Tom Meindel interlocked the lowercase letters m and b in 1978 to form a baseball catcher’s mitt.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#0A2351" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#0A2351" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'washington-capitals-dome',
    name: 'Washington Capitals Eagle Dome',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Washington Capitals Eagle Dome mark.',
    insight: 'The outstretched eagle wings carve the white negative silhouette of the United States Capitol dome.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#C8102E" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#C8102E" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'new-jersey-devils-nj',
    name: 'New Jersey Devils Horns & Tail',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the New Jersey Devils Horns & Tail mark.',
    insight: 'The letters N and J connect with devil horns on top and a pointed devil tail at the bottom.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#CE1126" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#CE1126" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'st-louis-blues-note',
    name: 'St. Louis Blues Flying Music Note',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the St. Louis Blues Flying Music Note mark.',
    insight: 'W.C. Handy’s historic blues song inspired the winged musical eighth note soaring forward.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#002F87" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#002F87" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'minnesota-wild-bear-head',
    name: 'Minnesota Wild Wilderness Bear',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Minnesota Wild Wilderness Bear mark.',
    insight: 'The pine trees, river, and setting sun form the facial silhouette of a wild northern black bear.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#154734" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#154734" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'philadelphia-flyers-puck',
    name: 'Philadelphia Flyers Winged P',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Philadelphia Flyers Winged P mark.',
    insight: 'Sam Ciccone designed the four aerodynamic flight wings trailing behind the letter P and orange puck.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#F74902" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#F74902" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'arizona-dbacks-fang',
    name: 'Arizona Diamondbacks Snake D',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Arizona Diamondbacks Snake D mark.',
    insight: 'The letter D is stylized into a diamondback rattlesnake head with an open venomous fang notch.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#A71930" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#A71930" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'montreal-expos-eb',
    name: 'Montreal Expos e-M-B Tricolor',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Montreal Expos e-M-B Tricolor mark.',
    insight: 'The letters e (équipe), M (Montréal), and b (baseball) interlock in French red, white, and blue.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#002D62" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#002D62" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'new-york-mets-bridge',
    name: 'New York Mets Skyline Bridge',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the New York Mets Skyline Bridge mark.',
    insight: 'The five New York borough architectural silhouettes bridge together on the seams of a baseball.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#002D72" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#002D72" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'chicago-white-sox-sox',
    name: 'Chicago White Sox Diagonal SOX',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Chicago White Sox Diagonal SOX mark.',
    insight: 'The custom Old English lettering cascades diagonally from upper-left to lower-right.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#000000" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#000000" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'atlanta-braves-tomahawk',
    name: 'Atlanta Braves Tomahawk Strike',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Atlanta Braves Tomahawk Strike mark.',
    insight: 'The stone-headed tomahawk with wrapped yellow leather stitching has adorned Braves jerseys since 1987.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#CE1126" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#CE1126" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'san-francisco-giants-sf',
    name: 'San Francisco Giants Interlocking SF',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the San Francisco Giants Interlocking SF mark.',
    insight: 'The classic serif letters S and F touch with zero optical clearance along the inner serif bracket.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#FD5A1E" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#FD5A1E" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'cleveland-guardians-c',
    name: 'Cleveland Guardians Winged C',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Cleveland Guardians Winged C mark.',
    insight: 'Inspired by the Hope Memorial Bridge Guardians of Traffic statues flanking the city riverfront.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#002B5C" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#002B5C" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'detroit-tigers-old-english-d',
    name: 'Detroit Tigers Old English D',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Detroit Tigers Old English D mark.',
    insight: 'Dating back to 1904, the Gothic Old English D has been worn with naval blue dignity for over a century.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#0C2340" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#0C2340" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'boston-red-sox-hanging-sox',
    name: 'Boston Red Sox Twin Hanging Sox',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Boston Red Sox Twin Hanging Sox mark.',
    insight: 'Two clean red knit socks with white cuffs hang in parallel balance without extraneous lettering.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#BD3039" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#BD3039" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'baltimore-orioles-cartoon-bird',
    name: 'Baltimore Orioles Smiling Bird Cap',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Baltimore Orioles Smiling Bird Cap mark.',
    insight: 'Stan Walsh drew the cartoon Oriole bird wearing a baseball cap with a friendly optical smile.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#DF4601" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#DF4601" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'tampa-bay-rays-sunburst',
    name: 'Tampa Bay Rays Yellow Sunburst',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Tampa Bay Rays Yellow Sunburst mark.',
    insight: 'A bright yellow lightburst glints off the navy jersey, celebrating Florida’s Sunshine State rays.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#092C5C" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#092C5C" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'miami-marlins-jumping-marlin',
    name: 'Miami Marlins Jumping Blue Marlin',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Miami Marlins Jumping Blue Marlin mark.',
    insight: 'The blue and orange marlin arcs through the air over the bold black letter M.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#00A3E0" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#00A3E0" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'colorado-rockies-mountain-comet',
    name: 'Colorado Rockies Purple Peak Ball',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Colorado Rockies Purple Peak Ball mark.',
    insight: 'A baseball streaking like a comet arcs over the snow-capped purple Rocky Mountain peak.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#33006F" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#33006F" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'san-diego-padres-swinging-friar',
    name: 'San Diego Padres Swinging Friar',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the San Diego Padres Swinging Friar mark.',
    insight: 'The friar with tonsure haircut takes a mighty swing in authentic 1969 brown and gold.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#2F241D" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#2F241D" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'seattle-mariners-compass-rose',
    name: 'Seattle Mariners Compass Rose',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Seattle Mariners Compass Rose mark.',
    insight: 'The eight-point nautical navigational star rests centered on the red baseball stitching.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#0C2340" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#0C2340" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'texas-rangers-state-star',
    name: 'Texas Rangers Lonestar T-Crest',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Texas Rangers Lonestar T-Crest mark.',
    insight: 'The red bevel-edged letter T houses the five-point Texas lone star in white negative space.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#003278" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#003278" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'houston-astros-h-star',
    name: 'Houston Astros Space City H-Star',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Houston Astros Space City H-Star mark.',
    insight: 'The bright orange star of Apollo missions frames the white letter H on blue caps.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#002D62" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#002D62" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'kansas-city-royals-crown',
    name: 'Kansas City Royals Golden Crown',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Kansas City Royals Golden Crown mark.',
    insight: 'The five-point golden crown sits atop the royal blue crest honoring the American Royal livestock show.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#004687" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#004687" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'cincinnati-reds-pointed-c',
    name: 'Cincinnati Reds Pointed Wishbone C',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Cincinnati Reds Pointed Wishbone C mark.',
    insight: 'The wishbone C has represented the first professional baseball team since 1905.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#C6011F" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#C6011F" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'oakland-athletics-white-elephant',
    name: 'Oakland Athletics White Elephant',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Oakland Athletics White Elephant mark.',
    insight: 'John McGraw called the A’s a white elephant in 1902; Connie Mack proudly adopted it on jerseys.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#003831" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#003831" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'la-angels-halo-a',
    name: 'Los Angeles Angels Haloed A',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Los Angeles Angels Haloed A mark.',
    insight: 'A shimmering silver halo hovers above the apex point of the red letter A.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#BA0021" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#BA0021" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'pittsburgh-pirates-black-p',
    name: 'Pittsburgh Pirates Bold Golden P',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Pittsburgh Pirates Bold Golden P mark.',
    insight: 'The bold serif P has symbolized Roberto Clemente and Honus Wagner on Forbes Field.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#FDB827" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#FDB827" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'toronto-blue-jays-maple-leaf',
    name: 'Toronto Blue Jays Profile & Leaf',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Toronto Blue Jays Profile & Leaf mark.',
    insight: 'Savage Sloan stylized the blue jay bird head flanking Canada’s national red maple leaf in 1977.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#134A8E" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#134A8E" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nashville-predators-sabertooth',
    name: 'Nashville Predators Sabertooth Skull',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Nashville Predators Sabertooth Skull mark.',
    insight: 'A sabertooth tiger fang was excavated during the 1971 downtown First American building dig.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#FFB81C" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#FFB81C" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'vegas-golden-knights-v',
    name: 'Vegas Golden Knights Barbute Helmet',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Vegas Golden Knights Barbute Helmet mark.',
    insight: 'The slit in the medieval barbute knight helmet forms the letter V for Las Vegas.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#B4975A" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#B4975A" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'seattle-kraken-tentacle-s',
    name: 'Seattle Kraken Tentacle S-Curve',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Seattle Kraken Tentacle S-Curve mark.',
    insight: 'The deep sea navy S conceals a rising kraken tentacle with a piercing red monster eye.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#001628" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#001628" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'columbus-blue-jackets-c-ribbon',
    name: 'Columbus Blue Jackets Star Ribbon',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Columbus Blue Jackets Star Ribbon mark.',
    insight: 'The red ribbon curls to form the letter C around a silver Civil War uniform star.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#002654" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#002654" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'dallas-stars-beveled-d',
    name: 'Dallas Stars Beveled D-Star',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Dallas Stars Beveled D-Star mark.',
    insight: 'The beveled victory green star interlocks with the letter D representing Big D.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#006847" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#006847" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'calgary-flames-flaming-c',
    name: 'Calgary Flames Flaming Atlanta C',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Calgary Flames Flaming Atlanta C mark.',
    insight: 'The flame bursts horizontally from the back of the letter C, migrated from Atlanta in 1980.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#C8102E" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#C8102E" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'edmonton-oilers-dripping-oil',
    name: 'Edmonton Oilers Liquid Oil Drop',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Edmonton Oilers Liquid Oil Drop mark.',
    insight: 'The orange drop of crude oil drips into the center of the royal blue crest.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#041E42" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#041E42" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'vancouver-canucks-haida-orca',
    name: 'Vancouver Canucks Haida Orca Whale',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Vancouver Canucks Haida Orca Whale mark.',
    insight: 'The Haida indigenous art orca whale breaks through the icy surface to form the letter C.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#00205B" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#00205B" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'winnipeg-jets-cf18-hornet',
    name: 'Winnipeg Jets CF-18 Fighter Silhouette',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Winnipeg Jets CF-18 Fighter Silhouette mark.',
    insight: 'The silhouette of a Canadian Forces CF-18 Hornet jet flies through the RCAF maple leaf roundel.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#041E42" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#041E42" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ottawa-senators-centurion-helmet',
    name: 'Ottawa Senators Golden Centurion',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Ottawa Senators Golden Centurion mark.',
    insight: 'The Roman centurion warrior profile wears golden armor under a crimson helmet plume.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#DA1A32" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#DA1A32" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'san-jose-sharks-chomping-shark',
    name: 'San Jose Sharks Broken Hockey Stick',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the San Jose Sharks Broken Hockey Stick mark.',
    insight: 'The Pacific teal shark bites a wooden hockey stick in two with razor-sharp teeth.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#006D75" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#006D75" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'anaheim-ducks-webbed-foot-d',
    name: 'Anaheim Ducks Webbed Foot Mask',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Anaheim Ducks Webbed Foot Mask mark.',
    insight: 'The letter D is sculpted into the outline of a webbed duck foot slicing through water.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#F47920" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#F47920" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'tampa-bay-lightning-bolt-ring',
    name: 'Tampa Bay Lightning Bolt in Ring',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Tampa Bay Lightning Bolt in Ring mark.',
    insight: 'Phil Esposito created the franchise in the lightning capital of North America in 1992.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#002868" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#002868" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'florida-panthers-stalking-cat',
    name: 'Florida Panthers Pouncing Big Cat',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Florida Panthers Pouncing Big Cat mark.',
    insight: 'The endangered Florida panther leaps forward with claws bared to defend its home ice.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#041E42" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#041E42" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'carolina-hurricanes-cyclone-eye',
    name: 'Carolina Hurricanes Category-5 Eye',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Carolina Hurricanes Category-5 Eye mark.',
    insight: 'The aerodynamic dual swirling bands form the destructive eye of an Atlantic hurricane.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#CC0000" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#CC0000" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'buffalo-sabres-crossed-swords',
    name: 'Buffalo Sabres Cavalry Crossed Swords',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Buffalo Sabres Cavalry Crossed Swords mark.',
    insight: 'Two crossed cavalry sabres defend the charging American buffalo in deep royal blue.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#003087" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#003087" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'boston-bruins-spoked-b',
    name: 'Boston Bruins Spoked Hub B',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Boston Bruins Spoked Hub B mark.',
    insight: 'Eight radial spokes connect the hub B to the rim, symbolizing Boston as the Hub of the Universe.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#FFB81C" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#FFB81C" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'new-york-rangers-diagonal-shield',
    name: 'New York Rangers Diagonal Text Shield',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the New York Rangers Diagonal Text Shield mark.',
    insight: 'Tex Rickard’s team has worn diagonal block lettering cascading across jerseys since 1926.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#0038A8" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#0038A8" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'chicago-blackhawks-feather-profile',
    name: 'Chicago Blackhawks Native Profile',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Chicago Blackhawks Native Profile mark.',
    insight: 'Frederic McLaughlin named the team after his World War I 86th Infantry Blackhawk Division.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#CF0A2C" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#CF0A2C" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'detroit-red-wings-winged-wheel',
    name: 'Detroit Red Wings Spinning Wheel',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Detroit Red Wings Spinning Wheel mark.',
    insight: 'James Norris chose the winged automobile wheel in 1932 to honor the Motor City.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#CE1126" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#CE1126" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'golden-state-warriors-bay-bridge',
    name: 'Golden State Warriors Bay Bridge',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Golden State Warriors Bay Bridge mark.',
    insight: 'The blue and yellow roundel showcases the iconic suspension cables of the San Francisco Bay Bridge.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#1D428A" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#1D428A" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'los-angeles-lakers-speed-ball',
    name: 'Los Angeles Lakers Speed-Lined Ball',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Los Angeles Lakers Speed-Lined Ball mark.',
    insight: 'The purple and gold basketball features forward motion speed streaks on the wordmark.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#552583" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#552583" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'boston-celtics-spinning-ball',
    name: 'Boston Celtics Shamrock Leprechaun',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Boston Celtics Shamrock Leprechaun mark.',
    insight: 'Zang Auerbach drew Lucky the leprechaun spinning a basketball on his finger in 1950.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#007A33" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#007A33" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'chicago-bulls-charging-head',
    name: 'Chicago Bulls Furious Red Bull',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Chicago Bulls Furious Red Bull mark.',
    insight: 'Dean Wessel drew the fierce charging bull in 1966; it has never been altered in franchise history.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#CE1141" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#CE1141" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'miami-heat-flaming-hoop',
    name: 'Miami Heat Flaming Ring Ball',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Miami Heat Flaming Ring Ball mark.',
    insight: 'The flaming basketball flies through the white rim with red and orange smoke trails.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#98002E" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#98002E" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'san-antonio-spurs-boot-spur',
    name: 'San Antonio Spurs Cowboy Boot Spur',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the San Antonio Spurs Cowboy Boot Spur mark.',
    insight: 'The silver cowboy boot spur forms the letter U in the authentic Texas wordmark.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#C4CED4" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#C4CED4" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'dallas-mavericks-stallion-shield',
    name: 'Dallas Mavericks Stallion Head',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Dallas Mavericks Stallion Head mark.',
    insight: 'The silver stallion horse head profile is set against a crescent basketball and shield.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#00538C" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#00538C" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'houston-rockets-launch-r',
    name: 'Houston Rockets Twin Rocket Booster',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Houston Rockets Twin Rocket Booster mark.',
    insight: 'The letter R blasts upward with two fiery rocket exhaust booster trails.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#CE1141" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#CE1141" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'utah-jazz-eighth-note-j',
    name: 'Utah Jazz Eighth Note Ball',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Utah Jazz Eighth Note Ball mark.',
    insight: 'Born in New Orleans in 1974, the letter J doubles as a musical eighth note holding a basketball.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#002B5C" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#002B5C" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'phoenix-suns-streak-ball',
    name: 'Phoenix Suns Purple Streak Ball',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Phoenix Suns Purple Streak Ball mark.',
    insight: 'The basketball streaks diagonally like a fireball over the purple desert court.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#E56020" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#E56020" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'portland-trail-blazers-pinwheel',
    name: 'Portland Trail Blazers Pinwheel',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Portland Trail Blazers Pinwheel mark.',
    insight: 'Five red lines and five white lines curve together symbolizing five-on-five basketball.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#E03A3E" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#E03A3E" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'denver-nuggets-crossed-pickaxes',
    name: 'Denver Nuggets Crossed Miner Picks',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Denver Nuggets Crossed Miner Picks mark.',
    insight: 'Two gold mining pickaxes intersect beneath a snow-capped Rocky Mountain peak.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#0E2240" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#0E2240" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'okc-thunder-shield-chevrons',
    name: 'Oklahoma City Thunder Blue Shield',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Oklahoma City Thunder Blue Shield mark.',
    insight: 'Two twin diagonal yellow and orange speed chevrons slice through the blue shield.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#007AC1" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#007AC1" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'minnesota-timberwolves-wolf-moon',
    name: 'Minnesota Timberwolves Howling Wolf',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Minnesota Timberwolves Howling Wolf mark.',
    insight: 'The grey timberwolf howls forward with the green North Star glowing in the background.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#0C2340" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#0C2340" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'new-orleans-pelicans-fleur-de-lis',
    name: 'New Orleans Pelicans Crescent Shield',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the New Orleans Pelicans Crescent Shield mark.',
    insight: 'The white pelican holds a golden basketball, flanked by the French royal fleur-de-lis.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#0C2340" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#0C2340" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'memphis-grizzlies-furious-eyes',
    name: 'Memphis Grizzlies Intense Eyes',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Memphis Grizzlies Intense Eyes mark.',
    insight: 'The midnight blue grizzly bear head glares forward with piercing yellow predator eyes.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#5D76A9" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#5D76A9" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'sacramento-kings-royal-crown',
    name: 'Sacramento Kings Crown Ball',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Sacramento Kings Crown Ball mark.',
    insight: 'The regal purple crown rests atop the basketball with dual silver banners.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#5A2D81" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#5A2D81" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'charlotte-hornets-stinger',
    name: 'Charlotte Hornets Stinging Hornet',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Charlotte Hornets Stinging Hornet mark.',
    insight: 'Alexander Julian designed the teal and purple hornet clutching a basketball in 1988.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#00788C" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#00788C" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'indiana-pacers-speed-p',
    name: 'Indiana Pacers Motion Speed-P',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Indiana Pacers Motion Speed-P mark.',
    insight: 'The yellow basketball is caught inside the forward-leaning loop of the blue letter P.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#002D62" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#002D62" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'cleveland-cavaliers-sword-c',
    name: 'Cleveland Cavaliers Rapier Sword C',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Cleveland Cavaliers Rapier Sword C mark.',
    insight: 'The gold musketeer rapier sword pierces through the center of the wine letter C.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#860038" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#860038" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'detroit-pistons-chrome-ball',
    name: 'Detroit Pistons Basketball Roundel',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Detroit Pistons Basketball Roundel mark.',
    insight: 'The red and blue basketball is enclosed in a precision circular automotive ring.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#1D42BA" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#1D42BA" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'orlando-magic-streaking-star',
    name: 'Orlando Magic Streaking Silver Star',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Orlando Magic Streaking Silver Star mark.',
    insight: 'A sparkling blue-and-silver star streaks across the basketball like Disney fireworks.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#0077C0" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#0077C0" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'atlanta-hawks-pacman-silhouette',
    name: 'Atlanta Hawks Pacman Hawk Head',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Atlanta Hawks Pacman Hawk Head mark.',
    insight: 'The circular red badge features the sharp silhouette hawk head nicknamed the Pac-Man.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#C1D32F" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#C1D32F" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'brooklyn-nets-subway-shield',
    name: 'Brooklyn Nets B-Ball Subway Shield',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Brooklyn Nets B-Ball Subway Shield mark.',
    insight: 'Inspired by New York City subway signage, the black and white shield houses the B-ball.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#000000" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#000000" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'toronto-raptors-claw-tear',
    name: 'Toronto Raptors Raptor Claw Tear',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Toronto Raptors Raptor Claw Tear mark.',
    insight: 'Three silver dinosaur claw scratches rip through the seams of a red basketball.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#CE1141" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#CE1141" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'milwaukee-bucks-twelve-point-buck',
    name: 'Milwaukee Bucks 12-Point Buck',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Milwaukee Bucks 12-Point Buck mark.',
    insight: 'Doubleday & Cartwright sculpted the aggressive 12-point buck deer with an M neck collar.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#00471B" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#00471B" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'philadelphia-76ers-thirteen-stars',
    name: 'Philadelphia 76ers 13 Colonial Stars',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Philadelphia 76ers 13 Colonial Stars mark.',
    insight: 'A circle of 13 white colonial stars surrounds the numeral 7 celebrating 1776.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#006BB6" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#006BB6" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'washington-wizards-wand-crescent',
    name: 'Washington Wizards Moon Wand',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Washington Wizards Moon Wand mark.',
    insight: 'The wizard’s hand catches a basketball as the magical wand tip sparkles on the moon.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#002B5C" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#002B5C" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'new-york-knicks-3d-wordmark',
    name: 'New York Knicks 3D Dimensional Crest',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the New York Knicks 3D Dimensional Crest mark.',
    insight: 'Michael Doret rendered the iconic dimensional orange Knicks wordmark atop a silver ball.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#006BB6" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#006BB6" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'yoga-australia-map',
    name: 'Yoga Australia Continental Silhouette',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Yoga Australia Continental Silhouette mark.',
    insight: 'The negative space formed between the yogi’s arm and leg traces the map of Australia.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#008542" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#008542" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ed-electric-plug',
    name: 'Elettrodomestici Electric Plug',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Elettrodomestici Electric Plug mark.',
    insight: 'Gianni Bortolotti carved an electric wall plug out of the negative space inside the letter E.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#002B49" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#002B49" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'magic-coffee-hat',
    name: 'Magic Coffee Magician Top Hat',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Magic Coffee Magician Top Hat mark.',
    insight: 'The steaming cup of coffee forms a magician’s top hat in white negative space.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#4B3621" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#4B3621" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'black-cat-eyes',
    name: 'Black Cat Dual Letter C Eyes',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Black Cat Dual Letter C Eyes mark.',
    insight: 'The letters C and a incorporate piercing cat eyes peering out from dark negative shadows.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#000000" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#000000" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'snooty-peacock-woman',
    name: 'Snooty Peacock Woman & Feathers',
    archetypeId: 'negative-gap',
    prompt: 'Calibrate the negative space notch and optical clearance of the Snooty Peacock Woman & Feathers mark.',
    insight: 'The plumage of the peacock feathers reveals an elegant woman wearing a diamond necklace.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Optical Clearance',
        min: -6,
        max: 6,
        step: 0.1,
        targetValue: 0,
        tolerance: 2,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const shift = getParamVal(values, showOfficial, 'gapWidth', 0);
      return (
        <svg viewBox="-120 -70 240 140" width="280" height="160">
          <rect x="-90" y="-45" width="80" height="90" rx="4" fill="#0055A5" />
          <g transform={`translate(${shift}, 0)`}>
            <rect x="10" y="-45" width="80" height="90" rx="4" fill="#0055A5" />
          </g>
          {/* Central Negative Cutout */}
          <polygon points="-10,-25 10,-25 0,25" fill="#FFFFFF" />
          {showOfficial && (
            <polygon points="-10,-25 10,-25 0,25" fill="#10B981" opacity="0.8" />
          )}
        </svg>
      );
    }
  }
];

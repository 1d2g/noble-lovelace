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
      const shift = spacing * 0.3;
      return (
        <svg viewBox="-4 -2 32 28" width="280" height="185">
          {/* Authentic Left Red Diamond */}
          <path
            d="m-5.043.537L.537 10.93C.209 11.207 0 11.534 0 12c0 .465.21.793.537 1.073l6.56 6.345c.042.043.083.06.117.06.062 0 .105-.057.103-.123a.188.188 0 0 0-.057-.123C5.72 17.32 4.6 15.126 4.6 12.024c0-3.104 1.12-5.341 2.66-7.255a.185.185 0 0 0 .057-.123c.002-.068-.04-.123-.103-.123-.034 0-.075.017-.117.06"
            fill="#ED1B24"
          />
          {/* Authentic Right Blue Flag */}
          <g transform={`translate(${shift}, 0)`}>
            <path
              d="M12.14 4.045c-2.569 0-3.572 3.64-3.572 7.979 0 4.34 1.003 7.931 3.572 7.931 1.541 0 2.855-.903 2.86-1.645a.625.625 0 0 0-.199-.453c-.73-.706-1.016-1.412-1.018-2.034-.005-1.189 1.026-2.074 1.977-2.074 1.306 0 2.077 1.027 2.077 2.357 0 1.26-.537 2.31-1.121 3.15a.193.193 0 0 0-.034.107c0 .065.04.12.098.12.035 0 .076-.02.122-.065l6.561-6.344c.328-.28.537-.608.537-1.073 0-.468-.21-.794-.537-1.073l-6.561-6.346c-.045-.045-.087-.064-.122-.064-.059 0-.097.055-.098.12 0 .035.01.073.034.107.584.84 1.12 1.89 1.12 3.15 0 1.329-.77 2.356-2.076 2.356-.95 0-1.982-.884-1.977-2.073.002-.622.288-1.328 1.018-2.033A.624.624 0 0 0 15 5.69c-.004-.743-1.319-1.646-2.86-1.646"
              fill="#004E9F"
            />
          </g>
          {showOfficial && (
            <ellipse cx="9" cy="12" rx="4.5" ry="6" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M12.337 0c-.475 0-.861 1.016-.861 2.269 0 .527.069 1.011.183 1.396a8.514 8.514 0 0 0-3.961 1.22 5.229 5.229 0 0 0-.595-1.093c-.606-.866-1.34-1.436-1.79-1.43a.381.381 0 0 0-.217.066c-.39.273-.123 1.326.596 2.353.267.381.559.705.84.948a8.683 8.683 0 0 0-1.528 1.716h1.734a7.179 7.179 0 0 1 5.381-2.421 7.18 7.18 0 0 1 5.382 2.42h1.733a8.687 8.687 0 0 0-1.32-1.53c.35-.249.735-.643 1.078-1.133.719-1.027.986-2.08.596-2.353a.382.382 0 0 0-.217-.065c-.45-.007-1.184.563-1.79 1.43a4.897 4.897 0 0 0-.676 1.325 8.52 8.52 0 0 0-3.899-1.42c.12-.39.193-.887.193-1.429 0-1.253-.386-2.269-.862-2.269zM1.624 9.443v5.162h1.358v-1.968h1.64v1.968h1.357V9.443H4.62v1.838H2.98V9.443zm5.912 0v5.162h3.21v-1.108H8.893v-.95h1.64v-1.142h-1.64v-.84h1.853V9.443zm4.698 0v5.162h3.218v-1.362h-1.86v-3.8zm4.706 0v5.162h1.364v-2.643l1.357 1.225 1.35-1.232v2.65h1.365V9.443h-.614l-2.1 1.914-2.109-1.914zm-11.82 7.28a8.688 8.688 0 0 0 1.412 1.548 5.206 5.206 0 0 0-.841.948c-.719 1.027-.985 2.08-.596 2.353.39.273 1.289-.338 2.007-1.364a5.23 5.23 0 0 0 .595-1.092 8.514 8.514 0 0 0 3.961 1.219 5.01 5.01 0 0 0-.183 1.396c0 1.253.386 2.269.861 2.269.476 0 .862-1.016.862-2.269 0-.542-.072-1.04-.193-1.43a8.52 8.52 0 0 0 3.9-1.42c.121.4.352.865.675 1.327.719 1.026 1.617 1.637 2.007 1.364.39-.273.123-1.326-.596-2.353-.343-.49-.727-.885-1.077-1.135a8.69 8.69 0 0 0 1.202-1.36h-1.771a7.174 7.174 0 0 1-5.227 2.252 7.174 7.174 0 0 1-5.226-2.252z" fill="#0F1689" />
          </g>
          {showOfficial && (
            <path d="M12.337 0c-.475 0-.861 1.016-.861 2.269 0 .527.069 1.011.183 1.396a8.514 8.514 0 0 0-3.961 1.22 5.229 5.229 0 0 0-.595-1.093c-.606-.866-1.34-1.436-1.79-1.43a.381.381 0 0 0-.217.066c-.39.273-.123 1.326.596 2.353.267.381.559.705.84.948a8.683 8.683 0 0 0-1.528 1.716h1.734a7.179 7.179 0 0 1 5.381-2.421 7.18 7.18 0 0 1 5.382 2.42h1.733a8.687 8.687 0 0 0-1.32-1.53c.35-.249.735-.643 1.078-1.133.719-1.027.986-2.08.596-2.353a.382.382 0 0 0-.217-.065c-.45-.007-1.184.563-1.79 1.43a4.897 4.897 0 0 0-.676 1.325 8.52 8.52 0 0 0-3.899-1.42c.12-.39.193-.887.193-1.429 0-1.253-.386-2.269-.862-2.269zM1.624 9.443v5.162h1.358v-1.968h1.64v1.968h1.357V9.443H4.62v1.838H2.98V9.443zm5.912 0v5.162h3.21v-1.108H8.893v-.95h1.64v-1.142h-1.64v-.84h1.853V9.443zm4.698 0v5.162h3.218v-1.362h-1.86v-3.8zm4.706 0v5.162h1.364v-2.643l1.357 1.225 1.35-1.232v2.65h1.365V9.443h-.614l-2.1 1.914-2.109-1.914zm-11.82 7.28a8.688 8.688 0 0 0 1.412 1.548 5.206 5.206 0 0 0-.841.948c-.719 1.027-.985 2.08-.596 2.353.39.273 1.289-.338 2.007-1.364a5.23 5.23 0 0 0 .595-1.092 8.514 8.514 0 0 0 3.961 1.219 5.01 5.01 0 0 0-.183 1.396c0 1.253.386 2.269.861 2.269.476 0 .862-1.016.862-2.269 0-.542-.072-1.04-.193-1.43a8.52 8.52 0 0 0 3.9-1.42c.121.4.352.865.675 1.327.719 1.026 1.617 1.637 2.007 1.364.39-.273.123-1.326-.596-2.353-.343-.49-.727-.885-1.077-1.135a8.69 8.69 0 0 0 1.202-1.36h-1.771a7.174 7.174 0 0 1-5.227 2.252 7.174 7.174 0 0 1-5.226-2.252z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M14.8281 4.6055c-1.4058.0067-2.5666 1.2083-2.416 2.7851h1.08s.5026-.0062.6485.338c0 0-1.594.6128-1.4668 1.6093l.9922 7.3281 3.4727-8.4316c.5296-1.279-.0616-3.1668-1.6973-3.5567a2.5497 2.5497 0 0 0-.6133-.0722zm-5.6426.002a2.5551 2.5551 0 0 0-.627.0722c-1.6356.3878-2.2268 2.2757-1.6972 3.5566l3.4727 8.4317 1.2422-9.1582c.2194-1.629-.9564-2.8876-2.3907-2.9024zM4.293 8.3104c-.5719.0213-1.1298.2465-1.5586.6583-.803.7737-1.4275 2.8792.371 4.1562l6.9532 4.9258-3.334-8.0762c-.4878-1.1698-1.4785-1.6994-2.4316-1.664zm15.2715 0c-.9075.0203-1.8246.5528-2.2891 1.6641l-3.332 8.0762 6.953-4.9258c1.7987-1.275 1.172-3.3825.3692-4.1563-.4638-.446-1.0802-.672-1.7011-.6582zm1.9394 5.7872c-.4523.0075-.9351.1573-1.42.502l-6.7694 4.7948h8.0253c1.8734 0 3.0648-1.5828 2.5332-3.4843-.2595-.9264-1.2131-1.8318-2.369-1.8125zm-19.0078.002C1.3405 14.081.3879 14.9851.127 15.9101c-.5316 1.9015.6597 3.4843 2.5332 3.4843h8.0253L3.916 14.5996c-.4848-.344-.9677-.4927-1.42-.5z" fill="#222222" />
          </g>
          {showOfficial && (
            <path d="M14.8281 4.6055c-1.4058.0067-2.5666 1.2083-2.416 2.7851h1.08s.5026-.0062.6485.338c0 0-1.594.6128-1.4668 1.6093l.9922 7.3281 3.4727-8.4316c.5296-1.279-.0616-3.1668-1.6973-3.5567a2.5497 2.5497 0 0 0-.6133-.0722zm-5.6426.002a2.5551 2.5551 0 0 0-.627.0722c-1.6356.3878-2.2268 2.2757-1.6972 3.5566l3.4727 8.4317 1.2422-9.1582c.2194-1.629-.9564-2.8876-2.3907-2.9024zM4.293 8.3104c-.5719.0213-1.1298.2465-1.5586.6583-.803.7737-1.4275 2.8792.371 4.1562l6.9532 4.9258-3.334-8.0762c-.4878-1.1698-1.4785-1.6994-2.4316-1.664zm15.2715 0c-.9075.0203-1.8246.5528-2.2891 1.6641l-3.332 8.0762 6.953-4.9258c1.7987-1.275 1.172-3.3825.3692-4.1563-.4638-.446-1.0802-.672-1.7011-.6582zm1.9394 5.7872c-.4523.0075-.9351.1573-1.42.502l-6.7694 4.7948h8.0253c1.8734 0 3.0648-1.5828 2.5332-3.4843-.2595-.9264-1.2131-1.8318-2.369-1.8125zm-19.0078.002C1.3405 14.081.3879 14.9851.127 15.9101c-.5316 1.9015.6597 3.4843 2.5332 3.4843h8.0253L3.916 14.5996c-.4848-.344-.9677-.4927-1.42-.5z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M9.6 11.24h7.91L19.75 9H9.39c-2.85 0-3.62.34-5.17 1.81C2.71 12.3 0 15 0 15h3.38c.77-.75 2.2-2.13 2.85-2.75.92-.87 1.37-1.01 3.37-1.01zM20.39 9l-6 6H18l6-6h-3.61zm-3.25 2.61H9.88c-2.22 0-2.6.12-3.55 1.07C5.44 13.57 4 15 4 15h3.15l.75-.75c.49-.49.75-.55 1.78-.55h5.37l2.09-2.09z" fill="#E10600" />
          </g>
          {showOfficial && (
            <path d="M9.6 11.24h7.91L19.75 9H9.39c-2.85 0-3.62.34-5.17 1.81C2.71 12.3 0 15 0 15h3.38c.77-.75 2.2-2.13 2.85-2.75.92-.87 1.37-1.01 3.37-1.01zM20.39 9l-6 6H18l6-6h-3.61zm-3.25 2.61H9.88c-2.22 0-2.6.12-3.55 1.07C5.44 13.57 4 15 4 15h3.15l.75-.75c.49-.49.75-.55 1.78-.55h5.37l2.09-2.09z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M8.5505 9.8881c.921 0 1.6574.2303 2.2209.7423.3848.3485.5999.8454.5939 1.3665a1.9081 1.9081 0 0 1-.5939 1.3726c-.5272.4848-1.3483.7423-2.221.7423-.8725 0-1.6785-.2575-2.2148-.7423-.3908-.3485-.609-.8484-.603-1.3726 0-.518.2182-1.015.603-1.3665.5-.4545 1.3847-.7423 2.2149-.7423zm.003 3.6692c.4606 0 .8878-.1606 1.1878-.4575.2999-.2999.4332-.6605.4332-1.1029 0-.4242-.1484-.821-.4333-1.1029-.2938-.2908-.7332-.4545-1.1877-.4545s-.8938.1637-1.1907.4545c-.2848.2818-.4333.6787-.4333 1.103-.006.409.1485.806.4333 1.1029.2969.2939.7332.4575 1.1907.4575zm-4.8418-1.9665c.1605.0424.315.094.4666.1636a1.352 1.352 0 0 1 .3787.2576c.197.206.309.4817.306.7665a.9643.9643 0 0 1-.3787.7788 2.0662 2.0662 0 0 1-.709.3485 3.7231 3.7231 0 0 1-1.1938.1697c-.352 0-.5467-.0406-.8138-.0962l-.077-.016c-.294-.0666-.5817-.1575-.8575-.2787a.0695.0695 0 0 0-.0424-.0121c-.0454 0-.0818.0394-.0818.0848v.203H.1212v-1.4786h.5242a.7559.7559 0 0 0 .1363.418c.2121.2607.4394.3607.6575.4395.3666.1212.7514.1848 1.1362.1969.5526 0 .8756-.134.9455-.163l.009-.0037.0062-.0023c.0616-.0226.3119-.1143.3119-.3916 0-.2743-.2338-.334-.387-.373l-.022-.0058c-.1708-.046-.562-.0872-.9897-.1323l-.1526-.016c-.4848-.0515-.9696-.1273-1.1968-.1758-.4977-.1097-.6942-.2917-.816-.4045l-.0082-.0076A1.0192 1.0192 0 0 1 0 11.1608c0-.497.3394-.797.7575-.9817.4454-.2.9756-.288 1.4392-.288.8211.0031 1.4877.2697 1.727.394.097.0515.1455-.0121.1455-.0606v-.1484h.5272v1.2876h-.4727a.9056.9056 0 0 0-.2939-.4909 1.289 1.289 0 0 0-.297-.1787c-.3968-.1667-.821-.2515-1.2513-.2455-.4423 0-.8665.085-1.0786.2153-.1333.0818-.2.1848-.2.306 0 .1727.1454.2424.2182.2636.1967.0597.6328.103.972.1369.0736.0073.1426.0142.2036.0206.3272.0334 1.012.1243 1.315.2zm18.1673-.9966v-.4787H24v.4696h-.4757c-.1727 0-.2424.0334-.3727.1788l-1.4271 1.63a.098.098 0 0 0-.0182.0698v.7423a1.106 1.106 0 0 0 .0121.103.1496.1496 0 0 0 .1.0909.9368.9368 0 0 0 .1303.009h.4848v.4698h-2.5724v-.4697h.4606a.9343.9343 0 0 0 .1302-.0091.1627.1627 0 0 0 .1031-.091.5626.5626 0 0 0 .009-.1v-.7422c0-.0242 0-.0242-.0333-.0636a606.7592 606.7592 0 0 0-1.4119-1.6028c-.0758-.0788-.2061-.2061-.406-.2061h-.4576v-.4696h2.5876v.4696h-.3121c-.0697 0-.1182.0697-.0576.1455 0 0 .8696 1.0392.8787 1.0513.0091.0122.0152.0122.0273.003.0121-.009.8938-1.0453.8999-1.0543a.0912.0912 0 0 0-.0182-.1273.1095.1095 0 0 0-.0606-.0182zm-6.284-.0031h.4848c.2212 0 .2606.0848.2636.2909l.0273 1.5664-2.5815-2.324H11.944v.4697h.412c.297 0 .3182.1636.3182.309v2.2138c.0004.1285.0009.295-.1818.295h-.506v.4667h2.1634v-.4697h-.5273c-.212 0-.2211-.097-.2242-.303v-1.8816l2.9724 2.6511h.7575l-.0394-2.9966c.003-.218.0182-.2908.2424-.2908h.4726v-.4697H15.595Z" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <path d="M8.5505 9.8881c.921 0 1.6574.2303 2.2209.7423.3848.3485.5999.8454.5939 1.3665a1.9081 1.9081 0 0 1-.5939 1.3726c-.5272.4848-1.3483.7423-2.221.7423-.8725 0-1.6785-.2575-2.2148-.7423-.3908-.3485-.609-.8484-.603-1.3726 0-.518.2182-1.015.603-1.3665.5-.4545 1.3847-.7423 2.2149-.7423zm.003 3.6692c.4606 0 .8878-.1606 1.1878-.4575.2999-.2999.4332-.6605.4332-1.1029 0-.4242-.1484-.821-.4333-1.1029-.2938-.2908-.7332-.4545-1.1877-.4545s-.8938.1637-1.1907.4545c-.2848.2818-.4333.6787-.4333 1.103-.006.409.1485.806.4333 1.1029.2969.2939.7332.4575 1.1907.4575zm-4.8418-1.9665c.1605.0424.315.094.4666.1636a1.352 1.352 0 0 1 .3787.2576c.197.206.309.4817.306.7665a.9643.9643 0 0 1-.3787.7788 2.0662 2.0662 0 0 1-.709.3485 3.7231 3.7231 0 0 1-1.1938.1697c-.352 0-.5467-.0406-.8138-.0962l-.077-.016c-.294-.0666-.5817-.1575-.8575-.2787a.0695.0695 0 0 0-.0424-.0121c-.0454 0-.0818.0394-.0818.0848v.203H.1212v-1.4786h.5242a.7559.7559 0 0 0 .1363.418c.2121.2607.4394.3607.6575.4395.3666.1212.7514.1848 1.1362.1969.5526 0 .8756-.134.9455-.163l.009-.0037.0062-.0023c.0616-.0226.3119-.1143.3119-.3916 0-.2743-.2338-.334-.387-.373l-.022-.0058c-.1708-.046-.562-.0872-.9897-.1323l-.1526-.016c-.4848-.0515-.9696-.1273-1.1968-.1758-.4977-.1097-.6942-.2917-.816-.4045l-.0082-.0076A1.0192 1.0192 0 0 1 0 11.1608c0-.497.3394-.797.7575-.9817.4454-.2.9756-.288 1.4392-.288.8211.0031 1.4877.2697 1.727.394.097.0515.1455-.0121.1455-.0606v-.1484h.5272v1.2876h-.4727a.9056.9056 0 0 0-.2939-.4909 1.289 1.289 0 0 0-.297-.1787c-.3968-.1667-.821-.2515-1.2513-.2455-.4423 0-.8665.085-1.0786.2153-.1333.0818-.2.1848-.2.306 0 .1727.1454.2424.2182.2636.1967.0597.6328.103.972.1369.0736.0073.1426.0142.2036.0206.3272.0334 1.012.1243 1.315.2zm18.1673-.9966v-.4787H24v.4696h-.4757c-.1727 0-.2424.0334-.3727.1788l-1.4271 1.63a.098.098 0 0 0-.0182.0698v.7423a1.106 1.106 0 0 0 .0121.103.1496.1496 0 0 0 .1.0909.9368.9368 0 0 0 .1303.009h.4848v.4698h-2.5724v-.4697h.4606a.9343.9343 0 0 0 .1302-.0091.1627.1627 0 0 0 .1031-.091.5626.5626 0 0 0 .009-.1v-.7422c0-.0242 0-.0242-.0333-.0636a606.7592 606.7592 0 0 0-1.4119-1.6028c-.0758-.0788-.2061-.2061-.406-.2061h-.4576v-.4696h2.5876v.4696h-.3121c-.0697 0-.1182.0697-.0576.1455 0 0 .8696 1.0392.8787 1.0513.0091.0122.0152.0122.0273.003.0121-.009.8938-1.0453.8999-1.0543a.0912.0912 0 0 0-.0182-.1273.1095.1095 0 0 0-.0606-.0182zm-6.284-.0031h.4848c.2212 0 .2606.0848.2636.2909l.0273 1.5664-2.5815-2.324H11.944v.4697h.412c.297 0 .3182.1636.3182.309v2.2138c.0004.1285.0009.295-.1818.295h-.506v.4667h2.1634v-.4697h-.5273c-.212 0-.2211-.097-.2242-.303v-1.8816l2.9724 2.6511h.7575l-.0394-2.9966c.003-.218.0182-.2908.2424-.2908h.4726v-.4697H15.595Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="#00C300" />
          </g>
          {showOfficial && (
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M12 8.236C5.872 8.236.905 9.93.905 12.002S5.872 15.767 12 15.767c6.127 0 11.094-1.693 11.094-3.765 0-2.073-4.967-3.766-11.094-3.766zm-5.698 6.24c-.656.005-1.233-.4-1.3-1.101a1.415 1.415 0 0 1 .294-1.02c.195-.254.525-.465.804-.517.09-.017.213-.006.264.054.079.093.056.194-.023.234-.213.109-.47.295-.597.55a.675.675 0 0 0 .034.696c.263.397.997.408 1.679-.225.169-.156.32-.304.473-.48.3-.344.4-.47.8-1.024.005-.006.006-.014.004-.018-.003-.007-.009-.01-.02-.01-.267.007-.5.087-.725.255-.065.048-.159.041-.2-.021-.046-.07-.013-.163.062-.215.363-.253.76-.298 1.166-.367 0 0 .028.002.051-.03.167-.213.292-.405.47-.621.178-.22.41-.42.586-.572.246-.212.404-.283.564-.37.043-.022-.005-.049-.018-.049-.896-.168-1.827-.386-2.717-.056-.616.23-.887.718-.757 1.045.093.231.397.27.683.13a1.55 1.55 0 0 0 .611-.544c.087-.134.27-.038.171.195-.26.611-.757 1.097-1.363 1.118-.516.016-.849-.363-.848-.831.002-.924 1.03-1.532 2.11-1.622 1.301-.108 2.533.239 3.825.395.989.12 1.938.123 2.932-.106.118-.025.2.05.193.168-.01.172-.143.337-.47.516-.373.204-.763.266-1.17.27-.984.008-1.901-.376-2.85-.582.002.041.012.091-.023.117-.525.388-1 .782-1.318 1.334-.011.013-.005.025.013.024.277-.015.525-.022.783-.042.045-.004.047-.015.043-.048a.64.64 0 0 1 .2-.558c.172-.153.387-.17.53-.06.16.126.147.353.058.523a.63.63 0 0 1-.382.31s-.03.006-.026.034c.006.043.2.151.217.18.017.027.008.07-.021.102a.123.123 0 0 1-.095.045c-.033 0-.053-.012-.096-.035a.92.92 0 0 1-.27-.217c-.024-.031-.037-.032-.099-.029-.279.017-.714.059-1.009.096-.071.008-.082.022-.096.047-.47.775-.972 1.61-1.523 2.17-.592.6-1.083.758-1.604.762zM19.05 10.71c-.091.158-1.849 2.834-1.96 3.11-.035.088-.04.155-.004.204.092.124.297.051.425-.038.381-.262.645-.58.937-.858.017-.013.046-.018.065 0 .043.04.106.091.15.137a.04.04 0 0 1 .002.057 5.873 5.873 0 0 1-.904.911c-.47.364-.939.457-1.172.224a.508.508 0 0 1-.14-.316c-.002-.057-.031-.06-.058-.034-.278.275-.76.579-1.198.362-.366-.18-.451-.618-.383-.986.001-.008-.006-.06-.051-.03a1.28 1.28 0 0 1-.3.162.853.853 0 0 1-.366.077.518.518 0 0 1-.451-.253.759.759 0 0 1-.095-.347c-.001-.011-.017-.032-.033-.005-.3.457-.579.899-.875 1.363-.016.022-.03.036-.06.037l-.587.001c-.036 0-.053-.028-.034-.063.104-.2.674-1.03 1.06-1.736.107-.194.085-.294.019-.337-.083-.054-.248.027-.387.133-.379.287-.697.735-.859.935-.095.117-.185.291-.433.56-.391.425-.91.669-1.408.5a.848.848 0 0 1-.546-.58c-.015-.052-.044-.066-.073-.032-.08.1-.245.249-.383.342-.015.011-.052.033-.084.017a.851.851 0 0 1-.152-.199.07.07 0 0 1 .016-.08c.197-.173.305-.271.391-.38.064-.08.113-.17.17-.315.12-.302.393-.866.938-1.158a1.81 1.81 0 0 1 .652-.219c.1-.01.183.002.213.08.011.033.039.105.056.158.011.032.003.057-.035.071-.32.122-.643.311-.865.61-.253.338-.321.746-.152.98.123.17.322.2.514.139.29-.092.538-.363.666-.663.138-.329.16-.717.058-1.059-.016-.059-.001-.104.037-.136.077-.063.184-.112.215-.128a.14.14 0 0 1 .182.045c.106.157.163.378.17.607.006.049.026.05.05.025.19-.202.366-.418.568-.58.185-.147.422-.267.643-.262.286.006.428.2.419.546-.001.044.03.04.051.011a1.19 1.19 0 0 1 .24-.264c.198-.163.4-.236.611-.222.26.02.468.257.425.527a.53.53 0 0 1-.281.406.362.362 0 0 1-.405-.044.336.336 0 0 1-.096-.322c.005-.025-.027-.048-.054-.02-.254.264-.273.606-.107.76.183.17.458.056.658-.075.366-.239.65-.563.979-.813.218-.166.467-.314.746-.351a.87.87 0 0 1 .454.052c.2.081.326.25.342.396.004.043.036.048.063.01.158-.246 1.005-1.517 1.075-1.65.02-.041.044-.047.089-.047h.606c.035 0 .051.02.036.047zm-2.32 2.204a.053.053 0 0 0-.003.04c.003.02.03.04.056.05.01.003.015.01.004.032-.075.16-.143.252-.237.391a1.472 1.472 0 0 1-.3.325c-.178.147-.424.307-.628.2-.09-.047-.13-.174-.127-.276.004-.288.132-.584.369-.875.288-.355.607-.539.816-.438.216.103.148.354.05.55zm-5.949-1.881a.398.398 0 0 1 .132-.345c.057-.05.133-.062.18-.022.052.045.027.157-.026.234a.43.43 0 0 1-.245.177c-.018.004-.034-.004-.041-.044zM12 7.5C5.34 7.5 0 9.497 0 12c0 2.488 5.383 4.5 12 4.5s12-2.02 12-4.5-5.383-4.5-12-4.5zm0 8.608C5.649 16.108.5 14.27.5 12.002.5 9.733 5.65 7.895 12 7.895s11.498 1.838 11.498 4.107c0 2.268-5.148 4.106-11.498 4.106z" fill="#00274E" />
          </g>
          {showOfficial && (
            <path d="M12 8.236C5.872 8.236.905 9.93.905 12.002S5.872 15.767 12 15.767c6.127 0 11.094-1.693 11.094-3.765 0-2.073-4.967-3.766-11.094-3.766zm-5.698 6.24c-.656.005-1.233-.4-1.3-1.101a1.415 1.415 0 0 1 .294-1.02c.195-.254.525-.465.804-.517.09-.017.213-.006.264.054.079.093.056.194-.023.234-.213.109-.47.295-.597.55a.675.675 0 0 0 .034.696c.263.397.997.408 1.679-.225.169-.156.32-.304.473-.48.3-.344.4-.47.8-1.024.005-.006.006-.014.004-.018-.003-.007-.009-.01-.02-.01-.267.007-.5.087-.725.255-.065.048-.159.041-.2-.021-.046-.07-.013-.163.062-.215.363-.253.76-.298 1.166-.367 0 0 .028.002.051-.03.167-.213.292-.405.47-.621.178-.22.41-.42.586-.572.246-.212.404-.283.564-.37.043-.022-.005-.049-.018-.049-.896-.168-1.827-.386-2.717-.056-.616.23-.887.718-.757 1.045.093.231.397.27.683.13a1.55 1.55 0 0 0 .611-.544c.087-.134.27-.038.171.195-.26.611-.757 1.097-1.363 1.118-.516.016-.849-.363-.848-.831.002-.924 1.03-1.532 2.11-1.622 1.301-.108 2.533.239 3.825.395.989.12 1.938.123 2.932-.106.118-.025.2.05.193.168-.01.172-.143.337-.47.516-.373.204-.763.266-1.17.27-.984.008-1.901-.376-2.85-.582.002.041.012.091-.023.117-.525.388-1 .782-1.318 1.334-.011.013-.005.025.013.024.277-.015.525-.022.783-.042.045-.004.047-.015.043-.048a.64.64 0 0 1 .2-.558c.172-.153.387-.17.53-.06.16.126.147.353.058.523a.63.63 0 0 1-.382.31s-.03.006-.026.034c.006.043.2.151.217.18.017.027.008.07-.021.102a.123.123 0 0 1-.095.045c-.033 0-.053-.012-.096-.035a.92.92 0 0 1-.27-.217c-.024-.031-.037-.032-.099-.029-.279.017-.714.059-1.009.096-.071.008-.082.022-.096.047-.47.775-.972 1.61-1.523 2.17-.592.6-1.083.758-1.604.762zM19.05 10.71c-.091.158-1.849 2.834-1.96 3.11-.035.088-.04.155-.004.204.092.124.297.051.425-.038.381-.262.645-.58.937-.858.017-.013.046-.018.065 0 .043.04.106.091.15.137a.04.04 0 0 1 .002.057 5.873 5.873 0 0 1-.904.911c-.47.364-.939.457-1.172.224a.508.508 0 0 1-.14-.316c-.002-.057-.031-.06-.058-.034-.278.275-.76.579-1.198.362-.366-.18-.451-.618-.383-.986.001-.008-.006-.06-.051-.03a1.28 1.28 0 0 1-.3.162.853.853 0 0 1-.366.077.518.518 0 0 1-.451-.253.759.759 0 0 1-.095-.347c-.001-.011-.017-.032-.033-.005-.3.457-.579.899-.875 1.363-.016.022-.03.036-.06.037l-.587.001c-.036 0-.053-.028-.034-.063.104-.2.674-1.03 1.06-1.736.107-.194.085-.294.019-.337-.083-.054-.248.027-.387.133-.379.287-.697.735-.859.935-.095.117-.185.291-.433.56-.391.425-.91.669-1.408.5a.848.848 0 0 1-.546-.58c-.015-.052-.044-.066-.073-.032-.08.1-.245.249-.383.342-.015.011-.052.033-.084.017a.851.851 0 0 1-.152-.199.07.07 0 0 1 .016-.08c.197-.173.305-.271.391-.38.064-.08.113-.17.17-.315.12-.302.393-.866.938-1.158a1.81 1.81 0 0 1 .652-.219c.1-.01.183.002.213.08.011.033.039.105.056.158.011.032.003.057-.035.071-.32.122-.643.311-.865.61-.253.338-.321.746-.152.98.123.17.322.2.514.139.29-.092.538-.363.666-.663.138-.329.16-.717.058-1.059-.016-.059-.001-.104.037-.136.077-.063.184-.112.215-.128a.14.14 0 0 1 .182.045c.106.157.163.378.17.607.006.049.026.05.05.025.19-.202.366-.418.568-.58.185-.147.422-.267.643-.262.286.006.428.2.419.546-.001.044.03.04.051.011a1.19 1.19 0 0 1 .24-.264c.198-.163.4-.236.611-.222.26.02.468.257.425.527a.53.53 0 0 1-.281.406.362.362 0 0 1-.405-.044.336.336 0 0 1-.096-.322c.005-.025-.027-.048-.054-.02-.254.264-.273.606-.107.76.183.17.458.056.658-.075.366-.239.65-.563.979-.813.218-.166.467-.314.746-.351a.87.87 0 0 1 .454.052c.2.081.326.25.342.396.004.043.036.048.063.01.158-.246 1.005-1.517 1.075-1.65.02-.041.044-.047.089-.047h.606c.035 0 .051.02.036.047zm-2.32 2.204a.053.053 0 0 0-.003.04c.003.02.03.04.056.05.01.003.015.01.004.032-.075.16-.143.252-.237.391a1.472 1.472 0 0 1-.3.325c-.178.147-.424.307-.628.2-.09-.047-.13-.174-.127-.276.004-.288.132-.584.369-.875.288-.355.607-.539.816-.438.216.103.148.354.05.55zm-5.949-1.881a.398.398 0 0 1 .132-.345c.057-.05.133-.062.18-.022.052.045.027.157-.026.234a.43.43 0 0 1-.245.177c-.018.004-.034-.004-.041-.044zM12 7.5C5.34 7.5 0 9.497 0 12c0 2.488 5.383 4.5 12 4.5s12-2.02 12-4.5-5.383-4.5-12-4.5zm0 8.608C5.649 16.108.5 14.27.5 12.002.5 9.733 5.65 7.895 12 7.895s11.498 1.838 11.498 4.107c0 2.268-5.148 4.106-11.498 4.106z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M16.597 12.45h.025l.579-3.166c.066-.36.214-.488.63-.488h.58c.307 0 .481.118.481.395 0 .064-.009.135-.026.216l-1.278 5.285c-.078.357-.195.512-.635.512h-.696c-.396 0-.51-.138-.598-.495l-.799-3.449h-.015l-.807 3.455c-.081.363-.195.49-.588.49h-.697c-.449 0-.56-.145-.642-.497l-1.269-5.3c-.016-.082-.036-.153-.036-.216 0-.278.18-.396.49-.396h.69c.417 0 .57.126.635.488l.575 3.167h.015l.738-3.167c.085-.362.233-.488.63-.488h.653c.391 0 .543.126.63.488l.735 3.167zM.498 15.205c-.349 0-.498-.144-.498-.496V9.3c0-.355.15-.503.498-.503h1.835c1.984 0 2.736.747 2.736 2.02 0 .776-.42 1.425-1.35 1.75l1.467 2.025c.089.124.125.22.125.306 0 .205-.24.307-.508.307H3.72c-.32 0-.444-.126-.669-.49l-1.206-1.931h-.019v1.926c0 .353-.15.495-.51.495H.498zm19.479 0c-.35 0-.485-.127-.485-.478V9.285c0-.362.136-.49.485-.49h3.251c.356 0 .486.127.486.489v.462c0 .347-.13.478-.486.478h-1.867v1.061h1.583c.358 0 .484.13.484.49v.426c0 .348-.126.477-.485.477H21.36v1.095h2.143c.363 0 .497.133.497.49v.463c0 .351-.134.478-.497.478h-3.526zm-13.411 0c-.351 0-.498-.144-.498-.496V9.3c0-.355.147-.503.498-.503h3.211c.354 0 .504.149.504.503v.429c0 .347-.15.496-.504.496H7.928v1.06H9.49c.36 0 .511.146.511.507v.388c0 .35-.15.499-.51.499H7.927v1.094h2.131c.356 0 .51.146.51.512v.423c0 .352-.154.495-.51.495H6.566zM2.351 11.68c.557 0 .793-.234.793-.743s-.236-.745-.793-.745h-.526v1.488h.526Z" fill="#CC071E" />
          </g>
          {showOfficial && (
            <path d="M16.597 12.45h.025l.579-3.166c.066-.36.214-.488.63-.488h.58c.307 0 .481.118.481.395 0 .064-.009.135-.026.216l-1.278 5.285c-.078.357-.195.512-.635.512h-.696c-.396 0-.51-.138-.598-.495l-.799-3.449h-.015l-.807 3.455c-.081.363-.195.49-.588.49h-.697c-.449 0-.56-.145-.642-.497l-1.269-5.3c-.016-.082-.036-.153-.036-.216 0-.278.18-.396.49-.396h.69c.417 0 .57.126.635.488l.575 3.167h.015l.738-3.167c.085-.362.233-.488.63-.488h.653c.391 0 .543.126.63.488l.735 3.167zM.498 15.205c-.349 0-.498-.144-.498-.496V9.3c0-.355.15-.503.498-.503h1.835c1.984 0 2.736.747 2.736 2.02 0 .776-.42 1.425-1.35 1.75l1.467 2.025c.089.124.125.22.125.306 0 .205-.24.307-.508.307H3.72c-.32 0-.444-.126-.669-.49l-1.206-1.931h-.019v1.926c0 .353-.15.495-.51.495H.498zm19.479 0c-.35 0-.485-.127-.485-.478V9.285c0-.362.136-.49.485-.49h3.251c.356 0 .486.127.486.489v.462c0 .347-.13.478-.486.478h-1.867v1.061h1.583c.358 0 .484.13.484.49v.426c0 .348-.126.477-.485.477H21.36v1.095h2.143c.363 0 .497.133.497.49v.463c0 .351-.134.478-.497.478h-3.526zm-13.411 0c-.351 0-.498-.144-.498-.496V9.3c0-.355.147-.503.498-.503h3.211c.354 0 .504.149.504.503v.429c0 .347-.15.496-.504.496H7.928v1.06H9.49c.36 0 .511.146.511.507v.388c0 .35-.15.499-.51.499H7.927v1.094h2.131c.356 0 .51.146.51.512v.423c0 .352-.154.495-.51.495H6.566zM2.351 11.68c.557 0 .793-.234.793-.743s-.236-.745-.793-.745h-.526v1.488h.526Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.04 3.858c1.32.019 2.634.335 3.78.989.549.31.957.642 1.238.895a6.912 6.912 0 0 0-2.25 3.04c-.06.165-.123.354-.183.546a6.856 6.856 0 0 0-.252 1.605c-.003.162.002.374.003.578.012.242.05.519.08.789a7.013 7.013 0 0 0 1.753 3.586 6.889 6.889 0 0 0 1.87 1.42 7.792 7.792 0 0 1-2.629 2.166 7.717 7.717 0 0 1-3.846.808 9.16 9.16 0 0 1-.22-.013 7.695 7.695 0 0 1-1.504-.247 8.201 8.201 0 0 1-2.83-1.354 7.056 7.056 0 0 1-1.894-2.1c-.22-.38-1.49-2.644-.769-5.452A7.261 7.261 0 0 1 5.93 8.18a5.513 5.513 0 0 0-2.105 1.082C4.12 8.573 5.306 6 8.217 4.66a8.944 8.944 0 0 1 3.823-.8zm5.702 2.508c.202.126.464.309.736.572.108.103.478.468.82 1.054.413.703.549 1.327.62 1.65a5.52 5.52 0 0 1 .013 2.302 7.133 7.133 0 0 0-2.044-1.688 7.243 7.243 0 0 0-1.551.3 6.834 6.834 0 0 0-1.05.422 6.058 6.058 0 0 1 .267-1.563 5.923 5.923 0 0 1 .806-1.643 6.255 6.255 0 0 1 1.383-1.406Z" fill="#0072EF" />
          </g>
          {showOfficial && (
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.04 3.858c1.32.019 2.634.335 3.78.989.549.31.957.642 1.238.895a6.912 6.912 0 0 0-2.25 3.04c-.06.165-.123.354-.183.546a6.856 6.856 0 0 0-.252 1.605c-.003.162.002.374.003.578.012.242.05.519.08.789a7.013 7.013 0 0 0 1.753 3.586 6.889 6.889 0 0 0 1.87 1.42 7.792 7.792 0 0 1-2.629 2.166 7.717 7.717 0 0 1-3.846.808 9.16 9.16 0 0 1-.22-.013 7.695 7.695 0 0 1-1.504-.247 8.201 8.201 0 0 1-2.83-1.354 7.056 7.056 0 0 1-1.894-2.1c-.22-.38-1.49-2.644-.769-5.452A7.261 7.261 0 0 1 5.93 8.18a5.513 5.513 0 0 0-2.105 1.082C4.12 8.573 5.306 6 8.217 4.66a8.944 8.944 0 0 1 3.823-.8zm5.702 2.508c.202.126.464.309.736.572.108.103.478.468.82 1.054.413.703.549 1.327.62 1.65a5.52 5.52 0 0 1 .013 2.302 7.133 7.133 0 0 0-2.044-1.688 7.243 7.243 0 0 0-1.551.3 6.834 6.834 0 0 0-1.05.422 6.058 6.058 0 0 1 .267-1.563 5.923 5.923 0 0 1 .806-1.643 6.255 6.255 0 0 1 1.383-1.406Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M0 .279c4.623 0 10.953-.235 15.498-.117 6.099.156 8.39 2.813 8.468 9.374.077 3.71 0 14.335 0 14.335h-6.598c0-9.296.04-10.83 0-13.759-.078-2.578-.814-3.807-2.795-4.041-2.097-.235-7.975-.04-7.975-.04v17.84H0Z" fill="#000000" />
          </g>
          {showOfficial && (
            <path d="M0 .279c4.623 0 10.953-.235 15.498-.117 6.099.156 8.39 2.813 8.468 9.374.077 3.71 0 14.335 0 14.335h-6.598c0-9.296.04-10.83 0-13.759-.078-2.578-.814-3.807-2.795-4.041-2.097-.235-7.975-.04-7.975-.04v17.84H0Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M23.922 10.66a11.925 11.925 0 0 0-1.93-5.299 12.002 12.002 0 0 0-1.362-1.692A11.993 11.993 0 0 0 15.271.455a11.916 11.916 0 0 0-2.88-.444c-.237-.005-.474-.015-.71-.004-.345.016-.69.036-1.033.077-.385.046-.77.108-1.15.182a11.947 11.947 0 0 0-4.906 2.297A12.012 12.012 0 0 0 .394 8.94a11.886 11.886 0 0 0-.393 2.883c-.009.51.016 1.019.073 1.526a11.954 11.954 0 0 0 3.103 6.79 11.982 11.982 0 0 0 8.442 3.858c.013 0 .818-.002.868-.004.518-.02 1.032-.076 1.543-.162a11.947 11.947 0 0 0 6.173-3.072 11.975 11.975 0 0 0 3.667-7.028c.053-.406.087-.815.113-1.224.038-.617.006-1.234-.062-1.848zM4.5 11.777c-.052.3-.094.601-.097.906-.003.253-.005.506.004.76.005.148.031.297.051.445.033.252-.067.455-.297.56a.473.473 0 0 1-.227.035c-.217-.019-.433-.05-.65-.077-.073-.01-.147-.017-.22-.03-.017-.003-.04-.025-.042-.041-.041-.249-.086-.497-.115-.747-.024-.206-.03-.413-.043-.62-.006-.118-.014-.236-.013-.355.002-.197.005-.394.017-.59.014-.218.034-.436.06-.653.02-.177.045-.355.083-.529.062-.29.134-.579.207-.867.07-.275.162-.542.273-.804.08-.187.15-.377.235-.56.09-.195.188-.387.295-.573.12-.21.251-.414.382-.619.083-.13.17-.259.26-.384.074-.102.155-.197.234-.295.072-.088.142-.178.217-.263a7.6 7.6 0 0 1 .25-.274c.123-.128.247-.254.373-.378.087-.085.176-.17.27-.248.173-.145.346-.293.528-.427.227-.168.46-.329.697-.483.186-.12.375-.235.572-.336.253-.129.513-.244.773-.359.159-.07.321-.133.486-.19a11.02 11.02 0 0 1 1.312-.359c.279-.05.56-.086.841-.12.194-.023.39-.042.586-.044.312-.003.625-.004.936.019.342.024.683.07 1.023.118.182.026.362.071.54.117.288.075.578.146.86.24.246.08.487.182.724.288.26.116.513.245.767.374.107.054.21.118.311.183.195.124.392.246.58.38.189.135.368.282.55.424.016.012.03.026.05.045-.165.109-.325.211-.481.318-.168.116-.334.235-.5.353-.105.073-.211.145-.315.219-.13.092-.258.187-.387.28l-.45.321c-.11.08-.218.162-.327.243-.129.096-.26.19-.387.288-.217.167-.443.138-.643.003a6.527 6.527 0 0 0-1.757-.83 5.884 5.884 0 0 0-1.33-.246c-.19-.013-.381-.018-.572-.025a4.367 4.367 0 0 0-.792.047 23.89 23.89 0 0 0-.62.105 5.084 5.084 0 0 0-.795.225 6.08 6.08 0 0 0-.527.218 7.22 7.22 0 0 0-.574.294c-.178.103-.347.222-.516.339-.108.073-.214.15-.313.233-.149.124-.292.255-.435.385-.26.235-.486.5-.697.778-.132.174-.25.36-.368.545a5.76 5.76 0 0 0-.489.967 6.298 6.298 0 0 0-.368 1.271zm13.278 5.496c-.175-.122-.353-.242-.527-.366a.5.5 0 0 1-.154-.237l-.222-.55-.21-.532c-.07-.17-.141-.34-.21-.512-.071-.176-.137-.355-.213-.53-.088-.204-.14-.427-.28-.606a4.738 4.738 0 0 0-.288-.337 2.613 2.613 0 0 0-.498-.413c-.14-.09-.298-.12-.457-.148-.449-.081-.896-.166-1.345-.248l-1.368-.246c-.39-.07-.78-.137-1.166-.218-.258-.054-.494.162-.518.407-.023.246.167.456.375.508.56.141 1.118.293 1.677.442.662.175 1.324.347 1.984.527.22.06.416.173.597.313.22.17.4.375.53.62.084.163.151.336.22.506.071.177.14.355.202.534.093.268.182.537.27.806.055.164.11.328.16.492.075.237.147.475.22.712.05.163.099.327.147.49l.184.638c.048.164.098.327.144.492.07.242.14.485.204.729.033.126-.065.268-.2.287-.273.038-.547.07-.821.104-.182.023-.364.043-.546.063l-.66.07c-.28.029-.558.06-.837.09-.118.012-.236.03-.355.028a1.03 1.03 0 0 1-.688-.261c-.144-.126-.223-.292-.316-.451-.078-.135-.152-.272-.235-.403a12.841 12.841 0 0 0-.398-.602c-.134-.187-.28-.365-.423-.544a6.035 6.035 0 0 0-.229-.265 6.95 6.95 0 0 0-.757-.737 8.876 8.876 0 0 0-.641-.488 5.608 5.608 0 0 0-1.755-.803c-.436-.112-.878-.195-1.333-.187a3.542 3.542 0 0 0-.678.07c-.16.034-.309.022-.441-.089-.073-.06-.104-.144-.146-.223-.017-.032-.027-.068-.044-.109.072-.02.143-.042.216-.058a1.93 1.93 0 0 1 .227-.042c.195-.023.39-.053.584-.058.281-.007.564-.01.844.012a7.816 7.816 0 0 1 1.592.321c.24.076.473.175.704.274.387.166.727.407 1.051.673.214.175.419.36.603.567.225.252.449.506.66.77.15.186.282.389.419.587.228.332.43.681.62 1.037.048.089.093.18.133.272.064.153.199.2.341.183l.572-.07.7-.08c.27-.028.54-.054.81-.084.208-.024.416-.05.624-.08.117-.018.202-.132.208-.254.006-.108-.045-.2-.077-.296-.089-.272-.184-.542-.276-.813-.09-.263-.177-.525-.266-.787-.092-.276-.183-.551-.277-.826-.064-.188-.131-.375-.196-.563-.054-.156-.104-.312-.16-.467-.067-.186-.137-.37-.208-.555-.037-.096-.074-.192-.12-.284a1.22 1.22 0 0 0-.482-.514c-.2-.12-.424-.159-.641-.22-.64-.18-1.28-.356-1.92-.533l-.825-.23c-.218-.06-.435-.129-.657-.177-.259-.057-.433-.212-.57-.427a1.32 1.32 0 0 1-.202-.583.867.867 0 0 1 .12-.546.919.919 0 0 1 .44-.382.7.7 0 0 1 .411-.041c.322.06.645.112.968.168.227.04.454.083.681.121.268.045.536.086.803.13.193.032.386.067.579.1.224.037.448.072.671.11.195.034.389.073.584.103.126.019.249.042.362.102.054.029.11.06.156.1.163.146.326.295.484.447.141.136.279.276.413.42a.945.945 0 0 1 .217.392c.033.115.077.227.117.34l.167.471.212.595c.062.178.122.356.185.534l.176.497.188.544.093.268-.013.01zm.708.363a3.104 3.104 0 0 1-.37-.169c-.03-.016-.039-.076-.054-.117-.07-.197-.138-.395-.206-.592l-.23-.664-.23-.653c-.094-.267-.185-.534-.279-.8a78.3 78.3 0 0 0-.2-.565c-.037-.101-.073-.203-.113-.304-.063-.161-.179-.285-.296-.407-.1-.104-.199-.209-.304-.306a18.166 18.166 0 0 0-.605-.537c-.149-.125-.334-.167-.522-.197a66.347 66.347 0 0 1-.603-.098c-.247-.04-.493-.083-.739-.125l-.665-.113-1.026-.172c-.279-.048-.557-.098-.836-.145-.197-.033-.393-.075-.591-.089-.11-.007-.226.026-.335.056a.939.939 0 0 0-.395.235c-.118.113-.21.247-.272.402-.12.306-.101.606.007.909.071.197.173.376.317.528.142.15.307.258.513.306.248.058.493.129.74.196.44.12.881.24 1.322.362l.842.233.841.235c.266.074.48.224.621.46.07.118.117.252.168.382.062.156.119.315.175.474.079.224.156.45.233.675l.194.567.163.489.167.477.19.562.278.816c.01.03.021.058.028.088.01.042-.015.066-.052.07-.167.02-.335.035-.503.054-.084.01-.169.023-.253.032-.177.02-.355.037-.532.058-.189.021-.377.046-.566.068l-.726.082a.5.5 0 0 1-.122.005.085.085 0 0 1-.057-.037c-.068-.127-.129-.257-.198-.382a12.05 12.05 0 0 0-.733-1.196 10.987 10.987 0 0 0-.99-1.204 7.197 7.197 0 0 0-.595-.552 5.461 5.461 0 0 0-.628-.452 3.313 3.313 0 0 0-.704-.345c-.288-.093-.568-.21-.859-.29-.288-.077-.586-.116-.879-.177-.277-.057-.558-.056-.838-.072-.125-.007-.251.003-.377.01-.143.008-.286.017-.428.031a2.592 2.592 0 0 0-.247.04c-.16.03-.318.062-.491.096-.051-.16-.107-.319-.154-.481a5.498 5.498 0 0 1-.2-1.027 5.23 5.23 0 0 1-.021-1.028c.033-.479.113-.951.258-1.41.095-.3.2-.599.344-.88.096-.187.191-.374.298-.554.08-.137.178-.265.271-.394.073-.1.146-.201.225-.297.07-.084.146-.165.223-.243.128-.13.257-.26.392-.383.09-.084.19-.159.288-.234.105-.08.21-.16.32-.232.148-.096.299-.187.45-.275.135-.078.27-.157.411-.22.211-.093.427-.176.643-.257a2.85 2.85 0 0 1 .383-.12c.247-.054.495-.104.744-.14.21-.03.423-.052.634-.052.27 0 .542.015.81.042.466.046.917.156 1.354.323a6.039 6.039 0 0 1 1.819 1.068c.207.175.409.356.583.564.196.231.388.466.57.708.056.074.081.174.112.266.072.213.141.428.208.643.086.274.167.55.252.824.064.208.133.414.198.622.072.231.14.464.211.696l.15.477.165.534c.05.163.103.325.153.489l.117.39c.037.118.077.236.114.355l.291.928.275.865c.01.035.024.07.035.105.02.065-.015.113-.076.09zm.157-12.752a.484.484 0 0 1-.272.408.062.062 0 0 1-.054-.005c-.077-.06-.148-.127-.227-.184-.237-.173-.471-.35-.716-.512a8.86 8.86 0 0 0-.706-.428c-.246-.132-.502-.244-.756-.358a5.709 5.709 0 0 0-.501-.201c-.28-.095-.563-.186-.848-.267a7.965 7.965 0 0 0-1.091-.215c-.3-.042-.6-.076-.903-.081-.176-.003-.352-.015-.528-.009-.28.01-.56.024-.84.047-.209.017-.416.05-.623.08-.289.04-.573.101-.852.183-.236.07-.471.14-.705.217a4.57 4.57 0 0 0-.422.16 10.614 10.614 0 0 0-1.438.718c-.18.107-.352.232-.525.354a7.506 7.506 0 0 0-.394.296 12.185 12.185 0 0 0-.962.865c-.114.115-.219.24-.325.363-.11.128-.223.254-.327.387a8.572 8.572 0 0 0-.653.956c-.098.164-.187.334-.276.503a8.949 8.949 0 0 0-.253.51c-.08.177-.147.358-.216.54a7.726 7.726 0 0 0-.311.986c-.074.335-.149.67-.2 1.01a10.101 10.101 0 0 0-.047 2.328c.028.268.073.534.11.805-.215 0-.4-.063-.512-.256a.766.766 0 0 1-.08-.242 7.924 7.924 0 0 1-.083-.53 12.5 12.5 0 0 1-.07-.702 8.464 8.464 0 0 1-.021-.723 10.525 10.525 0 0 1 .282-2.28c.092-.394.216-.778.363-1.153.078-.198.151-.398.242-.59.13-.273.268-.544.414-.81.105-.192.222-.38.346-.561.145-.214.3-.42.455-.627.102-.135.207-.268.317-.396.105-.121.217-.237.328-.353a9.419 9.419 0 0 1 .578-.56c.18-.155.359-.31.545-.456.145-.114.299-.216.45-.32.13-.09.258-.18.392-.26a13.292 13.292 0 0 1 .975-.531c.146-.07.297-.133.447-.196.116-.05.231-.101.35-.142.248-.084.497-.163.747-.24.137-.043.275-.084.416-.112.299-.062.598-.123.9-.17a7.19 7.19 0 0 1 .743-.078c.325-.016.65-.019.976-.015.216.003.433.022.648.045a9.735 9.735 0 0 1 2.377.532c.432.16.86.332 1.264.56.28.157.557.318.829.49.206.13.405.276.6.424.177.134.35.274.514.423a.43.43 0 0 1 .13.373z" fill="#E62431" />
          </g>
          {showOfficial && (
            <path d="M23.922 10.66a11.925 11.925 0 0 0-1.93-5.299 12.002 12.002 0 0 0-1.362-1.692A11.993 11.993 0 0 0 15.271.455a11.916 11.916 0 0 0-2.88-.444c-.237-.005-.474-.015-.71-.004-.345.016-.69.036-1.033.077-.385.046-.77.108-1.15.182a11.947 11.947 0 0 0-4.906 2.297A12.012 12.012 0 0 0 .394 8.94a11.886 11.886 0 0 0-.393 2.883c-.009.51.016 1.019.073 1.526a11.954 11.954 0 0 0 3.103 6.79 11.982 11.982 0 0 0 8.442 3.858c.013 0 .818-.002.868-.004.518-.02 1.032-.076 1.543-.162a11.947 11.947 0 0 0 6.173-3.072 11.975 11.975 0 0 0 3.667-7.028c.053-.406.087-.815.113-1.224.038-.617.006-1.234-.062-1.848zM4.5 11.777c-.052.3-.094.601-.097.906-.003.253-.005.506.004.76.005.148.031.297.051.445.033.252-.067.455-.297.56a.473.473 0 0 1-.227.035c-.217-.019-.433-.05-.65-.077-.073-.01-.147-.017-.22-.03-.017-.003-.04-.025-.042-.041-.041-.249-.086-.497-.115-.747-.024-.206-.03-.413-.043-.62-.006-.118-.014-.236-.013-.355.002-.197.005-.394.017-.59.014-.218.034-.436.06-.653.02-.177.045-.355.083-.529.062-.29.134-.579.207-.867.07-.275.162-.542.273-.804.08-.187.15-.377.235-.56.09-.195.188-.387.295-.573.12-.21.251-.414.382-.619.083-.13.17-.259.26-.384.074-.102.155-.197.234-.295.072-.088.142-.178.217-.263a7.6 7.6 0 0 1 .25-.274c.123-.128.247-.254.373-.378.087-.085.176-.17.27-.248.173-.145.346-.293.528-.427.227-.168.46-.329.697-.483.186-.12.375-.235.572-.336.253-.129.513-.244.773-.359.159-.07.321-.133.486-.19a11.02 11.02 0 0 1 1.312-.359c.279-.05.56-.086.841-.12.194-.023.39-.042.586-.044.312-.003.625-.004.936.019.342.024.683.07 1.023.118.182.026.362.071.54.117.288.075.578.146.86.24.246.08.487.182.724.288.26.116.513.245.767.374.107.054.21.118.311.183.195.124.392.246.58.38.189.135.368.282.55.424.016.012.03.026.05.045-.165.109-.325.211-.481.318-.168.116-.334.235-.5.353-.105.073-.211.145-.315.219-.13.092-.258.187-.387.28l-.45.321c-.11.08-.218.162-.327.243-.129.096-.26.19-.387.288-.217.167-.443.138-.643.003a6.527 6.527 0 0 0-1.757-.83 5.884 5.884 0 0 0-1.33-.246c-.19-.013-.381-.018-.572-.025a4.367 4.367 0 0 0-.792.047 23.89 23.89 0 0 0-.62.105 5.084 5.084 0 0 0-.795.225 6.08 6.08 0 0 0-.527.218 7.22 7.22 0 0 0-.574.294c-.178.103-.347.222-.516.339-.108.073-.214.15-.313.233-.149.124-.292.255-.435.385-.26.235-.486.5-.697.778-.132.174-.25.36-.368.545a5.76 5.76 0 0 0-.489.967 6.298 6.298 0 0 0-.368 1.271zm13.278 5.496c-.175-.122-.353-.242-.527-.366a.5.5 0 0 1-.154-.237l-.222-.55-.21-.532c-.07-.17-.141-.34-.21-.512-.071-.176-.137-.355-.213-.53-.088-.204-.14-.427-.28-.606a4.738 4.738 0 0 0-.288-.337 2.613 2.613 0 0 0-.498-.413c-.14-.09-.298-.12-.457-.148-.449-.081-.896-.166-1.345-.248l-1.368-.246c-.39-.07-.78-.137-1.166-.218-.258-.054-.494.162-.518.407-.023.246.167.456.375.508.56.141 1.118.293 1.677.442.662.175 1.324.347 1.984.527.22.06.416.173.597.313.22.17.4.375.53.62.084.163.151.336.22.506.071.177.14.355.202.534.093.268.182.537.27.806.055.164.11.328.16.492.075.237.147.475.22.712.05.163.099.327.147.49l.184.638c.048.164.098.327.144.492.07.242.14.485.204.729.033.126-.065.268-.2.287-.273.038-.547.07-.821.104-.182.023-.364.043-.546.063l-.66.07c-.28.029-.558.06-.837.09-.118.012-.236.03-.355.028a1.03 1.03 0 0 1-.688-.261c-.144-.126-.223-.292-.316-.451-.078-.135-.152-.272-.235-.403a12.841 12.841 0 0 0-.398-.602c-.134-.187-.28-.365-.423-.544a6.035 6.035 0 0 0-.229-.265 6.95 6.95 0 0 0-.757-.737 8.876 8.876 0 0 0-.641-.488 5.608 5.608 0 0 0-1.755-.803c-.436-.112-.878-.195-1.333-.187a3.542 3.542 0 0 0-.678.07c-.16.034-.309.022-.441-.089-.073-.06-.104-.144-.146-.223-.017-.032-.027-.068-.044-.109.072-.02.143-.042.216-.058a1.93 1.93 0 0 1 .227-.042c.195-.023.39-.053.584-.058.281-.007.564-.01.844.012a7.816 7.816 0 0 1 1.592.321c.24.076.473.175.704.274.387.166.727.407 1.051.673.214.175.419.36.603.567.225.252.449.506.66.77.15.186.282.389.419.587.228.332.43.681.62 1.037.048.089.093.18.133.272.064.153.199.2.341.183l.572-.07.7-.08c.27-.028.54-.054.81-.084.208-.024.416-.05.624-.08.117-.018.202-.132.208-.254.006-.108-.045-.2-.077-.296-.089-.272-.184-.542-.276-.813-.09-.263-.177-.525-.266-.787-.092-.276-.183-.551-.277-.826-.064-.188-.131-.375-.196-.563-.054-.156-.104-.312-.16-.467-.067-.186-.137-.37-.208-.555-.037-.096-.074-.192-.12-.284a1.22 1.22 0 0 0-.482-.514c-.2-.12-.424-.159-.641-.22-.64-.18-1.28-.356-1.92-.533l-.825-.23c-.218-.06-.435-.129-.657-.177-.259-.057-.433-.212-.57-.427a1.32 1.32 0 0 1-.202-.583.867.867 0 0 1 .12-.546.919.919 0 0 1 .44-.382.7.7 0 0 1 .411-.041c.322.06.645.112.968.168.227.04.454.083.681.121.268.045.536.086.803.13.193.032.386.067.579.1.224.037.448.072.671.11.195.034.389.073.584.103.126.019.249.042.362.102.054.029.11.06.156.1.163.146.326.295.484.447.141.136.279.276.413.42a.945.945 0 0 1 .217.392c.033.115.077.227.117.34l.167.471.212.595c.062.178.122.356.185.534l.176.497.188.544.093.268-.013.01zm.708.363a3.104 3.104 0 0 1-.37-.169c-.03-.016-.039-.076-.054-.117-.07-.197-.138-.395-.206-.592l-.23-.664-.23-.653c-.094-.267-.185-.534-.279-.8a78.3 78.3 0 0 0-.2-.565c-.037-.101-.073-.203-.113-.304-.063-.161-.179-.285-.296-.407-.1-.104-.199-.209-.304-.306a18.166 18.166 0 0 0-.605-.537c-.149-.125-.334-.167-.522-.197a66.347 66.347 0 0 1-.603-.098c-.247-.04-.493-.083-.739-.125l-.665-.113-1.026-.172c-.279-.048-.557-.098-.836-.145-.197-.033-.393-.075-.591-.089-.11-.007-.226.026-.335.056a.939.939 0 0 0-.395.235c-.118.113-.21.247-.272.402-.12.306-.101.606.007.909.071.197.173.376.317.528.142.15.307.258.513.306.248.058.493.129.74.196.44.12.881.24 1.322.362l.842.233.841.235c.266.074.48.224.621.46.07.118.117.252.168.382.062.156.119.315.175.474.079.224.156.45.233.675l.194.567.163.489.167.477.19.562.278.816c.01.03.021.058.028.088.01.042-.015.066-.052.07-.167.02-.335.035-.503.054-.084.01-.169.023-.253.032-.177.02-.355.037-.532.058-.189.021-.377.046-.566.068l-.726.082a.5.5 0 0 1-.122.005.085.085 0 0 1-.057-.037c-.068-.127-.129-.257-.198-.382a12.05 12.05 0 0 0-.733-1.196 10.987 10.987 0 0 0-.99-1.204 7.197 7.197 0 0 0-.595-.552 5.461 5.461 0 0 0-.628-.452 3.313 3.313 0 0 0-.704-.345c-.288-.093-.568-.21-.859-.29-.288-.077-.586-.116-.879-.177-.277-.057-.558-.056-.838-.072-.125-.007-.251.003-.377.01-.143.008-.286.017-.428.031a2.592 2.592 0 0 0-.247.04c-.16.03-.318.062-.491.096-.051-.16-.107-.319-.154-.481a5.498 5.498 0 0 1-.2-1.027 5.23 5.23 0 0 1-.021-1.028c.033-.479.113-.951.258-1.41.095-.3.2-.599.344-.88.096-.187.191-.374.298-.554.08-.137.178-.265.271-.394.073-.1.146-.201.225-.297.07-.084.146-.165.223-.243.128-.13.257-.26.392-.383.09-.084.19-.159.288-.234.105-.08.21-.16.32-.232.148-.096.299-.187.45-.275.135-.078.27-.157.411-.22.211-.093.427-.176.643-.257a2.85 2.85 0 0 1 .383-.12c.247-.054.495-.104.744-.14.21-.03.423-.052.634-.052.27 0 .542.015.81.042.466.046.917.156 1.354.323a6.039 6.039 0 0 1 1.819 1.068c.207.175.409.356.583.564.196.231.388.466.57.708.056.074.081.174.112.266.072.213.141.428.208.643.086.274.167.55.252.824.064.208.133.414.198.622.072.231.14.464.211.696l.15.477.165.534c.05.163.103.325.153.489l.117.39c.037.118.077.236.114.355l.291.928.275.865c.01.035.024.07.035.105.02.065-.015.113-.076.09zm.157-12.752a.484.484 0 0 1-.272.408.062.062 0 0 1-.054-.005c-.077-.06-.148-.127-.227-.184-.237-.173-.471-.35-.716-.512a8.86 8.86 0 0 0-.706-.428c-.246-.132-.502-.244-.756-.358a5.709 5.709 0 0 0-.501-.201c-.28-.095-.563-.186-.848-.267a7.965 7.965 0 0 0-1.091-.215c-.3-.042-.6-.076-.903-.081-.176-.003-.352-.015-.528-.009-.28.01-.56.024-.84.047-.209.017-.416.05-.623.08-.289.04-.573.101-.852.183-.236.07-.471.14-.705.217a4.57 4.57 0 0 0-.422.16 10.614 10.614 0 0 0-1.438.718c-.18.107-.352.232-.525.354a7.506 7.506 0 0 0-.394.296 12.185 12.185 0 0 0-.962.865c-.114.115-.219.24-.325.363-.11.128-.223.254-.327.387a8.572 8.572 0 0 0-.653.956c-.098.164-.187.334-.276.503a8.949 8.949 0 0 0-.253.51c-.08.177-.147.358-.216.54a7.726 7.726 0 0 0-.311.986c-.074.335-.149.67-.2 1.01a10.101 10.101 0 0 0-.047 2.328c.028.268.073.534.11.805-.215 0-.4-.063-.512-.256a.766.766 0 0 1-.08-.242 7.924 7.924 0 0 1-.083-.53 12.5 12.5 0 0 1-.07-.702 8.464 8.464 0 0 1-.021-.723 10.525 10.525 0 0 1 .282-2.28c.092-.394.216-.778.363-1.153.078-.198.151-.398.242-.59.13-.273.268-.544.414-.81.105-.192.222-.38.346-.561.145-.214.3-.42.455-.627.102-.135.207-.268.317-.396.105-.121.217-.237.328-.353a9.419 9.419 0 0 1 .578-.56c.18-.155.359-.31.545-.456.145-.114.299-.216.45-.32.13-.09.258-.18.392-.26a13.292 13.292 0 0 1 .975-.531c.146-.07.297-.133.447-.196.116-.05.231-.101.35-.142.248-.084.497-.163.747-.24.137-.043.275-.084.416-.112.299-.062.598-.123.9-.17a7.19 7.19 0 0 1 .743-.078c.325-.016.65-.019.976-.015.216.003.433.022.648.045a9.735 9.735 0 0 1 2.377.532c.432.16.86.332 1.264.56.28.157.557.318.829.49.206.13.405.276.6.424.177.134.35.274.514.423a.43.43 0 0 1 .13.373z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 011.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z" fill="#1C2024" />
          </g>
          {showOfficial && (
            <path d="M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 011.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="#00C300" />
          </g>
          {showOfficial && (
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M24 15.2372a20.744 20.744 0 0 0-9.86-7.5087 31.2657 31.2657 0 0 1 6.9097 1.0135l-1.5536-1.3192A29.1614 29.1614 0 0 0 9.0497 5.509a29.0797 29.0797 0 0 0-6.4051.7036L0 8.032c.335 0 .8376-.021 1.1747-.021a25.1537 25.1537 0 0 1 20.4571 10.48ZM9.1963 12.9758h3.3334l-.3329 1.183h-1.0532L9.9333 18.491H8.7692l1.206-4.3322H8.8655zm-3.771 0H6.468l.4376 2.9544.8229-2.9544h1.1977l-1.537 5.5152H6.221l-.4041-2.743-.7643 2.743H3.8841ZM0 18.491l2.8225-5.5131h1.181L3.769 18.491H2.5838l.0545-.7391H1.5264l-.3601.7391zm2.0206-1.8844h.6889l.2094-1.9474zm8.2122 1.8844 2.8288-5.5131h1.1768l-.2346 5.5131h-1.181l.0524-.7391h-1.1076l-.3644.7391zm2.0247-1.8844h.689l.2093-1.9474z" fill="#D70010" />
          </g>
          {showOfficial && (
            <path d="M24 15.2372a20.744 20.744 0 0 0-9.86-7.5087 31.2657 31.2657 0 0 1 6.9097 1.0135l-1.5536-1.3192A29.1614 29.1614 0 0 0 9.0497 5.509a29.0797 29.0797 0 0 0-6.4051.7036L0 8.032c.335 0 .8376-.021 1.1747-.021a25.1537 25.1537 0 0 1 20.4571 10.48ZM9.1963 12.9758h3.3334l-.3329 1.183h-1.0532L9.9333 18.491H8.7692l1.206-4.3322H8.8655zm-3.771 0H6.468l.4376 2.9544.8229-2.9544h1.1977l-1.537 5.5152H6.221l-.4041-2.743-.7643 2.743H3.8841ZM0 18.491l2.8225-5.5131h1.181L3.769 18.491H2.5838l.0545-.7391H1.5264l-.3601.7391zm2.0206-1.8844h.6889l.2094-1.9474zm8.2122 1.8844 2.8288-5.5131h1.1768l-.2346 5.5131h-1.181l.0524-.7391h-1.1076l-.3644.7391zm2.0247-1.8844h.689l.2093-1.9474z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M16.331 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.186 1.186 0 01-.806-.237 1.038 1.038 0 01-.352-.498 1.21 1.21 0 01-.023-.667c.052-.225.178-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.34 2.34 0 00-.903.206c-.287.132-.54.327-.739.571a2.221 2.221 0 00-.04 2.705c.295.378.709.645 1.175.756.491.12 1.006.102 1.487-.052l.082-.023M5.336 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.183 1.183 0 01-.806-.237 1.03 1.03 0 01-.351-.498 1.202 1.202 0 01-.024-.667c.052-.225.177-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.344 2.344 0 00-.903.206 2.08 2.08 0 00-.74.571 2.224 2.224 0 00-.041 2.705 2.11 2.11 0 001.176.756c.491.12 1.005.102 1.487-.052l.083-.023M9.26 17.249l-.004.957.07.012c.22.041.441.069.664.085.195.019.391.022.587.012.187-.014.372-.049.551-.104.21-.06.405-.163.571-.305a1.16 1.16 0 00.333-.478 1.31 1.31 0 00-.007-.96 1.068 1.068 0 00-.298-.414 1.261 1.261 0 00-.438-.255l-.722-.268a.388.388 0 01-.197-.188.245.245 0 01.008-.219.382.382 0 01.154-.142.798.798 0 01.257-.074c.153-.022.308-.021.46.005.18.02.358.051.533.096l.038.008v-.883l-.069-.015a4.749 4.749 0 00-.543-.097 2.844 2.844 0 00-.714-.003c-.3.027-.585.143-.821.33-.16.126-.281.293-.351.484-.104.29-.105.608 0 .899.054.145.14.274.252.381.097.093.207.173.327.236.157.084.324.149.497.195.057.017.114.035.17.054l.085.031.024.01c.084.03.162.078.226.14.045.042.08.094.101.151a.325.325 0 01.001.161.339.339 0 01-.166.198.856.856 0 01-.275.086 2.032 2.032 0 01-.427.021 5.208 5.208 0 01-.557-.074 9.195 9.195 0 01-.287-.067l-.033-.006zm-2.475.995h1.05v-4.167h-1.05v4.167zm12.162-2.936a1.095 1.095 0 011.541.158 1.094 1.094 0 01-.157 1.541l-.017.014a1.096 1.096 0 01-1.367-1.713m-1.525.854a2.193 2.193 0 002.666 2.107 2.139 2.139 0 00.701-3.937 2.207 2.207 0 00-3.367 1.83M22.961 10.728a.52.52 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M20.117 10.728a.522.522 0 001.041 0V8.139a.521.521 0 00-1.04 0v2.589M17.231 11.771a.521.521 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M14.393 10.728a.521.521 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M11.494 10.728a.522.522 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M8.624 10.728a.52.52 0 001.039 0V8.139a.52.52 0 00-1.039 0v2.589M5.737 11.771a.52.52 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M2.876 10.728a.522.522 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M0 10.728a.521.521 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155" fill="#1BA0D7" />
          </g>
          {showOfficial && (
            <path d="M16.331 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.186 1.186 0 01-.806-.237 1.038 1.038 0 01-.352-.498 1.21 1.21 0 01-.023-.667c.052-.225.178-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.34 2.34 0 00-.903.206c-.287.132-.54.327-.739.571a2.221 2.221 0 00-.04 2.705c.295.378.709.645 1.175.756.491.12 1.006.102 1.487-.052l.082-.023M5.336 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.183 1.183 0 01-.806-.237 1.03 1.03 0 01-.351-.498 1.202 1.202 0 01-.024-.667c.052-.225.177-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.344 2.344 0 00-.903.206 2.08 2.08 0 00-.74.571 2.224 2.224 0 00-.041 2.705 2.11 2.11 0 001.176.756c.491.12 1.005.102 1.487-.052l.083-.023M9.26 17.249l-.004.957.07.012c.22.041.441.069.664.085.195.019.391.022.587.012.187-.014.372-.049.551-.104.21-.06.405-.163.571-.305a1.16 1.16 0 00.333-.478 1.31 1.31 0 00-.007-.96 1.068 1.068 0 00-.298-.414 1.261 1.261 0 00-.438-.255l-.722-.268a.388.388 0 01-.197-.188.245.245 0 01.008-.219.382.382 0 01.154-.142.798.798 0 01.257-.074c.153-.022.308-.021.46.005.18.02.358.051.533.096l.038.008v-.883l-.069-.015a4.749 4.749 0 00-.543-.097 2.844 2.844 0 00-.714-.003c-.3.027-.585.143-.821.33-.16.126-.281.293-.351.484-.104.29-.105.608 0 .899.054.145.14.274.252.381.097.093.207.173.327.236.157.084.324.149.497.195.057.017.114.035.17.054l.085.031.024.01c.084.03.162.078.226.14.045.042.08.094.101.151a.325.325 0 01.001.161.339.339 0 01-.166.198.856.856 0 01-.275.086 2.032 2.032 0 01-.427.021 5.208 5.208 0 01-.557-.074 9.195 9.195 0 01-.287-.067l-.033-.006zm-2.475.995h1.05v-4.167h-1.05v4.167zm12.162-2.936a1.095 1.095 0 011.541.158 1.094 1.094 0 01-.157 1.541l-.017.014a1.096 1.096 0 01-1.367-1.713m-1.525.854a2.193 2.193 0 002.666 2.107 2.139 2.139 0 00.701-3.937 2.207 2.207 0 00-3.367 1.83M22.961 10.728a.52.52 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M20.117 10.728a.522.522 0 001.041 0V8.139a.521.521 0 00-1.04 0v2.589M17.231 11.771a.521.521 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M14.393 10.728a.521.521 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M11.494 10.728a.522.522 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M8.624 10.728a.52.52 0 001.039 0V8.139a.52.52 0 00-1.039 0v2.589M5.737 11.771a.52.52 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M2.876 10.728a.522.522 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M0 10.728a.521.521 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M19.138 7.138C21.823 7.138 24 9.3147 24 12s-2.1769 4.862-4.862 4.862c-1.9046 0-3.5532-1.0949-4.351-2.6896h.4683c.7615 1.358 2.215 2.2759 3.8826 2.2759 2.4567 0 4.4483-1.9916 4.4483-4.4483 0-2.4567-1.9916-4.4483-4.4483-4.4483-1.6677 0-3.1211.9178-3.8826 2.2759h-.4683c.7978-1.5947 2.4464-2.6897 4.351-2.6897zm0 3.3103c.8569 0 1.5517.6947 1.5517 1.5517 0 .857-.6948 1.5517-1.5518 1.5517-.857 0-1.5517-.6947-1.5517-1.5517 0-.857.6948-1.5517 1.5517-1.5517zm-17.5772.0109c.6066 0 .9968.2545 1.2597.615l-.6192.4793c-.1697-.2079-.3648-.3478-.649-.3478-.4156 0-.7083.3562-.7083.7889v.008c0 .4453.2927.793.7083.793.3096 0 .492-.144.6702-.3604l.6192.4411c-.2799.386-.6574.6701-1.3105.6701C.6829 13.547 0 12.898 0 12.0116v-.008c0-.8652.6617-1.5439 1.5608-1.5439zm4.7346.0382l1.264 2.9902h-.8822l-.212-.5344H5.3156l-.212.5344h-.861l1.2596-2.9902zm4.27.0212c.454 0 .7678.1187.9671.318.174.174.263.3988.263.6914v.008c0 .458-.2418.7592-.6108.9162l.7083 1.0349h-.9458l-.598-.8992h-.3648v.8992h-.8228v-2.969zm5.3983 0v.721h-.8907v2.248h-.8228v-2.248h-.8864v-.721zm-10.0712.9543l-.335.8398h.6658zm4.6348-.246h-.5429v.7168h.5472c.2756 0 .441-.1357.441-.352v-.008c0-.2375-.1738-.3563-.4453-.3563z" fill="#EB1510" />
          </g>
          {showOfficial && (
            <path d="M19.138 7.138C21.823 7.138 24 9.3147 24 12s-2.1769 4.862-4.862 4.862c-1.9046 0-3.5532-1.0949-4.351-2.6896h.4683c.7615 1.358 2.215 2.2759 3.8826 2.2759 2.4567 0 4.4483-1.9916 4.4483-4.4483 0-2.4567-1.9916-4.4483-4.4483-4.4483-1.6677 0-3.1211.9178-3.8826 2.2759h-.4683c.7978-1.5947 2.4464-2.6897 4.351-2.6897zm0 3.3103c.8569 0 1.5517.6947 1.5517 1.5517 0 .857-.6948 1.5517-1.5518 1.5517-.857 0-1.5517-.6947-1.5517-1.5517 0-.857.6948-1.5517 1.5517-1.5517zm-17.5772.0109c.6066 0 .9968.2545 1.2597.615l-.6192.4793c-.1697-.2079-.3648-.3478-.649-.3478-.4156 0-.7083.3562-.7083.7889v.008c0 .4453.2927.793.7083.793.3096 0 .492-.144.6702-.3604l.6192.4411c-.2799.386-.6574.6701-1.3105.6701C.6829 13.547 0 12.898 0 12.0116v-.008c0-.8652.6617-1.5439 1.5608-1.5439zm4.7346.0382l1.264 2.9902h-.8822l-.212-.5344H5.3156l-.212.5344h-.861l1.2596-2.9902zm4.27.0212c.454 0 .7678.1187.9671.318.174.174.263.3988.263.6914v.008c0 .458-.2418.7592-.6108.9162l.7083 1.0349h-.9458l-.598-.8992h-.3648v.8992h-.8228v-2.969zm5.3983 0v.721h-.8907v2.248h-.8228v-2.248h-.8864v-.721zm-10.0712.9543l-.335.8398h.6658zm4.6348-.246h-.5429v.7168h.5472c.2756 0 .441-.1357.441-.352v-.008c0-.2375-.1738-.3563-.4453-.3563z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M0 10.325l23.98 4.46c-.021.657-.062 2.712-.103 3.903-.041 1.418-.35 2.281-.925 2.815-.801.72-1.747.884-4.007 1.007-5.219.288-10.54.247-17.219-.226-.699-.04-.966-.185-1.089-.267-.288-.205-.329-.431-.411-1.603-.062-.801-.164-3.123-.205-3.904 3.102.206 7.849.37 11.712.37.966 0 3.493.02 4.171.02.534 0 1.233-.143 1.582-.698L0 13.222zm.02-1.253c.021-.76.062-2.65.103-3.76.041-1.418.35-2.281.925-2.815.801-.72 1.747-.884 4.007-1.007 5.219-.288 10.54-.247 17.219.226.699.04.966.185 1.089.267.288.205.329.431.411 1.603.041.678.144 2.486.185 3.472-2.301-.123-6.206-.308-9.596-.35-3.39-.04-6.452.021-6.822.063-.74.102-1.089.452-1.192.595L24 10.634v2.568Z" fill="#33302E" />
          </g>
          {showOfficial && (
            <path d="M0 10.325l23.98 4.46c-.021.657-.062 2.712-.103 3.903-.041 1.418-.35 2.281-.925 2.815-.801.72-1.747.884-4.007 1.007-5.219.288-10.54.247-17.219-.226-.699-.04-.966-.185-1.089-.267-.288-.205-.329-.431-.411-1.603-.062-.801-.164-3.123-.205-3.904 3.102.206 7.849.37 11.712.37.966 0 3.493.02 4.171.02.534 0 1.233-.143 1.582-.698L0 13.222zm.02-1.253c.021-.76.062-2.65.103-3.76.041-1.418.35-2.281.925-2.815.801-.72 1.747-.884 4.007-1.007 5.219-.288 10.54-.247 17.219.226.699.04.966.185 1.089.267.288.205.329.431.411 1.603.041.678.144 2.486.185 3.472-2.301-.123-6.206-.308-9.596-.35-3.39-.04-6.452.021-6.822.063-.74.102-1.089.452-1.192.595L24 10.634v2.568Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z" fill="#BC52EE" />
          </g>
          {showOfficial && (
            <path d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M18.864 19.826h-4.107l-3.227-9.393-2.28 9.39H5.143L0 4.65h4.217l4.354 13.128c1.558-4.4 2.534-8.5 1.021-13.128H13.7ZM20.57 4.174a15.705 15.705 0 0 1-3.425 4.171 17.095 17.095 0 0 1 3.425 5.56A17.116 17.116 0 0 1 24 8.345a15.734 15.734 0 0 1-3.43-4.17Z" fill="#32E476" />
          </g>
          {showOfficial && (
            <path d="M18.864 19.826h-4.107l-3.227-9.393-2.28 9.39H5.143L0 4.65h4.217l4.354 13.128c1.558-4.4 2.534-8.5 1.021-13.128H13.7ZM20.57 4.174a15.705 15.705 0 0 1-3.425 4.171 17.095 17.095 0 0 1 3.425 5.56A17.116 17.116 0 0 1 24 8.345a15.734 15.734 0 0 1-3.43-4.17Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M10.506 17.772c-3.358-.211-6.452-1.124-8.347-2.462-.484-.342-1.137-.954-1.43-1.34-.6-.794-.85-1.735-.674-2.548.32-1.478 1.763-2.846 4.016-3.807 1.668-.71 3.533-1.142 5.958-1.379.844-.082 3.291-.069 4.184.024 2.67.276 4.656.795 6.416 1.677 2.259 1.132 3.457 2.63 3.366 4.204q-.103 1.815-2.347 3.303c-2.536 1.684-6.902 2.596-11.142 2.328m3.642-.493c2.17-.206 4.068-.66 5.652-1.35.594-.26.588-.257 1.185-.6 1.687-.972 2.656-2.273 2.58-3.47-.046-.75-.37-1.365-1.112-2.106-1.489-1.489-4.112-2.54-7.46-2.99-.842-.112-1.744-.161-2.991-.16-1.337 0-1.774.022-2.797.142-2.907.343-5.51 1.262-7.108 2.51-.39.305-.89.815-1.102 1.123-.325.472-.567 1.16-.567 1.611 0 .307.123.766.301 1.127 1.13 2.28 5.24 3.992 10.189 4.244.634.032 2.546-.015 3.23-.08m-4.162-.283c-2.184-.21-3.922-.621-5.523-1.305-1.972-.842-3.357-2.079-3.669-3.276-.205-.79.16-1.638 1.087-2.524 1.574-1.504 4.443-2.557 7.927-2.908 1.192-.12 3.207-.121 4.391-.001 2.979.3 5.467 1.092 7.188 2.288.438.304 1.298 1.167 1.49 1.494.478.814.516 1.433.134 2.179-.952 1.861-3.956 3.366-7.825 3.92-1.628.232-3.643.284-5.2.134zM20.237 14.4c.294-.112.716-.42 1.013-.74.237-.257.291-.348.205-.348-.022 0-.186.135-.365.3-.364.338-.6.504-.775.547-.1.024-.12.015-.12-.057 0-.047.051-.197.113-.332.133-.29.118-.47-.054-.675l-.111-.132.183-.205.29-.324c.147-.165.216-.154.195.029-.014.12.003.16.09.218.207.135.447-.009.494-.294.021-.133.006-.174-.107-.287-.236-.236-.463-.152-.928.341-.228.242-.374.358-.52.414-.212.08-.338.068-.338-.032 0-.031.359-.637.798-1.345l.798-1.288h-.72l-.3.358-.728.878c-1.204 1.455-1.92 2.212-2.391 2.524-.208.139-.285.164-.537.178-.278.016-.298.01-.37-.098-.065-.1-.068-.138-.02-.297.116-.39.556-1.143.82-1.407.17-.17.336-.195.287-.044-.08.246-.074.402.019.485.126.115.343.107.443-.016.092-.114.105-.376.028-.546-.16-.352-.914-.306-1.547.095-.134.085-.588.503-1.009.93-.602.61-.788.775-.877.775-.08 0-.113-.022-.113-.075 0-.105.16-.436.464-.97.142-.248.32-.562.395-.7l.138-.249h-.686l-.118.203-.119.202-.083-.16c-.13-.255-.304-.34-.646-.319-.557.035-1.035.345-1.925 1.247-.552.56-1.03.951-1.16.951-.108 0-.122-.118-.054-.447.085-.413.166-.562 1.14-2.12.458-.731.833-1.341.833-1.354s-.152-.023-.336-.022l-.336.002-.282.42a15 15 0 0 1-1.34 1.701c-.227.25-.426.46-.442.468-.015.007-.03-.11-.034-.26-.011-.534-.16-.843-.523-1.095-.096-.067-.176-.136-.176-.153s.147-.103.326-.192c.377-.186.7-.487.85-.791.132-.267.142-.771.02-1.022-.092-.19-.386-.489-.556-.565-.154-.068-.135-.116.097-.245.16-.089.176-.11.107-.134-.103-.036-.367.02-.577.125-.14.07-.212.074-.635.038-1.55-.129-2.884.158-3.88.835-.359.243-.866.8-1.033 1.132-.128.254-.141.311-.114.498.033.225.114.42.23.553.287.326 1.174.36 1.772.069.333-.163.514-.376.757-.89.17-.359.184-.419.2-.82.029-.717.019-.72-.286-.12-.365.72-.599 1.07-.904 1.36-.332.315-.492.394-.849.42l-.292.02-.174-.174c-.16-.16-.174-.192-.174-.41 0-.48.237-.881.758-1.278.751-.572 1.947-.976 2.905-.98.554-.002 1.063.053 1.06.114-.001.028-.11.128-.241.222-.309.221-.873.781-1.2 1.193-.513.643-1.111 1.603-1.354 2.172-.55 1.287-.885 1.66-1.592 1.772-.482.077-.817-.038-1.134-.389-.224-.248-.21-.327.066-.36.491-.058.698-.3.587-.688-.04-.143-.088-.204-.203-.264-.181-.093-.328-.073-.554.077-.249.164-.369.352-.39.608-.038.454.29.909.797 1.107.327.128 1.046.14 1.513.025 1.168-.286 2.071-1.267 2.58-2.802.197-.59.605-1.48.827-1.804.18-.262.729-.84.797-.84.174 0 .456.562.456.91 0 .405-.23.82-.623 1.124-.233.18-.239.182-.35.11-.166-.11-.488-.064-.618.087-.11.126-.122.203-.054.33.052.096.216.109.433.033.136-.047.15-.042.281.1.255.28.244.81-.029 1.351-.3.595-.65.999-1.006 1.16-.235.107-.352.104-.46-.011-.171-.184-.082-.752.149-.944.038-.032.149-.153.246-.269.173-.207.174-.21.053-.164-.438.167-.758.738-.682 1.216.065.403.425.576 1 .48.58-.095.776-.23 1.645-1.126.433-.446.798-.8.81-.788s-.056.148-.153.301c-.36.566-.517 1.177-.362 1.413.09.136.31.236.524.236.294 0 .619-.23 1.22-.861.217-.23.407-.407.42-.394s-.015.15-.064.303c-.145.46-.05.745.296.893.306.13.6.04 1.032-.314.46-.377.417-.366.385-.092-.026.223-.02.25.09.358.098.099.143.114.283.095.307-.041.544-.204 1.037-.71.264-.27.499-.492.522-.492s.013.08-.022.179c-.146.416-.038.774.284.94.167.087.244.099.542.085.298-.015.392-.04.672-.183.289-.147.43-.273 1.267-1.124.519-.528.943-.943.943-.924 0 .041-.464.825-.97 1.634l-.365.585.328.013c.18.007.353.003.382-.008s.225-.306.433-.655c.3-.502.392-.627.448-.602a.8.8 0 0 0 .255.022c.128-.006.192.01.21.055.013.035-.046.224-.132.421-.185.428-.197.608-.048.756.131.132.327.14.629.025zm-7.82-.333c-.088-.087-.086-.143.015-.43.258-.736 1.054-1.566 1.349-1.408.192.103.147.502-.096.855-.373.543-.917 1.051-1.124 1.051a.24.24 0 0 1-.144-.068" fill="#000000" />
          </g>
          {showOfficial && (
            <path d="M10.506 17.772c-3.358-.211-6.452-1.124-8.347-2.462-.484-.342-1.137-.954-1.43-1.34-.6-.794-.85-1.735-.674-2.548.32-1.478 1.763-2.846 4.016-3.807 1.668-.71 3.533-1.142 5.958-1.379.844-.082 3.291-.069 4.184.024 2.67.276 4.656.795 6.416 1.677 2.259 1.132 3.457 2.63 3.366 4.204q-.103 1.815-2.347 3.303c-2.536 1.684-6.902 2.596-11.142 2.328m3.642-.493c2.17-.206 4.068-.66 5.652-1.35.594-.26.588-.257 1.185-.6 1.687-.972 2.656-2.273 2.58-3.47-.046-.75-.37-1.365-1.112-2.106-1.489-1.489-4.112-2.54-7.46-2.99-.842-.112-1.744-.161-2.991-.16-1.337 0-1.774.022-2.797.142-2.907.343-5.51 1.262-7.108 2.51-.39.305-.89.815-1.102 1.123-.325.472-.567 1.16-.567 1.611 0 .307.123.766.301 1.127 1.13 2.28 5.24 3.992 10.189 4.244.634.032 2.546-.015 3.23-.08m-4.162-.283c-2.184-.21-3.922-.621-5.523-1.305-1.972-.842-3.357-2.079-3.669-3.276-.205-.79.16-1.638 1.087-2.524 1.574-1.504 4.443-2.557 7.927-2.908 1.192-.12 3.207-.121 4.391-.001 2.979.3 5.467 1.092 7.188 2.288.438.304 1.298 1.167 1.49 1.494.478.814.516 1.433.134 2.179-.952 1.861-3.956 3.366-7.825 3.92-1.628.232-3.643.284-5.2.134zM20.237 14.4c.294-.112.716-.42 1.013-.74.237-.257.291-.348.205-.348-.022 0-.186.135-.365.3-.364.338-.6.504-.775.547-.1.024-.12.015-.12-.057 0-.047.051-.197.113-.332.133-.29.118-.47-.054-.675l-.111-.132.183-.205.29-.324c.147-.165.216-.154.195.029-.014.12.003.16.09.218.207.135.447-.009.494-.294.021-.133.006-.174-.107-.287-.236-.236-.463-.152-.928.341-.228.242-.374.358-.52.414-.212.08-.338.068-.338-.032 0-.031.359-.637.798-1.345l.798-1.288h-.72l-.3.358-.728.878c-1.204 1.455-1.92 2.212-2.391 2.524-.208.139-.285.164-.537.178-.278.016-.298.01-.37-.098-.065-.1-.068-.138-.02-.297.116-.39.556-1.143.82-1.407.17-.17.336-.195.287-.044-.08.246-.074.402.019.485.126.115.343.107.443-.016.092-.114.105-.376.028-.546-.16-.352-.914-.306-1.547.095-.134.085-.588.503-1.009.93-.602.61-.788.775-.877.775-.08 0-.113-.022-.113-.075 0-.105.16-.436.464-.97.142-.248.32-.562.395-.7l.138-.249h-.686l-.118.203-.119.202-.083-.16c-.13-.255-.304-.34-.646-.319-.557.035-1.035.345-1.925 1.247-.552.56-1.03.951-1.16.951-.108 0-.122-.118-.054-.447.085-.413.166-.562 1.14-2.12.458-.731.833-1.341.833-1.354s-.152-.023-.336-.022l-.336.002-.282.42a15 15 0 0 1-1.34 1.701c-.227.25-.426.46-.442.468-.015.007-.03-.11-.034-.26-.011-.534-.16-.843-.523-1.095-.096-.067-.176-.136-.176-.153s.147-.103.326-.192c.377-.186.7-.487.85-.791.132-.267.142-.771.02-1.022-.092-.19-.386-.489-.556-.565-.154-.068-.135-.116.097-.245.16-.089.176-.11.107-.134-.103-.036-.367.02-.577.125-.14.07-.212.074-.635.038-1.55-.129-2.884.158-3.88.835-.359.243-.866.8-1.033 1.132-.128.254-.141.311-.114.498.033.225.114.42.23.553.287.326 1.174.36 1.772.069.333-.163.514-.376.757-.89.17-.359.184-.419.2-.82.029-.717.019-.72-.286-.12-.365.72-.599 1.07-.904 1.36-.332.315-.492.394-.849.42l-.292.02-.174-.174c-.16-.16-.174-.192-.174-.41 0-.48.237-.881.758-1.278.751-.572 1.947-.976 2.905-.98.554-.002 1.063.053 1.06.114-.001.028-.11.128-.241.222-.309.221-.873.781-1.2 1.193-.513.643-1.111 1.603-1.354 2.172-.55 1.287-.885 1.66-1.592 1.772-.482.077-.817-.038-1.134-.389-.224-.248-.21-.327.066-.36.491-.058.698-.3.587-.688-.04-.143-.088-.204-.203-.264-.181-.093-.328-.073-.554.077-.249.164-.369.352-.39.608-.038.454.29.909.797 1.107.327.128 1.046.14 1.513.025 1.168-.286 2.071-1.267 2.58-2.802.197-.59.605-1.48.827-1.804.18-.262.729-.84.797-.84.174 0 .456.562.456.91 0 .405-.23.82-.623 1.124-.233.18-.239.182-.35.11-.166-.11-.488-.064-.618.087-.11.126-.122.203-.054.33.052.096.216.109.433.033.136-.047.15-.042.281.1.255.28.244.81-.029 1.351-.3.595-.65.999-1.006 1.16-.235.107-.352.104-.46-.011-.171-.184-.082-.752.149-.944.038-.032.149-.153.246-.269.173-.207.174-.21.053-.164-.438.167-.758.738-.682 1.216.065.403.425.576 1 .48.58-.095.776-.23 1.645-1.126.433-.446.798-.8.81-.788s-.056.148-.153.301c-.36.566-.517 1.177-.362 1.413.09.136.31.236.524.236.294 0 .619-.23 1.22-.861.217-.23.407-.407.42-.394s-.015.15-.064.303c-.145.46-.05.745.296.893.306.13.6.04 1.032-.314.46-.377.417-.366.385-.092-.026.223-.02.25.09.358.098.099.143.114.283.095.307-.041.544-.204 1.037-.71.264-.27.499-.492.522-.492s.013.08-.022.179c-.146.416-.038.774.284.94.167.087.244.099.542.085.298-.015.392-.04.672-.183.289-.147.43-.273 1.267-1.124.519-.528.943-.943.943-.924 0 .041-.464.825-.97 1.634l-.365.585.328.013c.18.007.353.003.382-.008s.225-.306.433-.655c.3-.502.392-.627.448-.602a.8.8 0 0 0 .255.022c.128-.006.192.01.21.055.013.035-.046.224-.132.421-.185.428-.197.608-.048.756.131.132.327.14.629.025zm-7.82-.333c-.088-.087-.086-.143.015-.43.258-.736 1.054-1.566 1.349-1.408.192.103.147.502-.096.855-.373.543-.917 1.051-1.124 1.051a.24.24 0 0 1-.144-.068" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M12.2305 9.1035c-.6088 0-1.0881.0929-1.457.2774-.369.166-.627.4602-.793.8476-.166.4243-.2403.9974-.2403 1.7168 0 1.0168.1088 2.0758.7754 2.5996.2583.203.5894.2969 1.0137.2969.2952 0 .5903-.0004.83-.0742.2214-.0738.4248-.1845.5723-.332.0554-.037.13-.1292.1485-.166v.4784h.959v-3.1914h-1.0899v1.9922c-.1555.1037-.3215.1622-.5332.2227-.1291.0369-.2773.0547-.4433.0547-.2214 0-.4072-.0554-.5547-.166-.1292-.1107-.2396-.2945-.295-.5528-.1274-.595-.1062-1.58-.037-2.0293.0553-.2398.1108-.4255.203-.5547.2066-.3305.6712-.3496.9415-.3496h.5527c.1845 0 .3507.0176.5352.0176.1844 0 .3702.0011.5546.0195l.0723-.8867c-.37-.111-.5068-.1517-1.0508-.2012-.2206-.0242-.4428-.013-.664-.0195Zm9.7402 0c-.5842 0-1.1955.0965-1.5488.332-.2734.1823-.4805.4674-.4805 1.2364 0 .6867.1957 1.2693 1.1621 1.6054l1.125.3868c.1291.0369.2407.092.3145.1289.0738.0369.129.1117.166.1855.0759.1518.0788.533-.0195.664-.0554.0923-.1287.1476-.2579.166-.3046.0529-.6144.0322-.9218.0372-.166 0-.35-.0195-.5899-.0195-.2398 0-.5165-.0176-.83-.0176l-.0196.9023c.2398.0554.7754.13 1.1074.1485.332.0184.6094.037.7754.037.2767 0 .7008-.0188.959-.0741.2583-.0554.461-.1472.627-.2578.166-.1292.2758-.2952.3496-.4981.0738-.2214.1113-.4794.1113-.793 0-.4243-.0918-.7573-.2578-1.0156-.166-.2583-.4792-.4598-.9219-.6074l-1.0703-.3516c-.2214-.0738-.3687-.148-.461-.2402-.1538-.123-.1543-.4588-.0937-.7012.0185-.0553.0736-.1096.129-.1465.0737-.0184.149-.0566.2597-.0566.1107-.0185.2391-.0176.3867-.0176h.9219c.3136 0 .5902.0176.83.0176l.0196-.8477c-.5672-.1215-1.1484-.203-1.7715-.203Zm-15.293.0742c-.642 0-1.1797.4099-1.1797 1.125v3.3399c0 .332.1107.6076.332.8105.203.203.4972.3145.8477.3145h.9043c.2767 0 .7567-.0196.9043-.0196.1292-.0184.5152-.0362.7735-.0546v-.8848H7.121c-.1291 0-.2211-.0375-.295-.1113-.0553-.0738-.0937-.1854-.0937-.3145V12.295h2.2324v-.8672H6.7324v-.8672c0-.1475.02-.2387.0938-.3125.0553-.0737.1658-.1113.2949-.1113h2.1387V9.252c-.2583-.0185-.5706-.0382-.7735-.0567-.6023-.0273-1.2058-.0176-1.8086-.0176ZM0 9.2148l1.5313 5.2012c.0394.197.2115.332.4238.332H3.08c.2216 0 .3886-.146.4258-.332l1.5117-5.2012h-1.254l-1.1445 4.5196s-.0186.0176-.037.0176h-.1466c-.0184 0-.037.0008-.037-.0176l-1.125-4.5196zm16.4922 0c-.1191 0-.3802.0704-.4238.332l-1.6055 5.2208h1.2539l.4062-1.457h1.9004l.4063 1.457h1.2539L18.078 9.5469c-.0184-.0923-.0727-.1665-.1465-.2403a.4548.4548 0 0 0-.2773-.0918zm.6445.9766c.0185 0 .0371.0187.0371.0371l.5918 2.1406h-1.4023l.5898-2.1406c.0185-.0184.0187-.037.028-.037z" fill="#1A1A1A" />
          </g>
          {showOfficial && (
            <path d="M12.2305 9.1035c-.6088 0-1.0881.0929-1.457.2774-.369.166-.627.4602-.793.8476-.166.4243-.2403.9974-.2403 1.7168 0 1.0168.1088 2.0758.7754 2.5996.2583.203.5894.2969 1.0137.2969.2952 0 .5903-.0004.83-.0742.2214-.0738.4248-.1845.5723-.332.0554-.037.13-.1292.1485-.166v.4784h.959v-3.1914h-1.0899v1.9922c-.1555.1037-.3215.1622-.5332.2227-.1291.0369-.2773.0547-.4433.0547-.2214 0-.4072-.0554-.5547-.166-.1292-.1107-.2396-.2945-.295-.5528-.1274-.595-.1062-1.58-.037-2.0293.0553-.2398.1108-.4255.203-.5547.2066-.3305.6712-.3496.9415-.3496h.5527c.1845 0 .3507.0176.5352.0176.1844 0 .3702.0011.5546.0195l.0723-.8867c-.37-.111-.5068-.1517-1.0508-.2012-.2206-.0242-.4428-.013-.664-.0195Zm9.7402 0c-.5842 0-1.1955.0965-1.5488.332-.2734.1823-.4805.4674-.4805 1.2364 0 .6867.1957 1.2693 1.1621 1.6054l1.125.3868c.1291.0369.2407.092.3145.1289.0738.0369.129.1117.166.1855.0759.1518.0788.533-.0195.664-.0554.0923-.1287.1476-.2579.166-.3046.0529-.6144.0322-.9218.0372-.166 0-.35-.0195-.5899-.0195-.2398 0-.5165-.0176-.83-.0176l-.0196.9023c.2398.0554.7754.13 1.1074.1485.332.0184.6094.037.7754.037.2767 0 .7008-.0188.959-.0741.2583-.0554.461-.1472.627-.2578.166-.1292.2758-.2952.3496-.4981.0738-.2214.1113-.4794.1113-.793 0-.4243-.0918-.7573-.2578-1.0156-.166-.2583-.4792-.4598-.9219-.6074l-1.0703-.3516c-.2214-.0738-.3687-.148-.461-.2402-.1538-.123-.1543-.4588-.0937-.7012.0185-.0553.0736-.1096.129-.1465.0737-.0184.149-.0566.2597-.0566.1107-.0185.2391-.0176.3867-.0176h.9219c.3136 0 .5902.0176.83.0176l.0196-.8477c-.5672-.1215-1.1484-.203-1.7715-.203Zm-15.293.0742c-.642 0-1.1797.4099-1.1797 1.125v3.3399c0 .332.1107.6076.332.8105.203.203.4972.3145.8477.3145h.9043c.2767 0 .7567-.0196.9043-.0196.1292-.0184.5152-.0362.7735-.0546v-.8848H7.121c-.1291 0-.2211-.0375-.295-.1113-.0553-.0738-.0937-.1854-.0937-.3145V12.295h2.2324v-.8672H6.7324v-.8672c0-.1475.02-.2387.0938-.3125.0553-.0737.1658-.1113.2949-.1113h2.1387V9.252c-.2583-.0185-.5706-.0382-.7735-.0567-.6023-.0273-1.2058-.0176-1.8086-.0176ZM0 9.2148l1.5313 5.2012c.0394.197.2115.332.4238.332H3.08c.2216 0 .3886-.146.4258-.332l1.5117-5.2012h-1.254l-1.1445 4.5196s-.0186.0176-.037.0176h-.1466c-.0184 0-.037.0008-.037-.0176l-1.125-4.5196zm16.4922 0c-.1191 0-.3802.0704-.4238.332l-1.6055 5.2208h1.2539l.4062-1.457h1.9004l.4063 1.457h1.2539L18.078 9.5469c-.0184-.0923-.0727-.1665-.1465-.2403a.4548.4548 0 0 0-.2773-.0918zm.6445.9766c.0185 0 .0371.0187.0371.0371l.5918 2.1406h-1.4023l.5898-2.1406c.0185-.0184.0187-.037.028-.037z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M13.0569.404c-1.9042.0042-3.8052.4582-5.4881 1.3223.1477.2404.2528.506.3086.7794.283 1.383-.5717 2.6728-1.8945 4.3458l-.6855.8594a1.165 1.165 0 0 1-.912.4356 1.1517 1.1517 0 0 1-.627-.1856c-.3196-.2084-.538-.3299-1.2343-.7832-2.042 4.897-.5548 11.2114 3.8826 14.2446 3.5434 2.5674 8.7443 2.8326 12.6499.9434.7786-.3952 1.5287-.838 2.0663-1.4004a2.7886 2.7886 0 0 0 .9238-2.0724c0-1.3257-.9333-2.4682-2.2323-2.7325-.5056-.1094-1.2926-.0854-1.9863.3399-.2262.1083-.4475.2277-.6679.3437-.6341.3344-.7472.3702-1.4374.588-1.9956.6344-6.0325.556-7.0662-1.6388-.1441-.6302.424-.7857.9258-.7852 2.992-.0074 5.9841-.0002 8.9762-.0059.781-.0032 1.5788-.0068 2.3339-.2246 2.302-.5946 3.43-2.7624 3.0272-5.2463-.6121-3.973-3.577-7.5172-7.4606-8.633C15.3562.563 14.2058.4015 13.0569.404zM5.4576.9646c-.7885.0002-1.5143.4442-1.9023 1.0723-.3962-.325-.9281-.5137-1.4472-.5137s-1.0492.18-1.4824.588C.1608 2.5486-.0652 3.1988.0164 3.826c.0856.6424.431 1.1825.9882 1.711.6832.6479 1.6854 1.2787 2.9257 2.0567l.0488.0293a.7427.7427 0 0 0 .4062.1211.7655.7655 0 0 0 .5938-.2832c.011-.013.0208-.0274.0312-.041 1.6662-2.07 2.759-3.4236 2.4706-4.8342-.126-.6165-.5471-1.1606-1.1327-1.4238-.2125-.0973-.5208-.1973-.8906-.1973Zm-3.6757 1.543c.3428 0 .6211.2777.6211.6192 0 .3415-.2783.6172-.621.6172-.3428 0-.6211-.2757-.6211-.6172 0-.3415.2783-.6192.621-.6192zm11.4449 3.6622c1.6882.0106 3.4584.8528 4.1756 2.4923.0547.1383.0885.2821.0703.422-.0512.3676-.387.498-.7168.498-2.0929.0125-5.2392.005-7.4137.002-.288-.0092-.3718-.0665-.3906-.0665-.2202-.0814-.3686-.2946-.3574-.5293.0057-.2033.0986-.4013.1933-.5801.8201-1.5407 2.634-2.3014 4.4393-2.2384Z" fill="#00BC45" />
          </g>
          {showOfficial && (
            <path d="M13.0569.404c-1.9042.0042-3.8052.4582-5.4881 1.3223.1477.2404.2528.506.3086.7794.283 1.383-.5717 2.6728-1.8945 4.3458l-.6855.8594a1.165 1.165 0 0 1-.912.4356 1.1517 1.1517 0 0 1-.627-.1856c-.3196-.2084-.538-.3299-1.2343-.7832-2.042 4.897-.5548 11.2114 3.8826 14.2446 3.5434 2.5674 8.7443 2.8326 12.6499.9434.7786-.3952 1.5287-.838 2.0663-1.4004a2.7886 2.7886 0 0 0 .9238-2.0724c0-1.3257-.9333-2.4682-2.2323-2.7325-.5056-.1094-1.2926-.0854-1.9863.3399-.2262.1083-.4475.2277-.6679.3437-.6341.3344-.7472.3702-1.4374.588-1.9956.6344-6.0325.556-7.0662-1.6388-.1441-.6302.424-.7857.9258-.7852 2.992-.0074 5.9841-.0002 8.9762-.0059.781-.0032 1.5788-.0068 2.3339-.2246 2.302-.5946 3.43-2.7624 3.0272-5.2463-.6121-3.973-3.577-7.5172-7.4606-8.633C15.3562.563 14.2058.4015 13.0569.404zM5.4576.9646c-.7885.0002-1.5143.4442-1.9023 1.0723-.3962-.325-.9281-.5137-1.4472-.5137s-1.0492.18-1.4824.588C.1608 2.5486-.0652 3.1988.0164 3.826c.0856.6424.431 1.1825.9882 1.711.6832.6479 1.6854 1.2787 2.9257 2.0567l.0488.0293a.7427.7427 0 0 0 .4062.1211.7655.7655 0 0 0 .5938-.2832c.011-.013.0208-.0274.0312-.041 1.6662-2.07 2.759-3.4236 2.4706-4.8342-.126-.6165-.5471-1.1606-1.1327-1.4238-.2125-.0973-.5208-.1973-.8906-.1973Zm-3.6757 1.543c.3428 0 .6211.2777.6211.6192 0 .3415-.2783.6172-.621.6172-.3428 0-.6211-.2757-.6211-.6172 0-.3415.2783-.6192.621-.6192zm11.4449 3.6622c1.6882.0106 3.4584.8528 4.1756 2.4923.0547.1383.0885.2821.0703.422-.0512.3676-.387.498-.7168.498-2.0929.0125-5.2392.005-7.4137.002-.288-.0092-.3718-.0665-.3906-.0665-.2202-.0814-.3686-.2946-.3574-.5293.0057-.2033.0986-.4013.1933-.5801.8201-1.5407 2.634-2.3014 4.4393-2.2384Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M24 15.2372a20.744 20.744 0 0 0-9.86-7.5087 31.2657 31.2657 0 0 1 6.9097 1.0135l-1.5536-1.3192A29.1614 29.1614 0 0 0 9.0497 5.509a29.0797 29.0797 0 0 0-6.4051.7036L0 8.032c.335 0 .8376-.021 1.1747-.021a25.1537 25.1537 0 0 1 20.4571 10.48ZM9.1963 12.9758h3.3334l-.3329 1.183h-1.0532L9.9333 18.491H8.7692l1.206-4.3322H8.8655zm-3.771 0H6.468l.4376 2.9544.8229-2.9544h1.1977l-1.537 5.5152H6.221l-.4041-2.743-.7643 2.743H3.8841ZM0 18.491l2.8225-5.5131h1.181L3.769 18.491H2.5838l.0545-.7391H1.5264l-.3601.7391zm2.0206-1.8844h.6889l.2094-1.9474zm8.2122 1.8844 2.8288-5.5131h1.1768l-.2346 5.5131h-1.181l.0524-.7391h-1.1076l-.3644.7391zm2.0247-1.8844h.689l.2093-1.9474z" fill="#D70010" />
          </g>
          {showOfficial && (
            <path d="M24 15.2372a20.744 20.744 0 0 0-9.86-7.5087 31.2657 31.2657 0 0 1 6.9097 1.0135l-1.5536-1.3192A29.1614 29.1614 0 0 0 9.0497 5.509a29.0797 29.0797 0 0 0-6.4051.7036L0 8.032c.335 0 .8376-.021 1.1747-.021a25.1537 25.1537 0 0 1 20.4571 10.48ZM9.1963 12.9758h3.3334l-.3329 1.183h-1.0532L9.9333 18.491H8.7692l1.206-4.3322H8.8655zm-3.771 0H6.468l.4376 2.9544.8229-2.9544h1.1977l-1.537 5.5152H6.221l-.4041-2.743-.7643 2.743H3.8841ZM0 18.491l2.8225-5.5131h1.181L3.769 18.491H2.5838l.0545-.7391H1.5264l-.3601.7391zm2.0206-1.8844h.6889l.2094-1.9474zm8.2122 1.8844 2.8288-5.5131h1.1768l-.2346 5.5131h-1.181l.0524-.7391h-1.1076l-.3644.7391zm2.0247-1.8844h.689l.2093-1.9474z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M12.337 0c-.475 0-.861 1.016-.861 2.269 0 .527.069 1.011.183 1.396a8.514 8.514 0 0 0-3.961 1.22 5.229 5.229 0 0 0-.595-1.093c-.606-.866-1.34-1.436-1.79-1.43a.381.381 0 0 0-.217.066c-.39.273-.123 1.326.596 2.353.267.381.559.705.84.948a8.683 8.683 0 0 0-1.528 1.716h1.734a7.179 7.179 0 0 1 5.381-2.421 7.18 7.18 0 0 1 5.382 2.42h1.733a8.687 8.687 0 0 0-1.32-1.53c.35-.249.735-.643 1.078-1.133.719-1.027.986-2.08.596-2.353a.382.382 0 0 0-.217-.065c-.45-.007-1.184.563-1.79 1.43a4.897 4.897 0 0 0-.676 1.325 8.52 8.52 0 0 0-3.899-1.42c.12-.39.193-.887.193-1.429 0-1.253-.386-2.269-.862-2.269zM1.624 9.443v5.162h1.358v-1.968h1.64v1.968h1.357V9.443H4.62v1.838H2.98V9.443zm5.912 0v5.162h3.21v-1.108H8.893v-.95h1.64v-1.142h-1.64v-.84h1.853V9.443zm4.698 0v5.162h3.218v-1.362h-1.86v-3.8zm4.706 0v5.162h1.364v-2.643l1.357 1.225 1.35-1.232v2.65h1.365V9.443h-.614l-2.1 1.914-2.109-1.914zm-11.82 7.28a8.688 8.688 0 0 0 1.412 1.548 5.206 5.206 0 0 0-.841.948c-.719 1.027-.985 2.08-.596 2.353.39.273 1.289-.338 2.007-1.364a5.23 5.23 0 0 0 .595-1.092 8.514 8.514 0 0 0 3.961 1.219 5.01 5.01 0 0 0-.183 1.396c0 1.253.386 2.269.861 2.269.476 0 .862-1.016.862-2.269 0-.542-.072-1.04-.193-1.43a8.52 8.52 0 0 0 3.9-1.42c.121.4.352.865.675 1.327.719 1.026 1.617 1.637 2.007 1.364.39-.273.123-1.326-.596-2.353-.343-.49-.727-.885-1.077-1.135a8.69 8.69 0 0 0 1.202-1.36h-1.771a7.174 7.174 0 0 1-5.227 2.252 7.174 7.174 0 0 1-5.226-2.252z" fill="#0F1689" />
          </g>
          {showOfficial && (
            <path d="M12.337 0c-.475 0-.861 1.016-.861 2.269 0 .527.069 1.011.183 1.396a8.514 8.514 0 0 0-3.961 1.22 5.229 5.229 0 0 0-.595-1.093c-.606-.866-1.34-1.436-1.79-1.43a.381.381 0 0 0-.217.066c-.39.273-.123 1.326.596 2.353.267.381.559.705.84.948a8.683 8.683 0 0 0-1.528 1.716h1.734a7.179 7.179 0 0 1 5.381-2.421 7.18 7.18 0 0 1 5.382 2.42h1.733a8.687 8.687 0 0 0-1.32-1.53c.35-.249.735-.643 1.078-1.133.719-1.027.986-2.08.596-2.353a.382.382 0 0 0-.217-.065c-.45-.007-1.184.563-1.79 1.43a4.897 4.897 0 0 0-.676 1.325 8.52 8.52 0 0 0-3.899-1.42c.12-.39.193-.887.193-1.429 0-1.253-.386-2.269-.862-2.269zM1.624 9.443v5.162h1.358v-1.968h1.64v1.968h1.357V9.443H4.62v1.838H2.98V9.443zm5.912 0v5.162h3.21v-1.108H8.893v-.95h1.64v-1.142h-1.64v-.84h1.853V9.443zm4.698 0v5.162h3.218v-1.362h-1.86v-3.8zm4.706 0v5.162h1.364v-2.643l1.357 1.225 1.35-1.232v2.65h1.365V9.443h-.614l-2.1 1.914-2.109-1.914zm-11.82 7.28a8.688 8.688 0 0 0 1.412 1.548 5.206 5.206 0 0 0-.841.948c-.719 1.027-.985 2.08-.596 2.353.39.273 1.289-.338 2.007-1.364a5.23 5.23 0 0 0 .595-1.092 8.514 8.514 0 0 0 3.961 1.219 5.01 5.01 0 0 0-.183 1.396c0 1.253.386 2.269.861 2.269.476 0 .862-1.016.862-2.269 0-.542-.072-1.04-.193-1.43a8.52 8.52 0 0 0 3.9-1.42c.121.4.352.865.675 1.327.719 1.026 1.617 1.637 2.007 1.364.39-.273.123-1.326-.596-2.353-.343-.49-.727-.885-1.077-1.135a8.69 8.69 0 0 0 1.202-1.36h-1.771a7.174 7.174 0 0 1-5.227 2.252 7.174 7.174 0 0 1-5.226-2.252z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M12 0L1.75 6v12L12 24l10.25-6V6zm-1.775 18l1.08-4.657-2.428-2.397L13.79 6l-1.082 4.665 2.414 2.384z" fill="#792EE5" />
          </g>
          {showOfficial && (
            <path d="M12 0L1.75 6v12L12 24l10.25-6V6zm-1.775 18l1.08-4.657-2.428-2.397L13.79 6l-1.082 4.665 2.414 2.384z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M10.506 17.772c-3.358-.211-6.452-1.124-8.347-2.462-.484-.342-1.137-.954-1.43-1.34-.6-.794-.85-1.735-.674-2.548.32-1.478 1.763-2.846 4.016-3.807 1.668-.71 3.533-1.142 5.958-1.379.844-.082 3.291-.069 4.184.024 2.67.276 4.656.795 6.416 1.677 2.259 1.132 3.457 2.63 3.366 4.204q-.103 1.815-2.347 3.303c-2.536 1.684-6.902 2.596-11.142 2.328m3.642-.493c2.17-.206 4.068-.66 5.652-1.35.594-.26.588-.257 1.185-.6 1.687-.972 2.656-2.273 2.58-3.47-.046-.75-.37-1.365-1.112-2.106-1.489-1.489-4.112-2.54-7.46-2.99-.842-.112-1.744-.161-2.991-.16-1.337 0-1.774.022-2.797.142-2.907.343-5.51 1.262-7.108 2.51-.39.305-.89.815-1.102 1.123-.325.472-.567 1.16-.567 1.611 0 .307.123.766.301 1.127 1.13 2.28 5.24 3.992 10.189 4.244.634.032 2.546-.015 3.23-.08m-4.162-.283c-2.184-.21-3.922-.621-5.523-1.305-1.972-.842-3.357-2.079-3.669-3.276-.205-.79.16-1.638 1.087-2.524 1.574-1.504 4.443-2.557 7.927-2.908 1.192-.12 3.207-.121 4.391-.001 2.979.3 5.467 1.092 7.188 2.288.438.304 1.298 1.167 1.49 1.494.478.814.516 1.433.134 2.179-.952 1.861-3.956 3.366-7.825 3.92-1.628.232-3.643.284-5.2.134zM20.237 14.4c.294-.112.716-.42 1.013-.74.237-.257.291-.348.205-.348-.022 0-.186.135-.365.3-.364.338-.6.504-.775.547-.1.024-.12.015-.12-.057 0-.047.051-.197.113-.332.133-.29.118-.47-.054-.675l-.111-.132.183-.205.29-.324c.147-.165.216-.154.195.029-.014.12.003.16.09.218.207.135.447-.009.494-.294.021-.133.006-.174-.107-.287-.236-.236-.463-.152-.928.341-.228.242-.374.358-.52.414-.212.08-.338.068-.338-.032 0-.031.359-.637.798-1.345l.798-1.288h-.72l-.3.358-.728.878c-1.204 1.455-1.92 2.212-2.391 2.524-.208.139-.285.164-.537.178-.278.016-.298.01-.37-.098-.065-.1-.068-.138-.02-.297.116-.39.556-1.143.82-1.407.17-.17.336-.195.287-.044-.08.246-.074.402.019.485.126.115.343.107.443-.016.092-.114.105-.376.028-.546-.16-.352-.914-.306-1.547.095-.134.085-.588.503-1.009.93-.602.61-.788.775-.877.775-.08 0-.113-.022-.113-.075 0-.105.16-.436.464-.97.142-.248.32-.562.395-.7l.138-.249h-.686l-.118.203-.119.202-.083-.16c-.13-.255-.304-.34-.646-.319-.557.035-1.035.345-1.925 1.247-.552.56-1.03.951-1.16.951-.108 0-.122-.118-.054-.447.085-.413.166-.562 1.14-2.12.458-.731.833-1.341.833-1.354s-.152-.023-.336-.022l-.336.002-.282.42a15 15 0 0 1-1.34 1.701c-.227.25-.426.46-.442.468-.015.007-.03-.11-.034-.26-.011-.534-.16-.843-.523-1.095-.096-.067-.176-.136-.176-.153s.147-.103.326-.192c.377-.186.7-.487.85-.791.132-.267.142-.771.02-1.022-.092-.19-.386-.489-.556-.565-.154-.068-.135-.116.097-.245.16-.089.176-.11.107-.134-.103-.036-.367.02-.577.125-.14.07-.212.074-.635.038-1.55-.129-2.884.158-3.88.835-.359.243-.866.8-1.033 1.132-.128.254-.141.311-.114.498.033.225.114.42.23.553.287.326 1.174.36 1.772.069.333-.163.514-.376.757-.89.17-.359.184-.419.2-.82.029-.717.019-.72-.286-.12-.365.72-.599 1.07-.904 1.36-.332.315-.492.394-.849.42l-.292.02-.174-.174c-.16-.16-.174-.192-.174-.41 0-.48.237-.881.758-1.278.751-.572 1.947-.976 2.905-.98.554-.002 1.063.053 1.06.114-.001.028-.11.128-.241.222-.309.221-.873.781-1.2 1.193-.513.643-1.111 1.603-1.354 2.172-.55 1.287-.885 1.66-1.592 1.772-.482.077-.817-.038-1.134-.389-.224-.248-.21-.327.066-.36.491-.058.698-.3.587-.688-.04-.143-.088-.204-.203-.264-.181-.093-.328-.073-.554.077-.249.164-.369.352-.39.608-.038.454.29.909.797 1.107.327.128 1.046.14 1.513.025 1.168-.286 2.071-1.267 2.58-2.802.197-.59.605-1.48.827-1.804.18-.262.729-.84.797-.84.174 0 .456.562.456.91 0 .405-.23.82-.623 1.124-.233.18-.239.182-.35.11-.166-.11-.488-.064-.618.087-.11.126-.122.203-.054.33.052.096.216.109.433.033.136-.047.15-.042.281.1.255.28.244.81-.029 1.351-.3.595-.65.999-1.006 1.16-.235.107-.352.104-.46-.011-.171-.184-.082-.752.149-.944.038-.032.149-.153.246-.269.173-.207.174-.21.053-.164-.438.167-.758.738-.682 1.216.065.403.425.576 1 .48.58-.095.776-.23 1.645-1.126.433-.446.798-.8.81-.788s-.056.148-.153.301c-.36.566-.517 1.177-.362 1.413.09.136.31.236.524.236.294 0 .619-.23 1.22-.861.217-.23.407-.407.42-.394s-.015.15-.064.303c-.145.46-.05.745.296.893.306.13.6.04 1.032-.314.46-.377.417-.366.385-.092-.026.223-.02.25.09.358.098.099.143.114.283.095.307-.041.544-.204 1.037-.71.264-.27.499-.492.522-.492s.013.08-.022.179c-.146.416-.038.774.284.94.167.087.244.099.542.085.298-.015.392-.04.672-.183.289-.147.43-.273 1.267-1.124.519-.528.943-.943.943-.924 0 .041-.464.825-.97 1.634l-.365.585.328.013c.18.007.353.003.382-.008s.225-.306.433-.655c.3-.502.392-.627.448-.602a.8.8 0 0 0 .255.022c.128-.006.192.01.21.055.013.035-.046.224-.132.421-.185.428-.197.608-.048.756.131.132.327.14.629.025zm-7.82-.333c-.088-.087-.086-.143.015-.43.258-.736 1.054-1.566 1.349-1.408.192.103.147.502-.096.855-.373.543-.917 1.051-1.124 1.051a.24.24 0 0 1-.144-.068" fill="#000000" />
          </g>
          {showOfficial && (
            <path d="M10.506 17.772c-3.358-.211-6.452-1.124-8.347-2.462-.484-.342-1.137-.954-1.43-1.34-.6-.794-.85-1.735-.674-2.548.32-1.478 1.763-2.846 4.016-3.807 1.668-.71 3.533-1.142 5.958-1.379.844-.082 3.291-.069 4.184.024 2.67.276 4.656.795 6.416 1.677 2.259 1.132 3.457 2.63 3.366 4.204q-.103 1.815-2.347 3.303c-2.536 1.684-6.902 2.596-11.142 2.328m3.642-.493c2.17-.206 4.068-.66 5.652-1.35.594-.26.588-.257 1.185-.6 1.687-.972 2.656-2.273 2.58-3.47-.046-.75-.37-1.365-1.112-2.106-1.489-1.489-4.112-2.54-7.46-2.99-.842-.112-1.744-.161-2.991-.16-1.337 0-1.774.022-2.797.142-2.907.343-5.51 1.262-7.108 2.51-.39.305-.89.815-1.102 1.123-.325.472-.567 1.16-.567 1.611 0 .307.123.766.301 1.127 1.13 2.28 5.24 3.992 10.189 4.244.634.032 2.546-.015 3.23-.08m-4.162-.283c-2.184-.21-3.922-.621-5.523-1.305-1.972-.842-3.357-2.079-3.669-3.276-.205-.79.16-1.638 1.087-2.524 1.574-1.504 4.443-2.557 7.927-2.908 1.192-.12 3.207-.121 4.391-.001 2.979.3 5.467 1.092 7.188 2.288.438.304 1.298 1.167 1.49 1.494.478.814.516 1.433.134 2.179-.952 1.861-3.956 3.366-7.825 3.92-1.628.232-3.643.284-5.2.134zM20.237 14.4c.294-.112.716-.42 1.013-.74.237-.257.291-.348.205-.348-.022 0-.186.135-.365.3-.364.338-.6.504-.775.547-.1.024-.12.015-.12-.057 0-.047.051-.197.113-.332.133-.29.118-.47-.054-.675l-.111-.132.183-.205.29-.324c.147-.165.216-.154.195.029-.014.12.003.16.09.218.207.135.447-.009.494-.294.021-.133.006-.174-.107-.287-.236-.236-.463-.152-.928.341-.228.242-.374.358-.52.414-.212.08-.338.068-.338-.032 0-.031.359-.637.798-1.345l.798-1.288h-.72l-.3.358-.728.878c-1.204 1.455-1.92 2.212-2.391 2.524-.208.139-.285.164-.537.178-.278.016-.298.01-.37-.098-.065-.1-.068-.138-.02-.297.116-.39.556-1.143.82-1.407.17-.17.336-.195.287-.044-.08.246-.074.402.019.485.126.115.343.107.443-.016.092-.114.105-.376.028-.546-.16-.352-.914-.306-1.547.095-.134.085-.588.503-1.009.93-.602.61-.788.775-.877.775-.08 0-.113-.022-.113-.075 0-.105.16-.436.464-.97.142-.248.32-.562.395-.7l.138-.249h-.686l-.118.203-.119.202-.083-.16c-.13-.255-.304-.34-.646-.319-.557.035-1.035.345-1.925 1.247-.552.56-1.03.951-1.16.951-.108 0-.122-.118-.054-.447.085-.413.166-.562 1.14-2.12.458-.731.833-1.341.833-1.354s-.152-.023-.336-.022l-.336.002-.282.42a15 15 0 0 1-1.34 1.701c-.227.25-.426.46-.442.468-.015.007-.03-.11-.034-.26-.011-.534-.16-.843-.523-1.095-.096-.067-.176-.136-.176-.153s.147-.103.326-.192c.377-.186.7-.487.85-.791.132-.267.142-.771.02-1.022-.092-.19-.386-.489-.556-.565-.154-.068-.135-.116.097-.245.16-.089.176-.11.107-.134-.103-.036-.367.02-.577.125-.14.07-.212.074-.635.038-1.55-.129-2.884.158-3.88.835-.359.243-.866.8-1.033 1.132-.128.254-.141.311-.114.498.033.225.114.42.23.553.287.326 1.174.36 1.772.069.333-.163.514-.376.757-.89.17-.359.184-.419.2-.82.029-.717.019-.72-.286-.12-.365.72-.599 1.07-.904 1.36-.332.315-.492.394-.849.42l-.292.02-.174-.174c-.16-.16-.174-.192-.174-.41 0-.48.237-.881.758-1.278.751-.572 1.947-.976 2.905-.98.554-.002 1.063.053 1.06.114-.001.028-.11.128-.241.222-.309.221-.873.781-1.2 1.193-.513.643-1.111 1.603-1.354 2.172-.55 1.287-.885 1.66-1.592 1.772-.482.077-.817-.038-1.134-.389-.224-.248-.21-.327.066-.36.491-.058.698-.3.587-.688-.04-.143-.088-.204-.203-.264-.181-.093-.328-.073-.554.077-.249.164-.369.352-.39.608-.038.454.29.909.797 1.107.327.128 1.046.14 1.513.025 1.168-.286 2.071-1.267 2.58-2.802.197-.59.605-1.48.827-1.804.18-.262.729-.84.797-.84.174 0 .456.562.456.91 0 .405-.23.82-.623 1.124-.233.18-.239.182-.35.11-.166-.11-.488-.064-.618.087-.11.126-.122.203-.054.33.052.096.216.109.433.033.136-.047.15-.042.281.1.255.28.244.81-.029 1.351-.3.595-.65.999-1.006 1.16-.235.107-.352.104-.46-.011-.171-.184-.082-.752.149-.944.038-.032.149-.153.246-.269.173-.207.174-.21.053-.164-.438.167-.758.738-.682 1.216.065.403.425.576 1 .48.58-.095.776-.23 1.645-1.126.433-.446.798-.8.81-.788s-.056.148-.153.301c-.36.566-.517 1.177-.362 1.413.09.136.31.236.524.236.294 0 .619-.23 1.22-.861.217-.23.407-.407.42-.394s-.015.15-.064.303c-.145.46-.05.745.296.893.306.13.6.04 1.032-.314.46-.377.417-.366.385-.092-.026.223-.02.25.09.358.098.099.143.114.283.095.307-.041.544-.204 1.037-.71.264-.27.499-.492.522-.492s.013.08-.022.179c-.146.416-.038.774.284.94.167.087.244.099.542.085.298-.015.392-.04.672-.183.289-.147.43-.273 1.267-1.124.519-.528.943-.943.943-.924 0 .041-.464.825-.97 1.634l-.365.585.328.013c.18.007.353.003.382-.008s.225-.306.433-.655c.3-.502.392-.627.448-.602a.8.8 0 0 0 .255.022c.128-.006.192.01.21.055.013.035-.046.224-.132.421-.185.428-.197.608-.048.756.131.132.327.14.629.025zm-7.82-.333c-.088-.087-.086-.143.015-.43.258-.736 1.054-1.566 1.349-1.408.192.103.147.502-.096.855-.373.543-.917 1.051-1.124 1.051a.24.24 0 0 1-.144-.068" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="#00C300" />
          </g>
          {showOfficial && (
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M22.381 11.374c-.389 1.244-1.019 2.33-2.142 3.082l-.33.251-.264.236-.091.107-.025.041-.011.028-.004.016v.013l.001.009.002.007.002.006.005.007.002.002.01.008.012.007.011.004a.16.16 0 0 0 .046.006h.024c.178-.007.512-.141.629-.245l-.139.137-.164.149-.173.146-.18.141-.185.136-.197.134-.204.13-.206.123-.213.118-.223.115-.226.108-.225.1-.236.097-.045.018c-1.97.763-4.327.854-5.914-.44.353.344.787.728 1.199.98-.251-.043-.429-.237-.666-.311.004.008.575.751 2.282.946l.316.032.48.031.464.014.448-.009.44-.039.464-.084.401-.107.599-.181.294-.081.128-.033c.104-.026.214-.052.333-.077l.041-.009c.073.031-.524.339-1.344.57-.361.132-.739.2-1.119.227l-.269.012-.216.001-.218-.005-.264-.015-.315-.027-.31-.034-.056-.007c-.401-.049-.781-.107-1.122-.143h-.006.006c.03.015.209.096 1.067.402-.061.022-.346.061-1.536-.448 2.417 1.392 4.988.759 7.266-.585l.352-.215.053-.034.294-.191.151-.103c.178-.121.353-.246.526-.374 0 .009-.004.021-.004.031a.963.963 0 0 0 .075.01c-.014.041-.014.041-.214.279.435-.351.659-.896 1.12-1.225-.236.473-.538.813-1.1 1.361.033-.024.064-.051.095-.078l.028-.026-.028.026a7.88 7.88 0 0 1-3.682 1.965c.126-.014.251-.039.373-.073-.22.061-.227.068-.32.099.058-.007.058-.007.358-.068-.175.086-.377.127-.865.226 2.806-.444 5.721-2.571 5.956-5.449a.142.142 0 0 1-.152-.143c.009-.562-.147-.982-.42-1.302-.163.58-.413 1.136-1.027 2.072-.26.393-.72.41-1.005.771l-.021-.013-.032-.028-.005-.003-.004-.002-.001-.001h-.003l-.007.001h-.003l-.001.001a.193.193 0 0 0-.058.051l.062-.07.067-.092.016-.031.005-.014.002-.01v-.01l-.001-.009-.001-.003-.002-.004-.001-.003-.003-.003a.027.027 0 0 0-.005-.006l-.009-.006-.04-.019-.006-.004-.004-.004-.002-.003-.002-.002-.002-.006v-.006l.001-.007.004-.011.023-.034.014-.016c.622-.687 1.192-1.306 1.438-2.228l.006-.021-.027.032c-.087.103-.147.147-.24.265l.11-.39.035-.127.065-.26.052-.225a.859.859 0 0 0-.118-.055Zm-2.257 6.199a9.006 9.006 0 0 1-1.105.547c-.38.155-.768.279-1.152.354a10.026 10.026 0 0 0 2.257-.901Zm-6.505.203.051.02-.001-.012-.05-.008Zm3.644-2.807c-.372-.201-.515-.63-.744-.945-.6-.62-.701-1.681-.858-2.549-.158-.843-.878-1.467-1.378-2.119-.443-.361-1.599-1.457-2.145-1.632-.72-.299-1.348.267-1.947.544-.487.201-1.002.258-1.432.63-.674.865-1.079.173-1.861.858-1.165 1.22-1.606.146-3.207 1.575-.429.257-.831.515-1.348.487-.823-.039-1.103-1.145-.459-1.633.449-.502 1.552-1.019 1.004-1.831-.57-.508-1.24-.292-1.918-.858-.313.49.087 1.155.601 1.318.211.131.701-.078.802.227-.217.434-.81.669-1.088 1.089-.693.8-.009 2.112.973 2.173.363.117.825-.179 1.06-.057.028.286 0 .544.057.802.027.282.348.584.172.858-.285.245-.654.37-1.03.347-.195.225-.228.48-.344.744-.142.258-.428.372-.629.487-.133.201-.265.424-.545.458-.171.201-.2.458-.257.716.716.19.87.094 1.26-.515.143-.143.344-.029.486 0 .407-.049.711-.321 1.003-.573 1.042-.272 1.032.41 2.233-.372.201-.086.287-.315.373-.487.1-.192.378-.562.028-.658-.899 1.819-2.464.338-3.665 1.715-.184.051-.041-.235 0-.287.862-1.256 2.823-.15 3.493-1.776.117-.25.051-1.247.343-1.232.029 0 .115.029.115.086-.278 1.214-.094 1.591 1.202 1.378.444-.128 1.716.325 1.69-.286 0-.114-.115-.171 0-.257.028-.029.114 0 .143.028.081.49.511.85.919 1.06.823.56.49 1.291-.459 1.26-.315-.172-.4-.487-.63-.745-.267-.234-.633-.122-.944-.057-.155.233.212.511.286.745.143.086.344-.058.458.114.115.171.172.344.344.458.496.476 1.532-.36 2.061-.401.463.051.674-.371.831-.716.261-.477-.434-.948-.487-1.374-.158-.044-.368-.167-.487 0 .088.213.579.993.544 1.231-.064.173-.21.572-.429.544.058-.2.144-.428.144-.658-.105-.245-.565-.953-.602-1.203.092-.242.562-.102.744-.344.201-.315.258-.629.316-1.03a.127.127 0 0 1 .086-.087c.279.18-.005 1.042-.172 1.232-.016.297.568.098.687 0 .221.046.67-.175.773-.029a1.545 1.545 0 0 0-.286.573c-.172.2-.458.344-.458.63.031.18.273-.11.286.114-.249.317-.218.394-.143.745.261.368.761.065 1.088-.028.552-.217 1.172.126 1.604-.459.116.01.222.074.286.172.319.335.769.513 1.231.487.188-.13-.222-.233-.286-.287-.201-.114-.459-.286-.516-.515-.075-.32-.306-.613-.458-.916.669.01.739 1.406 1.716 1.203.048-.033.043-.069.029-.115l-.259-.057Zm-16.866.687c-.339.139-.159.558-.371.773 0 .028-.058.086 0 .115.142.028.257.086.429.114.076-.256.15-.541.2-.773-.058-.086-.143-.2-.258-.229Zm17.317-.39c-.085.109-.274.115-.356.19a.115.115 0 0 0-.023.082.24.24 0 0 1-.073.242c-.087.094-.25.136-.397.126-.734.008-1.092-.351-1.392-.523-.41.265-.665.37-1.201.287-.315-.025-.596.134-.902.212.434.372 2.193.844 1.545.524-1.072-.607-.295-.203.645.019a6.905 6.905 0 0 0 1.625.2 8.043 8.043 0 0 0 2.427-1.279.342.342 0 0 1-.118-.021.192.192 0 0 1-.095-.081c-.031-.052-.048-.136.023-.251.074-.119.286-.327.734-.651a.014.014 0 0 1 .004-.003c1.097-.736 1.71-1.8 2.088-3.015a4.09 4.09 0 0 0-.798-.2c-.405 1.006-.503 1.716-1.458 2.285-1.108.725-.414.539-.403.534.086-.035.168-.079.245-.132-.429.689-1.174 1.129-2.063 1.327a.206.206 0 0 1-.057.128Zm-16.687.39c.2-.115.315-.315.401-.487-.062-.096-.136-.223-.286-.172-.137.106-.28.201-.429.287-.072.194.107.439.315.372h-.001Zm8.648-.63c.114.143.114.343.258.458a.617.617 0 0 0 .486-.143c.086-.057-.028-.143-.057-.229-.086-.115-.028-.344-.229-.344-.217.051-.455-.012-.659.057 0 .087.172.087.201.201Zm5.125-.344a1.694 1.694 0 0 1-.4.057h-.029c-.169-.156.184-.468.372-.458h.086c.105.044.078.32-.029.401Zm7.828-3.179c-.038.169-.078.328-.12.489a.142.142 0 0 1 .133.177c-.243.936-.807 1.571-1.433 2.262l.003.005c.1-.07.207-.127.313-.184.163-.088.326-.176.442-.351.632-.962.872-1.515 1.032-2.115-.11-.106-.233-.2-.37-.283Zm-.948-2.516.117.073c1.725 1.116 2.457 3.197 1.833 4.905l.006-.005c.29-.834.408-1.718.349-2.599-.306-2.281-1.087-4.283-3.87-5.019 1.721.416 1.85.631 2.075.779-1.337-1.235-3.49-1.664-5.667-1.295 1.253-.404 3.303-.361 4.61.417l.031.019c-3.108-1.906-6.839-1.075-9.134 1.114.429.083.806.366 1.157.637l.109-.059.127-.064.131-.062.27-.119.281-.11.295-.105.306-.096.285-.079.323-.079.299-.064.273-.05.17-.027.17-.025.138-.018.172-.019c1.705-.182 3.539.045 4.907.946l.013.008a4.445 4.445 0 0 1 1.518 1.685c-.033.021-.065.016-.094-.001l-.038-.029-.108-.115-.02-.015c-.014-.005-.046-.036-.061-.043l-.209-.189-.248-.186-.266-.162-.044-.024c-.773-.418-1.714-.603-2.55-.779l-.051-.01.415.146.459.135.494.143.299.099.242.094.16.071.143.072.085.046.098.058Zm-1.112 4.436c.186-.409.62-.629.762-1.123-.021.073.134.103.195.103.245-.042.251-.379.33-.449-.061.766-.578 1.393-1.144 1.912a.255.255 0 0 0-.244-.011c-.024-.144.286-.344.101-.432Zm-5.023-.402c-.032.056-.081.202-.143.201-.062-.001-.089.009-.086-.057-.005-.193-.036-.429-.201-.544-.374-.582-.468.147-.601.057-.08-.162.046-.345.115-.487.032-.038.044-.083.086-.114.061-.353.383-.152.458.057.197.245.429.521.401.802-.029-.029-.029.028-.029.085Zm-.549-3.278c-.217-.28-.442-.582-.683-.803 1.207-.431 3.157-.54 4.121-.577.228-.007.352-.022.403-.037a.18.18 0 0 0 .087-.052.143.143 0 0 0 .037-.115.15.15 0 0 0-.066-.11.573.573 0 0 0-.18-.059 8.12 8.12 0 0 0-1.056-.106h-.002c-.657 0-1.409.067-2.124.192.255-.086.515-.156.779-.209a.142.142 0 0 0 .114-.146.143.143 0 0 0-.128-.134c-.122-.013-.895.075-1.605.241-.485.113-.938.266-1.149.438a.08.08 0 0 0-.013.013c-.071-.06-.143-.119-.213-.176 1.546-.816 4.032-1.269 6.157-.782 1.178.269 2.246.83 2.973 1.785-.868-.665-2.087-.901-3.134-1.122a.142.142 0 0 0-.082.27c.762.303 1.566.393 2.28.798 1.572.902 2.381 2.603 2.161 4.159.016-.994-.449-1.573-1.164-1.938-2.191-.92-4.263.309-6 .558v-.014l-.003-.005c-.1-.215.937-.435 1.075-.518.082-.085.222-.056.315-.132.092-.091.23-.111.353-.135.323-.165.679-.219 1.039-.226.127.019.245-.052.372-.043a.347.347 0 0 1 .188-.03c.385-.029.779-.065 1.111-.299.035-.021.153-.086.053-.099-.629-.17-.932.26-1.506-.256.009-.022-.181-.103-.208-.103-.304.061-.589.197-.905.202-.144.032-.201-.04-.345-.04-.193.045-.46.169-.657.184-.092-.017-.542.218-.551.056a.017.017 0 0 1-.01 0c-.048-.182 2.822-1.254 1.641-.532.065.056.447-.105.807-.132.404-.086.941.211 1.118-.185-.007-.065-.162-.046-.2-.019-.077.042-.16.014-.241.032-.135.016-.66-.079-.779-.071-.095-.081.528-.064.583-.073.205-.031.452-.077.657-.115.091-.011.183-.013.274-.006.186.044.684-.024.153-.153-.14-.027-.581-.041-.652-.019-.108.014-.576.153-.825.095-.225-.068.7-.106.59-.168-1.148-.145-2.457-.109-4.724 1-.072-.089-.15-.183-.236-.284Zm-2.543.902c-.029.029-.058.029-.115.029-.077-.29-.104-.592-.258-.831-.08-.079-.184-.181-.115-.315a.138.138 0 0 1 .173-.029c.262.196.306.469.315.802.057.057.028.229 0 .344Zm9.227-1.658Zm-7.497-.15.213-.075.252-.076.266-.068.313-.068.36-.067.313-.049.37-.049.442-.05.467-.042.53-.036.414-.023.446-.018.194-.018.035-.008.013-.005.005-.003v-.001l.003-.002v-.001l.001-.004c0-.002-.001-.004-.004-.007l-.004-.003-.006-.003c-.113-.058-.879-.133-1.149-.136-1.19 0-2.697.224-3.712.611l.238.201Zm2.074-1.11.027.001a6.503 6.503 0 0 0-.867.238l-.496.169-.452.166-.341.132-.285.117-.209-.174c.434-.355 1.968-.598 2.491-.642l.132-.007Zm3.546.188c.08.059.363.23.812.232a.143.143 0 0 0 .131-.086.143.143 0 0 0-.028-.154c-.09-.093-.249-.173-.434-.235-.245-.082-.537-.139-.734-.184a.14.14 0 0 0-.102.016.143.143 0 0 0-.068.083.14.14 0 0 0 .008.111c.01.021.039.059.094.09.075.041.234.099.321.127Zm-.287-.278c-.003-.004-.002-.008.003-.011.302.069.834.165 1.057.344l.04.035a1.47 1.47 0 0 1-.438-.066l-.099-.035-.092-.042-.065-.037a.216.216 0 0 1-.05-.036h.001l-.277-.103-.043-.021a.106.106 0 0 1-.037-.028Zm.305.284.002.001a.203.203 0 0 0-.002-.001Z" fill="#DB0A40" />
          </g>
          {showOfficial && (
            <path d="M22.381 11.374c-.389 1.244-1.019 2.33-2.142 3.082l-.33.251-.264.236-.091.107-.025.041-.011.028-.004.016v.013l.001.009.002.007.002.006.005.007.002.002.01.008.012.007.011.004a.16.16 0 0 0 .046.006h.024c.178-.007.512-.141.629-.245l-.139.137-.164.149-.173.146-.18.141-.185.136-.197.134-.204.13-.206.123-.213.118-.223.115-.226.108-.225.1-.236.097-.045.018c-1.97.763-4.327.854-5.914-.44.353.344.787.728 1.199.98-.251-.043-.429-.237-.666-.311.004.008.575.751 2.282.946l.316.032.48.031.464.014.448-.009.44-.039.464-.084.401-.107.599-.181.294-.081.128-.033c.104-.026.214-.052.333-.077l.041-.009c.073.031-.524.339-1.344.57-.361.132-.739.2-1.119.227l-.269.012-.216.001-.218-.005-.264-.015-.315-.027-.31-.034-.056-.007c-.401-.049-.781-.107-1.122-.143h-.006.006c.03.015.209.096 1.067.402-.061.022-.346.061-1.536-.448 2.417 1.392 4.988.759 7.266-.585l.352-.215.053-.034.294-.191.151-.103c.178-.121.353-.246.526-.374 0 .009-.004.021-.004.031a.963.963 0 0 0 .075.01c-.014.041-.014.041-.214.279.435-.351.659-.896 1.12-1.225-.236.473-.538.813-1.1 1.361.033-.024.064-.051.095-.078l.028-.026-.028.026a7.88 7.88 0 0 1-3.682 1.965c.126-.014.251-.039.373-.073-.22.061-.227.068-.32.099.058-.007.058-.007.358-.068-.175.086-.377.127-.865.226 2.806-.444 5.721-2.571 5.956-5.449a.142.142 0 0 1-.152-.143c.009-.562-.147-.982-.42-1.302-.163.58-.413 1.136-1.027 2.072-.26.393-.72.41-1.005.771l-.021-.013-.032-.028-.005-.003-.004-.002-.001-.001h-.003l-.007.001h-.003l-.001.001a.193.193 0 0 0-.058.051l.062-.07.067-.092.016-.031.005-.014.002-.01v-.01l-.001-.009-.001-.003-.002-.004-.001-.003-.003-.003a.027.027 0 0 0-.005-.006l-.009-.006-.04-.019-.006-.004-.004-.004-.002-.003-.002-.002-.002-.006v-.006l.001-.007.004-.011.023-.034.014-.016c.622-.687 1.192-1.306 1.438-2.228l.006-.021-.027.032c-.087.103-.147.147-.24.265l.11-.39.035-.127.065-.26.052-.225a.859.859 0 0 0-.118-.055Zm-2.257 6.199a9.006 9.006 0 0 1-1.105.547c-.38.155-.768.279-1.152.354a10.026 10.026 0 0 0 2.257-.901Zm-6.505.203.051.02-.001-.012-.05-.008Zm3.644-2.807c-.372-.201-.515-.63-.744-.945-.6-.62-.701-1.681-.858-2.549-.158-.843-.878-1.467-1.378-2.119-.443-.361-1.599-1.457-2.145-1.632-.72-.299-1.348.267-1.947.544-.487.201-1.002.258-1.432.63-.674.865-1.079.173-1.861.858-1.165 1.22-1.606.146-3.207 1.575-.429.257-.831.515-1.348.487-.823-.039-1.103-1.145-.459-1.633.449-.502 1.552-1.019 1.004-1.831-.57-.508-1.24-.292-1.918-.858-.313.49.087 1.155.601 1.318.211.131.701-.078.802.227-.217.434-.81.669-1.088 1.089-.693.8-.009 2.112.973 2.173.363.117.825-.179 1.06-.057.028.286 0 .544.057.802.027.282.348.584.172.858-.285.245-.654.37-1.03.347-.195.225-.228.48-.344.744-.142.258-.428.372-.629.487-.133.201-.265.424-.545.458-.171.201-.2.458-.257.716.716.19.87.094 1.26-.515.143-.143.344-.029.486 0 .407-.049.711-.321 1.003-.573 1.042-.272 1.032.41 2.233-.372.201-.086.287-.315.373-.487.1-.192.378-.562.028-.658-.899 1.819-2.464.338-3.665 1.715-.184.051-.041-.235 0-.287.862-1.256 2.823-.15 3.493-1.776.117-.25.051-1.247.343-1.232.029 0 .115.029.115.086-.278 1.214-.094 1.591 1.202 1.378.444-.128 1.716.325 1.69-.286 0-.114-.115-.171 0-.257.028-.029.114 0 .143.028.081.49.511.85.919 1.06.823.56.49 1.291-.459 1.26-.315-.172-.4-.487-.63-.745-.267-.234-.633-.122-.944-.057-.155.233.212.511.286.745.143.086.344-.058.458.114.115.171.172.344.344.458.496.476 1.532-.36 2.061-.401.463.051.674-.371.831-.716.261-.477-.434-.948-.487-1.374-.158-.044-.368-.167-.487 0 .088.213.579.993.544 1.231-.064.173-.21.572-.429.544.058-.2.144-.428.144-.658-.105-.245-.565-.953-.602-1.203.092-.242.562-.102.744-.344.201-.315.258-.629.316-1.03a.127.127 0 0 1 .086-.087c.279.18-.005 1.042-.172 1.232-.016.297.568.098.687 0 .221.046.67-.175.773-.029a1.545 1.545 0 0 0-.286.573c-.172.2-.458.344-.458.63.031.18.273-.11.286.114-.249.317-.218.394-.143.745.261.368.761.065 1.088-.028.552-.217 1.172.126 1.604-.459.116.01.222.074.286.172.319.335.769.513 1.231.487.188-.13-.222-.233-.286-.287-.201-.114-.459-.286-.516-.515-.075-.32-.306-.613-.458-.916.669.01.739 1.406 1.716 1.203.048-.033.043-.069.029-.115l-.259-.057Zm-16.866.687c-.339.139-.159.558-.371.773 0 .028-.058.086 0 .115.142.028.257.086.429.114.076-.256.15-.541.2-.773-.058-.086-.143-.2-.258-.229Zm17.317-.39c-.085.109-.274.115-.356.19a.115.115 0 0 0-.023.082.24.24 0 0 1-.073.242c-.087.094-.25.136-.397.126-.734.008-1.092-.351-1.392-.523-.41.265-.665.37-1.201.287-.315-.025-.596.134-.902.212.434.372 2.193.844 1.545.524-1.072-.607-.295-.203.645.019a6.905 6.905 0 0 0 1.625.2 8.043 8.043 0 0 0 2.427-1.279.342.342 0 0 1-.118-.021.192.192 0 0 1-.095-.081c-.031-.052-.048-.136.023-.251.074-.119.286-.327.734-.651a.014.014 0 0 1 .004-.003c1.097-.736 1.71-1.8 2.088-3.015a4.09 4.09 0 0 0-.798-.2c-.405 1.006-.503 1.716-1.458 2.285-1.108.725-.414.539-.403.534.086-.035.168-.079.245-.132-.429.689-1.174 1.129-2.063 1.327a.206.206 0 0 1-.057.128Zm-16.687.39c.2-.115.315-.315.401-.487-.062-.096-.136-.223-.286-.172-.137.106-.28.201-.429.287-.072.194.107.439.315.372h-.001Zm8.648-.63c.114.143.114.343.258.458a.617.617 0 0 0 .486-.143c.086-.057-.028-.143-.057-.229-.086-.115-.028-.344-.229-.344-.217.051-.455-.012-.659.057 0 .087.172.087.201.201Zm5.125-.344a1.694 1.694 0 0 1-.4.057h-.029c-.169-.156.184-.468.372-.458h.086c.105.044.078.32-.029.401Zm7.828-3.179c-.038.169-.078.328-.12.489a.142.142 0 0 1 .133.177c-.243.936-.807 1.571-1.433 2.262l.003.005c.1-.07.207-.127.313-.184.163-.088.326-.176.442-.351.632-.962.872-1.515 1.032-2.115-.11-.106-.233-.2-.37-.283Zm-.948-2.516.117.073c1.725 1.116 2.457 3.197 1.833 4.905l.006-.005c.29-.834.408-1.718.349-2.599-.306-2.281-1.087-4.283-3.87-5.019 1.721.416 1.85.631 2.075.779-1.337-1.235-3.49-1.664-5.667-1.295 1.253-.404 3.303-.361 4.61.417l.031.019c-3.108-1.906-6.839-1.075-9.134 1.114.429.083.806.366 1.157.637l.109-.059.127-.064.131-.062.27-.119.281-.11.295-.105.306-.096.285-.079.323-.079.299-.064.273-.05.17-.027.17-.025.138-.018.172-.019c1.705-.182 3.539.045 4.907.946l.013.008a4.445 4.445 0 0 1 1.518 1.685c-.033.021-.065.016-.094-.001l-.038-.029-.108-.115-.02-.015c-.014-.005-.046-.036-.061-.043l-.209-.189-.248-.186-.266-.162-.044-.024c-.773-.418-1.714-.603-2.55-.779l-.051-.01.415.146.459.135.494.143.299.099.242.094.16.071.143.072.085.046.098.058Zm-1.112 4.436c.186-.409.62-.629.762-1.123-.021.073.134.103.195.103.245-.042.251-.379.33-.449-.061.766-.578 1.393-1.144 1.912a.255.255 0 0 0-.244-.011c-.024-.144.286-.344.101-.432Zm-5.023-.402c-.032.056-.081.202-.143.201-.062-.001-.089.009-.086-.057-.005-.193-.036-.429-.201-.544-.374-.582-.468.147-.601.057-.08-.162.046-.345.115-.487.032-.038.044-.083.086-.114.061-.353.383-.152.458.057.197.245.429.521.401.802-.029-.029-.029.028-.029.085Zm-.549-3.278c-.217-.28-.442-.582-.683-.803 1.207-.431 3.157-.54 4.121-.577.228-.007.352-.022.403-.037a.18.18 0 0 0 .087-.052.143.143 0 0 0 .037-.115.15.15 0 0 0-.066-.11.573.573 0 0 0-.18-.059 8.12 8.12 0 0 0-1.056-.106h-.002c-.657 0-1.409.067-2.124.192.255-.086.515-.156.779-.209a.142.142 0 0 0 .114-.146.143.143 0 0 0-.128-.134c-.122-.013-.895.075-1.605.241-.485.113-.938.266-1.149.438a.08.08 0 0 0-.013.013c-.071-.06-.143-.119-.213-.176 1.546-.816 4.032-1.269 6.157-.782 1.178.269 2.246.83 2.973 1.785-.868-.665-2.087-.901-3.134-1.122a.142.142 0 0 0-.082.27c.762.303 1.566.393 2.28.798 1.572.902 2.381 2.603 2.161 4.159.016-.994-.449-1.573-1.164-1.938-2.191-.92-4.263.309-6 .558v-.014l-.003-.005c-.1-.215.937-.435 1.075-.518.082-.085.222-.056.315-.132.092-.091.23-.111.353-.135.323-.165.679-.219 1.039-.226.127.019.245-.052.372-.043a.347.347 0 0 1 .188-.03c.385-.029.779-.065 1.111-.299.035-.021.153-.086.053-.099-.629-.17-.932.26-1.506-.256.009-.022-.181-.103-.208-.103-.304.061-.589.197-.905.202-.144.032-.201-.04-.345-.04-.193.045-.46.169-.657.184-.092-.017-.542.218-.551.056a.017.017 0 0 1-.01 0c-.048-.182 2.822-1.254 1.641-.532.065.056.447-.105.807-.132.404-.086.941.211 1.118-.185-.007-.065-.162-.046-.2-.019-.077.042-.16.014-.241.032-.135.016-.66-.079-.779-.071-.095-.081.528-.064.583-.073.205-.031.452-.077.657-.115.091-.011.183-.013.274-.006.186.044.684-.024.153-.153-.14-.027-.581-.041-.652-.019-.108.014-.576.153-.825.095-.225-.068.7-.106.59-.168-1.148-.145-2.457-.109-4.724 1-.072-.089-.15-.183-.236-.284Zm-2.543.902c-.029.029-.058.029-.115.029-.077-.29-.104-.592-.258-.831-.08-.079-.184-.181-.115-.315a.138.138 0 0 1 .173-.029c.262.196.306.469.315.802.057.057.028.229 0 .344Zm9.227-1.658Zm-7.497-.15.213-.075.252-.076.266-.068.313-.068.36-.067.313-.049.37-.049.442-.05.467-.042.53-.036.414-.023.446-.018.194-.018.035-.008.013-.005.005-.003v-.001l.003-.002v-.001l.001-.004c0-.002-.001-.004-.004-.007l-.004-.003-.006-.003c-.113-.058-.879-.133-1.149-.136-1.19 0-2.697.224-3.712.611l.238.201Zm2.074-1.11.027.001a6.503 6.503 0 0 0-.867.238l-.496.169-.452.166-.341.132-.285.117-.209-.174c.434-.355 1.968-.598 2.491-.642l.132-.007Zm3.546.188c.08.059.363.23.812.232a.143.143 0 0 0 .131-.086.143.143 0 0 0-.028-.154c-.09-.093-.249-.173-.434-.235-.245-.082-.537-.139-.734-.184a.14.14 0 0 0-.102.016.143.143 0 0 0-.068.083.14.14 0 0 0 .008.111c.01.021.039.059.094.09.075.041.234.099.321.127Zm-.287-.278c-.003-.004-.002-.008.003-.011.302.069.834.165 1.057.344l.04.035a1.47 1.47 0 0 1-.438-.066l-.099-.035-.092-.042-.065-.037a.216.216 0 0 1-.05-.036h.001l-.277-.103-.043-.021a.106.106 0 0 1-.037-.028Zm.305.284.002.001a.203.203 0 0 0-.002-.001Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M24 16.375a3.05 3.05 0 0 1-.246 1.231 3.114 3.114 0 0 1-1.672 1.66 3.068 3.068 0 0 1-1.225.247 3.695 3.695 0 0 1-.71-.073 4.05 4.05 0 0 1-.739-.218 3.184 3.184 0 0 1-.676-.37 2.02 2.02 0 0 1-.507-.515.46.46 0 0 1-.08-.275.442.442 0 0 1 .152-.346.504.504 0 0 1 .346-.138.553.553 0 0 1 .201.04.392.392 0 0 1 .186.17.046.046 0 0 0 .016.032l.064.065a1.806 1.806 0 0 0 .798.507 3.052 3.052 0 0 0 .943.154 2.12 2.12 0 0 0 .846-.17 2.189 2.189 0 0 0 1.16-1.16 2.115 2.115 0 0 0 .176-.841v-1.109a3.132 3.132 0 0 1-.985.637 3.089 3.089 0 0 1-1.193.234 3.046 3.046 0 0 1-1.231-.246 3.137 3.137 0 0 1-1.66-1.66 3.04 3.04 0 0 1-.247-1.232v-2.544a3.058 3.058 0 0 1 .247-1.225 3.154 3.154 0 0 1 .668-1 3.202 3.202 0 0 1 .986-.669 3.15 3.15 0 0 1 2.463 0 3.09 3.09 0 0 1 1.668 1.668 3.066 3.066 0 0 1 .246 1.225v5.92zm-.967-5.92a2.118 2.118 0 0 0-.17-.846 2.189 2.189 0 0 0-1.16-1.16 2.201 2.201 0 0 0-1.692 0 2.191 2.191 0 0 0-1.166 1.16 2.134 2.134 0 0 0-.168.845v2.531a2.133 2.133 0 0 0 .168.853 2.194 2.194 0 0 0 .468.693 2.171 2.171 0 0 0 .694.467 2.201 2.201 0 0 0 1.692 0 2.189 2.189 0 0 0 1.16-1.16 2.117 2.117 0 0 0 .174-.853zm-7.252 5.356a.435.435 0 0 1-.154.363.511.511 0 0 1-.66 0 .434.434 0 0 1-.153-.363v-5.356a2.118 2.118 0 0 0-.17-.846 2.189 2.189 0 0 0-1.16-1.16 2.201 2.201 0 0 0-1.692 0 2.19 2.19 0 0 0-1.16 1.16 2.127 2.127 0 0 0-.17.846v5.356a.434.434 0 0 1-.152.363.511.511 0 0 1-.661 0 .434.434 0 0 1-.153-.363v-5.356a3.058 3.058 0 0 1 .246-1.225 3.163 3.163 0 0 1 .67-1 3.202 3.202 0 0 1 .984-.669 3.15 3.15 0 0 1 2.464 0 3.091 3.091 0 0 1 1.667 1.668 3.066 3.066 0 0 1 .247 1.225zm-8.383 0a.435.435 0 0 1-.152.363.511.511 0 0 1-.662 0 .434.434 0 0 1-.152-.363V7.956a.435.435 0 0 1 .152-.363.512.512 0 0 1 .662 0 .436.436 0 0 1 .152.363zM4.982 8.44a.463.463 0 0 1-.145.338.483.483 0 0 1-.355.142.503.503 0 0 1-.339-.145l-.016-.017a.149.149 0 0 0-.032-.024.123.123 0 0 1-.033-.025 1.9 1.9 0 0 0-1.24-.43q-.871 0-1.363.595-.491.596-.492 1.693v5.243a.435.435 0 0 1-.153.363.525.525 0 0 1-.33.123.525.525 0 0 1-.33-.123.434.434 0 0 1-.153-.363v-5.243A4.362 4.362 0 0 1 .18 9.303a3.034 3.034 0 0 1 .53-1.031 2.546 2.546 0 0 1 .878-.706 2.763 2.763 0 0 1 1.231-.257 3.08 3.08 0 0 1 1.065.209 2.573 2.573 0 0 1 .934.58.48.48 0 0 1 .163.343zm2.76-3.128a.826.826 0 0 1-.826.827.826.826 0 0 1-.827-.827.826.826 0 0 1 .827-.826.826.826 0 0 1 .826.826Z" fill="#1C9AD6" />
          </g>
          {showOfficial && (
            <path d="M24 16.375a3.05 3.05 0 0 1-.246 1.231 3.114 3.114 0 0 1-1.672 1.66 3.068 3.068 0 0 1-1.225.247 3.695 3.695 0 0 1-.71-.073 4.05 4.05 0 0 1-.739-.218 3.184 3.184 0 0 1-.676-.37 2.02 2.02 0 0 1-.507-.515.46.46 0 0 1-.08-.275.442.442 0 0 1 .152-.346.504.504 0 0 1 .346-.138.553.553 0 0 1 .201.04.392.392 0 0 1 .186.17.046.046 0 0 0 .016.032l.064.065a1.806 1.806 0 0 0 .798.507 3.052 3.052 0 0 0 .943.154 2.12 2.12 0 0 0 .846-.17 2.189 2.189 0 0 0 1.16-1.16 2.115 2.115 0 0 0 .176-.841v-1.109a3.132 3.132 0 0 1-.985.637 3.089 3.089 0 0 1-1.193.234 3.046 3.046 0 0 1-1.231-.246 3.137 3.137 0 0 1-1.66-1.66 3.04 3.04 0 0 1-.247-1.232v-2.544a3.058 3.058 0 0 1 .247-1.225 3.154 3.154 0 0 1 .668-1 3.202 3.202 0 0 1 .986-.669 3.15 3.15 0 0 1 2.463 0 3.09 3.09 0 0 1 1.668 1.668 3.066 3.066 0 0 1 .246 1.225v5.92zm-.967-5.92a2.118 2.118 0 0 0-.17-.846 2.189 2.189 0 0 0-1.16-1.16 2.201 2.201 0 0 0-1.692 0 2.191 2.191 0 0 0-1.166 1.16 2.134 2.134 0 0 0-.168.845v2.531a2.133 2.133 0 0 0 .168.853 2.194 2.194 0 0 0 .468.693 2.171 2.171 0 0 0 .694.467 2.201 2.201 0 0 0 1.692 0 2.189 2.189 0 0 0 1.16-1.16 2.117 2.117 0 0 0 .174-.853zm-7.252 5.356a.435.435 0 0 1-.154.363.511.511 0 0 1-.66 0 .434.434 0 0 1-.153-.363v-5.356a2.118 2.118 0 0 0-.17-.846 2.189 2.189 0 0 0-1.16-1.16 2.201 2.201 0 0 0-1.692 0 2.19 2.19 0 0 0-1.16 1.16 2.127 2.127 0 0 0-.17.846v5.356a.434.434 0 0 1-.152.363.511.511 0 0 1-.661 0 .434.434 0 0 1-.153-.363v-5.356a3.058 3.058 0 0 1 .246-1.225 3.163 3.163 0 0 1 .67-1 3.202 3.202 0 0 1 .984-.669 3.15 3.15 0 0 1 2.464 0 3.091 3.091 0 0 1 1.667 1.668 3.066 3.066 0 0 1 .247 1.225zm-8.383 0a.435.435 0 0 1-.152.363.511.511 0 0 1-.662 0 .434.434 0 0 1-.152-.363V7.956a.435.435 0 0 1 .152-.363.512.512 0 0 1 .662 0 .436.436 0 0 1 .152.363zM4.982 8.44a.463.463 0 0 1-.145.338.483.483 0 0 1-.355.142.503.503 0 0 1-.339-.145l-.016-.017a.149.149 0 0 0-.032-.024.123.123 0 0 1-.033-.025 1.9 1.9 0 0 0-1.24-.43q-.871 0-1.363.595-.491.596-.492 1.693v5.243a.435.435 0 0 1-.153.363.525.525 0 0 1-.33.123.525.525 0 0 1-.33-.123.434.434 0 0 1-.153-.363v-5.243A4.362 4.362 0 0 1 .18 9.303a3.034 3.034 0 0 1 .53-1.031 2.546 2.546 0 0 1 .878-.706 2.763 2.763 0 0 1 1.231-.257 3.08 3.08 0 0 1 1.065.209 2.573 2.573 0 0 1 .934.58.48.48 0 0 1 .163.343zm2.76-3.128a.826.826 0 0 1-.826.827.826.826 0 0 1-.827-.827.826.826 0 0 1 .827-.826.826.826 0 0 1 .826.826Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M22.979 8.337c.201-.23.326-.516.326-.73 0-.143-.083-.234-.218-.234-.224 0-.493.276-.493.691a.848.848 0 0 0 .018.175c-.257.4-.524.807-.793 1.198a1.491 1.491 0 0 0-.292-.029c-.649 0-1.319.487-1.319 1.367a1.697 1.697 0 0 0 .114.632c-.555.633-1.044 1.044-1.375 1.044-.13 0-.208-.071-.208-.219 0-.158.076-.409.229-.758l1.91-4.228 2.062-.242.234-.489-1.993.067.346-.763-.776.092-.35.695-2.79.09-.501.995 2.917-.344-.587 1.165a2.636 2.636 0 0 0-1.086-.212 3.927 3.927 0 0 0-1.766.425 1.81 1.81 0 0 0-.792-.175c-.673 0-1.436.324-2.056.893-.126-.388-.39-.62-.778-.62-.454 0-.935.238-1.396.623-.276-.225-.673-.29-1.095-.132a2.802 2.802 0 0 0 .35-1.317c0-.781-.365-1.354-1.032-1.7a5.165 5.165 0 0 1 .723-.493 1.72 1.72 0 0 0-.233-.164 6.642 6.642 0 0 0-.942.473c-.42-.134-.922-.202-1.496-.202C5.18 5.911 2.66 7.45 2.66 9.35c0 .837.473 1.137.942 1.137.438 0 .866-.246 1.002-.544-.381-.078-.607-.408-.607-.827 0-1.481 1.792-2.774 3.63-2.774.412 0 .769.077 1.062.218-1.117.86-1.975 2.03-2.682 3.282a1.937 1.937 0 0 0-.298-.024c-.528 0-.91.224-.91.666 0 .298.194.554.494.739-.44.911-.822 1.822-1.19 2.652-.128-.252-.419-.416-.755-.416-.807 0-1.418.712-1.418 1.594 0 .575.233 1.125.636 1.566-.38.425-.796.676-1.28.69a.858.858 0 0 1-.452-.114c.38-.042.692-.325.683-.692-.008-.367-.314-.628-.734-.617a.793.793 0 0 0-.783.817c.017.695.608 1.062 1.38 1.044.667-.015 1.24-.253 1.75-.654a3.266 3.266 0 0 0 1.769.5c2.049 0 3.787-1.745 3.787-4.087 0-.93-.24-1.668-.599-2.231a4.598 4.598 0 0 0 1.705-1.06c.637-.63 1.11-.572 1.381-.403-1.057 1.097-1.916 2.867-1.916 4.056 0 .737.295 1.217.862 1.217 1.7 0 3.73-3.278 3.705-5.08.546-.605 1.276-.965 1.869-.965a1.186 1.186 0 0 1 .307.037c-1.329.94-2.157 2.547-2.157 3.782 0 .655.322 1.152.95 1.152 1.17 0 2.692-1.823 2.692-3.64 0-.559-.159-.978-.41-1.273a2.599 2.599 0 0 1 1.34-.392 2.11 2.11 0 0 1 .834.18l-1.172 2.323c-.272.568-.378.988-.378 1.293 0 .469.275.71.711.71.636 0 1.385-.59 2.132-1.436.323.4.826.579 1.242.579a2.215 2.215 0 0 0 .404-.039c-.314.397-.838.696-1.607.889l-10.17 2.548c-1.545.386-2.49 1.148-2.034 2.608.353-.29.987-.573 2.63-1.073l9.232-2.816c1.35-.411 2.207-1.38 2.572-2.356.628-.306 1.189-.89 1.189-1.7.001-.894-.749-1.429-1.021-2.078zm-16.16 2.322a2.241 2.241 0 0 1 .321.33 3.023 3.023 0 0 1-.503.062q.09-.197.182-.392zm-1.592-.214c0-.231.279-.27.577-.236q-.162.3-.314.604c-.167-.105-.263-.235-.263-.368zm-2.271 5.663c-.34-.317-.507-.727-.502-1.068a1 1 0 0 1 .12-.462.756.756 0 0 0 .693.418.903.903 0 0 0 .35-.071 10.415 10.415 0 0 1-.661 1.183zm1.403.511a2.317 2.317 0 0 1-.641-.086c1.053-1.185 1.84-3.085 2.697-4.993a4.882 4.882 0 0 0 1.013-.087c.172.363.277.805.277 1.331 0 1.723-1.266 3.835-3.346 3.835zm3.366-5.816a3.254 3.254 0 0 0-.7-.577c.608-1.251 1.284-2.432 2.13-3.335.287.297.443.702.443 1.186-.001 1.204-.796 2.262-1.872 2.726zm2.597 3.579c-.164 0-.246-.142-.246-.382 0-1.047 1.778-4.474 2.673-4.474.17 0 .246.142.246.388-.002 1.058-1.77 4.468-2.673 4.468zm4.588-.996c-.17 0-.245-.135-.245-.388 0-.81.72-2.513 1.877-3.511.128.213.186.482.187.763.005 1.34-1.224 3.136-1.82 3.136zm5.744-2.368a1.326 1.326 0 0 1-.032-.295c0-.523.373-.946.865-.946q.05 0 .096.004c-.317.446-.63.866-.931 1.237zm1.867.593a1.275 1.275 0 0 1-.763.252c-.385 0-.713-.159-.917-.432.387-.47.77-.997 1.13-1.533.42.236.592.782.592 1.276a2.15 2.15 0 0 1-.044.437zm.494-.6c-.015-.6-.315-1.175-.825-1.444.202-.308.396-.617.579-.917.191.39.477.813.477 1.368a2.214 2.214 0 0 1-.232.994z" fill="#05054B" />
          </g>
          {showOfficial && (
            <path d="M22.979 8.337c.201-.23.326-.516.326-.73 0-.143-.083-.234-.218-.234-.224 0-.493.276-.493.691a.848.848 0 0 0 .018.175c-.257.4-.524.807-.793 1.198a1.491 1.491 0 0 0-.292-.029c-.649 0-1.319.487-1.319 1.367a1.697 1.697 0 0 0 .114.632c-.555.633-1.044 1.044-1.375 1.044-.13 0-.208-.071-.208-.219 0-.158.076-.409.229-.758l1.91-4.228 2.062-.242.234-.489-1.993.067.346-.763-.776.092-.35.695-2.79.09-.501.995 2.917-.344-.587 1.165a2.636 2.636 0 0 0-1.086-.212 3.927 3.927 0 0 0-1.766.425 1.81 1.81 0 0 0-.792-.175c-.673 0-1.436.324-2.056.893-.126-.388-.39-.62-.778-.62-.454 0-.935.238-1.396.623-.276-.225-.673-.29-1.095-.132a2.802 2.802 0 0 0 .35-1.317c0-.781-.365-1.354-1.032-1.7a5.165 5.165 0 0 1 .723-.493 1.72 1.72 0 0 0-.233-.164 6.642 6.642 0 0 0-.942.473c-.42-.134-.922-.202-1.496-.202C5.18 5.911 2.66 7.45 2.66 9.35c0 .837.473 1.137.942 1.137.438 0 .866-.246 1.002-.544-.381-.078-.607-.408-.607-.827 0-1.481 1.792-2.774 3.63-2.774.412 0 .769.077 1.062.218-1.117.86-1.975 2.03-2.682 3.282a1.937 1.937 0 0 0-.298-.024c-.528 0-.91.224-.91.666 0 .298.194.554.494.739-.44.911-.822 1.822-1.19 2.652-.128-.252-.419-.416-.755-.416-.807 0-1.418.712-1.418 1.594 0 .575.233 1.125.636 1.566-.38.425-.796.676-1.28.69a.858.858 0 0 1-.452-.114c.38-.042.692-.325.683-.692-.008-.367-.314-.628-.734-.617a.793.793 0 0 0-.783.817c.017.695.608 1.062 1.38 1.044.667-.015 1.24-.253 1.75-.654a3.266 3.266 0 0 0 1.769.5c2.049 0 3.787-1.745 3.787-4.087 0-.93-.24-1.668-.599-2.231a4.598 4.598 0 0 0 1.705-1.06c.637-.63 1.11-.572 1.381-.403-1.057 1.097-1.916 2.867-1.916 4.056 0 .737.295 1.217.862 1.217 1.7 0 3.73-3.278 3.705-5.08.546-.605 1.276-.965 1.869-.965a1.186 1.186 0 0 1 .307.037c-1.329.94-2.157 2.547-2.157 3.782 0 .655.322 1.152.95 1.152 1.17 0 2.692-1.823 2.692-3.64 0-.559-.159-.978-.41-1.273a2.599 2.599 0 0 1 1.34-.392 2.11 2.11 0 0 1 .834.18l-1.172 2.323c-.272.568-.378.988-.378 1.293 0 .469.275.71.711.71.636 0 1.385-.59 2.132-1.436.323.4.826.579 1.242.579a2.215 2.215 0 0 0 .404-.039c-.314.397-.838.696-1.607.889l-10.17 2.548c-1.545.386-2.49 1.148-2.034 2.608.353-.29.987-.573 2.63-1.073l9.232-2.816c1.35-.411 2.207-1.38 2.572-2.356.628-.306 1.189-.89 1.189-1.7.001-.894-.749-1.429-1.021-2.078zm-16.16 2.322a2.241 2.241 0 0 1 .321.33 3.023 3.023 0 0 1-.503.062q.09-.197.182-.392zm-1.592-.214c0-.231.279-.27.577-.236q-.162.3-.314.604c-.167-.105-.263-.235-.263-.368zm-2.271 5.663c-.34-.317-.507-.727-.502-1.068a1 1 0 0 1 .12-.462.756.756 0 0 0 .693.418.903.903 0 0 0 .35-.071 10.415 10.415 0 0 1-.661 1.183zm1.403.511a2.317 2.317 0 0 1-.641-.086c1.053-1.185 1.84-3.085 2.697-4.993a4.882 4.882 0 0 0 1.013-.087c.172.363.277.805.277 1.331 0 1.723-1.266 3.835-3.346 3.835zm3.366-5.816a3.254 3.254 0 0 0-.7-.577c.608-1.251 1.284-2.432 2.13-3.335.287.297.443.702.443 1.186-.001 1.204-.796 2.262-1.872 2.726zm2.597 3.579c-.164 0-.246-.142-.246-.382 0-1.047 1.778-4.474 2.673-4.474.17 0 .246.142.246.388-.002 1.058-1.77 4.468-2.673 4.468zm4.588-.996c-.17 0-.245-.135-.245-.388 0-.81.72-2.513 1.877-3.511.128.213.186.482.187.763.005 1.34-1.224 3.136-1.82 3.136zm5.744-2.368a1.326 1.326 0 0 1-.032-.295c0-.523.373-.946.865-.946q.05 0 .096.004c-.317.446-.63.866-.931 1.237zm1.867.593a1.275 1.275 0 0 1-.763.252c-.385 0-.713-.159-.917-.432.387-.47.77-.997 1.13-1.533.42.236.592.782.592 1.276a2.15 2.15 0 0 1-.044.437zm.494-.6c-.015-.6-.315-1.175-.825-1.444.202-.308.396-.617.579-.917.191.39.477.813.477 1.368a2.214 2.214 0 0 1-.232.994z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M4.428 2.727l3.335 3.335c-.486.07-.903.276-1.32.624L.886 12.383c-1.181 1.18-1.181 3.194 0 4.375a2.41 2.41 0 0 0 1.598.834l17.088 3.681-3.335-3.333c.486-.07.903-.278 1.32-.626l5.557-5.695c1.181-1.181 1.181-3.196 0-4.377a2.411 2.411 0 0 0-1.598-.833zM11.653 6.2c.694 0 1.25.486 1.25 1.18 0 .695-.486 1.251-1.181 1.251-.695 0-1.25-.485-1.25-1.18s.555-1.251 1.18-1.251zm1.51 3.792c.049-.006.088.046.088.098-.139.694-.695 1.181-1.39 1.181-.694 0-1.32-.487-1.46-1.112 0 0 .002-.07.071 0 .487.278.972.348 1.32.278.346 0 .833-.07 1.32-.416a.092.092 0 0 1 .05-.029zm.723 2.511c.058.013.06.106.06.158-.209.903-.973 1.666-1.946 1.666a2.167 2.167 0 0 1-2.084-1.528c-.07-.07 0-.138.138-.138.695.347 1.39.416 1.877.416.486 0 1.18-.14 1.875-.556.035-.017.06-.022.08-.018zm.597 3.018c.049-.013.087.09.087.195-.278 1.181-1.25 2.085-2.5 2.155-1.251 0-2.293-.835-2.57-1.946 0-.139.068-.278.207-.209.834.486 1.737.556 2.362.556s1.529-.208 2.362-.694c.018-.035.036-.053.052-.057z" fill="#F7901E" />
          </g>
          {showOfficial && (
            <path d="M4.428 2.727l3.335 3.335c-.486.07-.903.276-1.32.624L.886 12.383c-1.181 1.18-1.181 3.194 0 4.375a2.41 2.41 0 0 0 1.598.834l17.088 3.681-3.335-3.333c.486-.07.903-.278 1.32-.626l5.557-5.695c1.181-1.181 1.181-3.196 0-4.377a2.411 2.411 0 0 0-1.598-.833zM11.653 6.2c.694 0 1.25.486 1.25 1.18 0 .695-.486 1.251-1.181 1.251-.695 0-1.25-.485-1.25-1.18s.555-1.251 1.18-1.251zm1.51 3.792c.049-.006.088.046.088.098-.139.694-.695 1.181-1.39 1.181-.694 0-1.32-.487-1.46-1.112 0 0 .002-.07.071 0 .487.278.972.348 1.32.278.346 0 .833-.07 1.32-.416a.092.092 0 0 1 .05-.029zm.723 2.511c.058.013.06.106.06.158-.209.903-.973 1.666-1.946 1.666a2.167 2.167 0 0 1-2.084-1.528c-.07-.07 0-.138.138-.138.695.347 1.39.416 1.877.416.486 0 1.18-.14 1.875-.556.035-.017.06-.022.08-.018zm.597 3.018c.049-.013.087.09.087.195-.278 1.181-1.25 2.085-2.5 2.155-1.251 0-2.293-.835-2.57-1.946 0-.139.068-.278.207-.209.834.486 1.737.556 2.362.556s1.529-.208 2.362-.694c.018-.035.036-.053.052-.057z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M5.908 6.092a5.908 5.908 0 1 0 0 11.816 5.908 5.908 0 0 0 0-11.816zm9.23 0v2.955h5.909V6.092h-5.908zm5.909 2.955v5.906H24V9.047h-2.953zm0 5.906h-5.908v2.955h5.908v-2.955zm-5.908 0V9.047h-2.953v5.906h2.953zm-9.23-5.906A2.956 2.956 0 0 1 8.86 12a2.956 2.956 0 0 1-2.953 2.953A2.958 2.958 0 0 1 2.953 12a2.958 2.958 0 0 1 2.955-2.953z" fill="#0054FF" />
          </g>
          {showOfficial && (
            <path d="M5.908 6.092a5.908 5.908 0 1 0 0 11.816 5.908 5.908 0 0 0 0-11.816zm9.23 0v2.955h5.909V6.092h-5.908zm5.909 2.955v5.906H24V9.047h-2.953zm0 5.906h-5.908v2.955h5.908v-2.955zm-5.908 0V9.047h-2.953v5.906h2.953zm-9.23-5.906A2.956 2.956 0 0 1 8.86 12a2.956 2.956 0 0 1-2.953 2.953A2.958 2.958 0 0 1 2.953 12a2.958 2.958 0 0 1 2.955-2.953z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M.9418 0c.342 1.0548 1.8764 2.1857 2.9063 2.6238 1.3134.5583 2.5984.6849 3.7501.8122.895.0963 1.7019.2014 2.3439.4998.1622.0726.3288.148.4688.2499.4586.3364.9464.9876 1.2813 1.4368.7186.9583.5858 1.7451 1.4375 2.2178.089.0492.1683.083.2813.125.271.1018.667.2273.8437-.1563a.788.788 0 00.0625-.1874c-.0712-.229-.321-.4327-.4687-.531-.2618-.171-.3735-.274-.5625-.4685-.3494-.3583-.348-.9508-.5938-1.3744.3092-.131 1.9392-.3597 2.2813-.3124.7313.0326 1.31.0782 1.75.531.1727.1365.2497.2567.4064.3749.011.009.0202.024.0312.0312.6933.5037 1.3388.6705 1.9063.8434.1496.0454.2988.1054.4375.1562.213.0763.4065.1594.5938.281.2222.1474.6089.542.625.8747-.5587-.1783-.207.0323-1.0313-.0312-.4019-.0456-.8058-.0647-1.2187-.0937-.6422-.0454-1.273-.1043-1.8751-.2187-.1002-.0184-.2146-.0388-.3125-.0625-.0766-.0163-.146-.011-.2188-.0312-.0018.0308 0 .0353 0 .0625-.0166.6292.4214.9586-.5938 2.1553-.009.0127-.0204.0167-.0312.0312-.2695.3147-1.657.9163-2.0938 1.0308-1.8593.3728-3.292-.828-5.5315-.2187-.7877.2928-1.3567 1.5756-1.7188 2.5302-.482 1.2677-.8758 2.7956-1.3126 4.3106-.2.6982-.4178 1.4015-.6562 2.0616-.575 1.584-1.3113 2.9428-2.4064 3.717-.1638.1256-.787.41-.8125.6248.404.2037 4.185.056 4.8127 0 2.5033-.2184 3.6468-1.7733 4.4689-3.9045.5659-1.462 1.065-3.9864 2.0313-5.3102.0128-.0182.0183-.015.0313-.0312.1456-.1967.327-.3691.5-.4998.0454-.0347.0775-.0648.125-.0937.0344-.0219.1566-.0592.3438-.0937 1.7357-.3074 9.3491-1.3474 9.844-6.872.051-.5581.0158-1.1588-.0937-1.8117-.0543-.3364-.115-.6653-.2187-1.0308-.2457-.8691-.7981-1.614-1.5313-2.2177-.1926-.16-.405-.3285-.625-.4686-.846-.54-1.8774-.921-2.969-1.1557-.7332-.1582-1.4874-.239-2.25-.25C9.8402.0326 6.3978.2075.9418 0zm1.625 4.2169c.0235.0382.0389.0574.0625.0937C4.2284 6.8382 6.239 6.8135 8.067 7.0281c.666.0782 1.317.1849 1.9063.4686.262.1235.5116.2649.75.4685-.0292-.131-.076-.2564-.125-.3748-.444-1.0763-1.6487-1.6661-2.6875-1.9679-1.3938-.4984-2.4038-.0181-5.344-1.4056zm1.4063 3.186c.0107.0528.0094.0946.0313.1563.2199.6346 1.0403 1.6503 2.0938 1.8741.4567.1636.315.1174 1.0938.0937 1.1406-.0581 1.692-.0793 2.5.25-.02-.0493-.0423-.1091-.0624-.1563C9.0074 8.175 8.2593 8.421 5.8794 8.2464c-1.0188-.3074-1.2587-.3415-1.9063-.8434z" fill="#14A0C4" />
          </g>
          {showOfficial && (
            <path d="M.9418 0c.342 1.0548 1.8764 2.1857 2.9063 2.6238 1.3134.5583 2.5984.6849 3.7501.8122.895.0963 1.7019.2014 2.3439.4998.1622.0726.3288.148.4688.2499.4586.3364.9464.9876 1.2813 1.4368.7186.9583.5858 1.7451 1.4375 2.2178.089.0492.1683.083.2813.125.271.1018.667.2273.8437-.1563a.788.788 0 00.0625-.1874c-.0712-.229-.321-.4327-.4687-.531-.2618-.171-.3735-.274-.5625-.4685-.3494-.3583-.348-.9508-.5938-1.3744.3092-.131 1.9392-.3597 2.2813-.3124.7313.0326 1.31.0782 1.75.531.1727.1365.2497.2567.4064.3749.011.009.0202.024.0312.0312.6933.5037 1.3388.6705 1.9063.8434.1496.0454.2988.1054.4375.1562.213.0763.4065.1594.5938.281.2222.1474.6089.542.625.8747-.5587-.1783-.207.0323-1.0313-.0312-.4019-.0456-.8058-.0647-1.2187-.0937-.6422-.0454-1.273-.1043-1.8751-.2187-.1002-.0184-.2146-.0388-.3125-.0625-.0766-.0163-.146-.011-.2188-.0312-.0018.0308 0 .0353 0 .0625-.0166.6292.4214.9586-.5938 2.1553-.009.0127-.0204.0167-.0312.0312-.2695.3147-1.657.9163-2.0938 1.0308-1.8593.3728-3.292-.828-5.5315-.2187-.7877.2928-1.3567 1.5756-1.7188 2.5302-.482 1.2677-.8758 2.7956-1.3126 4.3106-.2.6982-.4178 1.4015-.6562 2.0616-.575 1.584-1.3113 2.9428-2.4064 3.717-.1638.1256-.787.41-.8125.6248.404.2037 4.185.056 4.8127 0 2.5033-.2184 3.6468-1.7733 4.4689-3.9045.5659-1.462 1.065-3.9864 2.0313-5.3102.0128-.0182.0183-.015.0313-.0312.1456-.1967.327-.3691.5-.4998.0454-.0347.0775-.0648.125-.0937.0344-.0219.1566-.0592.3438-.0937 1.7357-.3074 9.3491-1.3474 9.844-6.872.051-.5581.0158-1.1588-.0937-1.8117-.0543-.3364-.115-.6653-.2187-1.0308-.2457-.8691-.7981-1.614-1.5313-2.2177-.1926-.16-.405-.3285-.625-.4686-.846-.54-1.8774-.921-2.969-1.1557-.7332-.1582-1.4874-.239-2.25-.25C9.8402.0326 6.3978.2075.9418 0zm1.625 4.2169c.0235.0382.0389.0574.0625.0937C4.2284 6.8382 6.239 6.8135 8.067 7.0281c.666.0782 1.317.1849 1.9063.4686.262.1235.5116.2649.75.4685-.0292-.131-.076-.2564-.125-.3748-.444-1.0763-1.6487-1.6661-2.6875-1.9679-1.3938-.4984-2.4038-.0181-5.344-1.4056zm1.4063 3.186c.0107.0528.0094.0946.0313.1563.2199.6346 1.0403 1.6503 2.0938 1.8741.4567.1636.315.1174 1.0938.0937 1.1406-.0581 1.692-.0793 2.5.25-.02-.0493-.0423-.1091-.0624-.1563C9.0074 8.175 8.2593 8.421 5.8794 8.2464c-1.0188-.3074-1.2587-.3415-1.9063-.8434z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="m16.21 11.172 4.963-5.792c.943-1.293 1.494-1.828 1.07-3.94l-7.367 8.6a7.907 7.907 0 0 0-1.896 5.487L9.763 11.87a5.775 5.775 0 0 0-.947-.829A9.979 9.979 0 0 0 7 10.051c.213-.076.43-.14.649-.194.385-.094.78-.144 1.176-.147.444 0 .881.07 1.3.237.416.168.82.432 1.212.858l.216.252 1.336-1.129c-.01-.011-.241-.283-.251-.292a5.09 5.09 0 0 0-1.86-1.308 5.233 5.233 0 0 0-1.953-.364c-.151 0-.299.007-.446.017-1.461.24-2.364 1.104-3.714 1.244.001.006-4.58 0-4.581.002-.101 0-.115.144-.017.163 1.202.24 3.341.699 4.844 1.214 1.142.529 2.24 1.205 3.106 2.022.17.135.317.271.439.405l4.283 4.87c.61.501 1.395.755 3.066.767a6.197 6.197 0 0 1-.695-1.337 6.173 6.173 0 0 1-.014-4.256 6.139 6.139 0 0 1 1.114-1.903zM24 22.56c-1.734-.022-2.489-.317-3.11-.888l-.962-1.093c-.065-.079-.13-.157-.197-.234l.011.023-1.704-1.937a4.794 4.794 0 0 1-.905-4.806 4.755 4.755 0 0 1 .871-1.482l4.208-4.892c.43 2.179-.192 2.666-1.21 4.09l-1.668 1.937a3.038 3.038 0 0 0-.739 1.989c.001.741.272 1.458.761 2.014L24 22.56z" fill="#49B48A" />
          </g>
          {showOfficial && (
            <path d="m16.21 11.172 4.963-5.792c.943-1.293 1.494-1.828 1.07-3.94l-7.367 8.6a7.907 7.907 0 0 0-1.896 5.487L9.763 11.87a5.775 5.775 0 0 0-.947-.829A9.979 9.979 0 0 0 7 10.051c.213-.076.43-.14.649-.194.385-.094.78-.144 1.176-.147.444 0 .881.07 1.3.237.416.168.82.432 1.212.858l.216.252 1.336-1.129c-.01-.011-.241-.283-.251-.292a5.09 5.09 0 0 0-1.86-1.308 5.233 5.233 0 0 0-1.953-.364c-.151 0-.299.007-.446.017-1.461.24-2.364 1.104-3.714 1.244.001.006-4.58 0-4.581.002-.101 0-.115.144-.017.163 1.202.24 3.341.699 4.844 1.214 1.142.529 2.24 1.205 3.106 2.022.17.135.317.271.439.405l4.283 4.87c.61.501 1.395.755 3.066.767a6.197 6.197 0 0 1-.695-1.337 6.173 6.173 0 0 1-.014-4.256 6.139 6.139 0 0 1 1.114-1.903zM24 22.56c-1.734-.022-2.489-.317-3.11-.888l-.962-1.093c-.065-.079-.13-.157-.197-.234l.011.023-1.704-1.937a4.794 4.794 0 0 1-.905-4.806 4.755 4.755 0 0 1 .871-1.482l4.208-4.892c.43 2.179-.192 2.666-1.21 4.09l-1.668 1.937a3.038 3.038 0 0 0-.739 1.989c.001.741.272 1.458.761 2.014L24 22.56z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M23.943 9.364c-.085-.113-.17-.198-.595-.226-.113 0-.453-.029-1.048-.029-1.56 0-2.636.482-3.175 1.417.142-.935-.765-1.417-2.749-1.417-2.324 0-3.798.935-4.393 2.834-.226.709-.226 1.276-.056 1.73h-.567c-.425.027-.992.056-1.36.056-.85 0-1.39-.142-1.588-.425-.17-.255-.17-.737.057-1.446.368-1.162 1.247-1.672 2.664-1.672.737 0 1.445.085 1.445.085.085 0 .142-.113.142-.198l-.028-.085-.057-.397c-.028-.255-.227-.397-.567-.453-.311-.029-.567-.029-.907-.029h-.028c-1.842 0-3.146.624-3.854 1.814.255-1.219-.596-1.814-2.551-1.814-1.105 0-1.9.029-2.353.085-.368.057-.595.199-.68.454l-.17.51c-.028.085.029.142.142.142.085 0 .425-.057.992-.086a24.816 24.816 0 0 1 1.672-.085c1.077 0 1.559.284 1.389.822-.029.114-.114.199-.255.227-1.02.17-1.842.284-2.438.369-1.7.226-2.692.736-2.947 1.587-.369 1.162.538 1.728 2.72 1.728 1.078 0 2.013-.056 2.75-.198.425-.085.652-.17.737-.453l.396-1.304c-.028 1.304.85 1.955 2.721 1.955.794 0 1.559-.028 1.927-.085.369-.056.567-.141.652-.425l.085-.396c.397.623 1.276.935 2.608.935 1.417 0 2.239-.029 2.465-.114a.523.523 0 0 0 .369-.311l.028-.085.17-.539c.029-.085-.028-.142-.142-.142l-.906.057c-.596.029-1.077.057-1.418.057-.651 0-1.076-.057-1.332-.142-.368-.142-.538-.397-.51-.822l2.863-.368c1.275-.17 2.154-.567 2.579-1.19l-.992 3.315c-.028.057 0 .114.028.142.029.028.085.057.199.057h1.19c.198 0 .283-.114.312-.199l1.048-3.656c.142-.481.567-.708 1.36-.708.71 0 1.22 0 1.56.028h.028c.057 0 .17-.028.255-.17l.17-.51c0-.085 0-.17-.057-.227zM4.841 13.73c-.368.057-.907.085-1.587.085-1.219 0-1.729-.255-1.587-.737.113-.34.425-.567.935-.624l2.75-.368zm12.669-2.95c-.114.369-.652.624-1.616.766l-2.295.311.056-.198c.199-.624.454-1.02.794-1.247.34-.227.907-.34 1.7-.34 1.05.028 1.503.255 1.36.708Z" fill="#83B81A" />
          </g>
          {showOfficial && (
            <path d="M23.943 9.364c-.085-.113-.17-.198-.595-.226-.113 0-.453-.029-1.048-.029-1.56 0-2.636.482-3.175 1.417.142-.935-.765-1.417-2.749-1.417-2.324 0-3.798.935-4.393 2.834-.226.709-.226 1.276-.056 1.73h-.567c-.425.027-.992.056-1.36.056-.85 0-1.39-.142-1.588-.425-.17-.255-.17-.737.057-1.446.368-1.162 1.247-1.672 2.664-1.672.737 0 1.445.085 1.445.085.085 0 .142-.113.142-.198l-.028-.085-.057-.397c-.028-.255-.227-.397-.567-.453-.311-.029-.567-.029-.907-.029h-.028c-1.842 0-3.146.624-3.854 1.814.255-1.219-.596-1.814-2.551-1.814-1.105 0-1.9.029-2.353.085-.368.057-.595.199-.68.454l-.17.51c-.028.085.029.142.142.142.085 0 .425-.057.992-.086a24.816 24.816 0 0 1 1.672-.085c1.077 0 1.559.284 1.389.822-.029.114-.114.199-.255.227-1.02.17-1.842.284-2.438.369-1.7.226-2.692.736-2.947 1.587-.369 1.162.538 1.728 2.72 1.728 1.078 0 2.013-.056 2.75-.198.425-.085.652-.17.737-.453l.396-1.304c-.028 1.304.85 1.955 2.721 1.955.794 0 1.559-.028 1.927-.085.369-.056.567-.141.652-.425l.085-.396c.397.623 1.276.935 2.608.935 1.417 0 2.239-.029 2.465-.114a.523.523 0 0 0 .369-.311l.028-.085.17-.539c.029-.085-.028-.142-.142-.142l-.906.057c-.596.029-1.077.057-1.418.057-.651 0-1.076-.057-1.332-.142-.368-.142-.538-.397-.51-.822l2.863-.368c1.275-.17 2.154-.567 2.579-1.19l-.992 3.315c-.028.057 0 .114.028.142.029.028.085.057.199.057h1.19c.198 0 .283-.114.312-.199l1.048-3.656c.142-.481.567-.708 1.36-.708.71 0 1.22 0 1.56.028h.028c.057 0 .17-.028.255-.17l.17-.51c0-.085 0-.17-.057-.227zM4.841 13.73c-.368.057-.907.085-1.587.085-1.219 0-1.729-.255-1.587-.737.113-.34.425-.567.935-.624l2.75-.368zm12.669-2.95c-.114.369-.652.624-1.616.766l-2.295.311.056-.198c.199-.624.454-1.02.794-1.247.34-.227.907-.34 1.7-.34 1.05.028 1.503.255 1.36.708Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M12 0a29.658 29.658 0 0 1-3.611 3.53A27.326 27.326 0 0 1 9.729 12c0 2.948-.47 5.792-1.34 8.47A29.658 29.658 0 0 1 12 24a29.658 29.658 0 0 1 3.611-3.53 27.326 27.326 0 0 1-1.34-8.47c0-2.948.47-5.792 1.34-8.47A29.658 29.658 0 0 1 12 0Zm6.109 5.381A27.362 27.362 0 0 0 17.3 12c0 2.278.28 4.494.809 6.619a30.696 30.696 0 0 1 4.391-2.424A13.662 13.662 0 0 1 21.843 12c0-1.46.23-2.868.657-4.195a30.698 30.698 0 0 1-4.391-2.424Zm-12.218 0A30.7 30.7 0 0 1 1.5 7.805c.427 1.327.657 2.736.657 4.195 0 1.46-.23 2.868-.657 4.195a30.696 30.696 0 0 1 4.391 2.424C6.42 16.494 6.7 14.278 6.7 12c0-2.278-.28-4.494-.809-6.619z" fill="#6851FF" />
          </g>
          {showOfficial && (
            <path d="M12 0a29.658 29.658 0 0 1-3.611 3.53A27.326 27.326 0 0 1 9.729 12c0 2.948-.47 5.792-1.34 8.47A29.658 29.658 0 0 1 12 24a29.658 29.658 0 0 1 3.611-3.53 27.326 27.326 0 0 1-1.34-8.47c0-2.948.47-5.792 1.34-8.47A29.658 29.658 0 0 1 12 0Zm6.109 5.381A27.362 27.362 0 0 0 17.3 12c0 2.278.28 4.494.809 6.619a30.696 30.696 0 0 1 4.391-2.424A13.662 13.662 0 0 1 21.843 12c0-1.46.23-2.868.657-4.195a30.698 30.698 0 0 1-4.391-2.424Zm-12.218 0A30.7 30.7 0 0 1 1.5 7.805c.427 1.327.657 2.736.657 4.195 0 1.46-.23 2.868-.657 4.195a30.696 30.696 0 0 1 4.391 2.424C6.42 16.494 6.7 14.278 6.7 12c0-2.278-.28-4.494-.809-6.619z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M24 15.2372a20.744 20.744 0 0 0-9.86-7.5087 31.2657 31.2657 0 0 1 6.9097 1.0135l-1.5536-1.3192A29.1614 29.1614 0 0 0 9.0497 5.509a29.0797 29.0797 0 0 0-6.4051.7036L0 8.032c.335 0 .8376-.021 1.1747-.021a25.1537 25.1537 0 0 1 20.4571 10.48ZM9.1963 12.9758h3.3334l-.3329 1.183h-1.0532L9.9333 18.491H8.7692l1.206-4.3322H8.8655zm-3.771 0H6.468l.4376 2.9544.8229-2.9544h1.1977l-1.537 5.5152H6.221l-.4041-2.743-.7643 2.743H3.8841ZM0 18.491l2.8225-5.5131h1.181L3.769 18.491H2.5838l.0545-.7391H1.5264l-.3601.7391zm2.0206-1.8844h.6889l.2094-1.9474zm8.2122 1.8844 2.8288-5.5131h1.1768l-.2346 5.5131h-1.181l.0524-.7391h-1.1076l-.3644.7391zm2.0247-1.8844h.689l.2093-1.9474z" fill="#D70010" />
          </g>
          {showOfficial && (
            <path d="M24 15.2372a20.744 20.744 0 0 0-9.86-7.5087 31.2657 31.2657 0 0 1 6.9097 1.0135l-1.5536-1.3192A29.1614 29.1614 0 0 0 9.0497 5.509a29.0797 29.0797 0 0 0-6.4051.7036L0 8.032c.335 0 .8376-.021 1.1747-.021a25.1537 25.1537 0 0 1 20.4571 10.48ZM9.1963 12.9758h3.3334l-.3329 1.183h-1.0532L9.9333 18.491H8.7692l1.206-4.3322H8.8655zm-3.771 0H6.468l.4376 2.9544.8229-2.9544h1.1977l-1.537 5.5152H6.221l-.4041-2.743-.7643 2.743H3.8841ZM0 18.491l2.8225-5.5131h1.181L3.769 18.491H2.5838l.0545-.7391H1.5264l-.3601.7391zm2.0206-1.8844h.6889l.2094-1.9474zm8.2122 1.8844 2.8288-5.5131h1.1768l-.2346 5.5131h-1.181l.0524-.7391h-1.1076l-.3644.7391zm2.0247-1.8844h.689l.2093-1.9474z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M1.8246 0c-.4424 0-.774.3685-.774.774v6.1198c0 .4424.3685.7747.774.7747H5.88c.4424 0 .774-.3323.774-.7747 0-.4424-.3684-.774-.774-.774H2.562V1.548h2.544v1.2903c0 .2212.0736.4056.221.553.1475.1475.3687.2218.553.2218h4.092c.4425 0 .7749-.3692.7749-.7748V1.5481H13.29v1.2903c0 .4424.3692.7748.7747.7748h4.092c.2213 0 .4056-.0743.553-.2218.1476-.1474.2211-.3686.2211-.553V1.5481h2.544V6.083H18.12c-.4424 0-.7748.3685-.7748.774 0 .4424.3692.774.7748.774h4.092c.1843 0 .4055-.0735.553-.221.1475-.1474.221-.3686.221-.553V.774c0-.4055-.3689-.7371-.6638-.774h-4.092c-.4425 0-.7741.3685-.7741.774v1.2904h-2.544V.774c0-.4424-.3685-.7741-.774-.7741h-4.092c-.4425 0-.7741.3685-.7741.774v1.2904H6.6914V.774C6.6914.3317 6.3222 0 5.9167 0ZM1.788 9.069c-.4424 0-.774.3686-.774.774v8.8113C1.0138 21.6037 3.4101 24 6.3594 24h11.281c2.9493 0 5.3457-2.3963 5.3457-5.3457V9.8431c0-.4424-.3686-.774-.774-.774zm.774 1.5114h18.8762v8.074c0 2.1013-1.6962 3.7975-3.7976 3.7975H6.3595c-2.1014 0-3.7976-1.6962-3.7976-3.7976zm9.4377 2.544c-1.8802 0-3.4281 1.5486-3.4281 3.4288v2.6541c0 .4424.3685.7741.774.7741h5.309c.4424 0 .774-.3685.774-.774v-2.6542c0-1.8802-1.5487-3.4288-3.4289-3.4288zm-.0367 1.4746c1.0691 0 1.9175.8484 1.9175 1.9175v1.9168h-3.8343v-1.9168c0-1.0691.8477-1.9175 1.9168-1.9175z" fill="#2AC6EA" />
          </g>
          {showOfficial && (
            <path d="M1.8246 0c-.4424 0-.774.3685-.774.774v6.1198c0 .4424.3685.7747.774.7747H5.88c.4424 0 .774-.3323.774-.7747 0-.4424-.3684-.774-.774-.774H2.562V1.548h2.544v1.2903c0 .2212.0736.4056.221.553.1475.1475.3687.2218.553.2218h4.092c.4425 0 .7749-.3692.7749-.7748V1.5481H13.29v1.2903c0 .4424.3692.7748.7747.7748h4.092c.2213 0 .4056-.0743.553-.2218.1476-.1474.2211-.3686.2211-.553V1.5481h2.544V6.083H18.12c-.4424 0-.7748.3685-.7748.774 0 .4424.3692.774.7748.774h4.092c.1843 0 .4055-.0735.553-.221.1475-.1474.221-.3686.221-.553V.774c0-.4055-.3689-.7371-.6638-.774h-4.092c-.4425 0-.7741.3685-.7741.774v1.2904h-2.544V.774c0-.4424-.3685-.7741-.774-.7741h-4.092c-.4425 0-.7741.3685-.7741.774v1.2904H6.6914V.774C6.6914.3317 6.3222 0 5.9167 0ZM1.788 9.069c-.4424 0-.774.3686-.774.774v8.8113C1.0138 21.6037 3.4101 24 6.3594 24h11.281c2.9493 0 5.3457-2.3963 5.3457-5.3457V9.8431c0-.4424-.3686-.774-.774-.774zm.774 1.5114h18.8762v8.074c0 2.1013-1.6962 3.7975-3.7976 3.7975H6.3595c-2.1014 0-3.7976-1.6962-3.7976-3.7976zm9.4377 2.544c-1.8802 0-3.4281 1.5486-3.4281 3.4288v2.6541c0 .4424.3685.7741.774.7741h5.309c.4424 0 .774-.3685.774-.774v-2.6542c0-1.8802-1.5487-3.4288-3.4289-3.4288zm-.0367 1.4746c1.0691 0 1.9175.8484 1.9175 1.9175v1.9168h-3.8343v-1.9168c0-1.0691.8477-1.9175 1.9168-1.9175z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M23.922 10.66a11.925 11.925 0 0 0-1.93-5.299 12.002 12.002 0 0 0-1.362-1.692A11.993 11.993 0 0 0 15.271.455a11.916 11.916 0 0 0-2.88-.444c-.237-.005-.474-.015-.71-.004-.345.016-.69.036-1.033.077-.385.046-.77.108-1.15.182a11.947 11.947 0 0 0-4.906 2.297A12.012 12.012 0 0 0 .394 8.94a11.886 11.886 0 0 0-.393 2.883c-.009.51.016 1.019.073 1.526a11.954 11.954 0 0 0 3.103 6.79 11.982 11.982 0 0 0 8.442 3.858c.013 0 .818-.002.868-.004.518-.02 1.032-.076 1.543-.162a11.947 11.947 0 0 0 6.173-3.072 11.975 11.975 0 0 0 3.667-7.028c.053-.406.087-.815.113-1.224.038-.617.006-1.234-.062-1.848zM4.5 11.777c-.052.3-.094.601-.097.906-.003.253-.005.506.004.76.005.148.031.297.051.445.033.252-.067.455-.297.56a.473.473 0 0 1-.227.035c-.217-.019-.433-.05-.65-.077-.073-.01-.147-.017-.22-.03-.017-.003-.04-.025-.042-.041-.041-.249-.086-.497-.115-.747-.024-.206-.03-.413-.043-.62-.006-.118-.014-.236-.013-.355.002-.197.005-.394.017-.59.014-.218.034-.436.06-.653.02-.177.045-.355.083-.529.062-.29.134-.579.207-.867.07-.275.162-.542.273-.804.08-.187.15-.377.235-.56.09-.195.188-.387.295-.573.12-.21.251-.414.382-.619.083-.13.17-.259.26-.384.074-.102.155-.197.234-.295.072-.088.142-.178.217-.263a7.6 7.6 0 0 1 .25-.274c.123-.128.247-.254.373-.378.087-.085.176-.17.27-.248.173-.145.346-.293.528-.427.227-.168.46-.329.697-.483.186-.12.375-.235.572-.336.253-.129.513-.244.773-.359.159-.07.321-.133.486-.19a11.02 11.02 0 0 1 1.312-.359c.279-.05.56-.086.841-.12.194-.023.39-.042.586-.044.312-.003.625-.004.936.019.342.024.683.07 1.023.118.182.026.362.071.54.117.288.075.578.146.86.24.246.08.487.182.724.288.26.116.513.245.767.374.107.054.21.118.311.183.195.124.392.246.58.38.189.135.368.282.55.424.016.012.03.026.05.045-.165.109-.325.211-.481.318-.168.116-.334.235-.5.353-.105.073-.211.145-.315.219-.13.092-.258.187-.387.28l-.45.321c-.11.08-.218.162-.327.243-.129.096-.26.19-.387.288-.217.167-.443.138-.643.003a6.527 6.527 0 0 0-1.757-.83 5.884 5.884 0 0 0-1.33-.246c-.19-.013-.381-.018-.572-.025a4.367 4.367 0 0 0-.792.047 23.89 23.89 0 0 0-.62.105 5.084 5.084 0 0 0-.795.225 6.08 6.08 0 0 0-.527.218 7.22 7.22 0 0 0-.574.294c-.178.103-.347.222-.516.339-.108.073-.214.15-.313.233-.149.124-.292.255-.435.385-.26.235-.486.5-.697.778-.132.174-.25.36-.368.545a5.76 5.76 0 0 0-.489.967 6.298 6.298 0 0 0-.368 1.271zm13.278 5.496c-.175-.122-.353-.242-.527-.366a.5.5 0 0 1-.154-.237l-.222-.55-.21-.532c-.07-.17-.141-.34-.21-.512-.071-.176-.137-.355-.213-.53-.088-.204-.14-.427-.28-.606a4.738 4.738 0 0 0-.288-.337 2.613 2.613 0 0 0-.498-.413c-.14-.09-.298-.12-.457-.148-.449-.081-.896-.166-1.345-.248l-1.368-.246c-.39-.07-.78-.137-1.166-.218-.258-.054-.494.162-.518.407-.023.246.167.456.375.508.56.141 1.118.293 1.677.442.662.175 1.324.347 1.984.527.22.06.416.173.597.313.22.17.4.375.53.62.084.163.151.336.22.506.071.177.14.355.202.534.093.268.182.537.27.806.055.164.11.328.16.492.075.237.147.475.22.712.05.163.099.327.147.49l.184.638c.048.164.098.327.144.492.07.242.14.485.204.729.033.126-.065.268-.2.287-.273.038-.547.07-.821.104-.182.023-.364.043-.546.063l-.66.07c-.28.029-.558.06-.837.09-.118.012-.236.03-.355.028a1.03 1.03 0 0 1-.688-.261c-.144-.126-.223-.292-.316-.451-.078-.135-.152-.272-.235-.403a12.841 12.841 0 0 0-.398-.602c-.134-.187-.28-.365-.423-.544a6.035 6.035 0 0 0-.229-.265 6.95 6.95 0 0 0-.757-.737 8.876 8.876 0 0 0-.641-.488 5.608 5.608 0 0 0-1.755-.803c-.436-.112-.878-.195-1.333-.187a3.542 3.542 0 0 0-.678.07c-.16.034-.309.022-.441-.089-.073-.06-.104-.144-.146-.223-.017-.032-.027-.068-.044-.109.072-.02.143-.042.216-.058a1.93 1.93 0 0 1 .227-.042c.195-.023.39-.053.584-.058.281-.007.564-.01.844.012a7.816 7.816 0 0 1 1.592.321c.24.076.473.175.704.274.387.166.727.407 1.051.673.214.175.419.36.603.567.225.252.449.506.66.77.15.186.282.389.419.587.228.332.43.681.62 1.037.048.089.093.18.133.272.064.153.199.2.341.183l.572-.07.7-.08c.27-.028.54-.054.81-.084.208-.024.416-.05.624-.08.117-.018.202-.132.208-.254.006-.108-.045-.2-.077-.296-.089-.272-.184-.542-.276-.813-.09-.263-.177-.525-.266-.787-.092-.276-.183-.551-.277-.826-.064-.188-.131-.375-.196-.563-.054-.156-.104-.312-.16-.467-.067-.186-.137-.37-.208-.555-.037-.096-.074-.192-.12-.284a1.22 1.22 0 0 0-.482-.514c-.2-.12-.424-.159-.641-.22-.64-.18-1.28-.356-1.92-.533l-.825-.23c-.218-.06-.435-.129-.657-.177-.259-.057-.433-.212-.57-.427a1.32 1.32 0 0 1-.202-.583.867.867 0 0 1 .12-.546.919.919 0 0 1 .44-.382.7.7 0 0 1 .411-.041c.322.06.645.112.968.168.227.04.454.083.681.121.268.045.536.086.803.13.193.032.386.067.579.1.224.037.448.072.671.11.195.034.389.073.584.103.126.019.249.042.362.102.054.029.11.06.156.1.163.146.326.295.484.447.141.136.279.276.413.42a.945.945 0 0 1 .217.392c.033.115.077.227.117.34l.167.471.212.595c.062.178.122.356.185.534l.176.497.188.544.093.268-.013.01zm.708.363a3.104 3.104 0 0 1-.37-.169c-.03-.016-.039-.076-.054-.117-.07-.197-.138-.395-.206-.592l-.23-.664-.23-.653c-.094-.267-.185-.534-.279-.8a78.3 78.3 0 0 0-.2-.565c-.037-.101-.073-.203-.113-.304-.063-.161-.179-.285-.296-.407-.1-.104-.199-.209-.304-.306a18.166 18.166 0 0 0-.605-.537c-.149-.125-.334-.167-.522-.197a66.347 66.347 0 0 1-.603-.098c-.247-.04-.493-.083-.739-.125l-.665-.113-1.026-.172c-.279-.048-.557-.098-.836-.145-.197-.033-.393-.075-.591-.089-.11-.007-.226.026-.335.056a.939.939 0 0 0-.395.235c-.118.113-.21.247-.272.402-.12.306-.101.606.007.909.071.197.173.376.317.528.142.15.307.258.513.306.248.058.493.129.74.196.44.12.881.24 1.322.362l.842.233.841.235c.266.074.48.224.621.46.07.118.117.252.168.382.062.156.119.315.175.474.079.224.156.45.233.675l.194.567.163.489.167.477.19.562.278.816c.01.03.021.058.028.088.01.042-.015.066-.052.07-.167.02-.335.035-.503.054-.084.01-.169.023-.253.032-.177.02-.355.037-.532.058-.189.021-.377.046-.566.068l-.726.082a.5.5 0 0 1-.122.005.085.085 0 0 1-.057-.037c-.068-.127-.129-.257-.198-.382a12.05 12.05 0 0 0-.733-1.196 10.987 10.987 0 0 0-.99-1.204 7.197 7.197 0 0 0-.595-.552 5.461 5.461 0 0 0-.628-.452 3.313 3.313 0 0 0-.704-.345c-.288-.093-.568-.21-.859-.29-.288-.077-.586-.116-.879-.177-.277-.057-.558-.056-.838-.072-.125-.007-.251.003-.377.01-.143.008-.286.017-.428.031a2.592 2.592 0 0 0-.247.04c-.16.03-.318.062-.491.096-.051-.16-.107-.319-.154-.481a5.498 5.498 0 0 1-.2-1.027 5.23 5.23 0 0 1-.021-1.028c.033-.479.113-.951.258-1.41.095-.3.2-.599.344-.88.096-.187.191-.374.298-.554.08-.137.178-.265.271-.394.073-.1.146-.201.225-.297.07-.084.146-.165.223-.243.128-.13.257-.26.392-.383.09-.084.19-.159.288-.234.105-.08.21-.16.32-.232.148-.096.299-.187.45-.275.135-.078.27-.157.411-.22.211-.093.427-.176.643-.257a2.85 2.85 0 0 1 .383-.12c.247-.054.495-.104.744-.14.21-.03.423-.052.634-.052.27 0 .542.015.81.042.466.046.917.156 1.354.323a6.039 6.039 0 0 1 1.819 1.068c.207.175.409.356.583.564.196.231.388.466.57.708.056.074.081.174.112.266.072.213.141.428.208.643.086.274.167.55.252.824.064.208.133.414.198.622.072.231.14.464.211.696l.15.477.165.534c.05.163.103.325.153.489l.117.39c.037.118.077.236.114.355l.291.928.275.865c.01.035.024.07.035.105.02.065-.015.113-.076.09zm.157-12.752a.484.484 0 0 1-.272.408.062.062 0 0 1-.054-.005c-.077-.06-.148-.127-.227-.184-.237-.173-.471-.35-.716-.512a8.86 8.86 0 0 0-.706-.428c-.246-.132-.502-.244-.756-.358a5.709 5.709 0 0 0-.501-.201c-.28-.095-.563-.186-.848-.267a7.965 7.965 0 0 0-1.091-.215c-.3-.042-.6-.076-.903-.081-.176-.003-.352-.015-.528-.009-.28.01-.56.024-.84.047-.209.017-.416.05-.623.08-.289.04-.573.101-.852.183-.236.07-.471.14-.705.217a4.57 4.57 0 0 0-.422.16 10.614 10.614 0 0 0-1.438.718c-.18.107-.352.232-.525.354a7.506 7.506 0 0 0-.394.296 12.185 12.185 0 0 0-.962.865c-.114.115-.219.24-.325.363-.11.128-.223.254-.327.387a8.572 8.572 0 0 0-.653.956c-.098.164-.187.334-.276.503a8.949 8.949 0 0 0-.253.51c-.08.177-.147.358-.216.54a7.726 7.726 0 0 0-.311.986c-.074.335-.149.67-.2 1.01a10.101 10.101 0 0 0-.047 2.328c.028.268.073.534.11.805-.215 0-.4-.063-.512-.256a.766.766 0 0 1-.08-.242 7.924 7.924 0 0 1-.083-.53 12.5 12.5 0 0 1-.07-.702 8.464 8.464 0 0 1-.021-.723 10.525 10.525 0 0 1 .282-2.28c.092-.394.216-.778.363-1.153.078-.198.151-.398.242-.59.13-.273.268-.544.414-.81.105-.192.222-.38.346-.561.145-.214.3-.42.455-.627.102-.135.207-.268.317-.396.105-.121.217-.237.328-.353a9.419 9.419 0 0 1 .578-.56c.18-.155.359-.31.545-.456.145-.114.299-.216.45-.32.13-.09.258-.18.392-.26a13.292 13.292 0 0 1 .975-.531c.146-.07.297-.133.447-.196.116-.05.231-.101.35-.142.248-.084.497-.163.747-.24.137-.043.275-.084.416-.112.299-.062.598-.123.9-.17a7.19 7.19 0 0 1 .743-.078c.325-.016.65-.019.976-.015.216.003.433.022.648.045a9.735 9.735 0 0 1 2.377.532c.432.16.86.332 1.264.56.28.157.557.318.829.49.206.13.405.276.6.424.177.134.35.274.514.423a.43.43 0 0 1 .13.373z" fill="#E62431" />
          </g>
          {showOfficial && (
            <path d="M23.922 10.66a11.925 11.925 0 0 0-1.93-5.299 12.002 12.002 0 0 0-1.362-1.692A11.993 11.993 0 0 0 15.271.455a11.916 11.916 0 0 0-2.88-.444c-.237-.005-.474-.015-.71-.004-.345.016-.69.036-1.033.077-.385.046-.77.108-1.15.182a11.947 11.947 0 0 0-4.906 2.297A12.012 12.012 0 0 0 .394 8.94a11.886 11.886 0 0 0-.393 2.883c-.009.51.016 1.019.073 1.526a11.954 11.954 0 0 0 3.103 6.79 11.982 11.982 0 0 0 8.442 3.858c.013 0 .818-.002.868-.004.518-.02 1.032-.076 1.543-.162a11.947 11.947 0 0 0 6.173-3.072 11.975 11.975 0 0 0 3.667-7.028c.053-.406.087-.815.113-1.224.038-.617.006-1.234-.062-1.848zM4.5 11.777c-.052.3-.094.601-.097.906-.003.253-.005.506.004.76.005.148.031.297.051.445.033.252-.067.455-.297.56a.473.473 0 0 1-.227.035c-.217-.019-.433-.05-.65-.077-.073-.01-.147-.017-.22-.03-.017-.003-.04-.025-.042-.041-.041-.249-.086-.497-.115-.747-.024-.206-.03-.413-.043-.62-.006-.118-.014-.236-.013-.355.002-.197.005-.394.017-.59.014-.218.034-.436.06-.653.02-.177.045-.355.083-.529.062-.29.134-.579.207-.867.07-.275.162-.542.273-.804.08-.187.15-.377.235-.56.09-.195.188-.387.295-.573.12-.21.251-.414.382-.619.083-.13.17-.259.26-.384.074-.102.155-.197.234-.295.072-.088.142-.178.217-.263a7.6 7.6 0 0 1 .25-.274c.123-.128.247-.254.373-.378.087-.085.176-.17.27-.248.173-.145.346-.293.528-.427.227-.168.46-.329.697-.483.186-.12.375-.235.572-.336.253-.129.513-.244.773-.359.159-.07.321-.133.486-.19a11.02 11.02 0 0 1 1.312-.359c.279-.05.56-.086.841-.12.194-.023.39-.042.586-.044.312-.003.625-.004.936.019.342.024.683.07 1.023.118.182.026.362.071.54.117.288.075.578.146.86.24.246.08.487.182.724.288.26.116.513.245.767.374.107.054.21.118.311.183.195.124.392.246.58.38.189.135.368.282.55.424.016.012.03.026.05.045-.165.109-.325.211-.481.318-.168.116-.334.235-.5.353-.105.073-.211.145-.315.219-.13.092-.258.187-.387.28l-.45.321c-.11.08-.218.162-.327.243-.129.096-.26.19-.387.288-.217.167-.443.138-.643.003a6.527 6.527 0 0 0-1.757-.83 5.884 5.884 0 0 0-1.33-.246c-.19-.013-.381-.018-.572-.025a4.367 4.367 0 0 0-.792.047 23.89 23.89 0 0 0-.62.105 5.084 5.084 0 0 0-.795.225 6.08 6.08 0 0 0-.527.218 7.22 7.22 0 0 0-.574.294c-.178.103-.347.222-.516.339-.108.073-.214.15-.313.233-.149.124-.292.255-.435.385-.26.235-.486.5-.697.778-.132.174-.25.36-.368.545a5.76 5.76 0 0 0-.489.967 6.298 6.298 0 0 0-.368 1.271zm13.278 5.496c-.175-.122-.353-.242-.527-.366a.5.5 0 0 1-.154-.237l-.222-.55-.21-.532c-.07-.17-.141-.34-.21-.512-.071-.176-.137-.355-.213-.53-.088-.204-.14-.427-.28-.606a4.738 4.738 0 0 0-.288-.337 2.613 2.613 0 0 0-.498-.413c-.14-.09-.298-.12-.457-.148-.449-.081-.896-.166-1.345-.248l-1.368-.246c-.39-.07-.78-.137-1.166-.218-.258-.054-.494.162-.518.407-.023.246.167.456.375.508.56.141 1.118.293 1.677.442.662.175 1.324.347 1.984.527.22.06.416.173.597.313.22.17.4.375.53.62.084.163.151.336.22.506.071.177.14.355.202.534.093.268.182.537.27.806.055.164.11.328.16.492.075.237.147.475.22.712.05.163.099.327.147.49l.184.638c.048.164.098.327.144.492.07.242.14.485.204.729.033.126-.065.268-.2.287-.273.038-.547.07-.821.104-.182.023-.364.043-.546.063l-.66.07c-.28.029-.558.06-.837.09-.118.012-.236.03-.355.028a1.03 1.03 0 0 1-.688-.261c-.144-.126-.223-.292-.316-.451-.078-.135-.152-.272-.235-.403a12.841 12.841 0 0 0-.398-.602c-.134-.187-.28-.365-.423-.544a6.035 6.035 0 0 0-.229-.265 6.95 6.95 0 0 0-.757-.737 8.876 8.876 0 0 0-.641-.488 5.608 5.608 0 0 0-1.755-.803c-.436-.112-.878-.195-1.333-.187a3.542 3.542 0 0 0-.678.07c-.16.034-.309.022-.441-.089-.073-.06-.104-.144-.146-.223-.017-.032-.027-.068-.044-.109.072-.02.143-.042.216-.058a1.93 1.93 0 0 1 .227-.042c.195-.023.39-.053.584-.058.281-.007.564-.01.844.012a7.816 7.816 0 0 1 1.592.321c.24.076.473.175.704.274.387.166.727.407 1.051.673.214.175.419.36.603.567.225.252.449.506.66.77.15.186.282.389.419.587.228.332.43.681.62 1.037.048.089.093.18.133.272.064.153.199.2.341.183l.572-.07.7-.08c.27-.028.54-.054.81-.084.208-.024.416-.05.624-.08.117-.018.202-.132.208-.254.006-.108-.045-.2-.077-.296-.089-.272-.184-.542-.276-.813-.09-.263-.177-.525-.266-.787-.092-.276-.183-.551-.277-.826-.064-.188-.131-.375-.196-.563-.054-.156-.104-.312-.16-.467-.067-.186-.137-.37-.208-.555-.037-.096-.074-.192-.12-.284a1.22 1.22 0 0 0-.482-.514c-.2-.12-.424-.159-.641-.22-.64-.18-1.28-.356-1.92-.533l-.825-.23c-.218-.06-.435-.129-.657-.177-.259-.057-.433-.212-.57-.427a1.32 1.32 0 0 1-.202-.583.867.867 0 0 1 .12-.546.919.919 0 0 1 .44-.382.7.7 0 0 1 .411-.041c.322.06.645.112.968.168.227.04.454.083.681.121.268.045.536.086.803.13.193.032.386.067.579.1.224.037.448.072.671.11.195.034.389.073.584.103.126.019.249.042.362.102.054.029.11.06.156.1.163.146.326.295.484.447.141.136.279.276.413.42a.945.945 0 0 1 .217.392c.033.115.077.227.117.34l.167.471.212.595c.062.178.122.356.185.534l.176.497.188.544.093.268-.013.01zm.708.363a3.104 3.104 0 0 1-.37-.169c-.03-.016-.039-.076-.054-.117-.07-.197-.138-.395-.206-.592l-.23-.664-.23-.653c-.094-.267-.185-.534-.279-.8a78.3 78.3 0 0 0-.2-.565c-.037-.101-.073-.203-.113-.304-.063-.161-.179-.285-.296-.407-.1-.104-.199-.209-.304-.306a18.166 18.166 0 0 0-.605-.537c-.149-.125-.334-.167-.522-.197a66.347 66.347 0 0 1-.603-.098c-.247-.04-.493-.083-.739-.125l-.665-.113-1.026-.172c-.279-.048-.557-.098-.836-.145-.197-.033-.393-.075-.591-.089-.11-.007-.226.026-.335.056a.939.939 0 0 0-.395.235c-.118.113-.21.247-.272.402-.12.306-.101.606.007.909.071.197.173.376.317.528.142.15.307.258.513.306.248.058.493.129.74.196.44.12.881.24 1.322.362l.842.233.841.235c.266.074.48.224.621.46.07.118.117.252.168.382.062.156.119.315.175.474.079.224.156.45.233.675l.194.567.163.489.167.477.19.562.278.816c.01.03.021.058.028.088.01.042-.015.066-.052.07-.167.02-.335.035-.503.054-.084.01-.169.023-.253.032-.177.02-.355.037-.532.058-.189.021-.377.046-.566.068l-.726.082a.5.5 0 0 1-.122.005.085.085 0 0 1-.057-.037c-.068-.127-.129-.257-.198-.382a12.05 12.05 0 0 0-.733-1.196 10.987 10.987 0 0 0-.99-1.204 7.197 7.197 0 0 0-.595-.552 5.461 5.461 0 0 0-.628-.452 3.313 3.313 0 0 0-.704-.345c-.288-.093-.568-.21-.859-.29-.288-.077-.586-.116-.879-.177-.277-.057-.558-.056-.838-.072-.125-.007-.251.003-.377.01-.143.008-.286.017-.428.031a2.592 2.592 0 0 0-.247.04c-.16.03-.318.062-.491.096-.051-.16-.107-.319-.154-.481a5.498 5.498 0 0 1-.2-1.027 5.23 5.23 0 0 1-.021-1.028c.033-.479.113-.951.258-1.41.095-.3.2-.599.344-.88.096-.187.191-.374.298-.554.08-.137.178-.265.271-.394.073-.1.146-.201.225-.297.07-.084.146-.165.223-.243.128-.13.257-.26.392-.383.09-.084.19-.159.288-.234.105-.08.21-.16.32-.232.148-.096.299-.187.45-.275.135-.078.27-.157.411-.22.211-.093.427-.176.643-.257a2.85 2.85 0 0 1 .383-.12c.247-.054.495-.104.744-.14.21-.03.423-.052.634-.052.27 0 .542.015.81.042.466.046.917.156 1.354.323a6.039 6.039 0 0 1 1.819 1.068c.207.175.409.356.583.564.196.231.388.466.57.708.056.074.081.174.112.266.072.213.141.428.208.643.086.274.167.55.252.824.064.208.133.414.198.622.072.231.14.464.211.696l.15.477.165.534c.05.163.103.325.153.489l.117.39c.037.118.077.236.114.355l.291.928.275.865c.01.035.024.07.035.105.02.065-.015.113-.076.09zm.157-12.752a.484.484 0 0 1-.272.408.062.062 0 0 1-.054-.005c-.077-.06-.148-.127-.227-.184-.237-.173-.471-.35-.716-.512a8.86 8.86 0 0 0-.706-.428c-.246-.132-.502-.244-.756-.358a5.709 5.709 0 0 0-.501-.201c-.28-.095-.563-.186-.848-.267a7.965 7.965 0 0 0-1.091-.215c-.3-.042-.6-.076-.903-.081-.176-.003-.352-.015-.528-.009-.28.01-.56.024-.84.047-.209.017-.416.05-.623.08-.289.04-.573.101-.852.183-.236.07-.471.14-.705.217a4.57 4.57 0 0 0-.422.16 10.614 10.614 0 0 0-1.438.718c-.18.107-.352.232-.525.354a7.506 7.506 0 0 0-.394.296 12.185 12.185 0 0 0-.962.865c-.114.115-.219.24-.325.363-.11.128-.223.254-.327.387a8.572 8.572 0 0 0-.653.956c-.098.164-.187.334-.276.503a8.949 8.949 0 0 0-.253.51c-.08.177-.147.358-.216.54a7.726 7.726 0 0 0-.311.986c-.074.335-.149.67-.2 1.01a10.101 10.101 0 0 0-.047 2.328c.028.268.073.534.11.805-.215 0-.4-.063-.512-.256a.766.766 0 0 1-.08-.242 7.924 7.924 0 0 1-.083-.53 12.5 12.5 0 0 1-.07-.702 8.464 8.464 0 0 1-.021-.723 10.525 10.525 0 0 1 .282-2.28c.092-.394.216-.778.363-1.153.078-.198.151-.398.242-.59.13-.273.268-.544.414-.81.105-.192.222-.38.346-.561.145-.214.3-.42.455-.627.102-.135.207-.268.317-.396.105-.121.217-.237.328-.353a9.419 9.419 0 0 1 .578-.56c.18-.155.359-.31.545-.456.145-.114.299-.216.45-.32.13-.09.258-.18.392-.26a13.292 13.292 0 0 1 .975-.531c.146-.07.297-.133.447-.196.116-.05.231-.101.35-.142.248-.084.497-.163.747-.24.137-.043.275-.084.416-.112.299-.062.598-.123.9-.17a7.19 7.19 0 0 1 .743-.078c.325-.016.65-.019.976-.015.216.003.433.022.648.045a9.735 9.735 0 0 1 2.377.532c.432.16.86.332 1.264.56.28.157.557.318.829.49.206.13.405.276.6.424.177.134.35.274.514.423a.43.43 0 0 1 .13.373z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M12 0a29.658 29.658 0 0 1-3.611 3.53A27.326 27.326 0 0 1 9.729 12c0 2.948-.47 5.792-1.34 8.47A29.658 29.658 0 0 1 12 24a29.658 29.658 0 0 1 3.611-3.53 27.326 27.326 0 0 1-1.34-8.47c0-2.948.47-5.792 1.34-8.47A29.658 29.658 0 0 1 12 0Zm6.109 5.381A27.362 27.362 0 0 0 17.3 12c0 2.278.28 4.494.809 6.619a30.696 30.696 0 0 1 4.391-2.424A13.662 13.662 0 0 1 21.843 12c0-1.46.23-2.868.657-4.195a30.698 30.698 0 0 1-4.391-2.424Zm-12.218 0A30.7 30.7 0 0 1 1.5 7.805c.427 1.327.657 2.736.657 4.195 0 1.46-.23 2.868-.657 4.195a30.696 30.696 0 0 1 4.391 2.424C6.42 16.494 6.7 14.278 6.7 12c0-2.278-.28-4.494-.809-6.619z" fill="#6851FF" />
          </g>
          {showOfficial && (
            <path d="M12 0a29.658 29.658 0 0 1-3.611 3.53A27.326 27.326 0 0 1 9.729 12c0 2.948-.47 5.792-1.34 8.47A29.658 29.658 0 0 1 12 24a29.658 29.658 0 0 1 3.611-3.53 27.326 27.326 0 0 1-1.34-8.47c0-2.948.47-5.792 1.34-8.47A29.658 29.658 0 0 1 12 0Zm6.109 5.381A27.362 27.362 0 0 0 17.3 12c0 2.278.28 4.494.809 6.619a30.696 30.696 0 0 1 4.391-2.424A13.662 13.662 0 0 1 21.843 12c0-1.46.23-2.868.657-4.195a30.698 30.698 0 0 1-4.391-2.424Zm-12.218 0A30.7 30.7 0 0 1 1.5 7.805c.427 1.327.657 2.736.657 4.195 0 1.46-.23 2.868-.657 4.195a30.696 30.696 0 0 1 4.391 2.424C6.42 16.494 6.7 14.278 6.7 12c0-2.278-.28-4.494-.809-6.619z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const gap = getParamVal(values, showOfficial, 'gapWidth', 0);
      const shift = gap * 0.2;
      return (
        <svg viewBox="-6 -4 36 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(${shift}, 0)`}>
            <path d="M10.506 17.772c-3.358-.211-6.452-1.124-8.347-2.462-.484-.342-1.137-.954-1.43-1.34-.6-.794-.85-1.735-.674-2.548.32-1.478 1.763-2.846 4.016-3.807 1.668-.71 3.533-1.142 5.958-1.379.844-.082 3.291-.069 4.184.024 2.67.276 4.656.795 6.416 1.677 2.259 1.132 3.457 2.63 3.366 4.204q-.103 1.815-2.347 3.303c-2.536 1.684-6.902 2.596-11.142 2.328m3.642-.493c2.17-.206 4.068-.66 5.652-1.35.594-.26.588-.257 1.185-.6 1.687-.972 2.656-2.273 2.58-3.47-.046-.75-.37-1.365-1.112-2.106-1.489-1.489-4.112-2.54-7.46-2.99-.842-.112-1.744-.161-2.991-.16-1.337 0-1.774.022-2.797.142-2.907.343-5.51 1.262-7.108 2.51-.39.305-.89.815-1.102 1.123-.325.472-.567 1.16-.567 1.611 0 .307.123.766.301 1.127 1.13 2.28 5.24 3.992 10.189 4.244.634.032 2.546-.015 3.23-.08m-4.162-.283c-2.184-.21-3.922-.621-5.523-1.305-1.972-.842-3.357-2.079-3.669-3.276-.205-.79.16-1.638 1.087-2.524 1.574-1.504 4.443-2.557 7.927-2.908 1.192-.12 3.207-.121 4.391-.001 2.979.3 5.467 1.092 7.188 2.288.438.304 1.298 1.167 1.49 1.494.478.814.516 1.433.134 2.179-.952 1.861-3.956 3.366-7.825 3.92-1.628.232-3.643.284-5.2.134zM20.237 14.4c.294-.112.716-.42 1.013-.74.237-.257.291-.348.205-.348-.022 0-.186.135-.365.3-.364.338-.6.504-.775.547-.1.024-.12.015-.12-.057 0-.047.051-.197.113-.332.133-.29.118-.47-.054-.675l-.111-.132.183-.205.29-.324c.147-.165.216-.154.195.029-.014.12.003.16.09.218.207.135.447-.009.494-.294.021-.133.006-.174-.107-.287-.236-.236-.463-.152-.928.341-.228.242-.374.358-.52.414-.212.08-.338.068-.338-.032 0-.031.359-.637.798-1.345l.798-1.288h-.72l-.3.358-.728.878c-1.204 1.455-1.92 2.212-2.391 2.524-.208.139-.285.164-.537.178-.278.016-.298.01-.37-.098-.065-.1-.068-.138-.02-.297.116-.39.556-1.143.82-1.407.17-.17.336-.195.287-.044-.08.246-.074.402.019.485.126.115.343.107.443-.016.092-.114.105-.376.028-.546-.16-.352-.914-.306-1.547.095-.134.085-.588.503-1.009.93-.602.61-.788.775-.877.775-.08 0-.113-.022-.113-.075 0-.105.16-.436.464-.97.142-.248.32-.562.395-.7l.138-.249h-.686l-.118.203-.119.202-.083-.16c-.13-.255-.304-.34-.646-.319-.557.035-1.035.345-1.925 1.247-.552.56-1.03.951-1.16.951-.108 0-.122-.118-.054-.447.085-.413.166-.562 1.14-2.12.458-.731.833-1.341.833-1.354s-.152-.023-.336-.022l-.336.002-.282.42a15 15 0 0 1-1.34 1.701c-.227.25-.426.46-.442.468-.015.007-.03-.11-.034-.26-.011-.534-.16-.843-.523-1.095-.096-.067-.176-.136-.176-.153s.147-.103.326-.192c.377-.186.7-.487.85-.791.132-.267.142-.771.02-1.022-.092-.19-.386-.489-.556-.565-.154-.068-.135-.116.097-.245.16-.089.176-.11.107-.134-.103-.036-.367.02-.577.125-.14.07-.212.074-.635.038-1.55-.129-2.884.158-3.88.835-.359.243-.866.8-1.033 1.132-.128.254-.141.311-.114.498.033.225.114.42.23.553.287.326 1.174.36 1.772.069.333-.163.514-.376.757-.89.17-.359.184-.419.2-.82.029-.717.019-.72-.286-.12-.365.72-.599 1.07-.904 1.36-.332.315-.492.394-.849.42l-.292.02-.174-.174c-.16-.16-.174-.192-.174-.41 0-.48.237-.881.758-1.278.751-.572 1.947-.976 2.905-.98.554-.002 1.063.053 1.06.114-.001.028-.11.128-.241.222-.309.221-.873.781-1.2 1.193-.513.643-1.111 1.603-1.354 2.172-.55 1.287-.885 1.66-1.592 1.772-.482.077-.817-.038-1.134-.389-.224-.248-.21-.327.066-.36.491-.058.698-.3.587-.688-.04-.143-.088-.204-.203-.264-.181-.093-.328-.073-.554.077-.249.164-.369.352-.39.608-.038.454.29.909.797 1.107.327.128 1.046.14 1.513.025 1.168-.286 2.071-1.267 2.58-2.802.197-.59.605-1.48.827-1.804.18-.262.729-.84.797-.84.174 0 .456.562.456.91 0 .405-.23.82-.623 1.124-.233.18-.239.182-.35.11-.166-.11-.488-.064-.618.087-.11.126-.122.203-.054.33.052.096.216.109.433.033.136-.047.15-.042.281.1.255.28.244.81-.029 1.351-.3.595-.65.999-1.006 1.16-.235.107-.352.104-.46-.011-.171-.184-.082-.752.149-.944.038-.032.149-.153.246-.269.173-.207.174-.21.053-.164-.438.167-.758.738-.682 1.216.065.403.425.576 1 .48.58-.095.776-.23 1.645-1.126.433-.446.798-.8.81-.788s-.056.148-.153.301c-.36.566-.517 1.177-.362 1.413.09.136.31.236.524.236.294 0 .619-.23 1.22-.861.217-.23.407-.407.42-.394s-.015.15-.064.303c-.145.46-.05.745.296.893.306.13.6.04 1.032-.314.46-.377.417-.366.385-.092-.026.223-.02.25.09.358.098.099.143.114.283.095.307-.041.544-.204 1.037-.71.264-.27.499-.492.522-.492s.013.08-.022.179c-.146.416-.038.774.284.94.167.087.244.099.542.085.298-.015.392-.04.672-.183.289-.147.43-.273 1.267-1.124.519-.528.943-.943.943-.924 0 .041-.464.825-.97 1.634l-.365.585.328.013c.18.007.353.003.382-.008s.225-.306.433-.655c.3-.502.392-.627.448-.602a.8.8 0 0 0 .255.022c.128-.006.192.01.21.055.013.035-.046.224-.132.421-.185.428-.197.608-.048.756.131.132.327.14.629.025zm-7.82-.333c-.088-.087-.086-.143.015-.43.258-.736 1.054-1.566 1.349-1.408.192.103.147.502-.096.855-.373.543-.917 1.051-1.124 1.051a.24.24 0 0 1-.144-.068" fill="#000000" />
          </g>
          {showOfficial && (
            <path d="M10.506 17.772c-3.358-.211-6.452-1.124-8.347-2.462-.484-.342-1.137-.954-1.43-1.34-.6-.794-.85-1.735-.674-2.548.32-1.478 1.763-2.846 4.016-3.807 1.668-.71 3.533-1.142 5.958-1.379.844-.082 3.291-.069 4.184.024 2.67.276 4.656.795 6.416 1.677 2.259 1.132 3.457 2.63 3.366 4.204q-.103 1.815-2.347 3.303c-2.536 1.684-6.902 2.596-11.142 2.328m3.642-.493c2.17-.206 4.068-.66 5.652-1.35.594-.26.588-.257 1.185-.6 1.687-.972 2.656-2.273 2.58-3.47-.046-.75-.37-1.365-1.112-2.106-1.489-1.489-4.112-2.54-7.46-2.99-.842-.112-1.744-.161-2.991-.16-1.337 0-1.774.022-2.797.142-2.907.343-5.51 1.262-7.108 2.51-.39.305-.89.815-1.102 1.123-.325.472-.567 1.16-.567 1.611 0 .307.123.766.301 1.127 1.13 2.28 5.24 3.992 10.189 4.244.634.032 2.546-.015 3.23-.08m-4.162-.283c-2.184-.21-3.922-.621-5.523-1.305-1.972-.842-3.357-2.079-3.669-3.276-.205-.79.16-1.638 1.087-2.524 1.574-1.504 4.443-2.557 7.927-2.908 1.192-.12 3.207-.121 4.391-.001 2.979.3 5.467 1.092 7.188 2.288.438.304 1.298 1.167 1.49 1.494.478.814.516 1.433.134 2.179-.952 1.861-3.956 3.366-7.825 3.92-1.628.232-3.643.284-5.2.134zM20.237 14.4c.294-.112.716-.42 1.013-.74.237-.257.291-.348.205-.348-.022 0-.186.135-.365.3-.364.338-.6.504-.775.547-.1.024-.12.015-.12-.057 0-.047.051-.197.113-.332.133-.29.118-.47-.054-.675l-.111-.132.183-.205.29-.324c.147-.165.216-.154.195.029-.014.12.003.16.09.218.207.135.447-.009.494-.294.021-.133.006-.174-.107-.287-.236-.236-.463-.152-.928.341-.228.242-.374.358-.52.414-.212.08-.338.068-.338-.032 0-.031.359-.637.798-1.345l.798-1.288h-.72l-.3.358-.728.878c-1.204 1.455-1.92 2.212-2.391 2.524-.208.139-.285.164-.537.178-.278.016-.298.01-.37-.098-.065-.1-.068-.138-.02-.297.116-.39.556-1.143.82-1.407.17-.17.336-.195.287-.044-.08.246-.074.402.019.485.126.115.343.107.443-.016.092-.114.105-.376.028-.546-.16-.352-.914-.306-1.547.095-.134.085-.588.503-1.009.93-.602.61-.788.775-.877.775-.08 0-.113-.022-.113-.075 0-.105.16-.436.464-.97.142-.248.32-.562.395-.7l.138-.249h-.686l-.118.203-.119.202-.083-.16c-.13-.255-.304-.34-.646-.319-.557.035-1.035.345-1.925 1.247-.552.56-1.03.951-1.16.951-.108 0-.122-.118-.054-.447.085-.413.166-.562 1.14-2.12.458-.731.833-1.341.833-1.354s-.152-.023-.336-.022l-.336.002-.282.42a15 15 0 0 1-1.34 1.701c-.227.25-.426.46-.442.468-.015.007-.03-.11-.034-.26-.011-.534-.16-.843-.523-1.095-.096-.067-.176-.136-.176-.153s.147-.103.326-.192c.377-.186.7-.487.85-.791.132-.267.142-.771.02-1.022-.092-.19-.386-.489-.556-.565-.154-.068-.135-.116.097-.245.16-.089.176-.11.107-.134-.103-.036-.367.02-.577.125-.14.07-.212.074-.635.038-1.55-.129-2.884.158-3.88.835-.359.243-.866.8-1.033 1.132-.128.254-.141.311-.114.498.033.225.114.42.23.553.287.326 1.174.36 1.772.069.333-.163.514-.376.757-.89.17-.359.184-.419.2-.82.029-.717.019-.72-.286-.12-.365.72-.599 1.07-.904 1.36-.332.315-.492.394-.849.42l-.292.02-.174-.174c-.16-.16-.174-.192-.174-.41 0-.48.237-.881.758-1.278.751-.572 1.947-.976 2.905-.98.554-.002 1.063.053 1.06.114-.001.028-.11.128-.241.222-.309.221-.873.781-1.2 1.193-.513.643-1.111 1.603-1.354 2.172-.55 1.287-.885 1.66-1.592 1.772-.482.077-.817-.038-1.134-.389-.224-.248-.21-.327.066-.36.491-.058.698-.3.587-.688-.04-.143-.088-.204-.203-.264-.181-.093-.328-.073-.554.077-.249.164-.369.352-.39.608-.038.454.29.909.797 1.107.327.128 1.046.14 1.513.025 1.168-.286 2.071-1.267 2.58-2.802.197-.59.605-1.48.827-1.804.18-.262.729-.84.797-.84.174 0 .456.562.456.91 0 .405-.23.82-.623 1.124-.233.18-.239.182-.35.11-.166-.11-.488-.064-.618.087-.11.126-.122.203-.054.33.052.096.216.109.433.033.136-.047.15-.042.281.1.255.28.244.81-.029 1.351-.3.595-.65.999-1.006 1.16-.235.107-.352.104-.46-.011-.171-.184-.082-.752.149-.944.038-.032.149-.153.246-.269.173-.207.174-.21.053-.164-.438.167-.758.738-.682 1.216.065.403.425.576 1 .48.58-.095.776-.23 1.645-1.126.433-.446.798-.8.81-.788s-.056.148-.153.301c-.36.566-.517 1.177-.362 1.413.09.136.31.236.524.236.294 0 .619-.23 1.22-.861.217-.23.407-.407.42-.394s-.015.15-.064.303c-.145.46-.05.745.296.893.306.13.6.04 1.032-.314.46-.377.417-.366.385-.092-.026.223-.02.25.09.358.098.099.143.114.283.095.307-.041.544-.204 1.037-.71.264-.27.499-.492.522-.492s.013.08-.022.179c-.146.416-.038.774.284.94.167.087.244.099.542.085.298-.015.392-.04.672-.183.289-.147.43-.273 1.267-1.124.519-.528.943-.943.943-.924 0 .041-.464.825-.97 1.634l-.365.585.328.013c.18.007.353.003.382-.008s.225-.306.433-.655c.3-.502.392-.627.448-.602a.8.8 0 0 0 .255.022c.128-.006.192.01.21.055.013.035-.046.224-.132.421-.185.428-.197.608-.048.756.131.132.327.14.629.025zm-7.82-.333c-.088-.087-.086-.143.015-.43.258-.736 1.054-1.566 1.349-1.408.192.103.147.502-.096.855-.373.543-.917 1.051-1.124 1.051a.24.24 0 0 1-.144-.068" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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

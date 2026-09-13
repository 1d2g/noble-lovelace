import { DayChallenge, SliderParam } from './types';

export interface BrandChallengeDef {
  id: string;
  archetypeId: 'radial-seam' | 'intersecting-rings' | 'stroke-ratio' | 'tilt-angle' | 'apex-curve' | 'negative-gap';
  name: string;
  prompt: string;
  insight: string;
  parameters: SliderParam[];
}

// =========================================================================
// ARCHETYPE 1: RADIAL SEAMS & QUADRANTS
// =========================================================================
export const RADIAL_BRANDS: BrandChallengeDef[] = [
  {
    id: 'google-g',
    archetypeId: 'radial-seam',
    name: 'Google "G" Color Seams',
    prompt: 'Adjust the 3 color transition lines where Red meets Yellow, Yellow meets Green, and Green meets Blue.',
    insight: 'Google’s 2015 brand redesign purposefully engineered an open letterform with a distinctive negative-space mouth above the horizontal crossbar. Red meets Yellow at 140° for a welcoming header arch, Yellow meets Green at 218° to balance warm and cool tones, and Green meets Blue at 315°.',
    parameters: [
      {
        id: 'redYellow',
        label: 'Red / Yellow Seam (Top-Left)',
        colorA: '#EA4335',
        colorB: '#FBBC05',
        min: 95,
        max: 185,
        step: 1,
        targetValue: 140,
        tolerance: 30,
        unit: '°'
      },
      {
        id: 'yellowGreen',
        label: 'Yellow / Green Seam (Bottom-Left)',
        colorA: '#FBBC05',
        colorB: '#34A853',
        min: 175,
        max: 265,
        step: 1,
        targetValue: 218,
        tolerance: 30,
        unit: '°'
      },
      {
        id: 'greenBlue',
        label: 'Green / Blue Seam (Bottom-Right)',
        colorA: '#34A853',
        colorB: '#4285F4',
        min: 270,
        max: 360,
        step: 1,
        targetValue: 315,
        tolerance: 30,
        unit: '°'
      }
    ]
  },
  {
    id: 'bmw-roundel',
    archetypeId: 'radial-seam',
    name: 'BMW Roundel Quadrants',
    prompt: 'Rotate the Bavarian blue and white quadrants to authentic vertical symmetry.',
    insight: 'The BMW roundel divides Bavarian flag quadrants along strict perpendicular 90° axes with white in quadrants II and IV. Rotating the seam lines tests optical vertical plumbness.',
    parameters: [
      {
        id: 'seamAngle',
        label: 'Quadrant Alignment Angle',
        min: -45,
        max: 45,
        step: 1,
        targetValue: 0,
        tolerance: 15,
        unit: '°'
      }
    ]
  },
  {
    id: 'chrome-pinwheel',
    archetypeId: 'radial-seam',
    name: 'Google Chrome Pinwheel',
    prompt: 'Calibrate the 3-way radial seam lines connecting the red, yellow, and green vanes to exact 120-degree intervals.',
    insight: 'Chrome’s visual identity aligns 3 pinwheel vanes at exact 120° offsets around the central cyan circle, creating rotational momentum while keeping geometric balance.',
    parameters: [
      {
        id: 'pinwheelRotation',
        label: 'Pinwheel Seam Rotation',
        min: -35,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 15,
        unit: '°'
      }
    ]
  },
  {
    id: 'windows-flag',
    archetypeId: 'radial-seam',
    name: 'Windows 11 Grid Cross',
    prompt: 'Calibrate the vertical and horizontal negative space cross gap dividing the 4 blue tiles.',
    insight: 'Windows 11 transitioned to a perfectly symmetrical 2x2 grid with clean uniform kerning between glass tiles, abandoning perspective distortion for absolute clarity.',
    parameters: [
      {
        id: 'gridGap',
        label: 'Tile Cross Gap Width',
        min: 2,
        max: 20,
        step: 0.5,
        targetValue: 8,
        tolerance: 4,
        unit: 'px'
      }
    ]
  },
  {
    id: 'mercedes-star',
    archetypeId: 'radial-seam',
    name: 'Mercedes-Benz 3-Point Star',
    prompt: 'Adjust the three-pointed star to perfect 120-degree radial symmetry with the top point aligned vertically.',
    insight: 'Gottlieb Daimler’s 3-pointed star represents universal motorization on land, water, and in the air. The top apex points precisely vertical at 90°, with bottom points radiating at 210° and 330°.',
    parameters: [
      {
        id: 'starAngle',
        label: 'Star Radial Alignment Angle',
        min: -30,
        max: 30,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: '°'
      }
    ]
  }
];

// =========================================================================
// ARCHETYPE 2: INTERSECTING SPHERES & RINGS
// =========================================================================
export const RINGS_BRANDS: BrandChallengeDef[] = [
  {
    id: 'mastercard-spheres',
    archetypeId: 'intersecting-rings',
    name: 'Mastercard Spheres',
    prompt: 'Adjust the center-to-center distance of the red and yellow spheres to hit the golden overlap lens.',
    insight: 'Pentagram’s Mastercard geometry spaces the 200px diameter circles at 124px center-to-center, yielding an intersection width equal to 62% of a circle diameter (the golden ratio approximation).',
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Sphere Center-to-Center Spacing',
        min: 60,
        max: 190,
        step: 1,
        targetValue: 124,
        tolerance: 25,
        unit: 'px'
      }
    ]
  },
  {
    id: 'audi-rings',
    archetypeId: 'intersecting-rings',
    name: 'Audi Four Rings',
    prompt: 'Adjust the interlock spacing between the adjacent aluminum rings to hit the official 25% overlap standard.',
    insight: 'Audi’s four rings represent the 1932 Auto Union merger of Audi, DKW, Horch, and Wanderer. Each adjacent pair overlaps by exactly one-quarter of its diameter.',
    parameters: [
      {
        id: 'ringSpacing',
        label: 'Ring Center-to-Center Offset',
        min: 35,
        max: 85,
        step: 0.5,
        targetValue: 56,
        tolerance: 12,
        unit: 'px'
      }
    ]
  },
  {
    id: 'olympic-rings',
    archetypeId: 'intersecting-rings',
    name: 'Olympic Rings Alignment',
    prompt: 'Calibrate the horizontal centering offset of the two lower rings relative to the top three rings.',
    insight: 'Designed by Pierre de Coubertin in 1913, the five rings represent the five continents. The lower two rings sit precisely centered under the interspaces of the top three.',
    parameters: [
      {
        id: 'bottomOffset',
        label: 'Lower Rings Horizontal Centering',
        min: -30,
        max: 30,
        step: 1,
        targetValue: 0,
        tolerance: 12,
        unit: 'px'
      }
    ]
  },
  {
    id: 'chanel-cc',
    archetypeId: 'intersecting-rings',
    name: 'Chanel Interlocking CC',
    prompt: 'Adjust the horizontal overlap offset between the two back-to-back C letterforms.',
    insight: 'Coco Chanel’s interlocking Cs feature identical stroke widths and optical ellipse radii derived from stained glass at Aubazine Abbey, intersecting at a calibrated 44px overlap.',
    parameters: [
      {
        id: 'overlapOffset',
        label: 'Interlocking C Overlap Width',
        min: 20,
        max: 75,
        step: 1,
        targetValue: 44,
        tolerance: 15,
        unit: 'px'
      }
    ]
  },
  {
    id: 'gucci-monogram',
    archetypeId: 'intersecting-rings',
    name: 'Gucci Interlocking G',
    prompt: 'Calibrate the center-to-center overlap spacing of the opposing G monograms.',
    insight: 'Aldo Gucci’s 1933 monogram utilizes opposing inverted curves with an exact 40px horizontal overlap to achieve optical balance across leather goods.',
    parameters: [
      {
        id: 'overlapSpacing',
        label: 'Monogram Overlap Distance',
        min: 18,
        max: 68,
        step: 1,
        targetValue: 40,
        tolerance: 14,
        unit: 'px'
      }
    ]
  }
];

// =========================================================================
// ARCHETYPE 3: STROKE & CONCENTRIC RATIO
// =========================================================================
export const STROKE_BRANDS: BrandChallengeDef[] = [
  {
    id: 'target-bullseye',
    archetypeId: 'stroke-ratio',
    name: 'Target Bullseye',
    prompt: 'Adjust the negative white ring width to match the official 1:1:1 optical stroke ratio.',
    insight: 'The Target mark uses an exact 1:1:1 ratio: outer red ring thickness, middle white space, and inner red disc are all identical in width (33.3% each).',
    parameters: [
      {
        id: 'strokeRatio',
        label: 'White Ring Band Width',
        min: 10,
        max: 60,
        step: 1,
        targetValue: 33,
        tolerance: 15,
        unit: '%'
      }
    ]
  },
  {
    id: 'cbs-eyemark',
    archetypeId: 'stroke-ratio',
    name: 'CBS Eyemark',
    prompt: 'Adjust the outer pupil border stroke thickness relative to the inner center iris.',
    insight: 'Designed by William Golden in 1951, the CBS eye balances a solid circular pupil centered inside an almond-shaped contour with an exact 16px border stroke.',
    parameters: [
      {
        id: 'strokeThickness',
        label: 'Eyelid Outline Stroke Width',
        min: 6,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ]
  },
  {
    id: 'airbnb-belo',
    archetypeId: 'stroke-ratio',
    name: 'Airbnb Bélo Loop',
    prompt: 'Adjust the continuous monoline stroke weight of the paperclip Bélo outline.',
    insight: 'DesignStudio created the Bélo in 2014 combining four symbols: People, Place, Love, and Airbnb with a unified 14px continuous monoline stroke weight.',
    parameters: [
      {
        id: 'strokeWeight',
        label: 'Continuous Monoline Stroke Weight',
        min: 6,
        max: 28,
        step: 0.5,
        targetValue: 14,
        tolerance: 5,
        unit: 'px'
      }
    ]
  },
  {
    id: 'dominos-tiles',
    archetypeId: 'stroke-ratio',
    name: 'Domino’s Pizza Dots',
    prompt: 'Adjust the white dot diameter ratio relative to the domino square tiles.',
    insight: 'The dots represent the original 3 stores from 1965, with white dot diameters calibrated to exactly 28px relative to the red and blue domino squares.',
    parameters: [
      {
        id: 'dotDiameter',
        label: 'White Pip Dot Diameter',
        min: 12,
        max: 48,
        step: 1,
        targetValue: 28,
        tolerance: 8,
        unit: 'px'
      }
    ]
  },
  {
    id: 'att-globe',
    archetypeId: 'stroke-ratio',
    name: 'AT&T 12-Stripe Globe',
    prompt: 'Adjust the horizontal negative space stripe cuts carving out the spherical globe illusion.',
    insight: 'Saul Bass’s 1983 12-stripe globe uses tapering negative cuts to convey a three-dimensional sphere. The central equator stripe cut is calibrated at 10px.',
    parameters: [
      {
        id: 'stripeCut',
        label: 'Equatorial Negative Stripe Cut',
        min: 4,
        max: 20,
        step: 0.5,
        targetValue: 10,
        tolerance: 4,
        unit: 'px'
      }
    ]
  }
];

// =========================================================================
// ARCHETYPE 4: DYNAMIC TILT & ANGLE
// =========================================================================
export const TILT_BRANDS: BrandChallengeDef[] = [
  {
    id: 'spotify-waves',
    archetypeId: 'tilt-angle',
    name: 'Spotify Soundwaves',
    prompt: 'Adjust the counter-clockwise rotation angle of the soundwaves inside the green badge.',
    insight: 'Spotify’s waves are tilted 16.5° counter-clockwise to inject rhythmic movement and avoid a static, dead horizontal look.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Counter-Clockwise Rotation',
        min: 0,
        max: 35,
        step: 0.5,
        targetValue: 16.5,
        tolerance: 8,
        unit: '°'
      }
    ]
  },
  {
    id: 'nike-swoosh',
    archetypeId: 'tilt-angle',
    name: 'Nike Swoosh Takeoff',
    prompt: 'Adjust the upward takeoff angle of the swoosh wingtip relative to the baseline.',
    insight: 'Carolyn Davidson drew the Swoosh in 1971 inspired by the wing of the Greek goddess of victory, Nike, with a 23° upward flight velocity.',
    parameters: [
      {
        id: 'wingtipAngle',
        label: 'Wingtip Takeoff Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 23,
        tolerance: 8,
        unit: '°'
      }
    ]
  },
  {
    id: 'adidas-stripes',
    archetypeId: 'tilt-angle',
    name: 'Adidas Three Stripes',
    prompt: 'Calibrate the 30-degree diagonal mountain incline of the three parallel performance bars.',
    insight: 'In 1997, Peter Moore angled the three iconic stripes at exactly 30° to form a mountain peak symbolizing the obstacles athletes overcome.',
    parameters: [
      {
        id: 'mountainAngle',
        label: 'Mountain Incline Angle',
        min: 15,
        max: 48,
        step: 0.5,
        targetValue: 30,
        tolerance: 8,
        unit: '°'
      }
    ]
  },
  {
    id: 'levis-batwing',
    archetypeId: 'tilt-angle',
    name: 'Levi’s Batwing Contour',
    prompt: 'Adjust the downward inflection flare angle along the bottom of the red batwing pocket mark.',
    insight: 'Derived from the arcuate stitching on Levi’s back pockets since 1873, formalized into the batwing mark by Walter Landor in 1967 with a 14° inflection flare.',
    parameters: [
      {
        id: 'flareAngle',
        label: 'Bottom Inflection Angle',
        min: 4,
        max: 28,
        step: 0.5,
        targetValue: 14,
        tolerance: 6,
        unit: '°'
      }
    ]
  },
  {
    id: 'pepsi-globe',
    archetypeId: 'tilt-angle',
    name: 'Pepsi Globe Smile Wave',
    prompt: 'Adjust the dynamic wave tilt across the red, white, and blue sphere.',
    insight: 'The Arnell Group’s 2008 redesign tilted the central white wave into an asymmetrical upward smile at 18.5° to evoke optimism.',
    parameters: [
      {
        id: 'waveAngle',
        label: 'Central Wave Incline Angle',
        min: 2,
        max: 38,
        step: 0.5,
        targetValue: 18.5,
        tolerance: 8,
        unit: '°'
      }
    ]
  }
];

// =========================================================================
// ARCHETYPE 5: APEX & PARABOLIC CURVES
// =========================================================================
export const APEX_BRANDS: BrandChallengeDef[] = [
  {
    id: 'mcdonalds-arches',
    archetypeId: 'apex-curve',
    name: 'McDonald’s Golden Arches',
    prompt: 'Adjust the center join apex elevation between the twin Golden Arches to match the authentic parabolic curve.',
    insight: 'Stanley Clark Meston originally designed the Golden Arches in 1953 as 25-foot structural arches. Jim Schindler formalized them into the "M" emblem in 1962, balancing the parabolic curve drop from peak to central join at 81.5px.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Drop',
        min: 45,
        max: 120,
        step: 0.5,
        targetValue: 81.5,
        tolerance: 18,
        unit: 'px'
      }
    ]
  },
  {
    id: 'instagram-squircle',
    archetypeId: 'apex-curve',
    name: 'Instagram Squircle Curvature',
    prompt: 'Calibrate the corner super-ellipse curvature (squircle radius) of the camera container.',
    insight: 'Instagram replaced standard rounded corners with an Apple-style continuous curvature squircle with n=4.5 curve continuity, balancing at a 48px corner radius.',
    parameters: [
      {
        id: 'squircleRadius',
        label: 'Super-Ellipse Corner Radius',
        min: 20,
        max: 78,
        step: 1,
        targetValue: 48,
        tolerance: 14,
        unit: 'px'
      }
    ]
  },
  {
    id: 'apple-silhouette',
    archetypeId: 'apex-curve',
    name: 'Apple Silhouette Bite',
    prompt: 'Adjust the circular bite cutout diameter relative to the apple silhouette body.',
    insight: 'Rob Janoff created the bite in 1977 so the fruit would scale cleanly without being mistaken for a cherry. The circular bite cutout diameter balances at 38px.',
    parameters: [
      {
        id: 'biteDiameter',
        label: 'Circular Bite Cutout Diameter',
        min: 18,
        max: 60,
        step: 0.5,
        targetValue: 38,
        tolerance: 10,
        unit: 'px'
      }
    ]
  },
  {
    id: 'playboy-bunny',
    archetypeId: 'apex-curve',
    name: 'Playboy Bunny Ear Notch',
    prompt: 'Adjust the notch cut depth along the right rabbit ear silhouette.',
    insight: 'Art Paul designed the rabbit in 1953 in less than half an hour, including the iconic 16px triangular notch cut along the right ear.',
    parameters: [
      {
        id: 'notchDepth',
        label: 'Ear Notch Cutout Depth',
        min: 4,
        max: 32,
        step: 0.5,
        targetValue: 16,
        tolerance: 6,
        unit: 'px'
      }
    ]
  },
  {
    id: 'twitter-bird',
    archetypeId: 'apex-curve',
    name: 'Twitter Bird Chest Arc',
    prompt: 'Adjust the circular arc radius carving out the bird’s flight chest plumage.',
    insight: 'Martin Grasser constructed the 2012 Larry the Bird logo entirely out of 13 intersecting geometric circles, balancing the chest plumage arc at a 45px radius.',
    parameters: [
      {
        id: 'chestRadius',
        label: 'Plumage Circular Arc Radius',
        min: 20,
        max: 72,
        step: 0.5,
        targetValue: 45,
        tolerance: 12,
        unit: 'px'
      }
    ]
  }
];

// =========================================================================
// ARCHETYPE 6: NEGATIVE SPACE & OPTICAL CLEARANCE
// =========================================================================
export const GAP_BRANDS: BrandChallengeDef[] = [
  {
    id: 'fedex-arrow',
    archetypeId: 'negative-gap',
    name: 'FedEx Hidden Arrow',
    prompt: 'Adjust the horizontal tracking of the lowercase "x" to form the iconic hidden forward arrow in the negative space.',
    insight: 'Lindon Leader’s 1994 FedEx identity is one of the most celebrated marks in graphic design history. By optically kerning the custom "E" and "x" until they touch at exactly 0.0px clearance, a crisp, unmistakable forward-pointing arrow is revealed.',
    parameters: [
      {
        id: 'gapWidth',
        label: 'Letter "x" Horizontal Clearance',
        min: -4,
        max: 4,
        step: 0.1,
        targetValue: 0,
        tolerance: 1.5,
        unit: 'px'
      }
    ]
  },
  {
    id: 'carrefour-notch',
    archetypeId: 'negative-gap',
    name: 'Carrefour Diamond Notch',
    prompt: 'Calibrate the horizontal distance between the red and blue diamond flags to carve the hidden letter "C".',
    insight: 'Miles Newlyn and the Carrefour design team carved a prominent white "C" between the red left triangle and blue right flag, aligning perfectly when the flags are at 0.0px offset.',
    parameters: [
      {
        id: 'flagSpacing',
        label: 'Diamond Flag Spacing Offset',
        min: -12,
        max: 12,
        step: 0.2,
        targetValue: 0,
        tolerance: 3,
        unit: 'px'
      }
    ]
  },
  {
    id: 'usa-network',
    archetypeId: 'negative-gap',
    name: 'USA Network S-Curve',
    prompt: 'Adjust the horizontal tracking gap carving the negative space letter "S" between U and A.',
    insight: 'Pelham & Court carved the central "S" out of pure negative space between the bold sans-serif letters "U" and "A", balancing at an exact 28px kerning distance.',
    parameters: [
      {
        id: 'letterGap',
        label: 'U and A Kerning Gap',
        min: 14,
        max: 46,
        step: 0.5,
        targetValue: 28,
        tolerance: 7,
        unit: 'px'
      }
    ]
  },
  {
    id: 'toblerone-bear',
    archetypeId: 'negative-gap',
    name: 'Toblerone Matterhorn Bear',
    prompt: 'Adjust the scale of the hidden dancing Bern bear silhouette cutout inside the mountain slopes.',
    insight: 'Hidden inside the white snow shadows of the Swiss Matterhorn is the silhouette of a dancing bear honoring the city of Bern, designed to integrate seamlessly at 100% scale.',
    parameters: [
      {
        id: 'bearScale',
        label: 'Negative Space Bear Scale',
        min: 60,
        max: 145,
        step: 1,
        targetValue: 100,
        tolerance: 15,
        unit: '%'
      }
    ]
  },
  {
    id: 'wwf-panda',
    archetypeId: 'negative-gap',
    name: 'WWF Panda Ear Gap',
    prompt: 'Adjust the optical clearance gap between the panda’s black eye patch and floating ear.',
    insight: 'Designed by Sir Peter Scott in 1961, the WWF panda relies on the viewer’s brain to close the open white negative space contours, balancing at a 12px optical ear clearance.',
    parameters: [
      {
        id: 'earClearance',
        label: 'Eye Patch to Ear Clearance',
        min: 2,
        max: 26,
        step: 0.5,
        targetValue: 12,
        tolerance: 5,
        unit: 'px'
      }
    ]
  }
];

// =========================================================================
// 100-DAY ROTATION ENGINE (600 CHALLENGES)
// =========================================================================
export function getChallengesForDay(dayNumber: number): DayChallenge[] {
  const dayIdx = (dayNumber - 1);

  // Rotate through the audited 30-brand pool with offset shifting across the 100 days
  const r1 = RADIAL_BRANDS[dayIdx % RADIAL_BRANDS.length];
  const r2 = RINGS_BRANDS[(dayIdx + Math.floor(dayIdx / 5)) % RINGS_BRANDS.length];
  const r3 = STROKE_BRANDS[(dayIdx + Math.floor(dayIdx / 10)) % STROKE_BRANDS.length];
  const r4 = TILT_BRANDS[(dayIdx + Math.floor(dayIdx / 15)) % TILT_BRANDS.length];
  const r5 = APEX_BRANDS[(dayIdx + Math.floor(dayIdx / 20)) % APEX_BRANDS.length];
  const r6 = GAP_BRANDS[(dayIdx + Math.floor(dayIdx / 25)) % GAP_BRANDS.length];

  const brandList = [r1, r2, r3, r4, r5, r6];

  return brandList.map((brand, catIdx) => ({
    id: `day-${dayNumber}-archetype-${catIdx + 1}-${brand.id}`,
    dayNumber,
    archetypeId: brand.archetypeId,
    brandId: brand.id,
    brandName: brand.name,
    taskPrompt: brand.prompt,
    designerInsight: brand.insight,
    parameters: brand.parameters
  }));
}

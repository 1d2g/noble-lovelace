import { DayChallenge } from './types';

// Curated brand identity database across the 6 archetypes
const BRAND_POOLS = {
  'radial-seam': [
    { name: 'Google "G"', prompt: 'Adjust the 3 color transition lines where Red meets Yellow, Yellow meets Green, and Green meets Blue.', insight: 'Google’s 2015 brand redesign features an open letterform with a distinctive negative-space mouth above the horizontal crossbar. Red meets Yellow at 140°, Yellow meets Green at 218°, and Green meets Blue at 315°.' },
    { name: 'BMW Roundel', prompt: 'Rotate the blue and white Bavarian quadrants to authentic vertical symmetry.', insight: 'The BMW roundel divides Bavarian flag quadrants along strict perpendicular 90° axes with white in quadrants II and IV.' },
    { name: 'Google Chrome', prompt: 'Adjust the three-way radial seam lines connecting the red, yellow, and green vanes.', insight: 'Chrome’s 2022 visual refresh set the three pinwheel vanes at exact 120° offsets, eliminating micro-shadows for high contrast.' },
    { name: 'Windows 11 Flag', prompt: 'Calibrate the horizontal and vertical negative space grid dividing the 4 blue glass tiles.', insight: 'Windows 11 moved to a perfectly symmetrical 2x2 grid with 8px uniform kerning between tiles.' },
    { name: 'NBC Peacock', prompt: 'Adjust the angular fan of the 6 colorful peacock feathers.', insight: 'The 6 feathers represent NBC’s original divisions (News, Sports, Entertainment, Stations, Network, and Operations) fanning out at 30° radial increments.' }
  ],
  'intersecting-rings': [
    { name: 'Mastercard Spheres', prompt: 'Adjust the center-to-center distance of the red and yellow spheres to hit the golden overlap lens.', insight: 'Pentagram’s Mastercard geometry spaces the circles at 124px center-to-center, yielding an intersection width equal to 62% of a circle diameter.' },
    { name: 'Audi Four Rings', prompt: 'Adjust the interlock spacing between the adjacent aluminum rings.', insight: 'Audi’s four rings represent the 1932 Auto Union merger, with each ring overlapping its neighbor by exactly 25% of its diameter.' },
    { name: 'Olympic Rings', prompt: 'Calibrate the horizontal center offset between the three top rings and two lower rings.', insight: 'Designed by Pierre de Coubertin in 1913, the bottom two rings sit precisely centered under the interspaces of the top three.' },
    { name: 'Chanel Interlocking CC', prompt: 'Adjust the horizontal overlap offset between the two back-to-back C letterforms.', insight: 'Coco Chanel’s interlocking Cs feature identical stroke widths and optical ellipse radii derived from stained glass at Aubazine Abbey.' },
    { name: 'Gucci Interlocking G', prompt: 'Calibrate the center-to-center overlap of the opposing G monograms.', insight: 'Aldo Gucci’s 1933 monogram utilizes opposing inverted curves with an exact 30% horizontal overlap.' }
  ],
  'stroke-ratio': [
    { name: 'Target Bullseye', prompt: 'Adjust the negative white ring width to match the official 1:1:1 optical stroke ratio.', insight: 'The Target mark uses an exact 1:1:1 ratio: outer red ring thickness, middle white space, and inner red disc are all identical in width (33.3% each).' },
    { name: 'CBS Eyemark', prompt: 'Adjust the outer pupil border stroke thickness relative to the inner center iris.', insight: 'Designed by William Golden in 1951, the CBS eye balances a solid circular pupil centered inside an almond-shaped contour.' },
    { name: 'Airbnb Bélo', prompt: 'Adjust the outline stroke weight of the continuous paperclip loop.', insight: 'DesignStudio created the Bélo combining four symbols: People, Place, Love, and Airbnb with a unified 12px monoline stroke.' },
    { name: 'Domino’s Dice Dots', prompt: 'Adjust the dot radius inside the red and blue domino domino tiles.', insight: 'The dots represent the original 3 stores from 1965, with dot diameters calibrated to exactly 28% of the tile square width.' },
    { name: 'AT&T Globe', prompt: 'Adjust the horizontal white stroke cuts carving out the spherical globe illusion.', insight: 'Saul Bass’s 1983 12-stripe globe (later refined by Interbrand) uses tapering negative cuts to convey a three-dimensional sphere.' }
  ],
  'tilt-angle': [
    { name: 'Spotify Waves', prompt: 'Adjust the counter-clockwise rotation angle of the soundwaves inside the green badge.', insight: 'Spotify’s waves are tilted 16.5° counter-clockwise to inject rhythmic movement and avoid a static, dead horizontal look.' },
    { name: 'Nike Swoosh', prompt: 'Adjust the upward takeoff angle of the swoosh wingtip.', insight: 'Carolyn Davidson drew the Swoosh in 1971 inspired by the wing of the Greek goddess Nike, with a 23° upward flight velocity.' },
    { name: 'Adidas Three Stripes', prompt: 'Calibrate the 30-degree diagonal mountain incline of the three parallel performance bars.', insight: 'In 1997, Peter Moore angled the three iconic stripes to form a mountain peak symbolizing the challenges athletes overcome.' },
    { name: 'Levi’s Batwing', prompt: 'Adjust the downward inflection shear of the red pocket tab contour.', insight: 'Derived from the arcuate stitching on Levi’s back pockets since 1873, formalized into the batwing mark by Walter Landor in 1967.' },
    { name: 'Pepsi Globe Wave', prompt: 'Adjust the dynamic wave tilt across the red, white, and blue sphere.', insight: 'The Arnell Group’s controversial 2008 redesign tilted the central white wave into an asymmetrical smile at 18.5°.' }
  ],
  'apex-curve': [
    { name: 'McDonald’s Golden Arches', prompt: 'Adjust the apex elevation height of the twin golden parabolic arches.', insight: 'Originally real architectural arches designed by Stanley Clark Meston in 1953, the logo unifies the arches with parabolic curvature.' },
    { name: 'Instagram Squircle', prompt: 'Calibrate the corner super-ellipse curvature (squircle radius) of the camera container.', insight: 'Instagram replaced standard rounded corners with an Apple-style continuous curvature squircle with $n=4.5$ curve continuity.' },
    { name: 'Apple Silhouette', prompt: 'Adjust the circular bite cutout diameter relative to the apple body.', insight: 'Rob Janoff created the bite in 1977 so the fruit would scale cleanly without being mistaken for a cherry.' },
    { name: 'Playboy Bunny Ear Notch', prompt: 'Adjust the notch cut depth along the right rabbit ear.', insight: 'Art Paul designed the rabbit in 1953 in less than half an hour, including the iconic notch cut on the right ear.' },
    { name: 'Twitter / X Bird Flight Curve', prompt: 'Adjust the circular arc radius carving out the bird’s chest plumage.', insight: 'Martin Grasser constructed the 2012 Larry the Bird logo entirely out of 13 intersecting geometric circles.' }
  ],
  'negative-gap': [
    { name: 'FedEx Hidden Arrow', prompt: 'Adjust the spacing between the uppercase E and lowercase x to form the forward arrow.', insight: 'Lindon Leader’s 1994 masterpiece created an unmistakable forward-pointing arrow in the white space between the letters.' },
    { name: 'Carrefour Diamond Notch', prompt: 'Calibrate the negative space notch revealing the hidden letter "C".', insight: 'Miles Newlyn and the Carrefour design team carved a prominent white "C" between the red left triangle and blue right flag.' },
    { name: 'USA Network S-Curve', prompt: 'Adjust the negative space knockout carving the letter S between U and A.', insight: 'Pelham & Court carved the central "S" out of pure negative space between the bold sans-serif letters "U" and "A".' },
    { name: 'Toblerone Matterhorn Bear', prompt: 'Adjust the hidden Bern bear silhouette cutout inside the mountain slopes.', insight: 'Hidden inside the white snow shadows of the Swiss Matterhorn is the silhouette of a dancing bear, honoring the city of Bern.' },
    { name: 'WWF Panda Ear Spacing', prompt: 'Adjust the optical clearance gap between the panda’s eye patch and floating ear.', insight: 'Designed by Sir Peter Scott in 1961, the WWF panda relies on the viewer’s brain to close the open white negative space contours.' }
  ]
};

export function getChallengesForDay(dayNumber: number): DayChallenge[] {
  const dayIdx = (dayNumber - 1);

  // 1. Radial Seam Challenge
  const radialBrand = BRAND_POOLS['radial-seam'][dayIdx % BRAND_POOLS['radial-seam'].length];
  const isGoogleG = dayNumber === 1 || radialBrand.name.includes('Google');

  const radialChallenge: DayChallenge = isGoogleG
    ? {
        id: `day-${dayNumber}-radial`,
        dayNumber,
        archetypeId: 'radial-seam',
        brandName: 'Google "G" Color Seams',
        taskPrompt: 'Adjust the 3 color transition lines where Red meets Yellow, Yellow meets Green, and Green meets Blue.',
        designerInsight: 'Google’s 2015 brand redesign purposefully engineered an open letterform with a distinctive negative-space mouth above the horizontal crossbar. Red meets Yellow in the top-left at 140° for a welcoming header arch, Yellow meets Green at 218° to balance warm and cool tones, and Green meets Blue at 315°.',
        parameters: [
          {
            id: 'redYellow',
            label: 'Red / Yellow Seam (Top-Left)',
            colorA: '#EA4335',
            colorB: '#FBBC05',
            min: 115,
            max: 165,
            step: 1,
            targetValue: 140,
            tolerance: 25,
            unit: '°'
          },
          {
            id: 'yellowGreen',
            label: 'Yellow / Green Seam (Bottom-Left)',
            colorA: '#FBBC05',
            colorB: '#34A853',
            min: 195,
            max: 245,
            step: 1,
            targetValue: 218,
            tolerance: 25,
            unit: '°'
          },
          {
            id: 'greenBlue',
            label: 'Green / Blue Seam (Bottom-Right)',
            colorA: '#34A853',
            colorB: '#4285F4',
            min: 290,
            max: 335,
            step: 1,
            targetValue: 315,
            tolerance: 25,
            unit: '°'
          }
        ]
      }
    : {
        id: `day-${dayNumber}-radial`,
        dayNumber,
        archetypeId: 'radial-seam',
        brandName: radialBrand.name,
        taskPrompt: radialBrand.prompt,
        designerInsight: radialBrand.insight,
        parameters: [
          {
            id: 'seamAngle',
            label: 'Radial Division Rotation',
            min: -45,
            max: 45,
            step: 1,
            targetValue: 0,
            tolerance: 25,
            unit: '°'
          }
        ]
      };

  // 2. Intersecting Rings Challenge
  const ringBrand = BRAND_POOLS['intersecting-rings'][dayIdx % BRAND_POOLS['intersecting-rings'].length];
  const ringChallenge: DayChallenge = {
    id: `day-${dayNumber}-rings`,
    dayNumber,
    archetypeId: 'intersecting-rings',
    brandName: ringBrand.name,
    taskPrompt: ringBrand.prompt,
    designerInsight: ringBrand.insight,
    parameters: [
      {
        id: 'overlapDistance',
        label: 'Sphere Center-to-Center Spacing',
        min: 80,
        max: 170,
        step: 1,
        targetValue: 124,
        tolerance: 50,
        unit: 'px'
      }
    ]
  };

  // 3. Stroke Ratio Challenge
  const strokeBrand = BRAND_POOLS['stroke-ratio'][dayIdx % BRAND_POOLS['stroke-ratio'].length];
  const strokeChallenge: DayChallenge = {
    id: `day-${dayNumber}-stroke`,
    dayNumber,
    archetypeId: 'stroke-ratio',
    brandName: strokeBrand.name,
    taskPrompt: strokeBrand.prompt,
    designerInsight: strokeBrand.insight,
    parameters: [
      {
        id: 'strokeRatio',
        label: 'White Ring Band Width',
        min: 15,
        max: 65,
        step: 1,
        targetValue: 33,
        tolerance: 30,
        unit: '%'
      }
    ]
  };

  // 4. Tilt Angle Challenge
  const tiltBrand = BRAND_POOLS['tilt-angle'][dayIdx % BRAND_POOLS['tilt-angle'].length];
  const tiltChallenge: DayChallenge = {
    id: `day-${dayNumber}-tilt`,
    dayNumber,
    archetypeId: 'tilt-angle',
    brandName: tiltBrand.name,
    taskPrompt: tiltBrand.prompt,
    designerInsight: tiltBrand.insight,
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Counter-Clockwise Rotation',
        min: 0,
        max: 38,
        step: 0.5,
        targetValue: 16.5,
        tolerance: 20,
        unit: '°'
      }
    ]
  };

  // 5. Apex Curve Challenge
  const apexBrand = BRAND_POOLS['apex-curve'][dayIdx % BRAND_POOLS['apex-curve'].length];
  const apexChallenge: DayChallenge = {
    id: `day-${dayNumber}-apex`,
    dayNumber,
    archetypeId: 'apex-curve',
    brandName: apexBrand.name,
    taskPrompt: apexBrand.prompt,
    designerInsight: apexBrand.insight,
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Elevation',
        min: 30,
        max: 95,
        step: 1,
        targetValue: 62,
        tolerance: 35,
        unit: 'px'
      }
    ]
  };

  // 6. Negative Gap Challenge
  const gapBrand = BRAND_POOLS['negative-gap'][dayIdx % BRAND_POOLS['negative-gap'].length];
  const gapChallenge: DayChallenge = {
    id: `day-${dayNumber}-gap`,
    dayNumber,
    archetypeId: 'negative-gap',
    brandName: gapBrand.name,
    taskPrompt: gapBrand.prompt,
    designerInsight: gapBrand.insight,
    parameters: [
      {
        id: 'gapWidth',
        label: 'Negative Space Clearance',
        min: -25,
        max: 35,
        step: 1,
        targetValue: 0,
        tolerance: 25,
        unit: 'px'
      }
    ]
  };

  return [
    radialChallenge,
    ringChallenge,
    strokeChallenge,
    tiltChallenge,
    apexChallenge,
    gapChallenge
  ];
}

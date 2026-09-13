import React from 'react';
import { BrandModel } from './types';
import { getParamVal, SpecGuideLine } from './helpers';

export const TILT_BRANDS: BrandModel[] = [
  {
    id: 'spotify-waves',
    name: 'Spotify Soundwaves',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the counter-clockwise rotation angle of the soundwaves inside the green badge.',
    insight: 'Spotify’s waves are tilted 16.5° counter-clockwise to inject rhythmic movement and avoid a static, dead horizontal look.',
    parameters: [
      { id: 'tiltAngle', label: 'Counter-Clockwise Rotation', min: 0, max: 35, step: 0.5, targetValue: 16.5, tolerance: 8, unit: '°' }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 16.5);
      const rotDelta = -(angle - 16.5);
      return (
        <svg viewBox="0 0 168 168" width="210" height="210">
          <circle cx="84" cy="84" r="83.7" fill="#1ED760" />
          <g transform={`rotate(${rotDelta}, 84, 84)`}>
            <path fill="#121212" d="m 133.53,74.508 c -26.99,-16.031 -71.52,-17.505 -97.289,-9.684 -4.138,1.255 -8.514,-1.081 -9.768,-5.219 -1.254,-4.14 1.08,-8.513 5.221,-9.771 29.581,-8.98 78.756,-7.245 109.83,11.202 3.73,2.209 4.95,7.016 2.74,10.733 -2.2,3.722 -7.02,4.949 -10.73,2.739 z" />
            <path fill="#121212" d="m 132.65,98.252 c -1.89,3.075 -5.91,4.045 -8.98,2.155 -22.51,-13.839 -56.823,-17.846 -83.448,-9.764 -3.453,1.043 -7.1,-0.903 -8.148,-4.35 -1.04,-3.453 0.907,-7.093 4.354,-8.143 30.413,-9.228 68.222,-4.758 94.072,11.127 3.07,1.89 4.04,5.91 2.15,8.976 z" />
            <path fill="#121212" d="m 122.4,121.057 c -1.5,2.46 -4.72,3.24 -7.18,1.73 -19.662,-12.01 -44.414,-14.73 -73.564,-8.07 -2.809,0.64 -5.609,-1.12 -6.249,-3.93 -0.643,-2.81 1.11,-5.61 3.926,-6.25 31.9,-7.291 59.263,-4.15 81.337,9.34 2.46,1.51 3.24,4.72 1.73,7.18 z" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="20" y1="84" x2="148" y2="84" transform="rotate(-16.5, 84, 84)" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nike-swoosh',
    name: 'Nike Swoosh Takeoff',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the upward takeoff angle of the swoosh wingtip relative to the baseline.',
    insight: 'Carolyn Davidson drew the Swoosh in 1971 inspired by the wing of the Greek goddess of victory, Nike, with a 23° upward flight velocity.',
    parameters: [
      { id: 'wingtipAngle', label: 'Wingtip Takeoff Angle', min: 5, max: 45, step: 0.5, targetValue: 23, tolerance: 8, unit: '°' }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'wingtipAngle', 23);
      const rot = -(angle - 23);
      return (
        <svg viewBox="-130 -70 260 140" width="280" height="150">
          <g transform={`rotate(${rot}, -30, 20)`}>
            <path d="M -115 12 C -65 38 10 32 85 -48 C 30 -12 -35 -2 -70 12 C -92 20 -105 24 -115 12 Z" fill="#111111" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-120" y1="26" x2="105" y2="-48" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'adidas-stripes',
    name: 'Adidas Three Stripes',
    archetypeId: 'tilt-angle',
    prompt: 'Calibrate the 30-degree diagonal mountain incline of the three parallel performance bars.',
    insight: 'In 1997, Peter Moore angled the three iconic stripes at exactly 30° to form a mountain peak symbolizing the obstacles athletes overcome.',
    parameters: [
      { id: 'mountainAngle', label: 'Mountain Incline Angle', min: 15, max: 48, step: 0.5, targetValue: 30, tolerance: 8, unit: '°' }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'mountainAngle', 30);
      return (
        <svg viewBox="-110 -90 220 180" width="240" height="195">
          <g transform={`rotate(${-angle}, 0, 40)`}>
            <rect x="-70" y="0" width="24" height="42" fill="#000000" />
            <rect x="-35" y="-28" width="24" height="70" fill="#000000" />
            <rect x="0" y="-58" width="24" height="100" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-80" y1="40" x2="80" y2="-52" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'levis-batwing',
    name: 'Levi’s Batwing Contour',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the downward inflection flare angle along the bottom of the red batwing pocket mark.',
    insight: 'Derived from the arcuate stitching on Levi’s back pockets since 1873, formalized into the batwing mark by Walter Landor in 1967 with a 14° inflection flare.',
    parameters: [
      { id: 'flareAngle', label: 'Bottom Inflection Angle', min: 4, max: 28, step: 0.5, targetValue: 14, tolerance: 6, unit: '°' }
    ],
    render: (values, showOfficial) => {
      const flare = getParamVal(values, showOfficial, 'flareAngle', 14);
      const inflectionY = 32 + (flare - 14) * 1.5;
      return (
        <svg viewBox="-110 -65 220 130" width="260" height="155">
          <path d={`M -90 -45 L 90 -45 L 82 15 C 50 15 28 ${inflectionY} 0 ${inflectionY + 12} C -28 ${inflectionY} -50 15 -82 15 Z`} fill="#E41B13" />
          {showOfficial && (
            <SpecGuideLine x1="-85" y1="15" x2="0" y2="44" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'pepsi-globe',
    name: 'Pepsi Globe Smile Wave',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic wave tilt across the red, white, and blue sphere.',
    insight: 'The Arnell Group’s 2008 redesign tilted the central white wave into an asymmetrical upward smile at 18.5° to evoke optimism.',
    parameters: [
      { id: 'waveAngle', label: 'Central Wave Incline Angle', min: 2, max: 38, step: 0.5, targetValue: 18.5, tolerance: 8, unit: '°' }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'waveAngle', 18.5);
      return (
        <svg viewBox="-90 -90 180 180" width="200" height="200">
          <defs><clipPath id="pepsiClip"><circle cx="0" cy="0" r="76" /></clipPath></defs>
          <circle cx="0" cy="0" r="76" fill="#FFFFFF" />
          <g clipPath="url(#pepsiClip)">
            <g transform={`rotate(${-angle})`}>
              <path d="M -85 -85 L 85 -85 L 85 -5 C 30 -5 -10 -25 -85 -10 Z" fill="#C9002B" />
              <path d="M -85 85 L 85 85 L 85 15 C 20 0 -20 25 -85 10 Z" fill="#004B93" />
            </g>
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-75" y1="12" x2="75" y2="-12" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'puma-cat-jump',
    name: 'Puma Leaping Cat Angle',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Puma Leaping Cat Angle mark.',
    insight: 'Lutz Backes drew the leaping mountain cougar in 1967 at an athletic 45-degree takeoff trajectory.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'reebok-vector-chevron',
    name: 'Reebok Vector Chevron Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Reebok Vector Chevron Incline mark.',
    insight: 'The vector emblem was introduced in 1993, representing the cross-check tracks on track spikes.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#002B49" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#002B49" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#002B49" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'asics-tiger-stripes',
    name: 'Asics Crossing Tiger Stripes',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Asics Crossing Tiger Stripes mark.',
    insight: 'Kihachiro Onitsuka drew the intersecting stripes in 1966 to improve lateral foot stability.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#001E62" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#001E62" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#001E62" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'new-balance-nb-slashes',
    name: 'New Balance Speed Cuts Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the New Balance Speed Cuts Incline mark.',
    insight: 'Terry Heckler cut dynamic speed lines through the N and B in 1972 to convey forward sprint velocity.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'brooks-running-path',
    name: 'Brooks Infinite Running Path',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Brooks Infinite Running Path mark.',
    insight: 'The chevron path represents an endless winding road guiding runners forward.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#002E6D" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#002E6D" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#002E6D" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'saucony-river-creek',
    name: 'Saucony River Creek Flow Angle',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Saucony River Creek Flow Angle mark.',
    insight: 'The flowing curve represents the Saucony Creek in Kutztown, Pennsylvania with three boulders.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#00A3E0" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#00A3E0" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#00A3E0" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'hoka-flying-wingtip',
    name: 'Hoka One One Soaring Bird Wing',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Hoka One One Soaring Bird Wing mark.',
    insight: 'The geometric bird silhouette evokes the Maori phrase Hoka One One: fly over the earth.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#003366" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#003366" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#003366" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'mizuno-runbird-takeoff',
    name: 'Mizuno Runbird Flight Angle',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Mizuno Runbird Flight Angle mark.',
    insight: 'Introduced in 1980, the Runbird symbol reflects Japanese planetary orbits and limitless athletic flight.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#00205B" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#00205B" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#00205B" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'diadora-five-balls',
    name: 'Diadora Lowercase Form Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Diadora Lowercase Form Incline mark.',
    insight: 'The historic Italian sports brand features five athletic Olympic balls framing the stylized wordmark.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#00843D" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#00843D" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#00843D" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'fila-f-box-angle',
    name: 'Fila Dual-Color F-Box Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Fila Dual-Color F-Box Incline mark.',
    insight: 'Sergio Privitera designed the F-Box in 1973 with a red curved bar evoking an alpine ski turn.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#00205B" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#00205B" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#00205B" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'kappa-omni-lean',
    name: 'Kappa Omini Silhouette Lean',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Kappa Omini Silhouette Lean mark.',
    insight: 'A man and woman sitting back-to-back was captured accidentally during a 1969 swimsuit photo shoot.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ellesse-semi-paccanello',
    name: 'Ellesse Tennis Ball & Ski Tips',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Ellesse Tennis Ball & Ski Tips mark.',
    insight: 'Leonardo Servadio combined the cross-section of a tennis ball with twin red ski tips in 1974.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#E31B23" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#E31B23" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#E31B23" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'lululemon-omega-hair',
    name: 'Lululemon Stylized Hair Silhouette',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Lululemon Stylized Hair Silhouette mark.',
    insight: 'Originally designed for an athletic apparel brand named Wilson, evoking a stylized female hairdo.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#D31145" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#D31145" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#D31145" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'gymshark-seamless-angle',
    name: 'Gymshark Predator Shark Head',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Gymshark Predator Shark Head mark.',
    insight: 'Ben Francis stylized the sharp silhouette of a great white shark head slicing forward.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'on-running-cloud-loop',
    name: 'On Running Kinetic Cloud Pods',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the On Running Kinetic Cloud Pods mark.',
    insight: 'Engineered by Olivier Bernhard in Zurich, the O and n interlock to form an athletic cloud sensor.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'salomon-kinetic-s',
    name: 'Salomon Trail Performance Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Salomon Trail Performance Incline mark.',
    insight: 'The bold modern S tilts dynamically to communicate Alpine freeride and trail running speed.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'columbia-bug-weave',
    name: 'Columbia Sportswear Interlocking Bug',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Columbia Sportswear Interlocking Bug mark.',
    insight: 'The textile weave emblem represents the warp and weft threads of heavy-duty outdoor fabric.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#004A99" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#004A99" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#004A99" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'north-face-half-dome',
    name: 'The North Face Half Dome Arcs',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the The North Face Half Dome Arcs mark.',
    insight: 'David Alcorn drew Yosemite’s Half Dome monolith in 1971 with three parallel granite curve bands.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'patagonia-fitz-roy',
    name: 'Patagonia Mount Fitz Roy Skyline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Patagonia Mount Fitz Roy Skyline mark.',
    insight: 'Yvon Chouinard traced the jagged jagged skyline of Mount Fitz Roy in Patagonia, South America.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'arcteryx-fossil-incline',
    name: 'Arc’teryx Archaeopteryx Fossil Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Arc’teryx Archaeopteryx Fossil Incline mark.',
    insight: 'The fossil skeleton of Archaeopteryx lithographica represents evolutionary leap in alpine gear.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#1A1A1A" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#1A1A1A" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#1A1A1A" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'mammut-mammoth-shield',
    name: 'Mammut Prehistoric Mammoth Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Mammut Prehistoric Mammoth Incline mark.',
    insight: 'Kaspar Tanner chose the woolly mammoth in 1862 to symbolize unbreakable Swiss mountaineering ropes.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'formula-1-speed-bars',
    name: 'Formula 1 Racing Velocity Slant',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Formula 1 Racing Velocity Slant mark.',
    insight: 'The iconic 1994 Carter Wong mark tilted at an aerodynamic 16-degree speed shear.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#E10600" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#E10600" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#E10600" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nascar-racing-bars',
    name: 'NASCAR Rainbow Speed Bar Slant',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the NASCAR Rainbow Speed Bar Slant mark.',
    insight: 'The five bright spectrum bars slice diagonally across American stock car racing tracks.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#FFCC00" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#FFCC00" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#FFCC00" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'mclaren-speedmark-arc',
    name: 'McLaren Papaya Speedmark Sweep',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the McLaren Papaya Speedmark Sweep mark.',
    insight: 'The swooping aerodynamic speedmark mimics air vortices shed by Formula 1 front wing endplates.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#FF8000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#FF8000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#FF8000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'bmw-m-tricolor-bars',
    name: 'BMW M Tri-Color Incline Bars',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the BMW M Tri-Color Incline Bars mark.',
    insight: 'Jochen Neerpasch created the blue, purple, and red stripes in 1972 inclined at 20 degrees.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#0066B1" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#0066B1" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#0066B1" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'audi-sport-rhombus',
    name: 'Audi Sport Red Rhombus Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Audi Sport Red Rhombus Incline mark.',
    insight: 'The vibrant red performance rhombus tilts at 30 degrees across Audi RS competition grilles.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nismo-red-o-angle',
    name: 'Nissan Nismo Performance Angle',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Nissan Nismo Performance Angle mark.',
    insight: 'The red letter O is italicized to communicate Japanese super-GT motorsport engine tune.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'gazoo-racing-gr',
    name: 'Toyota Gazoo Racing GR Chevrons',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Toyota Gazoo Racing GR Chevrons mark.',
    insight: 'The intertwined G and R chevrons embody Toyota’s World Rally Championship racing heritage.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#1A1A1A" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#1A1A1A" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#1A1A1A" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'polestar-converging-stars',
    name: 'Polestar Converging Chrome Chevrons',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Polestar Converging Chrome Chevrons mark.',
    insight: 'Two diagonal arrowheads meet at a central point symbolizing the guiding Arctic pole star.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'dhl-speed-stripes',
    name: 'DHL Three Red Velocity Stripes',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the DHL Three Red Velocity Stripes mark.',
    insight: 'Three razor-thin horizontal speed cuts slice through the italicized red DHL wordmark.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#D40511" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#D40511" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#D40511" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ups-tilted-shield',
    name: 'UPS Paul Rand Modern Shield',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the UPS Paul Rand Modern Shield mark.',
    insight: 'Paul Rand modernized the package-and-shield emblem in 1961 with a bold 12-degree italic stance.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#351C15" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#351C15" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#351C15" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'oakley-elliptical-o',
    name: 'Oakley Elliptical O Velocity',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Oakley Elliptical O Velocity mark.',
    insight: 'Jim Jannard engineered the stretched aerodynamic O to match high-speed motocross grip dynamics.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ray-ban-signature-slant',
    name: 'Ray-Ban Aviator Signature Slant',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Ray-Ban Aviator Signature Slant mark.',
    insight: 'Bausch & Lomb penned the cursive signature in 1937 tilted diagonally across aviator teardrop lenses.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#E31837" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#E31837" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#E31837" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'specialized-lightning-s',
    name: 'Specialized Cycling Lightning S',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Specialized Cycling Lightning S mark.',
    insight: 'Mike Sinyard designed the zigzagging red S to mimic switchback turns climbing mountain passes.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'trek-cyclist-shield',
    name: 'Trek Bicycles Incline Crest',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Trek Bicycles Incline Crest mark.',
    insight: 'Dick Burke chose the heraldic road shield in 1976 to symbolize American bicycle touring quality.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'cannondale-aluminum-c',
    name: 'Cannondale Station Track Monogram',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Cannondale Station Track Monogram mark.',
    insight: 'Named after the historic Cannondale train station in Connecticut where oversized aluminum frames began.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#008542" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#008542" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#008542" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'cervelo-accent-e',
    name: 'Cervélo Accented Velocity E',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Cervélo Accented Velocity E mark.',
    insight: 'Gérard Vroomen combined the Italian cervello (brain) with velo (bike), highlighting the acute accent.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'pinarello-asymmetrical-p',
    name: 'Pinarello Dogma Asymmetrical P',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Pinarello Dogma Asymmetrical P mark.',
    insight: 'Giovanni Pinarello’s stylized P reflects the asymmetrical carbon fiber frame geometry of the Tour de France.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'bianchi-celeste-eagle',
    name: 'Bianchi Royal Crown Eagle Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Bianchi Royal Crown Eagle Incline mark.',
    insight: 'Edoardo Bianchi was granted the royal Savoy crown and eagle by Queen Margherita in 1895.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#00B4B4" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#00B4B4" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#00B4B4" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'fox-racing-head',
    name: 'Fox Racing Head Forward Lean',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Fox Racing Head Forward Lean mark.',
    insight: 'Geoff Fox drew the fox head in 1974 with intense eyes and angled ears anticipating jumps.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#FF6600" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#FF6600" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#FF6600" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'alpinestars-a-star',
    name: 'Alpinestars A-Star Forward Slant',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Alpinestars A-Star Forward Slant mark.',
    insight: 'Sante Mazzarolo named the brand after the alpine star edelweiss, leaning forward into racing turns.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'dainese-speed-demon',
    name: 'Dainese Red Speed Demon Head',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Dainese Red Speed Demon Head mark.',
    insight: 'Lino Dainese drew the red devil icon in 1972 representing the fiery passion for motorcycling speed.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ktm-aggressive-slant',
    name: 'KTM Ready to Race 24-Degree Slant',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the KTM Ready to Race 24-Degree Slant mark.',
    insight: 'The Austrian off-road motorcycle brand angles its typography at an aggressive 24-degree competition pitch.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#FF6600" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#FF6600" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#FF6600" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ducati-corse-italic',
    name: 'Ducati Corse Track Angle',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Ducati Corse Track Angle mark.',
    insight: 'The white racing line sweeps across the Italian red competition badge at apex banking angle.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'kawasaki-racing-lime',
    name: 'Kawasaki Ninja Lime Green Slash',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Kawasaki Ninja Lime Green Slash mark.',
    insight: 'The electric lime green racing color was introduced in 1969 to stand out against traditional red competitors.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#66CC00" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#66CC00" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#66CC00" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'yamaha-racing-speedblock',
    name: 'Yamaha Speedblock Strobe Stripes',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Yamaha Speedblock Strobe Stripes mark.',
    insight: 'The black-and-white strobe blocks on yellow fairings became the legendary hallmark of Kenny Roberts.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#003399" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#003399" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#003399" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'suzuki-ecstar-slant',
    name: 'Suzuki Ecstar MotoGP Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Suzuki Ecstar MotoGP Incline mark.',
    insight: 'The dynamic electric blue and neon yellow speed sashes communicate 350 km/h straightaway speed.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#003399" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#003399" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#003399" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'honda-racing-hrc',
    name: 'Honda Racing Corporation Tricolor',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Honda Racing Corporation Tricolor mark.',
    insight: 'The red, white, and blue diagonal blocks have graced championship winning Formula 1 and MotoGP machines.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'renault-sport-chevrons',
    name: 'Renault Sport Yellow Velocity Bars',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Renault Sport Yellow Velocity Bars mark.',
    insight: 'The dual yellow and black parallelogram chevrons signify Dieppe rally and touring car engineering.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#FFCC00" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#FFCC00" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#FFCC00" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'alpine-a-arrow',
    name: 'Alpine A-Arrow Flight Angle',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Alpine A-Arrow Flight Angle mark.',
    insight: 'Jean Rédélé styled the letter A as a steep mountain pass road arrow pointed toward Mont Blanc.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#004A99" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#004A99" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#004A99" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'abarth-scorpion-shield',
    name: 'Abarth Racing Scorpion Angle',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Abarth Racing Scorpion Angle mark.',
    insight: 'Carlo Abarth chose his astrological birth sign Scorpio, angled defensively inside a racing shield.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#FFD700" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#FFD700" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#FFD700" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'shelby-cobra-strike',
    name: 'Shelby Cobra Striking Angle',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Shelby Cobra Striking Angle mark.',
    insight: 'Carroll Shelby’s coiled king cobra bares its fangs at a menacing 45-degree striking angle.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#002B49" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#002B49" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#002B49" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'saleen-s-chevron',
    name: 'Saleen High Performance Wing',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Saleen High Performance Wing mark.',
    insight: 'Steve Saleen’s twin winged stripes communicate championship winning S7 supercar aerodynamics.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'koenigsegg-phantom-angle',
    name: 'Koenigsegg Ghost Squadron Angle',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Koenigsegg Ghost Squadron Angle mark.',
    insight: 'The ghost insignia honors the Swedish air force fighter squadron formerly based at the Ängelholm factory.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'pagani-ellipse-crest',
    name: 'Pagani Horacio Titanium Oval',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Pagani Horacio Titanium Oval mark.',
    insight: 'Horacio Pagani engineered the brushed titanium badge with aeronautical carbon-titanium weave lines.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#1A1A1A" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#1A1A1A" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#1A1A1A" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'rimac-hypercar-chevron',
    name: 'Rimac Automobili Electric Chevron',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Rimac Automobili Electric Chevron mark.',
    insight: 'Mate Rimac styled the dual electric motor flux chevrons to symbolize instantaneous megawatt torque.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#00A3E0" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#00A3E0" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#00A3E0" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'bugatti-eb-monogram',
    name: 'Bugatti Intertwined EB Monogram',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Bugatti Intertwined EB Monogram mark.',
    insight: 'Ettore Bugatti interlocked his mirrored initials in black enamel on cast aluminum cylinder blocks.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'hispano-suiza-stork',
    name: 'Hispano Suiza Flying Stork Angle',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Hispano Suiza Flying Stork Angle mark.',
    insight: 'The flying silver stork honors French World War I ace Georges Guynemer’s Escadrille des Cigognes.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#00205B" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#00205B" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#00205B" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'delorean-dmc-italic',
    name: 'DeLorean Motor Company DMC Blocks',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the DeLorean Motor Company DMC Blocks mark.',
    insight: 'The three futuristic block letterforms were mirrored by John DeLorean to evoke gull-wing doors.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#C0C0C0" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#C0C0C0" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#C0C0C0" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'vector-aeromotive-v',
    name: 'Vector Aeromotive Fighter Jet V',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Vector Aeromotive Fighter Jet V mark.',
    insight: 'Gerald Wiegert sculpted the sharp angular V inspired by Lockheed SR-71 Blackbird stealth lines.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'de-tomaso-isis-brand',
    name: 'De Tomaso Egyptian Isis Brand',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the De Tomaso Egyptian Isis Brand mark.',
    insight: 'Alejandro de Tomaso combined the Argentine flag colors with the cattle branding iron of his ranch.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#004A99" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#004A99" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#004A99" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'monteverdi-swiss-shield',
    name: 'Monteverdi Swiss High-Speed Crest',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Monteverdi Swiss High-Speed Crest mark.',
    insight: 'Peter Monteverdi paired the red-and-white Basel coat of arms with luxury GT grand touring power.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#D52B1E" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#D52B1E" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#D52B1E" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'spyker-aeroplane-propeller',
    name: 'Spyker Aircraft Propeller Wheel',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Spyker Aircraft Propeller Wheel mark.',
    insight: 'The two-blade wooden aeroplane propeller interlocks with a spoked automotive wire wheel.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#FF6600" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#FF6600" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#FF6600" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'tvr-three-letter-cut',
    name: 'TVR Aggressive Chamfer Monogram',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the TVR Aggressive Chamfer Monogram mark.',
    insight: 'Trevor Wilkinson extracted three consonants from his first name (TreVoR) in 1947.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'marcos-mantis-wings',
    name: 'Marcos Plywood Supercar Monogram',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Marcos Plywood Supercar Monogram mark.',
    insight: 'Jem Marsh and Frank Costin constructed wooden monocoque chassis racing cars with soaring wings.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#004225" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#004225" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#004225" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'noble-m12-monogram',
    name: 'Noble Automotive High-Speed N',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Noble Automotive High-Speed N mark.',
    insight: 'Lee Noble’s minimalist monogram signifies twin-turbo lightweight British track performance.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#003366" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#003366" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#003366" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ginetta-flying-g',
    name: 'Ginetta Motorsport Flying G',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Ginetta Motorsport Flying G mark.',
    insight: 'The Walklett brothers formed Ginetta in 1958, angling the letter G into a competition steering wheel.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'caterham-seven-arrow',
    name: 'Caterham Seven Racing Green Arrow',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Caterham Seven Racing Green Arrow mark.',
    insight: 'The Lotus 7 heritage continues with the green number 7 spearheading aerodynamic cycle fenders.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#004225" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#004225" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#004225" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'morgan-winged-aerofoil',
    name: 'Morgan Motor Company Wings',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Morgan Motor Company Wings mark.',
    insight: 'H.F.S. Morgan crowned his Malvern Link ash wood sports cars with soaring flight plumage in 1909.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'brabham-bt-chevrons',
    name: 'Brabham Repco World Champion Bars',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Brabham Repco World Champion Bars mark.',
    insight: 'Sir Jack Brabham remains the only driver in history to win the Formula 1 World Championship in his own car.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#0055A5" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#0055A5" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#0055A5" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'tyrrell-racing-blue',
    name: 'Tyrrell Racing 006 Forward Lean',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Tyrrell Racing 006 Forward Lean mark.',
    insight: 'Ken Tyrrell’s iconic blue racing cars won world championships with Jackie Stewart behind the wheel.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#002D62" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#002D62" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#002D62" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'williams-racing-w',
    name: 'Williams Racing Forward Chevron W',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Williams Racing Forward Chevron W mark.',
    insight: 'Sir Frank Williams and Patrick Head built nine World Championship constructors titles with the blue W.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#002B49" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#002B49" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#002B49" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'sauber-f1-incline',
    name: 'Sauber Motorsport Aerodynamic S',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Sauber Motorsport Aerodynamic S mark.',
    insight: 'Peter Sauber’s Swiss precision wind tunnel engineered Formula 1 machinery with italicized lines.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'stewart-grand-prix-tartan',
    name: 'Stewart Grand Prix Royal Tartan Slant',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Stewart Grand Prix Royal Tartan Slant mark.',
    insight: 'Sir Jackie Stewart adorned his Ford-powered Formula 1 machinery with the royal Stewart clan tartan.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#FFFFFF" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#FFFFFF" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'arrows-f1-three-arrows',
    name: 'Arrows Grand Prix Three-Way Arrows',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Arrows Grand Prix Three-Way Arrows mark.',
    insight: 'The three forward-pointing geometric arrows represent Franco Ambrosio, Alan Rees, and Jackie Oliver.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#FFCC00" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#FFCC00" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#FFCC00" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'shadow-f1-can-am',
    name: 'Shadow Racing Mysterious Cloak Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Shadow Racing Mysterious Cloak Incline mark.',
    insight: 'Don Nichols created the cloaked spy silhouette for Can-Am and Formula 1 black racing cars.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#000000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#000000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#000000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'march-engineering-m',
    name: 'March Engineering Modular M-Wing',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the March Engineering Modular M-Wing mark.',
    insight: 'Max Mosley, Alan Rees, Graham Coaker, and Robin Herd built the world’s most versatile racing chassis.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'surtees-ts-racing',
    name: 'Surtees TS Motorcycle & F1 Crown',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Surtees TS Motorcycle & F1 Crown mark.',
    insight: 'John Surtees is the only person to win world championships on both two wheels and four wheels.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#003366" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#003366" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#003366" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'lotus-f1-black-and-gold',
    name: 'Team Lotus JPS Black and Gold Pinstripes',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Team Lotus JPS Black and Gold Pinstripes mark.',
    insight: 'Colin Chapman and Emerson Fittipaldi redefined motorsport sponsorship with the John Player Special livery.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#D4AF37" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#D4AF37" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#D4AF37" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'brm-british-racing-green',
    name: 'BRM V16 Orange Noseband Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the BRM V16 Orange Noseband Incline mark.',
    insight: 'British Racing Motors built the legendary 16-cylinder supercharged Grand Prix engine in Bourne.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#004225" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#004225" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#004225" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'cooper-climax-twin-stripes',
    name: 'Cooper Car Company White Bonnet Stripes',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Cooper Car Company White Bonnet Stripes mark.',
    insight: 'John Cooper revolutionized Grand Prix racing by putting the engine behind the driver.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#004225" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#004225" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#004225" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'vanwall-green-teardrop',
    name: 'Vanwall Grand Prix Streamlined Teardrop',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Vanwall Grand Prix Streamlined Teardrop mark.',
    insight: 'Tony Vandervell built the first British constructor car to win the Formula 1 World Championship in 1958.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#004225" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#004225" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#004225" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'osella-racing-fa',
    name: 'Osella Squadra Corse Slanted Chevrons',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Osella Squadra Corse Slanted Chevrons mark.',
    insight: 'Vincenzo Enzo Osella ran passionate Italian hillclimb and Formula 1 racing prototypes in Turin.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#003399" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#003399" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#003399" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'minardi-yellow-slash',
    name: 'Minardi Team Faenza Passion Angle',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Minardi Team Faenza Passion Angle mark.',
    insight: 'Giancarlo Minardi’s beloved Italian team nurtured future champions Fernando Alonso and Mark Webber.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#FFD700" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#FFD700" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#FFD700" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'scuderia-toro-rosso-bull',
    name: 'Toro Rosso Flying Red Bull Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Toro Rosso Flying Red Bull Incline mark.',
    insight: 'The energetic charging bull silhouette was rendered in hand-painted racing livery across Faenza machines.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#002B49" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#002B49" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#002B49" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'haas-f1-red-bracket',
    name: 'Haas Automation Precision Bracket',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Haas Automation Precision Bracket mark.',
    insight: 'Gene Haas engineered the CNC machine tool bracket into an aggressive Formula 1 team livery.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'penske-racing-p-line',
    name: 'Team Penske Precision Racing P',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Team Penske Precision Racing P mark.',
    insight: 'Roger Penske’s legendary organization has captured 19 Indianapolis 500 victories with crisp white livery.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#E41B13" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#E41B13" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#E41B13" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ganassi-racing-target',
    name: 'Chip Ganassi Racing Velocity Wedge',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Chip Ganassi Racing Velocity Wedge mark.',
    insight: 'Chip Ganassi’s championship organization motto is simple: I like winners.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#002B49" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#002B49" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#002B49" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'joest-racing-incline',
    name: 'Joest Racing Le Mans Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Joest Racing Le Mans Incline mark.',
    insight: 'Reinhold Joest’s team captured 15 overall 24 Hours of Le Mans victories.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'prodrive-racing-p',
    name: 'Prodrive WRC World Championship Wings',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Prodrive WRC World Championship Wings mark.',
    insight: 'David Richards built championship-winning rally and sports car racing machinery.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#003399" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#003399" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#003399" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'schnitzer-bmw-m',
    name: 'Schnitzer Motorsport Touring Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Schnitzer Motorsport Touring Incline mark.',
    insight: 'The Schnitzer brothers dominated European touring car racing for over 50 years.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#0066B1" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#0066B1" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#0066B1" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'af-corse-ferrari',
    name: 'AF Corse GT Racing Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the AF Corse GT Racing Incline mark.',
    insight: 'Amato Ferrari’s team captured multiple World Endurance Championships for Ferrari.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'manthey-racing-grello',
    name: 'Manthey Racing Nürburgring Chevron',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Manthey Racing Nürburgring Chevron mark.',
    insight: 'Olaf Manthey’s legendary Grello Porsche 911 GT3 R conquered the Green Hell.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#9ACD32" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#9ACD32" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#9ACD32" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'iron-dames-magenta',
    name: 'Iron Dames High-Speed Arrow',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the Iron Dames High-Speed Arrow mark.',
    insight: 'The pioneering all-female racing team inspires the next generation of motorsport talent.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#FF007F" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#FF007F" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#FF007F" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'apr-motorsport-bars',
    name: 'APR Performance Tuning Incline',
    archetypeId: 'tilt-angle',
    prompt: 'Adjust the dynamic athletic takeoff and velocity incline angle of the APR Performance Tuning Incline mark.',
    insight: 'The performance automotive engineering brand tunes turbochargers at high-velocity angles.',
    parameters: [
      {
        id: 'tiltAngle',
        label: 'Dynamic Velocity Tilt Angle',
        min: 5,
        max: 45,
        step: 0.5,
        targetValue: 24,
        tolerance: 7,
        unit: '°'
      }
    ],
    render: (values, showOfficial) => {
      const angle = getParamVal(values, showOfficial, 'tiltAngle', 24);
      return (
        <svg viewBox="-120 -80 240 160" width="260" height="170">
          <g transform={`rotate(${-angle}, 0, 10)`}>
            <polygon points="-80,35 -60,-35 -30,-35 -50,35" fill="#CC0000" />
            <polygon points="-30,35 -10,-35 20,-35 0,35" fill="#CC0000" />
            <polygon points="20,35 40,-35 70,-35 50,35" fill="#CC0000" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="-90" y1="30" x2="75" y2="-45" />
          )}
        </svg>
      );
    }
  }
];

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
        <svg viewBox="-4 -4 32 32" width="280" height="180" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path
              d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"
              fill="#111111"
            />
          </g>
          {showOfficial && (
            <line x1="-2" y1="16" x2="26" y2="7" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M23.845 3.008c-.417-.533-1.146-.106-1.467.08-2.284 1.346-2.621 3.716-3.417 5.077-.626 1.09-1.652 1.89-2.58 1.952-.686.049-1.43-.084-2.168-.405-1.807-.781-2.78-1.792-3.017-1.97-.487-.37-4.23-4.015-7.28-4.164 0 0-.372-.75-.465-.763-.222-.025-.45.451-.616.501-.15.053-.413-.512-.565-.487-.153.02-.302.586-.6.877-.22.213-.486.2-.637.463-.052.096-.034.265-.093.42-.127.32-.551.354-.555.697 0 .381.357.454.669.72.248.212.265.362.554.461.258.088.632-.187.964-.088.277.081.543.14.602.423.054.256 0 .658-.34.613-.112-.015-.598-.174-1.198-.11-.725.077-1.553.309-1.634 1.11-.041.447.514.97 1.055.866.371-.071.196-.506.399-.716.267-.27 1.772.944 3.172.944.593 0 1.031-.15 1.467-.605.04-.029.093-.102.155-.11a.632.632 0 01.195.088c1.131.897 1.984 2.7 6.13 2.721.582.007 1.25.279 1.796.777.48.433.764 1.125 1.037 1.825.418 1.053 1.161 2.069 2.292 3.203.06.068.99.78 1.06.833.012.01.084.167.053.255-.02.69-.123 2.67 1.365 2.753.366.02.275-.231.275-.41-.005-.341-.065-.685.113-1.04.253-.478-.526-.709-.509-1.756.019-.784-.645-.651-.984-1.25-.19-.343-.368-.532-.35-.946.073-2.38-.517-3.948-.805-4.327-.227-.294-.423-.403-.207-.54 1.24-.815 1.525-1.574 1.525-1.574.66-1.541 1.256-2.945 2.075-3.57.166-.12.589-.44.852-.56.763-.362 1.173-.578 1.388-.788.356-.337.635-1.053.294-1.48z" fill="#242B2F" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M14.991 11.48C17.744 10.38 19.458 9.748 24 8.64c-2.467.163-7.922.537-11.682 1.271l2.673 1.57m-8.56 3.651h3.6c.713-1.08 1.422-1.606 2.248-2.191a71.382 71.382 0 00-1.892-.701c-2.297 1.014-3.575 2.375-3.953 2.892m.709-3.928c-3.21 1.147-4.994 2.393-6.199 3.928h3.975c.387-.539 1.862-2.093 4.633-3.174a57.092 57.092 0 00-2.41-.754M8.79 8.788H0c8.862 1.6 13.133 3.66 20 6.572-.587-.439-10.051-6.013-11.209-6.572" fill="#E41D1B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" fill="#635BFF" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M12.169 10.306l1.111-1.937 3.774-.242.132-.236-3.488-.242.82-1.414h6.47c1.99 0 3.46.715 2.887 2.8-.17.638-.979 2.233-3.356 2.899.507.06 1.76.616 1.54 2.057-.384 2.558-3.69 3.774-5.533 3.774l-7.641.006-.38-1.48 4.005-.28.137-.237-4.346-.264-.467-1.755 6.178-.363.137-.231-11.096-.693.534-.925 11.948-.775.138-.231-3.504-.231m5 .385l1.1-.006c.738-.005 1.502-.34 1.783-1.018.259-.632-.088-1.171-.55-1.166h-1.067l-1.266 2.19zm-1.27 2.195l-1.326 2.305h1.265c.589 0 1.64-.292 1.964-1.128.302-.781-.253-1.177-.638-1.177h-1.266zM6.26 16.445l-.77 1.315L0 17.77l.534-.923 5.726-.402zm.385-10.216l4.417.006.336 1.248-5.276-.33.523-.924zm5 2.245l.484 1.832-7.542-.495.528-.92 6.53-.417zm-3.84 5.281l-.957 1.661-5.32-.302.534-.924 5.743-.435z" fill="#CF0A2C" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M1.8246 0c-.4424 0-.774.3685-.774.774v6.1198c0 .4424.3685.7747.774.7747H5.88c.4424 0 .774-.3323.774-.7747 0-.4424-.3684-.774-.774-.774H2.562V1.548h2.544v1.2903c0 .2212.0736.4056.221.553.1475.1475.3687.2218.553.2218h4.092c.4425 0 .7749-.3692.7749-.7748V1.5481H13.29v1.2903c0 .4424.3692.7748.7747.7748h4.092c.2213 0 .4056-.0743.553-.2218.1476-.1474.2211-.3686.2211-.553V1.5481h2.544V6.083H18.12c-.4424 0-.7748.3685-.7748.774 0 .4424.3692.774.7748.774h4.092c.1843 0 .4055-.0735.553-.221.1475-.1474.221-.3686.221-.553V.774c0-.4055-.3689-.7371-.6638-.774h-4.092c-.4425 0-.7741.3685-.7741.774v1.2904h-2.544V.774c0-.4424-.3685-.7741-.774-.7741h-4.092c-.4425 0-.7741.3685-.7741.774v1.2904H6.6914V.774C6.6914.3317 6.3222 0 5.9167 0ZM1.788 9.069c-.4424 0-.774.3686-.774.774v8.8113C1.0138 21.6037 3.4101 24 6.3594 24h11.281c2.9493 0 5.3457-2.3963 5.3457-5.3457V9.8431c0-.4424-.3686-.774-.774-.774zm.774 1.5114h18.8762v8.074c0 2.1013-1.6962 3.7975-3.7976 3.7975H6.3595c-2.1014 0-3.7976-1.6962-3.7976-3.7976zm9.4377 2.544c-1.8802 0-3.4281 1.5486-3.4281 3.4288v2.6541c0 .4424.3685.7741.774.7741h5.309c.4424 0 .774-.3685.774-.774v-2.6542c0-1.8802-1.5487-3.4288-3.4289-3.4288zm-.0367 1.4746c1.0691 0 1.9175.8484 1.9175 1.9175v1.9168h-3.8343v-1.9168c0-1.0691.8477-1.9175 1.9168-1.9175z" fill="#2AC6EA" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M.643 1.475c0 .814.668 1.475 1.49 1.475H14.49c1.408 0 2.568.43 3.48 1.29.91.861 1.366 1.967 1.366 3.32 0 1.25-.456 2.274-1.367 3.072-.911.78-2.07 1.168-3.479 1.168H9.12c-.824 0-1.491.66-1.491 1.475 0 .815.667 1.475 1.491 1.475h5.93l5.342 8.482c.332.512.797.768 1.398.768.663 0 1.129-.256 1.398-.768.269-.533.217-1.096-.155-1.69l-4.753-7.56c1.284-.574 2.299-1.414 3.044-2.52.746-1.127 1.119-2.427 1.119-3.902 0-1.496-.342-2.807-1.026-3.934-.662-1.127-1.594-2.008-2.795-2.643C17.42.327 16.044 0 14.49 0H2.134C1.311 0 .643.66.643 1.475Z" fill="#1D1D1D" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M24 0V24l-9.365-8.045V24H0V0ZM2.942 21.087h8.751V9.563l9.365 8.204V2.919L2.942 2.914Z" fill="#34D59A" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M8.814 8.027c-.614 0-1.113.498-1.113 1.113v5.72a1.113 1.113 0 0 0 2.226 0V9.14c0-.614-.498-1.113-1.113-1.113m-2.849.078H1.113a1.113 1.113 0 0 0 0 2.226h4.852a1.113 1.113 0 0 0 0-2.226m17.411 4.417L21.03 8.705c-.275-.444-.65-.658-1.125-.658-.488 0-.904.229-1.162.658l-2.715 4.5c-.186.308-.4.436-.753.436h-2.019a.275.275 0 0 1-.285-.284V9.102c0-.613-.497-1.075-1.11-1.075-.614 0-1.11.463-1.11 1.076v5.215c0 .784.774 1.544 1.544 1.544h4.064c.576 0 .963-.42 1.292-.996l2.114-3.627c.018-.04.053-.091.093-.091.043 0 .07.051.091.088l1.384 2.22c.058.094.069.141.032.225-.033.077-.108.093-.23.093h-1.943a1.044 1.044 0 1 0 0 2.088h3.17c.77 0 1.638-.734 1.638-1.693 0-.608-.117-.822-.624-1.647M5.431 10.954H1.113c-.615 0-1.113.498-1.113 1.113v2.715a1.113 1.113 0 1 0 2.226 0v-1.268c0-.185.15-.334.334-.334h2.87a1.113 1.113 0 0 0 0-2.226" fill="#002D62" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M0 9.1723h7.5563c.48-.749 1.1108-1.3428 1.8935-1.7828.7822-.4393 1.6314-.659 2.5484-.659.9163 0 1.7673.2203 2.5526.6615.7852.4412 1.4154 1.035 1.8892 1.7803H24l-.7483.7483h-6.3994a4.278 4.278 0 0 1 .299.8886h5.2333l-.7483.749h-4.3692c.0129.1932.019.3396.019.4393 0 .0997-.0061.2468-.019.44h3.4904l-.7489.7483h-2.8572a4.0661 4.0661 0 0 1-.299.8844h2.264l-.7582.7483H16.44c-.4738.7464-1.104 1.3421-1.8892 1.7858-.7853.4437-1.6363.6652-2.5526.6652-.917 0-1.7662-.2209-2.5484-.6627-.7827-.4425-1.4135-1.0388-1.8935-1.7883H5.6418l-.744-.7483h2.2597a4.093 4.093 0 0 1-.296-.8844H4.0062l-.7582-.7483h3.4898c-.0129-.1932-.019-.3403-.019-.44 0-.0997.0061-.2461.019-.4393h-4.36l-.7581-.749h5.2418a4.306 4.306 0 0 1 .296-.8886H.7483zm7.8437 1.0714c-.2382.5581-.3575 1.1428-.3575 1.7538 0 .6111.1193 1.1963.3575 1.7545.2381.5575.5594 1.0394.963 1.4443.4038.405.8838.7268 1.44.9662.5564.2393 1.1404.3587 1.7515.3587.6104 0 1.195-.1194 1.7532-.3587.5575-.2394 1.0388-.5613 1.4424-.9662.4037-.405.725-.8868.9656-1.4443.24-.5582.36-1.1434.36-1.7545 0-.611-.12-1.1957-.36-1.7538-.2406-.5582-.5619-1.0388-.9656-1.4425-.4036-.403-.8849-.7243-1.4424-.9637-.5582-.2393-1.1428-.3587-1.7532-.3587-.6111 0-1.1951.1194-1.7514.3587-.5563.2394-1.0363.5607-1.44.9637-.4037.4037-.725.8843-.9631 1.4425zm.5538 2.9421h.4677l-.0135-1.7729.5661 1.773.52-.0032.5557-1.7606v1.7637h.4991v-2.3766l-.7028-.0006-.603 1.8954-.6148-1.893-.6745-.0018zm3.133 0h.4953v-2.3766h-.4953zm1.0332 0h.477v-1.712l.9488 1.712h.5754v-2.3766h-.4677v1.7219l-.9489-1.7219h-.5846zm2.5483 0h.4862v-2.3766h-.4862z" fill="#000000" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M3.598 7.15a7.961 7.961 0 0 0-1.054.068c-.281.041-.52.124-.717.249a1.19 1.19 0 0 0-.45.497c-.098.208-.14.47-.14.802V10.3c0 .428-.084.732-.253.884-.169.166-.492.25-.984.25v1.16c.478 0 .815.083.984.249.169.166.253.47.253.912v1.548c0 .594.183 1.009.548 1.23.38.207.984.318 1.813.318v-1.078c-.393 0-.646-.07-.773-.194-.126-.124-.183-.373-.183-.746v-1.465c0-.373-.098-.663-.28-.87-.184-.208-.479-.374-.886-.484.393-.125.688-.29.871-.512.183-.22.281-.511.281-.87V9.167c0-.36.057-.608.183-.733.122-.12.412-.195.787-.2v4.547c0 .416.03.764.09 1.044.059.28.164.52.314.724.15.203.356.35.616.443.26.093.589.14.984.14.098 0 .205-.007.32-.02a5.336 5.336 0 0 0 .65-.107l-.036-.98c-.27.038-.492.057-.667.057-.353 0-.59-.092-.713-.276-.122-.183-.183-.534-.183-1.051V7.149H3.598zm16.818-.001v1.092c.393 0 .647.069.773.193.127.125.183.373.183.733v1.465c0 .359.098.65.28.87.184.222.479.387.872.512-.407.11-.702.276-.885.483-.183.208-.281.498-.281.871v1.465c0 .373-.057.622-.183.746-.126.125-.38.194-.773.194v1.078c.83 0 1.434-.11 1.813-.318.365-.221.548-.636.548-1.23v-1.548c0-.442.085-.746.253-.912.169-.166.506-.249.984-.249v-1.16c-.492 0-.815-.084-.984-.25-.168-.151-.253-.456-.253-.884V8.766c0-.332-.042-.594-.14-.801a1.19 1.19 0 0 0-.45-.498 1.828 1.828 0 0 0-.717-.249 7.252 7.252 0 0 0-1.04-.069zm-6.479 1.975c-.675 0-1.209.14-1.588.421-.38.281-.576.689-.576 1.209 0 .422.112.773.351 1.026s.618.478 1.152.688c.043.015.14.057.296.113.45.183.758.31.913.436a.592.592 0 0 1 .239.478c0 .224-.084.393-.253.506-.169.112-.408.168-.717.168-.295 0-.632-.056-.984-.155a3.901 3.901 0 0 1-.885-.337l-.14 1.04c.505.296 1.18.436 2.037.436.717 0 1.265-.155 1.659-.464.393-.309.59-.759.59-1.335 0-.436-.126-.787-.38-1.054-.252-.267-.632-.492-1.166-.689-.382-.15-.84-.277-1.209-.506a.465.465 0 0 1-.224-.421c0-.183.084-.324.239-.422.154-.098.365-.14.646-.14.506 0 1.026.126 1.574.379l.365-.956c-.562-.28-1.208-.421-1.939-.421zm4.512 0c-.675 0-1.21.14-1.589.421-.38.281-.576.689-.576 1.209 0 .422.112.773.351 1.026.24.253.619.478 1.153.688.042.015.14.057.295.113.45.183.759.31.914.436a.592.592 0 0 1 .238.478c0 .224-.084.393-.253.506-.168.112-.407.168-.716.168a3.72 3.72 0 0 1-.984-.155 3.904 3.904 0 0 1-.886-.337l-.14 1.04c.506.296 1.18.436 2.038.436.702 0 1.265-.155 1.686-.464.394-.309.59-.759.59-1.335 0-.436-.126-.787-.379-1.054s-.632-.492-1.166-.689c-.392-.153-.842-.277-1.209-.506a.465.465 0 0 1-.225-.421c0-.183.085-.324.24-.422.154-.098.364-.14.646-.14.506 0 1.026.126 1.574.379l.337-.956c-.562-.28-1.209-.421-1.94-.421zm-9.46.014c-.842 0-1.503.267-1.995.815-.492.548-.73 1.279-.73 2.192 0 .956.252 1.687.772 2.22.52.535 1.237.802 2.165.802.8 0 1.49-.183 2.08-.52l-.197-.984a3.66 3.66 0 0 1-1.813.492c-.492 0-.886-.155-1.167-.45-.28-.295-.435-.716-.45-1.25h3.852v-.591c0-.829-.225-1.49-.661-1.982-.45-.491-1.054-.744-1.855-.744zm-.013.983c.38 0 .674.127.885.38.211.253.323.618.323 1.082H7.67c.042-.492.182-.857.407-1.096.253-.239.548-.366.9-.366Z" fill="#1D365D" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.23 16.244a.371.371 0 0 1-.373.372H16.29a.371.371 0 0 1-.372-.372v-4.828c0-.04-.046-.06-.08-.033l-3.32 3.32a.742.742 0 0 1-1.043 0l-3.32-3.32c-.027-.027-.08-.007-.08.033v4.828a.371.371 0 0 1-.372.372H6.136a.371.371 0 0 1-.372-.372V7.757c0-.206.166-.372.372-.372h1.076a.75.75 0 0 1 .525.22l4.13 4.13a.18.18 0 0 0 .26 0l4.13-4.13c.14-.14.325-.22.525-.22h1.075c.206 0 .372.166.372.372z" fill="#D9272E" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M3.598 7.15a7.961 7.961 0 0 0-1.054.068c-.281.041-.52.124-.717.249a1.19 1.19 0 0 0-.45.497c-.098.208-.14.47-.14.802V10.3c0 .428-.084.732-.253.884-.169.166-.492.25-.984.25v1.16c.478 0 .815.083.984.249.169.166.253.47.253.912v1.548c0 .594.183 1.009.548 1.23.38.207.984.318 1.813.318v-1.078c-.393 0-.646-.07-.773-.194-.126-.124-.183-.373-.183-.746v-1.465c0-.373-.098-.663-.28-.87-.184-.208-.479-.374-.886-.484.393-.125.688-.29.871-.512.183-.22.281-.511.281-.87V9.167c0-.36.057-.608.183-.733.122-.12.412-.195.787-.2v4.547c0 .416.03.764.09 1.044.059.28.164.52.314.724.15.203.356.35.616.443.26.093.589.14.984.14.098 0 .205-.007.32-.02a5.336 5.336 0 0 0 .65-.107l-.036-.98c-.27.038-.492.057-.667.057-.353 0-.59-.092-.713-.276-.122-.183-.183-.534-.183-1.051V7.149H3.598zm16.818-.001v1.092c.393 0 .647.069.773.193.127.125.183.373.183.733v1.465c0 .359.098.65.28.87.184.222.479.387.872.512-.407.11-.702.276-.885.483-.183.208-.281.498-.281.871v1.465c0 .373-.057.622-.183.746-.126.125-.38.194-.773.194v1.078c.83 0 1.434-.11 1.813-.318.365-.221.548-.636.548-1.23v-1.548c0-.442.085-.746.253-.912.169-.166.506-.249.984-.249v-1.16c-.492 0-.815-.084-.984-.25-.168-.151-.253-.456-.253-.884V8.766c0-.332-.042-.594-.14-.801a1.19 1.19 0 0 0-.45-.498 1.828 1.828 0 0 0-.717-.249 7.252 7.252 0 0 0-1.04-.069zm-6.479 1.975c-.675 0-1.209.14-1.588.421-.38.281-.576.689-.576 1.209 0 .422.112.773.351 1.026s.618.478 1.152.688c.043.015.14.057.296.113.45.183.758.31.913.436a.592.592 0 0 1 .239.478c0 .224-.084.393-.253.506-.169.112-.408.168-.717.168-.295 0-.632-.056-.984-.155a3.901 3.901 0 0 1-.885-.337l-.14 1.04c.505.296 1.18.436 2.037.436.717 0 1.265-.155 1.659-.464.393-.309.59-.759.59-1.335 0-.436-.126-.787-.38-1.054-.252-.267-.632-.492-1.166-.689-.382-.15-.84-.277-1.209-.506a.465.465 0 0 1-.224-.421c0-.183.084-.324.239-.422.154-.098.365-.14.646-.14.506 0 1.026.126 1.574.379l.365-.956c-.562-.28-1.208-.421-1.939-.421zm4.512 0c-.675 0-1.21.14-1.589.421-.38.281-.576.689-.576 1.209 0 .422.112.773.351 1.026.24.253.619.478 1.153.688.042.015.14.057.295.113.45.183.759.31.914.436a.592.592 0 0 1 .238.478c0 .224-.084.393-.253.506-.168.112-.407.168-.716.168a3.72 3.72 0 0 1-.984-.155 3.904 3.904 0 0 1-.886-.337l-.14 1.04c.506.296 1.18.436 2.038.436.702 0 1.265-.155 1.686-.464.394-.309.59-.759.59-1.335 0-.436-.126-.787-.379-1.054s-.632-.492-1.166-.689c-.392-.153-.842-.277-1.209-.506a.465.465 0 0 1-.225-.421c0-.183.085-.324.24-.422.154-.098.364-.14.646-.14.506 0 1.026.126 1.574.379l.337-.956c-.562-.28-1.209-.421-1.94-.421zm-9.46.014c-.842 0-1.503.267-1.995.815-.492.548-.73 1.279-.73 2.192 0 .956.252 1.687.772 2.22.52.535 1.237.802 2.165.802.8 0 1.49-.183 2.08-.52l-.197-.984a3.66 3.66 0 0 1-1.813.492c-.492 0-.886-.155-1.167-.45-.28-.295-.435-.716-.45-1.25h3.852v-.591c0-.829-.225-1.49-.661-1.982-.45-.491-1.054-.744-1.855-.744zm-.013.983c.38 0 .674.127.885.38.211.253.323.618.323 1.082H7.67c.042-.492.182-.857.407-1.096.253-.239.548-.366.9-.366Z" fill="#1D365D" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M12,0C5.371,0,0,5.371,0,12s5.371,12,12,12s12-5.371,12-12C24.011,5.371,18.629,0,12,0z M12.7,22.611 C6.837,22.611,2.089,17.863,2.089,12S6.837,1.389,12.7,1.389S23.311,6.137,23.311,12S18.563,22.611,12.7,22.611z M7.045,3.413 c-4.747,2.735-6.366,8.795-3.632,13.542c2.735,4.737,8.806,6.366,13.542,3.632c4.747-2.735,6.366-8.806,3.632-13.542 C17.852,2.297,11.792,0.678,7.045,3.413z M16.868,19.034c-4.08,2.352-9.287,0.952-11.639-3.118 c-2.352-4.08-0.952-9.287,3.118-11.639c4.08-2.352,9.287-0.952,11.639,3.118C22.337,11.464,20.948,16.682,16.868,19.034z M5.229,8.084c-2.166,3.741-0.875,8.532,2.866,10.687c3.741,2.166,8.532,0.875,10.698-2.866s0.875-8.532-2.866-10.687 C12.175,3.063,7.384,4.343,5.229,8.084z M18.071,14.702c-1.827,3.161-5.863,4.244-9.025,2.417 c-3.161-1.827-4.244-5.863-2.418-9.025s5.863-4.244,9.025-2.418C18.815,7.493,19.898,11.541,18.071,14.702z M6.093,12 c0,3.271,2.647,5.918,5.918,5.918s5.918-2.647,5.918-5.918s-2.647-5.918-5.918-5.918C8.74,6.082,6.093,8.729,6.093,12z M16.704,11.3c0,2.593-2.1,4.693-4.693,4.693s-4.693-2.1-4.693-4.693s2.1-4.693,4.693-4.693C14.593,6.607,16.704,8.707,16.704,11.3 z" fill="#F29400" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M15.816 6.36v3.36h.228a4.847 4.847 0 0 1 4.764 4.764v3.036H24v-3.132c0-4.428-3.6-8.028-8.028-8.028H15.9Zm-9.06.012v.6h1.008V9.72h.696V6.972h1.008v-.6zm2.964 0V9.72h.696v-1.5h1.308v1.5h.696V6.372h-.696v1.272h-1.308V6.372Zm3 0V9.72h2.4v-.588h-1.752v-.876h1.548v-.588h-1.548V6.96h1.752v-.588ZM4.644 10.14c-.444 0-1.608.192-1.608 1.752s1.164 1.752 1.608 1.752c.444 0 1.608-.192 1.608-1.752S5.088 10.14 4.644 10.14zM0 10.236v3.336h.648v-2.376H.66l1.368 2.376h.696v-3.336h-.648v2.316h-.012L.732 10.236Zm6.54 0 .012 3.336h.684v-1.308h.72c.516 0 .54.18.54.636 0 .348.024.516.072.672h.768v-.084c-.144-.048-.144-.168-.144-.66 0-.624-.144-.732-.42-.852.324-.108.516-.42.516-.792 0-.288-.168-.948-1.056-.948zm2.916 0v.588h1.02v2.748h.696v-2.748h1.008v-.588zm2.976 0v3.336h.696v-1.5h1.296v1.5h.696v-3.336h-.696v1.26h-1.296v-1.26zm3.372 0v3.348h.156c1.08 0 1.944.876 1.944 1.944v1.992h2.388v-2.988c-.012-2.316-1.86-4.2-4.152-4.296h-.252Zm-11.16.504c.372 0 .9.228.9 1.164 0 .936-.528 1.164-.9 1.164s-.912-.228-.912-1.164c0-.936.54-1.164.912-1.164zm2.58.072h.864c.408 0 .492.252.492.432 0 .324-.18.456-.54.456h-.816Zm3.684 3.204c-.876 0-1.572.612-1.572 1.812 0 1.188.648 1.8 1.56 1.8.864 0 1.344-.516 1.488-1.26h-.72c-.084.42-.36.648-.756.648-.612 0-.852-.552-.852-1.164 0-.972.504-1.2.852-1.2.588 0 .696.384.756.588v-.012h.72c-.036-.504-.456-1.212-1.476-1.212zm-6.696.084v3.432h.708v-1.44h1.512v-.612H4.92v-.768h1.728V14.1Zm3.228 0-1.224 3.432h.756l.228-.708h1.284l.216.708h.78L8.268 14.1Zm5.232 0v3.432h2.46v-.612h-1.8v-.888h1.596v-.6h-1.596v-.72h1.8V14.1Zm3.144.012v3.432h1.596v-1.992c0-.792-.648-1.44-1.44-1.44zm-7.98.768h.012l.42 1.356h-.876Zm-4.92.912a.927.927 0 0 0-.936.924c0 .528.432.924.936.924a.917.917 0 0 0 .924-.924.917.917 0 0 0-.924-.924zm0 .144c.42 0 .756.336.756.78 0 .456-.324.792-.756.792s-.768-.348-.768-.792c0-.444.336-.78.768-.78zm-.36.24v1.092h.168V16.8h.18l.3.468h.18l-.312-.48c.168-.024.288-.108.288-.3 0-.216-.132-.312-.384-.312zm.168.132h.228c.12 0 .24.024.24.168 0 .168-.144.18-.288.18h-.18z" fill="#000000" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="#00C300" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M23.9371 8.5089c.1471-.7147.0367-1.4661-.3364-2.0967-.4203-.7094-1.1035-1.1876-1.9075-1.3506a2.9178 2.9178 0 0 0-.5623-.0578h-.0105c-1.3768 0-2.5329.988-2.8061 2.3385-.1629.7935-.4782 1.5607-.9196 2.2701a.263.263 0 0 1-.2363.1205.2627.2627 0 0 1-.2209-.1468l-2.8587-5.9906c-.3626-.762-1.0142-1.361-1.8235-1.5975-1.3873-.4099-2.8166.2838-3.4052 1.524L5.897 9.7333c-.0788.1629-.31.1576-.3784-.0053v-.0052a2.8597 2.8597 0 0 0-2.6642-1.7972c-.3784 0-.7515.0736-1.1088.2207-1.4714.6148-2.1283 2.349-1.5187 3.8203.557 1.3295 1.4714 2.5855 2.659 3.668.084.0788.1103.1997.063.3048l-.9563 2.0074c-.6727 1.4188-.1314 3.1477 1.2664 3.8571.4099.2049.846.31 1.298.31 1.1035 0 2.123-.6411 2.5959-1.6395l.825-1.7289a.254.254 0 0 1 .3048-.1366c1.0037.2732 2.0127.4204 3.0058.4204 1.1193 0 2.2229-.1682 3.2896-.4782a.2626.2626 0 0 1 .3101.1366l.8145 1.7131c.4834 1.0195 1.4924 1.7131 2.6169 1.7184.4572 0 .8986-.0999 1.3138-.3101 1.403-.7094 1.939-2.4435 1.2664-3.8676L19.875 15.787c-.0473-.1051-.0263-.226.0578-.3048 1.9864-1.8497 3.4525-4.2723 4.0043-6.9733ZM6.2121 20.0172a1.835 1.835 0 0 1-.6764.7622 1.8352 1.8352 0 0 1-.9788.2835c-.2733 0-.5518-.063-.8093-.1891-.9038-.4467-1.2454-1.5713-.8093-2.4804l.7935-1.6658c.0684-.1471.2575-.1997.3837-.1051.1681.1209.3415.2365.5202.3521.6989.4467 1.4293.825 2.1808 1.1351.1419.0578.205.2154.1419.352l-.7462 1.5555Zm5.0763-2.0442c-4.2092 0-8.6548-2.8534-10.1262-6.4951a1.8286 1.8286 0 0 1 1.009-2.3805c.2259-.0893.4571-.1366.683-.1366.7252 0 1.4084.431 1.6974 1.1456.9196 2.2806 4.0043 4.2092 6.7368 4.2092.4204 0 .8408-.042 1.256-.1156a.2643.2643 0 0 1 .2837.1419l1.3768 2.9007c.0683.1471-.0105.3205-.1629.3626-.8986.2365-1.8182.3678-2.7536.3678Zm-.599-4.9291.6358-1.3348c.0526-.1051.205-.1051.2575 0l.6201 1.3033c.042.0841-.0158.1891-.1051.2049-.268.0368-.536.0578-.7988.0578a5.0634 5.0634 0 0 1-.4887-.0263c-.1103-.0157-.1629-.1208-.1208-.2049Zm8.4604 7.8246a1.831 1.831 0 0 1-2.0329-.2788 1.8292 1.8292 0 0 1-.4316-.5778l-4.987-10.4836c-.0998-.2102-.3994-.2102-.4939 0l-1.545 3.2529a.2623.2623 0 0 1-.3205.1366c-1.051-.3626-2.0495-.9774-2.7904-1.7184a.2552.2552 0 0 1-.0473-.2943l3.3421-7.031c.1156-.247.2943-.4677.5203-.6201 1.051-.6884 2.2806-.2575 2.7378.7041l6.8577 14.4248c.4309.9144.0946 2.0389-.8093 2.4856Zm-1.4451-9.6481a.258.258 0 0 1 .0315-.2732c.783-1.0037 1.3558-2.1756 1.6028-3.421.1734-.867.9354-1.4714 1.7919-1.4714.1472 0 .2943.0158.4467.0526.9722.2417 1.5344 1.2507 1.3295 2.2333-.4835 2.3017-1.6816 4.3879-3.3159 6.0222-.1313.1314-.3468.0946-.4256-.0683l-1.4609-3.0742Z" fill="#FCBFBD" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m7.623 6.719-4.752.959a.65.65 0 0 0-.44.324L.083 12.248a.65.65 0 0 0 .045.701l2.986 4.076a.66.66 0 0 0 .657.256l4.736-.957a.65.65 0 0 0 .363-.215h11.694a.542.542 0 0 0 0-1.084h-2.95a.53.53 0 0 1-.394-.152.545.545 0 0 1 0-.78.55.55 0 0 1 .394-.152h5.875a.53.53 0 0 0 .512-.33v-.422a.53.53 0 0 0-.512-.33h-9.79a.547.547 0 0 1-.544-.543.54.54 0 0 1 .543-.54h5.85a.544.544 0 0 0 .525-.542.54.54 0 0 0-.525-.543H15.68a.54.54 0 1 1 0-1.082h5.86a.546.546 0 0 0 .524-.543.54.54 0 0 0-.525-.54H9.416L8.279 6.972a.65.65 0 0 0-.656-.254M7.576 7.77a.527.527 0 0 1 .207.715l-1.451 2.631a.88.88 0 0 0 .059.945L8.1 14.39a.528.528 0 0 1-.854.623l-1.709-2.326a.88.88 0 0 0-.88-.344l-2.897.586a.523.523 0 0 1-.621-.412.525.525 0 0 1 .41-.621l3.14-.635a.9.9 0 0 0 .596-.438l1.576-2.845a.524.524 0 0 1 .715-.206m13.608 2.92a.54.54 0 1 0-.001 1.082.54.54 0 0 0 0-1.082" fill="#1BBAE0" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M19.062 11.713c3.305-2.139 7.748-2.208 2.564 1.248l.082-.11c1.467-2.016-1.522-1.563-2.578-1.166l-.068.028zM6.967 13.236h1.399v.549H6.747c-.686 0-.987-.206-.987-.754v-.123c0-.466.274-.768.96-.768h1.646v.549H6.967a.248.248 0 0 0-.247.247v.069a.246.246 0 0 0 .247.231zM9.6 11.864v1.371h.823v.549h-1.92v-1.92H9.6zm-5.198.247c.191-.154.427-.241.672-.247h.549v1.92H4.525v-.96l-1.056.96H2.468v-.96l-1.221.96H0l2.18-1.646c.206-.151.343-.274.699-.274h.686v.96l.837-.713zm9.312.206a.316.316 0 0 1 .343-.316h1.303v.549h-.686v1.234h-.96v-1.467zm6.431-.316c.823 0 1.111.178 1.111.782v1.001h-.96v-.686a.411.411 0 0 0-.411-.411h-.411v1.097h-.96v-1.783h1.631zm-7.487 0c.631 0 .919.261.919.699v.411c0 .507-.288.672-.987.672h-1.083c-.398 0-.686-.041-.837-.178a.495.495 0 0 1-.11-.315v-.069c0-.274.165-.535.686-.535h1.234c0-.123.014-.137-.137-.137h-1.646V12h1.961zm-.179 1.166v-.069h-.754a.07.07 0 0 0 0 .138h.686a.068.068 0 0 0 .068-.069zm5.02-1.166c.727 0 .878.219.878.521v.069c0 .329-.261.507-.686.507h-1.234c0 .123.123.137.274.137h1.508v.549H16.36c-.59 0-.864-.247-.864-.699v-.315c0-.521.288-.768.946-.768h1.057zm-.151.686a.07.07 0 0 0 0-.138h-.823a.07.07 0 0 0-.069.069v.069h.892z" fill="#FF0000" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 .78C18.196.78 23.219 5.803 23.219 12c0 6.196-5.022 11.219-11.219 11.219C5.803 23.219.781 18.196.781 12S5.804.78 12 .78zm-.678.63c-.33.014-.66.042-.992.078l-.107 2.944a9.95 9.95 0 0 1 .71-.094l.07-1.988-.013-.137.043.13.664 1.489h.606l.664-1.488.04-.131-.01.137.07 1.988c.232.022.473.054.71.094l-.109-2.944a14.746 14.746 0 0 0-.992-.078l-.653 1.625-.023.12-.023-.12-.655-1.625zm6.696 1.824l-1.543 2.428c.195.15.452.371.617.522l1.453-.754.092-.069-.069.094-.752 1.453c.163.175.398.458.53.63l2.43-1.544a16.135 16.135 0 0 0-.46-.568L18.777 6.44l-.105.092.078-.115.68-1.356-.48-.48-1.356.68-.115.078.091-.106 1.018-1.539c-.18-.152-.351-.291-.57-.46zM5.5 3.785c-.36.037-.638.283-1.393 1.125a18.97 18.97 0 0 0-.757.914l2.074 1.967c.687-.76.966-1.042 1.508-1.613.383-.405.6-.87.216-1.317-.208-.242-.558-.295-.85-.175l-.028.01.01-.026a.7.7 0 0 0-.243-.734.724.724 0 0 0-.537-.15zm.006.615c.136-.037.277.06.308.2.032.14-.056.272-.154.382-.22.25-1.031 1.098-1.031 1.098l-.402-.383c.417-.51.861-.974 1.062-1.158a.55.55 0 0 1 .217-.139zM12 4.883a7.114 7.114 0 0 0-7.08 6.388v.002a7.122 7.122 0 0 0 8.516 7.697 7.112 7.112 0 0 0 5.68-6.97A7.122 7.122 0 0 0 12 4.885v-.002zm-5.537.242c.047 0 .096.013.14.043.088.059.128.16.106.26-.026.119-.125.231-.205.318l-1.045 1.12-.42-.4s.787-.832 1.045-1.099c.102-.106.168-.17.238-.205a.331.331 0 0 1 .14-.037zM12 5.818A6.175 6.175 0 0 1 18.182 12H12v6.182A6.175 6.175 0 0 1 5.818 12H12V5.818Z" fill="#0066B1" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M19.848,7.848c-0.992,0-1.902,0.348-2.616,0.928c-0.714-0.58-1.624-0.928-2.616-0.928 c-0.992,0-1.902,0.348-2.616,0.928c-0.714-0.58-1.624-0.928-2.616-0.928c-0.992,0-1.902,0.348-2.616,0.928 c-0.714-0.58-1.624-0.928-2.616-0.928C1.859,7.848,0,9.707,0,12s1.859,4.152,4.152,4.152c0.992,0,1.902-0.348,2.616-0.928 c0.714,0.58,1.624,0.928,2.616,0.928c0.992,0,1.902-0.348,2.616-0.928c0.714,0.58,1.624,0.928,2.616,0.928 c0.992,0,1.902-0.348,2.616-0.928c0.714,0.58,1.624,0.928,2.616,0.928C22.141,16.152,24,14.293,24,12S22.141,7.848,19.848,7.848z M17.232,13.866c-0.376-0.526-0.598-1.17-0.598-1.866c0-0.696,0.222-1.34,0.598-1.866c0.376,0.526,0.598,1.17,0.598,1.866 C17.83,12.696,17.608,13.34,17.232,13.866z M12,13.866c-0.376-0.526-0.598-1.17-0.598-1.866c0-0.696,0.222-1.34,0.598-1.866 c0.376,0.526,0.598,1.17,0.598,1.866C12.598,12.696,12.376,13.34,12,13.866z M6.768,13.866C6.392,13.34,6.17,12.696,6.17,12 c0-0.696,0.222-1.34,0.598-1.866C7.144,10.66,7.366,11.304,7.366,12C7.366,12.696,7.144,13.34,6.768,13.866z M0.938,12 c0-1.775,1.439-3.214,3.214-3.214c0.736,0,1.414,0.248,1.956,0.665C5.56,10.154,5.232,11.039,5.232,12 c0,0.961,0.328,1.846,0.876,2.549c-0.542,0.416-1.22,0.665-1.956,0.665C2.377,15.214,0.938,13.775,0.938,12z M7.428,14.549 C7.976,13.846,8.304,12.961,8.304,12c0-0.961-0.328-1.846-0.876-2.549c0.542-0.416,1.22-0.665,1.956-0.665 c0.736,0,1.414,0.248,1.956,0.665c-0.549,0.704-0.876,1.588-0.876,2.549c0,0.961,0.328,1.846,0.876,2.549 c-0.542,0.416-1.22,0.665-1.956,0.665C8.648,15.214,7.97,14.966,7.428,14.549z M12.66,14.549c0.549-0.704,0.876-1.588,0.876-2.549 c0-0.961-0.328-1.846-0.876-2.55c0.542-0.416,1.22-0.665,1.956-0.665s1.414,0.248,1.956,0.665 c-0.549,0.704-0.876,1.588-0.876,2.549c0,0.961,0.328,1.846,0.876,2.549c-0.542,0.416-1.22,0.665-1.956,0.665 C13.88,15.214,13.202,14.966,12.66,14.549z M19.848,15.214c-0.736,0-1.414-0.248-1.956-0.665c0.548-0.704,0.876-1.588,0.876-2.549 c0-0.961-0.328-1.846-0.876-2.549c0.542-0.416,1.22-0.665,1.956-0.665c1.775,0,3.214,1.439,3.214,3.214 S21.623,15.214,19.848,15.214z" fill="#BB0A30" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M20.576 14.955l-.01.028c-1.247 3.643-4.685 6.086-8.561 6.086-3.876 0-7.32-2.448-8.562-6.09l-.01-.029H.71v.329l1.133.133c.7.08.847.39 1.038.78l.048.096c1.638 3.495 5.204 5.752 9.08 5.752 3.877 0 7.443-2.257 9.081-5.747l.048-.095c.19-.39.338-.7 1.038-.781l1.134-.134v-.328zM3.443 9.012c1.247-3.643 4.686-6.09 8.562-6.09 3.876 0 7.319 2.447 8.562 6.09l.01.028h2.728v-.328l-1.134-.133c-.7-.081-.847-.39-1.038-.781l-.047-.096C19.448 4.217 15.88 1.96 12.005 1.96c-3.881 0-7.443 2.257-9.081 5.752l-.048.095c-.19.39-.338.7-1.038.781l-1.133.133v.329h2.724zm13.862 1.586l-1.743 2.795h.752l.31-.5h2.033l.31.5h.747l-1.743-2.795zm1.033 1.766h-1.395l.7-1.124zm2.81-1.066l2.071 2.095H24v-2.795h-.614v2.085l-2.062-2.085h-.795v2.795h.619zM0 13.393h.619v-2.095l2.076 2.095h.781v-2.795h-.619v2.085L.795 10.598H0zm4.843-2.795h.619v2.795h-.62zm4.486 2.204c-.02.005-.096.005-.124.005H6.743v.572h2.5c.019 0 .167 0 .195-.005.51-.048.743-.472.743-.843 0-.381-.243-.79-.705-.833-.09-.01-.166-.01-.2-.01H7.643a.83.83 0 0 1-.181-.014c-.129-.034-.176-.148-.176-.243 0-.086.047-.2.18-.238a.68.68 0 0 1 .172-.014h2.357v-.562H7.6c-.1 0-.176.004-.238.014a.792.792 0 0 0-.695.805c0 .343.214.743.685.81.086.009.205.009.258.009H9.2c.029 0 .1 0 .114.005.181.023.243.157.243.276a.262.262 0 0 1-.228.266zm4.657 0c-.02.005-.096.005-.129.005H11.4v.572h2.5c.019 0 .167 0 .195-.005.51-.048.743-.472.743-.843 0-.381-.243-.79-.705-.833-.09-.01-.166-.01-.2-.01H12.3a.83.83 0 0 1-.181-.014c-.129-.034-.176-.148-.176-.243 0-.086.047-.2.18-.238a.68.68 0 0 1 .172-.014h2.357v-.562h-2.395c-.1 0-.176.004-.238.014a.792.792 0 0 0-.695.805c0 .343.214.743.686.81.085.009.204.009.257.009h1.59c.029 0 .1 0 .114.005.181.023.243.157.243.276a.267.267 0 0 1-.228.266Z" fill="#C3002F" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M12 3.848C5.223 3.848 0 7.298 0 12c0 4.702 5.224 8.152 12 8.152S24 16.702 24 12c0-4.702-5.223-8.152-12-8.152zm7.334 3.839c0 1.08-1.725 1.913-4.488 2.246-.26-2.58-1.005-4.279-1.963-4.913 2.948.184 6.45 1.227 6.45 2.667zM12 16.401c-.96 0-1.746-1.5-1.808-4.389.577.047 1.18.072 1.808.072.628 0 1.23-.025 1.807-.072-.061 2.89-.847 4.389-1.807 4.389zm0-6.308c-.59 0-1.155-.019-1.69-.054.261-1.728.92-3.15 1.69-3.15.77 0 1.428 1.422 1.689 3.15-.535.034-1.099.054-1.689.054zm-.882-5.075c-.956.633-1.706 2.333-1.964 4.915C6.391 9.6 4.665 8.767 4.665 7.687c0-1.44 3.504-2.49 6.453-2.669zM2.037 11.68a5.265 5.265 0 011.048-3.164c.27 1.547 2.522 2.881 5.972 3.37V12c0 3.772.879 6.203 2.087 6.97-5.107-.321-9.107-3.48-9.107-7.29zm10.823 7.29c1.207-.767 2.087-3.198 2.087-6.97v-.115c3.447-.488 5.704-1.826 5.972-3.37a5.26 5.26 0 011.049 3.165c-.004 3.81-4.008 6.969-9.109 7.29z" fill="#EB0A1E" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m12.549 0-.457.555v11.191h11.19l.554-.457-9.4-1.89zM.719 12.26l-.555.457L9.563 14.6l1.886 9.4.457-.555V12.26Z" fill="#000000" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M4.22 10.303l-.767 1.043h4.18c.21 0 .208.078.105.218-.105.142-.28.39-.386.534-.054.073-.154.207.171.207h1.71l.505-.69c.314-.426.028-1.312-1.095-1.312H4.22zm7.204 0l-1.475 2.002h5.39l1.473-2.002H14.61l-.843 1.146h-.985l.846-1.146h-2.203zm6.105 0l-1.474 2.002h2.334l1.472-2.002H17.53zm-12.845 1.3l-1.54 2.094h3.754c1.24 0 1.932-.844 2.145-1.136h-2.56c-.326 0-.226-.133-.172-.207.107-.143.283-.388.388-.53.104-.14.107-.22-.105-.22h-1.91zM0 12.562v.242h3.398l.176-.242H0zm9.762 0l-.836 1.136h2.203l.836-1.136H9.762zm3.185 0l-.836 1.136h2.203l.836-1.136h-2.203zm2.918 0s-.159.22-.238.326c-.276.374-.033.81.87.81h3.538l.834-1.136h-5.004zm5.408 0l-.177.242H24v-.242h-2.727zM0 13.01v.24h3.068l.178-.24H0zm20.943 0l-.175.24H24v-.24h-3.057zM0 13.457v.24h2.74l.176-.24H0zm20.615 0l-.177.24H24v-.24h-3.385z" fill="#FFCC00" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M11.668 14.544l-.028-5.226c.138-.055.387-.111.608-.111.995 0 1.41.774 1.41 2.682 0 1.853-.47 2.765-1.438 2.765-.22 0-.441-.055-.552-.11zM3.124 7.438c4.203-3.843 9.29-4.866 14.018-4.866 1.3 0 2.544.083 3.76.194h-.028v11.253c0 2.184-.774 3.926-2.295 5.171-1.355 1.134-5.447 2.959-6.581 3.456-1.161-.525-5.253-2.378-6.581-3.456-1.493-1.244-2.295-3.014-2.295-5.171V7.438zm12.664 2.599c.028.912.276 1.576 1.687 2.406.747.442 1.051.747 1.051 1.272 0 .581-.387.94-1.023.94-.553 0-1.189-.304-1.631-.691v1.576c.553.304 1.217.525 1.88.525 1.687 0 2.433-1.189 2.461-2.267.028-.995-.249-1.742-1.659-2.571-.608-.387-1.134-.636-1.106-1.244 0-.581.525-.802.995-.802.581 0 1.161.332 1.521.691V8.378c-.304-.221-.94-.581-1.88-.553-1.135.028-2.296.829-2.296 2.212zm-5.834 9.484h1.714l-.028-3.594c.166.028.415.083.774.083 1.908 0 2.986-1.687 2.986-4.175 0-2.461-1.106-4.009-3.152-4.009-.94 0-1.687.221-2.295.608v11.087zm-5.945-6.166c0 1.797.829 2.71 2.516 2.71 1.051 0 1.908-.249 2.571-.691V7.991H7.41v6.387c-.194.138-.47.221-.802.221-.774 0-.885-.719-.885-1.189V7.991H4.009v5.364zM22.12 2.295v11.723c0 2.516-.94 4.645-2.765 6.111-1.549 1.3-6.332 3.429-7.355 3.871-1.023-.442-5.806-2.571-7.355-3.843-1.797-1.465-2.765-3.594-2.765-6.111V2.295C4.756.747 8.074 0 12 0s7.244.747 10.12 2.295zm-.304.221c-2.71-1.465-6-2.184-9.788-2.184s-7.079.746-9.788 2.184v11.502c0 2.433.912 4.452 2.627 5.862 1.576 1.3 6.581 3.484 7.161 3.76.581-.249 5.585-2.433 7.161-3.733 1.714-1.41 2.627-3.429 2.627-5.862V2.516zm-2.433 20.295c0 .47-.387.829-.829.829a.831.831 0 0 1-.829-.829c0-.47.387-.829.829-.829.441 0 .801.359.829.829zm-.166 0a.679.679 0 0 0-.664-.691c-.359 0-.664.332-.664.691 0 .359.304.664.664.664a.673.673 0 0 0 .664-.664zm-.553.055c.028.055.304.442.304.442h-.221s-.276-.387-.276-.415h-.028v.415h-.194v-.995l.304-.028c.249 0 .332.166.332.304s-.083.25-.221.277zm.027-.276c0-.055 0-.138-.166-.138h-.083v.304h.028c.194 0 .221-.083.221-.166z" fill="#150400" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m7.623 6.719-4.752.959a.65.65 0 0 0-.44.324L.083 12.248a.65.65 0 0 0 .045.701l2.986 4.076a.66.66 0 0 0 .657.256l4.736-.957a.65.65 0 0 0 .363-.215h11.694a.542.542 0 0 0 0-1.084h-2.95a.53.53 0 0 1-.394-.152.545.545 0 0 1 0-.78.55.55 0 0 1 .394-.152h5.875a.53.53 0 0 0 .512-.33v-.422a.53.53 0 0 0-.512-.33h-9.79a.547.547 0 0 1-.544-.543.54.54 0 0 1 .543-.54h5.85a.544.544 0 0 0 .525-.542.54.54 0 0 0-.525-.543H15.68a.54.54 0 1 1 0-1.082h5.86a.546.546 0 0 0 .524-.543.54.54 0 0 0-.525-.54H9.416L8.279 6.972a.65.65 0 0 0-.656-.254M7.576 7.77a.527.527 0 0 1 .207.715l-1.451 2.631a.88.88 0 0 0 .059.945L8.1 14.39a.528.528 0 0 1-.854.623l-1.709-2.326a.88.88 0 0 0-.88-.344l-2.897.586a.523.523 0 0 1-.621-.412.525.525 0 0 1 .41-.621l3.14-.635a.9.9 0 0 0 .596-.438l1.576-2.845a.524.524 0 0 1 .715-.206m13.608 2.92a.54.54 0 1 0-.001 1.082.54.54 0 0 0 0-1.082" fill="#1BBAE0" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M16.153 12.826c-.63-.183-1.03.15-1.378.846-.58 1.13-1.643 1.644-2.888 1.594-1.245-.05-2.257-.63-2.788-1.776-.233-.498-.498-.664-1.046-.68-.93-.017-1.643.016-2.174 1.062-.631 1.261-2.258 1.693-3.619 1.261a3.234 3.234 0 0 1-2.257-3.22 3.198 3.198 0 0 1 2.29-3.02 3.276 3.276 0 0 1 3.702 1.327c.216.315.216.863.597.93.648.1 1.328.033 1.992.033.299 0 .316-.266.399-.465.58-1.295 1.61-1.959 2.987-1.975 1.361-.017 2.39.647 2.955 1.892.215.465.48.598.946.548.166-.017.332.016.498 0 .464-.083 1.062.282 1.344-.448.282-.73-.382-.913-.68-1.245-.847-.946-1.81-1.793-2.673-2.706-.415-.465-.763-.614-1.41-.415-1.876.614-3.619-.431-4.15-2.357-.448-1.676.714-3.535 2.44-3.917a3.293 3.293 0 0 1 3.95 2.457c.017.05.017.083.033.133.117.564.117 1.145-.132 1.626-.283.531-.133.83.249 1.195a152.61 152.61 0 0 1 3.286 3.27c.299.299.498.349.913.2 1.51-.565 2.97-.1 3.884 1.161a3.266 3.266 0 0 1-.067 3.801c-.896 1.195-2.357 1.643-3.834 1.079-.381-.15-.58-.1-.846.182a163.619 163.619 0 0 1-3.403 3.386c-.299.3-.415.532-.232.98a3.198 3.198 0 0 1-1.278 3.917A3.298 3.298 0 0 1 9.646 23c-1.062-1.062-1.228-2.688-.415-4.033a3.196 3.196 0 0 1 3.835-1.294c.498.182.78.083 1.145-.283 1.012-1.045 2.058-2.058 3.087-3.103.266-.266.68-.449.432-1.03-.233-.547-.631-.414-1.03-.431zM11.97 4.942c.913.016 1.643-.714 1.66-1.627v-.05a1.646 1.646 0 0 0-1.76-1.56 1.63 1.63 0 0 0-1.543 1.527 1.638 1.638 0 0 0 1.577 1.71zm.033 5.41a1.658 1.658 0 0 0-1.676 1.61v.084a1.73 1.73 0 0 0 1.643 1.66c.847.016 1.643-.78 1.677-1.627a1.648 1.648 0 0 0-1.577-1.71c-.017-.016-.05-.016-.067-.016zm7.088 1.694c.016.896.747 1.61 1.626 1.643a1.723 1.723 0 0 0 1.66-1.726 1.666 1.666 0 0 0-1.66-1.61 1.623 1.623 0 0 0-1.643 1.577c.017.05.017.083.017.116zM3.24 10.353a1.692 1.692 0 0 0-1.66 1.626c-.017.847.863 1.727 1.693 1.71a1.687 1.687 0 0 0 1.626-1.743 1.615 1.615 0 0 0-1.643-1.593Zm8.68 12c.98.033 1.71-.647 1.727-1.593a1.646 1.646 0 0 0-1.51-1.793 1.646 1.646 0 0 0-1.793 1.51v.233a1.609 1.609 0 0 0 1.543 1.66c0-.017.017-.017.033-.017z" fill="#028CF0" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M12 0L1.75 6v12L12 24l10.25-6V6zm-1.775 18l1.08-4.657-2.428-2.397L13.79 6l-1.082 4.665 2.414 2.384z" fill="#792EE5" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M13.0569.404c-1.9042.0042-3.8052.4582-5.4881 1.3223.1477.2404.2528.506.3086.7794.283 1.383-.5717 2.6728-1.8945 4.3458l-.6855.8594a1.165 1.165 0 0 1-.912.4356 1.1517 1.1517 0 0 1-.627-.1856c-.3196-.2084-.538-.3299-1.2343-.7832-2.042 4.897-.5548 11.2114 3.8826 14.2446 3.5434 2.5674 8.7443 2.8326 12.6499.9434.7786-.3952 1.5287-.838 2.0663-1.4004a2.7886 2.7886 0 0 0 .9238-2.0724c0-1.3257-.9333-2.4682-2.2323-2.7325-.5056-.1094-1.2926-.0854-1.9863.3399-.2262.1083-.4475.2277-.6679.3437-.6341.3344-.7472.3702-1.4374.588-1.9956.6344-6.0325.556-7.0662-1.6388-.1441-.6302.424-.7857.9258-.7852 2.992-.0074 5.9841-.0002 8.9762-.0059.781-.0032 1.5788-.0068 2.3339-.2246 2.302-.5946 3.43-2.7624 3.0272-5.2463-.6121-3.973-3.577-7.5172-7.4606-8.633C15.3562.563 14.2058.4015 13.0569.404zM5.4576.9646c-.7885.0002-1.5143.4442-1.9023 1.0723-.3962-.325-.9281-.5137-1.4472-.5137s-1.0492.18-1.4824.588C.1608 2.5486-.0652 3.1988.0164 3.826c.0856.6424.431 1.1825.9882 1.711.6832.6479 1.6854 1.2787 2.9257 2.0567l.0488.0293a.7427.7427 0 0 0 .4062.1211.7655.7655 0 0 0 .5938-.2832c.011-.013.0208-.0274.0312-.041 1.6662-2.07 2.759-3.4236 2.4706-4.8342-.126-.6165-.5471-1.1606-1.1327-1.4238-.2125-.0973-.5208-.1973-.8906-.1973Zm-3.6757 1.543c.3428 0 .6211.2777.6211.6192 0 .3415-.2783.6172-.621.6172-.3428 0-.6211-.2757-.6211-.6172 0-.3415.2783-.6192.621-.6192zm11.4449 3.6622c1.6882.0106 3.4584.8528 4.1756 2.4923.0547.1383.0885.2821.0703.422-.0512.3676-.387.498-.7168.498-2.0929.0125-5.2392.005-7.4137.002-.288-.0092-.3718-.0665-.3906-.0665-.2202-.0814-.3686-.2946-.3574-.5293.0057-.2033.0986-.4013.1933-.5801.8201-1.5407 2.634-2.3014 4.4393-2.2384Z" fill="#00BC45" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M4.426 0v24h15.148V0Zm3.357 10.385c.474 0 .858.381.858.852 0 .47-.384.852-.858.852a.855.855 0 0 1-.858-.852c0-.47.384-.852.858-.852m1.044.212h7.928c.218 0 .39.173.397.384v.512a.395.395 0 0 1-.391.384H8.827c.006-.013.012-.02.019-.032a1.22 1.22 0 0 0-.02-1.248m-1.121 2.83c.474 0 .858.381.858.852 0 .47-.384.852-.858.852a.855.855 0 0 1-.858-.852c0-.47.384-.852.858-.852m1.037.198h8.012c.218 0 .39.173.39.378v.513a.395.395 0 0 1-.39.384h-8q.012-.001.013-.013c.16-.275.206-.608.122-.922a1.1 1.1 0 0 0-.147-.34M7.706 16.47c.474 0 .858.382.858.852s-.384.852-.858.852a.855.855 0 0 1-.858-.852c0-.47.384-.852.858-.852m1.037.212h8.012c.218 0 .39.172.39.384v.512a.395.395 0 0 1-.39.384H8.743l.02-.032a1.22 1.22 0 0 0-.02-1.248m-1.037 2.83c.474 0 .858.382.858.852s-.384.852-.858.852a.855.855 0 0 1-.858-.852c0-.47.384-.852.858-.852m1.037.212h8.012a.38.38 0 0 1 .39.384v.513a.395.395 0 0 1-.39.384H8.743l.02-.032a1.22 1.22 0 0 0-.02-1.249" fill="#E95420" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M3.069 9.7h3.42L6.3 6.932H0v10.136h3.069V13.8h2.789v-2.778H3.069ZM24 6.932h-3.291L19.48 9.1l-1.231-2.168h-3.292l2.871 5.076-2.871 5.06h3.308l1.215-2.142 1.213 2.142H24l-2.871-5.06Zm-12.592 0A5.067 5.067 0 1 0 16.475 12a5.067 5.067 0 0 0-5.067-5.065Zm.888 7.146a.867.867 0 0 1-.873.847.847.847 0 0 1-.837-.858V9.919a.882.882 0 0 1 .837-.9.913.913 0 0 1 .873.9Z" fill="#000000" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M0 15.735h3.354l.843-2.06 1.55 2.06h7.225l2.234-2.081-.372 2.081h2.83L20 13.675l-.32 2.06h3.052L24 9.99h-3.068l-2.486 2.191.48-2.19h-2.942l-3.209 3.216 1.342-3.938h4.907l.225-1.003H6.381l-.378 1.003h4.732l-1.994 5.054-1.572-2.066L9.886 9.99H7.612l-2.787 2.23.938-2.23H2.44L0 15.735Z" fill="#FF6600" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M23.14 3.895c-.326-1.307-1.96-2.001-3.103-2.45C17.302.383 13.382-.19 10.401.056c-2.94.245-6.738 1.062-8.575 2.45-.531.409-.899.776-1.021 1.715C.56 6.222 1.499 9.203 2.07 11c.163-.082.367-.327.857-.572.98-.49 2.164-.817 3.267-1.02 3.96-.817 9.473-.9 13.597-.9.49 0 .98 0 1.43.042.449 0 .98.04 1.429.04l.245-1.102c.204-1.02.49-2.573.245-3.593zM5.95 5.528c-.531 1.674-2.083 1.43-3.634 1.43L3.05 3.69c.326-.04.898 0 1.265 0 .45 0 .776 0 1.144.123.612.245.735.98.49 1.715zm1.837 1.51c-.898.042-1.715-.162-1.551-1.142.04-.245.449-2.124.49-2.206h1.306c-.04.368-.204.94-.286 1.307-.04.245-.081.408-.122.654-.04.204-.123.571.204.49.204-.041.245-.286.286-.49.122-.572.327-1.47.408-1.96H9.83c-.04.326-.163.816-.245 1.143-.204 1.062-.204 2.123-1.797 2.205zm3.308 0c-1.103 0-1.511-.693-1.266-1.755.367-1.756 2.205-1.92 2.94-1.51.408.244.49.53.408 1.102h-1.225c0-.164.041-.327-.081-.409-.123-.081-.327 0-.409.082-.204.204-.53 1.43-.286 1.593.286.204.49-.205.531-.409h1.225c-.081.817-.816 1.348-1.837 1.307zm4.165-.08v-.49h-.94l-.244.53H12.81c.04-.122.735-1.43.857-1.633l.899-1.634h1.715l.367 3.267c-.286-.04-1.225 0-1.388-.04zm3.757-2.41c-.082.163-.245.98-.286 1.184-.082.327-.164.858-.286 1.184h-1.307c-.04-.204.49-2.123.49-2.409h-.816l.204-.898h2.98c0 .122-.163.816-.204.898l-.775.041zm1.837 2.41h-1.347L20.2 3.69h1.306l-.653 3.267zm-2.327 2.94c-1.266.122-2.45.244-3.635.408-2.245.326-4.573.898-6.451 1.674-1.593.694-3.88 2.082-3.88 4.165 0 .326.041.326.286.694.368.53.858 1.266 1.225 1.756 1.184 1.51 3.308 4.124 4.982 5.063.49.286.898.49 1.51.204.45-.204.9-.53 1.226-.776 2.164-1.755 4.982-5.349 6.288-7.758.899-1.674 1.715-3.716 2.287-5.676-.368-.04-3.47.204-3.838.245zM15.219 5.61V4.425c-.082.082-.49 1.021-.53 1.185zM4.194 4.425l-.408 1.797c.571.041.735-.327.816-.776.123-.49.286-1.061-.408-1.02z" fill="#CC0000" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" fill="#635BFF" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M17.369 19.995C13.51 22.39 12 24 12 24L.105 15.705s5.003-3.715 9.186-.87l5.61 3.882.683-.453L.106 7.321s2.226-.65 6.524-3.315C10.49 1.609 12 0 12 0l11.895 8.296s-5.003 3.715-9.187.87L9.1 5.281l-.683.454L23.893 16.68s-2.224.649-6.524 3.315Z" fill="#E30613" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M23.902 6.87c-.33-3.218-2.47-3.895-4.354-4.204-.946-.16-2.63-.3-3.716-.34-.946-.06-3.168-.09-3.835-.09-.657 0-2.89.03-3.835.09-1.076.04-2.77.18-3.716.34C2.563 2.985.42 3.66.092 6.87c-.08.877-.1 2.023-.09 3.248.03 2.031.2 3.406.3 4.363.07.657.338 2.62.687 3.636.478 1.395.916 1.803 1.424 2.222.937.757 2.471.996 2.79 1.056 1.733.31 5.24.368 6.784.368 1.544 0 5.05-.05 6.784-.368.329-.06 1.863-.29 2.79-1.056.508-.419.946-.827 1.424-2.222.35-1.016.628-2.979.698-3.636.1-.957.279-2.332.299-4.363.04-1.225.01-2.371-.08-3.248m-1.176 5.4c-.19 2.57-.418 4.104-.747 5.22-.29.976-.637 1.623-1.165 2.092-.867.787-2.063.956-2.76 1.056-1.514.23-4.055.3-6.057.3-2.002 0-4.543-.08-6.057-.3-.697-.1-1.893-.269-2.76-1.056-.518-.469-.876-1.126-1.155-2.093-.329-1.105-.558-2.65-.747-5.22-.11-1.543-.09-4.054.08-5.4.258-2.011 1.255-3.018 3.387-3.396.996-.18 2.34-.31 3.606-.37 1.016-.07 2.7-.1 3.636-.09.936-.01 2.62.03 3.636.09 1.275.06 2.61.19 3.606.37 2.142.378 3.139 1.395 3.388 3.397.199 1.345.229 3.856.11 5.4m-5.202-8.39c-.548 2.462-.767 3.588-1.216 5.37-.428 1.715-.767 3.298-1.335 4.065-.587.777-1.365.947-1.893 1.006-.279.03-.478.04-1.066.05-.596 0-.796-.02-1.075-.05-.528-.06-1.315-.229-1.892-1.006-.578-.767-.907-2.35-1.335-4.064-.47-1.773-.678-2.91-1.236-5.37 0 0-.548.02-.797.04-.329.02-.588.05-.867.09.343 5.372.692 11.079 1.126 16.13a21.983 21.983 0 002.39.169c.33-1.266.748-3.02 1.207-3.767.378-.608.966-.677 1.295-.717.518-.07.956-.08 1.165-.08.2-.01.637 0 1.165.08.33.05.917.11 1.295.717.47.747.877 2.5 1.206 3.766 0 0 .358-.01 1.165-.05.41-.018.82-.058 1.226-.12.458-5.39.785-10.728 1.126-16.128-.28-.04-.538-.07-.867-.09-.23-.02-.787-.04-.787-.04z" fill="#E40521" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M17.463 11.99l-4.097-7.692-.924 1.707 3.213 5.985-5.483 10.283L4.69 11.99 11.096 0H9.27L2.882 11.99 9.269 24h1.807zm3.655 0L14.711 0h-1.807L6.517 11.99l4.117 7.712.904-1.707-3.193-6.005 5.463-10.263L19.29 11.99 12.904 24h1.807Z" fill="#FFCC33" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M16.6396 2.2779A27.1802 27.1802 0 0 0 11.997 0a27.1795 27.1795 0 0 0-4.6366 2.2779C4.8482 3.8075 3.357 5.2707 3.357 5.2707a32.0542 32.0542 0 0 0 1.0293 7.2991C5.214 15.7228 7.3082 20.6134 11.997 24c4.6887-3.3866 6.7837-8.2771 7.6105-11.4302a32.058 32.058 0 0 0 1.0354-7.2991s-1.4911-1.4632-4.0033-2.9928zm2.7246 10.2285a21.9594 21.9594 0 0 1-2.33 5.5616 19.0142 19.0142 0 0 1-5.0372 5.6214 18.9938 18.9938 0 0 1-5.0372-5.6214 21.9617 21.9617 0 0 1-2.3292-5.5616 32.5174 32.5174 0 0 1-1.0271-7.1299 24.9492 24.9492 0 0 1 3.883-2.8848A27.3813 27.3813 0 0 1 11.997.2653a27.3813 27.3813 0 0 1 4.5104 2.225 24.9477 24.9477 0 0 1 3.8823 2.8862 32.6127 32.6127 0 0 1-1.0255 7.1299zm-2.9226-6.3636c-2.1796-.8207-3.682-1.2394-4.4469-1.2394-.764 0-2.2658.424-4.4461 1.2394-1.2546.4731-3.0579 1.241-3.0579 1.241a38.8137 38.8137 0 0 0 .8934 4.9246c.7497 2.8567 2.5068 7.1873 6.6106 10.4053 4.1068-3.2173 5.8617-7.5478 6.6107-10.4053a38.822 38.822 0 0 0 .894-4.9254s-1.8032-.7655-3.0578-1.2394zm1.841 6.081c-.7602 2.8983-2.4683 6.9733-6.2864 10.0621-3.8241-3.0888-5.523-7.1646-6.2864-10.0622a37.773 37.773 0 0 1-.8495-4.6313 91.5984 91.5984 0 0 1 2.8122-1.136c2.6678-1.0058 3.8242-1.219 4.3283-1.219.504 0 1.6611.2116 4.3275 1.2183a93.1855 93.1855 0 0 1 2.8129 1.136 37.7783 37.7783 0 0 1-.86 4.6312h.0014zm-3.32 6.2425c.2192-.3136.4247-.6295.619-.9455l-1.4163.5646zm1.3256-2.1985a19.7708 19.7708 0 0 0 .6447-1.3944l-2.021.8313zm1.0157-2.3467c.1716-.4776.3175-.9363.4422-1.3724l-2.2348.7633 1.7926.6084zm.6923-2.3489c.1119-.47.2116-.9401.2978-1.3928l-2.4079.7436zM16.261 8.5318l2.2166.6205c.081-.489.1414-.9326.1913-1.2939l-2.408.6726Zm-1.2825-2.1124c-1.8706-.6476-2.6626-.758-2.9823-.758-.3204 0-1.1117.1104-2.983.758l2.983.9168zm-2.9823 12.8677-1.6158.8797a17.133 17.133 0 0 0 1.6158 1.5614 17.1347 17.1347 0 0 0 1.6158-1.5614l-1.6158-.8805zm-3.8854-8.3686 3.8824 1.1918 3.8846-1.1926-3.8846-1.1918-3.8831 1.1926zm.3711 2.392 3.5113 1.1918 3.5113-1.1918-3.5113-1.1926zm-.749-4.781 4.2603 1.1911 4.2617-1.191-4.2617-1.1919-4.261 1.1918Zm2.8085-5.1331-.2441.2418a1.0959 1.0959 0 0 0 1.5281.0197v.6318h.35v-.6379a1.0959 1.0959 0 0 0 1.528-.0196l-.253-.2358a.7527.7527 0 0 1-1.2841-.5298.7482.7482 0 0 1 .464-.6923.7543.7543 0 0 1 .82.1625l.2434-.2426a1.1011 1.1011 0 0 0-1.5282-.0196v-.631h-.3431v.631a1.1011 1.1011 0 0 0-1.5274.0196l.2434.2419a.7527.7527 0 0 1 1.2832.5305.7467.7467 0 0 1-.464.6923.7543.7543 0 0 1-.8192-.1625ZM8.4026 17.5171c.1927.3159.399.6318.619.9447l.7912-.3764zm-1.3438-2.6437c.1905.4557.4036.9228.6447 1.3944l1.3762-.5646Zm-.8177-2.3247c.1247.436.2706.8948.4421 1.3717l1.7927-.6084ZM5.6924 10.18c.0862.452.1852.922.297 1.3921l2.1162-.6492-2.4132-.7436zm-.3718-2.3255c.046.3613.1103.8042.189 1.294l2.218-.6176Zm3.7606 7.8456 2.9135 1.1903 2.9142-1.1903-2.9142-1.194Zm.7414 2.3867 2.1751 1.1926 2.1766-1.1926-2.1766-1.1926z" fill="#000000" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M13.565 17.91H24v1.964H13.565zm-3.201-5.09l-9.187 8.003 2.86-7.004L0 11.179l9.187-8.002-3.11 7.451z" fill="#000000" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M0 2.978h18.593c.021.004.042.012.063.013.436.019.863.09 1.279.218 1.459.451 2.507 1.367 3.117 2.772.454 1.046.5 2.259.316 3.156a4.634 4.634 0 0 1-1.37 2.482c-.014.014-.027.03-.04.045.021.026.052.04.077.061a4.774 4.774 0 0 1 1.951 3.564c.001.021.01.042.014.063v.79c-.005.027-.012.053-.014.08-.004.046-.002.093-.007.14a5.501 5.501 0 0 1-.21 1.047c-.398 1.278-1.167 2.262-2.336 2.924-.836.474-1.744.686-2.7.687-6.24.004-12.48.002-18.72.002v-4.74h2.988l.001 1.738c.134.016 7.226.01 7.286-.006v-4.668h-3.06v1.425c-.102.019-2.928.014-2.986-.004V8.912h2.986v1.424c.103.019 3.003.014 3.06-.003V5.976H3V7.51H.008Zm13.753 15.05h4.744c.254 0 .505-.023.75-.09.77-.21 1.3-.683 1.546-1.447a2.605 2.605 0 0 0-.007-1.636 2.068 2.068 0 0 0-1.12-1.274 2.553 2.553 0 0 0-1.092-.239h-4.82zm.003-12.058v4.377h4.397a2.5 2.5 0 0 0 .723-.103c.678-.203 1.147-.63 1.376-1.304.145-.428.163-.868.068-1.308-.161-.742-.598-1.251-1.313-1.515a2.711 2.711 0 0 0-.947-.147Z" fill="#000000" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M12.291 4.57a7.46 7.46 0 0 0-7.338 5.006h.568a6.926 6.926 0 0 1 6.483-4.494 6.922 6.922 0 0 1 6.922 6.924c0 .116 0 .234-.01.351l.533.059c0-.134.01-.273.01-.4a7.46 7.46 0 0 0-7.168-7.446zM.869 10.113 0 10.566l13.25 1.44 3.63-1.893H.87zm3.682 1.483v.41a7.46 7.46 0 0 0 14.498 2.441h-.57a6.924 6.924 0 0 1-6.475 4.487 6.928 6.928 0 0 1-6.92-6.928v-.352l-.533-.058zm6.193.414-3.63 1.898h16.011l.873-.453v-.006l-13.254-1.44zm13.254 1.44H24l-.002-.007v.006z" fill="#F7FF14" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M12 0C5.3727 0 0 5.3727 0 12c0 3.5145 1.511 6.6754 3.9181 8.8702a4.457 4.457 0 01-.1998-1.3238c0-2.4597 1.9938-4.4535 4.4536-4.4535 2.4596 0 4.4535 1.9938 4.4535 4.4535 0 1.9565-1.262 3.6171-3.016 4.2153C10.382 23.9178 11.1815 24 12 24c6.6273 0 12-5.3727 12-12S18.6273 0 12 0Z" fill="#0A0C0D" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M24 16.375a3.05 3.05 0 0 1-.246 1.231 3.114 3.114 0 0 1-1.672 1.66 3.068 3.068 0 0 1-1.225.247 3.695 3.695 0 0 1-.71-.073 4.05 4.05 0 0 1-.739-.218 3.184 3.184 0 0 1-.676-.37 2.02 2.02 0 0 1-.507-.515.46.46 0 0 1-.08-.275.442.442 0 0 1 .152-.346.504.504 0 0 1 .346-.138.553.553 0 0 1 .201.04.392.392 0 0 1 .186.17.046.046 0 0 0 .016.032l.064.065a1.806 1.806 0 0 0 .798.507 3.052 3.052 0 0 0 .943.154 2.12 2.12 0 0 0 .846-.17 2.189 2.189 0 0 0 1.16-1.16 2.115 2.115 0 0 0 .176-.841v-1.109a3.132 3.132 0 0 1-.985.637 3.089 3.089 0 0 1-1.193.234 3.046 3.046 0 0 1-1.231-.246 3.137 3.137 0 0 1-1.66-1.66 3.04 3.04 0 0 1-.247-1.232v-2.544a3.058 3.058 0 0 1 .247-1.225 3.154 3.154 0 0 1 .668-1 3.202 3.202 0 0 1 .986-.669 3.15 3.15 0 0 1 2.463 0 3.09 3.09 0 0 1 1.668 1.668 3.066 3.066 0 0 1 .246 1.225v5.92zm-.967-5.92a2.118 2.118 0 0 0-.17-.846 2.189 2.189 0 0 0-1.16-1.16 2.201 2.201 0 0 0-1.692 0 2.191 2.191 0 0 0-1.166 1.16 2.134 2.134 0 0 0-.168.845v2.531a2.133 2.133 0 0 0 .168.853 2.194 2.194 0 0 0 .468.693 2.171 2.171 0 0 0 .694.467 2.201 2.201 0 0 0 1.692 0 2.189 2.189 0 0 0 1.16-1.16 2.117 2.117 0 0 0 .174-.853zm-7.252 5.356a.435.435 0 0 1-.154.363.511.511 0 0 1-.66 0 .434.434 0 0 1-.153-.363v-5.356a2.118 2.118 0 0 0-.17-.846 2.189 2.189 0 0 0-1.16-1.16 2.201 2.201 0 0 0-1.692 0 2.19 2.19 0 0 0-1.16 1.16 2.127 2.127 0 0 0-.17.846v5.356a.434.434 0 0 1-.152.363.511.511 0 0 1-.661 0 .434.434 0 0 1-.153-.363v-5.356a3.058 3.058 0 0 1 .246-1.225 3.163 3.163 0 0 1 .67-1 3.202 3.202 0 0 1 .984-.669 3.15 3.15 0 0 1 2.464 0 3.091 3.091 0 0 1 1.667 1.668 3.066 3.066 0 0 1 .247 1.225zm-8.383 0a.435.435 0 0 1-.152.363.511.511 0 0 1-.662 0 .434.434 0 0 1-.152-.363V7.956a.435.435 0 0 1 .152-.363.512.512 0 0 1 .662 0 .436.436 0 0 1 .152.363zM4.982 8.44a.463.463 0 0 1-.145.338.483.483 0 0 1-.355.142.503.503 0 0 1-.339-.145l-.016-.017a.149.149 0 0 0-.032-.024.123.123 0 0 1-.033-.025 1.9 1.9 0 0 0-1.24-.43q-.871 0-1.363.595-.491.596-.492 1.693v5.243a.435.435 0 0 1-.153.363.525.525 0 0 1-.33.123.525.525 0 0 1-.33-.123.434.434 0 0 1-.153-.363v-5.243A4.362 4.362 0 0 1 .18 9.303a3.034 3.034 0 0 1 .53-1.031 2.546 2.546 0 0 1 .878-.706 2.763 2.763 0 0 1 1.231-.257 3.08 3.08 0 0 1 1.065.209 2.573 2.573 0 0 1 .934.58.48.48 0 0 1 .163.343zm2.76-3.128a.826.826 0 0 1-.826.827.826.826 0 0 1-.827-.827.826.826 0 0 1 .827-.826.826.826 0 0 1 .826.826Z" fill="#1C9AD6" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M10.506 17.772c-3.358-.211-6.452-1.124-8.347-2.462-.484-.342-1.137-.954-1.43-1.34-.6-.794-.85-1.735-.674-2.548.32-1.478 1.763-2.846 4.016-3.807 1.668-.71 3.533-1.142 5.958-1.379.844-.082 3.291-.069 4.184.024 2.67.276 4.656.795 6.416 1.677 2.259 1.132 3.457 2.63 3.366 4.204q-.103 1.815-2.347 3.303c-2.536 1.684-6.902 2.596-11.142 2.328m3.642-.493c2.17-.206 4.068-.66 5.652-1.35.594-.26.588-.257 1.185-.6 1.687-.972 2.656-2.273 2.58-3.47-.046-.75-.37-1.365-1.112-2.106-1.489-1.489-4.112-2.54-7.46-2.99-.842-.112-1.744-.161-2.991-.16-1.337 0-1.774.022-2.797.142-2.907.343-5.51 1.262-7.108 2.51-.39.305-.89.815-1.102 1.123-.325.472-.567 1.16-.567 1.611 0 .307.123.766.301 1.127 1.13 2.28 5.24 3.992 10.189 4.244.634.032 2.546-.015 3.23-.08m-4.162-.283c-2.184-.21-3.922-.621-5.523-1.305-1.972-.842-3.357-2.079-3.669-3.276-.205-.79.16-1.638 1.087-2.524 1.574-1.504 4.443-2.557 7.927-2.908 1.192-.12 3.207-.121 4.391-.001 2.979.3 5.467 1.092 7.188 2.288.438.304 1.298 1.167 1.49 1.494.478.814.516 1.433.134 2.179-.952 1.861-3.956 3.366-7.825 3.92-1.628.232-3.643.284-5.2.134zM20.237 14.4c.294-.112.716-.42 1.013-.74.237-.257.291-.348.205-.348-.022 0-.186.135-.365.3-.364.338-.6.504-.775.547-.1.024-.12.015-.12-.057 0-.047.051-.197.113-.332.133-.29.118-.47-.054-.675l-.111-.132.183-.205.29-.324c.147-.165.216-.154.195.029-.014.12.003.16.09.218.207.135.447-.009.494-.294.021-.133.006-.174-.107-.287-.236-.236-.463-.152-.928.341-.228.242-.374.358-.52.414-.212.08-.338.068-.338-.032 0-.031.359-.637.798-1.345l.798-1.288h-.72l-.3.358-.728.878c-1.204 1.455-1.92 2.212-2.391 2.524-.208.139-.285.164-.537.178-.278.016-.298.01-.37-.098-.065-.1-.068-.138-.02-.297.116-.39.556-1.143.82-1.407.17-.17.336-.195.287-.044-.08.246-.074.402.019.485.126.115.343.107.443-.016.092-.114.105-.376.028-.546-.16-.352-.914-.306-1.547.095-.134.085-.588.503-1.009.93-.602.61-.788.775-.877.775-.08 0-.113-.022-.113-.075 0-.105.16-.436.464-.97.142-.248.32-.562.395-.7l.138-.249h-.686l-.118.203-.119.202-.083-.16c-.13-.255-.304-.34-.646-.319-.557.035-1.035.345-1.925 1.247-.552.56-1.03.951-1.16.951-.108 0-.122-.118-.054-.447.085-.413.166-.562 1.14-2.12.458-.731.833-1.341.833-1.354s-.152-.023-.336-.022l-.336.002-.282.42a15 15 0 0 1-1.34 1.701c-.227.25-.426.46-.442.468-.015.007-.03-.11-.034-.26-.011-.534-.16-.843-.523-1.095-.096-.067-.176-.136-.176-.153s.147-.103.326-.192c.377-.186.7-.487.85-.791.132-.267.142-.771.02-1.022-.092-.19-.386-.489-.556-.565-.154-.068-.135-.116.097-.245.16-.089.176-.11.107-.134-.103-.036-.367.02-.577.125-.14.07-.212.074-.635.038-1.55-.129-2.884.158-3.88.835-.359.243-.866.8-1.033 1.132-.128.254-.141.311-.114.498.033.225.114.42.23.553.287.326 1.174.36 1.772.069.333-.163.514-.376.757-.89.17-.359.184-.419.2-.82.029-.717.019-.72-.286-.12-.365.72-.599 1.07-.904 1.36-.332.315-.492.394-.849.42l-.292.02-.174-.174c-.16-.16-.174-.192-.174-.41 0-.48.237-.881.758-1.278.751-.572 1.947-.976 2.905-.98.554-.002 1.063.053 1.06.114-.001.028-.11.128-.241.222-.309.221-.873.781-1.2 1.193-.513.643-1.111 1.603-1.354 2.172-.55 1.287-.885 1.66-1.592 1.772-.482.077-.817-.038-1.134-.389-.224-.248-.21-.327.066-.36.491-.058.698-.3.587-.688-.04-.143-.088-.204-.203-.264-.181-.093-.328-.073-.554.077-.249.164-.369.352-.39.608-.038.454.29.909.797 1.107.327.128 1.046.14 1.513.025 1.168-.286 2.071-1.267 2.58-2.802.197-.59.605-1.48.827-1.804.18-.262.729-.84.797-.84.174 0 .456.562.456.91 0 .405-.23.82-.623 1.124-.233.18-.239.182-.35.11-.166-.11-.488-.064-.618.087-.11.126-.122.203-.054.33.052.096.216.109.433.033.136-.047.15-.042.281.1.255.28.244.81-.029 1.351-.3.595-.65.999-1.006 1.16-.235.107-.352.104-.46-.011-.171-.184-.082-.752.149-.944.038-.032.149-.153.246-.269.173-.207.174-.21.053-.164-.438.167-.758.738-.682 1.216.065.403.425.576 1 .48.58-.095.776-.23 1.645-1.126.433-.446.798-.8.81-.788s-.056.148-.153.301c-.36.566-.517 1.177-.362 1.413.09.136.31.236.524.236.294 0 .619-.23 1.22-.861.217-.23.407-.407.42-.394s-.015.15-.064.303c-.145.46-.05.745.296.893.306.13.6.04 1.032-.314.46-.377.417-.366.385-.092-.026.223-.02.25.09.358.098.099.143.114.283.095.307-.041.544-.204 1.037-.71.264-.27.499-.492.522-.492s.013.08-.022.179c-.146.416-.038.774.284.94.167.087.244.099.542.085.298-.015.392-.04.672-.183.289-.147.43-.273 1.267-1.124.519-.528.943-.943.943-.924 0 .041-.464.825-.97 1.634l-.365.585.328.013c.18.007.353.003.382-.008s.225-.306.433-.655c.3-.502.392-.627.448-.602a.8.8 0 0 0 .255.022c.128-.006.192.01.21.055.013.035-.046.224-.132.421-.185.428-.197.608-.048.756.131.132.327.14.629.025zm-7.82-.333c-.088-.087-.086-.143.015-.43.258-.736 1.054-1.566 1.349-1.408.192.103.147.502-.096.855-.373.543-.917 1.051-1.124 1.051a.24.24 0 0 1-.144-.068" fill="#000000" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M23.275 5.265c0-.852-.132-1.703-.36-2.555-.328-1.016-1.081-1.834-2.031-2.194a9.248 9.248 0 0 0-6.092 0 3.168 3.168 0 0 0-2.03 2.194 9.532 9.532 0 0 0 0 5.077c.326 1.015 1.08 1.834 2.03 2.194a8.04 8.04 0 0 0 3.046.491c1.049 0 2.063-.196 3.046-.491a3.172 3.172 0 0 0 2.031-2.194c.229-.819.36-1.67.36-2.522zm-3.308 0c0 .393-.065.852-.196 1.212-.164.524-.623.95-1.18 1.081a4.233 4.233 0 0 1-1.571 0 1.473 1.473 0 0 1-1.18-1.081 4.025 4.025 0 0 1 0-2.489c.163-.524.622-.95 1.18-1.081a4.233 4.233 0 0 1 1.571 0 1.476 1.476 0 0 1 1.18 1.081c.13.458.196.884.196 1.277m-8.745 13.79a9.552 9.552 0 0 0 0-5.077c-.327-1.016-1.081-1.834-2.03-2.195a9.248 9.248 0 0 0-6.092 0 3.173 3.173 0 0 0-2.031 2.195 9.552 9.552 0 0 0 0 5.077c.328 1.015 1.081 1.834 2.031 2.193a9.248 9.248 0 0 0 6.092 0 3.392 3.392 0 0 0 2.03-2.193m-2.948-2.523c0 .393-.066.852-.197 1.212a1.644 1.644 0 0 1-1.179 1.081 4.238 4.238 0 0 1-1.572 0 1.477 1.477 0 0 1-1.179-1.081 4.04 4.04 0 0 1 0-2.489 1.64 1.64 0 0 1 1.179-1.081 4.196 4.196 0 0 1 1.572 0 1.476 1.476 0 0 1 1.179 1.081c.131.426.197.851.197 1.277m0-11.3h3.308c0-.851-.131-1.703-.36-2.521-.327-1.016-1.081-1.834-2.03-2.194a9.248 9.248 0 0 0-6.092 0C2.084.909 1.331 1.728 1.068 2.743a9.552 9.552 0 0 0 0 5.077c.328 1.015 1.081 1.834 2.031 2.194.982.36 1.998.492 3.046.492 1.048 0 2.063-.197 3.046-.492a3.17 3.17 0 0 0 2.03-2.194c.033-.131.065-.295.131-.426L8.241 5.953c-.033.196-.065.36-.131.557-.163.524-.622.95-1.179 1.081a4.238 4.238 0 0 1-1.572 0A1.478 1.478 0 0 1 4.18 6.51a4.04 4.04 0 0 1 0-2.489c.164-.524.622-.95 1.179-1.082a4.238 4.238 0 0 1 1.572 0A1.476 1.476 0 0 1 8.11 4.021c.098.425.164.818.164 1.211m4.421 8.779a9.442 9.442 0 0 0-.36 2.555V24h3.308v-7.468c0-.393.065-.852.196-1.212.163-.524.622-.95 1.18-1.081a4.191 4.191 0 0 1 1.571 0 1.478 1.478 0 0 1 1.18 1.081 4.04 4.04 0 0 1 0 2.489c-.164.523-.623.95-1.146 1.08a4.196 4.196 0 0 1-1.572 0c-.099-.031-.229-.064-.327-.098l1.113 3.079c1.049 0 2.063-.197 3.046-.491a3.175 3.175 0 0 0 2.031-2.194 9.552 9.552 0 0 0 0-5.077c-.328-1.016-1.081-1.834-2.031-2.195a9.248 9.248 0 0 0-6.092 0c-1.016.263-1.769 1.082-2.097 2.098" fill="#00B1E7" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M13.0569.404c-1.9042.0042-3.8052.4582-5.4881 1.3223.1477.2404.2528.506.3086.7794.283 1.383-.5717 2.6728-1.8945 4.3458l-.6855.8594a1.165 1.165 0 0 1-.912.4356 1.1517 1.1517 0 0 1-.627-.1856c-.3196-.2084-.538-.3299-1.2343-.7832-2.042 4.897-.5548 11.2114 3.8826 14.2446 3.5434 2.5674 8.7443 2.8326 12.6499.9434.7786-.3952 1.5287-.838 2.0663-1.4004a2.7886 2.7886 0 0 0 .9238-2.0724c0-1.3257-.9333-2.4682-2.2323-2.7325-.5056-.1094-1.2926-.0854-1.9863.3399-.2262.1083-.4475.2277-.6679.3437-.6341.3344-.7472.3702-1.4374.588-1.9956.6344-6.0325.556-7.0662-1.6388-.1441-.6302.424-.7857.9258-.7852 2.992-.0074 5.9841-.0002 8.9762-.0059.781-.0032 1.5788-.0068 2.3339-.2246 2.302-.5946 3.43-2.7624 3.0272-5.2463-.6121-3.973-3.577-7.5172-7.4606-8.633C15.3562.563 14.2058.4015 13.0569.404zM5.4576.9646c-.7885.0002-1.5143.4442-1.9023 1.0723-.3962-.325-.9281-.5137-1.4472-.5137s-1.0492.18-1.4824.588C.1608 2.5486-.0652 3.1988.0164 3.826c.0856.6424.431 1.1825.9882 1.711.6832.6479 1.6854 1.2787 2.9257 2.0567l.0488.0293a.7427.7427 0 0 0 .4062.1211.7655.7655 0 0 0 .5938-.2832c.011-.013.0208-.0274.0312-.041 1.6662-2.07 2.759-3.4236 2.4706-4.8342-.126-.6165-.5471-1.1606-1.1327-1.4238-.2125-.0973-.5208-.1973-.8906-.1973Zm-3.6757 1.543c.3428 0 .6211.2777.6211.6192 0 .3415-.2783.6172-.621.6172-.3428 0-.6211-.2757-.6211-.6172 0-.3415.2783-.6192.621-.6192zm11.4449 3.6622c1.6882.0106 3.4584.8528 4.1756 2.4923.0547.1383.0885.2821.0703.422-.0512.3676-.387.498-.7168.498-2.0929.0125-5.2392.005-7.4137.002-.288-.0092-.3718-.0665-.3906-.0665-.2202-.0814-.3686-.2946-.3574-.5293.0057-.2033.0986-.4013.1933-.5801.8201-1.5407 2.634-2.3014 4.4393-2.2384Z" fill="#00BC45" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M12 0a11.95 11.95 0 0 0-4.104.721c4.872 2.556 11.316 10.893 13.547 18.686A11.957 11.957 0 0 0 24 12c0-6.627-5.373-12-12-12zM4.093 2.974A11.971 11.971 0 0 0 0 12c0 3.026 1.12 5.789 2.968 7.9 1.629-4.894 4.691-9.611 7.313-12.246-1.872-2.016-3.968-3.618-6.188-4.68zm2.276 19.625A11.947 11.947 0 0 0 12 24c2.092 0 4.059-.536 5.772-1.478-.987-4.561-2.851-8.739-5.28-12.147-2.597 2.8-5.186 7.702-6.123 12.224z" fill="#9F1D20" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="#00C300" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M12.0005 0C18.627 0 24 5.373 24 12.0005 24 18.627 18.627 24 11.9995 24 5.373 24 0 18.627 0 11.9995 0 5.373 5.373 0 12.0005 0zm0 19.826a7.8265 7.8265 0 10-.001-15.652C7.7133 4.2246 4.2653 7.7136 4.2653 12c0 4.2864 3.448 7.7754 7.7342 7.826h.001zm0-3.9853a3.8402 3.8402 0 110-7.6803c2.1204.0006 3.839 1.7197 3.839 3.8401s-1.7186 3.8396-3.839 3.8402z" fill="#CC0000" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M.643 1.475c0 .814.668 1.475 1.49 1.475H14.49c1.408 0 2.568.43 3.48 1.29.91.861 1.366 1.967 1.366 3.32 0 1.25-.456 2.274-1.367 3.072-.911.78-2.07 1.168-3.479 1.168H9.12c-.824 0-1.491.66-1.491 1.475 0 .815.667 1.475 1.491 1.475h5.93l5.342 8.482c.332.512.797.768 1.398.768.663 0 1.129-.256 1.398-.768.269-.533.217-1.096-.155-1.69l-4.753-7.56c1.284-.574 2.299-1.414 3.044-2.52.746-1.127 1.119-2.427 1.119-3.902 0-1.496-.342-2.807-1.026-3.934-.662-1.127-1.594-2.008-2.795-2.643C17.42.327 16.044 0 14.49 0H2.134C1.311 0 .643.66.643 1.475Z" fill="#1D1D1D" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="M24 16.375a3.05 3.05 0 0 1-.246 1.231 3.114 3.114 0 0 1-1.672 1.66 3.068 3.068 0 0 1-1.225.247 3.695 3.695 0 0 1-.71-.073 4.05 4.05 0 0 1-.739-.218 3.184 3.184 0 0 1-.676-.37 2.02 2.02 0 0 1-.507-.515.46.46 0 0 1-.08-.275.442.442 0 0 1 .152-.346.504.504 0 0 1 .346-.138.553.553 0 0 1 .201.04.392.392 0 0 1 .186.17.046.046 0 0 0 .016.032l.064.065a1.806 1.806 0 0 0 .798.507 3.052 3.052 0 0 0 .943.154 2.12 2.12 0 0 0 .846-.17 2.189 2.189 0 0 0 1.16-1.16 2.115 2.115 0 0 0 .176-.841v-1.109a3.132 3.132 0 0 1-.985.637 3.089 3.089 0 0 1-1.193.234 3.046 3.046 0 0 1-1.231-.246 3.137 3.137 0 0 1-1.66-1.66 3.04 3.04 0 0 1-.247-1.232v-2.544a3.058 3.058 0 0 1 .247-1.225 3.154 3.154 0 0 1 .668-1 3.202 3.202 0 0 1 .986-.669 3.15 3.15 0 0 1 2.463 0 3.09 3.09 0 0 1 1.668 1.668 3.066 3.066 0 0 1 .246 1.225v5.92zm-.967-5.92a2.118 2.118 0 0 0-.17-.846 2.189 2.189 0 0 0-1.16-1.16 2.201 2.201 0 0 0-1.692 0 2.191 2.191 0 0 0-1.166 1.16 2.134 2.134 0 0 0-.168.845v2.531a2.133 2.133 0 0 0 .168.853 2.194 2.194 0 0 0 .468.693 2.171 2.171 0 0 0 .694.467 2.201 2.201 0 0 0 1.692 0 2.189 2.189 0 0 0 1.16-1.16 2.117 2.117 0 0 0 .174-.853zm-7.252 5.356a.435.435 0 0 1-.154.363.511.511 0 0 1-.66 0 .434.434 0 0 1-.153-.363v-5.356a2.118 2.118 0 0 0-.17-.846 2.189 2.189 0 0 0-1.16-1.16 2.201 2.201 0 0 0-1.692 0 2.19 2.19 0 0 0-1.16 1.16 2.127 2.127 0 0 0-.17.846v5.356a.434.434 0 0 1-.152.363.511.511 0 0 1-.661 0 .434.434 0 0 1-.153-.363v-5.356a3.058 3.058 0 0 1 .246-1.225 3.163 3.163 0 0 1 .67-1 3.202 3.202 0 0 1 .984-.669 3.15 3.15 0 0 1 2.464 0 3.091 3.091 0 0 1 1.667 1.668 3.066 3.066 0 0 1 .247 1.225zm-8.383 0a.435.435 0 0 1-.152.363.511.511 0 0 1-.662 0 .434.434 0 0 1-.152-.363V7.956a.435.435 0 0 1 .152-.363.512.512 0 0 1 .662 0 .436.436 0 0 1 .152.363zM4.982 8.44a.463.463 0 0 1-.145.338.483.483 0 0 1-.355.142.503.503 0 0 1-.339-.145l-.016-.017a.149.149 0 0 0-.032-.024.123.123 0 0 1-.033-.025 1.9 1.9 0 0 0-1.24-.43q-.871 0-1.363.595-.491.596-.492 1.693v5.243a.435.435 0 0 1-.153.363.525.525 0 0 1-.33.123.525.525 0 0 1-.33-.123.434.434 0 0 1-.153-.363v-5.243A4.362 4.362 0 0 1 .18 9.303a3.034 3.034 0 0 1 .53-1.031 2.546 2.546 0 0 1 .878-.706 2.763 2.763 0 0 1 1.231-.257 3.08 3.08 0 0 1 1.065.209 2.573 2.573 0 0 1 .934.58.48.48 0 0 1 .163.343zm2.76-3.128a.826.826 0 0 1-.826.827.826.826 0 0 1-.827-.827.826.826 0 0 1 .827-.826.826.826 0 0 1 .826.826Z" fill="#1C9AD6" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
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
      const rot = -(angle - 24);
      return (
        <svg viewBox="-4 -4 32 32" width="260" height="170" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) rotate(${rot}) translate(-12, -12)`}>
            <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" fill="#18181B" />
          </g>
          {showOfficial && (
            <line x1="-2" y1="20" x2="26" y2="4" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  }
];

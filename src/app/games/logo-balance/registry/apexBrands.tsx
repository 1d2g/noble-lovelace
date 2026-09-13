import React from 'react';
import { BrandModel } from './types';
import { getParamVal, SpecGuideLine, SpecGuideCircle } from './helpers';

export const APEX_BRANDS: BrandModel[] = [
  {
    id: 'mcdonalds-arches',
    name: 'McDonald’s Golden Arches',
    archetypeId: 'apex-curve',
    prompt: 'Adjust the center join apex elevation between the twin Golden Arches to match the authentic parabolic curve.',
    insight: 'Stanley Clark Meston originally designed the Golden Arches in 1953 as 25-foot structural arches. Jim Schindler formalized them into the "M" emblem in 1962, balancing the parabolic curve drop from peak to central join at 81.5px.',
    parameters: [
      { id: 'apexHeight', label: 'Arch Apex Join Drop', min: 45, max: 120, step: 0.5, targetValue: 81.5, tolerance: 18, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const apexHeight = getParamVal(values, showOfficial, 'apexHeight', 81.5);
      return (
        <svg viewBox="0 0 320 280" width="280" height="245">
          <rect x="10" y="10" width="300" height="260" rx="36" fill="#DA291C" />
          <g transform="translate(23.6, 20)">
            <path fill="#FFC72C" d={`m 195.8,17.933 c 23.3,0 42.2,98.3 42.2,219.7 h 34 c 0,-130.7 -34.3,-236.5 -76.3,-236.5 -24,0 -45.2,${apexHeight * 0.389} -59.2,${apexHeight} -14,-${apexHeight * 0.611} -35.2,-${apexHeight} -59,-${apexHeight} -42,0 -76.2,105.7 -76.2,236.4 h 34 c 0,-121.4 18.7,-219.6 42,-219.6 23.3,0 42.2,90.8 42.2,202.8 h 33.8 c 0,-112 19,-202.8 42.3,-202.8 z`} />
            {showOfficial && (
              <SpecGuideLine x1="30" y1="99.4" x2="242" y2="99.4" />
            )}
          </g>
        </svg>
      );
    }
  },
  {
    id: 'instagram-squircle',
    name: 'Instagram Squircle Curvature',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the corner super-ellipse curvature (squircle radius) of the camera container.',
    insight: 'Instagram replaced standard rounded corners with an Apple-style continuous curvature squircle with n=4.5 curve continuity, balancing at a 48px corner radius.',
    parameters: [
      { id: 'squircleRadius', label: 'Super-Ellipse Corner Radius', min: 20, max: 78, step: 1, targetValue: 48, tolerance: 14, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const rad = getParamVal(values, showOfficial, 'squircleRadius', 48);
      return (
        <svg viewBox="-100 -100 200 200" width="200" height="200">
          <defs>
            <linearGradient id="igGradFull" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFDC80" />
              <stop offset="30%" stopColor="#FD1D1D" />
              <stop offset="70%" stopColor="#C13584" />
              <stop offset="100%" stopColor="#405DE6" />
            </linearGradient>
          </defs>
          <rect x="-82" y="-82" width="164" height="164" rx={rad} fill="url(#igGradFull)" />
          <rect x="-52" y="-52" width="104" height="104" rx="28" fill="none" stroke="#FFFFFF" strokeWidth="8" />
          <circle cx="0" cy="0" r="26" fill="none" stroke="#FFFFFF" strokeWidth="8" />
          <circle cx="32" cy="-32" r="5.5" fill="#FFFFFF" />
          {showOfficial && (
            <rect x="-82" y="-82" width="164" height="164" rx="48" fill="none" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 4" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'apple-silhouette',
    name: 'Apple Silhouette Bite',
    archetypeId: 'apex-curve',
    prompt: 'Adjust the circular bite cutout diameter relative to the apple silhouette body.',
    insight: 'Rob Janoff created the bite in 1977 so the fruit would scale cleanly without being mistaken for a cherry. The circular bite cutout diameter balances at 38px.',
    parameters: [
      { id: 'biteDiameter', label: 'Circular Bite Cutout Diameter', min: 18, max: 60, step: 0.5, targetValue: 38, tolerance: 10, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const biteDiam = getParamVal(values, showOfficial, 'biteDiameter', 38);
      const biteR = biteDiam / 2;
      return (
        <svg viewBox="-90 -105 180 210" width="200" height="235">
          <defs>
            <mask id="appleMask"><rect x="-90" y="-105" width="180" height="210" fill="#FFFFFF" /><circle cx="48" cy="-5" r={biteR} fill="#000000" /></mask>
          </defs>
          <path d="M 0 -72 C 16 -95 42 -92 42 -92 C 42 -92 45 -66 22 -58 C 5 -52 0 -72 0 -72 Z" fill="#111111" />
          <path mask="url(#appleMask)" d="M 0 -48 C 18 -48 35 -60 52 -60 C 72 -60 82 -42 82 -12 C 82 32 50 82 25 82 C 12 82 0 72 -14 72 C -28 72 -42 82 -54 82 C -78 82 -84 45 -84 10 C -84 -32 -65 -60 -42 -60 C -25 -60 -12 -48 0 -48 Z" fill="#111111" />
          {showOfficial && (
            <SpecGuideCircle cx="48" cy="-5" r={19} />
          )}
        </svg>
      );
    }
  },
  {
    id: 'playboy-bunny',
    name: 'Playboy Bunny Ear Notch',
    archetypeId: 'apex-curve',
    prompt: 'Adjust the notch cut depth along the right rabbit ear silhouette.',
    insight: 'Art Paul designed the rabbit in 1953 in less than half an hour, including the iconic 16px triangular notch cut along the right ear.',
    parameters: [
      { id: 'notchDepth', label: 'Ear Notch Cutout Depth', min: 4, max: 32, step: 0.5, targetValue: 16, tolerance: 6, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      const notch = getParamVal(values, showOfficial, 'notchDepth', 16);
      return (
        <svg viewBox="-80 -115 160 230" width="180" height="260">
          <g fill="#111111">
            <path d="M -22 -10 C -35 -50 -45 -102 -28 -108 C -15 -112 -8 -80 -12 -10 Z" />
            <path d={`M 0 -10 C 10 -55 24 -98 38 -98 C 48 -98 48 -70 36 -45 L ${36 - notch} -40 L 32 -30 C 22 -10 10 5 0 -10 Z`} />
            <circle cx="-12" cy="18" r="28" />
            <path d="M -35 22 L -55 34 L -38 44 Z" />
            <circle cx="-24" cy="14" r="3.5" fill="#FFFFFF" />
            <polygon points="-12,62 -28,72 -28,52" />
            <polygon points="-12,62 4,72 4,52" />
            <circle cx="-12" cy="62" r="3" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <SpecGuideLine x1="20" y1="-40" x2="36" y2="-40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'twitter-bird',
    name: 'Twitter Bird Chest Arc',
    archetypeId: 'apex-curve',
    prompt: 'Adjust the circular arc radius carving out the bird’s flight chest plumage.',
    insight: 'Martin Grasser constructed the 2012 Larry the Bird logo entirely out of 13 intersecting geometric circles, balancing the chest plumage arc at a 45px radius.',
    parameters: [
      { id: 'chestRadius', label: 'Plumage Circular Arc Radius', min: 20, max: 72, step: 0.5, targetValue: 45, tolerance: 12, unit: 'px' }
    ],
    render: (values, showOfficial) => {
      return (
        <svg viewBox="-90 -85 180 170" width="220" height="205">
          <path d="M 75 -50 C 65 -38 52 -32 40 -30 C 52 -38 60 -50 64 -65 C 50 -56 36 -52 20 -48 C 5 -62 -18 -62 -34 -48 C -44 -40 -48 -26 -46 -14 C -72 -15 -95 -30 -110 -52 C -116 -40 -114 -25 -105 -15 C -112 -15 -118 -18 -124 -22 C -124 -5 -110 10 -94 15 C -100 17 -108 17 -114 15 C -108 32 -90 44 -70 45 C -86 58 -108 64 -130 62 C -110 75 -85 82 -60 82 C 18 82 60 20 60 -36 C 68 -42 75 -48 80 -55 Z" fill="#1DA1F2" transform="scale(0.85) translate(25, 0)" />
          {showOfficial && (
            <SpecGuideCircle cx="10" cy="10" r="45" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'discord-clyde-arches',
    name: 'Discord Clyde Controller Arches',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Discord Clyde Controller Arches mark.',
    insight: 'The Clyde emblem blends a game controller silhouette with smiling bot face curves.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" fill="#5865F2" />
          </g>
          {showOfficial && (
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'snapchat-ghostface',
    name: 'Snapchat Ghostface Chillah',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Snapchat Ghostface Chillah mark.',
    insight: 'Evan Spiegel drew Ghostface Chillah in his Stanford dorm room, inspired by Wu-Tang Clan.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" fill="#FFFC00" />
          </g>
          {showOfficial && (
            <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'reddit-snoo-antenna',
    name: 'Reddit Snoo Alien Antenna',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Reddit Snoo Alien Antenna mark.',
    insight: 'Alexis Ohanian doodled Snoo during a marketing class in 2005 with a curled antenna bulb.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z" fill="#FF4500" />
          </g>
          {showOfficial && (
            <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'telegram-paper-plane',
    name: 'Telegram Paper Airplane Apex',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Telegram Paper Airplane Apex mark.',
    insight: 'The white paper airplane represents instant message flight across encrypted borders.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="#26A5E4" />
          </g>
          {showOfficial && (
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'whatsapp-chat-bubble',
    name: 'WhatsApp Speech Bubble Tail Apex',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the WhatsApp Speech Bubble Tail Apex mark.',
    insight: 'The curved tail of the speech bubble grounds the white telephone handset silhouette.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="#25D366" />
          </g>
          {showOfficial && (
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'signal-encrypted-bubble',
    name: 'Signal Encrypted Dialogue Arcs',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Signal Encrypted Dialogue Arcs mark.',
    insight: 'The rounded dialogue bubbles overlap with mathematically smoothed corner radii.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125" fill="#3B45FD" />
          </g>
          {showOfficial && (
            <path d="M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'tiktok-note-curves',
    name: 'TikTok Musical Note Curves',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the TikTok Musical Note Curves mark.',
    insight: 'The stylized lowercase d and note combines cyan and magenta offset anaglyph curves.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="#000000" />
          </g>
          {showOfficial && (
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'twitch-chat-glitch',
    name: 'Twitch Glitch Speech Box',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Twitch Glitch Speech Box mark.',
    insight: 'The stylized speech bubble with two square eyes was refined by R/GA in 2019.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" fill="#9146FF" />
          </g>
          {showOfficial && (
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'github-octocat-tentacles',
    name: 'GitHub Octocat Silhouette Arcs',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the GitHub Octocat Silhouette Arcs mark.',
    insight: 'Simon Oxley originally designed Octopuss in 2006, combining an octopus with five cat arms.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#181717" />
          </g>
          {showOfficial && (
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'gitlab-origami-fox',
    name: 'GitLab Origami Fox Vertices',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the GitLab Origami Fox Vertices mark.',
    insight: 'The stylized geometric fox head features origami folds balancing collaborative devops.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" fill="#FC6D26" />
          </g>
          {showOfficial && (
            <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'robinhood-feather-quill',
    name: 'Robinhood Feather Quill Apex',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Robinhood Feather Quill Apex mark.',
    insight: 'The minimalist green feather quill symbolizes democratizing financial market access.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M2.84 24h.53c.096 0 .192-.048.224-.128C7.591 13.696 11.94 8.656 14.67 5.638c.112-.128.064-.225-.096-.225h-4.88a.55.55 0 0 0-.45.225L5.746 9.972c-.514.642-.642 1.236-.642 2.086v4.43c-1.14 3.194-1.862 5.361-2.392 7.32-.032.125.016.192.129.192M20.447.646c-.754-.802-4.157-.834-5.73-.224a3 3 0 0 0-.786.465 41 41 0 0 0-3.323 3.178c-.112.113-.064.225.097.225h5.409c.497 0 .786.289.786.786v6.1c0 .16.128.208.225.064l3.258-4.254c.53-.69.69-.898.835-1.861.192-1.413.08-3.58-.77-4.479m-6.982 16.18 2.231-3.676a.7.7 0 0 0 .064-.29V6.73c0-.16-.112-.225-.224-.097-3.355 3.74-5.971 7.672-8.395 12.407-.06.12.016.225.16.177l5.009-1.54c.565-.174.882-.402 1.155-.852" fill="#CCFF00" />
          </g>
          {showOfficial && (
            <path d="M2.84 24h.53c.096 0 .192-.048.224-.128C7.591 13.696 11.94 8.656 14.67 5.638c.112-.128.064-.225-.096-.225h-4.88a.55.55 0 0 0-.45.225L5.746 9.972c-.514.642-.642 1.236-.642 2.086v4.43c-1.14 3.194-1.862 5.361-2.392 7.32-.032.125.016.192.129.192M20.447.646c-.754-.802-4.157-.834-5.73-.224a3 3 0 0 0-.786.465 41 41 0 0 0-3.323 3.178c-.112.113-.064.225.097.225h5.409c.497 0 .786.289.786.786v6.1c0 .16.128.208.225.064l3.258-4.254c.53-.69.69-.898.835-1.861.192-1.413.08-3.58-.77-4.479m-6.982 16.18 2.231-3.676a.7.7 0 0 0 .064-.29V6.73c0-.16-.112-.225-.224-.097-3.355 3.74-5.971 7.672-8.395 12.407-.06.12.016.225.16.177l5.009-1.54c.565-.174.882-.402 1.155-.852" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'medium-three-ellipses',
    name: 'Medium Elliptical Perspective',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Medium Elliptical Perspective mark.',
    insight: 'COLLINS created the three connected ellipses in 2020 representing thought progression.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z" fill="#000000" />
          </g>
          {showOfficial && (
            <path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'kickstarter-bubble-k',
    name: 'Kickstarter Plump Bubble K',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Kickstarter Plump Bubble K mark.',
    insight: 'Order engineered the friendly ultra-bold rounded letterforms to radiate creative optimism.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M7.168 0c-3.2 0-5.797 2.579-5.797 5.758v12.484C1.371 21.42 3.968 24 7.168 24c1.981 0 3.716-.978 4.768-2.479l.794.79c2.26 2.245 5.943 2.245 8.203 0a5.724 5.724 0 001.696-4.075 5.724 5.724 0 00-1.696-4.074l-2.182-2.168 2.182-2.156a5.724 5.724 0 001.696-4.074 5.724 5.724 0 00-1.696-4.074c-2.26-2.246-5.942-2.246-8.203 0l-.794.789A5.797 5.797 0 007.168 0Z" fill="#05CE78" />
          </g>
          {showOfficial && (
            <path d="M7.168 0c-3.2 0-5.797 2.579-5.797 5.758v12.484C1.371 21.42 3.968 24 7.168 24c1.981 0 3.716-.978 4.768-2.479l.794.79c2.26 2.245 5.943 2.245 8.203 0a5.724 5.724 0 001.696-4.075 5.724 5.724 0 00-1.696-4.074l-2.182-2.168 2.182-2.156a5.724 5.724 0 001.696-4.074 5.724 5.724 0 00-1.696-4.074c-2.26-2.246-5.942-2.246-8.203 0l-.794.789A5.797 5.797 0 007.168 0Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'slack-octothorpe-drops',
    name: 'Slack Hashtag Jellybean Drops',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Slack Hashtag Jellybean Drops mark.',
    insight: 'Pentagram replaced the original 11-color hashtag in 2019 with four speech drops and lozenges.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#4A154B" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'trello-board-columns',
    name: 'Trello Kanban Column Arcs',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Trello Kanban Column Arcs mark.',
    insight: 'Two white columns inside a rounded blue rectangle represent visual project workflow.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M21.147 0H2.853A2.86 2.86 0 000 2.853v18.294A2.86 2.86 0 002.853 24h18.294A2.86 2.86 0 0024 21.147V2.853A2.86 2.86 0 0021.147 0zM10.34 17.287a.953.953 0 01-.953.953h-4a.954.954 0 01-.954-.953V5.38a.953.953 0 01.954-.953h4a.954.954 0 01.953.953zm9.233-5.467a.944.944 0 01-.953.947h-4a.947.947 0 01-.953-.947V5.38a.953.953 0 01.953-.953h4a.954.954 0 01.953.953z" fill="#0052CC" />
          </g>
          {showOfficial && (
            <path d="M21.147 0H2.853A2.86 2.86 0 000 2.853v18.294A2.86 2.86 0 002.853 24h18.294A2.86 2.86 0 0024 21.147V2.853A2.86 2.86 0 0021.147 0zM10.34 17.287a.953.953 0 01-.953.953h-4a.954.954 0 01-.954-.953V5.38a.953.953 0 01.954-.953h4a.954.954 0 01.953.953zm9.233-5.467a.944.944 0 01-.953.947h-4a.947.947 0 01-.953-.947V5.38a.953.953 0 01.953-.953h4a.954.954 0 01.953.953z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'figma-five-lozenges',
    name: 'Figma Modular Geometric Primitives',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Figma Modular Geometric Primitives mark.',
    insight: 'Five modular geometric shapes (squares, circles, semi-circles) form the letter F.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" fill="#F24E1E" />
          </g>
          {showOfficial && (
            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'sketch-diamond-gem',
    name: 'Sketch Brilliant Diamond Facets',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Sketch Brilliant Diamond Facets mark.',
    insight: 'The gemstone emblem represents Mac design precision across calibrated triangular facets.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z" fill="#F7B500" />
          </g>
          {showOfficial && (
            <path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'canva-cursive-loop',
    name: 'Canva Fluid Script Loop',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Canva Fluid Script Loop mark.',
    insight: 'Type designer Gerry Leonidas engineered the flowing turquoise cursive ligature in 2021.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M12,0C5.371,0,0,5.371,0,12s5.371,12,12,12s12-5.371,12-12C24.011,5.371,18.629,0,12,0z M12.7,22.611 C6.837,22.611,2.089,17.863,2.089,12S6.837,1.389,12.7,1.389S23.311,6.137,23.311,12S18.563,22.611,12.7,22.611z M7.045,3.413 c-4.747,2.735-6.366,8.795-3.632,13.542c2.735,4.737,8.806,6.366,13.542,3.632c4.747-2.735,6.366-8.806,3.632-13.542 C17.852,2.297,11.792,0.678,7.045,3.413z M16.868,19.034c-4.08,2.352-9.287,0.952-11.639-3.118 c-2.352-4.08-0.952-9.287,3.118-11.639c4.08-2.352,9.287-0.952,11.639,3.118C22.337,11.464,20.948,16.682,16.868,19.034z M5.229,8.084c-2.166,3.741-0.875,8.532,2.866,10.687c3.741,2.166,8.532,0.875,10.698-2.866s0.875-8.532-2.866-10.687 C12.175,3.063,7.384,4.343,5.229,8.084z M18.071,14.702c-1.827,3.161-5.863,4.244-9.025,2.417 c-3.161-1.827-4.244-5.863-2.418-9.025s5.863-4.244,9.025-2.418C18.815,7.493,19.898,11.541,18.071,14.702z M6.093,12 c0,3.271,2.647,5.918,5.918,5.918s5.918-2.647,5.918-5.918s-2.647-5.918-5.918-5.918C8.74,6.082,6.093,8.729,6.093,12z M16.704,11.3c0,2.593-2.1,4.693-4.693,4.693s-4.693-2.1-4.693-4.693s2.1-4.693,4.693-4.693C14.593,6.607,16.704,8.707,16.704,11.3 z" fill="#F29400" />
          </g>
          {showOfficial && (
            <path d="M12,0C5.371,0,0,5.371,0,12s5.371,12,12,12s12-5.371,12-12C24.011,5.371,18.629,0,12,0z M12.7,22.611 C6.837,22.611,2.089,17.863,2.089,12S6.837,1.389,12.7,1.389S23.311,6.137,23.311,12S18.563,22.611,12.7,22.611z M7.045,3.413 c-4.747,2.735-6.366,8.795-3.632,13.542c2.735,4.737,8.806,6.366,13.542,3.632c4.747-2.735,6.366-8.806,3.632-13.542 C17.852,2.297,11.792,0.678,7.045,3.413z M16.868,19.034c-4.08,2.352-9.287,0.952-11.639-3.118 c-2.352-4.08-0.952-9.287,3.118-11.639c4.08-2.352,9.287-0.952,11.639,3.118C22.337,11.464,20.948,16.682,16.868,19.034z M5.229,8.084c-2.166,3.741-0.875,8.532,2.866,10.687c3.741,2.166,8.532,0.875,10.698-2.866s0.875-8.532-2.866-10.687 C12.175,3.063,7.384,4.343,5.229,8.084z M18.071,14.702c-1.827,3.161-5.863,4.244-9.025,2.417 c-3.161-1.827-4.244-5.863-2.418-9.025s5.863-4.244,9.025-2.418C18.815,7.493,19.898,11.541,18.071,14.702z M6.093,12 c0,3.271,2.647,5.918,5.918,5.918s5.918-2.647,5.918-5.918s-2.647-5.918-5.918-5.918C8.74,6.082,6.093,8.729,6.093,12z M16.704,11.3c0,2.593-2.1,4.693-4.693,4.693s-4.693-2.1-4.693-4.693s2.1-4.693,4.693-4.693C14.593,6.607,16.704,8.707,16.704,11.3 z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'adobe-creative-cloud',
    name: 'Adobe Cloud Infinite Loops',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Adobe Cloud Infinite Loops mark.',
    insight: 'The continuous ribbon loop forms a floating cloud silhouette in Adobe signature red.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M12,0C5.371,0,0,5.371,0,12s5.371,12,12,12s12-5.371,12-12C24.011,5.371,18.629,0,12,0z M12.7,22.611 C6.837,22.611,2.089,17.863,2.089,12S6.837,1.389,12.7,1.389S23.311,6.137,23.311,12S18.563,22.611,12.7,22.611z M7.045,3.413 c-4.747,2.735-6.366,8.795-3.632,13.542c2.735,4.737,8.806,6.366,13.542,3.632c4.747-2.735,6.366-8.806,3.632-13.542 C17.852,2.297,11.792,0.678,7.045,3.413z M16.868,19.034c-4.08,2.352-9.287,0.952-11.639-3.118 c-2.352-4.08-0.952-9.287,3.118-11.639c4.08-2.352,9.287-0.952,11.639,3.118C22.337,11.464,20.948,16.682,16.868,19.034z M5.229,8.084c-2.166,3.741-0.875,8.532,2.866,10.687c3.741,2.166,8.532,0.875,10.698-2.866s0.875-8.532-2.866-10.687 C12.175,3.063,7.384,4.343,5.229,8.084z M18.071,14.702c-1.827,3.161-5.863,4.244-9.025,2.417 c-3.161-1.827-4.244-5.863-2.418-9.025s5.863-4.244,9.025-2.418C18.815,7.493,19.898,11.541,18.071,14.702z M6.093,12 c0,3.271,2.647,5.918,5.918,5.918s5.918-2.647,5.918-5.918s-2.647-5.918-5.918-5.918C8.74,6.082,6.093,8.729,6.093,12z M16.704,11.3c0,2.593-2.1,4.693-4.693,4.693s-4.693-2.1-4.693-4.693s2.1-4.693,4.693-4.693C14.593,6.607,16.704,8.707,16.704,11.3 z" fill="#F29400" />
          </g>
          {showOfficial && (
            <path d="M12,0C5.371,0,0,5.371,0,12s5.371,12,12,12s12-5.371,12-12C24.011,5.371,18.629,0,12,0z M12.7,22.611 C6.837,22.611,2.089,17.863,2.089,12S6.837,1.389,12.7,1.389S23.311,6.137,23.311,12S18.563,22.611,12.7,22.611z M7.045,3.413 c-4.747,2.735-6.366,8.795-3.632,13.542c2.735,4.737,8.806,6.366,13.542,3.632c4.747-2.735,6.366-8.806,3.632-13.542 C17.852,2.297,11.792,0.678,7.045,3.413z M16.868,19.034c-4.08,2.352-9.287,0.952-11.639-3.118 c-2.352-4.08-0.952-9.287,3.118-11.639c4.08-2.352,9.287-0.952,11.639,3.118C22.337,11.464,20.948,16.682,16.868,19.034z M5.229,8.084c-2.166,3.741-0.875,8.532,2.866,10.687c3.741,2.166,8.532,0.875,10.698-2.866s0.875-8.532-2.866-10.687 C12.175,3.063,7.384,4.343,5.229,8.084z M18.071,14.702c-1.827,3.161-5.863,4.244-9.025,2.417 c-3.161-1.827-4.244-5.863-2.418-9.025s5.863-4.244,9.025-2.418C18.815,7.493,19.898,11.541,18.071,14.702z M6.093,12 c0,3.271,2.647,5.918,5.918,5.918s5.918-2.647,5.918-5.918s-2.647-5.918-5.918-5.918C8.74,6.082,6.093,8.729,6.093,12z M16.704,11.3c0,2.593-2.1,4.693-4.693,4.693s-4.693-2.1-4.693-4.693s2.1-4.693,4.693-4.693C14.593,6.607,16.704,8.707,16.704,11.3 z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'batman-insignia-scallops',
    name: 'Batman Batwing Scallop Arcs',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Batman Batwing Scallop Arcs mark.',
    insight: 'The scalloped wing drops and central apex head have struck fear into Gotham since 1939.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#000000" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'playstation-standing-p',
    name: 'PlayStation P & S Shadow Arch',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the PlayStation P & S Shadow Arch mark.',
    insight: 'Manabu Sakamoto designed the standing P casting a colorful RGB shadow of the letter S.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661 1.848.601 2.04 1.472 1.576 2.072-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073-1.939.331-3.996.196-6.038-.479z" fill="#0070D1" />
          </g>
          {showOfficial && (
            <path d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661 1.848.601 2.04 1.472 1.576 2.072-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073-1.939.331-3.996.196-6.038-.479z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nintendo-switch-joycon',
    name: 'Nintendo Switch Joy-Con Squircles',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Nintendo Switch Joy-Con Squircles mark.',
    insight: 'The red and blue Joy-Con controllers feature continuous super-ellipse corner curves.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#E60012" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'xbox-sphere-incision',
    name: 'Xbox Glowing Sphere X-Cuts',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Xbox Glowing Sphere X-Cuts mark.',
    insight: 'The 3D glowing sphere is carved by an aggressive glowing green X coordinate incision.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M19.29 1.007c-.697.036-1.367.384-2.008 1.036-.97.987-1.104 2.206-.679 3.316l-1.091-1.312c-.106.041-.306.203-.506.406-.572.596-.705 1.516-.558 2.125l-.734-.635-1.45 1.475 1.996 2.03c-1.583-1.326-3.007-1.259-4.323.082-1.331 1.353-1.252 3.006-.147 4.385l-.186-.189c-1.184-1.205-2.328-1.463-3.46-.298-.666.663-.772 1.314-.706 1.897l-2.794-2.83-1.625 1.651 5.372 5.48H0l3.312 3.37 3.282-3.34h3.128l-2.275-2.314c-.798-.8-1.039-1.354-.547-1.855.36-.379.773-.367 1.278.148l2.741 2.803 1.65-1.679-2.049-2.084c1.623 1.368 3.393 1.03 4.738-.351.706-.704 1.09-1.355 1.278-1.801l-1.452-.825a6.544 6.544 0 0 1-.878 1.218c-.799.812-1.543.812-2.048.392l2.94-2.992L17 12.25l1.65-1.678-1.782-1.815c-1.45-1.476-1.025-2.26-.691-2.599.212-.217.425-.378.572-.46a4.183 4.183 0 0 0 .797 1.096c1.728 1.774 3.62 1.53 5.07.042.865-.88 1.279-1.692 1.384-2.099l-1.424-.799a5.902 5.902 0 0 1-1.023 1.489c-.786.812-1.532.813-2.037.394l2.97-3.007-.374-.379C21.13 1.43 20.188.961 19.291 1.007zm-.055 1.918c.273-.002.558.113.838.35l-1.596 1.623c-.452-.527-.465-1.136 0-1.623.226-.23.485-.349.758-.35zm-7.357 7.486c.275-.002.564.113.85.35l-1.61 1.626c-.452-.528-.466-1.151 0-1.626.227-.23.486-.349.76-.35z" fill="#00AFAA" />
          </g>
          {showOfficial && (
            <path d="M19.29 1.007c-.697.036-1.367.384-2.008 1.036-.97.987-1.104 2.206-.679 3.316l-1.091-1.312c-.106.041-.306.203-.506.406-.572.596-.705 1.516-.558 2.125l-.734-.635-1.45 1.475 1.996 2.03c-1.583-1.326-3.007-1.259-4.323.082-1.331 1.353-1.252 3.006-.147 4.385l-.186-.189c-1.184-1.205-2.328-1.463-3.46-.298-.666.663-.772 1.314-.706 1.897l-2.794-2.83-1.625 1.651 5.372 5.48H0l3.312 3.37 3.282-3.34h3.128l-2.275-2.314c-.798-.8-1.039-1.354-.547-1.855.36-.379.773-.367 1.278.148l2.741 2.803 1.65-1.679-2.049-2.084c1.623 1.368 3.393 1.03 4.738-.351.706-.704 1.09-1.355 1.278-1.801l-1.452-.825a6.544 6.544 0 0 1-.878 1.218c-.799.812-1.543.812-2.048.392l2.94-2.992L17 12.25l1.65-1.678-1.782-1.815c-1.45-1.476-1.025-2.26-.691-2.599.212-.217.425-.378.572-.46a4.183 4.183 0 0 0 .797 1.096c1.728 1.774 3.62 1.53 5.07.042.865-.88 1.279-1.692 1.384-2.099l-1.424-.799a5.902 5.902 0 0 1-1.023 1.489c-.786.812-1.532.813-2.037.394l2.97-3.007-.374-.379C21.13 1.43 20.188.961 19.291 1.007zm-.055 1.918c.273-.002.558.113.838.35l-1.596 1.623c-.452-.527-.465-1.136 0-1.623.226-.23.485-.349.758-.35zm-7.357 7.486c.275-.002.564.113.85.35l-1.61 1.626c-.452-.528-.466-1.151 0-1.626.227-.23.486-.349.76-.35z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'sega-striped-letters',
    name: 'Sega Striped Conduit Curves',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Sega Striped Conduit Curves mark.',
    insight: 'The concentric white stripes running through the letters represent high-speed digital conduits.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M21.229 4.14l-.006 3.33h-10.6c-.219 0-.397.181-.397.399 0 .221.18.399.397.399l2.76-.016c4.346 0 7.868 3.525 7.868 7.869 0 4.348-3.522 7.869-7.869 7.869L2.748 24l.005-3.375h10.635c2.487 0 4.504-2.016 4.504-4.504 0-2.49-2.017-4.506-4.506-4.506l-2.771-.03c-2.06 0-3.727-1.666-3.727-3.72 0-2.061 1.666-3.726 3.723-3.726h10.618zM2.763 19.843l-.004-3.331h10.609c.21 0 .383-.175.383-.387 0-.213-.173-.385-.384-.385h-2.744c-4.345 0-7.867-3.525-7.867-7.871S6.278 0 10.623 0l10.6.003.006 3.35-10.604.003c-2.49 0-4.5 2.019-4.5 4.507 0 2.489 2.024 4.504 4.515 4.504l2.775.03c2.055 0 3.72 1.668 3.72 3.724 0 2.055-1.665 3.719-3.72 3.719H2.765l-.002.003z" fill="#0089CF" />
          </g>
          {showOfficial && (
            <path d="M21.229 4.14l-.006 3.33h-10.6c-.219 0-.397.181-.397.399 0 .221.18.399.397.399l2.76-.016c4.346 0 7.868 3.525 7.868 7.869 0 4.348-3.522 7.869-7.869 7.869L2.748 24l.005-3.375h10.635c2.487 0 4.504-2.016 4.504-4.504 0-2.49-2.017-4.506-4.506-4.506l-2.771-.03c-2.06 0-3.727-1.666-3.727-3.72 0-2.061 1.666-3.726 3.723-3.726h10.618zM2.763 19.843l-.004-3.331h10.609c.21 0 .383-.175.383-.387 0-.213-.173-.385-.384-.385h-2.744c-4.345 0-7.867-3.525-7.867-7.871S6.278 0 10.623 0l10.6.003.006 3.35-10.604.003c-2.49 0-4.5 2.019-4.5 4.507 0 2.489 2.024 4.504 4.515 4.504l2.775.03c2.055 0 3.72 1.668 3.72 3.724 0 2.055-1.665 3.719-3.72 3.719H2.765l-.002.003z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'capcom-chiseled-slab',
    name: 'Capcom Bold Chiseled Arches',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Capcom Bold Chiseled Arches mark.',
    insight: 'The blocky yellow letters outlined in deep blue represent Capsule Computers arcade punch.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#002B49" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'konami-flowing-ribbons',
    name: 'Konami Twin Wave Ribbons',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Konami Twin Wave Ribbons mark.',
    insight: 'The two flowing red ribbons symbolize forward momentum across entertainment software.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="m14.167 12.562.59-1.298a1.53 1.53 0 0 0 .062-.158h.012c.013.04.037.095.061.158l.575 1.298zm1.887 1.325h1.036l-1.635-3.537a.396.396 0 0 0-.359-.233h-.717c-.041 0-.041.04-.012.055.085.044.146.19.081.325l-1.582 3.39h.702l.39-.87h1.713zm-4.089-3.77v2.152c0 .107.004.174.008.269h-.008a6.068 6.068 0 0 0-.273-.348l-1.618-1.871c-.127-.147-.229-.202-.461-.202H8.79c-.037 0-.041.04-.013.055.123.056.22.123.22.345v3.37h.616v-2.425c0-.13-.004-.23-.008-.34h.008c.114.154.27.356.396.502l1.944 2.263h.322a.305.305 0 0 0 .306-.305v-3.465zm11.733 0h-.856c-.04 0-.045.04-.016.055.126.056.224.123.224.345v3.37H24v-3.465a.3.304 0 0 0-.302-.305m-1.386 3.77-.562-3.442a.401.401 0 0 0-.384-.328h-.53l-.921 2.144a1.866 1.866 0 0 0-.09.23h-.008a1.935 1.935 0 0 0-.081-.218l-.816-1.91a.401.401 0 0 0-.367-.246h-.807c-.04 0-.045.04-.016.055.11.048.192.131.155.34l-.55 3.375h.582l.367-2.382c.017-.118.041-.268.045-.344h.004c.037.1.086.218.139.34l1.015 2.386h.302l1.027-2.429c.057-.142.098-.245.126-.324h.004c.013.095.029.237.053.38l.38 2.373zm-16.205-.25c-.758 0-1.19-.739-1.19-1.59 0-.973.432-1.685 1.19-1.685s1.19.744 1.19 1.59c0 1.001-.432 1.686-1.19 1.686m0-3.66c-1.272 0-2.21.887-2.21 2.022 0 1.14.865 2.022 2.21 2.022 1.272 0 2.206-.883 2.206-2.022 0-1.135-.86-2.021-2.206-2.021M4.33 13.85c-.327-.07-.58-.225-.856-.506-.302-.309-1.387-1.586-1.387-1.586l1.729-1.642h-.934L1.305 11.66c-.07.067-.11.11-.147.154H1.15c.004-.051.004-.107.004-.158v-1.234a.3.304 0 0 0-.302-.305h-.82c-.036 0-.044.04-.012.055.123.056.22.123.22.345v3.37h.914V12.15c0-.047 0-.079-.004-.13h.008c.032.051.09.11.147.182 0 0 .962 1.131 1.064 1.238.407.427.978.578 1.957.483.053-.004.053-.06.004-.072" fill="#B60014" />
          </g>
          {showOfficial && (
            <path d="m14.167 12.562.59-1.298a1.53 1.53 0 0 0 .062-.158h.012c.013.04.037.095.061.158l.575 1.298zm1.887 1.325h1.036l-1.635-3.537a.396.396 0 0 0-.359-.233h-.717c-.041 0-.041.04-.012.055.085.044.146.19.081.325l-1.582 3.39h.702l.39-.87h1.713zm-4.089-3.77v2.152c0 .107.004.174.008.269h-.008a6.068 6.068 0 0 0-.273-.348l-1.618-1.871c-.127-.147-.229-.202-.461-.202H8.79c-.037 0-.041.04-.013.055.123.056.22.123.22.345v3.37h.616v-2.425c0-.13-.004-.23-.008-.34h.008c.114.154.27.356.396.502l1.944 2.263h.322a.305.305 0 0 0 .306-.305v-3.465zm11.733 0h-.856c-.04 0-.045.04-.016.055.126.056.224.123.224.345v3.37H24v-3.465a.3.304 0 0 0-.302-.305m-1.386 3.77-.562-3.442a.401.401 0 0 0-.384-.328h-.53l-.921 2.144a1.866 1.866 0 0 0-.09.23h-.008a1.935 1.935 0 0 0-.081-.218l-.816-1.91a.401.401 0 0 0-.367-.246h-.807c-.04 0-.045.04-.016.055.11.048.192.131.155.34l-.55 3.375h.582l.367-2.382c.017-.118.041-.268.045-.344h.004c.037.1.086.218.139.34l1.015 2.386h.302l1.027-2.429c.057-.142.098-.245.126-.324h.004c.013.095.029.237.053.38l.38 2.373zm-16.205-.25c-.758 0-1.19-.739-1.19-1.59 0-.973.432-1.685 1.19-1.685s1.19.744 1.19 1.59c0 1.001-.432 1.686-1.19 1.686m0-3.66c-1.272 0-2.21.887-2.21 2.022 0 1.14.865 2.022 2.21 2.022 1.272 0 2.206-.883 2.206-2.022 0-1.135-.86-2.021-2.206-2.021M4.33 13.85c-.327-.07-.58-.225-.856-.506-.302-.309-1.387-1.586-1.387-1.586l1.729-1.642h-.934L1.305 11.66c-.07.067-.11.11-.147.154H1.15c.004-.051.004-.107.004-.158v-1.234a.3.304 0 0 0-.302-.305h-.82c-.036 0-.044.04-.012.055.123.056.22.123.22.345v3.37h.914V12.15c0-.047 0-.079-.004-.13h.008c.032.051.09.11.147.182 0 0 .962 1.131 1.064 1.238.407.427.978.578 1.957.483.053-.004.053-.06.004-.072" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'bandai-namco-speech-bubble',
    name: 'Bandai Namco Spurt Dialogue',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Bandai Namco Spurt Dialogue mark.',
    insight: 'The magenta speech bubble conveys purposeful play and emotional connection with fans.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#FF0033" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'square-enix-bold-arch',
    name: 'Square Enix Monolithic Apex',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Square Enix Monolithic Apex mark.',
    insight: 'The bold serif lettering features sharp terminal apexes honoring Japanese RPG lineage.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M4.01 0A4.01 4.01 0 000 4.01v15.98c0 2.21 1.8 4 4.01 4.01h15.98C22.2 24 24 22.2 24 19.99V4A4.01 4.01 0 0019.99 0H4zm1.62 4.36h12.74c.7 0 1.26.57 1.26 1.27v12.74c0 .7-.56 1.27-1.26 1.27H5.63c-.7 0-1.26-.57-1.26-1.27V5.63a1.27 1.27 0 011.26-1.27zm3.83 4.35a.73.73 0 00-.73.73v5.09c0 .4.32.72.72.72h5.1a.73.73 0 00.73-.72V9.44a.73.73 0 00-.73-.73h-5.1Z" fill="#3E4348" />
          </g>
          {showOfficial && (
            <path d="M4.01 0A4.01 4.01 0 000 4.01v15.98c0 2.21 1.8 4 4.01 4.01h15.98C22.2 24 24 22.2 24 19.99V4A4.01 4.01 0 0019.99 0H4zm1.62 4.36h12.74c.7 0 1.26.57 1.26 1.27v12.74c0 .7-.56 1.27-1.26 1.27H5.63c-.7 0-1.26-.57-1.26-1.27V5.63a1.27 1.27 0 011.26-1.27zm3.83 4.35a.73.73 0 00-.73.73v5.09c0 .4.32.72.72.72h5.1a.73.73 0 00.73-.72V9.44a.73.73 0 00-.73-.73h-5.1Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ubisoft-swirl-dimension',
    name: 'Ubisoft Optical Swirl Vortex',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Ubisoft Optical Swirl Vortex mark.',
    insight: 'The black and white monoline swirl represents a portal opening into boundless game worlds.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M23.561 11.988C23.301-.304 6.954-4.89.656 6.634c.282.206.661.477.943.672a11.747 11.747 0 00-.976 3.067 11.885 11.885 0 00-.184 2.071C.439 18.818 5.621 24 12.005 24c6.385 0 11.556-5.17 11.556-11.556v-.455zm-20.27 2.06c-.152 1.246-.054 1.636-.054 1.788l-.282.098c-.108-.206-.37-.932-.488-1.908C2.163 10.308 4.7 6.96 8.57 6.33c3.544-.52 6.937 1.68 7.728 4.758l-.282.098c-.087-.087-.228-.336-.77-.878-4.281-4.281-11.002-2.32-11.956 3.74zm11.002 2.081a3.145 3.145 0 01-2.59 1.355 3.15 3.15 0 01-3.155-3.155 3.159 3.159 0 012.927-3.144c1.018-.043 1.972.51 2.416 1.398a2.58 2.58 0 01-.455 2.95c.293.205.575.4.856.595zm6.58.12c-1.669 3.782-5.106 5.766-8.77 5.712-7.034-.347-9.083-8.466-4.38-11.393l.207.206c-.076.108-.358.325-.791 1.182-.51 1.041-.672 2.081-.607 2.732.369 5.67 8.314 6.83 11.045 1.214C21.057 8.217 11.822.401 3.626 6.374l-.184-.184C5.599 2.808 9.816 1.3 13.837 2.309c6.147 1.55 9.453 7.956 7.035 13.94z" fill="#000000" />
          </g>
          {showOfficial && (
            <path d="M23.561 11.988C23.301-.304 6.954-4.89.656 6.634c.282.206.661.477.943.672a11.747 11.747 0 00-.976 3.067 11.885 11.885 0 00-.184 2.071C.439 18.818 5.621 24 12.005 24c6.385 0 11.556-5.17 11.556-11.556v-.455zm-20.27 2.06c-.152 1.246-.054 1.636-.054 1.788l-.282.098c-.108-.206-.37-.932-.488-1.908C2.163 10.308 4.7 6.96 8.57 6.33c3.544-.52 6.937 1.68 7.728 4.758l-.282.098c-.087-.087-.228-.336-.77-.878-4.281-4.281-11.002-2.32-11.956 3.74zm11.002 2.081a3.145 3.145 0 01-2.59 1.355 3.15 3.15 0 01-3.155-3.155 3.159 3.159 0 012.927-3.144c1.018-.043 1.972.51 2.416 1.398a2.58 2.58 0 01-.455 2.95c.293.205.575.4.856.595zm6.58.12c-1.669 3.782-5.106 5.766-8.77 5.712-7.034-.347-9.083-8.466-4.38-11.393l.207.206c-.076.108-.358.325-.791 1.182-.51 1.041-.672 2.081-.607 2.732.369 5.67 8.314 6.83 11.045 1.214C21.057 8.217 11.822.401 3.626 6.374l-.184-.184C5.599 2.808 9.816 1.3 13.837 2.309c6.147 1.55 9.453 7.956 7.035 13.94z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'blizzard-lightning-cuts',
    name: 'Blizzard Chiseled Ice Vertices',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Blizzard Chiseled Ice Vertices mark.',
    insight: 'The jagged, glacial letterforms evoke frozen winter storm winds tearing through ice.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
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
    id: 'electronic-arts-ea',
    name: 'Electronic Arts Geometric Monogram',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Electronic Arts Geometric Monogram mark.',
    insight: 'Originally square, triangle, and circle in 1982, refined into the high-tech EA monogram.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M12.0111 0c-.85 0-1.5392.6891-1.5392 1.5392 0 .8501.6891 1.5393 1.5392 1.5393.595 0 1.11-.338 1.3662-.832 2.2208 1.2675 3.847 5.4728 3.847 10.3623 0 2.0715-.2891 4.056-.825 5.7685a.3215.3215 0 0 0 .2107.403.322.322 0 0 0 .4033-.2111c.5558-1.7763.8542-3.8251.8542-5.9604 0-5.1927-1.7717-9.686-4.3206-11.0027.001-.0223.0035-.0443.0035-.0669 0-.85-.6891-1.5392-1.5393-1.5392zm0 .6432a.896.896 0 1 1 0 1.792.896.896 0 1 1 0-1.792zm-5.486 4.3052c-2.067.0074-3.6473.6646-4.3885 1.9485-.7375 1.2774-.5267 2.971.5113 4.7813a.3217.3217 0 0 0 .558-.32C2.271 9.7274 2.089 8.266 2.6938 7.2185c.821-1.422 3.033-1.9552 5.9321-1.4271a.3216.3216 0 0 0 .1153-.6329c-.784-.1428-1.5271-.2125-2.216-.21zm11.0522.0176a.3216.3216 0 0 0-.0084.6432c1.8337.0239 3.1556.5956 3.7502 1.6256.8192 1.419.1798 3.5947-1.7182 5.837a.322.322 0 0 0 .0377.4535.3215.3215 0 0 0 .4532-.0377c2.0535-2.426 2.7708-4.8661 1.7845-6.5744-.7257-1.257-2.26-1.9207-4.299-1.9472zm-2.6984.2924a.3225.3225 0 0 0-.0647.0072c-1.8568.3979-3.8333 1.1755-5.7314 2.2714-4.5699 2.6384-7.5924 6.4948-7.3601 9.3717-.4726.2628-.7928.7664-.7928 1.3455 0 .85.6892 1.5392 1.5393 1.5392.85 0 1.5392-.6891 1.5392-1.5392 0-.8501-.6891-1.5393-1.5392-1.5393-.038 0-.0754.003-.1128.0057-.1002-2.5597 2.7434-6.1412 7.048-8.6265 1.8413-1.063 3.7551-1.8163 5.5445-2.1997a.3217.3217 0 0 0-.07-.636zm-2.8787 6.2364a1.1192 1.1192 0 0 0-.2243.0255c-.6012.1301-.983.7225-.8533 1.3238.1302.6012.7226.9832 1.3238.8533.6012-.1302.9832-.7226.8533-1.3238-.1139-.526-.5816-.8844-1.0995-.8788zM4.532 13.341a.321.321 0 0 0-.2318.0835.3214.3214 0 0 0-.0214.4542c1.2682 1.3936 2.9157 2.701 4.7946 3.7857 4.4146 2.5489 9.1056 3.2849 11.5608 1.8392a1.53 1.53 0 0 0 .8966.2899c.8501 0 1.5392-.6891 1.5392-1.5392 0-.8501-.689-1.5393-1.5392-1.5393-.85 0-1.5392.6892-1.5392 1.5393 0 .276.0737.5344.201.7584-2.2448 1.214-6.631.5002-10.7976-1.9054-1.8228-1.0524-3.418-2.3181-4.6404-3.6614a.3206.3206 0 0 0-.2226-.1049zm-2.0628 4.0172a.896.896 0 1 1 0 1.792.896.896 0 1 1 0-1.792zm19.0616 0a.896.896 0 1 1 0 1.792.891.891 0 0 1-.5864-.2194c-.0025-.004-.0039-.0083-.0066-.0123a.3195.3195 0 0 0-.0957-.0914.896.896 0 0 1 .6887-1.4689zm-14.0045 1.368a.3215.3215 0 0 0-.3207.4296C8.2793 22.154 10.036 24 12.0111 24c1.4406 0 2.7735-.9822 3.8128-2.711a.3215.3215 0 0 0-.11-.4413.3219.3219 0 0 0-.4415.11c-.934 1.5537-2.0812 2.399-3.2613 2.399-1.6407 0-3.2075-1.6465-4.2-4.4179a.3216.3216 0 0 0-.2848-.2126z" fill="#47848F" />
          </g>
          {showOfficial && (
            <path d="M12.0111 0c-.85 0-1.5392.6891-1.5392 1.5392 0 .8501.6891 1.5393 1.5392 1.5393.595 0 1.11-.338 1.3662-.832 2.2208 1.2675 3.847 5.4728 3.847 10.3623 0 2.0715-.2891 4.056-.825 5.7685a.3215.3215 0 0 0 .2107.403.322.322 0 0 0 .4033-.2111c.5558-1.7763.8542-3.8251.8542-5.9604 0-5.1927-1.7717-9.686-4.3206-11.0027.001-.0223.0035-.0443.0035-.0669 0-.85-.6891-1.5392-1.5393-1.5392zm0 .6432a.896.896 0 1 1 0 1.792.896.896 0 1 1 0-1.792zm-5.486 4.3052c-2.067.0074-3.6473.6646-4.3885 1.9485-.7375 1.2774-.5267 2.971.5113 4.7813a.3217.3217 0 0 0 .558-.32C2.271 9.7274 2.089 8.266 2.6938 7.2185c.821-1.422 3.033-1.9552 5.9321-1.4271a.3216.3216 0 0 0 .1153-.6329c-.784-.1428-1.5271-.2125-2.216-.21zm11.0522.0176a.3216.3216 0 0 0-.0084.6432c1.8337.0239 3.1556.5956 3.7502 1.6256.8192 1.419.1798 3.5947-1.7182 5.837a.322.322 0 0 0 .0377.4535.3215.3215 0 0 0 .4532-.0377c2.0535-2.426 2.7708-4.8661 1.7845-6.5744-.7257-1.257-2.26-1.9207-4.299-1.9472zm-2.6984.2924a.3225.3225 0 0 0-.0647.0072c-1.8568.3979-3.8333 1.1755-5.7314 2.2714-4.5699 2.6384-7.5924 6.4948-7.3601 9.3717-.4726.2628-.7928.7664-.7928 1.3455 0 .85.6892 1.5392 1.5393 1.5392.85 0 1.5392-.6891 1.5392-1.5392 0-.8501-.6891-1.5393-1.5392-1.5393-.038 0-.0754.003-.1128.0057-.1002-2.5597 2.7434-6.1412 7.048-8.6265 1.8413-1.063 3.7551-1.8163 5.5445-2.1997a.3217.3217 0 0 0-.07-.636zm-2.8787 6.2364a1.1192 1.1192 0 0 0-.2243.0255c-.6012.1301-.983.7225-.8533 1.3238.1302.6012.7226.9832 1.3238.8533.6012-.1302.9832-.7226.8533-1.3238-.1139-.526-.5816-.8844-1.0995-.8788zM4.532 13.341a.321.321 0 0 0-.2318.0835.3214.3214 0 0 0-.0214.4542c1.2682 1.3936 2.9157 2.701 4.7946 3.7857 4.4146 2.5489 9.1056 3.2849 11.5608 1.8392a1.53 1.53 0 0 0 .8966.2899c.8501 0 1.5392-.6891 1.5392-1.5392 0-.8501-.689-1.5393-1.5392-1.5393-.85 0-1.5392.6892-1.5392 1.5393 0 .276.0737.5344.201.7584-2.2448 1.214-6.631.5002-10.7976-1.9054-1.8228-1.0524-3.418-2.3181-4.6404-3.6614a.3206.3206 0 0 0-.2226-.1049zm-2.0628 4.0172a.896.896 0 1 1 0 1.792.896.896 0 1 1 0-1.792zm19.0616 0a.896.896 0 1 1 0 1.792.891.891 0 0 1-.5864-.2194c-.0025-.004-.0039-.0083-.0066-.0123a.3195.3195 0 0 0-.0957-.0914.896.896 0 0 1 .6887-1.4689zm-14.0045 1.368a.3215.3215 0 0 0-.3207.4296C8.2793 22.154 10.036 24 12.0111 24c1.4406 0 2.7735-.9822 3.8128-2.711a.3215.3215 0 0 0-.11-.4413.3219.3219 0 0 0-.4415.11c-.934 1.5537-2.0812 2.399-3.2613 2.399-1.6407 0-3.2075-1.6465-4.2-4.4179a.3216.3216 0 0 0-.2848-.2126z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'valve-steam-piston',
    name: 'Valve Steam Crankshaft Linkage',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Valve Steam Crankshaft Linkage mark.',
    insight: 'The mechanical crank arm and rotating piston connection symbolizes industrial steam power.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M0 8.579v6.842h24V8.58zm1.8 1.415h.793l.776 3.044.76-3.044h.836l-1.227 4.029H3zm5.488 0h1.084l1.145 4.034h-.814l-.27-1.007H7.228s-.21.81-.254.99c-.242.017-.83 0-.83 0zm4.184 0h.792v3.352h1.69v.677h-2.482zm3.45 0h.816l.776 3.005.754-3.005h.815l-1.222 4.034h-.716zm4.828 0h1.69v.522h-1.084v.584h.99v.523h-.99v.6h1.084v.523h-1.69zm-11.902.68l-.426 1.702h.89z" fill="#F74843" />
          </g>
          {showOfficial && (
            <path d="M0 8.579v6.842h24V8.58zm1.8 1.415h.793l.776 3.044.76-3.044h.836l-1.227 4.029H3zm5.488 0h1.084l1.145 4.034h-.814l-.27-1.007H7.228s-.21.81-.254.99c-.242.017-.83 0-.83 0zm4.184 0h.792v3.352h1.69v.677h-2.482zm3.45 0h.816l.776 3.005.754-3.005h.815l-1.222 4.034h-.716zm4.828 0h1.69v.522h-1.084v.584h.99v.523h-.99v.6h1.084v.523h-1.69zm-11.902.68l-.426 1.702h.89z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'epic-games-shield',
    name: 'Epic Games Heraldic Armor Shield',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Epic Games Heraldic Armor Shield mark.',
    insight: 'The bold black crest with the letter E communicates Unreal Engine graphical authority.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M3.537 0C2.165 0 1.66.506 1.66 1.879V18.44a4.262 4.262 0 00.02.433c.031.3.037.59.316.92.027.033.311.245.311.245.153.075.258.13.43.2l8.335 3.491c.433.199.614.276.928.27h.002c.314.006.495-.071.928-.27l8.335-3.492c.172-.07.277-.124.43-.2 0 0 .284-.211.311-.243.28-.33.285-.621.316-.92a4.261 4.261 0 00.02-.434V1.879c0-1.373-.506-1.88-1.878-1.88zm13.366 3.11h.68c1.138 0 1.688.553 1.688 1.696v1.88h-1.374v-1.8c0-.369-.17-.54-.523-.54h-.235c-.367 0-.537.17-.537.539v5.81c0 .369.17.54.537.54h.262c.353 0 .523-.171.523-.54V8.619h1.373v2.143c0 1.144-.562 1.71-1.7 1.71h-.694c-1.138 0-1.7-.566-1.7-1.71V4.82c0-1.144.562-1.709 1.7-1.709zm-12.186.08h3.114v1.274H6.117v2.603h1.648v1.275H6.117v2.774h1.74v1.275h-3.14zm3.816 0h2.198c1.138 0 1.7.564 1.7 1.708v2.445c0 1.144-.562 1.71-1.7 1.71h-.799v3.338h-1.4zm4.53 0h1.4v9.201h-1.4zm-3.13 1.235v3.392h.575c.354 0 .523-.171.523-.54V4.965c0-.368-.17-.54-.523-.54zm-3.74 10.147a1.708 1.708 0 01.591.108 1.745 1.745 0 01.49.299l-.452.546a1.247 1.247 0 00-.308-.195.91.91 0 00-.363-.068.658.658 0 00-.28.06.703.703 0 00-.224.163.783.783 0 00-.151.243.799.799 0 00-.056.299v.008a.852.852 0 00.056.31.7.7 0 00.157.245.736.736 0 00.238.16.774.774 0 00.303.058.79.79 0 00.445-.116v-.339h-.548v-.565H7.37v1.255a2.019 2.019 0 01-.524.307 1.789 1.789 0 01-.683.123 1.642 1.642 0 01-.602-.107 1.46 1.46 0 01-.478-.3 1.371 1.371 0 01-.318-.455 1.438 1.438 0 01-.115-.58v-.008a1.426 1.426 0 01.113-.57 1.449 1.449 0 01.312-.46 1.418 1.418 0 01.474-.309 1.58 1.58 0 01.598-.111 1.708 1.708 0 01.045 0zm11.963.008a2.006 2.006 0 01.612.094 1.61 1.61 0 01.507.277l-.386.546a1.562 1.562 0 00-.39-.205 1.178 1.178 0 00-.388-.07.347.347 0 00-.208.052.154.154 0 00-.07.127v.008a.158.158 0 00.022.084.198.198 0 00.076.066.831.831 0 00.147.06c.062.02.14.04.236.061a3.389 3.389 0 01.43.122 1.292 1.292 0 01.328.17.678.678 0 01.207.24.739.739 0 01.071.337v.008a.865.865 0 01-.081.382.82.82 0 01-.229.285 1.032 1.032 0 01-.353.18 1.606 1.606 0 01-.46.061 2.16 2.16 0 01-.71-.116 1.718 1.718 0 01-.593-.346l.43-.514c.277.223.578.335.9.335a.457.457 0 00.236-.05.157.157 0 00.082-.142v-.008a.15.15 0 00-.02-.077.204.204 0 00-.073-.066.753.753 0 00-.143-.062 2.45 2.45 0 00-.233-.062 5.036 5.036 0 01-.413-.113 1.26 1.26 0 01-.331-.16.72.72 0 01-.222-.243.73.73 0 01-.082-.36v-.008a.863.863 0 01.074-.359.794.794 0 01.214-.283 1.007 1.007 0 01.34-.185 1.423 1.423 0 01.448-.066 2.006 2.006 0 01.025 0zm-9.358.025h.742l1.183 2.81h-.825l-.203-.499H8.623l-.198.498h-.81zm2.197.02h.814l.663 1.08.663-1.08h.814v2.79h-.766v-1.602l-.711 1.091h-.016l-.707-1.083v1.593h-.754zm3.469 0h2.235v.658h-1.473v.422h1.334v.61h-1.334v.442h1.493v.658h-2.255zm-5.3.897l-.315.793h.624zm-1.145 5.19h8.014l-4.09 1.348z" fill="#313131" />
          </g>
          {showOfficial && (
            <path d="M3.537 0C2.165 0 1.66.506 1.66 1.879V18.44a4.262 4.262 0 00.02.433c.031.3.037.59.316.92.027.033.311.245.311.245.153.075.258.13.43.2l8.335 3.491c.433.199.614.276.928.27h.002c.314.006.495-.071.928-.27l8.335-3.492c.172-.07.277-.124.43-.2 0 0 .284-.211.311-.243.28-.33.285-.621.316-.92a4.261 4.261 0 00.02-.434V1.879c0-1.373-.506-1.88-1.878-1.88zm13.366 3.11h.68c1.138 0 1.688.553 1.688 1.696v1.88h-1.374v-1.8c0-.369-.17-.54-.523-.54h-.235c-.367 0-.537.17-.537.539v5.81c0 .369.17.54.537.54h.262c.353 0 .523-.171.523-.54V8.619h1.373v2.143c0 1.144-.562 1.71-1.7 1.71h-.694c-1.138 0-1.7-.566-1.7-1.71V4.82c0-1.144.562-1.709 1.7-1.709zm-12.186.08h3.114v1.274H6.117v2.603h1.648v1.275H6.117v2.774h1.74v1.275h-3.14zm3.816 0h2.198c1.138 0 1.7.564 1.7 1.708v2.445c0 1.144-.562 1.71-1.7 1.71h-.799v3.338h-1.4zm4.53 0h1.4v9.201h-1.4zm-3.13 1.235v3.392h.575c.354 0 .523-.171.523-.54V4.965c0-.368-.17-.54-.523-.54zm-3.74 10.147a1.708 1.708 0 01.591.108 1.745 1.745 0 01.49.299l-.452.546a1.247 1.247 0 00-.308-.195.91.91 0 00-.363-.068.658.658 0 00-.28.06.703.703 0 00-.224.163.783.783 0 00-.151.243.799.799 0 00-.056.299v.008a.852.852 0 00.056.31.7.7 0 00.157.245.736.736 0 00.238.16.774.774 0 00.303.058.79.79 0 00.445-.116v-.339h-.548v-.565H7.37v1.255a2.019 2.019 0 01-.524.307 1.789 1.789 0 01-.683.123 1.642 1.642 0 01-.602-.107 1.46 1.46 0 01-.478-.3 1.371 1.371 0 01-.318-.455 1.438 1.438 0 01-.115-.58v-.008a1.426 1.426 0 01.113-.57 1.449 1.449 0 01.312-.46 1.418 1.418 0 01.474-.309 1.58 1.58 0 01.598-.111 1.708 1.708 0 01.045 0zm11.963.008a2.006 2.006 0 01.612.094 1.61 1.61 0 01.507.277l-.386.546a1.562 1.562 0 00-.39-.205 1.178 1.178 0 00-.388-.07.347.347 0 00-.208.052.154.154 0 00-.07.127v.008a.158.158 0 00.022.084.198.198 0 00.076.066.831.831 0 00.147.06c.062.02.14.04.236.061a3.389 3.389 0 01.43.122 1.292 1.292 0 01.328.17.678.678 0 01.207.24.739.739 0 01.071.337v.008a.865.865 0 01-.081.382.82.82 0 01-.229.285 1.032 1.032 0 01-.353.18 1.606 1.606 0 01-.46.061 2.16 2.16 0 01-.71-.116 1.718 1.718 0 01-.593-.346l.43-.514c.277.223.578.335.9.335a.457.457 0 00.236-.05.157.157 0 00.082-.142v-.008a.15.15 0 00-.02-.077.204.204 0 00-.073-.066.753.753 0 00-.143-.062 2.45 2.45 0 00-.233-.062 5.036 5.036 0 01-.413-.113 1.26 1.26 0 01-.331-.16.72.72 0 01-.222-.243.73.73 0 01-.082-.36v-.008a.863.863 0 01.074-.359.794.794 0 01.214-.283 1.007 1.007 0 01.34-.185 1.423 1.423 0 01.448-.066 2.006 2.006 0 01.025 0zm-9.358.025h.742l1.183 2.81h-.825l-.203-.499H8.623l-.198.498h-.81zm2.197.02h.814l.663 1.08.663-1.08h.814v2.79h-.766v-1.602l-.711 1.091h-.016l-.707-1.083v1.593h-.754zm3.469 0h2.235v.658h-1.473v.422h1.334v.61h-1.334v.442h1.493v.658h-2.255zm-5.3.897l-.315.793h.624zm-1.145 5.19h8.014l-4.09 1.348z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'unity-cube-arrows',
    name: 'Unity Tri-Directional 3D Cube',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Unity Tri-Directional 3D Cube mark.',
    insight: 'Three interlocking coordinate arrows converge into a central 3D cube vertex.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z" fill="#FFFFFF" />
          </g>
          {showOfficial && (
            <path d="m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'unreal-engine-u',
    name: 'Unreal Engine Circled U-Crest',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Unreal Engine Circled U-Crest mark.',
    insight: 'The sharp chiseled U is enclosed in a protective circular combat HUD display reticle.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M20.788 3.832c-.101-.105-.197-.213-.301-.317-.103-.103-.211-.202-.32-.302A11.903 11.903 0 0 0 12 0a11.926 11.926 0 0 0-8.486 3.514C-1.062 8.09-1.16 15.47 3.213 20.168c.099.108.197.214.3.32.104.103.21.2.317.3A11.92 11.92 0 0 0 12 24c3.206 0 6.22-1.247 8.487-3.512 4.576-4.576 4.673-11.956.301-16.656zm-16.655.301A11.057 11.057 0 0 1 12 .874c2.825 0 5.49 1.048 7.55 2.958l-1.001 1.002A9.646 9.646 0 0 0 12 2.292a9.644 9.644 0 0 0-6.865 2.844A9.644 9.644 0 0 0 2.292 12c0 2.448.9 4.753 2.542 6.549L3.831 19.55C-.201 15.191-.101 8.367 4.133 4.133zm13.798 1.318v.002l-1.015 1.014A7.346 7.346 0 0 0 12 4.589 7.357 7.357 0 0 0 6.761 6.76 7.362 7.362 0 0 0 4.589 12a7.34 7.34 0 0 0 1.877 4.913l-1.014 1.016A8.77 8.77 0 0 1 3.167 12a8.77 8.77 0 0 1 2.588-6.245A8.771 8.771 0 0 1 12 3.167c2.213 0 4.301.809 5.931 2.284zM18.537 12c0 1.745-.681 3.387-1.916 4.622S13.746 18.538 12 18.538a6.491 6.491 0 0 1-4.296-1.621l-.001-.004c-.11-.094-.22-.188-.324-.291a6.027 6.027 0 0 1-.293-.326A6.47 6.47 0 0 1 5.466 12c0-1.746.679-3.387 1.914-4.621A6.488 6.488 0 0 1 12 5.465c1.599 0 3.105.576 4.295 1.62.111.096.224.19.326.295.104.104.2.214.295.324A6.482 6.482 0 0 1 18.537 12zM7.084 17.534h.001A7.349 7.349 0 0 0 12 19.413a7.35 7.35 0 0 0 5.239-2.174A7.354 7.354 0 0 0 19.412 12a7.364 7.364 0 0 0-1.876-4.916l1.013-1.012A8.777 8.777 0 0 1 20.834 12a8.765 8.765 0 0 1-2.589 6.246A8.764 8.764 0 0 1 12 20.834a8.782 8.782 0 0 1-5.93-2.285l1.014-1.015zm12.783 2.333A11.046 11.046 0 0 1 12 23.125a11.042 11.042 0 0 1-7.551-2.957l1.004-1.001a9.64 9.64 0 0 0 6.549 2.542 9.639 9.639 0 0 0 6.865-2.846A9.642 9.642 0 0 0 21.71 12a9.64 9.64 0 0 0-2.543-6.548l1.001-1.002c4.031 4.359 3.935 11.182-.301 15.417z" fill="#8669AE" />
          </g>
          {showOfficial && (
            <path d="M20.788 3.832c-.101-.105-.197-.213-.301-.317-.103-.103-.211-.202-.32-.302A11.903 11.903 0 0 0 12 0a11.926 11.926 0 0 0-8.486 3.514C-1.062 8.09-1.16 15.47 3.213 20.168c.099.108.197.214.3.32.104.103.21.2.317.3A11.92 11.92 0 0 0 12 24c3.206 0 6.22-1.247 8.487-3.512 4.576-4.576 4.673-11.956.301-16.656zm-16.655.301A11.057 11.057 0 0 1 12 .874c2.825 0 5.49 1.048 7.55 2.958l-1.001 1.002A9.646 9.646 0 0 0 12 2.292a9.644 9.644 0 0 0-6.865 2.844A9.644 9.644 0 0 0 2.292 12c0 2.448.9 4.753 2.542 6.549L3.831 19.55C-.201 15.191-.101 8.367 4.133 4.133zm13.798 1.318v.002l-1.015 1.014A7.346 7.346 0 0 0 12 4.589 7.357 7.357 0 0 0 6.761 6.76 7.362 7.362 0 0 0 4.589 12a7.34 7.34 0 0 0 1.877 4.913l-1.014 1.016A8.77 8.77 0 0 1 3.167 12a8.77 8.77 0 0 1 2.588-6.245A8.771 8.771 0 0 1 12 3.167c2.213 0 4.301.809 5.931 2.284zM18.537 12c0 1.745-.681 3.387-1.916 4.622S13.746 18.538 12 18.538a6.491 6.491 0 0 1-4.296-1.621l-.001-.004c-.11-.094-.22-.188-.324-.291a6.027 6.027 0 0 1-.293-.326A6.47 6.47 0 0 1 5.466 12c0-1.746.679-3.387 1.914-4.621A6.488 6.488 0 0 1 12 5.465c1.599 0 3.105.576 4.295 1.62.111.096.224.19.326.295.104.104.2.214.295.324A6.482 6.482 0 0 1 18.537 12zM7.084 17.534h.001A7.349 7.349 0 0 0 12 19.413a7.35 7.35 0 0 0 5.239-2.174A7.354 7.354 0 0 0 19.412 12a7.364 7.364 0 0 0-1.876-4.916l1.013-1.012A8.777 8.777 0 0 1 20.834 12a8.765 8.765 0 0 1-2.589 6.246A8.764 8.764 0 0 1 12 20.834a8.782 8.782 0 0 1-5.93-2.285l1.014-1.015zm12.783 2.333A11.046 11.046 0 0 1 12 23.125a11.042 11.042 0 0 1-7.551-2.957l1.004-1.001a9.64 9.64 0 0 0 6.549 2.542 9.639 9.639 0 0 0 6.865-2.846A9.642 9.642 0 0 0 21.71 12a9.64 9.64 0 0 0-2.543-6.548l1.001-1.002c4.031 4.359 3.935 11.182-.301 15.417z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'pokemon-pokeball-half',
    name: 'Pokémon Poké Ball Dividing Arch',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Pokémon Poké Ball Dividing Arch mark.',
    insight: 'The red top and white bottom hemispheres are locked by a central circular release button.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#EE1515" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'super-mario-m-cap',
    name: 'Super Mario M Cap Emblem',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Super Mario M Cap Emblem mark.',
    insight: 'The red semi-circular cap patch houses the white circular disc and bold red M.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#E52521" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'tesla-stator-t',
    name: 'Tesla Stator Cross-Section T',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Tesla Stator Cross-Section T mark.',
    insight: 'Franz von Holzhausen confirmed the T represents the cross-section of an electric motor stator.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z" fill="#CC0000" />
          </g>
          {showOfficial && (
            <path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'gateway-cow-cube',
    name: 'Gateway 2000 Holstein Cow Cube',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Gateway 2000 Holstein Cow Cube mark.',
    insight: 'Ted Waitt shipped computers in black-and-white spotted boxes honoring Midwestern farms.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#008542" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'corvette-crossed-flags',
    name: 'Corvette Crossed Flags Apex',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Corvette Crossed Flags Apex mark.',
    insight: 'The checkered racing flag crosses with the French fleur-de-lis and Chevrolet bowtie.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M9.83,7.59C10.647,7.595 11.267,7.828 11.672,8.282C12.055,8.713 12.239,9.336 12.219,10.132L12.205,10.193C12.197,10.211 12.185,10.229 12.17,10.243C12.14,10.272 12.099,10.288 12.057,10.288L10.398,10.288C10.29,10.288 10.199,10.2 10.199,10.093C10.199,9.669 10.071,9.435 9.809,9.383L9.689,9.372C9.347,9.372 9.125,9.583 9.119,9.951C9.112,10.361 9.344,10.734 10.004,11.374C10.872,12.19 11.221,12.913 11.204,13.867C11.177,15.411 10.127,16.41 8.531,16.41C7.716,16.41 7.093,16.191 6.678,15.761C6.258,15.324 6.066,14.683 6.106,13.855C6.108,13.813 6.125,13.772 6.155,13.743C6.185,13.714 6.226,13.698 6.267,13.698L7.983,13.698C8.007,13.699 8.03,13.705 8.052,13.715C8.073,13.726 8.092,13.741 8.107,13.76C8.12,13.775 8.129,13.793 8.135,13.813C8.14,13.832 8.141,13.853 8.137,13.873C8.118,14.171 8.171,14.394 8.288,14.518C8.363,14.598 8.469,14.639 8.599,14.639C8.916,14.639 9.102,14.414 9.109,14.024C9.115,13.687 9.007,13.39 8.427,12.792C7.676,12.058 7.003,11.3 7.024,10.108C7.037,9.416 7.311,8.784 7.798,8.327C8.312,7.845 9.014,7.59 9.83,7.59ZM4.047,7.618C4.794,7.612 5.381,7.842 5.789,8.303C6.221,8.79 6.44,9.524 6.441,10.485C6.44,10.527 6.422,10.567 6.392,10.597C6.362,10.626 6.322,10.643 6.28,10.643L4.479,10.643C4.448,10.642 4.417,10.629 4.395,10.607C4.373,10.584 4.361,10.553 4.36,10.522C4.346,9.899 4.172,9.576 3.828,9.538L3.757,9.534C3.067,9.535 2.66,10.472 2.444,10.992C2.142,11.719 1.988,12.507 2.018,13.293C2.033,13.659 2.092,14.173 2.438,14.386C2.746,14.575 3.185,14.45 3.451,14.24C3.716,14.031 3.93,13.669 4.02,13.339C4.033,13.293 4.033,13.258 4.021,13.241C4.015,13.233 4.003,13.229 3.989,13.226L3.485,13.222C3.461,13.222 3.436,13.216 3.414,13.206C3.392,13.196 3.372,13.181 3.356,13.162C3.344,13.148 3.335,13.13 3.331,13.112C3.327,13.093 3.327,13.074 3.331,13.056L3.647,11.682C3.663,11.611 3.726,11.558 3.804,11.548L3.804,11.545L6.839,11.545C6.846,11.545 6.854,11.545 6.86,11.546C6.939,11.556 6.995,11.63 6.994,11.71L6.994,11.714L6.678,13.085C6.661,13.163 6.583,13.22 6.494,13.22L6.113,13.22C6.1,13.22 6.086,13.225 6.075,13.233C6.064,13.241 6.056,13.253 6.052,13.266C5.7,14.46 5.223,15.282 4.594,15.775C4.058,16.195 3.399,16.391 2.517,16.391C1.725,16.391 1.191,16.136 0.738,15.633C0.14,14.967 -0.107,13.879 0.043,12.566C0.313,10.103 1.589,7.618 4.047,7.618ZM21.016,7.75C23.026,7.75 24.03,8.662 23.999,10.461C23.962,12.569 22.678,14.119 20.745,14.477C20.47,14.527 20.191,14.547 19.912,14.545L18.978,14.541C18.963,14.541 18.948,14.547 18.937,14.558C18.926,14.568 18.92,14.583 18.92,14.598C18.92,14.608 18.922,14.618 18.928,14.627C18.933,14.636 18.941,14.643 18.95,14.648L19.744,15.062C19.809,15.096 19.835,15.153 19.82,15.226C19.815,15.249 19.618,16.139 19.613,16.159C19.596,16.237 19.533,16.282 19.442,16.282L17.739,16.282C17.715,16.282 17.69,16.277 17.668,16.267C17.646,16.257 17.626,16.241 17.61,16.223C17.598,16.208 17.589,16.191 17.585,16.173C17.58,16.155 17.581,16.135 17.585,16.116L19.481,7.875C19.5,7.789 19.581,7.751 19.653,7.751L21.016,7.75ZM17.273,7.762C17.292,7.77 17.31,7.781 17.324,7.795C17.338,7.81 17.351,7.828 17.358,7.847C17.366,7.866 17.369,7.886 17.369,7.906L17.358,16.119C17.361,16.138 17.36,16.158 17.355,16.177C17.35,16.196 17.34,16.213 17.328,16.228C17.313,16.245 17.295,16.259 17.274,16.268C17.254,16.277 17.232,16.282 17.21,16.281L15.397,16.281C15.377,16.282 15.356,16.277 15.337,16.27C15.318,16.262 15.3,16.25 15.286,16.236C15.272,16.221 15.26,16.204 15.253,16.185C15.245,16.166 15.241,16.146 15.241,16.125L15.28,15.328C15.282,15.241 15.28,15.217 15.229,15.211L15.161,15.209L13.447,15.209C13.323,15.209 13.314,15.22 13.27,15.334L12.914,16.191C12.882,16.252 12.818,16.281 12.722,16.281L10.927,16.281C10.818,16.281 10.74,16.173 10.781,16.072L14.499,7.873C14.524,7.824 14.562,7.75 14.648,7.75L17.214,7.75C17.234,7.75 17.254,7.754 17.273,7.762ZM15.5,9.985C15.492,9.953 15.466,9.956 15.445,9.998C15.43,10.028 15.416,10.06 15.405,10.091L14.121,13.274C14.114,13.294 14.109,13.31 14.105,13.322C14.104,13.328 14.103,13.335 14.104,13.341C14.105,13.347 14.108,13.353 14.111,13.358C14.115,13.363 14.12,13.367 14.126,13.37C14.131,13.373 14.137,13.376 14.143,13.376L15.215,13.39C15.334,13.38 15.34,13.374 15.352,13.253C15.354,13.21 15.506,10.022 15.5,9.985ZM20.112,9.582C20.097,9.582 20.083,9.588 20.072,9.599C20.061,9.609 20.055,9.624 20.054,9.639C20.054,9.649 20.057,9.659 20.062,9.668C20.068,9.677 20.075,9.685 20.084,9.69C20.097,9.697 20.869,10.104 20.926,10.135C20.968,10.158 20.969,10.198 20.955,10.267C20.948,10.298 20.415,12.642 20.416,12.644C20.419,12.647 20.435,12.655 20.515,12.655L20.551,12.655C21.446,12.619 21.934,11.561 21.952,10.534C21.961,9.979 21.772,9.638 21.429,9.588L21.358,9.582L20.112,9.582Z" fill="#0AE448" />
          </g>
          {showOfficial && (
            <path d="M9.83,7.59C10.647,7.595 11.267,7.828 11.672,8.282C12.055,8.713 12.239,9.336 12.219,10.132L12.205,10.193C12.197,10.211 12.185,10.229 12.17,10.243C12.14,10.272 12.099,10.288 12.057,10.288L10.398,10.288C10.29,10.288 10.199,10.2 10.199,10.093C10.199,9.669 10.071,9.435 9.809,9.383L9.689,9.372C9.347,9.372 9.125,9.583 9.119,9.951C9.112,10.361 9.344,10.734 10.004,11.374C10.872,12.19 11.221,12.913 11.204,13.867C11.177,15.411 10.127,16.41 8.531,16.41C7.716,16.41 7.093,16.191 6.678,15.761C6.258,15.324 6.066,14.683 6.106,13.855C6.108,13.813 6.125,13.772 6.155,13.743C6.185,13.714 6.226,13.698 6.267,13.698L7.983,13.698C8.007,13.699 8.03,13.705 8.052,13.715C8.073,13.726 8.092,13.741 8.107,13.76C8.12,13.775 8.129,13.793 8.135,13.813C8.14,13.832 8.141,13.853 8.137,13.873C8.118,14.171 8.171,14.394 8.288,14.518C8.363,14.598 8.469,14.639 8.599,14.639C8.916,14.639 9.102,14.414 9.109,14.024C9.115,13.687 9.007,13.39 8.427,12.792C7.676,12.058 7.003,11.3 7.024,10.108C7.037,9.416 7.311,8.784 7.798,8.327C8.312,7.845 9.014,7.59 9.83,7.59ZM4.047,7.618C4.794,7.612 5.381,7.842 5.789,8.303C6.221,8.79 6.44,9.524 6.441,10.485C6.44,10.527 6.422,10.567 6.392,10.597C6.362,10.626 6.322,10.643 6.28,10.643L4.479,10.643C4.448,10.642 4.417,10.629 4.395,10.607C4.373,10.584 4.361,10.553 4.36,10.522C4.346,9.899 4.172,9.576 3.828,9.538L3.757,9.534C3.067,9.535 2.66,10.472 2.444,10.992C2.142,11.719 1.988,12.507 2.018,13.293C2.033,13.659 2.092,14.173 2.438,14.386C2.746,14.575 3.185,14.45 3.451,14.24C3.716,14.031 3.93,13.669 4.02,13.339C4.033,13.293 4.033,13.258 4.021,13.241C4.015,13.233 4.003,13.229 3.989,13.226L3.485,13.222C3.461,13.222 3.436,13.216 3.414,13.206C3.392,13.196 3.372,13.181 3.356,13.162C3.344,13.148 3.335,13.13 3.331,13.112C3.327,13.093 3.327,13.074 3.331,13.056L3.647,11.682C3.663,11.611 3.726,11.558 3.804,11.548L3.804,11.545L6.839,11.545C6.846,11.545 6.854,11.545 6.86,11.546C6.939,11.556 6.995,11.63 6.994,11.71L6.994,11.714L6.678,13.085C6.661,13.163 6.583,13.22 6.494,13.22L6.113,13.22C6.1,13.22 6.086,13.225 6.075,13.233C6.064,13.241 6.056,13.253 6.052,13.266C5.7,14.46 5.223,15.282 4.594,15.775C4.058,16.195 3.399,16.391 2.517,16.391C1.725,16.391 1.191,16.136 0.738,15.633C0.14,14.967 -0.107,13.879 0.043,12.566C0.313,10.103 1.589,7.618 4.047,7.618ZM21.016,7.75C23.026,7.75 24.03,8.662 23.999,10.461C23.962,12.569 22.678,14.119 20.745,14.477C20.47,14.527 20.191,14.547 19.912,14.545L18.978,14.541C18.963,14.541 18.948,14.547 18.937,14.558C18.926,14.568 18.92,14.583 18.92,14.598C18.92,14.608 18.922,14.618 18.928,14.627C18.933,14.636 18.941,14.643 18.95,14.648L19.744,15.062C19.809,15.096 19.835,15.153 19.82,15.226C19.815,15.249 19.618,16.139 19.613,16.159C19.596,16.237 19.533,16.282 19.442,16.282L17.739,16.282C17.715,16.282 17.69,16.277 17.668,16.267C17.646,16.257 17.626,16.241 17.61,16.223C17.598,16.208 17.589,16.191 17.585,16.173C17.58,16.155 17.581,16.135 17.585,16.116L19.481,7.875C19.5,7.789 19.581,7.751 19.653,7.751L21.016,7.75ZM17.273,7.762C17.292,7.77 17.31,7.781 17.324,7.795C17.338,7.81 17.351,7.828 17.358,7.847C17.366,7.866 17.369,7.886 17.369,7.906L17.358,16.119C17.361,16.138 17.36,16.158 17.355,16.177C17.35,16.196 17.34,16.213 17.328,16.228C17.313,16.245 17.295,16.259 17.274,16.268C17.254,16.277 17.232,16.282 17.21,16.281L15.397,16.281C15.377,16.282 15.356,16.277 15.337,16.27C15.318,16.262 15.3,16.25 15.286,16.236C15.272,16.221 15.26,16.204 15.253,16.185C15.245,16.166 15.241,16.146 15.241,16.125L15.28,15.328C15.282,15.241 15.28,15.217 15.229,15.211L15.161,15.209L13.447,15.209C13.323,15.209 13.314,15.22 13.27,15.334L12.914,16.191C12.882,16.252 12.818,16.281 12.722,16.281L10.927,16.281C10.818,16.281 10.74,16.173 10.781,16.072L14.499,7.873C14.524,7.824 14.562,7.75 14.648,7.75L17.214,7.75C17.234,7.75 17.254,7.754 17.273,7.762ZM15.5,9.985C15.492,9.953 15.466,9.956 15.445,9.998C15.43,10.028 15.416,10.06 15.405,10.091L14.121,13.274C14.114,13.294 14.109,13.31 14.105,13.322C14.104,13.328 14.103,13.335 14.104,13.341C14.105,13.347 14.108,13.353 14.111,13.358C14.115,13.363 14.12,13.367 14.126,13.37C14.131,13.373 14.137,13.376 14.143,13.376L15.215,13.39C15.334,13.38 15.34,13.374 15.352,13.253C15.354,13.21 15.506,10.022 15.5,9.985ZM20.112,9.582C20.097,9.582 20.083,9.588 20.072,9.599C20.061,9.609 20.055,9.624 20.054,9.639C20.054,9.649 20.057,9.659 20.062,9.668C20.068,9.677 20.075,9.685 20.084,9.69C20.097,9.697 20.869,10.104 20.926,10.135C20.968,10.158 20.969,10.198 20.955,10.267C20.948,10.298 20.415,12.642 20.416,12.644C20.419,12.647 20.435,12.655 20.515,12.655L20.551,12.655C21.446,12.619 21.934,11.561 21.952,10.534C21.961,9.979 21.772,9.638 21.429,9.588L21.358,9.582L20.112,9.582Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'dodge-viper-fangs',
    name: 'Dodge Viper Fanged Serpent Head',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Dodge Viper Fanged Serpent Head mark.',
    insight: 'Sneaky Pete and Fangs sculpted the coiled venomous viper head on 10-cylinder sports cars.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#CC0000" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'delorean-gullwing-arch',
    name: 'DeLorean Gull-Wing Door Apex',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the DeLorean Gull-Wing Door Apex mark.',
    insight: 'The parabolic curve traced by the raised stainless steel gull-wing doors against the sky.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#C0C0C0" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'saturn-planetary-rings',
    name: 'Saturn Planetary Rings Horizon',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Saturn Planetary Rings Horizon mark.',
    insight: 'The silver ring arcs across the red square horizon, symbolizing General Motors new planet.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M19.039 11.459c.001.015.022.244.03.407.006.113 0 .29 0 .3.003 0 .029.023.03.024 1.428 1.17 2.943 2.767 3.204 3.94.073.325.056.618-.072.868-.152.293-.439.503-.834.638-2.046.7-6.925-.642-10.907-2.609-2.845-1.406-5.342-3.081-7.032-4.719-1.57-1.523-1.995-2.71-1.59-3.427.155-.271.42-.472.776-.609 1.299-.507 3.788-.152 6.239.579-1.16.866-1.968 2.034-2.342 3.202l-.001.007a.051.051 0 0 1-.001.006c-.115 1.07 1.434 2.47 3 3.25-.002-.006.084.032.084.026-.002-.006-.015-.109-.017-.113-.366-2.66 1.648-6.64 3.765-7.513.136-.056.254-.09.27-.095l-.273-.027c-.074-.006-.148-.013-.228-.015a7.464 7.464 0 0 0-.272-.01 6.443 6.443 0 0 0-3.4.892C5.378 5.057 2.383 4.892 1.13 5.31c-.497.167-.833.418-1 .751-.174.35-.175.79-.002 1.306.57 1.704 3.058 4.032 6.211 6.099.457 2.407 2.615 4.875 5.703 5.204l.142.015a.278.278 0 0 1 .05 0 6.618 6.618 0 0 0-.173-.132c-.955-.736-1.813-1.949-2.107-3l.185.093.143.07c4.985 2.465 10.215 3.72 12.53 2.947.519-.174.9-.418 1.075-.768.167-.335.139-.78-.029-1.278-.436-1.3-2.304-3.284-4.675-5.052a5.003 5.003 0 0 0-.145-.107" fill="#EB680B" />
          </g>
          {showOfficial && (
            <path d="M19.039 11.459c.001.015.022.244.03.407.006.113 0 .29 0 .3.003 0 .029.023.03.024 1.428 1.17 2.943 2.767 3.204 3.94.073.325.056.618-.072.868-.152.293-.439.503-.834.638-2.046.7-6.925-.642-10.907-2.609-2.845-1.406-5.342-3.081-7.032-4.719-1.57-1.523-1.995-2.71-1.59-3.427.155-.271.42-.472.776-.609 1.299-.507 3.788-.152 6.239.579-1.16.866-1.968 2.034-2.342 3.202l-.001.007a.051.051 0 0 1-.001.006c-.115 1.07 1.434 2.47 3 3.25-.002-.006.084.032.084.026-.002-.006-.015-.109-.017-.113-.366-2.66 1.648-6.64 3.765-7.513.136-.056.254-.09.27-.095l-.273-.027c-.074-.006-.148-.013-.228-.015a7.464 7.464 0 0 0-.272-.01 6.443 6.443 0 0 0-3.4.892C5.378 5.057 2.383 4.892 1.13 5.31c-.497.167-.833.418-1 .751-.174.35-.175.79-.002 1.306.57 1.704 3.058 4.032 6.211 6.099.457 2.407 2.615 4.875 5.703 5.204l.142.015a.278.278 0 0 1 .05 0 6.618 6.618 0 0 0-.173-.132c-.955-.736-1.813-1.949-2.107-3l.185.093.143.07c4.985 2.465 10.215 3.72 12.53 2.947.519-.174.9-.418 1.075-.768.167-.335.139-.78-.029-1.278-.436-1.3-2.304-3.284-4.675-5.052a5.003 5.003 0 0 0-.145-.107" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'plymouth-mayflower-sails',
    name: 'Plymouth Mayflower Billowing Sails',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Plymouth Mayflower Billowing Sails mark.',
    insight: 'The historic pilgrim ship Mayflower billows under full sail in classic chrome hood ornaments.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="m18.938 5.31-.647-2.263-1.094-.28-.062-1.11L15.318.514l-1.036.274-.69-.788h-2.175l-.619.788L9.751.372l-1.754.764L7.61 2.22l-1.347.067-1.066 2.325.68 1.125-.63.96.29 2.03 1.251.415.012 1.302 1.937 1.119.908-.284.66.816v4.973H9.24v-.578H7.037v1.162H9.23v.579h1.075v3.517H5.062v1.162H7.42V24h6.929v-1.09h2.262v-1.162h-5.147v-4.626h1.624v-.927h-1.624v-4.097h1.286l.76-.74.84.336 2.098-.76.202-1.238 1.266-.13.83-2.043-.535-1.166Zm-1.453 2.243-.377.928-1.455.15-.237 1.442-1.045.377-1.128-.452-.963.937h-1.42l-.808-1-1.176.367-.921-.532L7.94 8.3l-1.356-.448-.126-.88.792-1.208-.742-1.227.515-1.124 1.42-.071.477-1.34.852-.372 1.403.558.806-1.027h1.082l.818.934 1.244-.329.881.554.077 1.36 1.274.326.31 1.09-.789 1.143zm-1.615 7.476h-2.783v1.163h2.783zM11.04 3.715l-1.036 1.038v1.87l1.049 1.037 2.975-.035 1.02-1.01.046-1.834-1.037-1.066Zm2.86 2.403-.354.349-2.023.024-.36-.356v-.903l.357-.357h2.047l.354.364z" fill="#F2B705" />
          </g>
          {showOfficial && (
            <path d="m18.938 5.31-.647-2.263-1.094-.28-.062-1.11L15.318.514l-1.036.274-.69-.788h-2.175l-.619.788L9.751.372l-1.754.764L7.61 2.22l-1.347.067-1.066 2.325.68 1.125-.63.96.29 2.03 1.251.415.012 1.302 1.937 1.119.908-.284.66.816v4.973H9.24v-.578H7.037v1.162H9.23v.579h1.075v3.517H5.062v1.162H7.42V24h6.929v-1.09h2.262v-1.162h-5.147v-4.626h1.624v-.927h-1.624v-4.097h1.286l.76-.74.84.336 2.098-.76.202-1.238 1.266-.13.83-2.043-.535-1.166Zm-1.453 2.243-.377.928-1.455.15-.237 1.442-1.045.377-1.128-.452-.963.937h-1.42l-.808-1-1.176.367-.921-.532L7.94 8.3l-1.356-.448-.126-.88.792-1.208-.742-1.227.515-1.124 1.42-.071.477-1.34.852-.372 1.403.558.806-1.027h1.082l.818.934 1.244-.329.881.554.077 1.36 1.274.326.31 1.09-.789 1.143zm-1.615 7.476h-2.783v1.163h2.783zM11.04 3.715l-1.036 1.038v1.87l1.049 1.037 2.975-.035 1.02-1.01.046-1.834-1.037-1.066Zm2.86 2.403-.354.349-2.023.024-.36-.356v-.903l.357-.357h2.047l.354.364z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'oldsmobile-rocket-apex',
    name: 'Oldsmobile Rocket Flying Through Oval',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Oldsmobile Rocket Flying Through Oval mark.',
    insight: 'The chrome rocket pierces horizontally through the red oval frame in 1950s atomic futurism.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M23.735.238V.236a.248.248 0 0 0-.2-.188c-.256-.04-6.336-.924-14.17 7.051a28.44 28.44 0 0 0-2.12 2.576l-4.047 1.166a.246.246 0 0 0-.124.08l-2.856 3.5a.248.248 0 0 0 .126.394l3.887 1.096.484-.566c.178-.208.37-.4.574-.58l.54-.472-.38.608a5.556 5.556 0 0 1-.482.66l-.52.606c.008.79.214 1.488.62 2.068L3.68 19.653c-.148.16-.036.272.12.428l1.11 1.086c.153.16.255.258.41.1l1.505-1.534c.34.122 1.162.334 2.4.14l.75-.576c.212-.164.438-.312.672-.442l.644-.36-.514.53c-.187.192-.387.37-.6.534l-.62.476 1.424 3.804a.246.246 0 0 0 .404.09l3.242-3.144a.248.248 0 0 0 .072-.136l.698-4.108c.884-.78 1.78-1.686 2.66-2.694 5.072-5.806 5.798-10.315 5.78-12.487-.008-.702-.094-1.094-.1-1.122h-.002zM16.49 11.165c-1.274 1.296-3.1 1.564-4.082.6-.98-.962-.744-2.794.53-4.09s3.1-1.566 4.08-.602c.982.964.746 2.796-.528 4.092z" fill="#D33847" />
          </g>
          {showOfficial && (
            <path d="M23.735.238V.236a.248.248 0 0 0-.2-.188c-.256-.04-6.336-.924-14.17 7.051a28.44 28.44 0 0 0-2.12 2.576l-4.047 1.166a.246.246 0 0 0-.124.08l-2.856 3.5a.248.248 0 0 0 .126.394l3.887 1.096.484-.566c.178-.208.37-.4.574-.58l.54-.472-.38.608a5.556 5.556 0 0 1-.482.66l-.52.606c.008.79.214 1.488.62 2.068L3.68 19.653c-.148.16-.036.272.12.428l1.11 1.086c.153.16.255.258.41.1l1.505-1.534c.34.122 1.162.334 2.4.14l.75-.576c.212-.164.438-.312.672-.442l.644-.36-.514.53c-.187.192-.387.37-.6.534l-.62.476 1.424 3.804a.246.246 0 0 0 .404.09l3.242-3.144a.248.248 0 0 0 .072-.136l.698-4.108c.884-.78 1.78-1.686 2.66-2.694 5.072-5.806 5.798-10.315 5.78-12.487-.008-.702-.094-1.094-.1-1.122h-.002zM16.49 11.165c-1.274 1.296-3.1 1.564-4.082.6-.98-.962-.744-2.794.53-4.09s3.1-1.566 4.08-.602c.982.964.746 2.796-.528 4.092z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'mercury-winged-helmet',
    name: 'Mercury Winged God Helmet',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Mercury Winged God Helmet mark.',
    insight: 'The god of commerce and speed Mercury wears the winged Petasos helmet in chrome profile.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
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
    id: 'triumph-swallow-tail',
    name: 'Triumph Swallow-Tail Apex',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Triumph Swallow-Tail Apex mark.',
    insight: 'The sweeping underside curve of the letter R underlines the entire British sports wordmark.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#000000" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'christian-louboutin-heel',
    name: 'Christian Louboutin Red Sole Arc',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Christian Louboutin Red Sole Arc mark.',
    insight: 'Louboutin painted red Chanel nail polish on the sole of a prototype shoe in Paris in 1993.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#E31837" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'hermes-duc-carriage',
    name: 'Hermès Duc Carriage & Horse Apex',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Hermès Duc Carriage & Horse Apex mark.',
    insight: 'The horse-drawn Duc carriage honors Thierry Hermès’s origins crafting Parisian harnesses in 1837.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="m21.818 4.516-1.05 4.148h2.175L24 4.516M19.41 14.04h2.17l1.04-4.08h-2.178m-2.41 9.523h2.154l1.056-4.147h-2.16m.193-5.377H5.55v.92l3.341 3.161h9.349m2.41-9.525H0v1.116l3.206 3.032H19.6m-8.372 7.58 3.43 3.24h2.205l1.05-4.147h-6.685" fill="#0091CD" />
          </g>
          {showOfficial && (
            <path d="m21.818 4.516-1.05 4.148h2.175L24 4.516M19.41 14.04h2.17l1.04-4.08h-2.178m-2.41 9.523h2.154l1.056-4.147h-2.16m.193-5.377H5.55v.92l3.341 3.161h9.349m2.41-9.525H0v1.116l3.206 3.032H19.6m-8.372 7.58 3.43 3.24h2.205l1.05-4.147h-6.685" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'prada-savoy-rope',
    name: 'Prada Savoy Heraldic Knot Rope',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Prada Savoy Heraldic Knot Rope mark.',
    insight: 'King Victor Emmanuel III granted Prada the Savoy coat of arms and knotted rope border in 1919.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#000000" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'burberry-equestrian-knight',
    name: 'Burberry Equestrian Knight Prance',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Burberry Equestrian Knight Prance mark.',
    insight: 'The armored knight rides with the Latin motto Prorsum (Forward) on his battle banner since 1901.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M3.284 8.755c-.055 0-.11 0-.166.002-.096 0-.2.01-.296.029a3.225 3.225 0 0 0-2.82 3.325 3.243 3.243 0 0 0 3.354 3.115 3.211 3.211 0 0 0 1.79-.629l-.495-.362a.173.173 0 0 0-.19-.01c-.381.22-.82.334-1.296.324C1.86 14.521.784 13.463.717 12.16a2.519 2.519 0 0 1 2.744-2.62 2.518 2.518 0 0 1 2.276 2.324 2.525 2.525 0 0 1-.428 1.59.18.18 0 0 0 .038.249l.42.304c.485-.61.733-1.352.704-2.133a3.244 3.244 0 0 0-3.187-3.118zm2.482 5.251s-.095.124-.286.305c-.19.181-.343.296-.343.296l.553.41a.2.2 0 0 0 .229 0 3.338 3.338 0 0 0 .381-.372.177.177 0 0 0-.03-.267zm17.586-4.572c-.038 0-.076 0-.105.028a.198.198 0 0 0-.095.058.208.208 0 0 0-.067.085c-.01.029-.019.067-.028.105 0 .038 0 .076.019.114a.345.345 0 0 0 .067.096c.028.019.057.047.095.057.038.01.076.019.114.019.038 0 .076-.01.114-.02a.198.198 0 0 0 .096-.056c.019-.029.047-.058.057-.096a.479.479 0 0 0 .019-.114.412.412 0 0 0-.02-.114.225.225 0 0 0-.056-.086.903.903 0 0 0-.096-.057.477.477 0 0 0-.114-.02zm-2.124.01v1.295h-.277c-.114 0-.2.095-.2.2v.41h.477v2.276c0 1.086.552 1.601 1.486 1.601A2.08 2.08 0 0 0 24 14.797l-.22-.352a.186.186 0 0 0-.247-.067c-.228.124-.486.21-.762.21-.505 0-.857-.296-.857-.972v-2.267h1.152a.17.17 0 0 0 .172-.172v-.438h-1.334V9.624a.18.18 0 0 0-.18-.18zm2.124.037c.038 0 .067.01.095.02a.2.2 0 0 1 .077.047.203.203 0 0 1 .047.076c.01.029.02.057.02.096a.34.34 0 0 1-.02.095.207.207 0 0 1-.047.076.208.208 0 0 1-.077.048.338.338 0 0 1-.095.019.282.282 0 0 1-.095-.02.208.208 0 0 1-.076-.047.208.208 0 0 1-.048-.076c-.01-.038-.01-.067-.02-.095 0-.039.01-.067.02-.096a.207.207 0 0 1 .048-.076.208.208 0 0 1 .076-.048.282.282 0 0 1 .095-.019zm-.124.067v.333h.048V9.74h.057l.095.142h.058l-.096-.142a.464.464 0 0 0 .067-.029.087.087 0 0 0 .029-.067c0-.038-.01-.057-.03-.076a.19.19 0 0 0-.085-.019zm.067.038h.095s.01.01.02.01l.018.019c.01.01.01.019.01.028 0 .01 0 .02-.01.029 0 .01-.01.019-.019.019-.01.01-.019.01-.028.01h-.029v-.01h-.057zm-9.25 1.143c-1.23 0-2.144.924-2.144 2.249 0 1.343.915 2.248 2.191 2.248.639 0 1.239-.162 1.782-.677l-.257-.323a.177.177 0 0 0-.239-.029 1.99 1.99 0 0 1-1.248.438c-.78 0-1.438-.476-1.533-1.41h3.286a.19.19 0 0 0 .19-.19v-.067c-.009-1.315-.856-2.23-2.028-2.239zm-6.602.01a.18.18 0 0 0-.181.18v2.43c0 1.286.914 1.896 1.962 1.896 1.039 0 1.963-.61 1.963-1.896V10.91a.17.17 0 0 0-.172-.171h-.505v2.544c0 .895-.533 1.314-1.276 1.314s-1.286-.419-1.286-1.314v-2.544zm11.032 0c-1.039 0-1.725.495-1.725 1.315 0 .647.457 1.086 1.43 1.2l.514.057c.61.067.905.286.905.629 0 .457-.458.695-1.191.695-.62 0-1.02-.152-1.334-.352a.2.2 0 0 0-.276.066l-.21.334c.543.419 1.239.552 1.8.552 1.163 0 1.906-.523 1.906-1.343 0-.714-.533-1.095-1.448-1.21l-.514-.066c-.572-.067-.886-.248-.886-.61 0-.42.4-.676 1.019-.676.495 0 .962.152 1.267.314.086.047.19.019.238-.067l.134-.21a.184.184 0 0 0-.067-.247 3.263 3.263 0 0 0-1.562-.381zm-4.44.6c.734 0 1.267.524 1.353 1.334h-2.782c.105-.781.629-1.334 1.43-1.334z" fill="#FB4F14" />
          </g>
          {showOfficial && (
            <path d="M3.284 8.755c-.055 0-.11 0-.166.002-.096 0-.2.01-.296.029a3.225 3.225 0 0 0-2.82 3.325 3.243 3.243 0 0 0 3.354 3.115 3.211 3.211 0 0 0 1.79-.629l-.495-.362a.173.173 0 0 0-.19-.01c-.381.22-.82.334-1.296.324C1.86 14.521.784 13.463.717 12.16a2.519 2.519 0 0 1 2.744-2.62 2.518 2.518 0 0 1 2.276 2.324 2.525 2.525 0 0 1-.428 1.59.18.18 0 0 0 .038.249l.42.304c.485-.61.733-1.352.704-2.133a3.244 3.244 0 0 0-3.187-3.118zm2.482 5.251s-.095.124-.286.305c-.19.181-.343.296-.343.296l.553.41a.2.2 0 0 0 .229 0 3.338 3.338 0 0 0 .381-.372.177.177 0 0 0-.03-.267zm17.586-4.572c-.038 0-.076 0-.105.028a.198.198 0 0 0-.095.058.208.208 0 0 0-.067.085c-.01.029-.019.067-.028.105 0 .038 0 .076.019.114a.345.345 0 0 0 .067.096c.028.019.057.047.095.057.038.01.076.019.114.019.038 0 .076-.01.114-.02a.198.198 0 0 0 .096-.056c.019-.029.047-.058.057-.096a.479.479 0 0 0 .019-.114.412.412 0 0 0-.02-.114.225.225 0 0 0-.056-.086.903.903 0 0 0-.096-.057.477.477 0 0 0-.114-.02zm-2.124.01v1.295h-.277c-.114 0-.2.095-.2.2v.41h.477v2.276c0 1.086.552 1.601 1.486 1.601A2.08 2.08 0 0 0 24 14.797l-.22-.352a.186.186 0 0 0-.247-.067c-.228.124-.486.21-.762.21-.505 0-.857-.296-.857-.972v-2.267h1.152a.17.17 0 0 0 .172-.172v-.438h-1.334V9.624a.18.18 0 0 0-.18-.18zm2.124.037c.038 0 .067.01.095.02a.2.2 0 0 1 .077.047.203.203 0 0 1 .047.076c.01.029.02.057.02.096a.34.34 0 0 1-.02.095.207.207 0 0 1-.047.076.208.208 0 0 1-.077.048.338.338 0 0 1-.095.019.282.282 0 0 1-.095-.02.208.208 0 0 1-.076-.047.208.208 0 0 1-.048-.076c-.01-.038-.01-.067-.02-.095 0-.039.01-.067.02-.096a.207.207 0 0 1 .048-.076.208.208 0 0 1 .076-.048.282.282 0 0 1 .095-.019zm-.124.067v.333h.048V9.74h.057l.095.142h.058l-.096-.142a.464.464 0 0 0 .067-.029.087.087 0 0 0 .029-.067c0-.038-.01-.057-.03-.076a.19.19 0 0 0-.085-.019zm.067.038h.095s.01.01.02.01l.018.019c.01.01.01.019.01.028 0 .01 0 .02-.01.029 0 .01-.01.019-.019.019-.01.01-.019.01-.028.01h-.029v-.01h-.057zm-9.25 1.143c-1.23 0-2.144.924-2.144 2.249 0 1.343.915 2.248 2.191 2.248.639 0 1.239-.162 1.782-.677l-.257-.323a.177.177 0 0 0-.239-.029 1.99 1.99 0 0 1-1.248.438c-.78 0-1.438-.476-1.533-1.41h3.286a.19.19 0 0 0 .19-.19v-.067c-.009-1.315-.856-2.23-2.028-2.239zm-6.602.01a.18.18 0 0 0-.181.18v2.43c0 1.286.914 1.896 1.962 1.896 1.039 0 1.963-.61 1.963-1.896V10.91a.17.17 0 0 0-.172-.171h-.505v2.544c0 .895-.533 1.314-1.276 1.314s-1.286-.419-1.286-1.314v-2.544zm11.032 0c-1.039 0-1.725.495-1.725 1.315 0 .647.457 1.086 1.43 1.2l.514.057c.61.067.905.286.905.629 0 .457-.458.695-1.191.695-.62 0-1.02-.152-1.334-.352a.2.2 0 0 0-.276.066l-.21.334c.543.419 1.239.552 1.8.552 1.163 0 1.906-.523 1.906-1.343 0-.714-.533-1.095-1.448-1.21l-.514-.066c-.572-.067-.886-.248-.886-.61 0-.42.4-.676 1.019-.676.495 0 .962.152 1.267.314.086.047.19.019.238-.067l.134-.21a.184.184 0 0 0-.067-.247 3.263 3.263 0 0 0-1.562-.381zm-4.44.6c.734 0 1.267.524 1.353 1.334h-2.782c.105-.781.629-1.334 1.43-1.334z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'coach-horse-carriage',
    name: 'Coach 1941 Horse & Carriage Arc',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Coach 1941 Horse & Carriage Arc mark.',
    insight: 'Bonny Young designed the carriage in 1954 to represent Manhattan leather goods craftsmanship.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#1A1A1A" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'kate-spade-spade-arch',
    name: 'Kate Spade Enamel Spade Arch',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Kate Spade Enamel Spade Arch mark.',
    insight: 'The stylized ace of spades symbol was elevated into a minimalist signature hardware jewel.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#008080" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'michael-kors-bold-arch',
    name: 'Michael Kors Heavy Serif Arch',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Michael Kors Heavy Serif Arch mark.',
    insight: 'The high-contrast serif typography communicates upscale American jet-set sportswear.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#000000" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'marc-jacobs-double-j',
    name: 'Marc Jacobs Interlocking Double J',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Marc Jacobs Interlocking Double J mark.',
    insight: 'Two mirror-image oval J rings interlock to form an optical camera bag hardware link.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#000000" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'alexander-mcqueen-amq',
    name: 'Alexander McQueen Nested AMQ',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Alexander McQueen Nested AMQ mark.',
    insight: 'The letter Q encloses the uppercase M in balanced dark romantic British tailoring.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#000000" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'balmain-coin-monogram',
    name: 'Balmain Paris PB Coin Monogram',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Balmain Paris PB Coin Monogram mark.',
    insight: 'Olivier Rousteing revived Pierre Balmain’s labyrinth PB monogram in minimalist gold.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#000000" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'versace-medusa-roundel',
    name: 'Versace Medusa Head Roundel',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Versace Medusa Head Roundel mark.',
    insight: 'Gianni Versace drew the mythological Medusa from ancient ruins in Reggio Calabria.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M20.325 3.8958 14.8913.7692a5.7283 5.7283 0 0 0-5.7342 0L3.6983 3.8958C1.9455 4.9213.8437 6.8223.8437 8.8484v6.2783c0 2.051 1.1018 3.927 2.8546 4.9526l5.4337 3.1515a5.7283 5.7283 0 0 0 5.7343 0l5.4338-3.1515c1.7778-1.0256 2.8545-2.9015 2.8545-4.9526V8.8484c.0501-2.026-1.0517-3.927-2.8296-4.9526Zm-8.3133 13.6821c-3.08 0-5.584-2.5013-5.584-5.5778 0-3.0767 2.504-5.578 5.584-5.578 3.08 0 5.609 2.5013 5.609 5.578 0 3.0765-2.504 5.5778-5.609 5.5778z" fill="#000000" />
          </g>
          {showOfficial && (
            <path d="M20.325 3.8958 14.8913.7692a5.7283 5.7283 0 0 0-5.7342 0L3.6983 3.8958C1.9455 4.9213.8437 6.8223.8437 8.8484v6.2783c0 2.051 1.1018 3.927 2.8546 4.9526l5.4337 3.1515a5.7283 5.7283 0 0 0 5.7343 0l5.4338-3.1515c1.7778-1.0256 2.8545-2.9015 2.8545-4.9526V8.8484c.0501-2.026-1.0517-3.927-2.8296-4.9526Zm-8.3133 13.6821c-3.08 0-5.584-2.5013-5.584-5.5778 0-3.0767 2.504-5.578 5.584-5.578 3.08 0 5.609 2.5013 5.609 5.578 0 3.0765-2.504 5.5778-5.609 5.5778z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'pringles-mustache-parabola',
    name: 'Pringles Julius Mustache Parabola',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Pringles Julius Mustache Parabola mark.',
    insight: 'Julius Pringles’s iconic brown mustache follows the authentic hyperbolic paraboloid chip curve.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
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
    id: 'kfc-colonel-bowtie',
    name: 'KFC Colonel Sanders String Bowtie',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the KFC Colonel Sanders String Bowtie mark.',
    insight: 'Lippincott rendered Harland Sanders’s white hair, goatee, and black string tie in 1997.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M21.893 8.23c-4.187.001-5.249 2.365-5.42 3.97-.194 1.802 1.053 3.57 4.127 3.57 1.294 0 2.14-.225 2.44-.32a.215.215 0 00.147-.166l.173-.91a.184.184 0 00-.236-.21c-.336.106-.93.252-1.685.252-1.469 0-2.53-.882-2.395-2.4.13-1.47 1.121-2.59 2.485-2.59.82 0 1.183.43 1.156 1.003v.033a.184.184 0 00.182.193h.557c.086 0 .16-.06.18-.143l.39-1.76a.215.215 0 00-.15-.255 7.21 7.21 0 00-1.95-.266zm-20.157.116a.2.2 0 00-.195.156l-.108.484a.198.198 0 00.13.23l.033.01c.208.082.45.266.348.748l-.792 3.62c-.207.987-.542 1.19-.86 1.226h-.01a.2.2 0 00-.176.157l-.102.464a.192.192 0 00.187.233h3.487c.085 0 .159-.06.177-.142l.12-.543a.184.184 0 00-.112-.21l-.022-.01c-.177-.07-.418-.224-.356-.51l.405-1.85c1.389 2.535 1.848 3.266 3.514 3.265H8.91a.181.181 0 00.177-.142l.105-.47a.195.195 0 00-.186-.238c-.376-.006-.56-.093-.935-.575l-1.932-2.614 2.51-2.088c.337-.264.748-.338.976-.368l.022-.002a.185.185 0 00.163-.144l.103-.464a.184.184 0 00-.18-.223h-3.02a.199.199 0 00-.193.155l-.102.46a.2.2 0 00.138.235c.178.069.217.24.063.366L4.046 11.7l.44-2.014a.683.683 0 01.477-.487l.025-.008a.199.199 0 00.135-.147l.106-.477a.181.181 0 00-.177-.22zm8.88 0a.2.2 0 00-.194.156l-.107.483a.19.19 0 00.122.221l.02.008c.204.077.487.274.364.758l-1.21 5.48a.182.182 0 00.178.222h2.777c.086 0 .16-.06.179-.143l.12-.547a.174.174 0 00-.098-.196 1.558 1.558 0 01-.027-.013c-.176-.086-.438-.285-.35-.67.009-.05.27-1.24.27-1.24h2.362c.086 0 .16-.06.18-.143l.221-1a.183.183 0 00-.18-.224h-2.28l.427-1.94 1.592-.003c.515 0 .672.27.642.728l-.002.024a.184.184 0 00.183.205h.587c.086 0 .16-.06.178-.144l.4-1.8a.184.184 0 00-.18-.222z" fill="#F40027" />
          </g>
          {showOfficial && (
            <path d="M21.893 8.23c-4.187.001-5.249 2.365-5.42 3.97-.194 1.802 1.053 3.57 4.127 3.57 1.294 0 2.14-.225 2.44-.32a.215.215 0 00.147-.166l.173-.91a.184.184 0 00-.236-.21c-.336.106-.93.252-1.685.252-1.469 0-2.53-.882-2.395-2.4.13-1.47 1.121-2.59 2.485-2.59.82 0 1.183.43 1.156 1.003v.033a.184.184 0 00.182.193h.557c.086 0 .16-.06.18-.143l.39-1.76a.215.215 0 00-.15-.255 7.21 7.21 0 00-1.95-.266zm-20.157.116a.2.2 0 00-.195.156l-.108.484a.198.198 0 00.13.23l.033.01c.208.082.45.266.348.748l-.792 3.62c-.207.987-.542 1.19-.86 1.226h-.01a.2.2 0 00-.176.157l-.102.464a.192.192 0 00.187.233h3.487c.085 0 .159-.06.177-.142l.12-.543a.184.184 0 00-.112-.21l-.022-.01c-.177-.07-.418-.224-.356-.51l.405-1.85c1.389 2.535 1.848 3.266 3.514 3.265H8.91a.181.181 0 00.177-.142l.105-.47a.195.195 0 00-.186-.238c-.376-.006-.56-.093-.935-.575l-1.932-2.614 2.51-2.088c.337-.264.748-.338.976-.368l.022-.002a.185.185 0 00.163-.144l.103-.464a.184.184 0 00-.18-.223h-3.02a.199.199 0 00-.193.155l-.102.46a.2.2 0 00.138.235c.178.069.217.24.063.366L4.046 11.7l.44-2.014a.683.683 0 01.477-.487l.025-.008a.199.199 0 00.135-.147l.106-.477a.181.181 0 00-.177-.22zm8.88 0a.2.2 0 00-.194.156l-.107.483a.19.19 0 00.122.221l.02.008c.204.077.487.274.364.758l-1.21 5.48a.182.182 0 00.178.222h2.777c.086 0 .16-.06.179-.143l.12-.547a.174.174 0 00-.098-.196 1.558 1.558 0 01-.027-.013c-.176-.086-.438-.285-.35-.67.009-.05.27-1.24.27-1.24h2.362c.086 0 .16-.06.18-.143l.221-1a.183.183 0 00-.18-.224h-2.28l.427-1.94 1.592-.003c.515 0 .672.27.642.728l-.002.024a.184.184 0 00.183.205h.587c.086 0 .16-.06.178-.144l.4-1.8a.184.184 0 00-.18-.222z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'wendys-cameo-braids',
    name: 'Wendy’s Red Pigtail Cameo Braids',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Wendy’s Red Pigtail Cameo Braids mark.',
    insight: 'Dave Thomas named the burger restaurant after his daughter Melinda Lou Wendy Thomas in 1969.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#E31837" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'burger-king-bun-domes',
    name: 'Burger King Retro Bun Domes',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Burger King Retro Bun Domes mark.',
    insight: 'Jones Knowles Ritchie returned to the classic 1969 red-and-yellow bun sandwiches in 2021.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M15.39 12.614c-.72 0-1.11.538-1.11 1.215v1.508c0 .125-.043.182-.12.182-.056 0-.098-.035-.147-.133l-.971-1.885c-.37-.72-.755-.887-1.196-.887-.734 0-1.14.552-1.14 1.243v4.314c0 .678.392 1.215 1.112 1.215.72 0 1.112-.537 1.112-1.215v-1.507c0-.126.042-.182.119-.182.055 0 .097.035.146.133l.972 1.885c.37.719.769.886 1.195.886.735 0 1.14-.551 1.14-1.242v-4.315c0-.677-.391-1.215-1.111-1.215zm-4.02-.405c.364 0 .68-.286.68-.642 0-.238-.099-.412-.224-.572-.203-.266-.385-.496-.476-.74-.02-.056-.007-.105.056-.154.217-.167.469-.537.469-1.124 0-.886-.734-1.389-1.622-1.389h-.79c-.553 0-.819.321-.819.754v3.114c0 .419.245.754.692.754.448 0 .693-.335.693-.754v-.74c0-.09.042-.133.111-.133.084 0 .112.049.126.133.063.356.23.837.42 1.082.237.314.46.411.685.411zm-1.146-2.666h-.098c-.119 0-.175-.07-.175-.161v-.474c0-.09.056-.16.175-.16h.098c.294 0 .385.208.385.39 0 .174-.091.405-.385.405zm-3.761 2.666c1.132 0 1.734-.677 1.734-1.528V8.328c0-.419-.245-.754-.692-.754-.448 0-.693.335-.693.754v2.276c0 .167-.097.363-.35.363-.251 0-.335-.196-.335-.363V8.328c0-.419-.252-.754-.7-.754-.447 0-.691.335-.691.754v2.353c0 .852.594 1.528 1.727 1.528zm12.011-.034c.392 0 .7-.23.7-.65 0-.412-.308-.642-.7-.642h-.63c-.118 0-.174-.07-.174-.16v-.133c0-.091.056-.161.175-.161h.482c.336 0 .602-.202.602-.559 0-.355-.266-.558-.602-.558h-.482c-.12 0-.175-.07-.175-.16V9.04c0-.091.056-.161.175-.161h.629c.392 0 .7-.23.7-.65 0-.411-.308-.642-.7-.642h-1.321c-.553 0-.818.321-.818.754v3.079c0 .432.265.754.818.754h1.321zm2.642 3.127h-.342c-.615 0-1.09.286-1.09.914 0 .573.517.845.901.845.189 0 .322.056.322.202 0 .182-.224.3-.462.3-.79 0-1.328-.537-1.328-1.535 0-1.11.734-1.515 1.3-1.515.692 0 .804.349 1.287.349a.927.927 0 0 0 .936-.915.95.95 0 0 0-.398-.788c-.427-.315-1.07-.545-1.979-.545-1.629 0-3.216 1.026-3.216 3.414 0 2.282 1.587 3.35 3.153 3.35 1.643 0 2.685-1.012 2.685-2.492 0-.935-.587-1.584-1.769-1.584zm-12.43-2.688c-.783 0-1.21.587-1.21 1.32v4.132c0 .734.427 1.32 1.21 1.32.783 0 1.21-.586 1.21-1.32v-4.132c0-.733-.427-1.32-1.21-1.32zm11.494-.405c.447 0 .692-.335.692-.754v-.74c0-.09.042-.132.112-.132.084 0 .111.049.125.133.063.355.231.837.42 1.082.238.314.461.412.685.412.363 0 .678-.286.678-.643 0-.237-.098-.412-.224-.572-.237-.3-.384-.496-.475-.74-.02-.056-.007-.105.056-.153.217-.168.469-.538.469-1.124 0-.887-.735-1.39-1.623-1.39h-.79c-.552 0-.817.321-.817.754v3.114c0 .419.244.753.692.753zm.615-3.301c0-.09.056-.161.175-.161h.098c.293 0 .384.21.384.391 0 .175-.09.405-.384.405h-.098c-.12 0-.175-.07-.175-.16zm-18.87 3.267h.986c.93 0 1.496-.622 1.496-1.397 0-.621-.37-.907-.454-.977-.035-.028-.07-.056-.07-.084 0-.035.021-.048.056-.09.133-.154.266-.398.266-.754 0-.838-.567-1.285-1.448-1.285h-.832c-.552 0-.817.321-.817.754v3.079c0 .433.265.754.817.754zm.413-3.386c0-.09.056-.16.175-.16h.09c.301 0 .392.209.392.39 0 .168-.09.405-.391.405h-.091c-.12 0-.175-.07-.175-.16zm0 1.634c0-.091.056-.161.175-.161h.126c.335 0 .433.223.433.426 0 .181-.098.44-.433.44h-.126c-.12 0-.175-.07-.175-.161zm11.878 1.794c1.098 0 1.79-.699 1.79-1.718 0-.649-.391-1.096-1.174-1.096h-.224c-.413 0-.734.196-.734.636 0 .39.342.58.601.58.133 0 .217.041.217.139 0 .125-.147.21-.315.21-.524 0-.88-.37-.88-1.062 0-.768.489-1.047.866-1.047.462 0 .539.238.86.238.37 0 .623-.308.623-.629a.669.669 0 0 0-.266-.544c-.294-.217-.706-.377-1.321-.377-1.084 0-2.14.712-2.14 2.36 0 1.576 1.056 2.31 2.097 2.31zm-8.718 3.762a.354.354 0 0 1-.07-.188c0-.077.042-.133.126-.21.196-.181.678-.635.944-1.047.202-.314.286-.6.286-.837 0-.607-.552-1.082-1.153-1.082-.385 0-.748.216-.993.614-.329.53-.72 1.145-.972 1.39-.063.062-.098.076-.146.076-.084 0-.12-.056-.12-.146v-.699c0-.684-.405-1.235-1.139-1.235-.74 0-1.14.551-1.14 1.235v4.3c0 .685.399 1.237 1.14 1.237.734 0 1.14-.552 1.14-1.236v-.991c0-.084.035-.147.119-.147.111 0 .14.112.167.168.161.384.63 1.2 1.063 1.682.294.32.657.524 1.042.524.65 0 1.196-.566 1.196-1.173 0-.377-.161-.657-.469-.991-.392-.427-.853-.986-1.021-1.244zm15.751 6.702C19.432 23.707 16.313 24 12 24c-4.313 0-7.432-.293-9.25-1.32-1.09-.614-1.642-1.451-1.642-2.052 0-.342.181-.537.587-.537h20.61c.406 0 .587.195.587.537 0 .6-.552 1.438-1.643 2.053zm1.056-15.917H1.695c-.406 0-.587-.209-.587-.586C1.108 3.944 4.47 0 12 0c7.46 0 10.892 3.944 10.892 6.178 0 .377-.181.586-.587.586Z" fill="#D62300" />
          </g>
          {showOfficial && (
            <path d="M15.39 12.614c-.72 0-1.11.538-1.11 1.215v1.508c0 .125-.043.182-.12.182-.056 0-.098-.035-.147-.133l-.971-1.885c-.37-.72-.755-.887-1.196-.887-.734 0-1.14.552-1.14 1.243v4.314c0 .678.392 1.215 1.112 1.215.72 0 1.112-.537 1.112-1.215v-1.507c0-.126.042-.182.119-.182.055 0 .097.035.146.133l.972 1.885c.37.719.769.886 1.195.886.735 0 1.14-.551 1.14-1.242v-4.315c0-.677-.391-1.215-1.111-1.215zm-4.02-.405c.364 0 .68-.286.68-.642 0-.238-.099-.412-.224-.572-.203-.266-.385-.496-.476-.74-.02-.056-.007-.105.056-.154.217-.167.469-.537.469-1.124 0-.886-.734-1.389-1.622-1.389h-.79c-.553 0-.819.321-.819.754v3.114c0 .419.245.754.692.754.448 0 .693-.335.693-.754v-.74c0-.09.042-.133.111-.133.084 0 .112.049.126.133.063.356.23.837.42 1.082.237.314.46.411.685.411zm-1.146-2.666h-.098c-.119 0-.175-.07-.175-.161v-.474c0-.09.056-.16.175-.16h.098c.294 0 .385.208.385.39 0 .174-.091.405-.385.405zm-3.761 2.666c1.132 0 1.734-.677 1.734-1.528V8.328c0-.419-.245-.754-.692-.754-.448 0-.693.335-.693.754v2.276c0 .167-.097.363-.35.363-.251 0-.335-.196-.335-.363V8.328c0-.419-.252-.754-.7-.754-.447 0-.691.335-.691.754v2.353c0 .852.594 1.528 1.727 1.528zm12.011-.034c.392 0 .7-.23.7-.65 0-.412-.308-.642-.7-.642h-.63c-.118 0-.174-.07-.174-.16v-.133c0-.091.056-.161.175-.161h.482c.336 0 .602-.202.602-.559 0-.355-.266-.558-.602-.558h-.482c-.12 0-.175-.07-.175-.16V9.04c0-.091.056-.161.175-.161h.629c.392 0 .7-.23.7-.65 0-.411-.308-.642-.7-.642h-1.321c-.553 0-.818.321-.818.754v3.079c0 .432.265.754.818.754h1.321zm2.642 3.127h-.342c-.615 0-1.09.286-1.09.914 0 .573.517.845.901.845.189 0 .322.056.322.202 0 .182-.224.3-.462.3-.79 0-1.328-.537-1.328-1.535 0-1.11.734-1.515 1.3-1.515.692 0 .804.349 1.287.349a.927.927 0 0 0 .936-.915.95.95 0 0 0-.398-.788c-.427-.315-1.07-.545-1.979-.545-1.629 0-3.216 1.026-3.216 3.414 0 2.282 1.587 3.35 3.153 3.35 1.643 0 2.685-1.012 2.685-2.492 0-.935-.587-1.584-1.769-1.584zm-12.43-2.688c-.783 0-1.21.587-1.21 1.32v4.132c0 .734.427 1.32 1.21 1.32.783 0 1.21-.586 1.21-1.32v-4.132c0-.733-.427-1.32-1.21-1.32zm11.494-.405c.447 0 .692-.335.692-.754v-.74c0-.09.042-.132.112-.132.084 0 .111.049.125.133.063.355.231.837.42 1.082.238.314.461.412.685.412.363 0 .678-.286.678-.643 0-.237-.098-.412-.224-.572-.237-.3-.384-.496-.475-.74-.02-.056-.007-.105.056-.153.217-.168.469-.538.469-1.124 0-.887-.735-1.39-1.623-1.39h-.79c-.552 0-.817.321-.817.754v3.114c0 .419.244.753.692.753zm.615-3.301c0-.09.056-.161.175-.161h.098c.293 0 .384.21.384.391 0 .175-.09.405-.384.405h-.098c-.12 0-.175-.07-.175-.16zm-18.87 3.267h.986c.93 0 1.496-.622 1.496-1.397 0-.621-.37-.907-.454-.977-.035-.028-.07-.056-.07-.084 0-.035.021-.048.056-.09.133-.154.266-.398.266-.754 0-.838-.567-1.285-1.448-1.285h-.832c-.552 0-.817.321-.817.754v3.079c0 .433.265.754.817.754zm.413-3.386c0-.09.056-.16.175-.16h.09c.301 0 .392.209.392.39 0 .168-.09.405-.391.405h-.091c-.12 0-.175-.07-.175-.16zm0 1.634c0-.091.056-.161.175-.161h.126c.335 0 .433.223.433.426 0 .181-.098.44-.433.44h-.126c-.12 0-.175-.07-.175-.161zm11.878 1.794c1.098 0 1.79-.699 1.79-1.718 0-.649-.391-1.096-1.174-1.096h-.224c-.413 0-.734.196-.734.636 0 .39.342.58.601.58.133 0 .217.041.217.139 0 .125-.147.21-.315.21-.524 0-.88-.37-.88-1.062 0-.768.489-1.047.866-1.047.462 0 .539.238.86.238.37 0 .623-.308.623-.629a.669.669 0 0 0-.266-.544c-.294-.217-.706-.377-1.321-.377-1.084 0-2.14.712-2.14 2.36 0 1.576 1.056 2.31 2.097 2.31zm-8.718 3.762a.354.354 0 0 1-.07-.188c0-.077.042-.133.126-.21.196-.181.678-.635.944-1.047.202-.314.286-.6.286-.837 0-.607-.552-1.082-1.153-1.082-.385 0-.748.216-.993.614-.329.53-.72 1.145-.972 1.39-.063.062-.098.076-.146.076-.084 0-.12-.056-.12-.146v-.699c0-.684-.405-1.235-1.139-1.235-.74 0-1.14.551-1.14 1.235v4.3c0 .685.399 1.237 1.14 1.237.734 0 1.14-.552 1.14-1.236v-.991c0-.084.035-.147.119-.147.111 0 .14.112.167.168.161.384.63 1.2 1.063 1.682.294.32.657.524 1.042.524.65 0 1.196-.566 1.196-1.173 0-.377-.161-.657-.469-.991-.392-.427-.853-.986-1.021-1.244zm15.751 6.702C19.432 23.707 16.313 24 12 24c-4.313 0-7.432-.293-9.25-1.32-1.09-.614-1.642-1.451-1.642-2.052 0-.342.181-.537.587-.537h20.61c.406 0 .587.195.587.537 0 .6-.552 1.438-1.643 2.053zm1.056-15.917H1.695c-.406 0-.587-.209-.587-.586C1.108 3.944 4.47 0 12 0c7.46 0 10.892 3.944 10.892 6.178 0 .377-.181.586-.587.586Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'dairy-queen-soft-lips',
    name: 'Dairy Queen Blue & Red Lips',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Dairy Queen Blue & Red Lips mark.',
    insight: 'The blue lip and red lip curves frame the white letters DQ honoring soft-serve ice cream.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#0055A5" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'in-n-out-bent-arrow',
    name: 'In-N-Out Yellow Neon Bent Arrow',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the In-N-Out Yellow Neon Bent Arrow mark.',
    insight: 'Harry Snyder installed the two-way speaker in 1948, pointing guests through with a yellow arrow.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M24 0V24l-9.365-8.045V24H0V0ZM2.942 21.087h8.751V9.563l9.365 8.204V2.919L2.942 2.914Z" fill="#34D59A" />
          </g>
          {showOfficial && (
            <path d="M24 0V24l-9.365-8.045V24H0V0ZM2.942 21.087h8.751V9.563l9.365 8.204V2.919L2.942 2.914Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'carls-jr-happy-star',
    name: 'Carl’s Jr. Smiling Five-Point Star',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Carl’s Jr. Smiling Five-Point Star mark.',
    insight: 'Carl Karcher introduced the happy star mascot in 1980 to welcome families with charcoal burgers.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#E31837" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'hardees-star-smile',
    name: 'Hardee’s Golden Star Smile',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Hardee’s Golden Star Smile mark.',
    insight: 'Hardee’s adopted Carl Karcher’s smiling star following the 1997 CKE Restaurants merger.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#E31837" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'jack-in-the-box-cube',
    name: 'Jack in the Box Pointed Cube Angle',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Jack in the Box Pointed Cube Angle mark.',
    insight: 'The red box features angled perspective cuts and a smiling clown collar notch.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="m.939 14.973 10.97 6.4V24L.94 17.6v-2.626zm22.123 0v2.626l-10.971 6.4v-2.626l10.97-6.401ZM.939 10.66l10.97 6.4v2.627l-7.223-4.214-1.068.622-2.253-1.313 1.07-.623-1.496-.873V10.66zm22.123 0v2.626l-1.496.873 1.07.624-2.253 1.313-1.07-.623-7.224 4.214V17.06l10.972-6.4ZM.939 6.347l10.97 6.4v2.627l-3.525-2.057-1.067.622-2.252-1.314 1.067-.622-1.429-.833-1.066.622-2.253-1.314 1.068-.622-1.514-.883Zm22.123 0v2.626l-1.514.883 1.07.622-2.254 1.315-1.068-.623-1.428.833 1.068.622-2.252 1.314-1.07-.622-3.525 2.057v-2.627l10.972-6.4ZM12 8.584l3.236 1.885-2.252 1.314-.983-.573-.982.573-2.252-1.314 3.235-1.885Zm0-4.293 6.916 4.03-2.252 1.315L12 6.918 7.338 9.635 5.085 8.321ZM12 0l10.597 6.175-2.252 1.314L12 2.627 3.657 7.489 1.405 6.175 12 0Z" fill="#BE2323" />
          </g>
          {showOfficial && (
            <path d="m.939 14.973 10.97 6.4V24L.94 17.6v-2.626zm22.123 0v2.626l-10.971 6.4v-2.626l10.97-6.401ZM.939 10.66l10.97 6.4v2.627l-7.223-4.214-1.068.622-2.253-1.313 1.07-.623-1.496-.873V10.66zm22.123 0v2.626l-1.496.873 1.07.624-2.253 1.313-1.07-.623-7.224 4.214V17.06l10.972-6.4ZM.939 6.347l10.97 6.4v2.627l-3.525-2.057-1.067.622-2.252-1.314 1.067-.622-1.429-.833-1.066.622-2.253-1.314 1.068-.622-1.514-.883Zm22.123 0v2.626l-1.514.883 1.07.622-2.254 1.315-1.068-.623-1.428.833 1.068.622-2.252 1.314-1.07-.622-3.525 2.057v-2.627l10.972-6.4ZM12 8.584l3.236 1.885-2.252 1.314-.983-.573-.982.573-2.252-1.314 3.235-1.885Zm0-4.293 6.916 4.03-2.252 1.315L12 6.918 7.338 9.635 5.085 8.321ZM12 0l10.597 6.175-2.252 1.314L12 2.627 3.657 7.489 1.405 6.175 12 0Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'popeyes-dancing-letters',
    name: 'Popeyes Louisiana Dancing Font',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Popeyes Louisiana Dancing Font mark.',
    insight: 'The jaunty, bouncing letterforms communicate New Orleans jazz rhythm and spicy fried chicken.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#FF6600" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'taco-bell-clapper-arch',
    name: 'Taco Bell Purple Bell Clapper',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Taco Bell Purple Bell Clapper mark.',
    insight: 'Lippincott refined the minimalist bell in 2016, placing the clapper curve in sharp negative space.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M12.0786 1.1372a11.784 11.784 0 0 0-.913.0318c-1.4967.0794-2.9562.5037-4.3208 1.1086.2802-.0007.588-.0477.839.1086.3087.1709.4496.527.7445.711.4187.1627.8696.0071 1.2965-.0398 1.3661-.1587 2.7779.1102 4 .7387.788.4146 1.4997.9613 2.1525 1.5639 1.005.8835 1.831 1.9475 2.8264 2.8416.3247.2891.698.5257 1.1037.6836.9484.3725 1.9971.3434 2.9528.6917.3012.1013.571.2697.844.43-.1644-.537-.3395-1.0706-.5622-1.5858-.9824-2.3169-2.7202-4.2993-4.8793-5.5886-1.8269-1.1034-3.9525-1.6866-6.084-1.6953ZM4.988 3.4001C3.2443 4.6465 1.8497 6.3764.9985 8.3427.3013 9.93-.0243 11.6703.004 13.4009c.0008 2.9948.0057 5.9897-.0024 8.9845-.0154.163.0834.3006.1507.4407 1.158.0714 2.3218.0137 3.4823.0307-.5701-.2073-1.2237-.5473-1.3338-1.2082-.1799-.9524.2786-1.878.7702-2.6637.7888-1.2277 1.8336-2.2634 2.9106-3.2377 1.3071-1.1322 2.7534-2.0919 4.2371-2.9754.3977-.256.8553-.4575 1.1412-.8504-.26.0219-.5151.0858-.7516.196-.9872.4292-1.9234.9662-2.8458 1.5192-.8804.545-1.767 1.0845-2.5948 1.709-.579.4146-1.1191.8777-1.6796 1.3166-.1238-.9402-.3483-1.8625-.584-2.7801-.2892-1.2188-.477-2.475-.396-3.7302.06-1.2853.4697-2.5616 1.2342-3.6022.294-.4309.699-.7751.9776-1.2165.2396-.3774-.1208-.7677-.09-1.1613-.0056-.3005.1936-.5402.358-.7718zm15.5597 8.8498c-.1674-.0026-.3357.011-.498.028-1.316.161-2.5736.6137-3.7973 1.1052-2.7414 1.1517-5.3888 2.5755-7.7414 4.4042-.9378.7499-1.8651 1.5443-2.5592 2.5332-.2097.3296-.473.733-.324 1.1363.1912.2656.5474.3125.8495.353 1.056.094 2.1147-.0777 3.1456-.298 2.0806-.473 4.0946-1.257 5.9234-2.3584 1.3743-.7945 2.7032-1.6796 3.8954-2.7299.6688-.6066 1.3126-1.2602 1.7734-2.0433.213-.3758.401-.7872.392-1.2286.0025-.2486-.0236-.5595-.2648-.6971-.2394-.1514-.5155-.2003-.7946-.2046zm3.4259.0756c-.7889 1.993-2.3518 3.549-3.9691 4.8981-1.41 1.1436-2.9463 2.1275-4.5562 2.9648-2.185 1.2196-4.5369 2.177-6.999 2.6596 5.035.022 10.0706.004 15.1055.0088.226.0316.4575-.1425.4413-.3806.0066-2.8644 0-5.7288.0026-8.5933.0016-.5191.0073-1.0391-.0251-1.5573zM12.7172 15.757c.3604.7702.4009 1.6967.0543 2.4782-.3208.7686-.984 1.375-1.7687 1.6472-1.0505.362-2.276.0818-3.0656-.7014 1.4019-1.3824 3.0598-2.478 4.78-3.424z" fill="#38096C" />
          </g>
          {showOfficial && (
            <path d="M12.0786 1.1372a11.784 11.784 0 0 0-.913.0318c-1.4967.0794-2.9562.5037-4.3208 1.1086.2802-.0007.588-.0477.839.1086.3087.1709.4496.527.7445.711.4187.1627.8696.0071 1.2965-.0398 1.3661-.1587 2.7779.1102 4 .7387.788.4146 1.4997.9613 2.1525 1.5639 1.005.8835 1.831 1.9475 2.8264 2.8416.3247.2891.698.5257 1.1037.6836.9484.3725 1.9971.3434 2.9528.6917.3012.1013.571.2697.844.43-.1644-.537-.3395-1.0706-.5622-1.5858-.9824-2.3169-2.7202-4.2993-4.8793-5.5886-1.8269-1.1034-3.9525-1.6866-6.084-1.6953ZM4.988 3.4001C3.2443 4.6465 1.8497 6.3764.9985 8.3427.3013 9.93-.0243 11.6703.004 13.4009c.0008 2.9948.0057 5.9897-.0024 8.9845-.0154.163.0834.3006.1507.4407 1.158.0714 2.3218.0137 3.4823.0307-.5701-.2073-1.2237-.5473-1.3338-1.2082-.1799-.9524.2786-1.878.7702-2.6637.7888-1.2277 1.8336-2.2634 2.9106-3.2377 1.3071-1.1322 2.7534-2.0919 4.2371-2.9754.3977-.256.8553-.4575 1.1412-.8504-.26.0219-.5151.0858-.7516.196-.9872.4292-1.9234.9662-2.8458 1.5192-.8804.545-1.767 1.0845-2.5948 1.709-.579.4146-1.1191.8777-1.6796 1.3166-.1238-.9402-.3483-1.8625-.584-2.7801-.2892-1.2188-.477-2.475-.396-3.7302.06-1.2853.4697-2.5616 1.2342-3.6022.294-.4309.699-.7751.9776-1.2165.2396-.3774-.1208-.7677-.09-1.1613-.0056-.3005.1936-.5402.358-.7718zm15.5597 8.8498c-.1674-.0026-.3357.011-.498.028-1.316.161-2.5736.6137-3.7973 1.1052-2.7414 1.1517-5.3888 2.5755-7.7414 4.4042-.9378.7499-1.8651 1.5443-2.5592 2.5332-.2097.3296-.473.733-.324 1.1363.1912.2656.5474.3125.8495.353 1.056.094 2.1147-.0777 3.1456-.298 2.0806-.473 4.0946-1.257 5.9234-2.3584 1.3743-.7945 2.7032-1.6796 3.8954-2.7299.6688-.6066 1.3126-1.2602 1.7734-2.0433.213-.3758.401-.7872.392-1.2286.0025-.2486-.0236-.5595-.2648-.6971-.2394-.1514-.5155-.2003-.7946-.2046zm3.4259.0756c-.7889 1.993-2.3518 3.549-3.9691 4.8981-1.41 1.1436-2.9463 2.1275-4.5562 2.9648-2.185 1.2196-4.5369 2.177-6.999 2.6596 5.035.022 10.0706.004 15.1055.0088.226.0316.4575-.1425.4413-.3806.0066-2.8644 0-5.7288.0026-8.5933.0016-.5191.0073-1.0391-.0251-1.5573zM12.7172 15.757c.3604.7702.4009 1.6967.0543 2.4782-.3208.7686-.984 1.375-1.7687 1.6472-1.0505.362-2.276.0818-3.0656-.7014 1.4019-1.3824 3.0598-2.478 4.78-3.424z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'subway-arrow-ends',
    name: 'Subway Dual Exit Arrow Ends',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Subway Dual Exit Arrow Ends mark.',
    insight: 'The forward arrow on S and backward arrow on Y represent entering and exiting subways.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#008C15" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'arbys-ten-gallon-hat',
    name: 'Arby’s Ten-Gallon Western Hat',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Arby’s Ten-Gallon Western Hat mark.',
    insight: 'The towering ten-gallon cowboy hat has advertised roast beef sandwiches since 1964.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#D9272E" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'baskin-robbins-31-curve',
    name: 'Baskin-Robbins Pink 31 Arcs',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Baskin-Robbins Pink 31 Arcs mark.',
    insight: 'The pink stems of the B and R form the number 31: a different flavor for every day of the month.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#0055A5" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'ben-jerrys-cow-pasture',
    name: 'Ben & Jerry’s Woody Clouds & Cow',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Ben & Jerry’s Woody Clouds & Cow mark.',
    insight: 'Woody Jackson painted the black-and-white cow grazing under blue Vermont sky clouds in 1983.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#0066B1" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'haagen-dazs-oval-gold',
    name: 'Häagen-Dazs Regal Gold Oval',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Häagen-Dazs Regal Gold Oval mark.',
    insight: 'Reuben Mattus invented the Danish-sounding name in the Bronx to evoke artisanal cold cream.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#8B2332" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'chobani-warm-serif',
    name: 'Chobani Friendly Greek Yogurt Serif',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Chobani Friendly Greek Yogurt Serif mark.',
    insight: 'Leland Maschmeyer introduced the creamy, lush botanical typeface in 2017 to warm dairy aisles.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#1B3D2F" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'danone-boy-star',
    name: 'Danone Boy Reaching for Star',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Danone Boy Reaching for Star mark.',
    insight: 'Isaac Carasso named the yogurt after his son Daniel (Danon in Catalan) in Barcelona in 1919.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#0055A5" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'yoplait-six-flower-petals',
    name: 'Yoplait Six-Petal Flower Arcs',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Yoplait Six-Petal Flower Arcs mark.',
    insight: 'Six French dairy cooperatives merged in 1965, each represented by a flower petal.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="m18.938 5.31-.647-2.263-1.094-.28-.062-1.11L15.318.514l-1.036.274-.69-.788h-2.175l-.619.788L9.751.372l-1.754.764L7.61 2.22l-1.347.067-1.066 2.325.68 1.125-.63.96.29 2.03 1.251.415.012 1.302 1.937 1.119.908-.284.66.816v4.973H9.24v-.578H7.037v1.162H9.23v.579h1.075v3.517H5.062v1.162H7.42V24h6.929v-1.09h2.262v-1.162h-5.147v-4.626h1.624v-.927h-1.624v-4.097h1.286l.76-.74.84.336 2.098-.76.202-1.238 1.266-.13.83-2.043-.535-1.166Zm-1.453 2.243-.377.928-1.455.15-.237 1.442-1.045.377-1.128-.452-.963.937h-1.42l-.808-1-1.176.367-.921-.532L7.94 8.3l-1.356-.448-.126-.88.792-1.208-.742-1.227.515-1.124 1.42-.071.477-1.34.852-.372 1.403.558.806-1.027h1.082l.818.934 1.244-.329.881.554.077 1.36 1.274.326.31 1.09-.789 1.143zm-1.615 7.476h-2.783v1.163h2.783zM11.04 3.715l-1.036 1.038v1.87l1.049 1.037 2.975-.035 1.02-1.01.046-1.834-1.037-1.066Zm2.86 2.403-.354.349-2.023.024-.36-.356v-.903l.357-.357h2.047l.354.364z" fill="#F2B705" />
          </g>
          {showOfficial && (
            <path d="m18.938 5.31-.647-2.263-1.094-.28-.062-1.11L15.318.514l-1.036.274-.69-.788h-2.175l-.619.788L9.751.372l-1.754.764L7.61 2.22l-1.347.067-1.066 2.325.68 1.125-.63.96.29 2.03 1.251.415.012 1.302 1.937 1.119.908-.284.66.816v4.973H9.24v-.578H7.037v1.162H9.23v.579h1.075v3.517H5.062v1.162H7.42V24h6.929v-1.09h2.262v-1.162h-5.147v-4.626h1.624v-.927h-1.624v-4.097h1.286l.76-.74.84.336 2.098-.76.202-1.238 1.266-.13.83-2.043-.535-1.166Zm-1.453 2.243-.377.928-1.455.15-.237 1.442-1.045.377-1.128-.452-.963.937h-1.42l-.808-1-1.176.367-.921-.532L7.94 8.3l-1.356-.448-.126-.88.792-1.208-.742-1.227.515-1.124 1.42-.071.477-1.34.852-.372 1.403.558.806-1.027h1.082l.818.934 1.244-.329.881.554.077 1.36 1.274.326.31 1.09-.789 1.143zm-1.615 7.476h-2.783v1.163h2.783zM11.04 3.715l-1.036 1.038v1.87l1.049 1.037 2.975-.035 1.02-1.01.046-1.834-1.037-1.066Zm2.86 2.403-.354.349-2.023.024-.36-.356v-.903l.357-.357h2.047l.354.364z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'general-mills-sprouting-g',
    name: 'General Mills Sprouting Seedling G',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the General Mills Sprouting Seedling G mark.',
    insight: 'Lippincott designed the friendly curved G with three sprouting green leaves in 1965.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#003366" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'quaker-oats-larry',
    name: 'Quaker Oats Larry Hat Silhouette',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Quaker Oats Larry Hat Silhouette mark.',
    insight: 'Jim Schindler refined the friendly Quaker man silhouette wearing a black colonial tricorn hat.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#002B49" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'post-cereal-sun-c',
    name: 'Post Consumer Brands Golden Arch',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Post Consumer Brands Golden Arch mark.',
    insight: 'C.W. Post founded the cereal empire in Battle Creek in 1895 with warm morning sun arcs.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#D9272E" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'nabisco-red-triangle',
    name: 'Nabisco Corner Antenna Cross',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Nabisco Corner Antenna Cross mark.',
    insight: 'The red corner triangle houses the historic 15th-century Venetian printer mark cross.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#CC0000" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'keebler-hollow-tree',
    name: 'Keebler Hollow Tree Oak Silhouette',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Keebler Hollow Tree Oak Silhouette mark.',
    insight: 'Ernie Keebler and his elves bake fudge cookies inside the hollow trunk of a magic oak tree.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#006838" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'kraft-flavor-smile',
    name: 'Kraft Blue Hexagon & Flavor Smile',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Kraft Blue Hexagon & Flavor Smile mark.',
    insight: 'The bold red and blue hexagon container is framed by an appetizing red flavor curve.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#002B49" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'heinz-pickle-charm',
    name: 'Heinz Little Green Gherkin Charm',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Heinz Little Green Gherkin Charm mark.',
    insight: 'H.J. Heinz handed out millions of plaster pickle pins at the 1893 Chicago World’s Fair.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#006039" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'del-monte-shield-tomato',
    name: 'Del Monte Red Tomato Shield',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Del Monte Red Tomato Shield mark.',
    insight: 'The green and red shield has certified California orchard fruits and vegetables since 1886.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#006039" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'dole-sunburst-o',
    name: 'Dole Yellow Sunburst O-Ray',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Dole Yellow Sunburst O-Ray mark.',
    insight: 'Landor added the radiant yellow sun rays inside the letter O to evoke tropical plantation light.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#008542" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'chiquita-blue-sticker',
    name: 'Chiquita Blue Banana Oval Sticker',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Chiquita Blue Banana Oval Sticker mark.',
    insight: 'Dik Browne drew Miss Chiquita as a banana in 1944, later transformed into a woman in 1987.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#0055A5" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'tropicana-orange-straw',
    name: 'Tropicana Orange & Drinking Straw',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Tropicana Orange & Drinking Straw mark.',
    insight: 'Anthony T. Rossi pioneered flash pasteurization, sticking a red-and-white straw directly into fruit.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M0 0h24v24H0V0Zm3.43 20.572h17.143v-3.429H3.43v3.429Z" fill="#FF7900" />
          </g>
          {showOfficial && (
            <path d="M0 0h24v24H0V0Zm3.43 20.572h17.143v-3.429H3.43v3.429Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'minute-maid-black-badge',
    name: 'Minute Maid Black Citrus Slab',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Minute Maid Black Citrus Slab mark.',
    insight: 'Originally developed as dehydrated orange juice powder for soldiers during World War II.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
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
    id: 'ocean-spray-three-waves',
    name: 'Ocean Spray Three Breaking Waves',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Ocean Spray Three Breaking Waves mark.',
    insight: 'Three rolling blue surf waves symbolize Massachusetts bog cranberry farmers.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#004A99" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'welchs-grape-cluster',
    name: 'Welch’s Concord Grape Cluster',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Welch’s Concord Grape Cluster mark.',
    insight: 'Dr. Thomas Bramwell Welch pasteurized fresh Concord grape juice in New Jersey in 1869.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#4B0082" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'smuckers-gingham-arch',
    name: 'Smucker’s Heritage Gingham Arch',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Smucker’s Heritage Gingham Arch mark.',
    insight: 'Jerome Monroe Smucker signed each stone-ground apple cider crock with a gingham cloth top.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#CC0000" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'jif-three-color-bars',
    name: 'Jif Red-Green-Blue Letter Bars',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Jif Red-Green-Blue Letter Bars mark.',
    insight: 'Three bold vertical primary color blocks make Jif peanut butter instantly visible on shelves.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#004A99" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'skippy-teal-ribbon',
    name: 'Skippy Teal Script Ribbon',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Skippy Teal Script Ribbon mark.',
    insight: 'Joseph Rosefield patented hydrogenated peanut butter in 1932, scoring it into teal ribbons.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const val = getParamVal(values, showOfficial, 'apexHeight', 60);
      const scale = val / 60;
      return (
        <svg viewBox="-4 -4 32 32" width="220" height="200" style={{ overflow: 'visible' }}>
          <g transform={`translate(12, 12) scale(${scale}) translate(-12, -12)`}>
            <path d="M4.069 2.334v4.129h7.897a3.168 3.168 0 0 1 2.25.947c.596.604.932 1.425.933 2.281l.008 4.244v3.61H7.253A3.17 3.17 0 0 1 5 16.598a3.251 3.251 0 0 1-.932-2.283V6.463H0v8.014c0 .944.184 1.879.541 2.752a7.193 7.193 0 0 0 1.537 2.332 7.074 7.074 0 0 0 2.301 1.558c.86.362 1.783.547 2.714.547h4.723a3.32 3.32 0 0 0 2.365-.992c.627-.636.98-1.498.98-2.397v-.732h8.824l-2.328-2.283L24 12.965h-6.309a5.802 5.802 0 0 0 2.191-2.884 5.893 5.893 0 0 0 .071-3.639 5.819 5.819 0 0 0-2.075-2.971 5.685 5.685 0 0 0-3.411-1.137H4.069Zm6.707 6.137c-1.212 0-2.194.997-2.194 2.225 0 1.229.982 2.225 2.194 2.225s2.194-.996 2.194-2.225c0-1.228-.982-2.225-2.194-2.225Z" fill="#005149" />
          </g>
          {showOfficial && (
            <path d="M4.069 2.334v4.129h7.897a3.168 3.168 0 0 1 2.25.947c.596.604.932 1.425.933 2.281l.008 4.244v3.61H7.253A3.17 3.17 0 0 1 5 16.598a3.251 3.251 0 0 1-.932-2.283V6.463H0v8.014c0 .944.184 1.879.541 2.752a7.193 7.193 0 0 0 1.537 2.332 7.074 7.074 0 0 0 2.301 1.558c.86.362 1.783.547 2.714.547h4.723a3.32 3.32 0 0 0 2.365-.992c.627-.636.98-1.498.98-2.397v-.732h8.824l-2.328-2.283L24 12.965h-6.309a5.802 5.802 0 0 0 2.191-2.884 5.893 5.893 0 0 0 .071-3.639 5.819 5.819 0 0 0-2.075-2.971 5.685 5.685 0 0 0-3.411-1.137H4.069Zm6.707 6.137c-1.212 0-2.194.997-2.194 2.225 0 1.229.982 2.225 2.194 2.225s2.194-.996 2.194-2.225c0-1.228-.982-2.225-2.194-2.225Z" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          )}
        </svg>
      );
    }
  },
  {
    id: 'peter-pan-silhouette',
    name: 'Peter Pan Flying Youth Silhouette',
    archetypeId: 'apex-curve',
    prompt: 'Calibrate the parabolic apex curve drop and corner curvature of the Peter Pan Flying Youth Silhouette mark.',
    insight: 'J.M. Barrie’s boy who wouldn’t grow up flies in green silhouette across creamy peanut jars.',
    parameters: [
      {
        id: 'apexHeight',
        label: 'Arch Apex Join Elevation',
        min: 25,
        max: 95,
        step: 0.5,
        targetValue: 60,
        tolerance: 14,
        unit: 'px'
      }
    ],
    render: (values, showOfficial) => {
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#008000" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
          )}
        </svg>
      );
    }
  }
];

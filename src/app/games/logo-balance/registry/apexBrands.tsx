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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#5865F2" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#FFFC00" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#FF4500" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#24A1DE" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#25D366" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#3A76F0" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#9146FF" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#181717" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#FC6D26" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#00C805" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#05CE78" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#0052CC" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#F24E1E" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#FDB300" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#00C4CC" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#DA1F26" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#003791" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#107C10" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#C8102E" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#ED1C24" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#002244" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#171A21" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#0E1111" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#E82127" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#003399" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#F37021" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#C5A059" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#C8102E" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#D62300" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#D62300" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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
      const drop = getParamVal(values, showOfficial, 'apexHeight', 60);
      return (
        <svg viewBox="-100 -80 200 160" width="260" height="200">
          <path d={`M -75 50 C -75 -40 -25 ${drop - 60} 0 ${drop - 20} C 25 ${drop - 60} 75 -40 75 50 Z`} fill="#702082" />
          {showOfficial && (
            <SpecGuideLine x1="-70" y1="40" x2="70" y2="40" />
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

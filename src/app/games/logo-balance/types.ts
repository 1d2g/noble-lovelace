export type ArchetypeId = 
  | 'radial-seam' 
  | 'intersecting-rings' 
  | 'stroke-ratio' 
  | 'tilt-angle' 
  | 'apex-curve' 
  | 'negative-gap';

export interface ArchetypeMeta {
  id: ArchetypeId;
  name: string;
  categoryNumber: number;
  description: string;
}

export const ARCHETYPES: ArchetypeMeta[] = [
  {
    id: 'radial-seam',
    name: 'Radial Seam & Wedge',
    categoryNumber: 1,
    description: 'Angular color sector cuts and radial division lines.'
  },
  {
    id: 'intersecting-rings',
    name: 'Intersecting Spheres & Rings',
    categoryNumber: 2,
    description: 'Center-to-center overlap spacing and lens proportions.'
  },
  {
    id: 'stroke-ratio',
    name: 'Stroke & Negative Space Ratio',
    categoryNumber: 3,
    description: 'Concentric band thicknesses vs negative space clearance.'
  },
  {
    id: 'tilt-angle',
    name: 'Dynamic Tilt & Angle',
    categoryNumber: 4,
    description: 'Counter-clockwise shear and rotational velocity.'
  },
  {
    id: 'apex-curve',
    name: 'Apex & Curve Proportion',
    categoryNumber: 5,
    description: 'Arch peak elevation, squircle curvature, and radii.'
  },
  {
    id: 'negative-gap',
    name: 'Negative Space Clearance',
    categoryNumber: 6,
    description: 'Hidden silhouettes, arrow widths, and notch cuts.'
  }
];

export interface SliderParam {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  targetValue: number;
  tolerance: number;
  unit: string;
  colorA?: string;
  colorB?: string;
}

export interface DayChallenge {
  id: string;
  dayNumber: number;
  archetypeId: ArchetypeId;
  brandName: string;
  taskPrompt: string;
  designerInsight: string;
  parameters: SliderParam[];
}

export interface DaySummary {
  dayNumber: number;
  dateString: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  averageScore?: number;
}

import { DayChallenge, SliderParam } from './types';
import {
  getChallengesForDay as getRegistryChallenges,
  RADIAL_BRANDS as REG_RADIAL,
  RINGS_BRANDS as REG_RINGS,
  STROKE_BRANDS as REG_STROKE,
  TILT_BRANDS as REG_TILT,
  APEX_BRANDS as REG_APEX,
  GAP_BRANDS as REG_GAP,
  ALL_BRANDS,
  getBrandById,
} from './registry';

export interface BrandChallengeDef {
  id: string;
  archetypeId: 'radial-seam' | 'intersecting-rings' | 'stroke-ratio' | 'tilt-angle' | 'apex-curve' | 'negative-gap';
  name: string;
  prompt: string;
  insight: string;
  parameters: SliderParam[];
}

export const RADIAL_BRANDS = REG_RADIAL;
export const RINGS_BRANDS = REG_RINGS;
export const STROKE_BRANDS = REG_STROKE;
export const TILT_BRANDS = REG_TILT;
export const APEX_BRANDS = REG_APEX;
export const GAP_BRANDS = REG_GAP;
export { ALL_BRANDS, getBrandById };

export function getChallengesForDay(dayNumber: number): DayChallenge[] {
  return getRegistryChallenges(dayNumber);
}

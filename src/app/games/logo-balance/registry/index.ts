import { DayChallenge } from '../types';
import { BrandModel } from './types';
import { RADIAL_BRANDS } from './radialBrands';
import { RINGS_BRANDS } from './ringsBrands';
import { STROKE_BRANDS } from './strokeBrands';
import { TILT_BRANDS } from './tiltBrands';
import { APEX_BRANDS } from './apexBrands';
import { GAP_BRANDS } from './gapBrands';

export {
  RADIAL_BRANDS,
  RINGS_BRANDS,
  STROKE_BRANDS,
  TILT_BRANDS,
  APEX_BRANDS,
  GAP_BRANDS,
};

export const ALL_BRANDS: BrandModel[] = [
  ...RADIAL_BRANDS,
  ...RINGS_BRANDS,
  ...STROKE_BRANDS,
  ...TILT_BRANDS,
  ...APEX_BRANDS,
  ...GAP_BRANDS,
];

const BRAND_MAP = new Map<string, BrandModel>();
ALL_BRANDS.forEach((brand) => {
  BRAND_MAP.set(brand.id, brand);
});

export function getBrandById(id: string): BrandModel | undefined {
  return BRAND_MAP.get(id);
}

/**
 * 100 Days of Zero Repeats:
 * Day N selects index (N - 1) from each of the 6 archetype pools (each pool has 100 distinct brands).
 * Total: 600 unique logo challenges across 100 days.
 */
export function getChallengesForDay(dayNumber: number): DayChallenge[] {
  const dayIdx = Math.max(0, Math.min(99, dayNumber - 1));

  const r1 = RADIAL_BRANDS[dayIdx] || RADIAL_BRANDS[0];
  const r2 = RINGS_BRANDS[dayIdx] || RINGS_BRANDS[0];
  const r3 = STROKE_BRANDS[dayIdx] || STROKE_BRANDS[0];
  const r4 = TILT_BRANDS[dayIdx] || TILT_BRANDS[0];
  const r5 = APEX_BRANDS[dayIdx] || APEX_BRANDS[0];
  const r6 = GAP_BRANDS[dayIdx] || GAP_BRANDS[0];

  const brandList = [r1, r2, r3, r4, r5, r6];

  return brandList.map((brand, catIdx) => ({
    id: `day-${dayNumber}-archetype-${catIdx + 1}-${brand.id}`,
    dayNumber,
    archetypeId: brand.archetypeId,
    brandId: brand.id,
    brandName: brand.name,
    taskPrompt: brand.prompt,
    designerInsight: brand.insight,
    parameters: brand.parameters,
  }));
}

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { APEX_BRANDS } from '../src/app/games/logo-balance/registry/apexBrands';
import { TILT_BRANDS } from '../src/app/games/logo-balance/registry/tiltBrands';
import { STROKE_BRANDS } from '../src/app/games/logo-balance/registry/strokeBrands';
import { GAP_BRANDS } from '../src/app/games/logo-balance/registry/gapBrands';
import { RADIAL_BRANDS } from '../src/app/games/logo-balance/registry/radialBrands';
import { RINGS_BRANDS } from '../src/app/games/logo-balance/registry/ringsBrands';
import { BrandModel } from '../src/app/games/logo-balance/registry/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const AUDIT_PROGRESS_FILE = path.join(__dirname, 'audit-progress.json');

interface BrandAuditResult {
  id: string;
  name: string;
  archetypeId: string;
  paramCount: number;
  paramValid: boolean;
  minRenderValid: boolean;
  targetRenderValid: boolean;
  maxRenderValid: boolean;
  stepsRenderValid: boolean;
  guideRenderValid: boolean;
  hasSvgTag: boolean;
  errors: string[];
  warnings: string[];
}

interface ArchetypeAuditSummary {
  archetypeId: string;
  file: string;
  totalBrands: number;
  passedBrands: number;
  failedBrands: number;
  brands: Record<string, BrandAuditResult>;
}

function auditBrand(brand: BrandModel): BrandAuditResult {
  const result: BrandAuditResult = {
    id: brand.id,
    name: brand.name,
    archetypeId: brand.archetypeId,
    paramCount: brand.parameters.length,
    paramValid: true,
    minRenderValid: true,
    targetRenderValid: true,
    maxRenderValid: true,
    stepsRenderValid: true,
    guideRenderValid: true,
    hasSvgTag: true,
    errors: [],
    warnings: [],
  };

  if (!brand.parameters || brand.parameters.length === 0) {
    result.paramValid = false;
    result.errors.push('No parameters defined');
  }

  // Check parameter bounds
  for (const p of brand.parameters) {
    if (p.min >= p.max) {
      result.paramValid = false;
      result.errors.push(`Param ${p.id}: min (${p.min}) >= max (${p.max})`);
    }
    if (p.targetValue < p.min || p.targetValue > p.max) {
      result.paramValid = false;
      result.errors.push(`Param ${p.id}: targetValue (${p.targetValue}) out of range [${p.min}, ${p.max}]`);
    }
    if (p.step <= 0) {
      result.paramValid = false;
      result.errors.push(`Param ${p.id}: step (${p.step}) <= 0`);
    }
    if (p.tolerance <= 0) {
      result.paramValid = false;
      result.errors.push(`Param ${p.id}: tolerance (${p.tolerance}) <= 0`);
    }
  }

  const checkMarkup = (markup: string, testCase: string): boolean => {
    let valid = true;
    if (!markup.includes('<svg') || !markup.includes('</svg>')) {
      result.hasSvgTag = false;
      result.errors.push(`${testCase}: Missing <svg> root tag`);
      valid = false;
    }
    if (markup.includes('NaN')) {
      result.errors.push(`${testCase}: Output contains 'NaN'`);
      valid = false;
    }
    if (markup.includes('undefined')) {
      result.errors.push(`${testCase}: Output contains 'undefined'`);
      valid = false;
    }
    if (markup.includes('Infinity')) {
      result.errors.push(`${testCase}: Output contains 'Infinity'`);
      valid = false;
    }
    if (/d="[^"]*NaN[^"]*"/.test(markup)) {
      result.errors.push(`${testCase}: Broken path d attribute containing NaN`);
      valid = false;
    }
    return valid;
  };

  // 1. Target Value render (official=false)
  try {
    const targetVals: Record<string, number> = {};
    brand.parameters.forEach(p => { targetVals[p.id] = p.targetValue; });
    const targetElement = brand.render(targetVals, false);
    const targetMarkup = renderToStaticMarkup(targetElement as React.ReactElement);
    if (!checkMarkup(targetMarkup, 'Target Values')) {
      result.targetRenderValid = false;
    }
  } catch (err: any) {
    result.targetRenderValid = false;
    result.errors.push(`Target Values render threw exception: ${err?.message || err}`);
  }

  // 2. Official Overlay render (official=true)
  try {
    const targetVals: Record<string, number> = {};
    brand.parameters.forEach(p => { targetVals[p.id] = p.targetValue; });
    const officialElement = brand.render(targetVals, true);
    const officialMarkup = renderToStaticMarkup(officialElement as React.ReactElement);
    if (!checkMarkup(officialMarkup, 'Official Guide Mode')) {
      result.guideRenderValid = false;
    }
  } catch (err: any) {
    result.guideRenderValid = false;
    result.errors.push(`Official Guide Mode render threw exception: ${err?.message || err}`);
  }

  // 3. Min Values render
  try {
    const minVals: Record<string, number> = {};
    brand.parameters.forEach(p => { minVals[p.id] = p.min; });
    const minElement = brand.render(minVals, false);
    const minMarkup = renderToStaticMarkup(minElement as React.ReactElement);
    if (!checkMarkup(minMarkup, 'Min Values')) {
      result.minRenderValid = false;
    }
  } catch (err: any) {
    result.minRenderValid = false;
    result.errors.push(`Min Values render threw exception: ${err?.message || err}`);
  }

  // 4. Max Values render
  try {
    const maxVals: Record<string, number> = {};
    brand.parameters.forEach(p => { maxVals[p.id] = p.max; });
    const maxElement = brand.render(maxVals, false);
    const maxMarkup = renderToStaticMarkup(maxElement as React.ReactElement);
    if (!checkMarkup(maxMarkup, 'Max Values')) {
      result.maxRenderValid = false;
    }
  } catch (err: any) {
    result.maxRenderValid = false;
    result.errors.push(`Max Values render threw exception: ${err?.message || err}`);
  }

  // 5. Dynamic Steps interpolation (25%, 50%, 75%)
  try {
    for (const ratio of [0.25, 0.5, 0.75]) {
      const stepVals: Record<string, number> = {};
      brand.parameters.forEach(p => { stepVals[p.id] = p.min + (p.max - p.min) * ratio; });
      const stepElement = brand.render(stepVals, false);
      const stepMarkup = renderToStaticMarkup(stepElement as React.ReactElement);
      if (!checkMarkup(stepMarkup, `Step ${ratio * 100}%`)) {
        result.stepsRenderValid = false;
      }
    }
  } catch (err: any) {
    result.stepsRenderValid = false;
    result.errors.push(`Step interpolation render threw exception: ${err?.message || err}`);
  }

  return result;
}

export function runFullHarness() {
  console.log('================================================================');
  console.log('🧪 LOGO BALANCE AUTOMATED TEST HARNESS & INTEGRITY SUITE');
  console.log('================================================================\n');

  const pools: { file: string; id: string; brands: BrandModel[] }[] = [
    { file: 'apexBrands.tsx', id: 'apex-curve', brands: APEX_BRANDS },
    { file: 'tiltBrands.tsx', id: 'tilt-angle', brands: TILT_BRANDS },
    { file: 'strokeBrands.tsx', id: 'stroke-ratio', brands: STROKE_BRANDS },
    { file: 'gapBrands.tsx', id: 'negative-gap', brands: GAP_BRANDS },
    { file: 'radialBrands.tsx', id: 'radial-seam', brands: RADIAL_BRANDS },
    { file: 'ringsBrands.tsx', id: 'intersecting-rings', brands: RINGS_BRANDS },
  ];

  const overallProgress: {
    timestamp: string;
    totalAudited: number;
    totalPassed: number;
    totalFailed: number;
    pools: Record<string, ArchetypeAuditSummary>;
  } = {
    timestamp: new Date().toISOString(),
    totalAudited: 0,
    totalPassed: 0,
    totalFailed: 0,
    pools: {},
  };

  let globalPassed = 0;
  let globalFailed = 0;

  for (const pool of pools) {
    console.log(`\n🔍 Auditing pool: ${pool.file} (${pool.brands.length} brands)...`);
    const poolSummary: ArchetypeAuditSummary = {
      archetypeId: pool.id,
      file: pool.file,
      totalBrands: pool.brands.length,
      passedBrands: 0,
      failedBrands: 0,
      brands: {},
    };

    for (const brand of pool.brands) {
      const res = auditBrand(brand);
      const isPassed = res.errors.length === 0;
      if (isPassed) {
        poolSummary.passedBrands++;
        globalPassed++;
      } else {
        poolSummary.failedBrands++;
        globalFailed++;
        console.error(`  ❌ [${brand.id}] ${brand.name}: ${res.errors.join('; ')}`);
      }
      poolSummary.brands[brand.id] = res;
    }

    console.log(`   Pool Result: ${poolSummary.passedBrands}/${poolSummary.totalBrands} passed (${poolSummary.failedBrands} issues).`);
    overallProgress.pools[pool.id] = poolSummary;
  }

  overallProgress.totalAudited = globalPassed + globalFailed;
  overallProgress.totalPassed = globalPassed;
  overallProgress.totalFailed = globalFailed;

  fs.writeFileSync(AUDIT_PROGRESS_FILE, JSON.stringify(overallProgress, null, 2), 'utf8');
  console.log(`\n📄 Progress manifest saved to: ${AUDIT_PROGRESS_FILE}`);
  console.log(`\n📊 OVERALL SUMMARY: ${globalPassed}/${globalPassed + globalFailed} brands passed.`);

  return overallProgress;
}

if (process.argv[1] && process.argv[1].endsWith('harness.ts')) {
  runFullHarness();
}

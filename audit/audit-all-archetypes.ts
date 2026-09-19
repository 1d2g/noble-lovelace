import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { APEX_BRANDS } from '../src/app/games/logo-balance/registry/apexBrands';
import { TILT_BRANDS } from '../src/app/games/logo-balance/registry/tiltBrands';
import { STROKE_BRANDS } from '../src/app/games/logo-balance/registry/strokeBrands';
import { GAP_BRANDS } from '../src/app/games/logo-balance/registry/gapBrands';
import { RADIAL_BRANDS } from '../src/app/games/logo-balance/registry/radialBrands';
import { RINGS_BRANDS } from '../src/app/games/logo-balance/registry/ringsBrands';
import { BrandModel } from '../src/app/games/logo-balance/registry/types';

interface ArchetypeGroup {
  file: string;
  name: string;
  brands: BrandModel[];
}

const groups: ArchetypeGroup[] = [
  { file: 'apexBrands.tsx', name: 'Apex Curve', brands: APEX_BRANDS },
  { file: 'tiltBrands.tsx', name: 'Tilt Angle', brands: TILT_BRANDS },
  { file: 'strokeBrands.tsx', name: 'Stroke Ratio', brands: STROKE_BRANDS },
  { file: 'gapBrands.tsx', name: 'Negative Gap', brands: GAP_BRANDS },
  { file: 'radialBrands.tsx', name: 'Radial Seam', brands: RADIAL_BRANDS },
  { file: 'ringsBrands.tsx', name: 'Intersecting Rings', brands: RINGS_BRANDS },
];

console.log('====================================================');
console.log('🔎 DEEP AUDIT: ALL 6 ARCHETYPES (600 BRANDS)');
console.log('====================================================\n');

let totalIssues = 0;

for (const group of groups) {
  console.log(`\n📁 Checking ${group.file} (${group.brands.length} brands)...`);
  let groupIssues = 0;

  for (let idx = 0; idx < group.brands.length; idx++) {
    const brand = group.brands[idx];
    const issues: string[] = [];

    // 1. Check ID and name
    if (!brand.id || !brand.name) {
      issues.push('Missing ID or Name');
    }

    // 2. Check parameters
    if (!brand.parameters || brand.parameters.length === 0) {
      issues.push('No parameters');
    } else {
      for (const p of brand.parameters) {
        if (p.min >= p.max) issues.push(`Param ${p.id}: min (${p.min}) >= max (${p.max})`);
        if (p.targetValue < p.min || p.targetValue > p.max) issues.push(`Param ${p.id}: targetValue (${p.targetValue}) out of [${p.min}, ${p.max}]`);
        if (p.step <= 0) issues.push(`Param ${p.id}: step <= 0`);
        if (p.tolerance <= 0) issues.push(`Param ${p.id}: tolerance <= 0`);
      }
    }

    // 3. Render at target, min, max, official
    try {
      const targetVals: Record<string, number> = {};
      brand.parameters.forEach(p => targetVals[p.id] = p.targetValue);
      const minVals: Record<string, number> = {};
      brand.parameters.forEach(p => minVals[p.id] = p.min);
      const maxVals: Record<string, number> = {};
      brand.parameters.forEach(p => maxVals[p.id] = p.max);

      const targetMarkup = renderToStaticMarkup(brand.render(targetVals, false) as React.ReactElement);
      const officialMarkup = renderToStaticMarkup(brand.render(targetVals, true) as React.ReactElement);
      const minMarkup = renderToStaticMarkup(brand.render(minVals, false) as React.ReactElement);
      const maxMarkup = renderToStaticMarkup(brand.render(maxVals, false) as React.ReactElement);

      // Check SVG tags
      if (!targetMarkup.includes('<svg') || !targetMarkup.includes('</svg>')) {
        issues.push('Target markup missing <svg> tags');
      }

      // Check for viewBox
      if (!targetMarkup.includes('viewBox=')) {
        issues.push('Target markup missing viewBox attribute');
      }

      // Check for NaN, undefined, Infinity
      for (const [mode, markup] of [['target', targetMarkup], ['official', officialMarkup], ['min', minMarkup], ['max', maxMarkup]]) {
        if (markup.includes('NaN')) issues.push(`${mode} markup contains 'NaN'`);
        if (markup.includes('undefined')) issues.push(`${mode} markup contains 'undefined'`);
        if (markup.includes('Infinity')) issues.push(`${mode} markup contains 'Infinity'`);
      }

      // Check official guide overlay
      if (officialMarkup === targetMarkup) {
        issues.push('Official mode produces identical markup (no guide overlay rendered)');
      }

    } catch (e: any) {
      issues.push(`Render exception: ${e?.message || e}`);
    }

    if (issues.length > 0) {
      groupIssues++;
      totalIssues++;
      console.log(`  ❌ [Brand #${idx + 1}: ${brand.id}] ${brand.name}:`);
      issues.forEach(iss => console.log(`     - ${iss}`));
    }
  }

  if (groupIssues === 0) {
    console.log(`  ✅ All 100 brands in ${group.file} passed structural & rendering verification!`);
  } else {
    console.log(`  ⚠️ ${groupIssues} brands in ${group.file} had issues.`);
  }
}

console.log('\n====================================================');
console.log(`TOTAL AUDIT COMPLETE: ${600 - totalIssues} / 600 Clean (${totalIssues} issues found)`);
console.log('====================================================');

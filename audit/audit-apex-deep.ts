import { APEX_BRANDS } from '../src/app/games/logo-balance/registry/apexBrands';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

console.log(`=== AUDIT BATCH 1: APEX_BRANDS (${APEX_BRANDS.length} Brands) ===`);

let passed = 0;
const issues: Array<{ id: string; name: string; error: string }> = [];

for (let i = 0; i < APEX_BRANDS.length; i++) {
  const brand = APEX_BRANDS[i];
  
  // 1. Verify basic properties
  if (!brand.id || !brand.name || !brand.prompt || !brand.insight) {
    issues.push({ id: brand.id, name: brand.name, error: 'Missing metadata' });
    continue;
  }
  
  // 2. Verify parameters
  if (!brand.parameters || brand.parameters.length === 0) {
    issues.push({ id: brand.id, name: brand.name, error: 'Missing parameters' });
    continue;
  }
  
  let paramValid = true;
  for (const p of brand.parameters) {
    if (p.min >= p.max || p.targetValue < p.min || p.targetValue > p.max || p.step <= 0 || p.tolerance <= 0) {
      issues.push({ id: brand.id, name: brand.name, error: `Invalid param ${p.id}: min=${p.min}, max=${p.max}, target=${p.targetValue}` });
      paramValid = false;
    }
  }
  if (!paramValid) continue;

  // 3. Render at min, target, max, and official
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

    if (targetMarkup.includes('NaN') || minMarkup.includes('NaN') || maxMarkup.includes('NaN')) {
      issues.push({ id: brand.id, name: brand.name, error: 'Render contains NaN' });
      continue;
    }

    if (officialMarkup === targetMarkup) {
      issues.push({ id: brand.id, name: brand.name, error: 'Official guide missing overlay' });
      continue;
    }

    passed++;
  } catch (err: any) {
    issues.push({ id: brand.id, name: brand.name, error: `Render threw exception: ${err?.message || err}` });
  }
}

console.log(`Results: ${passed}/${APEX_BRANDS.length} passed.`);
if (issues.length > 0) {
  console.log('Issues found:');
  issues.forEach(iss => console.log(`  - [${iss.id}] ${iss.name}: ${iss.error}`));
} else {
  console.log('✅ Batch 1 APEX_BRANDS 100/100 verified clean!');
}

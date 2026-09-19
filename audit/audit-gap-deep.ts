import { GAP_BRANDS } from '../src/app/games/logo-balance/registry/gapBrands';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

console.log(`=== AUDIT BATCH 4: GAP_BRANDS (${GAP_BRANDS.length} Brands) ===`);

let passed = 0;
const issues: Array<{ id: string; name: string; error: string }> = [];

for (let i = 0; i < GAP_BRANDS.length; i++) {
  const brand = GAP_BRANDS[i];
  
  if (!brand.id || !brand.name || !brand.prompt || !brand.insight) {
    issues.push({ id: brand.id, name: brand.name, error: 'Missing metadata' });
    continue;
  }
  
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

    // Test intermediate interpolation
    for (const ratio of [0.25, 0.5, 0.75]) {
      const stepVals: Record<string, number> = {};
      brand.parameters.forEach(p => stepVals[p.id] = p.min + (p.max - p.min) * ratio);
      const stepMarkup = renderToStaticMarkup(brand.render(stepVals, false) as React.ReactElement);
      if (stepMarkup.includes('NaN') || stepMarkup.includes('undefined')) {
        issues.push({ id: brand.id, name: brand.name, error: `Step ${ratio} interpolation produced invalid markup` });
        break;
      }
    }

    passed++;
  } catch (err: any) {
    issues.push({ id: brand.id, name: brand.name, error: `Render threw exception: ${err?.message || err}` });
  }
}

console.log(`Results: ${passed}/${GAP_BRANDS.length} passed.`);
if (issues.length > 0) {
  console.log('Issues found:');
  issues.forEach(iss => console.log(`  - [${iss.id}] ${iss.name}: ${iss.error}`));
} else {
  console.log('✅ Batch 4 GAP_BRANDS 100/100 verified clean!');
}

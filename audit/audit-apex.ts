import { APEX_BRANDS } from '../src/app/games/logo-balance/registry/apexBrands';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

console.log(`Inspecting ${APEX_BRANDS.length} APEX brands...`);

const report: Array<{
  index: number;
  id: string;
  name: string;
  params: any[];
  hasGuideInOfficial: boolean;
  viewBox: string;
}> = [];

for (let i = 0; i < APEX_BRANDS.length; i++) {
  const brand = APEX_BRANDS[i];
  
  // Render target
  const targetVals: Record<string, number> = {};
  brand.parameters.forEach(p => targetVals[p.id] = p.targetValue);
  
  const officialHtml = renderToStaticMarkup(brand.render(targetVals, true) as React.ReactElement);
  const normalHtml = renderToStaticMarkup(brand.render(targetVals, false) as React.ReactElement);
  
  const hasGuide = officialHtml !== normalHtml && (
    officialHtml.includes('SpecGuide') || 
    officialHtml.includes('stroke="#10B981"') || 
    officialHtml.includes('strokeDasharray') || 
    officialHtml.includes('stroke-dasharray') ||
    officialHtml.length > normalHtml.length
  );
  
  const viewBoxMatch = normalHtml.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : 'missing';

  report.push({
    index: i + 1,
    id: brand.id,
    name: brand.name,
    params: brand.parameters.map(p => ({ id: p.id, target: p.targetValue, range: `[${p.min}, ${p.max}]` })),
    hasGuideInOfficial: hasGuide,
    viewBox
  });
}

console.log('Brands without spec guide in official mode:');
const missingGuides = report.filter(r => !r.hasGuideInOfficial);
console.log(`Count: ${missingGuides.length}`);
missingGuides.forEach(m => console.log(` - Day ${m.index}: ${m.id} (${m.name})`));

console.log('\nBrands with missing viewBox:');
const missingVb = report.filter(r => r.viewBox === 'missing');
console.log(`Count: ${missingVb.length}`);
missingVb.forEach(m => console.log(` - Day ${m.index}: ${m.id} (${m.name})`));

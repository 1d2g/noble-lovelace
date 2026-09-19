import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const registryDir = path.join(__dirname, '..', 'src', 'app', 'games', 'logo-balance', 'registry');

const files = [
  'apexBrands.tsx',
  'tiltBrands.tsx',
  'strokeBrands.tsx',
  'gapBrands.tsx',
  'radialBrands.tsx',
  'ringsBrands.tsx'
];

console.log('=== LOGO BALANCE REGISTRY AUDIT ===');
for (const f of files) {
  const filePath = path.join(registryDir, f);
  const content = fs.readFileSync(filePath, 'utf8');
  // Match brand id definitions: { \n id: '...' or id: "..."
  const brandMatches = content.match(/id:\s*['"]([a-zA-Z0-9_-]+)['"],\s*name:\s*['"]([^'"]+)['"]/g) || [];
  console.log(`${f}: ${brandMatches.length} brands identified`);
}

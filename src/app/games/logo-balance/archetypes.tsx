import React from 'react';
import { DayChallenge } from './types';
import { getBrandById } from './registry';
import { degToRad, pt, arcPath } from './registry/helpers';

export { degToRad, pt, arcPath };

/**
 * Universal SVG Dispatcher for Logo Balance:
 * Delegates to the audited 600-brand registry (100 days of zero repeats).
 */
export function renderChallengeSvg(
  challenge: DayChallenge,
  userValues: Record<string, number>,
  showOfficial: boolean
): React.ReactNode {
  // First, check explicit brandId
  if (challenge.brandId) {
    const brand = getBrandById(challenge.brandId);
    if (brand) {
      return brand.render(userValues, showOfficial);
    }
  }

  // Second, check challenge id lookup
  const directBrand = getBrandById(challenge.id);
  if (directBrand) {
    return directBrand.render(userValues, showOfficial);
  }

  // Fallback: search by brand name substring
  const cleanName = challenge.brandName.toLowerCase();
  if (cleanName.includes('google')) return getBrandById('google-g')?.render(userValues, showOfficial);
  if (cleanName.includes('bmw')) return getBrandById('bmw-roundel')?.render(userValues, showOfficial);
  if (cleanName.includes('audi')) return getBrandById('audi-rings')?.render(userValues, showOfficial);
  if (cleanName.includes('target')) return getBrandById('target-bullseye')?.render(userValues, showOfficial);
  if (cleanName.includes('cbs')) return getBrandById('cbs-eyemark')?.render(userValues, showOfficial);
  if (cleanName.includes('spotify')) return getBrandById('spotify-waves')?.render(userValues, showOfficial);
  if (cleanName.includes('nike')) return getBrandById('nike-swoosh')?.render(userValues, showOfficial);
  if (cleanName.includes('mcdonald')) return getBrandById('mcdonalds-arches')?.render(userValues, showOfficial);
  if (cleanName.includes('instagram')) return getBrandById('instagram-squircle')?.render(userValues, showOfficial);
  if (cleanName.includes('fedex')) return getBrandById('fedex-arrow')?.render(userValues, showOfficial);
  if (cleanName.includes('carrefour')) return getBrandById('carrefour-notch')?.render(userValues, showOfficial);

  return null;
}

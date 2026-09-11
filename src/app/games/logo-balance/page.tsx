import type { Metadata } from 'next';
import LogoBalanceGame from './LogoBalanceGame';

export const metadata: Metadata = {
  title: 'Logo Balance | Daily Optical Brand Challenge | dg.tools',
  description: 'Test your optical intuition. Adjust the geometry and balance of iconic brand logos (Google, Mastercard, Target, Spotify) to match official design specs.',
  openGraph: {
    title: 'Logo Balance | Daily Optical Brand Challenge | dg.tools',
    description: 'Can you eyeball the geometry of famous brand logos? Play the daily optical precision challenge.',
    url: 'https://dg.tools/games/logo-balance',
  },
};

export default function LogoBalancePage() {
  return <LogoBalanceGame />;
}

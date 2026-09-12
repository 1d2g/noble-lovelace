export const TOTAL_DAYS = 100;

// Anchor epoch: September 12, 2026 = Day 1
export const ANCHOR_EPOCH = new Date('2026-09-12T00:00:00Z').getTime();

export function getCurrentDayNumber(): number {
  const now = Date.now();
  const diff = now - ANCHOR_EPOCH;
  const day = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, Math.min(TOTAL_DAYS, day));
}

export function isDayUnlocked(dayNumber: number): boolean {
  const current = getCurrentDayNumber();
  return dayNumber <= current && dayNumber >= 1 && dayNumber <= TOTAL_DAYS;
}

export function getDayDateString(dayNumber: number): string {
  const targetTime = ANCHOR_EPOCH + (dayNumber - 1) * (1000 * 60 * 60 * 24);
  const d = new Date(targetTime);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

export interface StoredDayResult {
  dayNumber: number;
  completedAt: string;
  scores: number[]; // 6 scores for the 6 archetypes
  averageScore: number;
}

export function saveDayResult(result: StoredDayResult): void {
  if (typeof window === 'undefined') return;
  try {
    const key = `logo_balance_day_${result.dayNumber}`;
    localStorage.setItem(key, JSON.stringify(result));

    // Update played list
    const playedKey = 'logo_balance_played_days';
    const playedRaw = localStorage.getItem(playedKey);
    const played: number[] = playedRaw ? JSON.parse(playedRaw) : [];
    if (!played.includes(result.dayNumber)) {
      played.push(result.dayNumber);
      localStorage.setItem(playedKey, JSON.stringify(played));
    }
  } catch (e) {}
}

export function getSavedDayResult(dayNumber: number): StoredDayResult | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(`logo_balance_day_${dayNumber}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

export function getPlayedDaysList(): number[] {
  if (typeof window === 'undefined') return [];
  try {
    const playedRaw = localStorage.getItem('logo_balance_played_days');
    return playedRaw ? JSON.parse(playedRaw) : [];
  } catch (e) {
    return [];
  }
}

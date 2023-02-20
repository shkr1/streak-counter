import { Streak } from ".";

/** Used when saving the streak to `localStorage` */
export const STREAK_KEY = "streak";

export function differenceInDays(dateLeft: Date, dateRight: Date): number {
  const diffTime = Math.abs(dateLeft.getTime() - dateRight.getTime());
  const differenceInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return differenceInDays;
}

export function formattedDate(date: Date): string {
  return date.toLocaleDateString("en-US");
}

export function shouldIncrementOrResetStreakCount(
  currentDate: Date,
  lastLoginDate: string
): "increment" | "none" | "reset" {
  const difference = differenceInDays(currentDate, new Date(lastLoginDate));

  if (difference === 1) {
    return "increment";
  }

  if (difference === 0) {
    return "none";
  }

  return "reset";
}

export function buildStreak(
  date: Date,
  overrideDefaults?: Partial<Streak>
): Streak {
  const defaultStreak: Streak = {
    currentCount: 1,
    startDate: formattedDate(date),
    lastLoginDate: formattedDate(date),
  };

  return {
    ...defaultStreak,
    ...overrideDefaults,
  };
}

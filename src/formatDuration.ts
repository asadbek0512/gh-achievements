export function formatDuration(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) {
    throw new RangeError("totalSeconds must be a non-negative finite number");
  }

  const SECONDS_PER_MINUTE = 60;
  const MINUTES_PER_HOUR = 60;

  const seconds = Math.floor(totalSeconds % SECONDS_PER_MINUTE);
  const minutes = Math.floor(totalSeconds / SECONDS_PER_MINUTE) % MINUTES_PER_HOUR;
  const hours = Math.floor(totalSeconds / (SECONDS_PER_MINUTE * MINUTES_PER_HOUR));

  const pad = (value: number): string => String(value).padStart(2, "0");

  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${minutes}:${pad(seconds)}`;
}

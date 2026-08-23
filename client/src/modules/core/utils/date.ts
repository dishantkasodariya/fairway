import { format, isToday, isTomorrow, isYesterday, parseISO, startOfDay } from "date-fns";

/** Day-granularity "now" keeps SSR and client renders in sync. */
export const TODAY = startOfDay(new Date());

const DAY = 24 * 60 * 60 * 1000;

export function daysAgo(days: number): string {
  return new Date(TODAY.getTime() - days * DAY).toISOString();
}

export function daysFromNow(days: number): string {
  return new Date(TODAY.getTime() + days * DAY).toISOString();
}

export function hoursAgo(hours: number): string {
  return new Date(TODAY.getTime() - hours * 60 * 60 * 1000).toISOString();
}

export function formatDate(iso: string | null | undefined, pattern = "dd MMM yyyy"): string {
  if (!iso) return "—";
  return format(parseISO(iso), pattern);
}

export function formatDateTime(iso: string | null | undefined): string {
  if (!iso) return "—";
  return format(parseISO(iso), "dd MMM yyyy, HH:mm");
}

export function relativeDay(iso: string | null | undefined): string {
  if (!iso) return "—";
  const date = parseISO(iso);
  if (isToday(date)) return "Today";
  if (isTomorrow(date)) return "Tomorrow";
  if (isYesterday(date)) return "Yesterday";
  return format(date, "dd MMM yyyy");
}

export function isOverdue(iso: string | null | undefined): boolean {
  if (!iso) return false;
  return startOfDay(parseISO(iso)).getTime() < TODAY.getTime();
}

export function isDueToday(iso: string | null | undefined): boolean {
  if (!iso) return false;
  return startOfDay(parseISO(iso)).getTime() === TODAY.getTime();
}

export function formatCurrency(value: number): string {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)} L`;
  return `₹${value.toLocaleString("en-IN")}`;
}

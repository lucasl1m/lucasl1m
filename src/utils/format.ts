export function formatPeriod(
  start: string,
  end: string | null,
  presentLabel: string
): string {
  return end ? `${start} – ${end}` : `${start} – ${presentLabel}`;
}

export function formatPeriodWithMonth(
  startMonth: number,
  startYear: number,
  endMonth: number | null,
  endYear: number | null,
  presentLabel: string,
  monthShort: (n: number) => string
): string {
  const start = `${monthShort(startMonth)} ${startYear}`;
  if (endMonth == null || endYear == null) return `${start} – ${presentLabel}`;
  return `${start} – ${monthShort(endMonth)} ${endYear}`;
}

export function getExperienceYears(startYear: number): number {
  return new Date().getFullYear() - startYear;
}

export function parseYear(filename: string): string | undefined {
  const year = filename.match(/\.(?<year>\d{4})\./);

  return year?.groups?.year || undefined;
}

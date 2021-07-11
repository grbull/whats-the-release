export function parseResolution(filename: string): string | undefined {
  const resolution = filename.match(/\.(?<resolution>\d{3,4}p)\./i);

  return resolution?.groups?.resolution || undefined;
}

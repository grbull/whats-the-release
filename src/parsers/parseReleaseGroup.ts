export function parseReleaseGroup(filename: string): string | undefined {
  const releaseGroup = filename.match(
    /-(?<releaseTag>\w+)(?:\.avi|\.mp4|\.mkv)?$/i
  );

  return releaseGroup?.groups?.releaseTag || undefined;
}

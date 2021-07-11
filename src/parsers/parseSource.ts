import { SOURCES } from '../constants';

export function parseSource(filename: string): string | undefined {
  for (const source of SOURCES) {
    for (const label of source.labels.sort((a, b) => b.length - a.length)) {
      if (filename.toUpperCase().includes(label.toUpperCase())) {
        return source.source;
      }
    }
  }

  return undefined;
}

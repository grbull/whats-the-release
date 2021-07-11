import { TAGS } from '../constants';

export function parseTags(filename: string): string[] {
  const tags: string[] = [];

  for (const tag of TAGS) {
    for (const label of tag.labels.sort((a, b) => b.length - a.length)) {
      if (filename.toUpperCase().includes(label.toUpperCase())) {
        tags.push(tag.tag);
        break;
      }
    }
  }

  return tags;
}

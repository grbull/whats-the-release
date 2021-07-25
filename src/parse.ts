import type { ParsedCodecs, ParsedMedia } from './parsers';
import {
  parseCodecs,
  parseFileContainer,
  parseMediaType,
  parseReleaseGroup,
  parseResolution,
  parseSource,
  parseTags,
  parseYear,
} from './parsers';

export type WtrResult = ParsedMedia & {
  year?: string;
  resolution?: string;
  source?: string;
  codecs?: ParsedCodecs;
  container?: string;
  mimeType?: string;
  tags?: string[];
  releaseGroup?: string;
  filename: string;
};

export function parse(fn: string): WtrResult {
  // normalize filename
  const filename = fn.trim();

  const parsedMediaType = parseMediaType(filename);

  if (!parsedMediaType) {
    throw new Error('Could not parse media type.');
  }

  const container = parseFileContainer(filename);

  return {
    ...parsedMediaType,
    year: parseYear(filename),
    resolution: parseResolution(filename),
    source: parseSource(filename),
    codecs: parseCodecs(filename),
    container: container?.container,
    mimeType: container?.mimeType,
    tags: parseTags(filename),
    releaseGroup: parseReleaseGroup(filename),
    filename: filename,
  };
}

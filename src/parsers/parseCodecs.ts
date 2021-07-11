import { CODECS_AUDIO, CODECS_VIDEO } from '../constants';

export type ParsedCodecs = {
  audio?: string;
  video?: string;
};

export function parseCodecs(filename: string): ParsedCodecs {
  const result: ParsedCodecs = {};

  for (const codec of CODECS_AUDIO) {
    for (const label of codec.labels) {
      if (filename.toUpperCase().includes(label.toUpperCase())) {
        result.audio = codec.codec;
      }
    }
  }

  for (const codec of CODECS_VIDEO) {
    for (const label of codec.labels) {
      if (filename.toUpperCase().includes(label.toUpperCase())) {
        result.video = codec.codec;
      }
    }
  }

  return result;
}

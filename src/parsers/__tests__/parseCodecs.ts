import { parseCodecs } from '../parseCodecs';

describe('parseCodecs', () => {
  it('should parse codecs', () => {
    const codecs = parseCodecs(
      'Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264-CMRG.mkv'
    );

    expect(codecs.audio).toBe('DDP5.1');
    expect(codecs.video).toBe('X264');
  });

  it('should return undefined', () => {
    const codecs = parseCodecs('Movie.Name.2021.1080p.WEB-DL-CMRG.mkv');

    expect(codecs.audio).toBeUndefined();
    expect(codecs.video).toBeUndefined();
  });

  it('should handle an empty string', () => {
    const codecs = parseCodecs('');

    expect(codecs.audio).toBeUndefined();
    expect(codecs.video).toBeUndefined();
  });
});

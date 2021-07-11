import { parseTags } from '../parseTags';

describe('parseTags', () => {
  it('should parse the tags', () => {
    const tags = parseTags(
      'Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264.REPACK-moo.mkv'
    );

    expect(tags).toStrictEqual(['Repack']);
  });

  it('should return undefined', () => {
    const tags = parseTags(
      'Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo.mkv'
    );

    expect(tags).toStrictEqual([]);
  });

  it('should handle an empty string', () => {
    const tags = parseTags('');

    expect(tags).toStrictEqual([]);
  });
});

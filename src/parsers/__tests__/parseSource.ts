import { parseSource } from '../parseSource';

describe('parseSource', () => {
  it('should parse the source', () => {
    const source = parseSource(
      'Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo.mkv'
    );

    expect(source).toStrictEqual('WEB-DL');
  });

  it('should return undefined', () => {
    const source = parseSource(
      'Movie.Name.2021.1080p.DDP5.1.Atmos.H.264-moo.mkv'
    );

    expect(source).toBeUndefined();
  });

  it('should handle an empty string', () => {
    const source = parseSource('');

    expect(source).toBeUndefined();
  });
});

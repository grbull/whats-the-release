import { parseResolution } from '../parseResolution';

describe('parseResolution', () => {
  it('should parse the resolution', () => {
    const resolution = parseResolution(
      'Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo.mkv'
    );

    expect(resolution).toStrictEqual('1080p');
  });

  it('should return undefined', () => {
    const resolution = parseResolution(
      'Movie.Name.2021.WEB-DL.DDP5.1.Atmos.H.264-moo.mkv'
    );

    expect(resolution).toBeUndefined();
  });

  it('should handle an empty string', () => {
    const resolution = parseResolution('');

    expect(resolution).toBeUndefined();
  });
});

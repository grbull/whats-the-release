import { parseYear } from '../parseYear';

describe('parseYear', () => {
  it('should parse the year', () => {
    const year = parseYear(
      'Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo.mkv'
    );

    expect(year).toStrictEqual('2021');
  });

  it('should return undefined', () => {
    const year = parseYear(
      'Movie.Name.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo.mkv'
    );

    expect(year).toBeUndefined();
  });

  it('should handle an empty string', () => {
    const year = parseYear('');

    expect(year).toBeUndefined();
  });
});

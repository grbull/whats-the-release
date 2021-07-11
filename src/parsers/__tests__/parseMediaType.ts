import { parseMediaType } from '../parseMediaType';

describe('parseMediaType', () => {
  it('should parse a movie name followed by a year followed by resolution', () => {
    const container = parseMediaType(
      'Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo.mkv'
    );

    expect(container).toStrictEqual({
      name: 'Movie Name',
      type: 'Movie',
    });
  });

  it('should parse a movie name followed by a year followed by no resolution', () => {
    const container = parseMediaType(
      'Movie.Name.2021.WEB-DL.DDP5.1.Atmos.H.264-moo.mkv'
    );

    expect(container).toStrictEqual({
      name: 'Movie Name',
      type: 'Movie',
    });
  });

  it('should parse a movie name followed by resolution and no year', () => {
    const container = parseMediaType(
      'Movie.Name.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo.mkv'
    );

    expect(container).toStrictEqual({
      name: 'Movie Name',
      type: 'Movie',
    });
  });

  it('should parse a show', () => {
    const container = parseMediaType(
      'Something.S01E01.Journey.Into.Space.1080p.WEB-DL.DDP5.1.H.264-moo.mkv'
    );

    expect(container).toStrictEqual({
      type: 'Show',
      name: 'Something',
      season: '01',
      episode: '01',
      episodeName: 'Journey Into Space',
    });
  });

  it('should return undefined', () => {
    const container = parseMediaType('-DL.DDP5.1.Atmos.H.264-moo.mkv');

    expect(container).toBeUndefined();
  });

  it('should handle an empty string', () => {
    const container = parseMediaType('');

    expect(container).toBeUndefined();
  });
});

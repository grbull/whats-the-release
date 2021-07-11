import { parse } from '../parse';

describe('parse', () => {
  it('should parse the movie', () => {
    const result = parse('Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo');

    expect(result).toStrictEqual({
      type: 'Movie',
      name: 'Movie Name',
      year: '2021',
      resolution: '1080p',
      source: 'WEB-DL',
      codecs: { audio: 'DDP5.1', video: 'X264' },
      container: undefined,
      mimeType: undefined,
      tags: [],
      releaseGroup: 'moo',
    });
  });

  it('should parse the show', () => {
    const result = parse(
      'Something.S01E01.Journey.Into.Space.1080p.WEB-DL.DDP5.1.H.264-moo.mkv'
    );

    expect(result).toStrictEqual({
      type: 'Show',
      name: 'Something',
      season: '01',
      episode: '01',
      episodeName: 'Journey Into Space',
      year: undefined,
      resolution: '1080p',
      source: 'WEB-DL',
      codecs: { audio: 'DDP5.1', video: 'X264' },
      container: 'mkv',
      mimeType: 'video/x-matroska',
      tags: [],
      releaseGroup: 'moo',
    });
  });

  it('should throw an error with an empty string', () => {
    expect(() => parse('')).toThrowError('Could not parse media type.');
  });
});

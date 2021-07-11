import { parseFileContainer } from '../parseFileContainer';

describe('parseFileContainer', () => {
  it('should parse the container', () => {
    const container = parseFileContainer(
      'Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo.mkv'
    );

    expect(container).toStrictEqual({
      container: 'mkv',
      mimeType: 'video/x-matroska',
    });
  });

  it('should return undefined', () => {
    const container = parseFileContainer(
      'Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo'
    );

    expect(container).toBeUndefined();
  });

  it('should handle an empty string', () => {
    const container = parseFileContainer('');

    expect(container).toBeUndefined();
  });
});

import { parseReleaseGroup } from '../parseReleaseGroup';

describe('parseReleaseGroup', () => {
  it('should parse the release group when theres a file extension', () => {
    const releaseGroup = parseReleaseGroup(
      'Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo.mkv'
    );

    expect(releaseGroup).toStrictEqual('moo');
  });

  it('should parse the release group when theres not a file extension', () => {
    const releaseGroup = parseReleaseGroup(
      'Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264-moo'
    );

    expect(releaseGroup).toStrictEqual('moo');
  });

  it('should return undefined', () => {
    const releaseGroup = parseReleaseGroup(
      'Movie.Name.2021.1080p.WEB-DL.DDP5.1.Atmos.H.264.mkv'
    );

    expect(releaseGroup).toBeUndefined();
  });

  it('should handle an empty string', () => {
    const releaseGroup = parseReleaseGroup('');

    expect(releaseGroup).toBe(undefined);
  });
});

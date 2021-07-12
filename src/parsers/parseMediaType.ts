export type ParsedMedia =
  | { type: 'Movie'; name: string }
  | {
      type: 'Show';
      name: string;
      season: string;
      episode: string;
      episodeName?: string;
    };

export function parseMediaType(filename: string): ParsedMedia | undefined {
  const episodeMatch = filename.match(
    /(?<name>.+)\.S(?<season>\d{2,3})E(?<episode>\d{2,3})\.(?<episodeName>[\S\.]+\.)?(?:\d{3,4}p)\./i
  );

  if (episodeMatch?.groups) {
    const { name, season, episode, episodeName } = episodeMatch.groups;
    return {
      type: 'Show',
      name: name.split('.').join(' '),
      season,
      episode,
      episodeName: episodeName?.slice(0, -1).split('.').join(' '),
    };
  }

  let movieMatch = filename.match(
    /(?<name>\S+)\.(?<year>\d{4})\.(?<resolution>\d{3,4}p)\./i
  );
  if (!movieMatch) {
    movieMatch = filename.match(/(?<name>\S+)\.(?<year>\d{4})\./i);
  }
  if (!movieMatch) {
    movieMatch = filename.match(/(?<name>\S+)\.(?<resolution>\d{3,4}p)\./i);
  }

  if (movieMatch?.groups) {
    const { name } = movieMatch.groups;
    return {
      type: 'Movie',
      name: name.split('.').join(' '),
    };
  }
}

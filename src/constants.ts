export type FileContainer = {
  container: string;
  mimeType: string;
};

export const FILE_CONTAINERS: FileContainer[] = [
  { container: 'avi', mimeType: 'video/x-msvideo' },
  { container: 'mp4', mimeType: 'video/mp4' },
  { container: 'mkv', mimeType: 'video/x-matroska' },
];

export type Codec = {
  codec: string;
  labels: string[];
};

export const CODECS_AUDIO: Codec[] = [
  { codec: 'AAC', labels: ['AAC', 'AAC.2.0', 'AAC-LD'] },
  { codec: 'AAC5.1', labels: ['AAC.5.1'] },
  { codec: 'AC3', labels: ['AC3', 'AC-3', 'ATSC', 'AC3.DPL2'] },
  { codec: 'DD5.1', labels: ['DD5.1'] },
  { codec: 'DDP5.1', labels: ['DDP5.1', 'DDP5.1.Atmos'] },
  { codec: 'SBC', labels: ['SBC'] },
];

export const CODECS_VIDEO: Codec[] = [
  { codec: 'DivX', labels: ['divx'] },
  { codec: 'Xvid', labels: ['xvid'] },
  { codec: 'X264', labels: ['x264', 'x.264', 'h264', 'h.264'] },
  { codec: 'X265', labels: ['x265', 'x.265', 'h265', 'h.265'] },
];

export type Source = {
  source: string;
  labels: string[];
};

export const SOURCES: Source[] = [
  { source: 'Cam', labels: ['CAM-Rip', 'CAM', 'HDCAM'] },
  {
    source: 'Telesync',
    labels: ['TS', 'HDTS', 'TELESYNC', 'PDVD', 'PreDVDRip'],
  },
  { source: 'Workprint', labels: ['WP', 'WORKPRINT'] },
  { source: 'Telecine', labels: ['TC', 'HDTC', 'TELECINE'] },
  { source: 'Pay-Per-View Rip', labels: ['PPV', 'PPVRip'] },
  {
    source: 'Screener',
    labels: ['SCR', 'SCREENER', 'DVDSCR', 'DVDSCREENER', 'BDSCR'],
  },
  { source: 'Digital Distribution Copy', labels: ['DDC'] },
  { source: 'R5', labels: ['R5', 'R5.LINE', 'R5.AC3.5.1.HQ'] },
  { source: 'DVD-Rip', labels: ['DVDRip', 'DVDMux'] },
  {
    source: 'DVD-R',
    labels: ['DVDR', 'DVD-Full', 'Full-Rip', 'DVD-5', 'DVD-9'],
  },
  {
    source: 'HDTV',
    labels: [
      'DSR',
      'DSRip',
      'SATRip',
      'DTHRip',
      'DVBRip',
      'HDTV',
      'PDTV',
      'DTVRip',
      'TVRip',
      'HDTVRip',
    ],
  },
  { source: 'VODRip', labels: ['VODRip', 'VODR'] },
  { source: 'HC HD-Rip', labels: ['HC', 'HD-Rip'] },
  { source: 'WEBCap', labels: ['WEB-Cap', 'WEBCAP'] },
  { source: 'HDRip', labels: ['HDRip', 'WEB-DLRip'] },
  { source: 'WEBRip', labels: ['WEBRip, WEB-Rip'] },
  { source: 'WEB-DL', labels: ['WEBDL', 'WEB-DL', 'WEB', 'WEBRip'] },
  {
    source: 'Blu-ray',
    labels: [
      'Blu-Ray',
      'BluRay',
      'BDRip',
      'BRip',
      'BRRip',
      'BDMV',
      'BDR',
      'BD25',
      'BD50',
      'BD5',
      'BD9',
    ],
  },
];

export type Tag = {
  tag: string;
  labels: string[];
};

export const TAGS: Tag[] = [
  {
    tag: 'American Broadcasting Company',
    labels: ['ABC'],
  },
  {
    tag: 'Apple TV +',
    labels: ['ATVP'],
  },
  {
    tag: 'Amazon Studios',
    labels: ['AMZN'],
  },
  {
    tag: 'British Broadcasting Corporation',
    labels: ['BBC'],
  },
  {
    tag: 'Boomerang',
    labels: ['BOOM'],
  },
  {
    tag: 'Canadian Broadcasting Corporation / CBC Gem',
    labels: ['CBC'],
  },
  {
    tag: 'CBS Corporation',
    labels: ['CBS'],
  },
  {
    tag: 'Comedy Central',
    labels: ['CC'],
  },
  {
    tag: 'Crunchyroll',
    labels: ['CR'],
  },
  {
    tag: 'Crave',
    labels: ['CRAV'],
  },
  {
    tag: 'The Criterion Collection',
    labels: ['CRITERION'],
  },
  {
    tag: 'The CW',
    labels: ['CW'],
  },
  {
    tag: 'DC Universe',
    labels: ['DCU'],
  },
  {
    tag: 'Disney Plus',
    labels: ['DSNP'],
  },
  {
    tag: 'Disney Networks',
    labels: ['DSNY'],
  },
  {
    tag: 'Facebook Watch',
    labels: ['FBWatch'],
  },
  {
    tag: 'Freeform',
    labels: ['FREE'],
  },
  {
    tag: 'Fox Broadcasting Company',
    labels: ['FOX'],
  },
  {
    tag: 'HBO Max',
    labels: ['HMAX'],
  },
  {
    tag: 'Hulu Networks',
    labels: ['HULU'],
  },
  {
    tag: 'Hotstar',
    labels: ['HTSR'],
  },
  {
    tag: 'IMAX',
    labels: ['IMAX', 'IMAX.Ed'],
  },
  {
    tag: 'BBC iPlayer',
    labels: ['iP'],
  },
  {
    tag: 'iT',
    labels: ['iTunes'],
  },
  {
    tag: 'Lifetime',
    labels: ['LIFE'],
  },
  {
    tag: 'MTV Networks',
    labels: ['MTV'],
  },
  {
    tag: 'National Broadcasting Company',
    labels: ['NBC'],
  },
  {
    tag: 'Nickelodeon',
    labels: ['NICK'],
  },
  {
    tag: 'Netflix',
    labels: ['NF'],
  },
  {
    tag: 'Original Aspect Ratio',
    labels: ['OAR'],
  },
  {
    tag: 'Peacock',
    labels: ['PCOK'],
  },
  {
    tag: 'Paramount Plus',
    labels: ['PMTP'],
  },
  {
    tag: 'Youtube Premium',
    labels: ['RED'],
  },
  {
    tag: 'TVNZ',
    labels: ['TVNZ'],
  },
  {
    tag: 'Stan',
    labels: ['STAN'],
  },
  {
    tag: 'STARZ',
    labels: ['STZ', 'STARZ'],
  },
  {
    tag: 'Repack',
    labels: ['REPACK'],
  },
];

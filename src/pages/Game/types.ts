export type FilledWordEntry = {
  filled: true;
  word: string;
};

export type EmptyWordEntry = {
  filled: false;
  size: number;
};

export type WordEntry = FilledWordEntry | EmptyWordEntry;

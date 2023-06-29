export type ThumbnailType = {
  path: string;
  extension: string;
};

export type CharacterComicType = {
  name: string;
  type?: string;
};

export type CharacterURL = {
  type: string;
  url: string;
};

export type CharacterAppearanceType = {
  available: number;
  items: CharacterComicType[];
};

export type CharacterType = {
  id: number;
  name: string;
  thumbnail: ThumbnailType;
  description: string;
  comics: CharacterAppearanceType;
  series: CharacterAppearanceType;
  stories: CharacterAppearanceType;
  events: CharacterAppearanceType;
  urls: CharacterURL[];
};

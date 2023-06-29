import { ThumbnailType } from './CharacterType';

type DateType = {
  type: string;
  date: string;
};

export type ComicType = {
  id: number;
  title: string;
  thumbnail: ThumbnailType;
  description: string;
  pageCount: number;
  series: {
    name: string;
  };
  dates: DateType[];
  prices: {
    type: string;
    price: number;
  }[];
  creators: {
    available: number;
    items: {
      name: string;
      role: string;
    }[];
  };
  characters: {
    available: number;
    items: {
      name: string;
    }[];
  };
  stories: {
    available: number;
    items: {
      name: string;
      type: string;
    }[];
  };
};

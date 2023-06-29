import slugify from 'slugify';

import { ThumbnailType } from 'types/CharacterType';

export const getImageUrl = (thumbnail: ThumbnailType): string =>
  `${thumbnail.path}.${thumbnail.extension}`;

export const strToSlug = (str: string): string =>
  slugify(str, {
    remove: /[^0-9a-zA-Z\s]/gim,
    lower: true,
    trim: true,
  });

export const stripTags = (htmlString: string): string => {
  const temporalDivElement = document.createElement('div');
  temporalDivElement.innerHTML = htmlString;

  return temporalDivElement.textContent || temporalDivElement.innerText || '';
};

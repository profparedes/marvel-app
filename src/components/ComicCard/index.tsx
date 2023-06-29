import { memo } from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getImageUrl, strToSlug } from 'helpers';

import { ComicType } from 'types/ComicType';

import { CardContainer, Cover } from './style';

interface IComicCardProps {
  comic: ComicType;
}

const ComicCard: React.FC<IComicCardProps> = ({ comic }) => (
  <CardContainer className="w-100">
    <Link
      data-testid="comic-card-link"
      to={`/comics/${comic.id}/${strToSlug(comic.title)}`}
      state={{ comic }}
    >
      <Cover className="border border-dark">
        <Card.Img variant="top" src={getImageUrl(comic.thumbnail)} />
      </Cover>
    </Link>
    <Card.Body className="py-3">
      <Card.Title>
        <Link
          className="text-decoration-none text-light"
          to={`/comics/${comic.id}/${strToSlug(comic.title)}`}
          state={{ comic }}
        >
          {comic.title}
        </Link>
      </Card.Title>
    </Card.Body>
  </CardContainer>
);

export default memo(ComicCard);

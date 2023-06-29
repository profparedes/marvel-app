import { memo, useEffect, useMemo } from 'react';

import { format, isValid } from 'date-fns';
import { Col, Container, Row } from 'react-bootstrap';
import {
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaShoppingCart,
} from 'react-icons/fa';
import { Location, useLocation, useParams } from 'react-router-dom';

import { useComics } from 'context/ComicsContext';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Loading from 'components/Loading';

import { stripTags, getImageUrl } from 'helpers';

import useTitle from 'hooks/useTitle';

import { ComicType } from 'types/ComicType';

import {
  BackgroundBlur,
  BottonRightText,
  ComicBox,
  ImgCover,
  TopLeftText,
} from './style';

type ComicLocationType = Location & { state: { comic: ComicType } };

const iconMap: Record<string, { Icon: React.ComponentType; text: string }> = {
  onsaleDate: {
    Icon: FaCalendarAlt,
    text: 'On sale:',
  },
  focDate: {
    Icon: FaClock,
    text: 'Final order cutoff:',
  },
  unlimitedDate: {
    Icon: FaGlobe,
    text: 'Unlimited access:',
  },
  digitalPurchaseDate: {
    Icon: FaShoppingCart,
    text: 'Digital purchase:',
  },
};

const Comic: React.FC = () => {
  const { comic: comicFromContext, isLoading, error, fetchComic } = useComics();
  const { id } = useParams();
  const { state } = useLocation() as ComicLocationType;
  const setTitle = useTitle();

  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle('comic');

    if (!state?.comic) {
      fetchComic(Number(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, state?.comic]);

  const comic = useMemo(
    () => state?.comic || comicFromContext,
    [comicFromContext, state?.comic],
  );

  return (
    <>
      <Header />
      <main className="d-flex flex-column flex-grow-1">
        {isLoading && <Loading />}
        {error && <h2 className="text-center">{error}</h2>}
        {!isLoading && !error && comic && (
          <ImgCover
            className="d-flex flex-column flex-grow-1"
            coverImage={getImageUrl(comic.thumbnail)}
          >
            <BackgroundBlur className="flex-grow-1">
              <Container>
                <Row className="justify-content-center row-cols-1 row-cols-lg-2 py-3">
                  <Col className="text-center mb-2">
                    <img
                      className="img-fluid"
                      src={getImageUrl(comic.thumbnail)}
                      alt={comic.title}
                    />
                  </Col>
                  <Col>
                    <ComicBox>
                      <TopLeftText className="h2 text-comic">
                        {comic?.title}
                      </TopLeftText>
                      <div className="p-4">
                        <p className="text-center">
                          {comic.description
                            ? stripTags(comic.description)
                            : 'This Marvel comic takes readers to a world filled with superpowers, thrilling adventures, and captivating characters. With a skillfully crafted narrative and surprising twists, it keeps readers engaged until the last page. With stunning artwork and dynamic dialogues, it brings the iconic heroes and villains to life. It is a celebration of the heroic spirit, filled with dangers, conflicts, and hope. Get ready to dive into an infinitely imaginative universe.'}
                        </p>
                        {comic.creators.available > 0 && (
                          <>
                            <p className="h5 mt-3">
                              {comic.creators.available > 1
                                ? 'Creators'
                                : 'Creator'}
                            </p>
                            <Row className="row-cols-2">
                              {comic.creators.items.map((creator) => (
                                <Col key={creator.name}>
                                  {creator.name}, {creator.role}
                                </Col>
                              ))}
                            </Row>
                          </>
                        )}
                        {comic.prices[0].price > 0 && comic.prices.length > 0 && (
                          <>
                            <p className="h5 mt-3">
                              {comic.prices.length > 1 ? 'Prices' : 'Price'}
                            </p>
                            <Row className="row-cols-2">
                              {comic.prices.map((price) => (
                                <Col key={price.price}>
                                  {price.type}: {price.price} USD
                                </Col>
                              ))}
                            </Row>
                          </>
                        )}
                        {comic.dates.length > 0 && (
                          <Row className="row-cols-2 my-3">
                            {comic.dates.map((date) => {
                              const isValidDate = isValid(new Date(date.date));

                              if (!isValidDate) {
                                return null;
                              }

                              const formattedDate = format(
                                new Date(date.date),
                                'yyyy/MM/dd',
                              );
                              const { Icon, text } = iconMap[date.type] || {};

                              return (
                                <Col
                                  className="d-flex gap-1 align-items-center justify-content-start mb-2"
                                  key={date.date}
                                >
                                  {Icon && <Icon />} {text} {formattedDate}
                                </Col>
                              );
                            })}
                          </Row>
                        )}
                      </div>
                      {comic.pageCount > 0 && (
                        <BottonRightText className="text-comic">
                          {comic?.pageCount} Pages
                        </BottonRightText>
                      )}
                    </ComicBox>
                  </Col>
                </Row>
              </Container>
            </BackgroundBlur>
          </ImgCover>
        )}
      </main>
      <Footer />
    </>
  );
};

export default memo(Comic);

import { memo, useCallback, useEffect, useState } from 'react';

import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import MarvelBackground from 'assets/marvel-background.jpg';

import { useComics } from 'context/ComicsContext';

import ComicCard from 'components/ComicCard';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Loading from 'components/Loading';

import useTitle from 'hooks/useTitle';

import { Pagination } from 'styles/Pagitation';

import { BackgroundCover, CardStyle } from './style';

const Home: React.FC = () => {
  const [search, setSearch] = useState('');

  const { comics, isLoading, totalPages, currentPage, error, fetchComics } =
    useComics();

  const setTitle = useTitle();

  const handlePageChange = useCallback(
    (page: number) => fetchComics(page, search),
    [fetchComics, search],
  );

  useEffect(() => {
    setTitle('Comics');
    fetchComics(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = useCallback(
    () => fetchComics(1, search),
    [fetchComics, search],
  );

  const handleClear = useCallback(() => {
    fetchComics(1);
    setSearch('');
  }, [fetchComics]);

  return (
    <>
      <Header />
      <main className="d-flex flex-column flex-grow-1">
        <BackgroundCover className="flex-grow-1" coverImage={MarvelBackground}>
          <Container className="text-center">
            <Row className="mt-3 align-items-center mb-3 row-cols-1 row-cols-sm-2">
              <Col>
                <h1 className="text-start">Comics</h1>
              </Col>
              <Col>
                <InputGroup className="">
                  <Form.Control
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search comics"
                    aria-label="Search comics"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    onClick={handleSearch}
                    variant="warning"
                    id="button-addon2"
                  >
                    Search
                  </Button>
                  {search.length > 0 && (
                    <Button
                      onClick={handleClear}
                      variant="warning"
                      id="button-addon2"
                    >
                      Clear
                    </Button>
                  )}
                </InputGroup>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-3 justify-content-center mb-3">
              {isLoading && <Loading />}
              {error && <h2 className="text-center">{error}</h2>}
              {!isLoading &&
                !error &&
                comics.map((comic) => (
                  <CardStyle className="d-flex" key={comic.id}>
                    <ComicCard comic={comic} />
                  </CardStyle>
                ))}
              {!isLoading && !error && comics.length === 0 && (
                <p>Comic not found</p>
              )}
            </Row>
            {!isLoading && !error && totalPages > 1 && (
              <Pagination
                className="flex-wrap ps-0"
                forcePage={currentPage - 1}
                onPageChange={(p) => handlePageChange(p.selected + 1)}
                pageCount={totalPages}
              />
            )}
          </Container>
        </BackgroundCover>
      </main>
      <Footer />
    </>
  );
};

export default memo(Home);

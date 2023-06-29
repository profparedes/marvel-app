import { memo, useEffect } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CharacterLongButton from 'assets/character-long-button.png';
import CharacterButton from 'assets/characters-button.jpg';
import ComicsButton from 'assets/comics-button.jpg';
import ComicsLongButton from 'assets/comics-long-button.png';
import MarvelBackground from 'assets/marvel-background.jpg';

import Footer from 'components/Footer';
import Header from 'components/Header';

import useTitle from 'hooks/useTitle';

import { BackgroundCover, ImgButton, ImgLongButton } from './style';

const Home: React.FC = () => {
  const setTitle = useTitle();

  useEffect(() => {
    setTitle('Home');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main className="d-flex flex-column flex-grow-1">
        <BackgroundCover className="flex-grow-1" coverImage={MarvelBackground}>
          <Container className="text-center">
            <Row className="py-5 gap-4 d-none d-md-flex">
              <Col>
                <Link to="/characters">
                  <ImgButton src={CharacterButton} alt="Characters page" />
                </Link>
              </Col>
              <Col>
                <Link to="/comics">
                  <ImgButton src={ComicsButton} alt="Comics page" />
                </Link>
              </Col>
            </Row>
            <div className="d-block d-md-none">
              <Link to="/characters">
                <ImgLongButton
                  className="img-fluid"
                  src={CharacterLongButton}
                  alt="Characters page"
                />
              </Link>
              <Link to="/comics">
                <ImgLongButton
                  className="img-fluid"
                  src={ComicsLongButton}
                  alt="Comics page"
                />
              </Link>
            </div>
          </Container>
        </BackgroundCover>
      </main>
      <Footer />
    </>
  );
};

export default memo(Home);

import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

import MLogo from 'assets/MLogo.png';

import { ImgContainer } from './style';

const Footer: React.FC = () => {
  return (
    <div>
      <ImgContainer className="py-5">
        <Container>
          <Row className="text-center row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
            <Col>
              <img src={MLogo} alt="Marvel Logo" />
            </Col>
            <Col className="d-none d-md-block">
              <p>ABOUT MARVEL</p>
              <p>PRIVACY POLICY</p>
              <p>TERMS OF USE</p>
              <p>CONTACT US</p>
            </Col>
            <Col className="d-none d-md-block">
              <p>ADVERTISING</p>
              <p>DISNEY+</p>
              <p>MARVELHQ.COM</p>
              <p>REDEEM DIGITAL</p>
            </Col>
            <Col className="d-none d-lg-block">
              <p>MARVEL INSIDER</p>
              <p>MARVEL STORE</p>
              <p>MARVEL UNLIMITED</p>
              <p>MARVEL BIOGRAPHY</p>
            </Col>
            <Col className="justify-content-center">
              <p>FOLLOW MARVEL</p>
              <div className="d-flex justify-content-center gap-2">
                <p>
                  <AiFillFacebook size="2em" data-testid="facebook-icon" />
                </p>
                <p>
                  <AiFillTwitterSquare size="2em" data-testid="twitter-icon" />
                </p>
                <p>
                  <FaInstagramSquare size="2em" data-testid="instagram-icon" />
                </p>
                <p>
                  <IoLogoYoutube size="2em" data-testid="youtube-icon" />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </ImgContainer>
    </div>
  );
};

export default memo(Footer);

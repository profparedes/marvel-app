import { Col } from 'react-bootstrap';
import styled from 'styled-components';

interface IImgCoverProps {
  coverImage: string;
}

export const BackgroundCover = styled.div<IImgCoverProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center center;
`;

export const CardStyle = styled(Col)`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

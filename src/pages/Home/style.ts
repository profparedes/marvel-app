import styled from 'styled-components';

interface IImgCoverProps {
  coverImage: string;
}

export const BackgroundCover = styled.div<IImgCoverProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center center;
`;

export const ImgButton = styled.img`
  height: 540px;
  border-radius: 10px;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    border-radius: 0px;
    border-bottom: 4px solid red;
  }
`;

export const ImgLongButton = styled.img`
  width: 100%;
  margin-top: 18px;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    scale: 1.02;
  }
`;

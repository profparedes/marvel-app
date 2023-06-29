import styled from 'styled-components';

interface IImgCoverProps {
  coverImage: string;
}

export const ImgCover = styled.div<IImgCoverProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center center;
  width: 100%;
`;

export const BackgroundBlur = styled.div`
  background: rgba(0, 0, 0, 0.6);
  background-size: cover;
  background-position: center center;
  backdrop-filter: blur(4px);
`;

export const ComicBox = styled.div`
  background-color: #fff;
  border: solid 2px #000;
  box-shadow: 0 6px 6px -6px #000;
  background-image: radial-gradient(circle, yellow, orange);
  overflow: hidden;
  position: relative;
`;

export const TopLeftText = styled.div`
  border: solid 2px #000;
  border-top: none;
  background-color: #fff;
  margin: 0;
  padding: 3px 10px;
  padding-left: 15px;
  display: inline-block;
  transform: skew(-15deg) translateX(-10px);
`;

export const BottonRightText = styled.div`
  border: solid 2px #000;
  background-color: #fff;
  margin: 0;
  padding: 3px 10px;
  right: -6px;
  position: absolute;
  bottom: -2px;
  transform: skew(-15deg);
`;

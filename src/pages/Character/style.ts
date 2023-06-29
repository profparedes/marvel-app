import styled from 'styled-components';

export const CharacterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: black;

  @media (max-width: 768px) {
    display: block;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: black;

  @media (min-width: 768px) {
    width: 50%;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  width: 100%;
  padding: 20px;
  color: white;

  @media (min-width: 768px) {
    width: 50%;
    padding: 40px;
  }
`;

export const TitleText = styled.h1`
  color: #ed181f;
  text-align: center;
`;

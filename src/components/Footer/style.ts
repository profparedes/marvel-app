import styled from 'styled-components';

export const ImgContainer = styled.div`
  background-color: #111;

  img {
    max-width: 140px;
  }

  p {
    margin-bottom: 10px;
    color: #555;
    transition: 0.2s;

    &:hover {
      color: #aaa;
      scale: 1.05;
      cursor: pointer;
    }
  }
`;

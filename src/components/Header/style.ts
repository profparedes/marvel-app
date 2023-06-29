import styled from 'styled-components';

export const RedLine = styled.div`
  background-color: #ed181f;
  height: 10px;
  width: 100%;
`;

export const ImgContainer = styled.div`
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 14px;

  img {
    max-width: 140px;
  }
`;

export const MenuContainer = styled.div`
  background-color: #111;
  color: #fff;

  ul {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      border-bottom: 3px solid #111;
      margin-right: 10px;
      margin-left: 10px;
      padding: 8px 3px;

      &:hover {
        border-bottom: 3px solid #f00;
      }
    }
  }
`;

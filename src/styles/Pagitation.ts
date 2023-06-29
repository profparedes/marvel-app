import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;

  li {
    list-style: none;

    a {
      background-image: radial-gradient(circle, yellow, orange);
      display: inline-block;
      border: solid 1px orange;
      padding: 10px 20px;
      border-radius: 5px;
      margin: 0 2px;
      color: inherit;
      text-decoration: none;
    }

    &.selected a {
      background-image: radial-gradient(circle, lightcoral, tomato);
      font-weight: bold;
      border: solid 1px tomato;
    }
  }
`;

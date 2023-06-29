import { Ratio } from 'react-bootstrap';
import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  background-color: #000;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 20px 20px;
    border-color: transparent transparent #fff transparent;
    z-index: 1;
  }
`;

export const Cover = styled(Ratio)`
  --bs-aspect-ratio: 130%;
`;

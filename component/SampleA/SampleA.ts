import styled from 'styled-components';
import { SampleARaw } from './SampleARaw';

export const SampleA = styled(SampleARaw)`
  display: grid;
  grid-template-areas:
    'title  title title'
    'button input  .'
    'list   list  list';
  /* justify-content: center;
  justify-items: center; */

  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 10rem auto;
  grid-row-gap: 2rem;

  background: red;
  &.primary {
    background: pink;
  }

  .title {
    grid-area: title;
    font-size: 5rem;
    justify-self: center;
  }

  .candidate {
    grid-area: input;
  }

  .btn {
    grid-area: button;
  }

  .items {
    grid-area: list;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
    grid-row-gap: 1rem;
    .item {
      background: lightblue;
    }
  }
`;

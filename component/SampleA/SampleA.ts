import styled from 'styled-components';
import { SampleARaw } from './SampleARaw';

export const SampleA = styled(SampleARaw)`
  background: red;
  &.primary {
    background: pink;
  }
`;

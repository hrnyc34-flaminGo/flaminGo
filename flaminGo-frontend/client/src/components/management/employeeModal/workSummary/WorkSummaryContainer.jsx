import React from 'react';
import styled from 'styled-components';

import ModalTitle from '../../../styledElements/ModalTitle';
import WorkSummaryList from './WorkSummaryList';

const Holder = styled.section`
  display: flex;
  justify-content: center;
  flex-grow: 3;
  height: 640px;
  flex-direction: column;
`;

const SummaryContainer = () => (
  <Holder>
    <ModalTitle margin='0px 0px 0px 0px'>Work Summary</ModalTitle>
    <WorkSummaryList />
  </Holder>
);

export default SummaryContainer;

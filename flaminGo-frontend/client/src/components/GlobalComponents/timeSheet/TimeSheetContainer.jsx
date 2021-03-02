import React, { useContext } from 'react';

// styled Component
import BackArrow from '../../styledElements/BackArrow';
import FlexCenterContainer from '../../styledElements/FlexCenterContainer';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import { MainContext } from '../landingPage/MainContext';
import SubHeader from '../../styledElements/SubHeader';
import TimeSheetFormList from './TimeSheetFormList';
import Title from '../../styledElements/ModalTitle';

// React Components that have real functionality

/**
 * This is the main container for the time sheet widget. Only the BackArrow and TimeSheetFormList
 * @param {Function} back - This is the function that allows the user to close this form passed as props from the main landing
 */
const TimeSheetContainer = ({ back }) => {
  const { name } = useContext(MainContext);
  return (
    <div>
      <BackArrow
        margin={'40px 40px'}
        onClick={back}
        location={'Main Homepage'}
      />
      <FlexCenterContainer>
        <HalfRoundDiv width='450px' height='730px'>
          <Title margin='35px 0 5px 0'>Time Sheet</Title>
          <SubHeader margin='0 0 31px 0'>{name}</SubHeader>
          <TimeSheetFormList back={back} />
        </HalfRoundDiv>
      </FlexCenterContainer>
    </div>
  );
};

export default TimeSheetContainer;

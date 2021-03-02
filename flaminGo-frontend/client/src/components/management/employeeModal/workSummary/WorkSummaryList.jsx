import React, { useContext } from 'react';
import styled from 'styled-components';

import { EmployeeContext } from '../EmployeeContext';
import { gradients } from '../../../styledElements/styleGuid';
import ListItem from './WorkSummaryListItem';

const ListContainer = styled.div`
  background-image: ${gradients.berryToGrape};
  height: 540px;
  border-radius: 20px;
  padding: 20px;
`;

const ScrollBox = styled.div`
  height: 510px;
  overflow-y: auto;
  padding: 10px;
`;

const WorkSummaryList = () => {
  const { useTimeSheetList, useNewEmployee } = useContext(EmployeeContext);
  const [newEmployee] = useNewEmployee;
  const [timeSheetList] = useTimeSheetList;
  return (
    <ListContainer>
      {!newEmployee ? (
        <ScrollBox>
          {timeSheetList.map((week, i) => (
            <ListItem key={week.week + i} week={week} />
          ))}
        </ScrollBox>
      ) : null}
    </ListContainer>
  );
};

export default WorkSummaryList;

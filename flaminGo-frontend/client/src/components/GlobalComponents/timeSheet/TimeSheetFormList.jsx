import axios from 'axios';
import React, { useContext } from 'react';
import styled from 'styled-components';

import FormButton from '../../styledElements/FormButton';
import FormRow from '../../styledElements/FormRow';
import { MainContext } from '../landingPage/MainContext';
import timeSheetTemplate from './timeSheetTemplate';
import url from '../../../lib/apiPath';
import useTimeSheet from './useTimeSheet';

// time sheet styles
// centering div
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;
// spacing b/c margins were not working
const Spacer = styled.div`
  width: 1px;
  height: 25px;
`;
// centering div using position and transform b/c flex was going wonky
const Centered = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

/**
 *  Main Form component of the time sheet. (see file for inline comments/explanation)
 * @param {Function} back - This is the function that allows the user to close this form passed as props
 * through TimeSheetContainer from the main landing
 */
const TimeSheetFormList = ({ back }) => {
  // passing the users id to useTimeSheet hook to request the correct sheet
  const { id } = useContext(MainContext);
  const [timeSheet, setTimeSheet] = useTimeSheet(id);

  // submit updates to aa time sheet
  const submit = (e) => {
    axios
      // adding the user if back to the sheet (this allows new sheets to be created)
      .put(`${url}/timesheets`, { ...timeSheet, employee_id: id })
      .then(() => {
        back();
      })
      .catch((err) => {
        // should alert error on failure but not yet implemented
        console.error(err);
        back();
      });
  };

  return (
    <Centered>
      <FlexContainer>
        {/* using a constant to map over the days  */}
        {timeSheetTemplate.map((day) => {
          return (
            <FlexContainer>
              {/* see form row in styledElements for details */}
              <FormRow
                label={day.name}
                key={day.name + day.day}
                name={day.day}
                value={timeSheet[day.day]}
                editMode={true}
                onChange={(e) => {
                  setTimeSheet((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <Spacer />
            </FlexContainer>
          );
        })}
        <FormButton onClick={submit} margin='15px' backgroundColor={'berry'}>
          Submit
        </FormButton>
      </FlexContainer>
    </Centered>
  );
};

export default TimeSheetFormList;

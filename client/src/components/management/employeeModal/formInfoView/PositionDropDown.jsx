import React from 'react';
import { FlexRow, FormLabel } from './EmployFormPositioning';
import DropDown from '../../../styledElements/DropDown';
import positions from '../../../../lib/positionsConstant';
import FormRow from './FormRow';

const PositionDropDown = ({ onChange, editMode, employee }) => {
  return (
    <FlexRow>
      {editMode ? (
        <div>
          <FormLabel>Position:</FormLabel>
          <DropDown width={'211px'} name='position' onChange={onChange}>
            <option value='' disabled selected hidden>
              {employee ? employee.position : 'Position...'}
            </option>
            {positions.map((position, i) => (
              <option key={position.variable + i} value={position.variable}>
                {position.name}
              </option>
            ))}
          </DropDown>
        </div>
      ) : (
        <div>
          {employee ? (
            <FormRow
              name={employee.position}
              defaultValue={employee && employee.position}
              label={'Position'}
            />
          ) : null}
        </div>
      )}
    </FlexRow>
  );
};

export default PositionDropDown;

import React from 'react';

import DropDown from '../../../styledElements/DropDown';
import { FlexRow, FormLabel } from './EmployFormPositioning';
import FormRow from '../../../styledElements/FormRow';
import positions from '../../../../lib/positionsConstant';

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

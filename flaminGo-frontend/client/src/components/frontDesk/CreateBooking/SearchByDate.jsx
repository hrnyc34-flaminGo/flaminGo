import React from 'react';
import FormButton from '../../styledElements/FormButton.jsx';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv.jsx';
import InputTypeText from '../../styledElements/InputTypeText.jsx';

let SearchByDate = (props) => {
  return (
    <HalfRoundDiv className={'dateForm'}>
      <h1 className="title">Desired Dates</h1>
      <h2 className="from">From:</h2>
      <InputTypeText type='date' name={'checkIn'} onChange={props.inputDate} className="fromDateInput"/>
      <h2 className="to">To:</h2>
      <InputTypeText type='date' name={'checkOut'} onChange={props.inputDate} className="toDateInput"/>
      <FormButton onClick={props.goToNext} id={'dateForm'} className="submit">
        Submit
      </FormButton>
    </HalfRoundDiv>
  );
};

export default SearchByDate;
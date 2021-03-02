import React from 'react';
import FormButton from '../../styledElements/FormButton.jsx';

let ConfirmationPage = (props) => {
  return (
    <div className='confirmation'>
      <h1 className='title'>Confirmation Page</h1>
      <ul className='infoList'>
        <li>{`First Name: ${props.firstName}`}</li>
        <li>{`Last Name: ${props.lastName}`}</li>
        <li>{`Phone Number: ${props.phone}`}</li>
        <li>{`Email: ${props.email}`}</li>
        <li>{`Room Type: ${props.roomType}`}</li>
        <li>{`Check In Date: ${props.checkIn}`}</li>
        <li>{`Check Out Date: ${props.checkOut}`}</li>
      </ul>
      <FormButton
        onClick={() => {
          props.submitBooking();
          props.clickBack();
        }}
        id={'submitConfirm'}
      >
        Confirm Booking
      </FormButton>
    </div>
  );
};

export default ConfirmationPage;

import React, { useState } from 'react';

import BackArrow from '../styledElements/BackArrow';
import CheckoutLanding from './checkout/CheckoutLanding';
import CreateBookingForm from './CreateBooking/CreateBookingForm.jsx';
import FlexCenterContainer from '../styledElements/FlexCenterContainer';
import LandingButtons from '../globalComponents/landingPage/LandingButtons';
import SearchForReservations from './checkIn/01searchForReservations';
import useChoosePath from '../globalComponents/landingPage/useChoosePath';
import ViewAddEditRoom from '../management/ViewAddEditRoom.jsx';

const FrontDeskLanding = ({ back }) => {
  // set state to toggle for conditional rendering
  const [paths, setPaths] = useChoosePath({
    checkIn: false,
    checkOut: false,
    viewRooms: false,
    createBooking: false,
    landing: true,
  });

  //set up for transition to room list page
  const [backColor, setBackColor] = useState('white');
  const [listBackground, setListBackground] = useState(0);

  // static object of this Landing routs and flipping for conditional rendering
  const routs = [
    {
      title: 'Check-In',
      onClick: () => setPaths('checkIn'),
    },
    { title: 'Check-Out', onClick: () => setPaths('checkOut') },
    { title: 'View Rooms', onClick: () => setPaths('viewRooms') },
    { title: 'Create Booking', onClick: () => setPaths('createBooking') },
  ];

  // return to main landing
  const clickBack = () => {
    // if on landing run back function else return to this landing
    paths.landing ? back() : setPaths('landing');
    setBackColor('white');
    setListBackground(0);
  };

  return (
    <div className='landingContainer'>
      <div className={listBackground}>
        <BackArrow
          margin={'40px 40px'}
          onClick={clickBack}
          color={backColor}
          location={paths.landing ? 'Main Homepage' : 'Front Desk'}
        />
        {paths.checkIn ? (
          // place holder for check-in component
          <SearchForReservations />
        ) : paths.checkOut ? (
          // place holder for check-out component
          <CheckoutLanding />
        ) : paths.viewRooms ? (
          // place holder for room view component
          <ViewAddEditRoom
            setBackColor={setBackColor}
            setListBackground={setListBackground}
          />
        ) : paths.createBooking ? (
          <FlexCenterContainer>
            <CreateBookingForm clickBack={clickBack} />
          </FlexCenterContainer>
        ) : (
          <FlexCenterContainer>
            <LandingButtons routs={routs} />
          </FlexCenterContainer>
        )}
      </div>
    </div>
  );
};

export default FrontDeskLanding;

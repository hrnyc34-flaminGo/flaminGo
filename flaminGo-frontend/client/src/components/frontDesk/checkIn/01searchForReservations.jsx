import React, { useState, useEffect } from 'react';
import FormButton from '../../styledElements/FormButton';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import InputTypeText from '../../styledElements/InputTypeText';
import CheckInReservationList from './02checkIn2';
import AvailableRooms from './03availableRooms';
import ConfirmationPage from './04confirmationPage';
import url from '../../../lib/apiPath';
import axios from 'axios';

const SearchForReservations = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [resId, setResId] = useState('');
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState({});
  const [roomList, setRoomList] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({});

  //functions
  const axiosRequestForName = () => {
    axios
      .get(`${url}/reservations`, {
        params: {
          firstName: name,
        },
      })
      .then((results) => {
        setReservations(results.data);
        return;
      })
      .catch((err) => console.log(err, 'you have an error'));
  };

  const axiosRequestForResId = () => {
    axios
      .get(`${url}/reservations`, {
        params: {
          reservation_id: resId,
        },
      })
      .then((results) => {
        setReservations(results.data);
        return;
      })
      .catch((err) => console.log(err, 'you have an error'));
  };

  const addPage = (jumpTo) => {
    if (jumpTo) {
      setPage(() => jumpTo);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const subtractPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateResId = (e) => {
    setResId(e.target.value);
  };

  const updateSelectedReservation = (index) => {
    setSelectedReservation(reservations[index]);
  };

  // unfinished method for data validation
  let nameValidate = null;
  if (name === 'blop') {
    nameValidate = <div> your input is a blop </div>;
  }

  //page navigation
  if (page === 2) {
    return (
      <CheckInReservationList
        name={name}
        resId={resId}
        addPage={addPage}
        subtractPage={subtractPage}
        reservationData={reservations}
        updateSelectedReservation={updateSelectedReservation}
      />
    );
  }

  if (page === 3) {
    return (
      <AvailableRooms
        name={name}
        resId={resId}
        addPage={addPage}
        subtractPage={subtractPage}
        selectedReservation={selectedReservation}
        roomList={roomList}
        setRoomList={setRoomList}
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
      />
    );
  }

  if (page === 4) {
    return (
      <ConfirmationPage
        addPage={addPage}
        subtractPage={subtractPage}
        reservationData={reservations}
        selectedReservation={selectedReservation}
        setName={setName}
        setResId={setResId}
        selectedRoom={selectedRoom}
      />
    );
  }


  return (
    <HalfRoundDiv className='mainBox' margin={'0 auto'}>
      <div className='checkInTitleDiv'> Check-In Search for Reservations</div>
      <div className='centeredInputBars'>
        <label className='checkinLabels'> Name</label> <br />
        <InputTypeText
          id='checkInGuestName'
          width={'100%'}
          value={name}
          onChange={updateName}
        />
        {nameValidate}
        <label className='checkinLabels'> Reservation ID</label> <br />
        <InputTypeText
          id='reservation'
          width={'100%'}
          value={resId}
          onChange={updateResId}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FormButton
          backgroundColor='berry'
          className='searchButtonPlacement'
          onClick={(e) => {
            if (name.length !== 0) {
              axiosRequestForName();
              addPage();
            } else {
              axiosRequestForResId();
              addPage();
            }
          }}
          margin={'0 auto'}
        >
          {' '}
          Search{' '}
        </FormButton>
      </div>
    </HalfRoundDiv>
  );
};

export default SearchForReservations;

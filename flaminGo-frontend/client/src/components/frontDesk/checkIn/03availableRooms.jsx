import React, { useState, useEffect } from 'react';

import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import FormButton from '../../styledElements/FormButton';
import axios from 'axios';
import url from '../../../lib/apiPath';

const AvailableRooms = (props) => {
  //on mount:
  useEffect(() => {
    axios
      .get(`${url}/rooms`, {
        // params: {
        // roomType: props.selectedReservation.room_id
        // }
      })
      .then((results) => {
        let FilteredResults = results.data
          //the rooms that arent occupied
          .filter((room) => room.isOccupied === false)
          //the rooms that match the room type on the reservation
          .filter(
            (room) => room.roomType === props.selectedReservation.roomType
          );

        props.setRoomList(FilteredResults);
        return;
      })
      .catch((err) => console.log(err, 'you have an error'));
  }, []);

  return (
    <HalfRoundDiv margin='0 30px 0 30px' id='reservationOuterContainer'>
      <div id='checkIn3Container'>
        <div className='checkInTitleDiv'> Check-In: Available Rooms</div>
        <div id='roomsListInnerContainer'>
          {props.roomList.map((room) => {
            return (
              <div
                key={room._id}
                className='roomBox'
                onClick={(e) => {
                  props.setSelectedRoom(room);
                  props.addPage();
                }}
              >
                {room.roomNumber}
              </div>
            );
          })}
        </div>
        <FormButton
          className='searchButtonPlacement'
          onClick={props.subtractPage}
        >
          {' '}
          Back
        </FormButton>
      </div>
    </HalfRoundDiv>
  );
};

export default AvailableRooms;

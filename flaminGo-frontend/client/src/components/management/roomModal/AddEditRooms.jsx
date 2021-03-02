import React, { useState, useEffect } from 'react';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv.jsx';
import BigButton from '../../styledElements/BigButton.jsx';
import ModalTitle from '../../styledElements/ModalTitle.jsx';
import InputTypeText from '../../styledElements/InputTypeText.jsx';
import { colors } from '../../styledElements/styleGuid';
import RoomTypeList from './RoomsComponents/RoomTypeList.jsx';
import axios from 'axios';
import url from '../../../lib/apiPath';

//sampleData
import { roomTypeSampleData } from '../../../SampleData/AmenitiesRoomType.js';

const AddEditRooms = ( { type } ) => {
  const [roomTypeState, setRoomTypeData] = useState([]);
  const [roomFloor, setFloor] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [roomType, setType] = useState('');

  useEffect(() => {
    axios
      .get( `${url}/rooms/types` )
      .then(res => {
        setRoomTypeData( res.data );
      })
      .catch(err =>{
        setRoomTypeData( roomTypeSampleData );
        console.log( err );
      });
  }, []);
  const handleAddRooms = ( roomTypeQuery ) => {
    setType( roomTypeQuery );
  };
  const handleFloorNumber = ( e ) => {
    setFloor( e.target.value );
  };
  const handleRoomNumber = ( e ) => {
    setRoomNumber( e.target.value );
  };
  const handleSubmit = ( e ) => {
    event.preventDefault();
    let params = {
      roomNumber: roomNumber,
      floorNumber: roomFloor,
      roomType: roomType,
    };
    if ( !roomNumber || !roomFloor || !roomType ) {
      alert('There is missing information, Please fill it out!');
    } else {
      axios
        .post( `${url}/rooms`, params )
        .then(() => {
          alert( 'Completed' );
        })
        .catch( err =>{
          alert( 'Not connected to Database' );
          console.log( err );
        });
    }
  };

  return (
    <div id='roomContainer'>
      <div>
        <HalfRoundDiv
          id='roomEntriesContainer'
          margin='0 30px 0 30px'
          width='100vh - 60px'
          height='calc(100vh - 260px)'
        >

          <div id='roomHeaderBox'>
            <ModalTitle>{ type === 'ADD ROOM' } ADD ROOM</ModalTitle>
          </div>

          <div id='roomBox_add'>
            <div className='roomTable'>
              <div id='roomInnerTable1'>
                <div id='roomInputBox'>
                  <div>
                    <div id='roomlabel'>floor number</div>
                    <InputTypeText
                      id='roomInputQuery1'
                      minlength='50px'
                      maxlength='200px'
                      placeholder='floor #'
                      margin-top='0px'
                      name='floorInfo'
                      onChange={ (e) => handleFloorNumber(e) }
                      width='200px'
                      type='text'
                    ></InputTypeText>
                  </div>

                  <div>
                    <div id='roomlabel'>room number</div>
                    <InputTypeText
                      id='roomInputQuery2'
                      minlength='50px'
                      maxlength='200px'
                      placeholder='room #'
                      margin-top='0px'
                      name='roomNumberInfo'
                      onChange={ (e) => handleRoomNumber(e) }
                      width='200px'
                      type='text'
                    ></InputTypeText>
                  </div>
                </div>
              </div>

              <div id='roomInnerTable3'>
                <hr />
              </div>

              <div id='roomInnerTable2'>
                {roomTypeState.map(( oneRoomType ) => {
                  console.log('oneRoomType:', oneRoomType);
                  if (type === 'ADD') {
                    return (
                      <div>
                        <RoomTypeList
                          key={ 'rmType' + oneRoomType._id }
                          handleAddRooms={ handleAddRooms }
                          listType={ oneRoomType.roomType }
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          <div>
            <div id='buttonRight'>
              <BigButton
                id='roomSubmitButton'
                onClick={ handleSubmit }
                backgroundColor={ colors.berry }
                color='white'
              >
                SUBMIT
              </BigButton>
            </div>
          </div>

        </HalfRoundDiv>
      </div>
    </div>
  );
};

export default AddEditRooms;

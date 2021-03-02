import React from 'react';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv.jsx';
import ListEntry from './ListEntry.jsx';

let AvailableRooms = (props) => {
  return (
    <HalfRoundDiv id={'roomListContainer'}>
      <h1 className='title'>Available Room Types</h1>
      <div className='roomList'>
        {props.availableRooms.map((room) => {
          return (
            <ListEntry
              onClick1={(event) => {
                props.goToNext(event);
                props.selectRoom(event);
              }}
              table={room}
            />
          );
        })}
      </div>
    </HalfRoundDiv>
  );
};

export default AvailableRooms;

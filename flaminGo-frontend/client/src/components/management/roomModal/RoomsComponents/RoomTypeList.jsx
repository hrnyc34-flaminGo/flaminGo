import React from 'react';

const RoomTypeList = ({ handleAddRooms, listType }) => {

  return (
    <div
      id='setTypeButton'
      onClick={(e) => {
        handleAddRooms( listType );
      }}
    >
      <div id='roomSelectText'>{listType}</div>

    </div>
  );
};

export default RoomTypeList;
import React, { useState } from 'react';

import AddEditRooms from './roomModal/AddEditRooms.jsx';
import FlexCenterContainer from '../styledElements/FlexCenterContainer';
import ListMaster from '../globalComponents/ListMaster';

const ViewAddEditRoom = ({ setBackColor, setListBackground }) => {
  const [toggleModals, setToggleModal] = useState({
    mainList: true,
    addRoom: false,
    editRoom: false,
  });
  const [selectedData, setSelectedData] = useState(null);

  const closeModal = () => {
    setBackColor('black');
    setListBackground('listBgContainer');
    setToggleModal(0);
  };

  const openAddRoom = (data) => {
    console.log(selectedData);
    setSelectedData(data);
    setBackColor('white');
    setListBackground(0);
    setToggleModal({
      mainList: false,
      addRoom: true,
      editRoom: false,
    });
  };

  const openEditRoom = (data) => {
    console.log(selectedData);
    setSelectedData(data);
    setBackColor('white');
    setListBackground(0);
    setToggleModal({
      mainList: false,
      addRoom: false,
      editRoom: true,
    });
  };
  // {toggleModals.mainList ? (
  //   <ListMaster
  //     onClick1={openAddRoom}
  //     onClick2={openEditRoom}
  //     type='room'
  //     handleBackChange={setBackColor}
  //     handleBackgroundChange={setListBackground}
  //   />
  // ) : toggleModals.addRoom ? (
  //   <FlexCenterContainer>
  //     <AddEditRooms type='ADD'/>
  //   </FlexCenterContainer>
  // ) : toggleModals.editRoom ? (
  //   <FlexCenterContainer>
  //     <AddEditRooms type='EDIT'/>
  //   </FlexCenterContainer>
  // )}

  return (
    <div>
      {toggleModals.mainList ? (
        <ListMaster
          onClick1={openAddRoom}
          onClick2={openEditRoom}
          type='room'
          handleBackChange={setBackColor}
          handleBackgroundChange={setListBackground}
        />
      ) : toggleModals.addRoom ? (
        <FlexCenterContainer>
          <AddEditRooms type='ADD' />
        </FlexCenterContainer>
      ) : (
        <FlexCenterContainer>
          <AddEditRooms type='EDIT' />
        </FlexCenterContainer>
      )}
    </div>
  );
};

export default ViewAddEditRoom;

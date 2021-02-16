import React, { useState, useEffect } from "react";
import FormButton from '../styledElements/FormButton.jsx'
import RoomDetailsModal from './RoomDetailsModal';


const ListEntry = ({table, type, allRmData}) => {

  const [modalStatus, setModalStatus] = useState(false);

  const toggleRoomDetailsModal = () => {
    if(modalStatus) {
      setModalStatus(false)
    } else {
      setModalStatus(true)
    }
  }

  let entryButtons;
  if (type === "employee") {
    entryButtons = <span className="listEntryButtons">
    <FormButton margin="0 30px 0 20px">See Details</FormButton>
    <FormButton margin="0 20px 0 0" backgroundColor="#ff2063">Remove</FormButton>
    </span>
  } else if (type === "room") {
    entryButtons = <span className="listEntryButtons">
    <FormButton onClick={toggleRoomDetailsModal} margin="0 30px 0 20px">See Details</FormButton>
    <RoomDetailsModal
      isOpen={modalStatus}
      toggle={toggleRoomDetailsModal}
      allRmData={allRmData}
    />
    </span>
  } else if (type === "guest") {
    entryButtons = <span className="listEntryButtons">
    <FormButton margin="0 30px 0 20px">See Details</FormButton>
    </span>
  } else if (type === "task") {
    entryButtons = <span className="listEntryButtons">
    <FormButton margin="0 30px 0 20px">See Details</FormButton>
    <FormButton margin="0 20px 0 0">Mark as Complete</FormButton>
    </span>
  }

  return (
    <div id="listEntry">
      <span className="listEntryText">{table}</span>
      {entryButtons}
    </div>

  )


};

export default ListEntry;
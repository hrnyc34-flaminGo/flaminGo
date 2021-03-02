import React, { useState, useEffect } from "react";
import FormButton from "../../styledElements/FormButton.jsx";

const ListEntry = ({ table, type, onClick1, onClick2, entity }) => {
  return (
    <div id='listEntry'>
      <span className='listEntryText'>{table}</span>
      <FormButton margin='0 30px 0 20px' onClick={onClick1} id={'roomList'} name={table}>
          Select Room
      </FormButton>
    </div>
  );
};

export default ListEntry;

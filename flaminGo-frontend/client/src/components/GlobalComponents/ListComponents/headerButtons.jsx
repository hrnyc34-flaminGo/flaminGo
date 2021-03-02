import React, { useState } from 'react';
import FormButton from "../../styledElements/FormButton.jsx";


const RoomHeaderButtons = () => {

  const [dropDownStatus, setDropDown] = useState("list1");

  var checkList = document.getElementById("dropDown");

  let handleFilterDropdown = (e) => {
    if (dropDownStatus === "list1") setDropDown("list1 visible");
    else setDropDown("list1");
  };


  return (
    <div className="buttonsContainer">
    <div id="dropDown" className={dropDownStatus}>
            <FormButton
              className="filterAnchor"
              children="Filter"
              margin="0 30px 0 0"
              onClick={handleFilterDropdown}
            />
            <ul className="items">
              <li>
                <input type="checkbox" />
                Test
              </li>
              <li>
                <input type="checkbox" />
                Test
              </li>
            </ul>
          </div>
          <FormButton children="Sort By" />
          </div>
)};

export default RoomHeaderButtons
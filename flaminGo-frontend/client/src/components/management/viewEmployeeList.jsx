import React, { useState } from 'react';

import EmployeeContainer from './employeeModal/EmployeeContainer';
import FlexCenterContainer from '../styledElements/FlexCenterContainer';
import ListMaster from '../globalComponents/ListMaster';

const ViewEmployeeList = ({ setBackColor, setListBackground }) => {
  const [toggleModals, setToggleModal] = useState(0);
  const [selectedData, setSelectedData] = useState(null);

  const openModalBackground = (color, background) => {
    setBackColor(color);
    setListBackground(background);
  };

  const closeModal = () => {
    openModalBackground('black', 'listBgContainer');
    setToggleModal(0);
  };

  const openModal1 = (data) => {
    setSelectedData(data);
    openModalBackground('white', 0);
    setToggleModal(1);
  };

  const openModal2 = (data) => {
    openModalBackground('white', 0);
    setToggleModal(2);
  };
  return (
    <div>
      {toggleModals === 1 ? (
        <FlexCenterContainer>
          <EmployeeContainer employee={selectedData} back={closeModal} />
        </FlexCenterContainer>
      ) : toggleModals === 2 ? (
        <FlexCenterContainer>
          <EmployeeContainer back={closeModal} />
        </FlexCenterContainer>
      ) : (
        <ListMaster
          onClick1={openModal1}
          openNewEmployee={openModal2}
          type='employee'
          handleBackChange={setBackColor}
          handleBackgroundChange={setListBackground}
        />
      )}
    </div>
  );
};

export default ViewEmployeeList;

import React from 'react';
import LogoutButton from './login/LogoutButton';

const MainHeader = ({ back }) => {
  return (
    <div id='mainHeader'>
      <span onClick={back}>
        <img src='svg/flamingoLogo.svg' height='80px'></img>
      </span>
      <span id='menuIcon'>
        <LogoutButton />
      </span>
    </div>
  );
};

export default MainHeader;

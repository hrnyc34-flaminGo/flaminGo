import React, { useContext } from 'react';
import LandingButtons from './LandingButtons';
import { MainContext } from './MainContext';

const MainLandingBtn = ({ routs }) => {
  const { position } = useContext(MainContext);
  return (
    <div>
      <LandingButtons routs={routs[position]} />
    </div>
  );
};

export default MainLandingBtn;

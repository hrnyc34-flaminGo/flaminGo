import React, { useState, useContext } from 'react';

import AddTaskForm from './AddTaskForm.jsx';
import BackArrow from '../styledElements/BackArrow';
import FlexCenterContainer from '../styledElements/FlexCenterContainer';
import LandingButtons from '../globalComponents/landingPage/LandingButtons';
import ListMaster from '../globalComponents/ListMaster';
import { MainContext } from '../globalComponents/landingPage/MainContext.jsx';
import useChoosePath from '../globalComponents/landingPage/useChoosePath';
import ViewAddEditRoom from '../management/ViewAddEditRoom.jsx';

const HMLanding = ({ back }) => {
  // set state to toggle for conditional rendering
  const [paths, setPaths] = useChoosePath({
    addTask: false,
    viewTask: false,
    viewRooms: false,
    landing: true,
  });

  const { id, name } = useContext(MainContext);

  //set up for transition to room list page
  const [backColor, setBackColor] = useState('white');
  const [listBackground, setListBackground] = useState(0);

  // static object of this Landing routs and flipping for conditional rendering
  const routs = [
    { title: 'Add Task', onClick: () => setPaths('addTask') },
    {
      title: 'View Task',
      onClick: () => setPaths('viewTask'),
    },
    { title: 'View Rooms', onClick: () => setPaths('viewRooms') },
  ];

  // return to main landing
  const clickBack = () => {
    // if on landing run back function else return to this landing
    paths.landing ? back() : setPaths('landing');
    setBackColor('white');
    setListBackground(0);
  };

  return (
    <div className='landingContainer'>
      <div className={listBackground}>
        <BackArrow
          margin={'40px 40px'}
          onClick={clickBack}
          color={backColor}
          location={
            paths.landing ? 'Main Homepage' : 'Housekeeping/Maintenance'
          }
        />
        {paths.viewTask ? (
          //  task view component
          <ListMaster
            type='task'
            handleBackChange={setBackColor}
            handleBackgroundChange={setListBackground}
          />
        ) : paths.viewRooms ? (
          // room view component
          <ViewAddEditRoom
            setBackColor={setBackColor}
            setListBackground={setListBackground}
          />
        ) : paths.addTask ? (
          //  add task component
          <FlexCenterContainer>
            <AddTaskForm employeeId={id} name={name} clickBack={clickBack} />
          </FlexCenterContainer>
        ) : (
          <FlexCenterContainer>
            <LandingButtons routs={routs} />
          </FlexCenterContainer>
        )}
      </div>
    </div>
  );
};

export default HMLanding;

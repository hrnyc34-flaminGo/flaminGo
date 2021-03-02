import React, { useState, useEffect, useContext } from 'react';
import FormButton from '../styledElements/FormButton.jsx';
import RoomDetailsModal from './RoomDetailsModal';
import { MainContext } from './landingPage/MainContext';
import TaskDetailsModal from './TaskDetailsModal';
import axios from 'axios';
import url from '../../lib/apiPath';

const ListEntry = ({ table, type, onClick1, onClick2, entity, completed }) => {
  let entryButtons;

  const user = useContext(MainContext);
  const { position } = useContext(MainContext);
  const [modalStatus, setModalStatus] = useState(false);
  const [rmModalStatus, setRmModalStatus] = useState(false);
  const [taskModalStatus, setTaskModalStatus] = useState(false);
  const [taskCompletedStatus, setTaskCompletedStatus] = useState(false);

  const toggleRoomDetailsModal = () => {
    if (rmModalStatus) {
      setRmModalStatus(false);
    } else {
      setRmModalStatus(true);
    }
  };

  const toggleTaskDetailsModal = () => {
    if (taskModalStatus) {
      setTaskModalStatus(false);
    } else {
      setTaskModalStatus(true);
    }
  };

  const markTaskComplete = () => {
    axios

      .put(`${url}/${entity.task_id}`, {
        employeeCompleted: user.name,
        employeeCompleted_id: user.id,
        isComplete: true,
      })
      .then(function (response) {
        console.log('success', response);
        setTaskCompletedStatus(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (type === 'employee') {
    entryButtons = (
      <span className='listEntryButtons'>
        <FormButton margin='0 15px 10px 15px' onClick={() => onClick1(entity)}>
          See Details
        </FormButton>
        <FormButton
          onClick={() => onClick2(entity)}
          margin='0 30px 0 15px'
          backgroundColor='berry'
        >
          Remove
        </FormButton>
      </span>
    );
  } else if (type === 'room' && position === 'systemAdministration') {
    entryButtons = (
      <span className='listEntryButtons'>
        <FormButton margin='0 15px 10px 15px' onClick={toggleRoomDetailsModal}>
          See Details
        </FormButton>
        <FormButton margin='0 30px 0 15px' onClick={onClick2}>
          Edit Room
        </FormButton>
        <RoomDetailsModal
          isOpen={rmModalStatus}
          toggle={toggleRoomDetailsModal}
          allRmData={entity}
          key={entity._id}
        />
      </span>
    );
  } else if (type === 'room') {
    entryButtons = (
      <span className='listEntryButtons'>
        <FormButton margin='0 30px 0 20px' onClick={toggleRoomDetailsModal}>
          See Details
        </FormButton>
        <RoomDetailsModal
          isOpen={rmModalStatus}
          toggle={toggleRoomDetailsModal}
          allRmData={entity}
          key={entity._id}
        />
      </span>
    );
  } else if (type === 'guest') {
    entryButtons = (
      <span className='listEntryButtons'>
        <FormButton margin='0 30px 0 20px' onClick={() => onClick1(entity)}>
          See Details
        </FormButton>
      </span>
    );
  } else if (type === 'task' && completed === true) {
    entryButtons = (
      <span className='listEntryButtons'>
        <FormButton margin='0 15px 10px 15px' onClick={toggleTaskDetailsModal}>
          See Details
        </FormButton>
        <FormButton margin='0 30px 0 15px' backgroundColor='berry'>
          Completed
        </FormButton>
        <TaskDetailsModal
          isOpen={taskModalStatus}
          toggle={toggleTaskDetailsModal}
          allTaskData={entity}
          key={entity._id}
        />
      </span>
    );
  } else if (type === 'task') {
    entryButtons = (
      <span className='listEntryButtons'>
        <FormButton margin='0 15px 10px 15px' onClick={toggleTaskDetailsModal}>
          See Details
        </FormButton>
        <FormButton
          margin='0 30px 0 15px'
          backgroundColor='berry'
          onClick={markTaskComplete}
        >
          {!taskCompletedStatus ? 'Mark as Complete' : 'Completed'}
        </FormButton>
        <TaskDetailsModal
          isOpen={taskModalStatus}
          toggle={toggleTaskDetailsModal}
          allTaskData={entity}
          key={entity._id}
        />
      </span>
    );
  }

  return (
    <div id='listEntry'>
      <span className='listEntryText'>{table}</span>
      {entryButtons}
    </div>
  );
};

export default ListEntry;

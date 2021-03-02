import React from "react";
import axios from 'axios';

let entryTableRooms = (entity) => {

  let roomNumber = entity.roomNumber;
  let roomType = entity.roomType;
  let occupied = entity.isOccupied;
  let cleaned = entity.isClean
  let occupStatus, cleanStatus;

  if (occupied) {
    occupStatus = "Occupied";
  } else {
    occupStatus = "Vacant";
  }

  if (cleaned) {
    cleanStatus = "Cleaned";
  } else {
    cleanStatus = "Dirty";
  }

  return (
    <table className="entryTable">
      <tbody>
      <tr>
        <th>{roomNumber}</th>
        <th>{roomType}</th>
        <th>{occupStatus}</th>
        <th>{cleanStatus}</th>
      </tr>
      </tbody>
    </table>
  );
};

let entryTableEmployees = (entity) => {

  let name = entity.name;
  let position = entity.position;
  let hours = entity.weekHours;
  let wage = entity.wage;

  if (position === "systemAdministration") {
    position = "System Admin";
  } else if (position === "management") {
    position = "Management";
  } else if (position === "maintenance") {
    position = "Maintenance";
  } else if (position === "housekeeping") {
    position = "Housekeeping";
  } else if (position === "frontDesk") {
    position = "Front Desk";
  }

  return (
    <table className="entryTable">
      <tbody>
      <tr>
        <th>{name}</th>
        <th>{position}</th>
        <th>{hours}</th>
        <th>{wage}</th>
      </tr>
      </tbody>
    </table>
  );
}

let entryTableTasks = (entity) => {

  let title = entity.taskTitle;
  let department = entity.department;
  let setting = `Room ${entity.location}`;
  let assignedTo = entity.employeeAssigned;

  return (
    <table className="entryTable">
      <tbody>
      <tr>
        <th>{title}</th>
        <th>{setting}</th>
        <th>{department}</th>
        <th>{assignedTo}</th>
      </tr>
      </tbody>
    </table>
  );
}

let entryTableGuests = (entity) => {

  let name = entity.bookingGuest;
  let room = entity.roomNumber;
  let checkIn = entity.checkIn;
  let checkOut = entity.checkOut;


  return (
    <table className="entryTable">
      <tbody>
      <tr>
        <th>{name}</th>
        <th>{room}</th>
        <th>{checkIn}</th>
        <th>{checkOut}</th>
      </tr>
      </tbody>
    </table>
  );
}

export {
  entryTableRooms,
  entryTableEmployees,
  entryTableTasks,
  entryTableGuests
}
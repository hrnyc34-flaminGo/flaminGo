import React from "react";

let titleTableRooms = () => {
  return (
    <table className="titleTable">
      <thead>
      <tr>
        <th>Room Number</th>
        <th>Room Type</th>
        <th>Occupation Status</th>
        <th>Cleanliness Status</th>
      </tr>
      </thead>
    </table>
  );
};

let titleTableEmployees = () => {
  return (
    <table className="titleTable">
      <thead>
      <tr>
        <th>Employee Name</th>
        <th>Position</th>
        <th>Hours Worked</th>
        <th>Wage</th>
      </tr>
      </thead>
    </table>
  )
}

let titleTableTasks = () => {
  return (
    <table className="titleTable">
      <thead>
      <tr>
        <th>Task Title</th>
        <th>Location</th>
        <th>Department</th>
        <th>Assigned To</th>
      </tr>
      </thead>
    </table>
  )
}

let titleTableGuests = () => {
  return (
    <table className="titleTable">
      <thead>
      <tr>
        <th>Guest Name</th>
        <th>Room Number</th>
        <th>Check-In Date</th>
        <th>Check-Out Date</th>
      </tr>
      </thead>
    </table>
  )
}

export {
  titleTableGuests,
  titleTableTasks,
  titleTableRooms,
  titleTableEmployees
}
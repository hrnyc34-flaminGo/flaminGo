import React, { useState, useEffect, useContext } from 'react';
import FormButton from '../styledElements/FormButton.jsx';
import HalfRoundDiv from '../styledElements/HalfRoundDiv.jsx';
import ListEntry from '../GlobalComponents/ListEntry.jsx';
import {
  titleTableRooms,
  titleTableTasks,
  titleTableEmployees,
  titleTableGuests,
} from './ListComponents/titleTables.jsx';
import {
  entryTableRooms,
  entryTableTasks,
  entryTableEmployees,
  entryTableGuests,
} from './ListComponents/entryTables.jsx';
import {
  roomsData,
  employeeData,
  taskData,
  reservationData,
} from "../../SampleData/SampleData.js";
import axios from 'axios';
import { MainContext } from '../landingPage/MainContext';

const ListMaster = ({
  type,
  handleBackChange,
  handleBackgroundChange,
  onClick1,
  onClick2,
}) => {

  // useEffect(() => {
  //   handleBackChange('black');
  //   handleBackgroundChange('listBgContainer');
  // });

  let titleTable, searchParam;

  const { position } = useContext(MainContext);

  const [dataSet, setDataSet] = useState([])
  useEffect(() => {
    handleBackChange('black');
    handleBackgroundChange('listBgContainer');
    if (type ==="room") {
      axios.get("/rooms/")
      .then((data) => {setDataSet(data.data)})
      // .then(({ data }) => {
      //   console.log('Data:', data)
      //   return data.map((room) => {
      //     console.log('Room:', room)
      //     axios.get(`/rooms/${room._id}`)
      //     .then(({ data }) => {room.roomType = data.roomType;
      //     return room})
      //   })
      // })
      // .then((fullData) => {return Promise.all(fullData)})
      // .then((result) => {setDataSet(result)})
    } else if (type ==="employee") {
      axios.get("/employees/")
      .then((data) => {setDataSet(data.data)})
    } else if (type ==="task") {
      axios.get("/tasks/")
      .then((data) => {setDataSet(data.data)})
    }
  }, []);

  console.log('dataset:', dataSet)

  if (type === 'room') {
    titleTable = titleTableRooms();
    searchParam = 'Search by amenity';
    // setDataSet(roomsData)
  } else if (type === 'employee') {
    titleTable = titleTableEmployees();
    searchParam = 'Search by employee name';
    // setDataSet(employeeData)
  } else if (type === 'task') {
    titleTable = titleTableTasks();
    searchParam = 'Search by assigned';
    // setDataSet(taskData)
  }

  var data = JSON.parse(JSON.stringify(dataSet))


 // let titleTable, searchParam;

  // if (type === 'room') {
  //   titleTable = titleTableRooms();
  //   searchParam = 'Search by amenity';
  //   setDataSet(roomsData)
  // } else if (type === 'employee') {
  //   titleTable = titleTableEmployees();
  //   searchParam = 'Search by employee name';
  //   setDataSet(employeeData)
  // } else if (type === 'task') {
  //   titleTable = titleTableTasks();
  //   searchParam = 'Search';
  //   setDataSet(taskData)
  // } else if (type === 'guest') {
  //   titleTable = titleTableGuests();
  //   searchParam = 'Search by guest name';
  // }

  //Search Functionality
  const [searchTerm, setSearch] = useState('');

  // useEffect(() => {
  //   let searched = [];
  //   if (searchTerm !== '') {
  //     if (type === 'room') {
  //       searched = data.filter((room) => {
  //         let amenitiesString = room.amenities.join();
  //         let amenitiesLower = amenitiesString.toLowerCase();
  //         return amenitiesLower.includes(searchTerm);
  //       });
  //       data = searched;
  //     } else if (type === 'employee') {
  //       searched = data.filter((employee) => {
  //         let name = employee.name.toLowerCase();
  //         return name.includes(searchTerm);
  //       });
  //       data = searched;
  //     }
  //   }
  // })

  const handleSearch = (e) => {
    let search = document.getElementById('searchBar').value;
    setSearch(search);
  };

  let searched = [];
  if (searchTerm !== '') {
    if (type === 'room') {
      searched = data.filter((room) => {
        let amenitiesString = room.amenities.join();
        let amenitiesLower = amenitiesString.toLowerCase();
        return amenitiesLower.includes(searchTerm);
      });
      data = searched;
    } else if (type === 'employee') {
      searched = data.filter((employee) => {
        let name = employee.name.toLowerCase();
        return name.includes(searchTerm);
      });
      data = searched;
    }
  }

  //Sort Functionality

  const [sortTerm, setSort] = useState('');

  let handleSort = () => {
    let sortBy = document.getElementsByClassName("sortBy")[0].value;
    setSort(sortBy)
  }

  if (sortTerm === "roomType" || sortTerm === "name" || sortTerm === "position") {
    data.sort(function(a, b){
      if(a[sortTerm] < b[sortTerm]) { return -1; }
      if(a[sortTerm] > b[sortTerm]) { return 1; }
      return 0;
  })
  } else if (sortTerm === "roomNumber") {
    data.sort(function(a, b){
      if(parseInt(a[sortTerm]) < parseInt(b[sortTerm])) { return -1; }
      if(parseInt(a[sortTerm]) > parseInt(b[sortTerm])) { return 1; }
      return 0;
  })
  }

  let sortOptions;
  if (type === "room") {
    sortOptions =   <select className="sortBy" defaultValue="" onChange={handleSort}>
    <option value="" disabled hidden>Sort By</option>
    <option value="roomNumber">Room Number</option>
    <option value="roomType">Room Type</option>
  </select>
  } else if (type === "employee") {
    sortOptions = <select className="sortBy" defaultValue="" onChange={handleSort}>
    <option value="" disabled hidden>Sort By</option>
    <option value="position">Position</option>
    <option value="name">Name</option>
  </select>
  } else if (type === "task") {
    sortOptions = "";
  }

  //Filter functionality

  const [filterTerm, setFilter] = useState('');

  let handleFilter = () => {
    let filterBy = document.getElementsByClassName('filterBy')[0].value;
    setFilter(filterBy);
  };

  if (filterTerm === 'vacancy') {
    data = data.filter((room) => {
      let vacant = !room.isOccupied;

      return vacant}
    );
  } else if (filterTerm === "cleaned") {
    data = data.filter((room) => {
      let cleaned = room.isClean;
      return cleaned;
    });
  } else if (filterTerm === 'worked') {
    data = data.filter((employee) => {
      let hours = employee.weekHours;
      return hours > 0;
    });
  } else if (filterTerm === 'housekeeping') {
    data = data.filter((task) => {
      return task.department === 'Housekeeping';
    });
  } else if (filterTerm === 'maintenance') {
    data = data.filter((task) => {
      return task.department === 'Maintenance';
    });
  } else if (filterTerm === '') {
    data = data;
  }

  let filterOptions;
  if (type === "room") {
    filterOptions = <select className="filterBy" defaultValue="" onChange={handleFilter}>
    <option value="" disabled hidden>Filter</option>
    <option value="">See All Rooms</option>
    <option value="vacancy">Vacant</option>
    <option value="cleaned">Cleaned</option>
  </select>
  } else if (type === "employee") {
    filterOptions = <select className="filterBy" defaultValue="" onChange={handleFilter}>
    <option value="" disabled hidden>Filter</option>
    <option value="">See All Employees</option>
    <option value="worked">Worked This Week</option>
    </select>
  } else if (type === "task") {
     filterOptions = <select className="filterBy" defaultValue="" onChange={handleFilter}>
    <option value="" disabled hidden>Filter</option>
    <option value="">See All Tasks</option>
    <option value="housekeeping">Housekeeping</option>
    <option value="maintenance">Maintenance</option>
    </select>
  }

  let addButton = ''
  if (position === "systemAdministration" && type === "room") {
    addButton = <FormButton backgroundColor="berry" margin="0 30px 0 0" onClick={onClick1}>Add Room</FormButton>
  } else if (position === "systemAdministration" && type === "employee") {
    addButton = <FormButton backgroundColor="berry" margin="0 30px 0 0">Add Employee</FormButton>
  }

  return (
    <div id='listContainer'>
      <div className='listHeader'>
        <div className='listHeaderButtons'>
          {addButton}
          {filterOptions}
          {sortOptions}
          <div className='listHeaderSearch'>
            <input id='searchBar' type='text' placeholder={searchParam}></input>
            <img
              src='svg/search.svg'
              height='20px'
              onClick={handleSearch}
            ></img>
          </div>
        </div>
      </div>
      <HalfRoundDiv
        gradients={true}
        margin='0 30px 0 30px'
        width='100vh - 60px'
        height='calc(100vh - 260px)'
      >
        <div id='listEntriesHeader'>{titleTable}</div>
        <div id='listEntriesContainer'>
          {data.map((entity) => {
            if (type === 'room') {
              return (
                <ListEntry
                  entity={entity}
                  onClick1={onClick1}
                  onClick2={onClick2}
                  table={entryTableRooms(entity)}
                  type='room'
                />
              );
            } else if (type === 'employee') {
              return (
                <ListEntry
                  entity={entity}
                  onClick1={onClick1}
                  onClick2={onClick2}
                  table={entryTableEmployees(entity)}
                  type='employee'
                />
              );
            } else if (type === 'task') {
              return (
                <ListEntry
                  entity={entity}
                  onClick1={onClick1}
                  onClick2={onClick2}
                  table={entryTableTasks(entity)}
                  type='task'
                />
              );
            } else if (type === 'guest') {
              return (
                <ListEntry
                  entity={entity}
                  onClick1={onClick1}
                  onClick2={onClick2}
                  table={entryTableGuests(entity)}
                  type='guest'
                />
              );
            }
          })}
        </div>
      </HalfRoundDiv>
    </div>
  );
};

export default ListMaster;

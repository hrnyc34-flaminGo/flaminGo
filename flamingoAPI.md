<!--
| Parameter | Type | Description |
| ---------- | ---- | ----------- |
|  |  |  | -->



# Flamingo API

## Login

### Authenticate User
`POST /authenticate-user`  Sends User Information

Response
`Status: 200 OK`

Bad Request Response
`Status: 400 BAD_REQUEST`

Internal Server Error Response
`Status: 500 INTERNAL_SERVER_ERROR`

Body Parameters :
| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| username | string | String of username |
| password | string | String of hashed password |

```
{}
```

### Create User
`POST /create-user`  Creates a New User

Response
`Status: 200 OK`

Bad Request Response
`Status: 400 BAD_REQUEST`

Internal Server Error Response
`Status: 500 INTERNAL_SERVER_ERROR`

Body Parameters :
| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| username | string | String of username |
| password | string | String of hashed password |

```
{}
```

### Validate Token
`GET /validate-token`

Response
`Status: 200 OK`

Unauthorized Response
`Status: 401 UNAUTHORIZED`

Body Parameters :
| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| username | string | String of username |

```
{ user: req.user }
```

## Room Routes
### List Rooms
`GET /rooms` Retrives a list of all rooms

Body Parameters

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| roomNumber | string | [Optional] Room number |
| roomType | string | [Optional] Room type |
| isClean | boolean | [Optional] Current cleanliness status of room |
| isOccupied | boolean | [Optional] Current occupancy status of room |

Response
`Status: 200 OK`

```
[All the room objects]
```
### Add A Room
`POST /rooms` Add a new room to the room list

Body Parameters

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| roomNumber | string | String of room number |
| floorNumber | number | [Optional] Floor number |
| roomType | string | Room type of new room |
| amenities | array | [Optional] Array with room amenities |

Response
`Status: 200 OK`

```
{newly created room if possible?}
```

### Edit A Room
`PUT /rooms/:roomId` Edit a specific room

Body Parameters

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| :roomId | string | String representation of mongo _id |
| roomNumber | string | [Optional] String of room number |
| floorNumber | number | [Optional] Floor number |
| roomType | string | [Optional] Room type of new room |
| amenities | array | [Optional] Array with room amenities (Will completely overide the old array of amenities) |

Response
`Status: 201 Created`

### Get Specific Room
`GET /rooms/:roomId` Retrives a specific room by its id

| Parameters | Type | Description |
| ---------- | ---- | ----------- |
| roomId    | string| String matching the mongo _id field |

Response
`Status: 200 OK`

```
{}
```
### List Amenities
`GET /rooms/amenities` Retrives a list of all room amenities.

Response
 `Status: 200 OK`

```
{
  'results': [
    'Fridge'
    'TV',
    'Cable,
    'Kitchen',
    'Handicapped Accessible Shower',
    'Hairdryer'
  ]
}
```

### List Room Types
`GET /rooms/types` Retrives a list of all room types

Response
`Status: 200 OK`

```
{
  'results': [
    'Single Queen',
    'Single King',
    'Double Queen',
    'Suite'
  ]
}
```

## Reservation Routes
### Inquire Room Availability
`GET /reservations/availability/:date` Will return the quantity of available rooms on the supplied date, broken down by room type.

Response:
`Status: 200 OK`

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| date | string | Date of inquirery as a string in the format "MM-DD-YYYY" |

```
{
  "date": "01-10-2020",
  "results": [
    {
      "name": "Single Queen",
      "qty": 10,
      "price": 150.00
    },
    {
      "name": "Double Queen",
      "qty": 10,
      "price": 200.00
    },
    ...
  ]
}
```

### List Reservations
`GET /reservations` Will return a list of reservations matching the search criteria.  By default it will return any reservations that are checking in/out today.

Query Parameters

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
|*NOTE: Each additional parameter is treated as an AND operation narrowing the search |
| guestName | Array | Array containing guest name [firstname, lastName] |
| checkIn | String | String representation of date in MM-DD-YYYY format |
| checkOut | String | String representation of date in MM-DD-YYYY format |
| reservationId | String | String representation of reservation's mongo _id field. (Can be partial id) |

Response
`Status: 200 OK`

```
[]
```

### Add New Reservation
`POST /reservations/` Add a new reservation to the database

Body Parameters

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| bookingClient | String | String representation of guest's mongo _id field |
| guestList | Array | List of names for all guests staying on this reservation |
| checkIn | String | String representation of date in MM-DD-YYYY format |
| checkOut | String | String representation of date in MM-DD-YYYY format |
| bookedRoom | String | Name of the room type being booked |

Response
`Status: 201 Created`

```
{New Reservation}
```


### Edit A Reservation
`PUT /reservations/checkin/:reservationid` Will update the reservation with the room that has been assigned to the checked-in guest, and will mark room as occupied.

Body Parameters

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| room | string | Room number |

Response

Status: 200 Ok

`PUT /reservations/checkout/:reservationid` Will mark room as un-occupied and dirty.

Body Parameters

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| room | string | Room number |

Response

Status: 200 Ok

## Task Routes

### List Tasks
`GET /tasks`  Will return a list of tasks matching the search criteria.

Response

`Status: 200 OK`
```
{
  'results': [
    {
      '_id': 1,
      'location_id': 2,
      'employee_completed': 'John Smith',
      'employee_created': 'Jane Doe',
      'department': 'Housekeeping',
      'task_description': 'Clean the dirty spot in this room',
      'created_at': '2021-02-13 13:44',
      'due_by': '2021-02-14 10:00',
      'is_completed': FALSE,
      'completed_at': '',
    },
    {
      '_id': 2,
      'location_id:' 1,
      ..
    },
    ...
  ]
}
```

### Add New Task
`POST /tasks` Add a new task to the database

Response
`Status: 201 Created`

Body Parameters

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| task_title | String | Title for the Description |
| room_location | String | Room/Location |
| task_description | String | Description of the new task |
| department | String | Selection for which Department this task is for |

```
{New Task}
```

### Edit Task
`PUT /tasks/:task_id` Will update the task with any fields the user wants to edit

Body Parameters

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| room | string | Room number |

Response

Status: 200 Ok

### List Locations

### Add New Location

## Employee Routes

### List Employees
`GET /employees` Will return a list of employees.

Response

`Status: 200 OK`
```
{
  'results': [
    {
      '_id': 1,
      'fistName': 'John',
      'lastName': 'Smith',
      'address1': '123 Hackreactor Rd',
      'address2',
      'city': 'New York',
      'state': 'NY',
      'zipcode': 10002,
      'country': 'United States',
      'phone': 123-456-7890,
      'email': 'jsmith@gmail.com',
      'wage': 15.00,
      'startDate': '2021-02-13',
      'jobDescription': 'Front Desk'
    },
    {
      '_id': 2,
      'firstName': 'Jane',
      'lastName': 'Doe',
      'address1': '...',
    },
    ...
  ]
}
```

### Get Specific Employee
`GET /employees/:id` Will return a single employee.

Path Variable

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| id | Number | employee unique id |

Response

`Status: 200 OK`
```
{
  results: {
    '_id': 1,
    'fistName': 'John',
    'lastName': 'Smith',
    'address1': '123 Hackreactor Rd',
    'address2',
    'city': 'New York',
    'state': 'NY',
    'zipcode': 10002,
    'country': 'United States',
    'phone': 123-456-7890,
    'email': 'jsmith@gmail.com',
    'wage': 15.00,
    'startDate': '2021-02-13',
    'jobDescription': 'Front Desk'
  }
}
```


### Add New Employee
`POST /employees` Will create a new employee.

Body Parameter

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| firstName | String | String of the employee's first name |
| lastName | String | String of the employee's last name |
| address1 | String | String of the employee's address |
| address2 | String | [Optional] String of the employee's address 2 |
| city | String | String of the employee's city |
| state | String | String of the employee's adress state |
| zipcode | String | String of the employee's zipcode |
| wage | Number | Number of the employee's hourly wage |
| startDate | String | String of the employee's Start date as employee as a string in the format "MM-DD-YYYY") |
| username | String | String of the employee's username |
| password | String | String of the employee's password |
| jobDescription | String | String of the employee's job description (reference the official list of possibe job descriptions below

Response

`Status: 201 OK`

### Edit Employee
`PUT /employees` Will edit an existing employee.

Body Parameter

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| firstName | String |[Optional] String of the employee's first name |
| lastName | String | [Optional]String of the employee's last name |
| address1 | String | [Optional] String of the employee's address |
| [address2] | String | [Optional] String of the employee's address 2 |
| city | String | [Optional] String of the employee's city |
| state | String | [Optional] String of the employee's adress state |
| zipcode | String | [Optional] String of the employee's zipcode |
| wage | Number | [Optional] Number of the employee's hourly wage |
| startDate | String | [Optional] String of the employee's Start date as employee as a string in the format "MM-DD-YYYY") |
| username | String | [Optional] String of the employee's username |
| password | String | [Optional] String of the employee's password |
| jobDescription | String | [Optional] String of the employee's job description (reference the official list of possibe job descriptions below

Response

`Status: 204 OK`

### List Employee Types
`GET /employees/types` Will get list of employee types.

Response

`Status: 200 OK`
```
{
  'results': [
    'Front Desk',
    'Housekeeping',
    'Maintenance',
    'Management',
    'System Administration'
  ]
}
```

### Add Employee Type
`POST /employees/types` Will add a new employee type.

Body Parameters

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| type | String | String of new employee type |


`Status: 201 OK`

Response
```
{}
```

### Edit Employee Type
`PUT /employees/types` Will edit an existing employee's type.A

Body Parameters

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| id | Number | Employee's unique id |
| type | String | String of new 'Employee Type' |


`Status: 204 OK`

Response
```
{}
```

## Timesheets


### List Timesheets
`GET /timesheets` Will return a list of timesheets for all hotel employees.

`Status: 200 OK`.

Response
```
{
  'results': [
    {
      '_id': 1,
      'employeeId': 1,
      'monday': 8,
      'tuesday': 7,
      'wednesday': 8,
      'thursday': 5,
      'friday': '9',
      'saturday': 0,
      'sunday': '0
    },
    {
      '_id': 2,
      'employeeId': 1,
      ..
    },
    ...
  ]
}
```

### Get Employees Current Timesheet
`GET /timesheets/:id` Will return a lsit of timesheets for a specific employee based on their unique id

`Status: 200 OK`.

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| employeeId | Number | employee's unique id


Response
```
{
  'results': {
      '_id': 1,
      'employeeId': 1,
      'monday': 8,
      'tuesday': 7,
      'wednesday': 8,
      'thursday': 5,
      'friday': '9',
      'saturday': 0,
      'sunday': '0
    }
}
```


### Edit Employees Current Timesheet
`PUT /timesheets/:id` Will update or edit the current employee's timesheet

`Status: 200 OK`.

| Parameter | Type | Description |
| ---------- | ---- | ----------- |
| employeeId | Number | employee's unique id |
| monday | Number | Total hours the employee worked on Monday |
| tuesday | Number | Total hours the employee worked on Tuesday |
| wednesday | Number | Total hours the employee worked on Wednesday |
| thursday | Number | Total hours the employee worked on Thursday |
| friday | Number | Total hours the employee worked on Friday |
| saturday | Number | Total hours the employee worked on Saturday |
| sunday | Number | Total hours the employee worked on Sunday |

Response
```
{}
```

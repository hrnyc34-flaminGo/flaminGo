// this is designed this way be we need both the format the db/server expects and a nice name version for display
// we have to use and array of objects over just and object bc JS objects are not ordered
const timeSheetTemplate = [
  { day: 'monday', name: 'Monday' },
  { day: 'tuesday', name: 'Tuesday' },
  { day: 'wednesday', name: 'Wednesday' },
  { day: 'thursday', name: 'Thursday' },
  { day: 'friday', name: 'Friday' },
  { day: 'saturday', name: 'Saturday' },
  { day: 'sunday', name: 'Sunday' },
];

export default timeSheetTemplate;

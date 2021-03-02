import axios from 'axios';
import { useState, useEffect } from 'react';
import url from '../../../lib/apiPath';

/**
 * custom hook for storing and updating a given users time sheet
 * @param {Sting} userId - the id of the current logged in user
 */
const useTimeSheet = (userId) => {
  const [state, setState] = useState({});

  // useEffect to simulate component did mount
  useEffect(() => {
    // get request for the first (latest) timesheet
    axios
      .get(`${url}/timesheets/${userId}`, { params: { count: 1 } })
      .then(({ data }) => {
        // check to see if the current date is passed the marked weekEnd date on the time sheet
        const today = parseInt(
          new Date().toISOString().slice(0, 10).split('-').join('')
        );
        const weekEnd = parseInt(data[0].weekEnd.split('-').join(''));
        if (weekEnd > today) {
          // if we are withing the week set the time sheet to in state
          setState(data[0]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return [state, setState];
};

export default useTimeSheet;

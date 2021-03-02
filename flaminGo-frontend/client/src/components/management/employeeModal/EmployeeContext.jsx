import axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';

import url from '../../../lib/apiPath';

const dataMapper = (data, employee) =>
  data.map((sheet) => {
    const week = {};
    const splitEnd = sheet.weekEnd.split('-');
    const splitStart = sheet.weekStart.split('-');
    week.week = `${splitStart[1]}/${splitStart[2]} - ${splitEnd[1]}/${splitEnd[2]}/${splitEnd[0]}`;
    week.hours = sheet.weekHours;
    week.wage = employee.wage;
    week.total = week.hours * week.wage;
    return week;
  });

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children, employee }) => {
  const [newEmployee, setNewEmployee] = useState(employee ? false : true);

  const [employeeData, setEmployeeData] = useState(employee ? employee : {});
  const [timeSheetList, setTimeSheetList] = useState([]);

  useEffect(() => {
    if (!newEmployee) {
      console.log(employeeData);
      axios
        .get(`${url}/timesheets/${employee.id}`, { params: { count: 20 } })
        .then(({ data }) => {
          setTimeSheetList(dataMapper(data, employeeData));
        });
    }
  }, []);

  return (
    <EmployeeContext.Provider
      value={{
        useEmployeeData: [employeeData, setEmployeeData],
        useTimeSheetList: [timeSheetList, setTimeSheetList],
        useNewEmployee: [newEmployee, setNewEmployee],
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

import React from 'react';
import './employeeTable.scss';


const EmployeeListItem = ({data:{fullname,email,phonenumber,position,salary,date,department,workplacetype}}) => {
  return (
      <div className="list_item list_employee">
        <p>{fullname}</p>
        <p>{email}</p>
        <p>{phonenumber}</p>
        <p>{position}</p>
        <p>{department}</p>
        <p>{salary}</p>
        <p>{workplacetype}</p>
        <p>{date}</p>
      </div>
  )
}

export default EmployeeListItem

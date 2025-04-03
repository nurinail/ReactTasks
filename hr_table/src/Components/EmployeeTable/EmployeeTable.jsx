import React from "react";
import "./employeeTable.scss";
import EmployeeListItem from "./EmployeeListItem";

const EmployeeTable = ({ employeeData }) => {
  return (
    <div>
      <div className="employeeTable">
        <div className="list_item list_title">
          <p>Full Name</p>
          <p>Email</p>
          <p>Phone Number</p>
          <p>Job</p>
          <p>Department</p>
          <p>Salary</p>
          <p>Work Place Type</p>
          <p>Start Date</p>
        </div>
        {employeeData.map((data, index) => (
          <EmployeeListItem key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeTable;

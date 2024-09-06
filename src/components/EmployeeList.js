import React from "react";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeItem key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;

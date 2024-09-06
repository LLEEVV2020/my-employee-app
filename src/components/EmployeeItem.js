import React from "react";
import { Link } from "react-router-dom";

const EmployeeItem = ({ employee }) => {
  return (
    <div className="employee-item">
      <Link to={`/edit/${employee.id}`}>
        <h3>{employee.name}</h3>
        <p>Должность: {employee.role}</p>
        <p>Телефон: {employee.phone}</p>
      </Link>
    </div>
  );
};

export default EmployeeItem;

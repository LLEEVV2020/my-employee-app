import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../actions/employeeActions";
import EmployeeList from "../components/EmployeeList";
import FilterForm from "../components/FilterForm";

const Home = () => {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector(
    (state) => state.employeeReducer
  );
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);

  const filterEmployees = (role, isArchive) => {
    let filtered = employees;
    if (role) {
      filtered = filtered.filter((emp) => emp.role === role);
    }
    if (isArchive) {
      filtered = filtered.filter((emp) => emp.isArchive);
    }
    setFilteredEmployees(filtered);
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <FilterForm filterEmployees={filterEmployees} />
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
};

export default Home;

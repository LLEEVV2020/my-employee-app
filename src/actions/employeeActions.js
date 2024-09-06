import employeesData from "../employees.json";

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_EMPLOYEES_REQUEST" });
    try {
      dispatch({ type: "FETCH_EMPLOYEES_SUCCESS", payload: employeesData });
    } catch (error) {
      dispatch({ type: "FETCH_EMPLOYEES_FAILURE", error });
    }
  };
};

export const updateEmployee = (employee) => ({
  type: "UPDATE_EMPLOYEE",
  payload: employee,
});

export const addEmployee = (employee) => ({
  type: "ADD_EMPLOYEE",
  payload: employee,
});

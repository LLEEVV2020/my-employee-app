const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES_REQUEST":
      return { ...state, loading: true };
    case "FETCH_EMPLOYEES_SUCCESS":
      return { ...state, loading: false, employees: action.payload };
    case "FETCH_EMPLOYEES_FAILURE":
      return { ...state, loading: false, error: action.error };
    case "UPDATE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload.id ? action.payload : emp
        ),
      };
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
};

export default employeeReducer;

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee, addEmployee } from "../actions/employeeActions";

const EmployeeForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employeeReducer.employees);

  const employee = employees.find((emp) => emp.id === parseInt(id));

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    birthday: "",
    role: "cook",
    isArchive: false,
  });

  useEffect(() => {
    if (employee) {
      setFormValues({
        name: employee.name,
        phone: employee.phone,
        birthday: employee.birthday,
        role: employee.role,
        isArchive: employee.isArchive,
      });
    }
  }, [employee]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee) {
      dispatch(updateEmployee({ ...employee, ...formValues }));
    } else {
      dispatch(addEmployee({ ...formValues, id: new Date().getTime() }));
    }
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <div>
        <label>Имя</label>
        <input
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Телефон</label>
        <input
          name="phone"
          value={formValues.phone}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Дата рождения</label>
        <input
          name="birthday"
          value={formValues.birthday}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Должность</label>
        <select
          name="role"
          value={formValues.role}
          onChange={handleInputChange}
        >
          <option value="cook">Повар</option>
          <option value="waiter">Официант</option>
          <option value="driver">Водитель</option>
        </select>
      </div>
      <div>
        <label>
          <input
            name="isArchive"
            type="checkbox"
            checked={formValues.isArchive}
            onChange={handleInputChange}
          />
          В архиве
        </label>
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default EmployeeForm;

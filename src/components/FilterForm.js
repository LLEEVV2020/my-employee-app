import React, { useState } from "react";

const FilterForm = ({ filterEmployees }) => {
  const [role, setRole] = useState("");
  const [isArchive, setIsArchive] = useState(false);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    filterEmployees(e.target.value, isArchive);
  };

  const handleArchiveChange = (e) => {
    setIsArchive(e.target.checked);
    filterEmployees(role, e.target.checked);
  };

  return (
    <div className="filter-form">
      <select value={role} onChange={handleRoleChange}>
        <option value="">Все</option>
        <option value="cook">Повар</option>
        <option value="waiter">Официант</option>
        <option value="driver">Водитель</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={isArchive}
          onChange={handleArchiveChange}
        />
        В архиве
      </label>
    </div>
  );
};

export default FilterForm;

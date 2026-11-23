import { useId } from "react";
import { departmentOptions } from "../objects/departmentOptions";

function DepartmentSelect({ value, onChange }) {
  const id = useId();

  return (
    <div className="field">
      <label className="form-label" htmlFor={id}>
        Department
      </label>
      <select
        id={id}
        name="department"
        className="form-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {departmentOptions.map(({ id: optionId, department }) => (
          <option key={optionId} value={department}>
            {department}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DepartmentSelect;
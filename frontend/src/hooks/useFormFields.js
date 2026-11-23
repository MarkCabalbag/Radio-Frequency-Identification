import { useState } from "react";

// Controlled-input helper for flat forms whose inputs use `name` attributes.
export function useFormFields(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = ({ target: { name, value } }) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  const reset = () => setValues(initialValues);

  return { values, handleChange, reset };
}
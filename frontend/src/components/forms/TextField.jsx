import { useId } from "react";

// `label` is an optional new prop. Without it the field renders as before,
// with the placeholder doubling as the accessible name.
function TextField({ label, id, ...props }) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="field">
      {label && (
        <label className="form-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className="form-control"
        aria-label={label ? undefined : props.placeholder}
        {...props}
      />
    </div>
  );
}

export default TextField;
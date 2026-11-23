import { useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardAlt } from "@fortawesome/free-solid-svg-icons";

function FieldLabel({ icon, htmlFor, children }) {
  return (
    <label className="form-label" htmlFor={htmlFor}>
      <FontAwesomeIcon icon={icon} size="1x" />
      {children}
    </label>
  );
}

// Shared by the "create card" and "update card" forms.
function CardFormFields({ values, setValues, idLabel, userLabel, userIcon }) {
  const uid = useId();
  const handleChange = ({ target: { name, value } }) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  return (
    <div className="form-stack">
      <div>
        <FieldLabel icon={faIdCardAlt} htmlFor={`${uid}-card_id`}>
          {idLabel}
        </FieldLabel>
        <input
          id={`${uid}-card_id`}
          type="text"
          name="card_id"
          value={values.card_id}
          className="form-control"
          onChange={handleChange}
          placeholder="Input new user id"
        />
      </div>
      <div>
        <FieldLabel icon={userIcon} htmlFor={`${uid}-card_user`}>
          {userLabel}
        </FieldLabel>
        <input
          id={`${uid}-card_user`}
          type="text"
          name="card_user"
          value={values.card_user}
          className="form-control"
          onChange={handleChange}
          placeholder="Input new user"
        />
      </div>
    </div>
  );
}

export default CardFormFields;
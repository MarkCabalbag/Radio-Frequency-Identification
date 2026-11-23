import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import CardFormFields from "./CardFormFields";

const UpdateFormContent = ({ cardData, setCard }) => (
  <CardFormFields
    values={cardData}
    setValues={setCard}
    idLabel="Card ID"
    userLabel="Card User"
    userIcon={faUserCheck}
  />
);

export default UpdateFormContent;
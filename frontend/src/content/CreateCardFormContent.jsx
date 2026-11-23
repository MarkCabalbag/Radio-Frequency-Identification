import { faUser } from "@fortawesome/free-solid-svg-icons";
import CardFormFields from "./CardFormFields";

const CreateCardFormContent = ({ card, setCard }) => (
  <CardFormFields
    values={card}
    setValues={setCard}
    idLabel="New Card ID"
    userLabel="New Card User"
    userIcon={faUser}
  />
);

export default CreateCardFormContent;
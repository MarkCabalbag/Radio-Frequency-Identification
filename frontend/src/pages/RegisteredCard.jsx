import GetCard from "../content/RegisterCardsComponents/GetCard";
import RegisterCardPlaceholder from "../components/placeholders/RegisterCardPlaceholder";

function RegisteredCard() {
  return (
    <GetCard
      className="card-grid"
      hideButtons="rfid-card__actions"
      statusElement={<RegisterCardPlaceholder />}
    />
  );
}

export default RegisteredCard;
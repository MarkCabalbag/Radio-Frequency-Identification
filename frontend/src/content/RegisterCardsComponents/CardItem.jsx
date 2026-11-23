import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faUser } from "@fortawesome/free-solid-svg-icons";
import UpdateCard from "./UpdateCard";

// Same status mapping as before: "Offline" is offline, anything else is online.
function StatusBadge({ status }) {
  const variant = status === "Offline" ? "status-tag--offline" : "";
  return <span className={`status-tag ${variant}`}>{status}</span>;
}

// `width` (optional style object) and `actionsClassName` keep working as before.
// Home passes "d-none" for the action area; Registered Cards passes
// "rfid-card__actions".
function CardItem({ card, width, actionsClassName }) {
  const isOffline = card.card_status === "Offline";

  return (
    <article
      className={`card rfid-card${isOffline ? " rfid-card--offline" : ""}`}
      style={width}
    >
      <div className="rfid-card__body">
        <div className="rfid-card__top">
          <span className="eyebrow">
            <FontAwesomeIcon icon={faUser} fixedWidth /> Card User
          </span>
          <StatusBadge status={card.card_status} />
        </div>
        <h3 className="rfid-card__user">{card.card_user}</h3>
        <dl className="rfid-card__meta">
          <dt className="eyebrow">
            <FontAwesomeIcon icon={faIdCard} fixedWidth /> Card ID
          </dt>
          <dd>
            <code>{card.card_id}</code>
          </dd>
        </dl>
      </div>
      <div className={actionsClassName}>
        <UpdateCard card={card} />
      </div>
    </article>
  );
}

export default CardItem;
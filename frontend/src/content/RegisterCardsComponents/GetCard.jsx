import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useFetchCard } from "../../hooks/useRegisterAccount";
import { useAutoRefresh } from "../../hooks/useAutoRefresh";
import RegisterCard from "./RegisterCard";
import AutoRefreshControls from "./AutoRefreshControls";
import CardItem from "./CardItem";

// Prop names are unchanged so Home and RegisteredCard keep working:
//   className    -> wrapper around the card list ("card-rail" / "card-grid")
//   hideButtons  -> class for the update/delete area ("d-none" on Home)
//   statusElement-> placeholder shown while loading
//   width        -> optional style object applied to each card (legacy)
function GetCard({ className, hideButtons, statusElement, width }) {
  const { isEnabled, refetchInterval, enable, disable } = useAutoRefresh();
  const {
    data: cards,
    isFetching,
    isError,
    error,
    refetch,
  } = useFetchCard({ refetchInterval });

  if (isFetching) return statusElement;

  if (isError || !Array.isArray(cards)) {
    return (
      <div className="state-panel state-panel--error" role="alert">
        <span className="state-panel__icon">
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </span>
        <div className="state-panel__body">
          <h2 className="state-panel__title">Could not load cards</h2>
          <p className="state-panel__text">{error?.message}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => refetch()}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="state-panel">
        <span className="state-panel__icon">
          <FontAwesomeIcon icon={faIdCard} />
        </span>
        <div className="state-panel__body">
          <h2 className="state-panel__title">No cards available :</h2>
          <RegisterCard
            registerCardButtonContent="Register your first card :)"
            className="btn btn-primary"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card-toolbar">
        <h2 className="card-toolbar__title">
          Cards <span className="count-tag">{cards.length}</span>
        </h2>
        <div className="card-toolbar__actions">
          <RegisterCard
            registerCardButtonContent="Register New Card"
            className="btn btn-primary"
          />
          <AutoRefreshControls
            isEnabled={isEnabled}
            onEnable={enable}
            onDisable={disable}
          />
        </div>
      </div>

      <div className={className}>
        {cards.map((card) => (
          <CardItem
            key={card._id ?? card.card_id}
            card={card}
            width={width}
            actionsClassName={hideButtons}
          />
        ))}
      </div>
    </>
  );
}

export default GetCard;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import Banner from "../../components/Banner";
import ButtonSpinner from "../../components/ButtonSpinner";
import UpdateFormContent from "../UpdateFormContent";
import DeleteCard from "./DeleteCard";
import { useUpdateCard } from "../../hooks/useRegisterAccount";
import { useCardMutationCallbacks } from "../../hooks/useCardMutationCallbacks";
import { useRequireDean } from "../../hooks/useRequireDean";

const EMPTY_CARD = { _id: "", card_id: "", card_user: "" };

function UpdateCard({ card }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [cardData, setCardData] = useState(EMPTY_CARD);

  useRequireDean();

  const callbacks = useCardMutationCallbacks({
    onSuccess: () => setShowModal(false),
  });
  const { mutateAsync, isPending } = useUpdateCard(callbacks);

  const openModal = () => {
    setCardData(card);
    setShowModal(true);
  };

  const handleSaveChanges = async () => {
    try {
      await mutateAsync({
        _id: cardData._id,
        card_id: cardData.card_id,
        card_user: cardData.card_user,
      });
      navigate("/dashboard/registered-card");
    } catch {
      // Error toast is handled in onError.
    }
  };

  return (
    <>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={openModal}
      >
        Update Card: {card.card_id}
      </button>
      <DeleteCard card={card} />

      <Modal
        modalTitle="Update Card User"
        showModal={showModal}
        setShowModal={setShowModal}
        modalButton={
          <ButtonSpinner
            btnClassname="btn btn-primary"
            buttonContent={isPending ? "Updating..." : "Update Id"}
            isLoading={isPending}
            onClick={handleSaveChanges}
          />
        }
        modalBody={
          <>
            <Banner />
            <p className="callout">
              <b>Note:</b> Updating a card, the user ID must need to be a
              uniqued id to the existing card.
            </p>
            <Form
              formContent={
                <UpdateFormContent cardData={cardData} setCard={setCardData} />
              }
            />
          </>
        }
      />
    </>
  );
}

export default UpdateCard;
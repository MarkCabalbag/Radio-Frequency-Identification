import { useState } from "react";
import Modal from "../../components/Modal";
import Banner from "../../components/Banner";
import ButtonSpinner from "../../components/ButtonSpinner";
import CreateCardFormContent from "../CreateCardFormContent";
import { useCreateCard } from "../../hooks/useRegisterAccount";
import { useCardMutationCallbacks } from "../../hooks/useCardMutationCallbacks";

const EMPTY_CARD = { card_id: "", card_user: "" };

function RegisterCard({ registerCardButtonContent, className }) {
  const [showModal, setShowModal] = useState(false);
  const [card, setCard] = useState(EMPTY_CARD);

  const { mutateAsync, isPending } = useCreateCard(useCardMutationCallbacks());

  const handleAddCard = async () => {
    try {
      await mutateAsync({ card_id: card.card_id, card_user: card.card_user });
    } catch {
      // Error toast is handled in onError.
    } finally {
      // The modal closes and resets on both success and failure (existing behaviour).
      setCard(EMPTY_CARD);
      setShowModal(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setShowModal(true)}
      >
        {registerCardButtonContent}
      </button>

      <Modal
        modalTitle="Register New Card"
        showModal={showModal}
        setShowModal={setShowModal}
        modalButton={
          <ButtonSpinner
            btnClassname="btn btn-primary"
            buttonContent={isPending ? "Adding New Card" : "Add New Card"}
            isLoading={isPending}
            onClick={handleAddCard}
          />
        }
        modalBody={
          <>
            <Banner />
            <p className="callout">
              <b>Note:</b> Registering a new card, the user ID must need to be
              uniqued to the existing card.
            </p>
            <CreateCardFormContent card={card} setCard={setCard} />
          </>
        }
      />
    </>
  );
}

export default RegisterCard;
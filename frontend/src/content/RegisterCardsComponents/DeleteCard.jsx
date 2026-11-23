import ButtonSpinner from "../../components/ButtonSpinner";
import { useDeleteCard } from "../../hooks/useRegisterAccount";
import { useCardMutationCallbacks } from "../../hooks/useCardMutationCallbacks";

function DeleteCard({ card }) {
  const { mutateAsync, isPending } = useDeleteCard(useCardMutationCallbacks());

  const handleDelete = async () => {
    try {
      await mutateAsync({ id: card._id });
    } catch {
      // Error toast is handled in onError.
    }
  };

  return (
    <ButtonSpinner
      btnClassname="btn btn-outline-danger"
      buttonContent={isPending ? "Deleting...." : "Delete Card"}
      isLoading={isPending}
      onClick={handleDelete}
    />
  );
}

export default DeleteCard;
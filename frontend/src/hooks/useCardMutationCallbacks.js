import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { CARD_QUERY_KEY } from "../api/queryKeys";

// Shared success/error handling for create, update and delete card mutations.
export function useCardMutationCallbacks({ onSuccess, onError } = {}) {
  const queryClient = useQueryClient();

  return {
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: CARD_QUERY_KEY });
      onSuccess?.(data);
    },
    onError: (error) => {
      toast.error(error.message);
      onError?.(error);
    },
  };
}
// Kept at this path with the same export names so existing imports (e.g. GetCard) keep working.
import { useMutation, useQuery } from "@tanstack/react-query";
import { registerDean, loginDean } from "../api/deanApi";
import {
  fetchCards,
  createCard,
  updateCard,
  deleteCard,
} from "../api/cardApi";
import { CARD_QUERY_KEY } from "../api/queryKeys";

const useApiMutation = (mutationFn, { onSuccess, onError } = {}) =>
  useMutation({ mutationFn, onSuccess, onError });

export const useRegisterAccount = (callbacks) =>
  useApiMutation(registerDean, callbacks);

export const useLoginAccount = (callbacks) =>
  useApiMutation(loginDean, callbacks);

// useQuery no longer supports onSuccess/onError in React Query v5, so they are not forwarded.
export const useFetchCard = ({ refetchInterval } = {}) =>
  useQuery({
    queryKey: CARD_QUERY_KEY,
    queryFn: fetchCards,
    refetchInterval,
  });

export const useUpdateCard = (callbacks) =>
  useApiMutation(updateCard, callbacks);

export const useCreateCard = (callbacks) =>
  useApiMutation(createCard, callbacks);

export const useDeleteCard = (callbacks) =>
  useApiMutation(deleteCard, callbacks);
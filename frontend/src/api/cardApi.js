import { request } from "./httpClient";

export const fetchCards = () => request("/card/getCard");

export const createCard = ({ card_id, card_user }) =>
  request("/card/createCard", {
    method: "POST",
    body: { card_id, card_user },
  });

export const updateCard = ({ _id, card_id, card_user }) =>
  request(`/card/updateCard/${_id}`, {
    method: "PUT",
    body: { card_id, card_user },
  });

export const deleteCard = ({ id }) =>
  request(`/card/deleteCard/${id}`, { method: "DELETE" });
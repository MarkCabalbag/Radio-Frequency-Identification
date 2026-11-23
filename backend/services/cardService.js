const Card = require("../models/cardModel.js");
const AppError = require("../utils/AppError.js");

const DEFAULT_STATUS = "Offline";

const listCards = () => Card.find();

const createCard = async ({ card_id, card_user }) => {
  const existing = await Card.findOne({ card_id });
  if (existing) throw new AppError(`${existing.card_id} already exist`, 400);

  return Card.create({ card_id, card_user, card_status: DEFAULT_STATUS });
};

// Editing a card resets its status to Offline (same as before).
const updateCard = async (id, { card_id, card_user }) => {
  const card = await Card.findById(id);
  if (!card) throw new AppError(`No ${id} is found`, 400);

  card.card_id = card_id;
  card.card_user = card_user;
  card.card_status = DEFAULT_STATUS;
  return card.save();
};

const deleteCard = async (id) => {
  const card = await Card.findById(id);
  if (!card) throw new AppError(`Card id: ${id} is not found`, 400);

  await Card.deleteOne({ _id: id });
};

const isCardRegistered = async ({ card_id, card_user }) =>
  Boolean(await Card.exists({ card_id, card_user }));

const updateCardStatus = async ({ card_id, card_user, card_status }) => {
  const card = await Card.findOne({ card_id });
  if (!card) throw new AppError(`No ${card_id} is found`, 400);

  card.card_user = card_user;
  card.card_status = card_status;
  return card.save();
};

module.exports = {
  listCards,
  createCard,
  updateCard,
  deleteCard,
  isCardRegistered,
  updateCardStatus,
};
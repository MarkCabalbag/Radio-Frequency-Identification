const asyncHandler = require("express-async-handler");
const cardService = require("../services/cardService.js");
const AppError = require("../utils/AppError.js");

//@desc     get all cards
//@route    GET /rfid-ispsc/card/getCard
const getCard = asyncHandler(async (_req, res) => {
  const cards = await cardService.listCards();
  res.status(200).json(cards);
});

//@desc     create new card
//@route    POST /rfid-ispsc/card/createCard
const createCard = asyncHandler(async (req, res) => {
  const { card_id, card_user } = req.body;
  const card = await cardService.createCard({ card_id, card_user });
  res
    .status(200)
    .json({ message: `Card id ${card.card_id} Successfully Created` });
});

//@desc     update card info
//@route    PUT /rfid-ispsc/card/updateCard/:id
const updateCard = asyncHandler(async (req, res) => {
  const { card_id, card_user } = req.body;
  await cardService.updateCard(req.params.id, { card_id, card_user });
  res.status(200).json({ message: `The user id ${card_id} is now updated` });
});

//@desc     delete card
//@route    DELETE /rfid-ispsc/card/deleteCard/:id
const deleteCard = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await cardService.deleteCard(id);
  res.json({ message: `Card id: ${id} has been deleted successfully` });
});

// --- Arduino endpoints: response messages/status codes are a contract with the firmware ---

//@desc     check whether a scanned card is registered
//@route    POST /rfid-ispsc/card/checkCard
// Returns 200 in both cases on purpose; the device reads the message text.
const checkCard = asyncHandler(async (req, res) => {
  const { card_id, card_user } = req.body;
  const registered = await cardService.isCardRegistered({ card_id, card_user });

  res.status(200).json({
    message: registered
      ? `Id ${card_id} is now active`
      : `Id ${card_id} has not been registered`,
  });
});

//@desc     check whether a card is active
//@route    GET /rfid-ispsc/card/getCardInfo
// GET with a JSON body: kept as-is because the Arduino sketch depends on it.
const getCardInfo = asyncHandler(async (req, res) => {
  const { card_id, card_user } = req.body;
  const registered = await cardService.isCardRegistered({ card_id, card_user });

  if (!registered) throw new AppError("Id is not active", 400);
  res.status(200).json({ message: `${card_id} is now active` });
});

//@desc     update a card's user/status from the Arduino
//@route    PUT /rfid-ispsc/card/updateCardArduino/:card_id
// The :card_id URL param is ignored; card_id is read from the body (existing behaviour).
const updateCardArduino = asyncHandler(async (req, res) => {
  const { card_id, card_user, card_status } = req.body;
  await cardService.updateCardStatus({ card_id, card_user, card_status });
  res.status(200).json({ message: `User ${card_user} is ${card_status}` });
});

module.exports = {
  getCard,
  updateCard,
  createCard,
  deleteCard,
  checkCard,
  getCardInfo,
  updateCardArduino,
};
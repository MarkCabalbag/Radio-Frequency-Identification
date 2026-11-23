const express = require("express");
const cardController = require("../controllers/cardController.js");
const validators = require("../validators/cardValidators.js");
const { protect } = require("../middlewares/authMiddleware.js");
const deviceAuth = require("../middlewares/deviceAuth.js");
const normalizeDeviceInput = require("../middlewares/normalizeDeviceInput.js");

const cardRoutes = express.Router();

// Dashboard: requires a dean JWT (Authorization: Bearer <token>)
cardRoutes.get("/getCard", protect, cardController.getCard);
cardRoutes.post(
  "/createCard",
  protect,
  validators.validateCreateCard,
  cardController.createCard
);
cardRoutes.put(
  "/updateCard/:id",
  protect,
  validators.validateUpdateCard,
  cardController.updateCard
);
cardRoutes.delete("/deleteCard/:id", protect, cardController.deleteCard);

// Arduino: requires the x-device-key header once DEVICE_API_KEY is set
cardRoutes.post(
  "/checkCard",
  deviceAuth,
  normalizeDeviceInput,
  validators.validateCheckCard,
  cardController.checkCard
);
cardRoutes.get(
  "/getCardInfo",
  deviceAuth,
  normalizeDeviceInput,
  validators.validateGetCardInfo,
  cardController.getCardInfo
);
cardRoutes.put(
  "/updateCardArduino/:card_id",
  deviceAuth,
  normalizeDeviceInput,
  validators.validateUpdateCardArduino,
  cardController.updateCardArduino
);

module.exports = cardRoutes;
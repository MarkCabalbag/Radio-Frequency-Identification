const validateBody = require("../middlewares/validateBody.js");

const CARD_FIELDS = ["card_id", "card_user"];

module.exports = {
  validateCreateCard: validateBody(CARD_FIELDS, "Please Fill in all fields"),
  validateUpdateCard: validateBody(CARD_FIELDS, "Please fill input fields"),
  validateCheckCard: validateBody(CARD_FIELDS, "Need id and user"),
  validateGetCardInfo: validateBody(CARD_FIELDS, "No id found"),
  validateUpdateCardArduino: validateBody(
    [...CARD_FIELDS, "card_status"],
    "Please fill input fields"
  ),
};
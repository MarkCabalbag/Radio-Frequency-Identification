const AppError = require("../utils/AppError.js");

/**
 * Builds a middleware that rejects the request when any listed body field is falsy.
 * `req.body ?? {}` is intentional: the Arduino calls a GET route with a JSON body,
 * and body parsers may leave req.body undefined.
 */
const validateBody = (
  fields,
  message,
  { status = 400, requireStrings = false } = {}
) => (req, _res, next) => {
  const body = req.body ?? {};
  const invalid = fields.some(
    (field) =>
      !body[field] || (requireStrings && typeof body[field] !== "string")
  );

  if (invalid) return next(new AppError(message, status));
  next();
};

module.exports = validateBody;
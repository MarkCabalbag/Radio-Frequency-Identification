// Lets the device send fields in the JSON body (legacy), the query string,
// or the :card_id URL param. Body wins, so current firmware behaves the same.
const normalizeDeviceInput = (req, _res, next) => {
  req.body = {
    ...req.query,
    ...(req.params.card_id ? { card_id: req.params.card_id } : {}),
    ...(req.body ?? {}),
  };
  next();
};

module.exports = normalizeDeviceInput;
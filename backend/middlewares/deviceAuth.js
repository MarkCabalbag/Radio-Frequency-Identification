const crypto = require("crypto");
const AppError = require("../utils/AppError.js");
const { deviceApiKey } = require("../config/env.js");

// Constant-time comparison so the key can't be guessed by timing.
const safeEqual = (a, b) => {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && crypto.timingSafeEqual(bufA, bufB);
};

// Guards the Arduino endpoints. If DEVICE_API_KEY is unset the check is skipped
// so existing firmware keeps working until it sends the header.
const deviceAuth = (req, _res, next) => {
  if (!deviceApiKey) return next();

  const provided = req.get("x-device-key") || "";
  if (!safeEqual(provided, deviceApiKey)) {
    return next(new AppError("Not authorized device", 401));
  }
  next();
};

module.exports = deviceAuth;
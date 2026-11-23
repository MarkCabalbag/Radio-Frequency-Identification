const rateLimit = require("express-rate-limit");

// Slows down password guessing on login/register (requires express-rate-limit v7+).
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many attempts, please try again later" },
});

module.exports = { authLimiter };
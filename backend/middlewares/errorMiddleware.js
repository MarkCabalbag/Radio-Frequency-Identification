const AppError = require("../utils/AppError.js");
const { nodeEnv } = require("../config/env.js");

const notFound = (req, _res, next) => {
  next(new AppError(`Not found - ${req.originalUrl}`, 404));
};

// Single place where every error becomes a JSON { message } response.
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, _next) => {
  let statusCode = err.statusCode || err.status || 500;
  let message = err.message || "Server error";

  if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  } else if (err.name === "ValidationError") {
    statusCode = 400;
  } else if (err.code === 11000) {
    // Duplicate key (unique card_id / email)
    statusCode = 400;
    const field = Object.keys(err.keyValue || {})[0];
    message = `${err.keyValue?.[field] ?? field} already exist`;
  }

  if (statusCode >= 500) {
    console.error(err);
    if (nodeEnv === "production") message = "Internal server error";
  }

  res.status(statusCode).json({ message });
};

module.exports = { notFound, errorHandler };
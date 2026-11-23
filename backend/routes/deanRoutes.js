const express = require("express");
const deanController = require("../controllers/deanController.js");
const validators = require("../validators/deanValidators.js");
const { protect } = require("../middlewares/authMiddleware.js");
const { authLimiter } = require("../middlewares/rateLimiters.js");

const deanRouter = express.Router();

deanRouter.post(
  "/",
  authLimiter,
  validators.validateRegisterDean,
  deanController.registerDean
);
deanRouter.post(
  "/login",
  authLimiter,
  validators.validateLoginDean,
  deanController.loginDean
);
deanRouter.get("/my-account", protect, deanController.getDean);

module.exports = deanRouter;
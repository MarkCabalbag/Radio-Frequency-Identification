const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { corsOrigin, nodeEnv } = require("./config/env.js");
const deanRouter = require("./routes/deanRoutes.js");
const cardRouter = require("./routes/cardRoutes.js");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js");

const app = express();

// Behind Render's proxy: needed so rate limiting sees the real client IP.
if (nodeEnv === "production") app.set("trust proxy", 1);

app.use(helmet());
app.use(cors({ origin: corsOrigin === "*" ? "*" : corsOrigin.split(",") }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/rfid-ispsc/dean", deanRouter);
app.use("/rfid-ispsc/card", cardRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
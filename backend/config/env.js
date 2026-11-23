require("dotenv").config();

const REQUIRED = ["MONGO_URI", "JWT_SECRET"];
const missing = REQUIRED.filter((key) => !process.env[key]);

if (missing.length) {
  console.error(`Missing required environment variables: ${missing.join(", ")}`);
  process.exit(1);
}

const config = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: process.env.PORT || 7000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",
  corsOrigin: process.env.CORS_ORIGIN || "*",
  deviceApiKey: process.env.DEVICE_API_KEY || "",
};

if (config.nodeEnv === "production") {
  if (!config.deviceApiKey) {
    console.warn("WARNING: DEVICE_API_KEY is not set; Arduino routes are unauthenticated.");
  }
  if (config.corsOrigin === "*") {
    console.warn("WARNING: CORS_ORIGIN is '*'; restrict it to your frontend origin.");
  }
}

module.exports = config;
const asyncHandler = require("express-async-handler");
const AppError = require("../utils/AppError.js");
const { verifyToken } = require("../services/tokenService.js");
const { findDeanById } = require("../services/deanService.js");

const protect = asyncHandler(async (req, _res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer")) {
    throw new AppError("Not Authorized, no token", 401);
  }

  let dean;
  try {
    const decoded = verifyToken(header.split(" ")[1]);
    dean = await findDeanById(decoded.id);
  } catch {
    throw new AppError("Not authorized", 401);
  }

  if (!dean) throw new AppError("Not authorized", 401);

  req.dean = dean;
  next();
});

module.exports = { protect };
const asyncHandler = require("express-async-handler");
const deanService = require("../services/deanService.js");
const { generateToken } = require("../services/tokenService.js");

//@desc   register dean
//@route  POST /rfid-ispsc/dean/
const registerDean = asyncHandler(async (req, res) => {
  const dean = await deanService.createDean(req.body);

  // email added so the Account Info modal works right after registering.
  res.status(200).json({
    _id: dean.id,
    firstname: dean.firstname,
    lastname: dean.lastname,
    email: dean.email,
    department: dean.department,
    token: generateToken(dean._id),
  });
});

//@desc   login dean
//@route  POST /rfid-ispsc/dean/login
const loginDean = asyncHandler(async (req, res) => {
  const dean = await deanService.authenticateDean(req.body);

  res.status(200).json({
    _id: dean.id,
    firstname: dean.firstname,
    lastname: dean.lastname,
    email: dean.email,
    token: generateToken(dean._id),
    department: dean.department,
  });
});

//@desc   get logged-in dean
//@route  GET /rfid-ispsc/dean/my-account
const getDean = asyncHandler(async (req, res) => {
  res.status(200).json(req.dean);
});

module.exports = { registerDean, loginDean, getDean };
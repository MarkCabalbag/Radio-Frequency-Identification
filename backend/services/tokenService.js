const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpiresIn } = require("../config/env.js");

const generateToken = (id) =>
  jwt.sign({ id }, jwtSecret, { expiresIn: jwtExpiresIn });

const verifyToken = (token) => jwt.verify(token, jwtSecret);

module.exports = { generateToken, verifyToken };
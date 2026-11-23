const bcrypt = require("bcryptjs");
const Dean = require("../models/deanModel.js");
const AppError = require("../utils/AppError.js");

const SALT_ROUNDS = 10;

// One dean account per department.
const createDean = async ({ email, firstname, lastname, department, password }) => {
  const existing = await Dean.findOne({ department });
  if (existing) {
    throw new AppError(
      `The department of ${existing.department} has already a dean account `,
      400
    );
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return Dean.create({
    email,
    firstname,
    lastname,
    department,
    password: hashedPassword,
  });
};

const authenticateDean = async ({ email, password, department }) => {
  const dean = await Dean.findOne({ email, department });
  const isValid = dean && (await bcrypt.compare(password, dean.password));

  if (!isValid) throw new AppError("invalid credentials", 400);
  return dean;
};

const findDeanById = (id) => Dean.findById(id).select("-password");

module.exports = { createDean, authenticateDean, findDeanById };
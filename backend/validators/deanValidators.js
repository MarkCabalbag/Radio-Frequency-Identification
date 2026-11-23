const validateBody = require("../middlewares/validateBody.js");
const AppError = require("../utils/AppError.js");
const { isValidDepartment } = require("../constants/department.js");

const validateDepartment = (req, _res, next) => {
  if (!isValidDepartment(req.body.department)) {
    return next(new AppError("Please select which department", 400));
  }
  next();
};

const validateRegisterFields = validateBody(
  ["email", "firstname", "lastname", "department", "password"],
  "Please fill in all fields",
  { status: 400, requireStrings: true }
);

module.exports = {
  // Registration also rejects unknown departments (incl. the "---Choose" placeholder).
  validateRegisterDean: [validateRegisterFields, validateDepartment],
  // Login has always answered 401 for missing fields.
  validateLoginDean: validateBody(
    ["email", "password", "department"],
    "please fill in all fields",
    { status: 401, requireStrings: true }
  ),
};
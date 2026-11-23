// Single source of truth for valid departments (keep in sync with the frontend list).
const DEPARTMENTS = [
  "College of Computing Studies",
  "College of Teacher Education",
  "College of Agriculture, Forestry, Engineering",
  "College of Business, Management and Entrepreneurship",
  "Laboratory High School",
];

// Old misspelling that exists in stored data; used by the migration script.
const LEGACY_DEPARTMENT = "College of Agriculture, Forestry, Enginnering";

const isValidDepartment = (value) => DEPARTMENTS.includes(value);

module.exports = { DEPARTMENTS, LEGACY_DEPARTMENT, isValidDepartment };
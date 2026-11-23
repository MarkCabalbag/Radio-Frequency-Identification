// These strings are what the backend stores and matches on login.
// Keep in sync with backend/constants/departments.js.
export const departmentOptions = [
  { id: 0, department: "---Choose Department" },
  { id: 1, department: "College of Computing Studies" },
  { id: 2, department: "College of Teacher Education" },
  { id: 3, department: "College of Agriculture, Forestry, Engineering" },
  {
    id: 4,
    department: "College of Business, Management and Entrepreneurship",
  },
  { id: 5, department: "Laboratory High School" },
];

export const DEFAULT_DEPARTMENT = departmentOptions[0].department;
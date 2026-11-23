import { useState } from "react";
import toast from "react-hot-toast";
import { useRegisterAccount } from "../hooks/useRegisterAccount";
import { useFormFields } from "../hooks/useFormFields";
import { storeDean } from "../utils/session";
import { DEFAULT_DEPARTMENT } from "../components/objects/departmentOptions";
import ButtonSpinner from "../components/ButtonSpinner";
import TextField from "../components/forms/TextField";
import DepartmentSelect from "../components/forms/DepartmentSelect";

const INITIAL_VALUES = {
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  password2: "",
};

function RegisterContent({ changeForm, setIsRegister }) {
  const { values, handleChange, reset } = useFormFields(INITIAL_VALUES);
  const [department, setDepartment] = useState(DEFAULT_DEPARTMENT);

  const { mutateAsync, isPending } = useRegisterAccount({
    onSuccess: (data) => {
      reset();
      setDepartment(DEFAULT_DEPARTMENT);
      toast.success("Registered Successfully");
      storeDean(data);
      setIsRegister(false); // switch back to the login form
    },
    onError: (error) => toast.error(error.message),
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    if (department === DEFAULT_DEPARTMENT) {
      toast.error("Please select which department");
      return;
    }

    if (values.password !== values.password2) {
      toast.error("Your password did not match try again");
      return;
    }

    try {
      await mutateAsync({
        email: values.email,
        firstname: values.firstname,
        lastname: values.lastname,
        department,
        password: values.password,
      });
    } catch {
      // Error toast is handled in onError.
    }
  };

  return (
    <>
      <h2 className="auth-form__title">Register</h2>
      <div className="form-stack">
        <TextField
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={values.email}
          onChange={handleChange}
        />
        <div className="form-stack__row">
          <TextField
            label="First name"
            type="text"
            name="firstname"
            placeholder="Enter your Firstname"
            value={values.firstname}
            onChange={handleChange}
          />
          <TextField
            label="Last name"
            type="text"
            name="lastname"
            placeholder="Enter your Lastname"
            value={values.lastname}
            onChange={handleChange}
          />
        </div>
        <DepartmentSelect value={department} onChange={setDepartment} />
        <div className="form-stack__row">
          <TextField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChange}
          />
          <TextField
            label="Confirm password"
            type="password"
            name="password2"
            placeholder="Confirm your Password"
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        <ButtonSpinner
          btnClassname="btn btn-primary w-100"
          buttonContent={isPending ? "Registering " : "Register "}
          isLoading={isPending}
          onClick={handleRegister}
        />
      </div>
      <div className="auth-form__switch">{changeForm}</div>
    </>
  );
}

export default RegisterContent;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLoginAccount } from "../hooks/useRegisterAccount";
import { useFormFields } from "../hooks/useFormFields";
import { storeDean } from "../utils/session";
import { DEFAULT_DEPARTMENT } from "../components/objects/departmentOptions";
import ButtonSpinner from "../components/ButtonSpinner";
import TextField from "../components/forms/TextField";
import DepartmentSelect from "../components/forms/DepartmentSelect";

const INITIAL_VALUES = { email: "", password: "" };

function LoginContent({ changeForm }) {
  const navigate = useNavigate();
  const { values, handleChange, reset } = useFormFields(INITIAL_VALUES);
  const [department, setDepartment] = useState(DEFAULT_DEPARTMENT);

  const resetForm = () => {
    reset();
    setDepartment(DEFAULT_DEPARTMENT);
  };

  const { mutateAsync, isPending } = useLoginAccount({
    onSuccess: (data) => {
      resetForm();
      toast.success("Login Successfully");
      storeDean(data);
      navigate("/dashboard/home");
    },
    onError: (error) => {
      toast.error(error.message);
      resetForm();
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    if (department === DEFAULT_DEPARTMENT) {
      toast.error("Please select which department");
      return;
    }

    try {
      await mutateAsync({
        email: values.email,
        department,
        password: values.password,
      });
    } catch {
      // Error toast is handled in onError.
    }
  };

  return (
    <>
      <h2 className="auth-form__title">Login</h2>
      <div className="form-stack">
        <TextField
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={values.email}
          onChange={handleChange}
        />
        <DepartmentSelect value={department} onChange={setDepartment} />
        <TextField
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={values.password}
          onChange={handleChange}
        />
        <ButtonSpinner
          btnClassname="btn btn-primary w-100"
          buttonContent={isPending ? "Logging in " : "Log-in "}
          isLoading={isPending}
          onClick={handleLogin}
        />
      </div>
      <div className="auth-form__switch">{changeForm}</div>
    </>
  );
}

export default LoginContent;
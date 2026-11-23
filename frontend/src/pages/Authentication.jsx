import { useState } from "react";
import Form from "../components/Form";
import RegisterContent from "../content/RegisterContent";
import LoginContent from "../content/LoginContent";
import logo from "../assets/logo.png";

function SwitchFormButton({ onClick, children }) {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary w-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Authentication() {
  const [isRegister, setIsRegister] = useState(false);
  const toggleForm = () => setIsRegister((prev) => !prev);

  return (
    <div className="auth-page">
      <div className="container-sm">
        <div className="auth-layout">
          <section className="auth-intro">
            <img src={logo} className="auth-intro__logo" alt="ISPSC logo" />
            <p className="auth-intro__kicker">
              Ilocos Sur Polytechnic State College
            </p>
            <h1 className="auth-intro__title">Radio Frequency Identification</h1>
            <p className="auth-intro__text">
              RFID Solutions for Classroom Security and Access Control!
            </p>
          </section>

          <section className="auth-panel">
            <Form
              className="auth-form"
              formContent={
                isRegister ? (
                  <RegisterContent
                    setIsRegister={setIsRegister}
                    changeForm={
                      <SwitchFormButton onClick={toggleForm}>
                        Already have an account? Login here
                      </SwitchFormButton>
                    }
                  />
                ) : (
                  <LoginContent
                    changeForm={
                      <SwitchFormButton onClick={toggleForm}>
                        No account? Register here
                      </SwitchFormButton>
                    }
                  />
                )
              }
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
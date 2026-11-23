import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { clearDean, getStoredDean } from "../../utils/session";
import logo from "../../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(getStoredDean());

  const handleLogout = () => {
    clearDean();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark app-navbar sticky-top">
        <div className="container-sm">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="brand-mark brand-mark--nav" />
            <span className="navbar-brand__text">
              <span className="navbar-brand__name">
                Ilocos Sur Polytechnic State College
              </span>
              <span className="navbar-brand__sub">
                Radio Frequency Identification
              </span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-lg-auto align-items-lg-center">
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link to="/dashboard/home" className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                  <li
                    className="nav-item nav-link nav-link--action d-flex align-items-center gap-2"
                    role="button"
                    tabIndex={0}
                    onClick={handleLogout}
                    onKeyDown={(e) => e.key === "Enter" && handleLogout()}
                  >
                    Logout
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    to="/auth"
                    className="nav-link"
                    aria-label="Sign in"
                    title="Sign in"
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
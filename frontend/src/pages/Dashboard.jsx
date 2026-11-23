import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Tab from "../components/navigation/Tab";
import Footer from "../components/Footer";
import AccountInfoModal from "../content/AccountInfoModal";
import { useRequireDean } from "../hooks/useRequireDean";

function Dashboard() {
  const dean = useRequireDean();
  const [showModal, setShowModal] = useState(false);

  // useRequireDean is redirecting to /auth.
  if (!dean) return null;

  return (
    <>
      <AccountInfoModal
        dean={dean}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="page-content">
        <header className="page-header">
          <div className="container-sm">
            <div className="page-header__row">
              <h1 className="page-header__title">Dashboard</h1>
              <p
                onClick={() => setShowModal(true)}
                className="account-trigger"
                role="button"
                title="Account Info"
                aria-haspopup="dialog"
              >
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="account-trigger__icon"
                />
                <span>
                  Hi <b>{dean.firstname}!</b>
                </span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="account-trigger__caret"
                />
              </p>
            </div>
            <Tab />
          </div>
        </header>

        <div className="container-sm page-body">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
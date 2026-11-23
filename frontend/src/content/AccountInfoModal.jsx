import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal";
import Banner from "../components/Banner";

function AccountInfoModal({ dean, showModal, setShowModal }) {
  return (
    <Modal
      modalTitle="Account Info"
      showModal={showModal}
      setShowModal={setShowModal}
      modalBody={
        <>
          <Banner />
          <ul className="info-list">
            <li>
              <FontAwesomeIcon icon={faUser} className="info-list__icon" />
              <span>
                {dean.firstname} {dean.lastname}
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="info-list__icon" />
              <span>{dean.email}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} className="info-list__icon" />
              <span>{dean.department}</span>
            </li>
          </ul>
        </>
      }
    />
  );
}

export default AccountInfoModal;
import { useState } from "react";
import Modal from "../../components/Modal";
import Banner from "../../components/Banner";
import ButtonSpinner from "../../components/ButtonSpinner";

// Toggle button plus the confirmation modal shown before polling starts.
function AutoRefreshControls({ isEnabled, onEnable, onDisable }) {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
    onEnable();
  };

  return (
    <>
      <ButtonSpinner
        buttonContent={
          isEnabled
            ? "Cancel Automatic Refresh"
            : "Activate automatic refresh for every 1min"
        }
        btnClassname={
          isEnabled
            ? "btn btn-outline-secondary btn-live"
            : "btn btn-outline-secondary"
        }
        onClick={isEnabled ? onDisable : () => setShowModal(true)}
      />

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalTitle="Activate Refresh Every 1min"
        modalBody={
          <>
            <Banner />
            <p className="callout">
              <b>Note:</b> After activating this feature, you will experience
              automatic refresh every one minute. Are you sure to activate this
              feature?
            </p>
          </>
        }
        modalButton={
          <ButtonSpinner
            buttonContent="Activate"
            btnClassname="btn btn-primary"
            onClick={handleConfirm}
          />
        }
      />
    </>
  );
}

export default AutoRefreshControls;
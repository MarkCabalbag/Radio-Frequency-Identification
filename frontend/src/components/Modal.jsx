function Modal({ modalBody, modalTitle, modalButton, showModal, setShowModal }) {
  if (!showModal) return null;

  const close = () => setShowModal(false);

  return (
    <>
      <div
        className="modal d-block"
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-modal-title"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content app-modal">
            <div className="modal-header">
              <h5 className="modal-title" id="app-modal-title">
                {modalTitle}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={close}
              ></button>
            </div>
            <div className="modal-body">{modalBody}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={close}
              >
                Close
              </button>
              {modalButton}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
}

export default Modal;
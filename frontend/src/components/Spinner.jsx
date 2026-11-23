import logo from "../assets/logo.png";

function Spinner({ spinnerMessage }) {
  return (
    <div className="page-loader">
      <img src={logo} className="page-loader__logo" alt="ISPSC logo" />
      <p className="page-loader__message">{spinnerMessage}</p>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
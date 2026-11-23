import logo from "../assets/logo.png";

function Banner() {
  return (
    <div className="brand-banner">
      <img src={logo} className="brand-banner__logo" alt="ISPSC logo" />
      <div>
        <p className="brand-banner__kicker">Radio Frequency Identification</p>
        <h4 className="brand-banner__title">
          Ilocos Sur Polytechnic State College
        </h4>
      </div>
    </div>
  );
}

export default Banner;
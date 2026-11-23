import { faCreditCardAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faHome,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import FooterSection, { FooterItem } from "./footer/FooterSection";

const DEVELOPERS = [
  "Mark Jeriel Cabalbag",
  "Dran Leynard Gamoso",
  "Jared Ellasos",
  "Ruvic Bacton",
  "Shanne Cabotaje",
  "Cyrell Corrales",
];

const TAB_LINKS = [
  { to: "/dashboard/home", label: "Home", icon: faHome },
  {
    to: "/dashboard/registered-card",
    label: "Registered Card",
    icon: faCreditCardAlt,
  },
];

function Footer() {
  return (
    <footer className="app-footer">
      <div className="container-sm">
        <div className="app-footer__brand">
          <img
            src={logo}
            className="brand-mark brand-mark--sm"
            alt="ISPSC logo"
          />
          <div>
            <p className="app-footer__name">
              Ilocos Sur Polytechnic State College
            </p>
            <p className="app-footer__sub">Radio Frequency Identification</p>
          </div>
        </div>

        <div className="row g-4 g-lg-5 app-footer__grid">
          <div className="col-12 col-lg-4">
            <h3 className="footer-heading">About</h3>
            <p className="app-footer__about">
              Crafted with passion and innovation, our RFID solution is the
              brainchild of the brilliant minds in BSIT 3A. Designed with
              precision and dedication, this system embodies the creativity and
              expertise of our student community. With a focus on enhancing
              classroom security and accessibility, every aspect of our
              solution reflects the commitment and ingenuity of our team.
            </p>
          </div>

          <FooterSection title="Developers" className="col-12 col-md-6 col-lg-3">
            {DEVELOPERS.map((name) => (
              <FooterItem key={name} icon={faUser}>
                {name}
              </FooterItem>
            ))}
          </FooterSection>

          <FooterSection title="Tabs" className="col-6 col-md-3 col-lg-2">
            {TAB_LINKS.map(({ to, label, icon }) => (
              <FooterItem key={to} to={to} icon={icon}>
                {label}
              </FooterItem>
            ))}
          </FooterSection>

          <FooterSection title="Contact" className="col-6 col-md-3 col-lg-3">
            <FooterItem icon={faPhone}>09393939</FooterItem>
            <FooterItem icon={faEnvelope}>ispsc@gmail.com</FooterItem>
          </FooterSection>
        </div>

        <div className="app-footer__legal">
          <p>&copy;markjerielgcabalbag2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
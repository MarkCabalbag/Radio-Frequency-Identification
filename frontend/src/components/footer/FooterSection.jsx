import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FooterItem({ icon, to, children }) {
  const content = (
    <>
      <FontAwesomeIcon icon={icon} fixedWidth className="footer-item__icon" />{" "}
      {children}
    </>
  );

  return to ? (
    <Link to={to} className="footer-item footer-item--link">
      {content}
    </Link>
  ) : (
    <div className="footer-item">{content}</div>
  );
}

function FooterSection({ title, className = "col", children }) {
  return (
    <div className={className}>
      <h3 className="footer-heading">{title}</h3>
      <div className="footer-list">{children}</div>
    </div>
  );
}

export default FooterSection;
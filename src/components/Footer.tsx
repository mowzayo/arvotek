import { Link } from "react-router-dom";
import logo from "../assets/arvotek-logo.png";

const Footer = (props: any) => {
  return (
    <footer className="footer dark-bg-1">
      <div className="flex-container container top-bottom-padding-60">
        <div className="two-columns bottom-padding-20">
          <div className="content-right-margin-10 footer-center-mobile">
            <img className="footer-logo" src={logo} alt="logo" />
          </div>
        </div>

        <div className="three-columns bottom-padding-60">
          <div className="content-left-right-margin-10">
            <ul className="footer-menu text-color-4">
              <li>
                <Link
                  className={`${
                    props.activePage === "Home"
                      ? "animsition-link small-title-oswald hover-color active"
                      : "animsition-link small-title-oswald hover-color"
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    props.activePage === "About"
                      ? "animsition-link small-title-oswald hover-color active"
                      : "animsition-link small-title-oswald hover-color"
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    props.activePage === "Services"
                      ? "animsition-link small-title-oswald hover-color active"
                      : "animsition-link small-title-oswald hover-color"
                  }`}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    props.activePage === "Portfolio"
                      ? "animsition-link small-title-oswald hover-color active"
                      : "animsition-link small-title-oswald hover-color"
                  }`}
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  className={`${
                    props.activePage === "Contact"
                      ? "animsition-link small-title-oswald hover-color active"
                      : "animsition-link small-title-oswald hover-color"
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="four-columns bottom-padding-60">
          <div className="content-left-right-margin-10 footer-center-mobile">
            <ul className="footer-information text-color-4">
              <li>
                <i className="far fa-envelope" />
                <a
                  href="mailto:info@arvotek.co"
                  className="xsmall-title-oswald"
                >
                  info@arvotek.co
                </a>
              </li>
              <li>
                <i className="fas fa-mobile-alt" />
                <a href="tel:+2348188838810" className="xsmall-title-oswald">
                  +234 818 883 8810
                </a>
              </li>
              <li>
                <i className="fas fa-mobile-alt" />
                <a href="tel:+2347065724526" className="xsmall-title-oswald">
                  +234 706 572 4526
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="three-columns bottom-padding-60">
          <div className="content-left-margin-10">
            <ul className="footer-social">
              <li>
                <div className="flip-btn-box">
                  <a
                    href="https://www.instagram.com/arvotek/"
                    target="_blank"
                    rel="noreferrer"
                    className="flip-btn pointer-small"
                    data-text="Instagram"
                  >
                    Instagram
                  </a>
                </div>
              </li>
              <li>
                <div className="flip-btn-box">
                  <a
                    href="https://www.facebook.com/arvotek"
                    target="_blank"
                    rel="noreferrer"
                    className="flip-btn pointer-small"
                    data-text="Facebook"
                  >
                    Facebook
                  </a>
                </div>
              </li>
              <li>
                <div className="flip-btn-box">
                  <a
                    href="https://www.twitter.com/arvotek"
                    target="_blank"
                    rel="noreferrer"
                    className="flip-btn pointer-small"
                    data-text="Twitter"
                  >
                    Twitter
                  </a>
                </div>
              </li>
              <li>
                <div className="flip-btn-box">
                  <a
                    href="https://www.linkedin.com/company/arvotek"
                    target="_blank"
                    rel="noreferrer"
                    className="flip-btn pointer-small"
                    data-text="LinkedIn"
                  >
                    LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="twelve-columns">
          <p className="p-letter-style text-color-4 footer-copyright">
            © Copyright {new Date().getFullYear()} Arvotek
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

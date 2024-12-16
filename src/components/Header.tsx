import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/arvotek-favicon.png";

const Header = (props: any) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header
        className="fixed-header headroom headroom--not-bottom headroom--pinned headroom--top"
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          right: "0px",
          overflow: "hidden",
          height: "75px",
          marginTop: "12px",
        }}
      >
        <div
          className="midnightHeader default"
          style={{
            position: "absolute",
            overflow: "hidden",
            inset: "0px",
            transform: "translateY(0%) translateZ(0px)",
          }}
        >
          <div
            className="midnightInner"
            style={{
              position: "absolute",
              overflow: "auto",
              inset: "0px",
              transform: "translateY(0%) translateZ(0px)",
            }}
          >
            <div className="header-flex-box">
              <Link to="/" className="logo pointer-large animsition-link">
                <div className="logo-img-box">
                  <img
                    className="logo-white"
                    src={logo}
                    alt="logo"
                    style={{ width: "50px" }}
                  />
                </div>
              </Link>
              <div className="menu-open pointer-large" onClick={toggleMenu}>
                <span className="hamburger" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav
        className={`${
          menuOpen
            ? "nav-container dark-bg-1 active"
            : "nav-container dark-bg-1"
        }`}
      >
        <div className="nav-logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "50px", marginTop: "10px" }}
          />
        </div>
        <div
          className="menu-close pointer-large"
          onClick={toggleMenu}
          style={{ marginTop: "20px" }}
        />
        <div className="dropdown-close-box">
          <div className="dropdown-close pointer-large">
            <span />
          </div>
        </div>

        <ul className="nav-menu dark-bg-1">
          <li
            className={`${
              props.activePage === "Home"
                ? "nav-box nav-bg-change active"
                : "nav-box nav-bg-change"
            }`}
          >
            <Link to="/" className="animsition-link pointer-large nav-link">
              <span
                className={`${
                  props.activePage === "Home" ? "nav-btn active" : "nav-btn"
                }`}
                data-text="Home"
              >
                Home
              </span>
            </Link>
            <div
              className="nav-bg"
              style={{
                backgroundImage: "url(assets/images/backgrounds/home.png)",
              }}
            />
          </li>

          <li
            className={`${
              props.activePage === "About"
                ? "nav-box nav-bg-change active"
                : "nav-box nav-bg-change"
            }`}
          >
            <Link
              to="/about"
              className="animsition-link pointer-large nav-link"
            >
              <span
                className={`${
                  props.activePage === "About" ? "nav-btn active" : "nav-btn"
                }`}
                data-text="About"
              >
                About
              </span>
            </Link>
            <div
              className="nav-bg"
              style={{
                backgroundImage: "url(assets/images/backgrounds/logo-bg.jpeg)",
              }}
            ></div>
          </li>

          <li
            className={`${
              props.activePage === "Services"
                ? "nav-box nav-bg-change active"
                : "nav-box nav-bg-change"
            }`}
          >
            <Link
              to="/services"
              className="animsition-link pointer-large nav-link"
            >
              <span
                className={`${
                  props.activePage === "Services" ? "nav-btn active" : "nav-btn"
                }`}
                data-text="Services"
              >
                Services
              </span>
            </Link>
            <div
              className="nav-bg"
              style={{
                backgroundImage: "url(assets/images/backgrounds/services.jpeg)",
              }}
            />
          </li>

          <li
            className={`${
              props.activePage === "Portfolio"
                ? "nav-box nav-bg-change active"
                : "nav-box nav-bg-change"
            }`}
          >
            <Link
              to="/portfolio"
              className="animsition-link pointer-large nav-link"
            >
              <span
                className={`${
                  props.activePage === "Portfolio"
                    ? "nav-btn active"
                    : "nav-btn"
                }`}
                data-text="Portfolio"
              >
                Portfolio
              </span>
            </Link>
            <div
              className="nav-bg"
              style={{
                backgroundImage: "url(assets/images/backgrounds/about.jpg)",
              }}
            />
          </li>
          {/*}
           <li
            className={`${
              props.activePage === "Blog"
                ? "nav-box nav-bg-change active"
                : "nav-box nav-bg-change"
            }`}
          >
            <Link to="/blog" className="animsition-link pointer-large nav-link">
              <span
                className={`${
                  props.activePage === "Blog" ? "nav-btn active" : "nav-btn"
                }`}
                data-text="Blog"
              >
                Blog
              </span>
            </Link>
            <div
              className="nav-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/bald-casual-facial-hair-1708528.jpg)",
              }}
            />
          </li> 
          */}

          <li
            className={`${
              props.activePage === "Contact"
                ? "nav-box nav-bg-change active"
                : "nav-box nav-bg-change"
            }`}
          >
            <Link
              to="/contact"
              className="animsition-link pointer-large nav-link"
            >
              <span
                className={`${
                  props.activePage === "Contact" ? "nav-btn active" : "nav-btn"
                }`}
                data-text="Contact"
              >
                Contact
              </span>
            </Link>
            <div
              className="nav-bg"
              style={{
                backgroundImage: "url(assets/images/backgrounds/about-3.jpg)",
              }}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

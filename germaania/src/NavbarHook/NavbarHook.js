import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./NavbarHook.css";

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "992px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";

    return (
      <div class='header'>
        <ul className={listClassName}>
          <li>
            <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
              Kezdőlap
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rolam"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              Rólam
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/arak"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              Árak
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kapcsolat"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              Kapcsolat
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <nav className="nav container">
      <NavLink to="/" className="nav__logo">
        {window.BRAND_FULL_NAME}
      </NavLink>

      {isMobile && (
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      )}

      {isMobile ? (
        <div
          className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          {renderNavLinks()}
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>
      ) : (
        renderNavLinks()
      )}
    </nav>
  );
};

export default NavbarHook;
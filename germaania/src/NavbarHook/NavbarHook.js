import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu, IoHomeSharp, IoPersonSharp, IoPricetagsSharp, IoInformationCircleSharp } from "react-icons/io5";
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
      <div id='navbar' class='navbar'>
        <div className={listClassName}>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            <IoHomeSharp /> Kezdőlap
          </NavLink>
          <NavLink
            to="/rolam"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            <IoPersonSharp /> Rólam
          </NavLink>
          <NavLink
            to="/arak"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            <IoPricetagsSharp /> Árak
          </NavLink>
          <NavLink
            to="/kapcsolat"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            <IoInformationCircleSharp /> Kapcsolat
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <nav className="row nav">

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
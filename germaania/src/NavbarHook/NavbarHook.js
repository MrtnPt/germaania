import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCloseOutline, IoMenuOutline , IoHomeOutline , IoPersonOutline, IoPricetagsOutline, IoInformationCircleOutline } from "react-icons/io5";
import { IconContext } from 'react-icons';
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
      <div id='navbar' className='navbar'>
        <div className={listClassName}>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            <IconContext.Provider value={{ className: "react-icons" }}>
              <IoHomeOutline  />
            </IconContext.Provider> Kezdőlap
          </NavLink>
          <NavLink
            to="/rolam"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            <IconContext.Provider value={{ className: "react-icons" }}>
              <IoPersonOutline />
            </IconContext.Provider> Rólam
          </NavLink>
          <NavLink
            to="/szolgaltatasok"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            <IconContext.Provider value={{ className: "react-icons" }}>
              <IoPricetagsOutline />
            </IconContext.Provider> Szolgáltatások
          </NavLink>

          <NavLink
            to="/kapcsolat"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            <IconContext.Provider value={{ className: "react-icons" }}>
              <IoInformationCircleOutline />
            </IconContext.Provider> Kapcsolat
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <nav className="row nav">

      {isMobile && (
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenuOutline  /> Menü
        </div>
      )}

      {isMobile ? (
        <div
          className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          {renderNavLinks()}
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoCloseOutline />
          </div>
        </div>
      ) : (
        renderNavLinks()
      )}
    </nav>
  );
};

export default NavbarHook;
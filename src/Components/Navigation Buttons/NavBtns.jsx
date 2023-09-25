import "./NavBtn.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

function NavBtns() {
  const navRef = useRef();
  const showNavButtons = () => {
    navRef.current["classList"].toggle("show_nav_btn");
  };

  return (
    <>
      <ul className={"nav__btn__container"} ref={navRef}>
        <li className={"nav__btn__list"}>
          <NavLink className={"nav__link"} to={"home"}>
            Home
          </NavLink>
        </li>
        <li className={"nav__btn__list"}>
          <NavLink className={"nav__link"} to={"about"}>
            About
          </NavLink>
        </li>
        <li className={"nav__btn__list"}>
          <NavLink className={"nav__link"} to={"categories"}>
            Categories
          </NavLink>
        </li>
        <li className={"nav__btn__list"}>
          <NavLink className={"nav__link"} to={"contact"}>
            Contact
          </NavLink>
        </li>
        <li className={"nav__btn__list"}>
          <NavLink className={"nav__link"} to={"publish"}>
            Publish
          </NavLink>
        </li>
        <li>
          <button
            className="nav__close__btn nav__toggle__btn"
            onClick={showNavButtons}
          >
            <FaTimes size={'24'}></FaTimes>
          </button>
        </li>
      </ul>
      <button
        className="nav__open__btn nav__toggle__btn"
        onClick={showNavButtons}
      >
        <FaBars size={'24'}></FaBars>
      </button>
    </>
  );
}

export default NavBtns;

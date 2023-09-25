import "./NavBtn.css";
import {NavLink} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";

function NavBtns() {
    const navRef = useRef();
    const toggleNavButtons = () => {
        navRef.current["classList"].toggle("show_nav_btn");
    };
    const hideNavButtons = () => {
        navRef.current["classList"].remove("show_nav_btn");
    }

    return (
        <>
            <ul className={"nav__btn__container"} ref={navRef}>
                <li className={"nav__btn__list"}>
                    <NavLink className={"nav__link"} to={"home"} onClick={hideNavButtons}>
                        Home
                    </NavLink>
                </li>
                <li className={"nav__btn__list"}>
                    <NavLink className={"nav__link"} to={"about"} onClick={hideNavButtons}>
                        About
                    </NavLink>
                </li>
                <li className={"nav__btn__list"}>
                    <NavLink className={"nav__link"} to={"categories"} onClick={hideNavButtons}>
                        Categories
                    </NavLink>
                </li>
                <li className={"nav__btn__list"}>
                    <NavLink className={"nav__link"} to={"contact"} onClick={hideNavButtons}>
                        Contact
                    </NavLink>
                </li>
                <li className={"nav__btn__list"}>
                    <NavLink className={"nav__link"} to={"publish"} onClick={hideNavButtons}>
                        Publish
                    </NavLink>
                </li>
                <li>
                    <button
                        className="nav__close__btn nav__toggle__btn"
                        onClick={toggleNavButtons}
                    >
                        <FaTimes size={'24'}></FaTimes>
                    </button>
                </li>
            </ul>
            <button
                className="nav__open__btn nav__toggle__btn"
                onClick={toggleNavButtons}
            >
                <FaBars size={'24'}></FaBars>
            </button>
        </>
    );
}

export default NavBtns;

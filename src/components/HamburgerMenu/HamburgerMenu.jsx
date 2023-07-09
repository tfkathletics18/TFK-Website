import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./HamburgerMenu.scss";

function HamburgerMenu() {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        isActive ? setIsActive(false) : setIsActive(true);
    };

    return (
        <div className={`menu-container`} onClick={toggleActive}>
            <div
                className={`hamburger-menu ${isActive ? "hamburger-menu--active" : ""}`}
            >
                <span
                className={`hamburger-menu__line ${
                    isActive ? "hamburger-menu__line--active" : ""
                }`}
                ></span>
                <span
                className={`hamburger-menu__line ${
                    isActive ? "hamburger-menu__line--active" : ""
                }`}
                ></span>
                <span
                className={`hamburger-menu__line ${
                    isActive ? "hamburger-menu__line--active" : ""
                }`}
                ></span>
            </div>
            <nav>
                <ul className={`menu ${isActive ? "menu--active" : ""}`}>
                    <li className="menu__item">
                        <NavLink to="/" className="menu__link">
                            <p className="menu__text">Home</p>
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/about" className="menu__link">
                            <p className="menu__text">About</p>
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/gallery" className="menu__link">
                            <p className="menu__text">Gallery</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HamburgerMenu;
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
    const location = useLocation();

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink to="/" className="navigation__link">
                        <p className={`navigation__text ${location.pathname === "/" ? "navigation__text--current" : ""}`}>Home</p>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/about" className="navigation__link">
                        <p className={`navigation__text ${location.pathname === "/about" ? "navigation__text--current" : ""}`}>About</p>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/gallery" className="navigation__link">
                        <p className={`navigation__text ${location.pathname === "/gallery" ? "navigation__text--current" : ""}`}>Gallery</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar
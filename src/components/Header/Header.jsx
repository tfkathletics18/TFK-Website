import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../../assets/images/logo.png";
import "./Header.scss";

function Header() {

  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/"); // Take the user to the home page
  };

  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="TFK Athletics Performance logo" onClick={returnHome}/>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
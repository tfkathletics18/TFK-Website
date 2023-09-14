import { footerDetails } from "../../constants";
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoSnapchat, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import { MdPhone, MdEmail } from "react-icons/md";
import "./Footer.scss";

function Footer() {

  return (
    <footer className="footer">
      <h1 className="title-text title-text--white footer__title">{footerDetails.heading}</h1>
      <p className="p-text p-text--grey footer__description">{footerDetails.description}</p>
      <p className="p-text p-text--grey footer__location">{footerDetails.location}</p>
      <div className="footer__container">
        <MdPhone className="footer__icon" />
        <a href={"tel:" + footerDetails.phone} target="_blank" rel="noopener noreferrer" className="p-text p-text--white footer__link">{footerDetails.phone}</a>
      </div>
      <div className="footer__container">
        <MdEmail className="footer__icon" />
        <a href={"mailto:" + footerDetails.email} target="_blank" rel="noopener noreferrer" className="p-text p-text--white footer__link">{footerDetails.email}</a>
      </div>
      <div className="footer__socials-container">
        <a href={footerDetails.instagram} target="_blank" rel="noopener noreferrer" className="footer__link"><BiLogoInstagramAlt className="footer__icon" /></a>
        <a href={footerDetails.facebook} target="_blank" rel="noopener noreferrer" className="footer__link"><BiLogoFacebook className="footer__icon" /></a>
        <a href={footerDetails.twitter} target="_blank" rel="noopener noreferrer" className="footer__link"><BiLogoTwitter className="footer__icon" /></a>
        <a href={footerDetails.snapchat} target="_blank" rel="noopener noreferrer" className="footer__link"><BiLogoSnapchat className="footer__icon" /></a>
        <a href={footerDetails.youtube} target="_blank" rel="noopener noreferrer" className="footer__link"><BiLogoYoutube className="footer__icon" /></a>
      </div>
    </footer>
  );
}

export default Footer;
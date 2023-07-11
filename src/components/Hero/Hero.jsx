import { useNavigate } from "react-router-dom"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import heroImage1 from "../../assets/images/tfk-2nd-slide.png"
import heroImage2 from "../../assets/images/tfk-3rd-slide.png"
import Button from "../Button/Button"
import "./Hero.scss"

function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/about");
  }

  return (
    <section className="hero">
        <img src={heroImage1} className="hero__image" alt="view from the sidelines"/>
        <div className="hero__intro-block">
            <h1 className="hero__title head-text">SOME OF THE BEST PLAYERS WORK WITH A 1-ON-1 COACH</h1>
            <ul className="hero__players">
                <li className="hero__player"><IoMdCheckmarkCircleOutline className="hero__checkmark"/> Cristiano Ronaldo, Al-Nassr FC</li>
                <li className="hero__player"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Erling Haaland, Manchester City</li>
                <li className="hero__player"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Phil Foden, Manchester United</li>
                <li className="hero__player"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Jadon Sancho, Manchester United</li>
                <li className="hero__player"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Christian Pulisic, Chelsea</li>
                <li className="hero__player"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Alex Morgan, USWNT</li>
            </ul>
        </div>
        <img src={heroImage2} className="hero__image" alt="player standing on ball"/>
        <div className="hero__cta-block">
            <h2 className="hero__title hero__title--second head-text">EXPERIENCE THE BENEFITS</h2>
            <div className="hero__buttons">
              <Button label="Meet The Coach" onClickFunction={handleClick}/>
              <a href="#contact"><Button label="Get Started" /></a>
            </div>
        </div>
    </section>
  )
}

export default Hero
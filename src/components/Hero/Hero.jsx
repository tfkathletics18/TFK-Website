import testimage1 from "../../assets/images/tfk-1st-slide.png"
import testimage2 from "../../assets/images/tfk-2nd-slide.png"
import testimage3 from "../../assets/images/tfk-3rd-slide.png"
import Button from "../Button/Button"
import { useNavigate } from "react-router-dom"
import "./Hero.scss"

function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/about");
  }

  return (
    <section className="hero">
        <img src={testimage2} className="hero__image" alt="view from the sidelines"/>
        <div className="hero__intro-block">
            <h1 className="hero__title head-text">SOME OF THE BEST PLAYERS WORK WITH A 1-ON-1 COACH</h1>
            <ul className="hero__players">
                <li className="hero__player">Cristiano Ronaldo, Al-Nassr FC</li>
                <li className="hero__player">Erling Haaland, Manchester City</li>
                <li className="hero__player">Phil Foden, Manchester United</li>
                <li className="hero__player">Jadon Sancho, Manchester United</li>
                <li className="hero__player">Christian Pulisic, Chelsea</li>
                <li className="hero__player">Alex Morgan, USWNT</li>
            </ul>
        </div>
        <img src={testimage3} className="hero__image" alt="player standing on ball"/>
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
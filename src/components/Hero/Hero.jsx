import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import heroImage1 from "../../assets/images/tfk-2nd-slide.png";
import heroImage2 from "../../assets/images/tfk-3rd-slide.png";
import Button from "../Button/Button";
import "./Hero.scss";

function Hero() {
  // Following code block is being used to conditionally render different hero layouts based on screen size
  const [screenWidth, setScreenWidth] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return window.innerWidth
  }

  useEffect(() => {
      const updateDimension = () => {
          setScreenWidth(getCurrentDimension())
      }
      window.addEventListener('resize', updateDimension);
  
      return(() => {
          window.removeEventListener('resize', updateDimension);
      })
  }, [screenWidth])
  /////////////////////////////////////////////////////////
  
  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/about");
  }

  if (screenWidth < 768) {
    return (
      <section className="hero">
          <img src={heroImage1} className="hero__image" alt="view from the sidelines"/>
          <div className="hero__intro-block">
              <h1 className="hero__title head-text head-text--white">SOME OF THE BEST PLAYERS WORK WITH A 1-ON-1 COACH</h1>
              <div className="hero__players">
                <ul className="hero__player-list">
                    <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/> Cristiano Ronaldo, Al-Nassr FC</li>
                    <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Erling Haaland, Manchester City</li>
                    <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Phil Foden, Manchester United</li>
                    <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Jadon Sancho, Manchester United</li>
                    <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Christian Pulisic, Chelsea</li>
                    <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Alex Morgan, USWNT</li>
                </ul>
              </div>
          </div>
          <img src={heroImage2} className="hero__image" alt="player standing on ball"/>
          <div className="hero__cta-block">
              <h2 className="hero__title hero__title--second head-text head-text--white">EXPERIENCE THE BENEFITS</h2>
              <div className="hero__buttons">
                <Button label="Meet The Coach" onClickFunction={handleClick}/>
                <a href="#contact"><Button label="Get Started" /></a>
              </div>
          </div>
      </section>
    )
  }

  if (screenWidth < 1280) {
    return (
      <section className="hero">
          <div className="hero__container">
            <div className="hero__intro-block">
                <h1 className="hero__title head-text head-text--white">SOME OF THE BEST PLAYERS WORK WITH A 1-ON-1 COACH</h1>
                <div className="hero__players">
                  <ul className="hero__player-list">
                    <div className="hero__player-list--left">
                      <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/> Cristiano Ronaldo, Al-Nassr FC</li>
                      <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Erling Haaland, Manchester City</li>
                      <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Phil Foden, Manchester United</li>
                    </div>
                    <div className="hero__player-list--right">
                      <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Jadon Sancho, Manchester United</li>
                      <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Christian Pulisic, Chelsea</li>
                      <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Alex Morgan, USWNT</li>
                    </div>
                  </ul>
                </div>
            </div>
            <img src={heroImage1} className="hero__image" alt="view from the sidelines"/>
          </div>
          <div className="hero__container">
            <img src={heroImage2} className="hero__image" alt="player standing on ball"/>
            <div className="hero__cta-block">
                <h2 className="hero__title hero__title--second head-text head-text--white">EXPERIENCE THE BENEFITS</h2>
                <div className="hero__buttons">
                  <Button label="Meet The Coach" onClickFunction={handleClick}/>
                  <Button label="Get Started" />
                </div>
            </div>
          </div>
      </section>
    )
  }

  return (
    <section className="hero">
        <div className="hero__container">
          <div className="hero__left-container">
            <div className="hero__intro-block">
                <h1 className="hero__title head-text head-text--white">SOME OF THE BEST PLAYERS WORK WITH A 1-ON-1 COACH</h1>
                <div className="hero__players">
                  <ul className="hero__player-list">
                    <div className="hero__player-list--left">
                      <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/> Cristiano Ronaldo, Al-Nassr FC</li>
                      <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Erling Haaland, Manchester City</li>
                      <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Phil Foden, Manchester United</li>
                    </div>
                    <div className="hero__player-list--right">
                      <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Jadon Sancho, Manchester United</li>
                      <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Christian Pulisic, Chelsea</li>
                      <li className="hero__player p-text p-text--white"><IoMdCheckmarkCircleOutline className="hero__checkmark"/>Alex Morgan, USWNT</li>
                    </div>
                  </ul>
                </div>
            </div>
            <div className="hero__cta-block">
                <h2 className="hero__title hero__title--second head-text head-text--white">EXPERIENCE THE BENEFITS</h2>
                <div className="hero__buttons">
                  <Button label="Meet The Coach" onClickFunction={handleClick}/>
                  <Button label="Get Started" />
                </div>
            </div>
          </div>
          <img src={heroImage2} className="hero__image" alt="player standing on ball"/>
        </div>
    </section>
  )
}

export default Hero
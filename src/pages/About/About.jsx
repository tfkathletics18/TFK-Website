import headshot from "../../assets/images/about1.jpg";
import teams from "../../assets/images/about2.jpg";
import freestyling from "../../assets/images/about3.jpg";
import trophy from "../../assets/images/about4.JPG";
import gameplay from "../../assets/images/about5.jpg";
import { aboutTheCoach, aboutPlayingCareer, aboutAchievements, aboutCertifications } from "../../constants";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./About.scss";

function About() {
  return (
    <main className="about">
      <section className="about__intro">
        <h1 className="head-text about__header-title">OUR STORY</h1>
        <h2 className="title-text about__second-title">Meet the Coach, Tinashe Kusema</h2>
        <div className="about__headshot-container">
          <img src={headshot} alt="Tinashe Kusema" className="about__headshot"/>
        </div>
        <p className="p-text about__paragraph">{aboutTheCoach.paragraph1}</p>
        <p className="p-text about__paragraph">{aboutTheCoach.paragraph2}</p>
        <p className="p-text about__paragraph">{aboutTheCoach.paragraph3}</p>
        <div className="about__center-container-column">
          <h2 className="head-text head-text--red about__header-title">CERTIFCATIONS</h2>
          <div className="about__certifcation-container">
            <div className="about__certification-sub-container">
              <ul className="about__list">
                {aboutCertifications.filter((certifcation) => certifcation.certID <= 5)
                .map((filteredItem) => { 
                  return (
                    <li key={filteredItem.certID} className="p-text about__list-item"><IoMdCheckmarkCircleOutline className="hero__checkmark"/> {filteredItem.certification}</li>
                  )
                })}
              </ul>
            </div>
            <div className="about__certification-sub-container">
              <ul className="about__list">
                {aboutCertifications.filter((certifcation) => certifcation.certID > 5 && certifcation.certID <=9)
                .map((filteredItem) => { 
                  return (
                    <li key={filteredItem.certID} className="p-text about__list-item"><IoMdCheckmarkCircleOutline className="hero__checkmark"/> {filteredItem.certification}</li>
                  )
                })}
              </ul>
            </div>
            <div className="about__certification-sub-container">
              <ul className="about__list">
                {aboutCertifications.filter((certifcation) => certifcation.certID >= 10)
                .map((filteredItem) => { 
                  return (
                    <li key={filteredItem.certID} className="p-text about__list-item"><IoMdCheckmarkCircleOutline className="hero__checkmark"/> {filteredItem.certification}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="about__picture-container">
          <img src={gameplay} alt="tinashe kusema in game" className="about__picture"/>
        </div>
        <p className="p-text about__paragraph">{aboutTheCoach.paragraph4}</p>
        <p className="p-text about__paragraph">{aboutTheCoach.paragraph5}</p>
        <p className="p-text about__paragraph">{aboutTheCoach.paragraph6}</p>
        <div className="about__picture-container">
          <img src={freestyling} alt="tinashe kusema freestyling" className="about__picture"/>
        </div>
      </section>
      <section className="about__career">
      <div className="about__center-container-column">
        <h2 className="head-text head-text--red about__header-title">PLAYING CAREER</h2>
        <div className="about__center-container">
          <ul className="about__list">
            {aboutPlayingCareer.map((item, index) => {
              return (
                <li key={index} className="p-text about__list-item">{item.years + " - " + item.club}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="about__picture-container">
        <img src={trophy} alt="tinashe kusema holding a trophy" className="about__picture"/>
      </div>
      </section>
      <section className="about__achievements">
      <div className="about__center-container-column">
        <h2 className="head-text head-text--red about__header-title">ACHIEVEMENTS</h2>
        <div className="about__center-container">
          <ul className="about__list">
            {aboutAchievements.map((item, index) => {
              return (
                <li key={index} className="p-text about__list-item">{item.year + " - " + item.achievement}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="about__picture-container">
        <img src={teams} alt="tinashe kusema at various clubs" className="about__picture"/>
      </div>
      </section>
    </main>
  )
}

export default About
import headshot from "../../assets/images/about1.jpg";
import teams from "../../assets/images/about2.jpg";
import freestyling from "../../assets/images/about3.jpg";
import trophy from "../../assets/images/about4.jpg";
import gameplay from "../../assets/images/about5.jpg";
import { aboutTheCoach, aboutPlayingCareer, aboutAchievements } from "../../constants";
import "./About.scss";

function About() {
  return (
    <main className="about">
      <section className="about__intro">
        <h1 className="head-text about__header-title">OUR STORY</h1>
        <h2 className="title-text about__second-title">Meet the Coach, Tinashe Kusema</h2>
        <img src={headshot} alt="Tinashe Kusema" className="about__picture"/>
        <p className="p-text about__paragraph">{aboutTheCoach.paragraph1}</p>
        <p className="p-text about__paragraph">{aboutTheCoach.paragraph2}</p>
        <p className="p-text about__paragraph">{aboutTheCoach.paragraph3}</p>
        <img src={gameplay} alt="tinashe kusema in game" className="about__picture"/>
        <p className="p-text about__paragraph">{aboutTheCoach.paragraph4}</p>
        <p className="p-text about__paragraph">{aboutTheCoach.paragraph5}</p>
        <p className="p-text about__paragraph">{aboutTheCoach.paragraph6}</p>
      </section>
      <section className="about__career">
        <img src={freestyling} alt="tinashe kusema freestyling" className="about__picture"/>
        <h2 className="head-text head-text--red about__header-title">PLAYING CAREER</h2>
        <ul className="about__list">
          {aboutPlayingCareer.map((item, index) => {
            return (
              <li key={index} className="p-text about__list-item">{item.years + " - " + item.club}</li>
            )
          })}
        </ul>
      </section>
      <section className="about__achievements">
        <img src={teams} alt="tinashe kusema at various clubs" className="about__picture"/>
        <h2 className="head-text head-text--red about__header-title">ACHIEVEMENTS</h2>
        <ul className="about__list">
          {aboutAchievements.map((item, index) => {
            return (
              <li key={index} className="p-text about__list-item">{item.year + " - " + item.achievement}</li>
            )
          })}
        </ul>
        <img src={trophy} alt="tinashe kusema holding a trophy" className="about__picture"/>
      </section>
    </main>
  )
}

export default About
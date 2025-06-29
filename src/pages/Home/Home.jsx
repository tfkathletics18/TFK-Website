import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { trainingRequirements, coreOfferings, coreOfferingsIcons, coreOfferingsVideos, gameChangers, gameChangersIcons } from '../../constants';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ServiceCardTrailer from '../../components/ServiceCardTrailer/ServiceCardTrailer';
import Hero from '../../components/Hero/Hero';
import Button from '../../components/Button/Button';
import VideoModal from '../../components/VideoModal/VideoModal';
import ORSClogo from "../../assets/images/ORSC_logo.png";
import TSFClogo from "../../assets/images/TSFC_logo.png";
import "./Home.scss";


function Home() {
  const [ openVideoModal, setOpenVideoModal ] = useState(false);
  const [ displayVideoIndex , setDisplayVideoIndex ] = useState(0);

  const navigate = useNavigate();

  const handleBookNow = () => {
      navigate("/pricing");
      window.scrollTo(0, 0);
  }

  return (
    <main className="home">
      <Hero />
      <section className="home-intro">
        <div className="home-intro__container">
          <h2 className="home-intro__title head-text">OUR MISSION</h2>
          <p className="home-intro__subtitle p-text p-text--300">Provide individual personal coaching to young passionate athletes with the love of soccer. Our intimate training session will allow us to effectively identify areas of improvement for our trainee's, so they can gain a competitive edge in the modern game.</p>
        </div>
        <div className="home-intro__container home-intro__container--extra-bottom-margin">
          <h2 className="home-intro__title head-text">THE TFK VALUE</h2>
          <p className="home-intro__subtitle p-text p-text--300">We tailor our training sessions to the level of the athlete. Whether they are just beginning their soccer journey or are an elite player looking to take their skills to the next level, we will help them achieve their goals. Working with a personal coach to develop this specialized training program will improve many areas of their game inlcuding shooting, dribbling, passing & recieving, ball mastery, and positioning.</p>
        </div>
        <div className="home-intro__google-review-widget-container">
          <div className="elfsight-app-756aff63-bfca-4ee9-81fe-6024a0a51083"></div>
        </div>
        <div className="home-intro__container">
          <h2 className="home-intro__title--less-margin head-text">WHAT WE OFFER</h2>
          <ul className="home-intro__list">
            {trainingRequirements.map((item, index) => <li key={index} className="home-intro__list-item p-text p-text--light">{item}</li>)}
          </ul>
        </div>
      </section>
      <section className="home-services__container">
        <h2 className="home-intro__title--less-margin head-text">CORE OFFERINGS</h2>
        <div className="home-services__offering-list">
          {coreOfferings.map((service, index) => <ServiceCardTrailer key={index} Icon={coreOfferingsIcons[index]} service={service} setOpenVideoModal={setOpenVideoModal} index={index} setDisplayVideoIndex={setDisplayVideoIndex}/>)}
          <VideoModal openVideoModal={openVideoModal} setOpenVideoModal={setOpenVideoModal} video={coreOfferingsVideos[displayVideoIndex] || coreOfferingsVideos[0]}/>
        </div>
        <h2 className="home-intro__title--less-margin head-text">GAME CHANGERS</h2>
        <div className="home-services__offering-list">
          {gameChangers.map((service, index) => <ServiceCard key={index} Icon={gameChangersIcons[index]} service={service}/>)}
        </div>
        <Button label="Book Now" onClickFunction={handleBookNow}></Button>
      </section>
      <section className="home-sucess-stories">
        <div className="home-sucess-stories__container">
          <h2 className="home-sucess-stories__title head-text">CLUBS WE'VE WORKED WITH</h2>
          <p className="home--sucess-stories__subtitle p-text p-text--300">Some of the clubs and academies whose athletes we have helped train.</p>
          <div className="home-sucess-stories__logo-container">
            <img src={ORSClogo} alt="Oak Ridges Soccer Club Logo" className="home-sucess-stories__logo"/>
            <img src={TSFClogo} alt="Toronto Skillz Soccer Academy Logo" className="home-sucess-stories__logo"/>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Home
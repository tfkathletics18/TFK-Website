import Hero from '../../components/Hero/Hero';
import "./Home.scss";

function Home() {
  return (
    <main className="home">
      <Hero />
      <section className="home-intro">
        <div className="home-intro__container">
          <h2 className="home-intro__title head-text">Our Mission</h2>
          <p className="home-intro__subtitle p-text">Provide individual personal coaching to young passionate athletes with the love of soccer. Our intimate training session will allow us to effectively identify areas of improvement for our trainee's, so they can gain a competitive edge in the modern game.</p>
        </div>
        <div className="home-intro__container">
          <h2 className="home-intro__title head-text">The TFK Value</h2>
          <p className="home-intro__subtitle p-text">We tailor our training sessions to the level of the athlete. Whether they are just beginning their soccer journey or are an elite player looking to take their skills to the next level, we will help them achieve their goals. Working with a personal coach to develop this specialized training program will improve many areas of their game inlcuding shooting, dribbling, passing & recieving, ball mastery, and positioning.</p>
        </div>
      </section>
    </main>

  )
}

export default Home
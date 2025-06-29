import { useState } from 'react';
import { groupTrainingPricingOptions, oneOnOnePricingOptions, gameChangersPricingOptions } from '../../constants';
import './Pricing.scss';

const Pricing = () => {
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleFormToggle = () => {
    window.open('https://forms.office.com/r/gKSyhpwdC1', '_blank');
    if (!isFormComplete) {
      setIsFormComplete(true);
    }
  };

  const handleBookNow = (url) => {
    window.open(url, '_blank');
  };

  return (
    <main className="pricing-page">
      <div className="pricing-page__main-container">
        <div className="pricing-page__heading-container">
          <h1 className="head-text pricing-page__header-title">Our Pricing</h1>
          <p className="p-text pricing-page__subtext">Please view our Schedule page for more information about the training season and the level descriptions to see which one fits you best. We kindly ask that you please read and complete the form below. You must do so prior to booking.</p>
          <button
            className={`pricing-page__form-button ${isFormComplete ? 'on' : 'off'}`}
            onClick={handleFormToggle}
          >
            {isFormComplete ? 'Form Complete ✔️' : 'Complete Form'}
          </button>
          <p className="p-text p-text--500 pricing-page__team-training">If you are looking to book for your entire team/club, please contact us directly to arrange.</p>
        </div>

        {/* Group Training */}
        <section className="pricing-page__section">
          <h2 className="second-head-text pricing-page__heading">Group Training</h2>
          <h3 className="p-text pricing-page__sub-heading">Includes 10 sessions + Complimentary T-Shirt</h3>
          <div className="pricing-page__cards">
            {groupTrainingPricingOptions.map((option, index) => (
              <div key={index} className="pricing-page__card">
                <h3 className="title-text pricing-page__card-title">{option.title}</h3>
                <p className="p-text p-text--secondary-grey pricing-page__card-time">{option.time}</p>
                <p className="p-text pricing-page__card-price">{option.price}</p>
                <button
                  className="pricing-page__book-button"
                  disabled={!isFormComplete}
                  onClick={() => handleBookNow(option.url)}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 1 on 1 Training */}
        <section className="pricing-page__section">
          <h2 className="second-head-text pricing-page__heading">1 on 1 Training</h2>
          <h3 className="p-text pricing-page__sub-heading">Includes One Complimentary Session + T-Shirt. Please reach out prior to booking to arrange your preferred time</h3>
          <div className="pricing-page__cards">
            {oneOnOnePricingOptions.map((option, index) => (
              <div key={index} className="pricing-page__card">
                <h3 className="title-text pricing-page__card-title">{option.title}</h3>
                <p className="p-text pricing-page__card-price">{option.price}</p>
                <button
                  className="pricing-page__book-button"
                  disabled={!isFormComplete}
                  onClick={() => handleBookNow(option.url)}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Other Offerings */}
        <section className="pricing-page__section">
          <h2 className="second-head-text pricing-page__heading--special">Game Changers</h2>
          <div className="pricing-page__cards">
            {gameChangersPricingOptions.map((option, index) => (
              <div key={index} className="pricing-page__card">
                <h3 className="title-text pricing-page__card-title">{option.title}</h3>
                <p className="p-text pricing-page__card-price">{option.price}</p>
                <button
                  className="pricing-page__book-button"
                  disabled={!isFormComplete}
                  onClick={() => handleBookNow(option.url)}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Pricing;

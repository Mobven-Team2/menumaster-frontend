import React, { useRef } from 'react';
import './MealSlider.scss';
import meal from "../../assets/svg/meal.svg"
import arrowLeft from "../../assets/svg/ok3.svg";
import arrowRight from "../../assets/svg/ok2.svg";
import buttonok from "../../assets/svg/buttonok.svg"

const MealSlider = () => {
  const cards = [
    { image: meal },
    { image: meal },
    { title: "Menu Master AI", subtitle: "Uygulamayı İndir", text: "Bu yemek gerçekten çok lezzetli. Şeflerimiz tarafından özenle hazırlanmıştır.", image: null, isSpecial: true },
    { image: meal },
    { image: meal },
    { image: meal },
    { image: meal },
    { image: meal },
  ];

  const wrapperRef = useRef(null);

  const scrollLeft = () => {
    wrapperRef.current.scrollBy({
      left: -wrapperRef.current.offsetWidth / 4,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    wrapperRef.current.scrollBy({
      left: wrapperRef.current.offsetWidth / 4,
      behavior: 'smooth',
    });
  };

  return (
    <section className='mealSlider'>
      <button className='mealSlider__arrow mealSlider__arrow--left' onClick={scrollLeft}><img src={arrowLeft} alt="left arrow" /></button>
      <button className='mealSlider__arrow mealSlider__arrow--right' onClick={scrollRight}><img src={arrowRight} alt="right arrow" /></button>
      <div className='mealSlider__wrapper' ref={wrapperRef}>
        {cards.map((card, index) => (
          <div
            className={`mealSlider__wrapper-card ${card.isSpecial ? 'mealSlider__wrapper-card--special' : ''}`}
            key={index}
            style={card.image ? { backgroundImage: `url(${card.image})` } : {}}
          >
            {card.isSpecial && (
              <div className='mealSlider__wrapper-content'>
                <h3 className='mealSlider__wrapper-title'>{card.title}</h3>
                <h4 className='mealSlider__wrapper-subtitle'>{card.subtitle}</h4>
                <p className='mealSlider__wrapper-text'>{card.text}</p>
                <button className='mealSlider__wrapper-button'>
                  Uygulamayı İndir
                  <img src={buttonok} alt="button icon" className='mealSlider__wrapper-button-icon' />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MealSlider;

import React, { useRef } from 'react';
import './UserExperience.scss';
import user1 from "../../assets/svg/user1.svg"
import user2 from "../../assets/svg/user2.svg"
import user3 from "../../assets/svg/user3.svg"
import user4 from "../../assets/svg/user4.svg"
import user5 from "../../assets/svg/user5.png"

const UserExperience = () => {
  const cards = [
    { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Omar Huseini", image: user1 },
    { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Johhny Dash", image: user2 },
    { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Angela Joe", image: user3 },
    { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Azun Monmo", image: user4 },
    { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Tabata Hola", image: user5 },
    { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Holy Lash", image: user4 },
    { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Jake Paul", image: user1 },
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
    <section className='userExperience'>
      <div className='userExperience-header'>
        <h2>Kullanıcı Deneyimleri</h2>
        <div className='userExperience-controls'>
          <button onClick={scrollLeft}>&lt;</button>
          <button onClick={scrollRight}>&gt;</button>
        </div>
      </div>
      <div className='userExperience-wrapper' ref={wrapperRef}>
        {cards.map((card, index) => (
          <div className='card' key={index}>
            <p>{card.text}</p>
            <div className='user-info'>
              <img src={card.image} alt={card.user} className='user-image' />
              <span>{card.user}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserExperience;

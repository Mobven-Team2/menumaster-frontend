import React, { useRef } from 'react';
import './UserExperience.scss';
import user1 from "../../assets/svg/user1.svg"
import user2 from "../../assets/svg/user2.svg"
import user3 from "../../assets/svg/user3.svg"
import user4 from "../../assets/svg/user4.svg"
import user5 from "../../assets/svg/user5.png"
import ok2 from "../../assets/svg/ok2.svg"
import ok3 from "../../assets/svg/ok3.svg"

const UserExperience = () => {
  const cards = [
    { text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.", user: "Omar Huseini", image: user1, info: "Kullanıcı" },
    { text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.", user: "Johhny Dash", image: user2, info: "Kullanıcı" },
    { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Angela Joe", image: user3, info: "Kullanıcı" },
    { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Azun Monmo", image: user4, info: "Kullanıcı" },
    { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Tabata Hola", image: user5, info: "Kullanıcı" },
    { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Holy Lash", image: user4, info: "Kullanıcı" },
    { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Jake Paul", image: user1, info: "Kullanıcı" },
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
      <div className='userExperience__header'>
        <h2 className='userExperience__header-title'>Kullanıcı Deneyimleri</h2>
        <div className='userExperience__header-controls'>
          <button onClick={scrollLeft}><img src={ok2} alt="" /></button>
          <button onClick={scrollRight}><img src={ok3} alt="" /></button>
        </div>
      </div>
      <div className='userExperience__wrapper' ref={wrapperRef}>
        {cards.map((card, index) => (
          <div className='userExperience__wrapper-card' key={index}>
            <p className='userExperience__wrapper-p'>{card.text}</p>
            <div className='userExperience__wrapper-desc'>
              <img src={card.image} alt={card.user} className='userExperience__wrapper-image' />
              <div className='userExperience__wrapper-name'>
                <span className='userExperience__wrapper-username' >{card.user}</span>
                <span className='userExperience__wrapper-user'>{card.info}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserExperience;

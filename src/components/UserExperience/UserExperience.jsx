import React, { useRef } from 'react';
import './UserExperience.scss';
import user1 from "../../assets/svg/user1.svg"
import user2 from "../../assets/svg/user2.svg"
import user3 from "../../assets/svg/user3.svg"
import ok2 from "../../assets/svg/ok2.svg"
import ok3 from "../../assets/svg/ok3.svg"

const UserExperience = () => {
  const cards = [
    { title: "Yemek Tasarrufu", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Azun Monmo", image: user3, info: "Kullanıcı" },
    { title: "Fotoğraftan Tarif Tanıma", text: "Arkadaşımın yaptığı bir yemeği beğenmiştim ve fotoğrafını çekip uygulamaya yükledim, hemen tarifi buldu. Müthiş bir özellik", user: "Ece Yıldız", image: user1, info: "Kullanıcı" },
    { title: "Kolay Kullanım", text: "Özellikle diyet yaparken veya belirli beslenme tercihlerini takip ederken harika bir yardımcı ve çok kullanışlı.", user: "Buse Nur Aydın", image: user2 , info: "Onaylı Kullanıcı" },
    { title: "Mevsimlik Besin Önerileri",text: "Vegan beslenme tercihime uygun harika tarifler bulabildim. Ayrıca, beslenme tercihime göre özelleştirilmiş tarifler!", user: "İsmail Emir Lambacıoğlu", image: user3, info: "Kullanıcı" },
    { title: "Fotoğraftan Tarif Tanıma", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Tabata Hola", image: user3, info: "Onaylı Kullanıcı" },
    { title: "Fotoğraftan Tarif Tanıma", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Holy Lash", image: user1, info: "Kullanıcı" },
    { title: "Fotoğraftan Tarif Tanıma", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aliquam?onsectetur, adipisicing elit. Ea, aliquam", user: "Jake Paul", image: user2, info: "Onaylı Kullanıcı" },
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
          <button className='userExperience__header-btn' onClick={scrollLeft}><img className='userExperience__header-img' src={ok3} alt="" />
          </button>
          <button className='userExperience__header-btn' onClick={scrollRight}><img lassName='userExperience__header-img' src={ok2} alt="" />
          </button>
        </div>
      </div>
      <div className='userExperience__wrapper' ref={wrapperRef}>
        {cards.map((card, index) => (
          <div className='userExperience__wrapper-card' key={index}>
            <h3 className='userExperience__wrapper-title'>{card.title}</h3>
            <p className='userExperience__wrapper-p'>{card.text}</p>
            <div className='userExperience__wrapper-desc'>
              <img src={card.image} alt={card.user} className='userExperience__wrapper-image' />
              <span className='userExperience__wrapper-username' >{card.user}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserExperience;

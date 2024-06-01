import React from 'react'
import "./services.scss"

const Services = () => {

  const serviceCards = [
    { title: "İlham Verici", desc: "Kullanıcılarımızı sağlıklı yaşam konusunda ilham verici fikirlerle buluşturuyor ve onları daha iyi bir yaşam tarzına teşvik ediyoruz." },
    { title: "Kullanıcı Odaklılık", desc: "Yediğiniz her öğünün besin değerlerini kolayca takip edin. Kalori, protein, karbonhidrat ve yağ oranlarını öğrenerek, dengeli bir diyet oluşturun ve sağlıklı beslenme alışkanlıklarınızı geliştirin." },
    { title: "Sürdürülebilirlik", desc: "Beslenme planlarımızı ve tariflerimizi sürdürülebilirlik prensiplerine uygun olarak tasarlıyoruz. Gıda israfını azaltmayı ve çevre dostu çözümler sunmayı amaçlıyoruz." }
  ];

  return (
    <>
      <section className='servicePage'>
        <h2 className='servicePage__title'>Hedeflerimiz ve Mizyonumuz</h2>
        <p className='servicePage__serviceİntro'> Yapay zeka destekli algoritmamız, damak zevkinize ve beslenme ihtiyaçlarınıza göre size özel tarifler oluşturur. Vegan, vejetaryen, glütensiz veya diğer beslenme tercihleriniz ne olursa olsun, sağlıklı ve lezzetli yemekler her zaman elinizin altında. </p>
        <div className='servicePage__container'>
          {serviceCards.map((card, index) => (
            <div className={`servicePage__card${index + 1}`} key={index}>
              <h3 className={`servicePage__card${index + 1}__title`}>{card.title}</h3>
              <p className={`servicePage__card${index + 1}__desc`}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>

  )
}

export default Services;

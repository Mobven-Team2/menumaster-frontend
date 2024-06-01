import React from 'react'
import "./intro.scss"
import hizmetler from "../../assets/svg/hizmetler.svg"
import araba from "../../assets/svg/araba.svg"
import kupa from "../../assets/svg/kupa.svg"
import insan from "../../assets/svg/insan.svg"
import hayvan from "../../assets/svg/hayvan.svg"

const Intro = () => {
  //Tekrar eden divleri diziye atadım
  const contentData = [
    { icon: araba, title: 'Beslenme Tercihleri Seçimi', info: 'Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.' },
    { icon: kupa, title: 'Enerji Düzeyine Göre Beslenme', info: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.' },
    { icon: araba, title: 'Yapay Zeka ile Size Özel Tarifler', info: 'Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.' },
    { icon: kupa, title: 'Fotoğraftan Tarif Üretme', info: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.' },
    { icon: insan, title: 'Beslenme Planı ve Sağlık Takibi', info: 'Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.' },
    { icon: hayvan, title: 'Sosyal Paylaşım ve Topluluk', info: 'Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.' }
  ];


  return (
    <>

      <section className='introPage'>

        <div className='introPage__image'>
          <img className='introPage__image-left' src={hizmetler} alt="" />
        </div>

        <div className='introPage__content'>
          <div className='introPage__content-text'>
            <h2 className='introPage__content-title'>Hizmetlerimiz</h2>
            <span className='introPage__content-text2'>Neler Yapıyoruz?</span>
            <div className='introPage__content-services'>
              {/* map fonksiyonu ile döndüm*/}
              <div className='introPage__content-services'>
                {contentData.map((item, index) => (
                  <div className='introPage__content-service' key={index}>
                    <img className='introPage__content-icon' src={item.icon} alt="" />
                    <h5 className='introPage__content-h5'>{item.title}</h5>
                    <p className='introPage__content-info'>{item.info}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

    </>

  )
}
  export default Intro;

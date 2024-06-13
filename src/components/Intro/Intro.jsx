import React from 'react'
import "./intro.scss"
import hizmetler from "../../assets/svg/hizmetler.svg"
import tools from "../../assets/svg/tools.svg"
import camera from "../../assets/svg/camera.svg"
import fruit from "../../assets/svg/fruit.svg"
import hamper from "../../assets/svg/hamper.svg"
import circleOne from "../../assets/svg/circle1.svg"
import circleTwo from "../../assets/svg/circle2.svg"

const Intro = () => {
  //Tekrar eden divleri diziye atadım
  const contentData = [
    { icon: tools, title: 'Kişiselleştirilmiş Tarifler', info: 'Kullanıcılardan aldığı bilgileri alarak analiz eder, kişiselleştirilmiş yemek tarifleri sunar. Tercihlerine göre beslenmelerine destek olur.' },
    { icon: hamper, title: 'Otomatik Alışveriş Listesi', info: 'Kullanıcıların yemek tariflerinde kullanacağı malzemeleri analiz eder, mutfak ihtiyaçlarını takip ederek mevcut malzemelerle liste oluşturur.' },
    { icon: camera, title: 'Fotoğraftan Yemek Tarifi Alma', info: 'Kullanıcının yüklediği yemek fotoğrafını analiz ederek yemeği tanımlayar, tarifini ve içerdiği malzemeleri kullanıcıya ulaştırır.' },
    { icon: fruit, title: 'Sezonluk & Yerel Besinler', info: 'Lokasyonunuza bağlı olarak, bölgenizde bulunan ve mevsimine uygun yerel besinlere kolayca erişim sağlamanıza yardımcı olur.' }
    
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
            <span className='introPage__content-text2'>Menu Master Al Neler Yapıyor?</span>
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
        {/*}
        <div className='introPage__circles'>
          <img src={circleOne} alt="" />
          <img src={circleTwo} alt="" />
        </div>*/}
      </section>

    </>

  )
}
  export default Intro;

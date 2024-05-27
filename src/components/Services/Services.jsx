import React from 'react'
import "./services.scss"

const Services = () => {
  return (
    <>
      <section className='servicePage'>
        <h2 className='servicePage__title'>Hizmetlerimiz</h2>
        <div className='servicePage__container'>
            <div className='servicePage__card1'>
                <h3 className='servicePage__card1__title'>Kişiselleştirilmiş Tarifler</h3>
                <p className='servicePage__card1__desc'>Yapay zeka destekli algoritmamız, damak zevkinize ve beslenme ihtiyaçlarınıza göre size özel tarifler oluşturur. Vegan, vejetaryen, glütensiz veya diğer beslenme tercihleriniz ne olursa olsun, sağlıklı ve lezzetli yemekler her zaman elinizin altında.</p>
            </div>
            <div className='servicePage__card2'>
                <h3 className='servicePage__card2__title'>Besin Değerleri Takibi</h3>
                <p className='servicePage__card2__desc'>Yediğiniz her öğünün besin değerlerini kolayca takip edin. Kalori, protein, karbonhidrat ve yağ oranlarını öğrenerek, dengeli bir diyet oluşturun ve sağlıklı beslenme alışkanlıklarınızı geliştirin.</p>
            </div>
            <div className='servicePage__card3'>
                <h3 className='servicePage__card3__title'>Sana Özel Menüler</h3>
                <p className='servicePage__card3__desc'>Günlük ve haftalık yemek planları ile alışveriş listenizi oluşturun, zamandan tasarruf edin ve her zaman ne yiyeceğinizi bilin. Planlamayı biz yapalım, siz sağlıklı ve dengeli beslenmenin keyfini çıkarın</p>
            </div>
        </div>

      </section>
    </>
  )
}

export default Services

import React from 'react'
import "./HowToUse.scss"
import phone1 from "../../assets/svg/phoneimg1.svg"
import phone2 from "../../assets/svg/phoneimg2.svg"
import phone3 from "../../assets/svg/phoneimg3.svg"

const HowToUse = () => {
    return (
        <>
    <section className='howToUse'>

    <h2 className='howToUse-title'>Nasıl Kullanılır ?</h2>


    <div className='howToUse-content'>

        <div className='howToUse-content-item'>
            
            <img src={phone1} alt="" />
            
            <div className=''>
            <h6>Hesap Oluştur</h6>
            <h2>Özelleştirilmiş Tarifler İçin <br /> Başlangıç Adımlarını At</h2>
            <p>Uygulamayı kullanmaya başlamak için hesap oluştur. <br /> Beslenme tercihlerini, favori mutfaklarını seç ve kişisel <br /> bilgilerini (yaş, boy, kilo, cinsiyet) gir. Sana uygun tarifleri <br /> keşfet.</p>
            </div>
        </div>

        <div className='howToUse-content-item'>
            <div>
            <h6>Keşfet</h6>
            <h2>Kolayca Öğünlerini Planla, <br /> Tarifleri Al!</h2>
            <p>Günlük hayatın yoğun temposunda, sağlıklı ve lezzetli yemekler <br /> hazırlamak çoğu zaman zorlayıcı olabilir. Ancak, doğru planlama <br /> ve basit tariflerle bu süreci  kolaylaştır.</p>
            </div>
            
                <img className='img2' src={phone2} alt="" />
            
        </div>

        <div className='howToUse-content-item'>
            
                <img src={phone3} alt="" />
            
            <div>
            <h6>Keşfet</h6>
            <h2>Fotoğrafla Yemek Tarifi Bul!</h2>
            <p>Yemeğin fotoğrafını çek, anında kişiselleştirilmiş tarif <br /> önerileri al. Tercihlerine göre sağlıklı beslenme hedeflerine br uygun öğünleri kolayca planla.</p>
            </div>
        </div>

    </div>  


    </section>
    </>
    )
}

export default HowToUse

 {/** 
        <>
            <section className='howToUse'>

                <h2 className='howToUse-title'>Nasıl Kullanılır ?</h2>

                <div className='howToUse__content'>
                    <div className='howToUse__content-itemOne'>
                        <div className='howToUse__content-image'>
                            <img className='howToUse__content-img1' src={phone1} alt="" />
                        </div>
                        <div className='howToUse__content-desc'>
                            <h6 className='howToUse__content-h6'>Create an account</h6>
                            <h2 className='howToUse__content-h2'>Create/login to an existing <br />
                                account to get started</h2>
                            <p className='howToUse__content-p'>An account is created with your email <br />
                                and a desired password</p>
                        </div>
                    </div>

                    <div className='howToUse__content-itemTwo'>
                        <div className='howToUse__content-desc'>
                            <h6 className='howToUse__content-h6'>Explore varieties</h6>
                            <h2 className='howToUse__content-h2'>Shop for your favorites <br />
                                meal as e dey hot.</h2>
                            <p className='howToUse__content-p'>Shop for your favorite meals or drinks <br />
                                and enjoy while doing it.</p>
                        </div>
                        <div className='howToUse__content-image'>
                            <img  className='howToUse__content-img2' src={phone2} alt="" />
                        </div>
                    </div>

                    <div className='howToUse__content-itemTree'>
                        <div className='howToUse__content-image'>
                            <img className='howToUse__content-img3' src={phone3} alt="" />
                        </div>
                        <div className='howToUse__content-desc'>
                            <h6 className='howToUse__content-h6'> Create an account</h6>
                            <h2 className='howToUse__content-h2'>Create/login to an existin <br />
                                account to get started</h2>
                            <p className='howToUse__content-p'>An account is created with your email <br />
                                and a desired password</p>
                        </div>
                    </div>
                  

                </div>


            </section>
        </>
        */}

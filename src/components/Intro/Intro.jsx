import React from 'react'
import "./intro.scss"
import introresim from "../../assets/svg/introresim.svg"
const Intro = () => {
  return (
    <>
    <section className='introPage'>
      <div className='introPage_text'>
      <h3 className='introPage_text-title'>Lorem ipsum dolor sit amet consectetur. Vitae <span className='introPage_text-special'>diam vulputate</span> nunc volutpat eget tempor. Consectetur sit amet </h3>
      <p className='introPage_text-content'>Yapay zeka destekli uygulamamız, kişisel ihtiyaçlarınıza uygun yemek tarifleri ve beslenme önerileri sunarak size bu yolda rehberlik ediyor. Uygulamayı indir ve yüzlerce çeşit yemek tariflerine göz at! </p>
      </div>

      <div className='introPage_image'>
        <img className='introPage_image-phone' src={introresim} alt="" />
      </div>
      
    </section>
      
    </>
  )
}

export default Intro

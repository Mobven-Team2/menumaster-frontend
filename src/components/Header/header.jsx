import React from 'react'
import './header.scss'
import cizgiİmg from '../../assets/svg/çizgi.svg'
import okYönlendirme from '../../assets/svg/ok.svg'
import sapka from '../../assets/svg/sapka.svg'
import smile from '../../assets/svg/emoji.svg'
import çatal from '../../assets/svg/çatal.svg'
import yemekresmi from '../../assets/svg/yemekresmi.svg'
import elips from '../../assets/svg/elipslogo.svg'
import çizgi2 from '../../assets/svg/çizgialt.svg'
import gülenresim from '../../assets/svg/gülenresim.svg'
import tarifliresim from '../../assets/svg/tarifliresim.svg'
import vejeteryanresim from '../../assets/svg/vejeteryanresim.svg'
import altçizgi from '../../assets/svg/kırmızıçizgi.svg'
import { Link, NavLink } from 'react-router-dom'

import { scroller } from 'react-scroll';

const Navbar = () => {

  return (
    <>
    <main className='container'>
    <section className='homePage'>
       <nav className='homePage__nav'>
            <div className='homePage__nav-logo'>
              <img src={elips} alt="" />
              <p className='homePage__nav-logo1'>MenuMaster</p>
             </div>
             <div className='homePage__nav-links'>
                <NavLink to="/" activeClassName="active" className='homePage__nav-item'>Anasayfa </NavLink>
                <NavLink to="/" className='homePage__nav-item'>Hizmetlerimiz</NavLink>
                <NavLink to="/" className='homePage__nav-item'>Nasıl Kullanılır? </NavLink>
                <NavLink to="/" className='homePage__nav-item'>Hakkımızda</NavLink>
                <NavLink to="/" className='homePage__nav-item'>S.S.S </NavLink>
             </div>
             <button className='homePage__nav-button'>Bize Ulaşın</button>
       </nav>
      <header className='homePage__header'>
        <div className='homePage__header-waveContainer'>
          <img className='homePage__header-wave'  src={cizgiİmg} alt="" /> 
        </div>

      <div className='homePage_divider'>

        <div className='homePage__header-descriptions'>                             
             <h2 className='homePage__header-title'>Sana Özel Oluşturulan Yemek Tariflerini <span className='homePage__header-keşfet'> Keşfet.</span></h2>
             <div className='homePage__header-waveContainer'>
                <img className='homePage__header-wave-behind'  src={altçizgi} alt="" /> 
             </div>
             <p className='homePage__header-info'>Yapay zeka destekli uygulamamız, kişisel ihtiyaçlarınıza uygun yemek tarifleri ve beslenme önerileri sunarak size bu yolda rehberlik ediyor. Uygulamayı indir ve yüzlerce çeşit yemek tariflerine göz at! </p>
             <button className='homePage__header-btn'>Uygulamaya Git <img src={okYönlendirme} alt=""/> </button>
             <ul className='homePage__header-contents'>
               <li className='homePage__header-info2 sapka_fix'><img src={sapka} alt="" className='homePage__header-icon homePage__header-icon-sapka ' />Yapay Zeka Destekli Tarifler</li> 
               <li className='homePage__header-info2'><img src={smile} alt="" className='homePage__header-icon' />Kişileştirilmiş Menüler</li>
               <li className='homePage__header-info2'><img src={çatal} alt="" className='homePage__header-icon' />Beslenme Türlerine Duyarlı</li>
            </ul>
        </div>

        <div className='homePage__header-image'>
            <img src={yemekresmi} alt="" className='homePage__header-image-main' />
            <img src={tarifliresim} alt="" className='homePage__header-image-tarif' />
            <img src={gülenresim} alt="" className='homePage__header-image-gülen' />
            <img src={vejeteryanresim} alt="" className='homePage__header-image-vejeteryan' />
       </div>

      </div>
        

        <div className='homePage__header-waveContainer'>
          <img className='homePage__header-wave-end'  src={çizgi2} alt="" /> 
        </div>
      </header>

      </section>
    </main>
    
    
    </>
   
  )
}
export default Navbar; 
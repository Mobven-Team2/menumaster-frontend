import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './header.scss';
import cizgiİmg from '../../assets/svg/çizgi.svg';
import okYönlendirme from '../../assets/svg/ok.svg';
import sapka from '../../assets/svg/sapka.svg';
import smile from '../../assets/svg/emoji.svg';
import çatal from '../../assets/svg/çatal.svg';
import yemekresmi from '../../assets/svg/food.svg';
import logo from '../../assets/svg/logo.svg';
import çizgi2 from '../../assets/svg/çizgialt.svg';
import gülenresim from '../../assets/svg/gülenresim.svg';
import tarifliresim from '../../assets/svg/tarifliresim.svg';
import vejeteryanresim from '../../assets/svg/vejeteryanresim.svg';
import altçizgi from '../../assets/svg/kırmızıçizgi.svg';

const Navbar = () => {
  return (
    <>
      <main className='container'>
        <section className='homePage'>
          <nav className='homePage__nav'>
            <div className='homePage__nav-logo'>
              <img className='homePage__nav-logo1' src={logo} alt="logo" />
            </div>
            <div className='homePage__nav-links'>
              <ScrollLink to="intro" smooth={true} duration={500} className='homePage__nav-item'>Anasayfa</ScrollLink>
              <ScrollLink to="services" smooth={true} duration={500} className='homePage__nav-item'>Hizmetlerimiz</ScrollLink>
              <ScrollLink to="howToUse" smooth={true} duration={500} className='homePage__nav-item'>Nasıl Kullanılır?</ScrollLink>
              <ScrollLink to="team" smooth={true} duration={500} className='homePage__nav-item'>Hakkımızda</ScrollLink>
              <ScrollLink to="questions" smooth={true} duration={500} className='homePage__nav-item'>S.S.S</ScrollLink>
            </div>
            <div className='homePage__nav-action'>
              <ScrollLink to="communication" smooth={true} duration={500} className='homePage__nav-button'>Bize Ulaşın</ScrollLink>
            </div>
          </nav>
          <header className='homePage__header'>
            <div className='homePage__header-waveContainer'>
              <img className='homePage__header-wave' src={cizgiİmg} alt="wave" /> 
            </div>
            <div className='homePage_divider'>
              <div className='homePage__header-descriptions'>
                <h2 className='homePage__header-title'>
                  Sana Özel Oluşturulan Yemek Tariflerini 
                  <span className='homePage__header-keşfet'> Keşfet.</span>
                </h2>
                <div className='homePage__header-waveContainer'>
                  <img className='homePage__header-wave-behind' src={altçizgi} alt="alt çizgi" /> 
                </div>
                <p className='homePage__header-info'>
                  Yapay zeka destekli uygulamamız, kişisel ihtiyaçlarınıza uygun yemek tarifleri ve beslenme önerileri sunarak size bu yolda rehberlik ediyor. Uygulamayı indir ve yüzlerce çeşit yemek tariflerine göz at!
                </p>
                <a href="https://mobven.com/" target="_blank" rel="noopener noreferrer" className='homePage__header-btn'>
                  Uygulamaya Git <img src={okYönlendirme} alt="ok yönlendirme" /> 
                </a>
                <ul className='homePage__header-contents'>
                  <li className='homePage__header-info2 sapka_fix'>
                    <img src={sapka} alt="sapka" className='homePage__header-icon homePage__header-icon-sapka' />Yapay Zeka Destekli Tarifler
                  </li> 
                  <li className='homePage__header-info2'>
                    <img src={smile} alt="smile" className='homePage__header-icon' />Kişileştirilmiş Menüler
                  </li>
                  <li className='homePage__header-info2'>
                    <img src={çatal} alt="çatal" className='homePage__header-icon' />Beslenme Türlerine Duyarlı
                  </li>
                </ul>
              </div>
              <div className='homePage__header-image'>
                <img src={yemekresmi} alt="yemek resmi" className='homePage__header-image-main' />
                <img src={tarifliresim} alt="tarifli resim" className='homePage__header-image-tarif' />
                <img src={gülenresim} alt="gülen resim" className='homePage__header-image-gülen' />
                <img src={vejeteryanresim} alt="vejeteryan resim" className='homePage__header-image-vejeteryan' />
              </div>
            </div>
            <div className='homePage__header-waveContainer'>
              <img className='homePage__header-wave-end' src={çizgi2} alt="çizgi2" /> 
            </div>
          </header>
        </section>
      </main>
    </>
  );
}

export default Navbar;

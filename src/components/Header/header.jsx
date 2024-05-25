import React from 'react'
import './header.scss'
import cizgiİmg from '../../assets/svg/çizgi.svg'
import okYönlendirme from '../../assets/svg/ok.svg'
import sapka from '../../assets/svg/sapka.svg'
import smile from '../../assets/svg/emoji.svg'
import çatal from '../../assets/svg/çatal.svg'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <section className='homePage'>
       <nav className='homePage__nav'>
            <div className='homePage__nav-logo'>
              <p className='homePage__nav-logo1'>MenuMaster</p>
             </div>
             <div className='homePage__nav-links'>
                <NavLink to="/" activeClassName="active" className='homePage__nav-item'>Anasayfa </NavLink>
                <NavLink to="/kimiz" className='homePage__nav-item'>Biz Kimiz? </NavLink>
                <NavLink to="/hizmetlerimiz" className='homePage__nav-item'>Hizmetlerimiz </NavLink>
                <NavLink to="/tarifler" className='homePage__nav-item'>Tarifler </NavLink>
                <NavLink to="/hakkımızda" className='homePage__nav-item'>Hakkımızda </NavLink>
             </div>
             <button className='homePage__nav-button'>Bize Ulaşın</button>
       </nav>
      <header className='homePage__header'>
        <div className='homePage__header-waveContainer'>
          {/* <img className='homePage__header-wave'  src={cizgiİmg} alt="" />*/}  {/**Dalga şeklindeki svg 'yi projede kullanırken beceremedim :( , o kısma da bakar mısın*/}
        </div>
        <div className='homePage__header-descriptions'>                                {/**Keşfet yazan yazının altındaki stili alamadım. svg şeklinde değil sanırım. Ece'ye bir sormak lazım */}
             <h2 className='homePage__header-title'>Sana Özel Oluşturulan Yemek Tariflerini <span className='homePage__header-keşfet'> Keşfet.</span></h2>
             <p className='homePage__header-info'>Yapay zeka destekli uygulamamız, kişisel ihtiyaçlarınıza uygun yemek tarifleri ve beslenme önerileri sunarak size bu yolda rehberlik ediyor. Uygulamayı indir ve yüzlerce çeşit yemek tariflerine göz at! </p>
             <button className='homePage__header-btn'>Uygulamaya Git <img src={okYönlendirme} alt=""/> </button>
             <ul className='homePage__header-contents'>
               <li className='homePage__header-info2'><img src={sapka} alt="" className='homePage__header-icon' />Yapay Zeka Destekli Tarifler</li> {/**Bu icon ile yazı hizalanmadı , bir bakar mısın buraya da */}
               <li className='homePage__header-info2'><img src={smile} alt="" className='homePage__header-icon' />Kişileştirilmiş Menüler</li>
               <li className='homePage__header-info2'><img src={çatal} alt="" className='homePage__header-icon' />Beslenme Türlerine Duyarlı</li>
            </ul>
        </div>
        <div className='homePage__header-image'>



        </div>



      </header>

      </section>
    
    </>
   
  )
}
export default Navbar; 
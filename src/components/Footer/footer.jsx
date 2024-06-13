import "./footer.scss"
import facebook from "../../assets/svg/facebook.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import twitter from "../../assets/svg/twitter.svg";
import youtube from "../../assets/svg/youtube.svg";
import instagram from "../../assets/svg/instagram.svg";


const Footer = () => {
    return (
        <>
            <section className='footerPage'>
                <div className='footerPage__span'>
                    <span>©2024 Menu Master AI</span>
                </div>
                < hr />
                <div className="footerPage__information">
                    <div className="footerPage__information-left">
                        <span className="footerPage__information-info">Anasayfa</span>
                        <span className="footerPage__information-info">Hakkımızda</span>
                        <span className="footerPage__information-info">Bizimle İletişime Geçin</span>
                    </div>
                    <div  className="footerPage__information-right">
                        <img className="footerPage__information-account" src={facebook} alt="" />
                        <img className="footerPage__information-account" src={linkedin} alt="" />
                        <img className="footerPage__information-account" src={twitter} alt="" />
                        <img className="footerPage__information-account" src={youtube} alt="" />
                        <img className="footerPage__information-account" src={instagram} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;

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
            <div>
                <img src={phone1} alt="" />
            </div>
            <div>
            <h6>Create an account</h6>
            <h2>Create/login to an existing <br />
            account to get started</h2>
            <p>An account is created with your email <br />
            and a desired password</p>
            </div>
        </div>

        <div className='howToUse-content-item'>
            <div>
            <h6>Explore varieties</h6>
            <h2>Shop for your favorites <br />
            meal as e dey hot.</h2>
            <p>Shop for your favorite meals or drinks <br />
            and enjoy while doing it.</p>
            </div>
            <div>
                <img src={phone2} alt="" />
            </div>
        </div>

        <div className='howToUse-content-item'>
            <div>
                <img src={phone3} alt="" />
            </div>
            <div>
            <h6>Create an account</h6>
            <h2>Create/login to an existing <br />
            account to get started</h2>
            <p>An account is created with your email <br />
            and a desired password</p>
            </div>
        </div>

    </div>  


    </section>
    </>
  )
}

export default HowToUse

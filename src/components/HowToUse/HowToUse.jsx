import React from 'react'
import "./HowToUse.scss"
import phone1 from "../../assets/png/phoneimg1.png"
import phone2 from "../../assets/png/phoneimg2.png"
import phone3 from "../../assets/png/phoneimg3.png"

const HowToUse = () => {
    return (
        <>
    <section className='howToUse'>

    <h2 className='howToUse-title'>Nasıl Kullanılır ?</h2>


    <div className='howToUse-content'>

        <div className='howToUse-content-item'>
            
                <img src={phone1} alt="" />
            
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
            
                <img src={phone2} alt="" />
            
        </div>

        <div className='howToUse-content-item'>
            
                <img src={phone3} alt="" />
            
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

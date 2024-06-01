import "./communication.scss"
import iletişimResm from '../../assets/svg/iletişimresm.svg'
import React, { useState } from 'react';


const Communication = () => {
    //her bir form alanı için state tanımladım
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    // Form gönderildiğinde yapılacak işlem
    const handleSubmit = (event) => {
        event.preventDefault();
        // Formu göndermek için
        console.log('Form submitted:', { name, surname, email, phone, message });
        // State'i sıfırlamak için
        setName('');
        setSurname('');
        setEmail('');
        setPhone('');
        setMessage('');

    };
    return (
        <section className="communication">
            <div className="communication__form">
                <h2 className="communication__form-title">Bizimle İletişimi Geçin</h2>
                <p className="communication__form-desc"> Sizinle iletişimde olmayı çok isteriz! Formu doldurarak mesajınızı ekibimize iletebilirsiniz.</p>
                <form className="communication__form-formfield" onSubmit={handleSubmit}>
                  <div className="communication__form-group--inline">  
                    <div className="communication__form-group">
                        <label className="communication__form-label">İsim</label>
                        <input 
                            className="communication__form-input"
                            type="text"
                            value={name}
                            placeholder="İsim"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="communication__form-group" >
                        <label className="communication__form-label">Soyisim</label>
                        <input 
                           className="communication__form-input"
                           type="text"
                           value={surname}
                           placeholder="Soyisim"
                           onChange={(e) => setSurname(e.target.value)}
                           required
                        />
                    </div>  
                 </div>   
                    <div className="communication__form-group">
                        <label className="communication__form-label">E-posta</label>
                        <input 
                            className="communication__form-input"
                            type="email"
                            value={email}
                            placeholder="janedoe@mail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="communication__form-group">
                        <label className="communication__form-label"> Telefon Numarası  </label>
                        <input 
                            className="communication__form-input"
                            type="text"
                            value={phone}
                            placeholder="TR +90 (555) 000-0000"
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="communication__form-group">
                        <label className="communication__form-label"> Mesajınız</label>
                        <textarea className="communication__form-area"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <label className="communication__form-label">
                        <input className="communication__form-box"
                            type="checkbox"
                            required
                        />
                       <a className="communication__form-articles" href="">Gizlilik ve Güvenlik</a> <span className="communication__form-span"> koşullarını kabul ediyorum.</span>
                    </label>
                    {/* Formu göndermek için buton */}
                    <button  className="communication__form-btn" type="submit">Gönder</button>
                </form>
            </div>
            <div className="communication__image">
                  <img className="communication__image-right" src={iletişimResm} alt="" />
            </div>
        </section>
    );
}

export default Communication;

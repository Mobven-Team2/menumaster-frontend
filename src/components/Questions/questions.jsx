import './questions.scss'
import React, { useState } from 'react';
import plusIcon from '../../assets/png/plusIcon.png';
import minusIcon from '../../assets/png/minusIcon.png'
                       //props
const QuestionPage = ({ question, answer }) => {
  // Durum değişikliği için
  const [isOpen, setIsOpen] = useState(false);

  // Butona tıklanınca durum değişkenini değiştiren fonksiyon
  const toggleAnswer = () => {
    setIsOpen(!isOpen);  //butona tıkladığında , + 'dan - oluyor
  };

  return (
    <div className="question">
        <div className="question__box">
           <span className='question__box-span'>{question}</span>
          <img 
            onClick={toggleAnswer}
            className="question__box-icon"
            src={isOpen ? minusIcon : plusIcon} 
            alt={isOpen ? "Minus icon" : "Plus icon"} 
          />
        </div>
      
      {isOpen && (     //isOpen true olduğunda answer gözüküyor
        <div className="question__answer">
          {answer}
        </div>
      )}
    </div>
   
   
  );
 
};

const App = () => {
  const questions = [
    { question: 'Bu uygulama hangi beslenme tercihlerini destekliyor?', answer: 'Vegan, vejetaryen, ketojenik, glütensiz, laktozsuz gibi beslenme tercihlerinin yanı sıra, çeşitli kültürel ve etik beslenme tercihlerini de dikkate alır. Kullanıcılar, beslenme tercihlerini ve diğer önemli bilgilerini belirterek, kişiselleştirilmiş beslenme planları ve tarif önerileri alabilirler.' },
    { question: 'Yemek fotoğraflarından tarif önerme nasıl işliyor?', answer: 'Vegan, vejetaryen, ketojenik, glütensiz, laktozsuz gibi beslenme tercihlerinin yanı sıra, çeşitli kültürel ve etik beslenme tercihlerini de dikkate alır. Kullanıcılar, beslenme tercihlerini ve diğer önemli bilgilerini belirterek, kişiselleştirilmiş beslenme planları ve tarif önerileri alabilirler.' },
    { question: 'Kişiselleştirilmiş tarifler neye göre belirleniyor?', answer: 'Vegan, vejetaryen, ketojenik, glütensiz, laktozsuz gibi beslenme tercihlerinin yanı sıra, çeşitli kültürel ve etik beslenme tercihlerini de dikkate alır. Kullanıcılar, beslenme tercihlerini ve diğer önemli bilgilerini belirterek, kişiselleştirilmiş beslenme planları ve tarif önerileri alabilirler.' },
    { question: 'Besin değerleri ve kalori hesaplama özelliği var mı?', answer: 'Vegan, vejetaryen, ketojenik, glütensiz, laktozsuz gibi beslenme tercihlerinin yanı sıra, çeşitli kültürel ve etik beslenme tercihlerini de dikkate alır. Kullanıcılar, beslenme tercihlerini ve diğer önemli bilgilerini belirterek, kişiselleştirilmiş beslenme planları ve tarif önerileri alabilirler.' },
    { question: 'Sezonluk ve yerel besin önerileri hangi bilgilere dayanıyor?', answer: 'Vegan, vejetaryen, ketojenik, glütensiz, laktozsuz gibi beslenme tercihlerinin yanı sıra, çeşitli kültürel ve etik beslenme tercihlerini de dikkate alır. Kullanıcılar, beslenme tercihlerini ve diğer önemli bilgilerini belirterek, kişiselleştirilmiş beslenme planları ve tarif önerileri alabilirler.' },
  ];

  return (
    <section className='questions'>
    <div className="app">
      <h2>Sıkça Sorulan Sorular</h2>
      {questions.map((item, index) => (
        <QuestionPage
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
    </section>
  );
};

export default App;

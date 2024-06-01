import "./team.scss"
import profil from "../../assets/svg/teamProfil.svg"
import React from 'react'

const Team = () => {
      //Ekip üyelerini dizinin içine aldım.
      const teamMembers = [
            { name: "Ece Yıldız", role: "Product Designer" },
            { name: "Beyza Karadağ", role: "Business Analyst" },
            { name: "Rıfat O. Akdoğan", role: "Backend Dev." },
            { name: "Ferit Yüksel", role: "DevOps Dev." },
            { name: "Ediz Aydoğan", role: "IOS Dev." },
            { name: "Cansu Özdizlekli", role: "IOS Dev." },
            { name: "Barış Temiz", role: "IOS Dev." },
            { name: "Ebrar Atabay", role: "Android Dev." },
            { name: "Arif Demiryas", role: "Android Dev." },
            { name: "Buse Nur Aydın", role: "Frontend Dev." },
            { name: "İsmail E. Lambacıoğlu", role: "Frontend Dev." },
            { name: "Gamze Nur Öztürk", role: "QA" },
            { name: "Burak Karadeniz", role: "QA" }
          ];


    return(
      <>
      <section className="teamPage">
        <h2 className="teamPage-title">Ekibimiz</h2>
        <p className="teamPage-desc">13 kişilik ekibimiz, yazılım gelworktiricileri, tasarımcı, work analisti ve kalite güvence uzmanlarından oluşuyor. Her birimizin amacı, kullanıcılarımıza en iyi deneyimi sunmak ve onların beslenme hedeflerine ulaşmalarına yardımcı olmak.</p>
        <div className="teamPage__members">
          {teamMembers.map((member, index) => (
            <div className="teamPage__members-member" key={index}>
              <img className='teamPage__members-profil' src={profil} alt="" />
              <h5 className="teamPage__members-name">{member.name}</h5>
              <span className="teamPage__members-work">{member.role}</span>
            </div>
          ))}
        </div>
      </section>
      </>



    )
    
}
export default Team;
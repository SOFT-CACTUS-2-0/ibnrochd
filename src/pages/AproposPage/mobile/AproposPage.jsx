import React, { useState } from 'react'
import '../AproposPage.css';
import './AproposPage.css'
import Navbar from '@components/Navbar/mobile/Navbar'
import Title from '@components/Title/Title'
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/mobile/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';

const sectionImages = [
    {
        src: '/38b8fac457189fc27f3de71b38e89e02.webp',
        className: 'section__image top',
        alt: 'Section Image 1',
    },
    {
        src: '/9eb95320ae2883dfea85158872ab13cd.webp',
        className: 'section__image',
        alt: 'Section Image 2',
    },
];

const bulletPoints = [
    'Restez informé de votre santé',
    'Consultez vos résultats en ligne',
    'Gérez vos rendez-vous',
];

const videos = [
    {
        src: '/981e14ca60d564e39dcf65faf5036dee.webp',
        alt: 'Vidéo 1',
    },
    {
        src: '/aa2af345e93eeea0eeb7efb594b2b6a6.webp',
        alt: 'Vidéo 2',
    },
];

const MobileAproposPage = () => {
  return (
    <div className="apropos__page__mobile">
        <Navbar />
        <div className="apropos__image__section">
            <Title
                title="Explorez la"
                subtitle="Clinique Ibn Rochd"
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem',width:'100%'}
                }}
            />
            <div className="section__phone__container"  style={{marginBlock:'4rem',width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'fit-content',display:'flex',gap:'2rem'}}>
                <div className="section__container__item image__container" style={{height:'fit-content',width:'100%',position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    {sectionImages.map((image, index) => (
                    <img loading="lazy"
                        key={index}
                        src={image.src}
                        className={image.className}
                        alt={image.alt}
                        style={{position:'static',width:'100%',height:'100%',objectFit:'contain'}}
                    />
                    ))}
                    <div className="phone__number" style={{top:'50%',left:'50%',transform:'translate(-50%, -50%)'}}>
                    <div className="icon__container">
                        <img loading="lazy" src="/contact/phone.svg" alt="Icône Téléphone" /></div>
                        <p>+212-536-614446</p>
                    </div>
                </div>
                <div className="section__container__item">
                    <div className="section__sub__header">
                    AIDER LES PATIENTS DU MONDE ENTIER !
                    </div>
                    <div className="section__header">
                    <h1>Patient <span>Caring</span></h1>
                    </div>
                    <div className="section__description">
                    Notre objectif est de fournir des soins de qualité de manière
                    courtoise, respectueuse et compatissante. Nous espérons que vous
                    nous permettrez de prendre soin de vous et de nous efforcer
                    d'être le premier et le meilleur choix en matière de soins de
                    santé.
                    </div>
                    <div className="section__bullets">
                    <ul>
                        {bulletPoints.map((point, index) => (
                        <li key={index}>
                            <img loading="lazy" src="/checklist.svg" alt="Icône Liste" /> {point}
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="apropos__video__container" style={{marginBlock:'2rem',height:'fit-content',width:'fit-content',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'1rem'}}>
                    {videos.map((video, index) => (
                        <div key={index} className="apropos__video__item">
                        <img loading="lazy" src={video.src} alt={video.alt} />
                        <div className="play-icon">
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                        </div>
                    ))}
                </div>
                <Title
                    title="NOS" 
                    subtitle="MEDECINS"
                    style={{
                        title: {fontSize: '24px',lineHeight:'28px'},
                        subtitle: {fontSize: '24px',lineHeight:'28px'},
                        description: {fontSize: '16px',lineHeight:'20px'},
                        container: {marginBlock: '1rem',width:'100%'}
                    }}
                />
                <DoctorTeam />
            </div>
            <Sponsors />
        </div>
        <Contact />
    </div>
  )
}

const DOCTORS = [
    {
      name: 'Mohammed RSN',
      speciality: 'Urologie',
      image: '/b9e277e296051862983be9a23fd769b7.webp',
    },
    {
      name: 'Mohammed Likan',
      speciality: 'Urologie',
      image: '/b9e277e296051862983be9a23fd769b7.webp',
    },
  ]

  const DoctorTeam = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex < DOCTORS.length - 1 ? (prevIndex + 1) % DOCTORS.length : 0
      );
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === -1){
          return DOCTORS.length - 2
        }
        return prevIndex - 1
      });
    };
    return (
        <div className="apropos__doctor__team" style={{width:'100%',height:'fit-content',gap:'2rem',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  <div className="doctor__team__item doctor__team__content" style={{width:'100%'}}>
                    <div className="doctor__cardboard">
                      <div className="doctor__name" style={{fontSize:'1.5rem'}}>{DOCTORS.at(currentIndex).name}</div>
                      <div className="doctor__speciality" style={{fontSize:'1rem'}}>{DOCTORS.at(currentIndex).speciality}</div>
                    </div>
                    <div className="doctor__team__title" style={{fontSize:'1.5rem'}}>
                      Meet Our Expert  Doctor
                    </div>
                    <div className="doctor__team__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </div>
                    <div className="doctor__team__cta" style={{justifyContent:'space-between'}}>
                      <div className="back__next__item">
                          <div className="back__next__item__arrow active" onClick={handlePrev}>
                          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "1rem" }} />
                          </div>
                          <div className="back__next__item__arrow" onClick={handleNext}>
                          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "1rem" }} />
                          </div>
                      </div>
                      <div className="doctor__team__separator"></div>
                      <div className="doctor__team__contact__us" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Contact us</div>
                    </div>
                  </div>
                  <div className="doctor__team__item doctor__team__image" style={{width:'100%'}}>
                    <img style={{width:'100%',height:'100%',objectFit:'contain'}} loading="lazy" src={DOCTORS.at(currentIndex).image} alt="Image" />
                    <div className="background" style={{width:'100%',height:'100%',right:'unset', transform:'translate(-50%,-50%)',left:'50%',bottom:'0',top:'50%'}}></div>
                  </div>
                </div>
    )
}

export default MobileAproposPage
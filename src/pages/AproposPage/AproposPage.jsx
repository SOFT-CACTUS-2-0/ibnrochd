import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactInfo from '@components/ContactInfo/ContactInfo';
import Header from '@components/Header/Header';
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/Contact';
import Title from '@components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import './AproposPage.css';

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

const videos = [
  {
    src: '/981e14ca60d564e39dcf65faf5036dee.webp',
    alt: 'Vidéo 1',
  },
];

const AproposPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Get bulletPoints as a string and split it
  const bulletPoints = t('apropos.bulletPoints', { returnObjects: true });

  // Add if link end in #id scroll to id
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  return (
    <> 
        <div className='apropos__page'>
            <ContactInfo />
            <Header>
                <Title title={t('apropos.title')} subtitle={t('apropos.subtitle')} />
                <div className="section__container">
                    <div className="section__container__item image__container">
                      {sectionImages.map((image, index) => (
                        <img loading="lazy"
                          key={index}
                          src={image.src}
                          className={image.className}
                          alt={t(`apropos.images.section${index + 1}`)}
                        />
                      ))}
                      <div className="phone__number">
                        <div className="icon__container">
                          <img loading="lazy" src="/contact/phone.svg" alt={t('apropos.images.phoneIcon')} /></div>
                          <p>+212-536-614446</p>
                      </div>
                    </div>
                    <div className="section__container__item" style={{direction: isRTL ? 'rtl' : 'ltr' }}>
                      <div className="section__sub__header" style={{textAlign: isRTL ? 'right' : 'left'}}>
                        {t('apropos.subHeader')}
                      </div>
                      <div className="section__header">
                        <h1 style={{textAlign: isRTL ? 'right' : 'left'}}>{t('apropos.patientCaring.title')} <span>{t('apropos.patientCaring.highlight')}</span></h1>
                      </div>
                      <div className="section__description">
                        {t('apropos.description')}
                      </div>
                      <div className="section__bullets">
                        <ul>
                          {bulletPoints.map((point, index) => (
                            <li key={index}>
                              <img loading="lazy" src="/checklist.svg" alt={t('apropos.images.checklistIcon')} /> {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="apropos__video__container">
                  {videos.map((video, index) => (
                    <div key={index} className="apropos__video__item" style={{aspectRatio: '16 / 9'}}>
                      {!isPlaying ? (
                        <>
                          <img loading="lazy" src={video.src} alt={t(`apropos.images.video${index + 1}`)} />
                          <div className="play-icon" onClick={() => setIsPlaying(true)}>
                            <FontAwesomeIcon icon={faPlay} />
                          </div>
                        </>
                      ) : (
                        <iframe 
                          width="100%" 
                          height="100%" 
                          style={{borderRadius: '25px'}}
                          src="https://www.youtube.com/embed/ZgUA8t4lr5Q?si=iswGaE4zljLUcnQQ&autoplay=1" 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="title__title__container">
                  <Title title={t('apropos.doctors.title')} subtitle={t('apropos.doctors.subtitle')} />
                </div>
                <DoctorTeam />
            </Header>
            <Sponsors />
        </div>
        <Contact />
    </>
  )
}

// const DOCTORS = [
//   {
//     name: 'Mohammed RSN',
//     speciality: 'Urologie',
//     image: '/b9e277e296051862983be9a23fd769b7.webp',
//   },
//   {
//     name: 'Mohammed Likan',
//     speciality: 'Urologie',
//     image: '/b9e277e296051862983be9a23fd769b7.webp',
//   },
// ]

const DoctorTeam = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';  
  const [currentIndex, setCurrentIndex] = useState(window.localStorage.getItem('doctorIndex') || 0);
  const DOCTORS = t('home.doctors.team', { returnObjects: true });
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
    <div id="apropos__doctor__team" className="apropos__doctor__team" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
      <div className="doctor__team__item doctor__team__content">
        <div className="doctor__cardboard" data-direction={isRTL ? 'rtl' : 'ltr'}>
          <div className="doctor__name">{DOCTORS.at(currentIndex).name}</div>
          <div className="doctor__speciality" style={{textAlign: isRTL ? 'right' : 'left'}}>{DOCTORS.at(currentIndex).specialty}</div>
        </div>
        <div className="doctor__team__title" style={{textAlign: isRTL ? 'right' : 'left'}}>
          {t('apropos.doctorTeam.title')}
        </div>
        <div className="doctor__team__description">
          {t('apropos.doctorTeam.description')}
        </div>
        <div className="doctor__team__cta">
          <div className="back__next__item" style={{flexDirection: isRTL ? 'row-reverse' : 'row'}}>
              <div className="back__next__item__arrow active" onClick={handlePrev}>
              <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "1rem" }} />
              </div>
              <div className="back__next__item__arrow" onClick={handleNext}>
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "1rem" }} />
              </div>
          </div>
          <div className="doctor__team__separator"></div>
          <div className="doctor__team__contact__us" style={{cursor:'pointer'}} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>{t('apropos.doctorTeam.contactUs')}</div>
        </div>
      </div>
      <div className="doctor__team__item doctor__team__image">
        <img loading="lazy" src={DOCTORS.at(currentIndex).image} alt="Doctor Image" />
        <div className="background" data-direction={isRTL ? 'rtl' : 'ltr'}></div>
      </div>
    </div>
  )
}

export default AproposPage
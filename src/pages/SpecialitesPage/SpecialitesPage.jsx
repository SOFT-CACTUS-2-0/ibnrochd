import React, { useState } from 'react'
import Header from '@components/Header/Header'
import ContactInfo from '@components/ContactInfo/ContactInfo'
import Title from '@components/Title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import Sponsors from '@components/Sponsors/Sponsors'
import Contact from '@components/Contact/Contact'
import CardBoard from '@components/CardBoard/CardBoard'
import { useTranslation } from 'react-i18next';
import './SpecialitesPage.css'

const SpecialitesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
        <div className='specialites__page' data-direction={isRTL ? 'rtl' : 'ltr'}>
            <ContactInfo />
            <Header>
                <div className="title__title__container">
                    <Title title={t('specialites.title')} subtitle={t('specialites.subtitle')} style={{
                        title: {fontSize: '57.71px'},
                        subtitle: {fontSize: '57.71px'}
                    }} />
                </div>
                <div style={{width:'100%',margin:'auto', marginTop: '4rem',paddingInline: '4rem'}}>
                    <div className="back__next__container" style={{width:'100%',paddingInline: '0rem'}}>
                        <div className="current__item__container">
                            <div className="current__item__indicator"></div>
                        </div>
                        <div className="back__next__item">
                            <div className="back__next__item__arrow" onClick={() => setCurrentIndex(prev => {
                                if(prev === 0) return 4;
                                return prev - 1
                            })}>
                            <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "1rem" }} />
                            </div>
                            <div className="back__next__item__arrow active" onClick={() =>setCurrentIndex(prev => {
                                return (prev + 1) % 5
                            })}>
                            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "1rem" }} />
                            </div>
                        </div>
                    </div>
                    <div className="specialites__button__group">
                        <button className={`specialites__button__item ${currentIndex === 0 ? 'active' : ''}`} style={{cursor:'pointer'}} onClick={() => setCurrentIndex(0)}>{t('specialites.specialties.pediatrics')}</button>
                        <button className={`specialites__button__item ${currentIndex === 1 ? 'active' : ''}`} style={{cursor:'pointer'}} onClick={() => setCurrentIndex(1)}>{t('specialites.specialties.gynecology')}</button>
                        <button className={`specialites__button__item ${currentIndex === 2 ? 'active' : ''}`} style={{cursor:'pointer'}} onClick={() => setCurrentIndex(2)}>{t('specialites.specialties.pediatrics')}</button>
                        <button className={`specialites__button__item ${currentIndex === 3 ? 'active' : ''}`} style={{cursor:'pointer'}} onClick={() => setCurrentIndex(3)}>{t('specialites.specialties.ophthalmology')}</button>
                        <button className={`specialites__button__item ${currentIndex === 4 ? 'active' : ''}`} style={{cursor:'pointer'}} onClick={() => setCurrentIndex(4)}>{t('specialites.specialties.pediatrics')}</button>
                    </div>
                    <hr style={{width:'100%'}} />
                    <div className="specialites__content">
                        <div className="specialites__image">
                            <img loading="lazy" src="/38b8fac457189fc27f3de71b38e89e02.webp" alt="Image" />
                            <div className="phone__number">
                                <div className="icon__container"><img loading="lazy" src="/contacts/phone.svg" alt="Image" /></div>
                                <p>+212-536-614446</p>
                            </div>
                        </div>
                        <div className="specialites__description">
                            <div className="specialites__description__title" data-direction={isRTL ? 'rtl' : 'ltr'} style={{direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left'}}>
                                <h2>{t('specialites.description.title')}</h2>
                                <p className='specialites__description__first'>
                                    {t('specialites.description.firstParagraph')}
                                </p>
                                <p className='specialites__description__second'>
                                    {t('specialites.description.secondParagraph')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <CardBoard />
                <div className="specialite__video__container" data-gradient={isPlaying} style={{width:'85vw', margin:'auto', marginBottom: '2rem'}}>
                    {!isPlaying ? (
                        <>
                            <img loading="lazy" src={'/5b1f53d6487884b0e49356f74c483a3e.webp'} alt="Home Video"/>
                            <div className="play-icon" onClick={() => setIsPlaying(true)}>
                            <FontAwesomeIcon icon={faPlay} />
                            </div>
                        </>
                        ) : (
                        <iframe 
                            loading="lazy"
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
                    <div className="border__top"></div>
                    <div className="border__bottom"></div>
                </div>
                <div className="video__description">
                    <h2>{t('specialites.video.title')}</h2>
                    <p>{t('specialites.video.description')}</p>
                </div>
                <div className="highlights">
                    <div className="highlights__item">
                        <div className="highlights__item__icon">
                            <img loading="lazy" src="/highlight/clock.svg" alt="Image" />
                        </div>
                        <div className="highlights__item__title" style={{direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left'}}>
                            {t('specialites.highlights.experience')}
                        </div>
                    </div>
                    <div className="highlights__item">
                        <div className="highlights__item__icon">
                            <img loading="lazy" src="/highlight/check.svg" alt="Image" />
                        </div>
                        <div className="highlights__item__title" style={{direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left'}}>
                            {t('specialites.highlights.service')}
                        </div>
                    </div>
                    <div className="highlights__item">
                        <div className="highlights__item__icon">
                            <img loading="lazy" src="/highlight/care.svg" alt="Image" />
                        </div>
                        <div className="highlights__item__title" style={{direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left'}}>
                            {t('specialites.highlights.care')}
                        </div>
                    </div>
                </div>
            </Header>
            <Sponsors />
        </div>
        <Contact />
    </>
  )
}

export default SpecialitesPage
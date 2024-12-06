import React, { useState } from 'react'
import '../SpecialitesPage.css';
import './SpecialitesPage.css'
import Navbar from '@components/Navbar/mobile/Navbar'
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/mobile/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import Title from '@components/Title/Title';
import CardBoard from '@components/CardBoard/mobile/CardBoard'

const MobileSpecialitesPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className='specialites__page__mobile'>
        <Navbar />
        <div style={{margin:'2rem'}}>
            <Title
                title="NOS"
                subtitle="Spécialités"
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem',width:'100%'}
                }}
            />
            <div className="back__next__container" style={{width:'100%',paddingInline:'0'}}>
                <div className="current__item__container">
                    <div className="current__item__indicator"></div>
                </div>
                <div className="back__next__item">
                    <div className="back__next__item__arrow" onClick={() => setCurrentIndex(prev => {
                        if(prev === 0) return 4;
                        return prev - 1
                    })}>
                        <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '1rem' }} />
                    </div>
                    <div className="back__next__item__arrow active" onClick={() =>setCurrentIndex(prev => {
                        return (prev + 1) % 5
                    })}>
                        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem' }} />
                    </div>
                </div>
            </div>
            <div className="specialites__button__group" style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'1rem'}}>
                <button className={`specialites__button__item ${currentIndex === 0 ? 'active' : ''}`} style={{width:'100%'}}>Pédiatrie et néonatalogie</button>
                <button className={`specialites__button__item ${currentIndex === 1 ? 'active' : ''}`} style={{width:'100%'}}>Gynécologie obstétricale</button>
                <button className={`specialites__button__item ${currentIndex === 2 ? 'active' : ''}`} style={{width:'100%'}}>Pédiatrie et néonatalogie</button>
                <button className={`specialites__button__item ${currentIndex === 3 ? 'active' : ''}`} style={{width:'100%'}}>ophtalmologie</button>
                <button className={`specialites__button__item ${currentIndex === 4 ? 'active' : ''}`} style={{width:'100%'}}>Pédiatrie et néonatalogie</button>
            </div>
            <hr style={{width:'100%'}} />
            <div className="specialites__content" style={{width:'100%',height:'fit-content',gap:'2rem',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <div className="specialites__image">
                    <img loading="lazy" src="/38b8fac457189fc27f3de71b38e89e02.webp" alt="Image" />
                    <div className="phone__number">
                        <div className="icon__container"><img loading="lazy" src="/contact/phone.svg" alt="Image" /></div>
                        <p>+212-536-614446</p>
                    </div>
                </div>
                <div className="specialites__description">
                    <div className="specialites__description__title">
                        <h2>LOREM IPSUM DOLOR</h2>
                        <p className='specialites__description__first'>
                            Notre objectif est de fournir des soins de qualité de manière courtoise, respectueuse et compatissante. Nous espérons que vous nous permettrez.
                        </p>
                        <p className='specialites__description__second'>
                            prendre soin de vous et de nous efforcer d'être le premier et le meilleur choix en matière de soins de santé.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <CardBoard />
        <div className="specialite__video__container" style={{width:'90%',margin:'auto'}}>
            <img loading="lazy" src='/5b1f53d6487884b0e49356f74c483a3e.webp' alt="Home Video" />
            <div className="play-icon">
                <FontAwesomeIcon icon={faPlay} />
            </div>
            {/* <div className="border__top"></div>
            <div className="border__bottom"></div> */}
        </div>
        <div className="video__description" style={{width:'90%',margin:'2rem',marginBlock:'2rem'}}>
            <h2 style={{fontSize:'1.5rem'}}>A dedicated doctor with the core mission to help</h2>
            <p style={{fontSize:'1rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum. Tellus quam mauris aenean turpis vulputate sodales nullam lobortis. Vulputate tortor tincidun.</p>
        </div>
        <div className="highlights" style={{flexDirection:'column',width:'100%',height:'fit-content',gap:'1rem',justifyContent:'center',alignItems:'center'}}>
            <div className="highlights__item">
                <div className="highlights__item__icon">
                    <img loading="lazy" src="/highlight/clock.svg" alt="Image" />
                </div>
                <div className="highlights__item__title">
                    +15 years of experience
                </div>
            </div>
            <div className="highlights__item">
                <div className="highlights__item__icon">
                    <img loading="lazy" src="/highlight/check.svg" alt="Image" />
                </div>
                <div className="highlights__item__title">
                    Urgent 24 hour service
                </div>
            </div>
            <div className="highlights__item">
                <div className="highlights__item__icon">
                    <img loading="lazy" src="/highlight/care.svg" alt="Image" />
                </div>
                <div className="highlights__item__title">
                    High quality care
                </div>
            </div>
        </div>
        <div style={{margin:'2rem'}}>
            <Sponsors />
        </div>
        <Contact />
    </div>
  )
}

export default MobileSpecialitesPage
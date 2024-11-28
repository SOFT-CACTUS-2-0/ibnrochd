import React from 'react'
import Header from '@components/Header/Header'
import ContactInfo from '@components/ContactInfo/ContactInfo'
import Title from '@components/Title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import Sponsors from '@components/Sponsors/Sponsors'
import Contact from '@components/Contact/Contact'
import CardBoard from '@components/CardBoard/CardBoard'
import './SpecialitesPage.css'

const SpecialitesPage = () => {
  return (
    <>
        <div className='specialites__page'>
            <ContactInfo />
            <Header>
                <div className="title__title__container">
                    <Title title="NOS" subtitle="Spécialités" style={{
                        title: {fontSize: '57.71px'},
                        subtitle: {fontSize: '57.71px'}
                    }} />
                </div>
                <div style={{width:'902px',margin:'auto', marginTop: '4rem'}}>
                    <div className="back__next__container" style={{width:'100%'}}>
                        <div className="current__item__container">
                            <div className="current__item__indicator"></div>
                        </div>
                        <div className="back__next__item">
                            <div className="back__next__item__arrow">
                            <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "1rem" }} />
                            </div>
                            <div className="back__next__item__arrow active">
                            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "1rem" }} />
                            </div>
                        </div>
                    </div>
                    <div className="specialites__button__group">
                        <button className="specialites__button__item active">Pédiatrie et néonatalogie</button>
                        <button className="specialites__button__item">Gynécologie obstétricale</button>
                        <button className="specialites__button__item">Pédiatrie et néonatalogie</button>
                        <button className="specialites__button__item">ophtalmologie</button>
                        <button className="specialites__button__item">Pédiatrie et néonatalogie</button>
                    </div>
                    <hr style={{width:'100%'}} />
                    <div className="specialites__content">
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
                <div className="specialite__video__container" style={{width:'925px'}}>
                    <img loading="lazy" src='/5b1f53d6487884b0e49356f74c483a3e.webp' alt="Home Video" />
                    <div className="play-icon">
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <div className="border__top"></div>
                    <div className="border__bottom"></div>
                </div>
                <div className="video__description">
                    <h2>A dedicated doctor with the core mission to help</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum. Tellus quam mauris aenean turpis vulputate sodales nullam lobortis. Vulputate tortor tincidun.</p>
                </div>
                <div className="highlights">
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
            </Header>
            <Sponsors />
        </div>
        <Contact />
    </>
  )
}

export default SpecialitesPage
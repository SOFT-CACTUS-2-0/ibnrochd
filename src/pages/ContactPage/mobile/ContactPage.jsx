import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '@components/Navbar/mobile/Navbar';
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faLocationDot, faEnvelope, faPhone, faFax } from '@fortawesome/free-solid-svg-icons';
import './ContactPage.css';

const SOCIAL_LINKS = [
  {
    href: 'https://www.instagram.com/cliniqueibnrochd_berkane',
    icon: faInstagram,
  },
  {
    href: 'https://facebook.com/profile.php?id=61554170039546',
    icon: faFacebookF,
  },
  {
    href: 'https://www.linkedin.com/company/cliniqueibnrochdberkane',
    icon: faLinkedinIn,
  },
];

const CONTACT_INFO = [
  {
    icon: faPhone,
    label: 'TÉLÉPHONE',
    description: '+212 - 616  569  193',
  },
  {
    icon: faFax,
    label: 'FAX',
    description: '+212 - 536  614  446',
  },
  {
    icon: faEnvelope,
    label: 'E-MAIL',
    description: 'contact@cliniqueibnrochdberkane.com',
  },
];

const MobileContactPage = () => {
  return (
    <div className="mobile__contact__page">
      <Navbar />
      <div style={{marginInline:'2rem'}}>
        <div className="mobile__contact__header">
            <h1>
            Parlez-
            <span>
                Nous
                <br />
                de Vous
            </span>
            </h1>
        </div>

        <div className="mobile__contact__content">
            <div className="mobile__contact__form__container">
            <div className="mobile__contact__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore aliqua.
            </div>

            <form className="mobile__contact__form">
                <input
                type="text"
                name="name"
                placeholder="Nom et prénom"
                required
                />
                <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                />
                <input
                type="tel"
                name="phone"
                placeholder="Numéro de téléphone"
                required
                />
                <textarea
                name="message"
                placeholder="Votre message"
                required
                ></textarea>
                <button type="submit">Envoyer</button>
            </form>
            </div>

            <div className="mobile__contact__info__section">
            <div className="mobile__social__links">
                {SOCIAL_LINKS.map(({ href, icon }, index) => (
                <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile__social__link"
                >
                    <FontAwesomeIcon icon={icon} />
                </a>
                ))}
            </div>

            <div className="mobile__contact__details">
                {CONTACT_INFO.map((item, index) => (
                <div className="mobile__contact__detail__item" key={index}>
                    <div className="mobile__contact__detail__icon">
                    <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div className="mobile__contact__detail__text">
                    <div className="mobile__contact__detail__label">{item.label}</div>
                    <div className="mobile__contact__detail__description">
                        {item.description}
                    </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="mobile__location__container">
                <div className="mobile__location__header">
                <FontAwesomeIcon icon={faLocationDot} />
                <h3>Notre Emplacement</h3>
                </div>
                <iframe
                title="Clinique Ibn Rochd Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.2994464503795!2d-2.3322184248582527!3d34.9240262596539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd782311d259185f%3A0xfc8fa46e03f20b64!2zQ2xpbmlxdWUgSWJuIFJvY2hkINmF2LXYrdipINil2KjZhiDYsdi02K8!5e0!3m2!1sen!2sma!4v1732550143802!5m2!1sen!2sma"
                width="100%" 
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            </div>
        </div>

        <div className="mobile__back__to__top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </div>

        <footer className="mobile__footer">
            Tous les droits sont réservés pour SOFT CACTUS 2024
        </footer>
      </div>
    </div>
  );
};

export default MobileContactPage;
import React from 'react';
import ContactInfo from '@components/ContactInfo/ContactInfo';
import Header from '@components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import './ContactPage.css';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
    iconSrc: '/contact/phoneOutline.svg',
    label: 'TÉLÉPHONE',
    description: '+212 - 616  569  193',
  },
  {
    iconSrc: '/contact/fax.svg',
    label: 'FAX',
    description: '+212 - 536  614  446',
  },
  {
    iconSrc: null,
    label: 'E-MAIL',
    description: 'contact@cliniqueibnrochdberkane.com',
    customIcon: <div className="blueish" />,
  },
];

const ContactPage = () => {
  return (
    <div className="contact__page">
      <ContactInfo />
      <Header>
        <div className="contact__us__container">
          <div className="contact__us__subcontainer">
            <div className="contact__us__form">
              <h1>
                Parlez-
                <span>
                  Nous
                  <br />
                  de Vous
                </span>
              </h1>
              <div className="contact__us__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore aliqua.
              </div>
              <form className="contact__us__form__input">
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
            <div className="socials__and__location">
              <div className="social__links">
                {SOCIAL_LINKS.map(({ href, icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social__link"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
              <div className="location__container">
                <iframe
                  title="Clinique Ibn Rochd Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.2994464503795!2d-2.3322184248582527!3d34.9240262596539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd782311d259185f%3A0xfc8fa46e03f20b64!2zQ2xpbmlxdWUgSWJuIFJvY2hkINmF2LXYrdipINil2KjZhiDYsdi02K8!5e0!3m2!1sen!2sma!4v1732550143802!5m2!1sen!2sma"
                  width="401.61" 
                  height="517.09px"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="contact__page__info">
            {CONTACT_INFO.map((item, index) => (
              <div className="contact__info__item" key={index}>
                <div className="contact__item__icon">
                  {item.iconSrc ? (
                    <img loading="lazy" src={item.iconSrc} alt={item.label} />
                  ) : (
                    item.customIcon
                  )}
                </div>
                <div className="contact__item__text">
                  <div className="contact__item__label">{item.label}</div>
                  <div className="contact__item__description">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      <div className="back__to__top">
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
      </div>
      </Header>
      <footer className="footer">
        Tous les droits sont réservés pour SOFT CACTUS 2024
      </footer>
    </div>
  );
};

export default ContactPage;
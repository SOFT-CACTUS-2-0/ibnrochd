import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactInfo from '@components/ContactInfo/ContactInfo';
import Header from '@components/Header/Header';
import Modal from '@components/Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
    faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
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

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'dccd1cb8-9a98-429d-bbc9-8fff6b1da741',
          ...formData
        })
      });

      if (response.ok) {
        setIsModalOpen(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const CONTACT_INFO = [
    {
      iconSrc: '/contact/phoneOutline.svg',
      label: t('contact.mobile.info.phone.label'),
      description: t('contact.mobile.info.phone.value'),
    },
    {
      iconSrc: '/contact/fax.svg',
      label: t('contact.mobile.info.fax.label'),
      description: t('contact.mobile.info.fax.value'),
    },
    {
      iconSrc: null,
      label: t('contact.mobile.info.email.label'),
      description: t('contact.mobile.info.email.value'),
      customIcon: <div className="blueish" />,
    },
  ];

  return (
    <div className="contact__page">
      <ContactInfo />
      <Header>
        <div className="contact__us__container" data-direction={isRTL ? 'rtl' : 'ltr'}>
          <div className="contact__us__subcontainer" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
            <div className="contact__us__form">
              <h1>
                {t('contact.mobile.title')}
              </h1>
              <div className="contact__us__description" style={{textAlign: isRTL ? 'right' : 'left'}}>
                {t('contact.mobile.description')}
              </div>
              <form className="contact__us__form__input" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('contact.mobile.form.name')}
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.mobile.form.email')}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t('contact.mobile.form.phone')}
                  style={{direction: isRTL ? 'rtl' : 'ltr'}}
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.mobile.form.message')}
                  required
                ></textarea>
                <button type="submit">{t('contact.mobile.form.submit')}</button>
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
          <div className="contact__page__info" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
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
                  <div className="contact__item__label" style={{textAlign: isRTL ? 'right' : 'left'}}>{item.label}</div>
                  <div className="contact__item__description" style={{direction: 'ltr'}}>
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
        <div className="back__to__top" style={{bottom:'0'}} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </div>
      </div>
      </Header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
        <h2 className="success-message">{t('contact.successMessage')}</h2>
      </Modal>
      <footer className="footer" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
        {t('contact.copyright')}
      </footer>
    </div>
  );
};

export default ContactPage;
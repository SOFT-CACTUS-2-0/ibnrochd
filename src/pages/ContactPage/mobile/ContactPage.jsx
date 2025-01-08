import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '@components/Navbar/mobile/Navbar';
import Modal from '@components/Modal/Modal';
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faLocationDot, faEnvelope, faPhone, faFax } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import './ContactPage.css';
import api from '../../../services/api';

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
    href: '#',
    icon: faLinkedinIn,
  },
];

const MobileContactPage = () => {
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
      const response = await api.post('/contact', formData)

      if (response.status === 200) {
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
      icon: faPhone,
      label: t('contact.mobile.info.phone.label'),
      description: t('contact.mobile.info.phone.value'),
    },
    {
      icon: faFax,
      label: t('contact.mobile.info.fax.label'),
      description: t('contact.mobile.info.fax.value'),
    },
    {
      icon: faEnvelope,
      label: t('contact.mobile.info.email.label'),
      description: t('contact.mobile.info.email.value'),
    },
  ];

  return (
    <div className="mobile__contact__page page__mobile">
      <Navbar />
      <div style={{marginInline:'2rem',marginTop:'10rem'}}>
        <div className="mobile__contact__header">
            <h1>
              {t('contact.mobile.title')}
            </h1>
        </div>

        <div className="mobile__contact__content">
            <div className="mobile__contact__form__container">
              <div className="mobile__contact__description">
                {t('contact.mobile.description')}
              </div>

              <form className="mobile__contact__form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('contact.mobile.form.name')}
                  required
                  style={{direction: isRTL ? 'rtl' : 'ltr'}}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.mobile.form.email')}
                  required
                  style={{direction: isRTL ? 'rtl' : 'ltr'}}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t('contact.mobile.form.phone')}
                  required
                  style={{direction: isRTL ? 'rtl' : 'ltr'}}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.mobile.form.message')}
                  required
                  style={{direction: isRTL ? 'rtl' : 'ltr'}}
                ></textarea>
                <button type="submit">{t('contact.mobile.form.submit')}</button>
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

            <div className="mobile__contact__details" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
                {CONTACT_INFO.map((item, index) => (
                <div className="mobile__contact__detail__item" key={index}>
                    <div className="mobile__contact__detail__icon">
                    <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div className="mobile__contact__detail__text">
                    <div className="mobile__contact__detail__label">{item.label}</div>
                    <div className="mobile__contact__detail__description" style={{direction: 'ltr',textAlign: isRTL ? 'right' : 'left'}}>
                        {item.description}
                    </div>
                    </div>
                  </div>
                ))}
              </div>

            <div className="mobile__location__container">
                <div className="mobile__location__header" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
                <FontAwesomeIcon icon={faLocationDot} />
                <h3>{t('contact.mobile.ourLocation')}</h3>
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

      <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
        <div className="mobile__back__to__top" style={{bottom:'0'}} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </div>
      </div>

        <footer className="mobile__footer" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
            {t('contact.copyright')}
        </footer>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
        <h2 className="success-message">{t('contact.successMessage')}</h2>
      </Modal>
    </div>
  );
};

export default MobileContactPage;
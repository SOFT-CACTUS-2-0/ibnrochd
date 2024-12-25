import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Modal from '../Modal/Modal';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import api from '../../services/api';

const Contact = () => {
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

  return (
    <div className='contact__container' style={{position:'relative', direction: isRTL ? 'rtl' : 'ltr'}}>
      <form className="contact__form" onSubmit={handleSubmit}>
        <h1 className="contact__form__title">{t('contact.contactUs')}</h1>
        <hr />
        <div className="form__group">
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t('contact.fullName')}
            className="form__input"
            required
          />
        </div>

        <div className="form__group">
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t('contact.emailPlaceholder')}
            className="form__input"
            required
          />
        </div>

        <div className="form__group">
          <input 
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder={t('contact.phone')}
            className="form__input"
            style={{direction: isRTL ? 'rtl' : 'ltr'}}
            required
          />
        </div>

        <div className="form__group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t('contact.message')}
            className="form__input"
            required
            rows="4"
          />
        </div>

        <button type="submit" className="form__button">
          {t('contact.send')}
        </button>
      </form>
      <div className="contact__separator"></div>
      <div className="contact__info__footer">
        <h1 className="footer__title">
            {t('contact.stayInTouch')}
        </h1>
        <div className="footer__description">
            {t('contact.description')}
        </div>
        <hr />
        <div className="footer__contact">
            <h2 style={{paddingBlock:'1rem'}}>{t('contact.contactInfo')}</h2>
            {/* icon item*/}
            <div className="footer__contact__li">
                <div className="footer__icon__container"><img loading="lazy" src="/contact/support.svg" alt="Image" /></div>
                <p>{t('contact.service')}</p>
            </div>
            <div className="footer__contact__li">
                <div className="footer__icon__container"><img loading="lazy" src="/contact/openEnvelope.svg" alt="Image" /></div>
                <p>{t('contact.email')}</p>
            </div>
            <div className="footer__contact__li">
                <div className="footer__icon__container"><img loading="lazy" src="/contact/phone.svg" alt="Image" /></div>
                <p style={{direction: 'ltr'}}>{t('contact.phone1')}<br />
                {t('contact.phone2')}</p>
            </div>
        </div>
        <div className="social__links" style={{ display: "flex", gap: "10px", marginBlock: "1rem" }}>
          <a target='_blank' href="https://www.instagram.com/cliniqueibnrochd_berkane" style={{ color: "#4CB9C1", textDecoration: "none", width:'38px', height:'38px', background:'white', borderRadius: '50%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
            <FontAwesomeIcon icon={faInstagram} style={{fontSize:'1.5rem'}} />
          </a>
          <a target='_blank' href="https://facebook.com/profile.php?id=61554170039546" style={{ color: "#4CB9C1", textDecoration: "none", width:'38px', height:'38px', background:'white', borderRadius: '50%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
            <FontAwesomeIcon icon={faFacebookF} style={{fontSize:'1.5rem'}} />
          </a>
          <a target='_blank' href="#" style={{ color: "#4CB9C1", textDecoration: "none", width:'38px', height:'38px', background:'white', borderRadius: '50%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
            <FontAwesomeIcon icon={faLinkedinIn} style={{fontSize:'1.5rem'}} />
          </a>
        </div>
      </div>
      <div className="copyright" style={{ position: "absolute", bottom: "1rem", width: "100%", textAlign: "center", color: "white", fontSize: "15px" }}>
        {t('contact.copyright')}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
        <h2 className="success-message">{t('contact.successMessage')}</h2>
      </Modal>
    </div>
  )
}

export default Contact
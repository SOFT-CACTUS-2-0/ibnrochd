import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';

  return (
    <div className='contact__container' style={{position:'relative',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'1rem',height:'1000px',paddingInline:'2rem',borderRadius: 0, direction: isRTL ? 'rtl' : 'ltr'}}>
      <div className="contact__info__footer" style={{width:'100%',height:'fit-content',gap:'1rem'}}>
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
                <p>contact@cliniqueibnrochdberkane.com</p>
            </div>
            <div className="footer__contact__li">
                <div className="footer__icon__container"><img loading="lazy" src="/contact/phone.svg" alt="Image" /></div>
                <p style={{direction:'ltr'}}>{t('contact.phone1')}<br />
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
          <a target='_blank' href="https://www.linkedin.com/company/cliniqueibnrochdberkane" style={{ color: "#4CB9C1", textDecoration: "none", width:'38px', height:'38px', background:'white', borderRadius: '50%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
            <FontAwesomeIcon icon={faLinkedinIn} style={{fontSize:'1.5rem'}} />
          </a>
        </div>
      </div>
      <form className="contact__form" style={{width:'100%',height:'fit-content',gap:'1rem'}}>
        <h1 className="contact__form__title">{t('contact.contactUs')}</h1>
        <hr />
        <div className="form__group">
          <input 
            type="text"
            placeholder={t('contact.fullName')}
            className="form__input"
            required
          />
        </div>

        <div className="form__group">
          <input 
            type="email"
            placeholder={t('contact.emailPlaceholder')}
            className="form__input"
            required
          />
        </div>

        <div className="form__group">
          <input 
            type="tel"
            placeholder={t('contact.phone')}
            className="form__input"
            style={{direction:isRTL ? 'rtl' : 'ltr'}}
            required
          />
        </div>

        <div className="form__group">
          <input
            type="text"
            placeholder={t('contact.message')}
            className="form__input"
            required
          />
        </div>

        <button type="submit" className="form__button">
          {t('contact.send')}
        </button>
      </form>
      <div className="copyright" style={{ position: "absolute", bottom: "1rem", width: "100%", textAlign: "center", color: "white", fontSize: "12px" }}>
        {t('contact.copyright')}
      </div>
    </div>
  )
}

export default Contact
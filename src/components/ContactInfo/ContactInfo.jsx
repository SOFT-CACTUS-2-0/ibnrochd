import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons/faPhoneVolume';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import './ContactInfo.css';

const ContactInfo = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';

  return (
    <ul className="contact__info__container">
      <li>
        <a className='contact__info__item' style={{textDecoration:'none',color:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}} href="https://maps.app.goo.gl/cPrPT772ZEz86iEW7">
          <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faLocationDot} /> <span style={{direction: isRTL ? 'rtl' : 'ltr'}}>{t('contact.address')}</span>
        </a>
      </li>
      <li className="separator"></li>
      <li>
        <a className='contact__info__item' style={{textDecoration:'none',color:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}} href="tel:+212536613033">
          <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faPhoneVolume} /> {t('contact.phone1')}
        </a>
      </li>
      <li className="separator"></li>
      <li>
        <a className='contact__info__item' style={{textDecoration:'none',color:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}} href="mailto:contact@cliniqueibnrochd.ma">
          <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faEnvelope} /> {t('contact.email')}
        </a>
      </li>
    </ul>
  );
};

export default ContactInfo;
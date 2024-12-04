import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons/faPhoneVolume';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <ul className="contact__info__container">
      <li>
        <a className='contact__info__item' style={{textDecoration:'none',color:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}} href="https://maps.app.goo.gl/cPrPT772ZEz86iEW7">
          <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faLocationDot} /> 44, Rue Tarek Ibn Ziyad Hay El Hassani Berkane
        </a>
      </li>
      <li className="separator"></li>
      <li>
        <a className='contact__info__item' style={{textDecoration:'none',color:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}} href="tel:+212-536-614446">
          <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faPhoneVolume} /> +212-536-614446
        </a>
      </li>
      <li className="separator"></li>
      <li>
        <a className='contact__info__item' style={{textDecoration:'none',color:'white',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}} href="mailto:contact@cliniqueibnrochdberkane.com">
          <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faEnvelope} /> contact@cliniqueibnrochdberkane.com
        </a>
      </li>
    </ul>
  );
};

export default ContactInfo;
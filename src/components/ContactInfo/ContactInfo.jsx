import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons/faPhoneVolume';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <ul className="contact__info__container">
      <li className='contact__info__item'>
        <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faLocationDot} /> 44, Rue Tarek Ibn Ziyad Hay El Hassani Berkane
      </li>
      <li className="separator"></li>
      <li className='contact__info__item'>
        <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faPhoneVolume} /> +212-536-614446
      </li>
      <li className="separator"></li>
      <li className='contact__info__item'>
        <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faEnvelope} /> contact@cliniqueibnrochdberkane.com
      </li>
    </ul>
  );
};

export default ContactInfo;
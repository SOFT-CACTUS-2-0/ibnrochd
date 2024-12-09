import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faLanguage } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../contexts/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  const languageOptions = t('home.navbar.languages', { returnObjects: true })
  const { currentLanguage, changeLanguage } = useLanguage();

  const isActive = (path) => location.pathname === path;

  const handleLanguageSelect = (language) => {
    changeLanguage(language.code);
    setLanguageMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem',
        }}
      >
        <NavLink
          to="/"
          end
          style={{ all: 'unset', cursor: 'pointer' }}
        >
          <img
            src={'/logo.webp'}
            style={{ width: '40px', aspectRatio: '1' }}
            alt="logo"
          />
        </NavLink>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <FontAwesomeIcon
            icon={faLanguage}
            style={{ 
              color: 'black', 
              fontSize: '1.5rem', 
              cursor: 'pointer',
              marginRight: '1rem'
            }}
            onClick={() => setLanguageMenuOpen(true)}
          />
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: 'black', fontSize: '1.5rem', cursor: 'pointer' }}
            onClick={() => setOpen(true)}
          />
        </div>
      </nav>

      {/* Language Menu */}
      {languageMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            direction: isRTL ? 'rtl' : 'ltr',
          }}
          onClick={() => setLanguageMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              width: '80%',
              maxWidth: '400px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <h2 style={{ margin: 0 }}>{t('nav.language')}</h2>
              <FontAwesomeIcon
                icon={faTimes}
                style={{ 
                  fontSize: '1.5rem', 
                  cursor: 'pointer',
                  color: '#4CB9C1'
                }}
                onClick={() => setLanguageMenuOpen(false)}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {languageOptions.map((language) => (
                <div
                  key={language.code}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    cursor: 'pointer',
                    backgroundColor: language.code === currentLanguage ? '#f3f4f6' : 'white',
                    borderRadius: '0.5rem',
                  }}
                  onClick={() => handleLanguageSelect(language)}
                >
                  <img
                    src={`https://flagsapi.com/${language.flagCode}/shiny/64.png`}
                    alt={`${language.name} flag`}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <span style={{ flex: 1 }}>{language.name}</span>
                  {language.code === currentLanguage && (
                    <div style={{ 
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%', 
                      backgroundColor: '#4CB9C1' 
                    }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      {open && (
        <ul
          className="navbar-menu__phone"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1000000,
            padding: '2rem',
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '2rem',
            backgroundColor: 'white'
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: 'black',
            }}
            onClick={() => setOpen(false)}
          />

          <li className={`navbar__menu-item__phone ${isActive('/') ? 'active' : ''}`}>
            <NavLink
              to="/"
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              {t('nav.home')}
            </NavLink>
          </li>
          <li className={`navbar__menu-item__phone ${isActive('/apropos') ? 'active' : ''}`}>
            <NavLink
              to="/apropos"
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              {t('nav.about')}
            </NavLink>
          </li>
          <li className={`navbar__menu-item__phone ${isActive('/specialites') ? 'active' : ''}`}>
            <NavLink
              to="/specialites"
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              {t('nav.specialties')}
            </NavLink>
          </li>
          <li className={`navbar__menu-item__phone ${isActive('/galerie') ? 'active' : ''}`}>
            <NavLink
              to="/galerie"
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              {t('nav.gallery')}
            </NavLink>
          </li>
          <li className={`navbar__menu-item__phone ${isActive('/contact') ? 'active' : ''}`}>
            <NavLink
              to="/contact"
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              {t('nav.contact')}
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
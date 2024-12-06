import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const languageOptions = [
  { code: 'FR', name: 'Français', flagCode: 'FR' },
  { code: 'MA', name: 'Arabe', flagCode: 'MA' },
  { code: 'GB', name: 'Anglais', flagCode: 'GB' },
]

const Navbar = () => {
  const [active, setActive] = useState('Acceuil')
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0])
  const pathname = useLocation().pathname

  useEffect(() => {
    if (pathname === '/') {
      setActive('Acceuil')
    } else if (pathname === '/contact') {
      setActive('Contact')
    }
    else if (pathname === '/galerie') {
      setActive('Galerie')
    }
    else if (pathname === '/specialites') {
      setActive('Spécialités')
    }
    else if (pathname === '/apropos') {
      setActive('Apropos')
    }
  }, [pathname])

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen)
  }

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language)
    setLanguageDropdownOpen(false)
    // Here you would typically also handle language change logic
    // Such as updating app language, changing translations, etc.
  }

  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img loading="lazy" className='navbar__logo__img' src="/33be266f1579c810ec3b063aa54b549d.webp" alt="Logo" />
      </div>
      <ul className="navbar__navigation">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li className={`navbar__navigation__item ${active === 'Acceuil' ? 'active' : ''}`}>
            Acceuil
          </li>
        </Link>
        <Link to="/apropos" style={{ textDecoration: 'none' }}>
          <li className={`navbar__navigation__item ${active === 'Apropos' ? 'active' : ''}`}>
            À propos
          </li>
        </Link>
        <Link to="/specialites" style={{ textDecoration: 'none' }}>
          <li className={`navbar__navigation__item ${active === 'Spécialités' ? 'active' : ''}`}>
            Spécialités
          </li>
        </Link>
        <Link to="/galerie" style={{ textDecoration: 'none' }}>
          <li className={`navbar__navigation__item ${active === 'Galerie' ? 'active' : ''}`}>
            Galerie
          </li>
        </Link>
      </ul>
      <ul className="navbar__contact">
        <li 
          className="navbar__contact__item" style={{position: 'relative'}}
          onClick={toggleLanguageDropdown}
        >
          Langue
          <div className="navbar__contact__item__arrow">
            <FontAwesomeIcon icon={languageDropdownOpen ? faChevronUp : faChevronDown} />
          </div>
          {languageDropdownOpen && (
            <ul style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              marginTop: '0.5rem',
              width: '100%',
              backgroundColor:'white',
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #e5e7eb',
              borderRadius: '0.25rem',
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
              zIndex: 10
            }}>
              {languageOptions
                .map((language) => (
                  <li 
                    key={language.code}
                    style={{
                      paddingBlock: '0.5rem',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      gap: '0.5rem',
                      paddingLeft: '1rem',
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
                    <p style={{flex:1}}>{language.name}</p>
                  </li>
                ))
              }
            </ul>
          )}
        </li>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <li className={`navbar__contact__item ${active === 'Contact' ? 'active' : ''}`}>
            Contact
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
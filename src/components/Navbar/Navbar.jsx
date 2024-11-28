import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [active, setActive] = useState('Acceuil')
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
        <li className="navbar__contact__item">
          Langue
          <div className="navbar__contact__item__arrow">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
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
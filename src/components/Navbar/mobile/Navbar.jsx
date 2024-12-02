import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: 'black', fontSize: '1.5rem', cursor: 'pointer' }}
          onClick={() => setOpen(true)}
        />
      </nav>

      {open && (
        <ul
          className="navbar-menu__phone"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 999,
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
              Accueil
            </NavLink>
          </li>
          <li className={`navbar__menu-item__phone ${isActive('/apropos') ? 'active' : ''}`}>
            <NavLink
              to="/apropos"
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              À-propos
            </NavLink>
          </li>
          <li className={`navbar__menu-item__phone ${isActive('/specialites') ? 'active' : ''}`}>
            <NavLink
              to="/specialites"
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              Spécialités
            </NavLink>
          </li>
          <li className={`navbar__menu-item__phone ${isActive('/galerie') ? 'active' : ''}`}>
            <NavLink
              to="/galerie"
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              Galerie
            </NavLink>
          </li>
          <li className={`navbar__menu-item__phone ${isActive('/contact') ? 'active' : ''}`}>
            <NavLink
              to="/contact"
              end
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
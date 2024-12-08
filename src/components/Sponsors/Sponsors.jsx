import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './Sponsors.css'
import { useTranslation } from 'react-i18next'

const Sponsors = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'MA';

  return (
    <div className='sponsors__container'>
        <div className="sponsors__header">
            <img loading="lazy" src="/logo.webp" alt={t('sponsors.logo')} />
        </div>
        <div className="sponsors__title">
            <h1>{t('sponsors.title')}</h1>
        </div>
        <div className="sponsors__dots">
            <div className="sponsors__dot"></div>
            <div className="sponsors__dot"></div>
            <div className="sponsors__dot"></div>
        </div>
        <div className="sponsors__content">
            <p style={{direction: isRTL ? 'rtl' : 'ltr'}}>
                {t('sponsors.description')}
            </p>
        </div>
        <div className="sponsors__list">
            <div className="sponsors__list-item">
                <img loading="lazy" src="/sponsors/1c7e961ce692f5eaf849f57ad4fc67eb.webp" width={'146.29px'} height={'146.29px'} alt={t('sponsors.logo')} />
            </div>
            <div className="sponsors__list-item">
                <img loading="lazy" src="/sponsors/c4715df9eba2552f4a7888c9e62784a5.webp" width={'82.52px'} height={'82.52px'} alt={t('sponsors.logo')} />
            </div>
            <div className="sponsors__list-item">
                <img loading="lazy" src="/sponsors/025014d4dcadab4f1a797135f20feaa0.webp" width={'138.78px'} height={'119.09px'} alt={t('sponsors.logo')} />
            </div>
        </div>
        <div 
            className="back__to__top" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={t('sponsors.backToTop')}
        >
            <FontAwesomeIcon icon={faArrowUp} className="back__to__top__icon" />
        </div>
    </div>
  )
}

export default Sponsors
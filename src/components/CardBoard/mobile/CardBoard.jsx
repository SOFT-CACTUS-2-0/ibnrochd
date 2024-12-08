import React from 'react'
import { useTranslation } from 'react-i18next';
import './CardBoard.css'

const CardBoard = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';

  return (
    <div className='card__board__mobile' style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="card__board__container">
        <div className="card__board__mobile__title">
            {t('specialites.cardBoard.title')}
        </div>
      </div>
    </div>
  )
}

export default CardBoard
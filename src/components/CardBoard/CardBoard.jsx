import React from 'react'
import { useTranslation } from 'react-i18next';
import './CardBoard.css'

const CardBoard = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';

  return (
    <div className='card__board' style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
        <div className="card__board__title">
            {t('specialites.cardBoard.title')}
        </div>
    </div>
  )
}

export default CardBoard
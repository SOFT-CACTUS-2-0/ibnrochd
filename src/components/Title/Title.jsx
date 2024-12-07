import React from 'react'
import { useTranslation } from 'react-i18next';
import './Title.css'

const Title = ({ 
  title, 
  subtitle, 
  description, 
  style = {} 
}) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';

  const {
    container = {},
    title: titleStyle = {},
    subtitle: subtitleStyle = {},
    description: descriptionStyle = {}
  } = style;

  const rtlStyle = isRTL ? { direction: 'rtl', textAlign: 'right' } : {};

  return (
    <div 
      className="title__container" 
      style={{ ...container, ...rtlStyle }}
      data-direction={isRTL ? 'rtl' : 'ltr'}
    >
        <h1 
          className="title__title" 
          style={{ ...titleStyle, ...rtlStyle }}
        >
          {title}
        </h1>
        <h1 
          className="title__subtitle" 
          style={{ ...subtitleStyle, ...rtlStyle }}
        >
          {subtitle}
        </h1>
        {description && (
          <p 
            className="title__description" 
            style={{ ...descriptionStyle, ...rtlStyle }}
          >
          {description}
          </p>
        )}
    </div>
  )
}

export default Title
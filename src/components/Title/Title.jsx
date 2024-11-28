import React from 'react'
import './Title.css'

const Title = ({ 
  title, 
  subtitle, 
  description, 
  style = {} 
}) => {
  const {
    container = {},
    title: titleStyle = {},
    subtitle: subtitleStyle = {},
    description: descriptionStyle = {}
  } = style;

  return (
    <div 
      className="title__container" 
      style={container}
    >
        <h1 
          className="title__title" 
          style={titleStyle}
        >
          {title}
        </h1>
        <h1 
          className="title__subtitle" 
          style={subtitleStyle}
        >
          {subtitle}
        </h1>
        <p 
          className="title__description" 
          style={descriptionStyle}
        >
          {description}
        </p>
    </div>
  )
}

export default Title
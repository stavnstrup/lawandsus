import React from 'react'
import cardStyles from './card.module.scss'

const Card = ({ children }) => {
  return <div className={cardStyles.cardContainer}>{children}</div>
}

export default Card

import React from 'react'
import * as cardStyles from './card.module.scss'

const CardHeader = (prop) => {
  return (
    <div className={cardStyles.cardHeader}>
      <h2>{prop.header}</h2>
    </div>
  )
}

export default CardHeader

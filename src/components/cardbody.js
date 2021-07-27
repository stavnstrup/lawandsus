import React from 'react'
import * as cardStyles from './card.module.scss'

const CardBody = ({ children }) => {
  return <div className={cardStyles.cardBody}>{children}</div>
}

export default CardBody

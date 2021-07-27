import React from 'react'

import * as cardgroupStyles from './cardgroup.module.scss'

const CardGroup = ({ children }) => {
  return <div className={cardgroupStyles.allCards}>{children}</div>
}

export default CardGroup

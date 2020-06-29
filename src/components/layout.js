import React from 'react'

import layoutStyles from './layout.module.scss'

const Layout = ({ isFrontpage, children }) => {
  let frontpageClass = isFrontpage ? layoutStyles.frontpage : ''

  return (
    <div className={`${layoutStyles.container} ${frontpageClass}`}>
      <div className={layoutStyles.content}>{children}</div>
    </div>
  )
}

export default Layout

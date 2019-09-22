import PropTypes from 'prop-types'
import React from 'react'

import { HeaderProps } from '../models/components/Header'
import HeaderBottom from './Header/HeaderBottom'
import HeaderMiddle from './Header/HeaderMiddle'
import HeaderTop from './Header/HeaderTop'

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <header>
      <div className="main_header header_four">
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header

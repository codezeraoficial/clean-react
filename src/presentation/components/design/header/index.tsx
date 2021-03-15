import React, { memo } from 'react'
import Logo from '../../../assets/img/logo.svg'

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <Logo/>
        <h1>4Dev - Survey for developers</h1>
      </nav>
    </header>
  )
}

export default memo(Header)

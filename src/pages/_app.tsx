
import { AppProps } from 'next/app'
import '../presentation/styles/sass/styles.scss'

import React from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  )
}

export default App

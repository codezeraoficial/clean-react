
import React from 'react'
import { AppProps } from 'next/app'
import '../src/presentation/styles/sass/styles.scss'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  )
}

export default App

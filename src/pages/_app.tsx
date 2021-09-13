
import React from 'react'
import { AppProps } from 'next/app'
import '@/presentation/styles/sass/styles.scss'
import { ThemeProvider } from '@material-ui/core'
import { themeMaterial } from '@/presentation/styles/theme/theme-material'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={themeMaterial}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

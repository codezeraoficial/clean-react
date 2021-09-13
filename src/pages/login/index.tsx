import React from 'react'
import Head from 'next/head'
import { MakeLogin } from '@/main/factories/pages/login/login-factory'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>4Devs - Login</title>
      </Head>
      <MakeLogin/>
    </>
  )
}

export default Home

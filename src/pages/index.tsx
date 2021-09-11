import React from 'react'
import Head from 'next/head'
import { Login } from '@/presentation/pages'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>4Devs - Login</title>
      </Head>
      <Login/>
    </>
  )
}

export default Home

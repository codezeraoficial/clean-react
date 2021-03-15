
import React from 'react'
import Header from '@/presentation/components/design/header'
import Footer from '@/presentation/components/design/footer'
import Input from '@/presentation/components/design/input'
import Button from '@/presentation/components/design/button'

const Login: React.FC = () => {
  return (
    <>
      <Header />
      <div className="login">
        <form action="">
          <h2>Login</h2>
          <Input name="email" label="E-mail" value="" required onChange={() => {}} />
          <Input name="password" label="Senha" value="" required onChange={() => {}} />
          <Button label="Entrar"/>
          <label htmlFor="create">
            <p>Não tem uma conta? <a href="#"><span>crie aqui</span></a></p>
          </label>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login

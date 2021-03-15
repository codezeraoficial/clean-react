
import React from 'react'
import { Button, Footer, Header, Input } from '@/presentation/components/design'

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

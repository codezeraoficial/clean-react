
import React, { useState } from 'react'
import { Button, Footer, Header, Input } from '@/presentation/components/design'
import FormStatus from '@/presentation/components/login/form-status'
import Context from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    errorMessage: ''
  })
  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: ''
  })

  return (
    <div>
      <Header />
      <Context.Provider value={{ state, errorState }}>
        <div className="login">
          <form action="">
            <h2>Login</h2>
            <Input name="email" label="E-mail" value="" required onChange={() => { }} />
            <Input name="password" label="Senha" value="" required onChange={() => { }} />
            <Button label="Entrar" />
            <label htmlFor="create">
              <p>Não tem uma conta? <a href="#"><span>crie aqui</span></a></p>
            </label>
            <FormStatus/>
          </form>
        </div>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login

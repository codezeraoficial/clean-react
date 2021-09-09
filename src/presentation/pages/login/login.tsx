
import React, { useState, useEffect } from 'react'
import { Button, Footer, Header, Input } from '@/presentation/components/design'
import FormStatus from '@/presentation/components/login/form-status'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    if (validation) {
      setState({
        ...state,
        emailError: validation.validate('email', state.email),
        passwordError: validation.validate('password', state.password)
      })
    }
  }, [state.email, state.password])

  return (
    <div>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <div className="login">
          <form action="">
            <h2>Login</h2>
            <Input type="email" name="email" label="E-mail" required />
            <Input type="password" name="password" label="Senha" required />
            <Button label="Entrar" />
            <label htmlFor="create">
              <p>Não tem uma conta? <a href="#"><span>crie aqui</span></a></p>
            </label>
            <FormStatus />
          </form>
        </div>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login

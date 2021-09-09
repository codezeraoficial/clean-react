
import React, { useState, useEffect, FormEvent } from 'react'
import { Button, Footer, Header, Input } from '@/presentation/components/design'
import FormStatus from '@/presentation/components/login/form-status'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Grid } from '@material-ui/core'

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setState({ ...state, isLoading: true })
  }

  return (
    <Grid container>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <div className="login">
          <form onSubmit={handleSubmit}>
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
    </Grid>
  )
}

export default Login

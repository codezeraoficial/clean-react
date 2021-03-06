
import React, { useState, useEffect, FormEvent } from 'react'
import { Button, Footer, Header, Input } from '@/presentation/components/design'
import FormStatus from '@/presentation/components/login/form-status'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Grid, Link } from '@material-ui/core'
import { Authentication, SaveAccessToken } from '@/domain/usecases'
import Router from 'next/router'

type Props = {
  validation: Validation
  authentication: Authentication
  saveAccessToken: SaveAccessToken
}

const Login: React.FC<Props> = ({ validation, authentication, saveAccessToken }) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }
      setState({ ...state, isLoading: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      await saveAccessToken.save(account.accessToken)
      Router.replace('/')
    } catch (error) {
      setState({ ...state, isLoading: false, mainError: error.message })
    }
  }

  return (
    <Grid container>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <div className="login">
          <form data-testid="form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <Input type="email" name="email" label="E-mail" required />
            <Input type="password" name="password" label="Senha" required />
            <Button label="Entrar" />
            <label htmlFor="create">
              <p>N??o tem uma conta? <Link data-testid="signup" onClick={async () => Router.push('/signup')}><span>Crie aqui</span></Link></p>
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


import React, { useState } from 'react'
import { Button, Footer, Header, Input } from '@/presentation/components/design'
import { FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div>
      <Header />
      <Context.Provider value={state}>
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

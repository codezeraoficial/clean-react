import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'
import { makeLoginValidation } from './login-vatidation-factory'

export const MakeLogin: React.FC = () => {
  return (<Login authentication={makeRemoteAuthentication()} validation={makeLoginValidation()}/>)
}

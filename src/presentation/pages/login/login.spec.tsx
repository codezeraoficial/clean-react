import React from 'react'
import { Login } from '@/presentation/pages'
import { InvalidCredentialsError } from '@/domain/errors'
import { ValidationStub, AuthenticationSpy, SaveAccessTokenMock } from '@/presentation/test'

import { render, RenderResult, fireEvent, cleanup, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import faker from 'faker'
import Router from 'next/router'

type SutTypes = {
  sut: RenderResult
  authenticationSpy: AuthenticationSpy
  saveAccessTokenMock: SaveAccessTokenMock
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  const saveAccessTokenMock = new SaveAccessTokenMock()
  validationStub.errorMessage = params?.validationError
  const sut = render(
    <Login validation={validationStub} authentication={authenticationSpy} saveAccessToken={saveAccessTokenMock}/>
  )
  return {
    sut,
    authenticationSpy,
    saveAccessTokenMock
  }
}

const populateEmailField = (sut: RenderResult, email = faker.internet.email()): void => {
  const emailInput = sut.getByTestId('email')
  fireEvent.input(emailInput, { target: { value: email } })
}

const populatePasswordField = (sut: RenderResult, password = faker.internet.password()): void => {
  const passwordInput = sut.getByTestId('password')
  fireEvent.input(passwordInput, { target: { value: password } })
}

const simulateValidSubmit = async (sut: RenderResult, email = faker.internet.email(), password = faker.internet.password()): Promise<void> => {
  populateEmailField(sut, email)
  populatePasswordField(sut, password)
  const form = sut.getByTestId('form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

const testStatusForField = (sut: RenderResult, fieldName: string, validationError?: string): void => {
  const status = sut.getByTestId(`${fieldName}-status`)
  expect(status.textContent).toBe(validationError || 'Tudo certo!')
}

const testErrorWrapChildCount = (sut: RenderResult, count: number): void => {
  const errorWrap = sut.getByTestId('error-wrap')
  expect(errorWrap.childElementCount).toBe(count)
}

const testElementExists = (sut: RenderResult, fieldName: string): void => {
  const el = sut.getByTestId(fieldName)
  expect(el).toBeTruthy()
}

const testButtonIsDisabled = (sut: RenderResult, fieldName: string, isDisabled: boolean): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(button.disabled).toBe(isDisabled)
}

jest.mock('next/router', () => ({ push: jest.fn(), replace: jest.fn(), route: '/login' }))

describe('Login Component', () => {
  afterEach(cleanup)

  test('Should start with initial state ', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    testErrorWrapChildCount(sut, 0)
    testButtonIsDisabled(sut, 'submit', true)
    testStatusForField(sut, 'email', validationError)
    testStatusForField(sut, 'password', validationError)
  })

  test('Should show email error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.password() } })
    testStatusForField(sut, 'email', validationError)
  })

  test('Should show password error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    testStatusForField(sut, 'password', validationError)
  })

  test('Should show valid email state if Validation succeeds', () => {
    const { sut } = makeSut()
    populateEmailField(sut)
    testStatusForField(sut, 'email')
  })

  test('Should show valid password state if Validation succeeds', () => {
    const { sut } = makeSut()
    populatePasswordField(sut)
    testStatusForField(sut, 'password')
  })

  test('Should enable submit button if form is valid', () => {
    const { sut } = makeSut()
    populateEmailField(sut)
    populatePasswordField(sut)
    testButtonIsDisabled(sut, 'submit', false)
  })

  test('Should show spinner on submit', async () => {
    const { sut } = makeSut()
    await simulateValidSubmit(sut)
    testElementExists(sut, 'spinner')
  })

  test('Should show error on alert if Authentication fails', async () => {
    const { sut, authenticationSpy } = makeSut()
    const error = new InvalidCredentialsError()
    jest.spyOn(authenticationSpy, 'auth').mockReturnValueOnce(Promise.reject(error))
    await simulateValidSubmit(sut)
    testElementExists(sut, 'alert-message')
  })

  test('Should call Authetication with correct values', async () => {
    const { sut, authenticationSpy } = makeSut()
    const email = faker.internet.email()
    const password = faker.internet.password()
    await simulateValidSubmit(sut, email, password)
    expect(authenticationSpy.params).toEqual({
      email,
      password
    })
  })

  test('Should call Authetication only once', async () => {
    const { sut, authenticationSpy } = makeSut()
    await simulateValidSubmit(sut)
    await simulateValidSubmit(sut)
    expect(authenticationSpy.callsCount).toBe(1)
  })

  test('Should not call Authetication if form is invalid', async () => {
    const validationError = faker.random.words()
    const { sut, authenticationSpy } = makeSut({ validationError })
    await simulateValidSubmit(sut)
    expect(authenticationSpy.callsCount).toBe(0)
  })

  test('Should call SaveAccessToken on success', async () => {
    const { sut, authenticationSpy, saveAccessTokenMock } = makeSut()
    await simulateValidSubmit(sut)
    expect(saveAccessTokenMock.accessToken).toBe(authenticationSpy.account.accessToken)
    expect(Router.replace).toHaveBeenCalledWith('/')
  })

  test('Should show error on alert if SaveAccessToken fails', async () => {
    const { sut, saveAccessTokenMock } = makeSut()
    const error = new InvalidCredentialsError()
    jest.spyOn(saveAccessTokenMock, 'save').mockReturnValueOnce(Promise.reject(error))
    await simulateValidSubmit(sut)
    testElementExists(sut, 'alert-message')
  })

  test('Should go to signup page', async () => {
    const { sut } = makeSut()
    const signup = sut.getByTestId('signup')
    fireEvent.click(signup)
    expect(Router.push).toHaveBeenCalledWith('/signup')
  })
})

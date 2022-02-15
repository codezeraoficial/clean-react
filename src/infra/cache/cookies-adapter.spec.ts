import { CookiesAdapter } from './cookies-adapter'

import faker from 'faker'
import cookies from 'js-cookie'
import { cleanup } from '@testing-library/react'
import { throwError } from '@/domain/test'

const makeSut = (): CookiesAdapter => new CookiesAdapter()

describe('CookiesAdapter', () => {
  afterEach(cleanup)

  let key: string
  let value: string

  beforeAll(() => {
    key = faker.database.column()
    value = faker.random.word()
  })

  test('Should call cookies with correct values', async () => {
    const setSpy = jest.spyOn(cookies, 'set')
    const sut = makeSut()
    await sut.set(key, value)
    expect(setSpy).toHaveBeenCalledWith(key, value)
    setSpy.mockRestore()
  })

  test('Should throw if cookies throws', async () => {
    jest.spyOn(cookies, 'set').mockImplementationOnce(throwError)
    const sut = makeSut()
    const promise = sut.set(key, value)
    await expect(promise).rejects.toThrow()
  })
})

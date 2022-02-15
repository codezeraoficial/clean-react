import { CookiesAdapter } from './cookies-adapter'

import faker from 'faker'
import cookies from 'js-cookie'
import { cleanup } from '@testing-library/react'

const makeSut = (): CookiesAdapter => new CookiesAdapter()

describe('CookiesAdapter', () => {
  afterEach(cleanup)

  test('Should call cookies with correct values', async () => {
    const setSpy = jest.spyOn(cookies, 'set')
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.random.word()
    await sut.set(key, value)
    expect(setSpy).toHaveBeenCalledWith(key, value)
    setSpy.mockRestore()
  })
})

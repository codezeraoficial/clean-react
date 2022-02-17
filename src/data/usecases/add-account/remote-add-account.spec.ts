import { HttpPostClientSpy } from '@/data/test'
import { RemoteAddAccount } from './remote-add-account'
import { AddAccount } from '@/domain/usecases'

import faker from 'faker'
import { mockAddAccountParams } from '@/domain/test'

type SutTypes = {
  sut: AddAccount
  httpPostClientSpy: HttpPostClientSpy<AddAccount.Params, AddAccount.Model>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AddAccount.Params, AddAccount.Model>()
  const sut = new RemoteAddAccount(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAddAccount', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.add(mockAddAccountParams())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const acccountParams = mockAddAccountParams()
    await sut.add(acccountParams)
    expect(httpPostClientSpy.body).toEqual(acccountParams)
  })
})

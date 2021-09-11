import { InvalidMinLengthError } from '@/validation/errors'
import faker from 'faker'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (fieldName: string): MinLengthValidation => new MinLengthValidation(fieldName, 5)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const fieldName = faker.database.column()
    const sut = makeSut(fieldName)
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new InvalidMinLengthError(fieldName, 5))
  })

  test('Should return falsy if value is valid', () => {
    const sut = makeSut(faker.database.column())
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  })
})

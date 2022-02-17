import { InvalidFieldError } from '@/validation'
import { FieldValidation } from '../../protocols'

export class CompareFieldsValidation implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly valueToCompare: string
  ) {}

  validate (value: string): Error {
    return new InvalidFieldError()
  }
}

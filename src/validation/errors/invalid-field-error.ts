export class InvalidFieldValidation extends Error {
  constructor (fieldName: string) {
    super(`O valor ${fieldName} é inválido.`)
  }
}

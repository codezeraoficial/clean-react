export class InvalidFieldError extends Error {
  constructor (fieldName: string) {
    super(`O valor ${fieldName} é inválido.`)
  }
}

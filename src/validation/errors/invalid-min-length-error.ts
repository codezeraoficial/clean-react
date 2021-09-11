export class InvalidMinLengthError extends Error {
  constructor (fieldName: string, length: number) {
    super(`O campo ${fieldName} deve ter no mínimo ${length}`)
  }
}

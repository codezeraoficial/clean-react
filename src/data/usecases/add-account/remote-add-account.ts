import { HttpPostClient, HttpStatusCode } from '@/data/protocols'
import { EmailInUseError } from '@/domain/errors'
import { AddAccount } from '@/domain/usecases'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccount.Params, AddAccount.Model>
  ) { }

  async add (params: AddAccount.Params): Promise<AddAccount.Model> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.forbidden: throw new EmailInUseError()
      default: return null
    }
  }
}

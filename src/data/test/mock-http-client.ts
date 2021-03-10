import { HttpPostClient, HttpPostParams } from '../protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  async post (parms: HttpPostParams): Promise<void> {
    this.url = parms.url
    return Promise.resolve()
  }
}

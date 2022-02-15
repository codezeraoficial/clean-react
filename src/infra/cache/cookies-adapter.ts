import { SetStorage } from '@/data/protocols'

import cookies from 'js-cookie'

export class CookiesAdapter implements SetStorage {
  async set (key: string, value: any): Promise<void> {
    cookies.set(key, value)
  }
}

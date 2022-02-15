import { CookiesAdapter } from '@/infra/cache/cookies-adapter'

export const makeCookiesAdapter = (): CookiesAdapter => {
  return new CookiesAdapter()
}

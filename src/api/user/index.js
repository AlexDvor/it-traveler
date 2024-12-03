import { clientFetch } from '../clientFetch'

export const getUserInfo = () => {
  return clientFetch.get('/user/me')
}

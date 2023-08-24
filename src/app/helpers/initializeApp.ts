import { User } from '@app/models/User'
import { environment } from '@environments/environment'

export const initializeApp = () => {
  const user: User[] = [environment.user]
  localStorage.setItem('backend-users', JSON.stringify(user))
}

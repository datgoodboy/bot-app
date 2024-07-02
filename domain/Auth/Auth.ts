import { User } from '~/domain/User/User'

export default interface Auth {
  user: User;
  accessToken: string;
  refreshToken: string;
}

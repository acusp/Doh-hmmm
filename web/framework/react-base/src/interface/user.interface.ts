import { UserType } from 'constants/enum';

export interface ILoginParams {
  username: string;
  password: string;
}

export interface IUserInfo {
  userName: string;
  userType: UserType;
}

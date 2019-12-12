import { UserType } from 'constants/enum';

export interface ILoginParams {
  email: string;
  password: string;
}

export interface IUserInfo {
  userName: string;
  userType: UserType;
}

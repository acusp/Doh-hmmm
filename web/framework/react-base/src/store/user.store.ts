import { observable, action, runInAction } from 'mobx';
import { IUserInfo, ILoginParams } from 'interface/user.interface';
import { http as request } from 'utils/http';

export class UserStore {
  @observable
  public userInfo: IUserInfo | null = null;

  @action
  public login = (params: ILoginParams) => {
    return request
      .post('/login', params)
      .then((res: any) => {
        runInAction(() => {
          this.userInfo = {
            userName: params.email,
            userType: res.data.user_type,
          };
        });
        localStorage.setItem('token', res.data.token);
        return Promise.resolve({ success: true, type: res.data.user_type });
      })
      .catch(res => {
        return Promise.resolve({ success: false });
      });
  };

  @action
  public logout = () => {
    this.userInfo = null;
    localStorage.removeItem('token');
  };
}

export const userStore = new UserStore();

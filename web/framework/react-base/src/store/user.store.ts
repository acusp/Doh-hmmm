import { observable, action, runInAction } from 'mobx';
import { IUserInfo, ILoginParams } from 'interface/user.interface';
import { http as request, http } from 'utils/http';
import { encrypt } from 'utils/tool';

export class UserStore {
  @observable
  public userInfo: IUserInfo | null = null;

  @action
  public login = (params: ILoginParams) => {
    params.password = encrypt(params.password);
    // console.log(params);

    return request
      .post('/login', params)
      .then((res: any) => {
        // console.log('res(then): ', res)
        runInAction(() => {
          this.userInfo = {
            userName: params.username,
            userType: res.data.user_type
          };
        });
        localStorage.setItem('token', res.data.token);
        return Promise.resolve({ success: true, type: res.data.user_type });
      })
      .catch(res => {
        // console.log('res(catch): ', res)
        Message.error(res ? res.data.message : 'Login failed: unknow error');
        return Promise.resolve({ success: false });
      });
  };

  @action
  public fetchUserInfo = async () => {
    try {
      const { data } = await http.get('/user/info');
      runInAction(() => {
        // console.log(data);
        this.userInfo = {
          userName: data.username,
          userType: data.user_type,
          userStatus: data.user_status
        };
      });
      return this.userInfo;
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.userInfo = null;
      });
      return null;
    }
  };

  @action
  public logout = () => {
    this.userInfo = null;
    localStorage.removeItem('token');
  };
}

export const userStore = new UserStore();
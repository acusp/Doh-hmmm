import { http } from 'utils/http';
import { POST } from 'utils/decorators/http';

class UserApi {
  @POST({
    url: '/api/login'
  })
  async login(opt?: any) {
    const res = await http(opt);
    return Promise.resolve(res.data);
  }
}

export const userApi = new UserApi();

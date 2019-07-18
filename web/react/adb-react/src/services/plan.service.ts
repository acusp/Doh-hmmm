import { http } from 'utils/http';
import { POST, GET } from 'utils/decorators/http';

class PlanApi {
  @GET({
    url: 'plan'
  })
  async getPlanList(opt?: any) {
    const res = await http(opt);
    return Promise.resolve(res.data);
  }

  @POST({
    url: 'plan'
  })
  async postPlanCap(opt?: any) {
    const res = await http(opt);
    return Promise.resolve(res.data);
  }
}

export const planApi = new PlanApi();

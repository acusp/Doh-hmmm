import { observable } from 'mobx';
import { planApi }  from 'services/plan.services';

interface PlanList {
  plan_uuid: string;
  cap: number;
}

class PlanStore {
  @observable
  planList: PlanList[] = [];
}

export const planStore = new PlanStore();
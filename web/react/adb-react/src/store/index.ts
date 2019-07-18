import { userStore } from './user.store';
import { planStore } from './plan.store';

export const store = {
  userStore,
  planStore,
};

export type IStore = typeof store;

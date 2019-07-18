import { observable } from 'mobx';

class UserStore {
  @observable
  info = '';
}

export const userStore = new UserStore();

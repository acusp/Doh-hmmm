// users.js
import axios from 'axios';

class Users {
  static all() {
    return axios.get('https://randomuser.me/api/').then(resp => resp.data);
  }
}

export default Users;

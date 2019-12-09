import axios from 'axios';
import { appConfig } from 'config/app.config';
import { userStore } from 'store/user.store';

const baseURL = `${process.env.REACT_APP_BASE || appConfig.api}/v1`;
const request = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  transformRequest: [
    data => {
      if (data instanceof FormData) {
        return data;
      }
      return JSON.stringify(data);
    }
  ]
  // withCredentials: true
  // xsrfCookieName: ''
  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  // transformResponse: [
  //   data => {
  //     // Do whatever you want to transform the data
  //     const res = JSON.parse(data);
  //     return res;
  //   },
  // ],
});

request.interceptors.request.use(
  config => {
    // token
    config.headers.Token = `${localStorage.getItem('token') || ''}`;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error && error.response) {
      const status = error.response.status;
      // const data = error.response.data;
      const redirectToLogin = () => {
        userStore.logout();
        window.location.replace(window.location.origin + '/#/login');
      };

      if (status === 500) {
        return Promise.reject(error.response);
      }

      if ([401, 401.1, 332].includes(status)) {
        // cookie失效，登录失效，返回登录界面
        redirectToLogin();
      }
    }

    return Promise.reject(error.response);
  }
);

export const http = request;

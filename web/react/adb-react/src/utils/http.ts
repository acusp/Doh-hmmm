import axios from 'axios';

const baseURL = process.env.ADBOOSTER_URL ||
  'http://adbooster-fb-api.5iig4gapvf.us-west-2.elasticbeanstalk.com/v1';

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
  ],
  withCredentials: true
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

// before request hook
request.interceptors.request.use(config => config, err => Promise.reject(err));

// receive response hook
request.interceptors.response.use(
  response => response,
  error => {
    if (error && error.response && error.response.status === 401) {
      window.location.replace(window.location.origin + '/#/login');
      // if (AppToaster.getToasts().length === 0) {
      //   AppToaster.show({
      //     intent: Intent.WARNING,
      //     message: "Login expired or you don't have access to this page."
      //   });
      // }
    }
    return Promise.reject(error.response);
  }
);

export const http = request;

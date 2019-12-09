type ENV = 'dev' | 'test' | 'prod';

const Env: ENV = process.env.REACT_APP_BASE as ENV || 'dev';

// api
const api = {
  dev: '',
  test: '',
  prod: ''
};

export const appConfig = {
  api: api[Env]
};
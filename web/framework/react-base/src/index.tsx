import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';
import { Router as App } from './pages/router';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { store } from './store';

configure({ enforceActions: 'always' });

if (process.env.NODE_ENV === 'production') {
  // console.log = function() {};
}

const render = (Component: React.ComponentClass<any>) => {
  ReactDOM.render(
    <Provider {...store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
};

// render
render(App);
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

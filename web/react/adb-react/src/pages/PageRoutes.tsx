import * as React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import loadable from 'react-loadable';
import { PrivateRoute } from 'components/HOC/PrivateRoute';
import { BasicLayout } from 'components/BasicLayout';
import PlanList from './PlanList';

interface Props {}

export class App extends React.Component<Props> {
  public Login = loadable({
    loader: () => import(/* webpackChunkName: "login" */ 'pages/Login/index'),
    loading: () => null
  });

  public privateRouteRender = () => (
    <BasicLayout>
      <Switch>
        <Route
          component={() => {
            // return <div>router</div>;
            return <Route exact path="/planlist" component={PlanList} />
          }}
        />
      </Switch>
    </BasicLayout>
  );

  public render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/login" component={this.Login} /> */}
          {/* <Route path="/" exact render={() => <Redirect to={'/login'} />} /> */}
          <Route path="/" exact render={() => <Redirect to={'/planlist'} />} />
          <PrivateRoute path="/" component={this.privateRouteRender} />
        </Switch>
      </Router>
    );
  }
}

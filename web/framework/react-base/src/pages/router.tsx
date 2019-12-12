import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeLoadableComponent, dynamicImport } from 'utils/tool';
import { IRouterComponent, IRouter } from 'interface/router.interface';
import { inject, observer } from 'mobx-react';
import { UserStore } from 'store/user.store';
import { CustomHashRouter } from 'components/HOC/CustomRouter';
import { PrivateRoute } from 'components/HOC/PrivateRoute';
import { BasicLayout } from 'components/layout/BasicLayout';

export const routerLoadableComponents = {
  Home: makeLoadableComponent(() => import('pages/Home')),
};

type RouterLoadableComponentsTypeKeys = keyof typeof routerLoadableComponents;

const router: IRouter<RouterLoadableComponentsTypeKeys>[] = [
  {
    key: '1',
    title: 'Home',
    path: '/home',
    component: 'Home',
  },
];

interface Props {
  userStore?: UserStore;
}

@inject('userStore')
@observer
export class Router extends React.Component<Props> implements IRouterComponent<RouterLoadableComponentsTypeKeys> {
  readonly router = router;
  readonly routerComponents = routerLoadableComponents;

  public Login = dynamicImport(() => import('pages/Login'));

  public handleLoginPermission = async () => {
    return true;
  };

  public routerRenderer = () => {
    this.router.map(i =>
      i.path && i.component ? (
        <Route key={i.key} exact={i.exact} path={i.path} component={this.routerComponents[i.component]} />
      ) : null
    );
  }

  public redirectRenderer = () => <Route component={() => <h1>404</h1>} />;

  public render() {
    const { userInfo, logout } = this.props.userStore!;

    return (
      <CustomHashRouter>
        <BasicLayout menus={this.router} userInfo={userInfo} logout={logout}>
          <Switch>
            <Route exact path="/login" component={this.Login} />
            <Route
              path="/"
              render={() => (
                <PrivateRoute component={this.routerRenderer} handlePermission={this.handleLoginPermission} />
              )}
            />
            <Route path="**" render={() => <Redirect to="/" />} />
          </Switch>
        </BasicLayout>
      </CustomHashRouter>
    );
  }
}

import * as React from 'react';
import { Route } from 'react-router-dom';
import { ComponentExtends } from 'utils/extends';
import { withRouterProps } from 'components/HOC/WithRouterProps';

interface IPrivateRouteProps extends IClassName, IWithRouterProps {
  component: any;
  path: string;
  exact?: boolean;
  render?: () => any;
}

@withRouterProps
export class PrivateRoute extends ComponentExtends<IPrivateRouteProps> {
  public backLogin = () => {
    this.$message.error('logon failure');
    this.props.history!.push('/login');
  };

  public componentDidMount() {}

  public render() {
    const { component: Component, ...rest } = this.props;
    return <Route {...rest} render={() => <Component />} />;
  }
}

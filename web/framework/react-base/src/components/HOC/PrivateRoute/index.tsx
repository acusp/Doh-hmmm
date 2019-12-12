import * as React from 'react';
import { Route } from 'react-router-dom';
import { ComponentExtends } from 'utils/extends';
import { withRouterProps } from 'components/HOC/WithRouterProps';

interface Props extends IClassName, IWithRouterProps {
  component: any;
  path?: string;
  exact?: boolean;
  render?: () => any;
  handlePermission?: () => boolean | Promise<boolean>;
}

@withRouterProps
export class PrivateRoute extends ComponentExtends<Props> {
  public backLogin = () => {
    this.props.history!.push('/login');
  };

  public async componentDidMount() {
    const { handlePermission } = this.props;
    if (handlePermission) {
      const r = await handlePermission();

      if (!r) {
        this.backLogin();
        return;
      }
    }
  }

  public render() {
    const { component: Component, ...rest } = this.props;
    return <Route {...rest} render={() => <Component />} />;
  }
}

import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export const withRouterProps: ClassDecorator = (Component: any): any => {
  class C extends React.Component<RouteComponentProps<any>, any> {
    public render(): JSX.Element {
      return <Component {...this.props} />;
    }
  }
  return withRouter(C);
};

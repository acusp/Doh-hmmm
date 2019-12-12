import React from 'react';
import { LayoutHeader } from './Header';
import { HEADER_HEIGHT } from 'constants/styles';
import { withRouterProps } from 'components/HOC/WithRouterProps';
import { inject, observer } from 'mobx-react';
import { IStore } from 'store';
import { RouterStore } from 'store/router.store';
import { IRouter } from 'interface/router.interface';
import { computed } from 'mobx';
import { IUserInfo } from 'interface/user.interface';
import { Box } from '@material-ui/core';

interface Props extends IWithRouterProps {
  routerStore?: RouterStore;
  menus: IRouter[];
  userInfo: IUserInfo | null;
  logout: () => void;
}

@withRouterProps
@inject((store: IStore) => {
  const { routerStore, userStore } = store;
  return {
    routerStore,
    userStore
  };
})
@observer
export class BasicLayout extends React.Component<Props> {
  public state = {
    isOpen: true
  };

  @computed
  get selectedItemKey(): string | undefined {
    const { menus, routerStore } = this.props;
    const router = routerStore!.currentRouter;

    if (menus && router) {
      const r = menus.find(i => router.pathname === i.path);
      return r ? r.key : undefined;
    }

    return undefined;
  }

  public getSnapshotBeforeUpdate() {
    const { location, routerStore } = this.props;
    routerStore!.updateCurrentRouter(location);
    return true;
  }

  public componentDidUpdate() {}

  public componentDidMount() {
    const { location, routerStore } = this.props;
    routerStore!.updateCurrentRouter(location);
  }

  public setOpen = (params: boolean) => () => {
    this.setState({
      isOpen: params
    });
  };

  @computed
  public get pathname() {
    const {
      currentRouter: { pathname }
    } = this.props.routerStore!;
    return pathname;
  }

  public render() {
    const { children, userInfo, logout } = this.props;
    // const { isOpen } = this.state;
    return (
      <>
        <LayoutHeader hanleMenu={() => {}} userInfo={userInfo} logout={logout} />

        <Box display="flex" flex="1">
          <main
            style={{
              minHeight: `calc(100vh - ${HEADER_HEIGHT})`,
              marginTop: HEADER_HEIGHT,
              width: '100%',
              flex: 1,
              overflowX: 'auto'
            }}
          >
            <div style={{ backgroundColor: '#fff', height: '100%', overflowX: 'auto' }}>{children}</div>
          </main>
        </Box>
      </>
    );
  }
}

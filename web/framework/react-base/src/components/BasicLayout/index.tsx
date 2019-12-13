import React from 'react';
import { Layout, Menu } from 'antd';
import { IUserInfo } from 'interface/user.interface'
import { IRouter } from 'interface/router.interface'

const { Header, Content } = Layout;

interface Props {
  menus: IRouter[];
  userInfo: IUserInfo | null;
  logout: () => void;
}

export class BasicLayout extends React.Component<Props> {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            Content
          </div>
        </Content>
      </Layout>
    )
  }
}

import * as React from 'react';
import { Layout } from 'antd';
import styles from './index.module.css';
// import { LeftMenu } from './LeftMenu';

const { Header, Content } = Layout;

export const BasicLayout: React.SFC = ({ children }) => (
  <Layout>
    <Header className={styles.header}>
      <div className="logo" />
    </Header>
    <Content style={{ padding: '0 100px' }}>
      <Layout style={{ margin: '32px 0 70px', background: '#fff' }}>
        {/* <Sider width={200} style={{ background: '#fff' }}>
          <LeftMenu />
        </Sider> */}
        <Content style={{ padding: '32px', minHeight: 280 }}>
          <div style={{ height: document.body.clientHeight - 197 }}>{children}</div>
        </Content>
      </Layout>
    </Content>
    {/* <Footer style={{ textAlign: 'center' }}></Footer> */}
  </Layout>
);

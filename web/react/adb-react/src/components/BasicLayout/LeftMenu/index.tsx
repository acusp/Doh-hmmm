import * as React from 'react';
import { Menu, Icon } from 'antd';
import { withRouterProps } from 'components/HOC/WithRouterProps';
import menu from 'config/menu.config';

const { SubMenu } = Menu;

interface Props extends IWithRouterProps {}

@withRouterProps
export class LeftMenu extends React.Component<Props> {
  public renderLeftMenu = () => {
    const list = menu.map((v, index) => (
      <SubMenu
        key={String(index)}
        title={
          <span>
            <Icon type={v.icon} />
            {v.name}
          </span>
        }
      >
        {v.routes.map((i, index) => (
          <Menu.Item key={i.path}>{i.name}</Menu.Item>
        ))}
      </SubMenu>
    ));

    return list;
  };

  public handleClickItem = (value: any) => {
    const { history } = this.props;
    history.push(value.key);
  };

  public render() {
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
        onClick={this.handleClickItem}
      >
        {this.renderLeftMenu()}
      </Menu>
    );
  }
}

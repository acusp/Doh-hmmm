import React, { Component, Fragment } from 'react';
import { Table } from 'antd';
import { inject, observer } from 'mobx-react'
import PlanStore from 'store/planStore';
import styles from './index.module.css';

interface Props {
  planStore?: PlanStore;
}

@inject('planStore')
@observer
class PlanList extends Component<Props> {

  componentDidMount() {

  }

  render() {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];

    return (
      <Fragment>
        <div className={styles.title}>
          Plan List
        </div>
        <Table dataSource={dataSource} columns={columns} />;
      </Fragment>
    )
  }
}

export default PlanList;
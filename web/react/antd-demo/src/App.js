import React, { Component } from 'react';
import { LocaleProvider, DatePicker, message, Alert } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.css';
import './index.css';

class App extends Component {
  state = {
    date: null,
  };

  handleChange = date => {
    message.info(`您选择的日期是: ${date.format('YYYY-MM-DD')}`);
    this.setState({ date });
  };

  render() {
    const { date } = this.state;

    return (
      <LocaleProvider locale={zhCN}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={this.handleChange} />
          <div style={{ marginTop: 20 }}>
            <Alert message={`当前日期：${date ? date.format("YYYY-MM-DD") : "未选择"}`} type='success' />
          </div>
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
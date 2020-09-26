import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {message,Button} from 'antd';

export default class App extends Component {

  handleClick=()=>{
    message.success('成功了',0.1);
  }

  render() {
    return (
      <Button type="primary" onClick={this.handleClick}>来，点我</Button>
      )
  }


}



//"use strict"

import React, { Component } from 'react';
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: 'My App',
    };
  }

  render() {
    return <AppContent userInfoo={this.state.userInfo} />;
  }
}
export default App;

import React, { Component } from 'react';
import Header from './Components/header.js';
import Display from './Components/display.js';
import Buttons from './Components/buttons.js';

class App extends Component {
  render() {
    return(
      <div>
        {this.renderHeader()}
        {this.renderDisplay()}
      </div>
    );
  }

  renderHeader(){
    return (<div>
      <Header
        height = {'20%'}
        width = {'100%'}
        bg_color = {'#F4F4F4'}
        fontsize = {75}
        text={"Welcome to Scel"}
        fontcolor={'#C0B283'}
      />
    </div>);

  }

  renderDisplay(){
    return (<div>
      <Display
        height = {'200px'}
        width = {'100%'}
        bg_color = {'#DCD0C0'}
      />
    </div>);
  }
}

export default App;

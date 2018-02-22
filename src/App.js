import React, { Component } from 'react';


class App extends Component {
  render() {

    return(
      <div>
    {this.renderHeader()}
    {this.renderDisplay()}
    {this.renderButton()}
    <h1>Hello, World</h1>
    </div>
  );
  }

renderHeader(){
    return (<div></div>);

  }

renderDisplay(){
    return (<div></div>);
  }

renderButton(){
    return (<div></div>);

  }
}

export default App;

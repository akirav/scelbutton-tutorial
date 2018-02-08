import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
}

handleClick(){
  this.setState(prevState => {
    return {count: prevState.count + 1}
  });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to SCEL</h1>
        </header>
        <p className="App-intro">
        </p>

        <button onClick={this.handleClick.bind(this)}>Button 1 </button>

        <div>
          Button 1: {this.state.count} clicks
        </div>



      </div>



    );
  }
}

export default App;

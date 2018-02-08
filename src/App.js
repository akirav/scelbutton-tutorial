import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      count1: 0
    }
}

handleClick(){
  this.setState(prevState => {
    return {count: prevState.count + 1}
  });
}

handleClick2(){
  this.setState(prevState => {
    return {count1: prevState.count1 + 1}
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
        <button onClick={this.handleClick2.bind(this)}>Button 2 </button>

        <div>
          Button 1: {this.state.count} clicks
        </div>

        <div>
          Button 2: {this.state.count1} clicks
        </div>


      </div>



    );
  }
}

export default App;

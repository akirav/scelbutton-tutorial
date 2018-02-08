import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      count1: 0,
      h1: "A band of colors, as seen in a rainbow",
      h2: "The entire range of wavelengths of electromagnetic radiation.",
      h3: "Cable Company",
      h4: "Kyle Chan's Company",
      display: "Choose a Hint above",
    }
}

handleClick1(){
  this.setState(prevState => {
    return {count: prevState.count + 1}
  });
}

handleClick2(){
  this.setState(prevState => {
    return {count1: prevState.count1 + 1}
  });
}

handlehint1(){
  this.setState(prevState => {
    return {display: this.state.h1}
  });
}

handlehint2(){
  this.setState(prevState => {
    return {display: this.state.h2}
  });
}

handlehint3(){
  this.setState(prevState => {
    return {display: this.state.h3}
  });
}

handlehint4(){
  this.setState(prevState => {
    return {display: this.state.h4}
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

        <h1 className="Big" >Part 1: Button Counter</h1>


        <button onClick={this.handleClick1.bind(this)}>Button 1 </button>
        <button onClick={this.handleClick2.bind(this)}>Button 2 </button>

        <div>
          Button 1: {this.state.count} clicks
        </div>

        <div>
          Button 2: {this.state.count1} clicks
        </div>

      <h1 className ="Big">Part 2: Guess the word? 🤔</h1>

        <div>
          <button onClick={this.handlehint1.bind(this)}>Hint 1</button>
          <button onClick={this.handlehint2.bind(this)}>Hint 2</button>
          <button onClick={this.handlehint3.bind(this)}>Hint 3</button>
          <button onClick={this.handlehint4.bind(this)}>Hint 4</button>
        </div>

        <header className = "Box">
          {this.state.display}.
        </header>


      </div>



    );
  }
}

export default App;

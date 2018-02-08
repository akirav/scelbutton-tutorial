import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      count1: 0,
      Def1: "A band of colors, as seen in a rainbow",
      Def2: "The entire range of wavelengths of electromagnetic radiation.",
      Def3: "Cable Company",
      Def4: ""
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
          <button onClick={this.handleClick1.bind(this)}>Hint 1</button>
          <button onClick={this.handleClick2.bind(this)}>Hint 2</button>
          <button onClick={this.handleClick1.bind(this)}>Hint 3</button>
          <button onClick={this.handleClick2.bind(this)}>Hint 4</button>
        </div>

        <header className = "Box">

        </header>

        <textarea> </textarea>

      </div>



    );
  }
}

export default App;

import React, { Component } from 'react';
import './buttons.css';

class Buttons extends Component {
  constructor(props){
    super(props);
    this.button1=this.props.click1;
    this.button2=this.props.click2;
    this.button3=this.props.click3;
    this.button4=this.props.click4;
  }
  render(){
    return(
      <div className="Middle">
      <button onClick={this.button1}>Button 1</button>
      <button onClick={this.button1}>Button 2</button>
      <button onClick={this.button1}>Button 3</button>
      <button onClick={this.button1}>Button 4</button>
      </div>
    )
  }
}
export default Buttons;

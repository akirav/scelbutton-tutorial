import React, { Component } from 'react';
import './buttons.css';

class Buttons extends Component {
  constructor(props){
    super(props);
    this.button1=this.props.onclick1;
    this.button2=this.props.onclick2;

  }
  render(){
    return(
      <div className="Middle">
      <button onClick={this.button1}>Button 1</button>
      <button onClick={this.button2}>Button 2</button>
    </div>
    )
  }
}
export default Buttons;

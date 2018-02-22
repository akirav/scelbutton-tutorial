import React, { Component } from 'react';

class Display extends Component {
  constructor(props){
    super(props);
    this.h = this.props.height;
    this.w = this.props.width;
    this.bg_color = this.props.bg_color;
    this.text ='Images';
  }


  render(){
    return(
      <div
        style={{
          marginHeight: this.h,
          width: this.w,
          backgroundColor: this.bg_color,
          fontSize: 50,
        }}
        >
        {this.text}
      </div>
    )
  }
}
export default Display;

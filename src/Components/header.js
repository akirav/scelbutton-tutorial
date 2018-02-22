import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.h = this.props.height;
    this.w = this.props.width;
    this.bg_color = this.props.bg_color;
    this.fontsize = this.props.fontsize;
    this.text = this.props.text;
    this.fontcolor = this.props.fontcolor;
  }


  render(){
    return(
      <div
        style={{
          height: this.h,
          width: this.w,
          backgroundColor: this.bg_color,
          fontSize: this.fontsize,
          textAlign: 'center',
          color: this.fontcolor
        }}
        >
        {this.text}
      </div>
    )
  }
}
export default Header;

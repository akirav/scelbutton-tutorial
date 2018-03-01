import React, { Component } from 'react';
import Button from './buttons.js';

class Display extends Component {
  constructor(props){
    super(props);
    this.h = this.props.height;
    this.w = this.props.width;
    this.bg_color = this.props.bg_color;
    this.state = {
      image: "https://chinesenewyear2018.com/assets/images/chinese-new-year-2018.jpg",
      image1:"http://onlinespor1.tv/wp-content/uploads/2017/10/fb_icon_325x325.png",
      image2:"https://www.w3schools.com/howto/img_fjords.jpg",
    };
  }

  handleClick1(){
    this.setState(prevState => {
      return {image: this.state.image1}
    });
  }

  handleClick2(){
    this.setState(prevState => {
      return {image: this.state.image2}
    });
  }

  render(){
    return(
      <div style={{
          height: this.h,
          width: this.w,
          backgroundColor: this.bg_color,
          border: '1px solid #000',
        }}
        >
          <img src={this.state.image} style={{
            height: '100px',
            position: 'centered',
          }} alt="current state"/>
          {this.renderButton()}
        </div>
      )
    }

    renderButton(){
      return(
        <div>
          <Button
            onclick1={this.handleClick1.bind(this)}
            onclick2={this.handleClick2.bind(this)}
          />
        </div>
      )
    }

  }
  export default Display;

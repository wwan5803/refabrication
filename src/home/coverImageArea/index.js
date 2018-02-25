import React, { Component } from "react";
import './coverImage.css'
import imgUrl from './images/coverImage.jpg'
import {
    MobileScreen,
    PadScreen,
    LaptopScreen,
    DesktopScreen
} from '../../utils/screenSizeHelper';
export default class CoverImage extends Component {

  render() {
    let coverWidth;
    let titleFontSize;
    let contentFontSize;
    if(MobileScreen()){
        coverWidth = 300;
        titleFontSize = 24;
        contentFontSize = 18;
    }else if(PadScreen()){
        coverWidth = 500;
        titleFontSize = 32;
        contentFontSize = 22;
    }
    else if(LaptopScreen()){
        coverWidth = 700;
        titleFontSize = 42;
        contentFontSize = 26;
    }
    else if(DesktopScreen()){
        coverWidth = 900;
        titleFontSize = 50;
        contentFontSize = 30;
    }
    return <div className="container-background" style={{height: window.innerHeight * 0.9, backgroundImage: `url(${imgUrl})`}}>
      <div style={{width: coverWidth}} className="cover-area">
        <div style={{fontSize: titleFontSize}} className="cover-title">We co-design and deliver web, mobile and online solutions from idea to business.</div>
        <div style={{fontSize: contentFontSize}} className="cover-content">This is everything from user research, customer experience & design to tech delivery and business models.</div>
      </div>
    </div>;
  }
}

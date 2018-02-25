import React, {Component} from "react";
import './card.css';
import {
    MobileScreen,
    PadScreen,
    LaptopScreen,
    DesktopScreen
} from '../../utils/screenSizeHelper';

export default class MyCard extends Component {

    render() {
        let cardWidth;
        let cardBottomMargin = 0;
        if(MobileScreen()){
            cardWidth = 310;
            cardBottomMargin = 15;
        }else if(PadScreen()){
            cardWidth = 350;
            cardBottomMargin = 15;
        }else if(LaptopScreen()){
            cardWidth = 450;
        }else if(DesktopScreen()){
            cardWidth = 550
        }
        return <div style={{width: cardWidth, marginBottom: cardBottomMargin}} className="card-container">
            <div style={{height: 450, width: cardWidth}} className="card">
                <div className="side"><img src={`http://via.placeholder.com/${cardWidth}x450`} alt="image" /></div>
                <div className="side back">{this.props.children}</div>
            </div>
        </div>




    }
}

{/*<div style={{height: 450, width: cardWidth, backgroundImage: `url(http://via.placeholder.com/${cardWidth}x450)`}}>*/}
    {/*<div className="card-cover" style={{ width: cardWidth, zIndex: 10, background: 'red', opacity: 0.5}}>*/}
    {/*</div>*/}
{/*</div>;*/}
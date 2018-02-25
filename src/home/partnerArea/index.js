import React, {Component} from "react";
import './partner.css'
import Slider from 'react-slick'
import {
    MobileScreen,
    PadScreen,
    LaptopScreen,
    DesktopScreen
} from '../../utils/screenSizeHelper';

const Title = ({children}) => {
    return <div className="partner-title">{children}</div>
}

const Content = ({children}) => {
    let partnerContentWidth;
    if(MobileScreen()){
        partnerContentWidth = '100%'
    }else if(PadScreen()){
        partnerContentWidth = '100%'
    }else if(LaptopScreen()){
        partnerContentWidth = '50%'
    }else if(DesktopScreen()){
        partnerContentWidth = '50%'
    }
    return <div style={{width: partnerContentWidth}} className="partner-content">{children}</div>
}

const Logos = ({children}) => {
    return <div>{children}</div>
}

// const Logo = ({children}) => {
//     return <div><img /></div>
// }

export default class Partner extends Component {

    render() {
        const settings = {
            className: 'center',
            infinite: true,
            centerPadding: '10px',
            swipeToSlide: true,
            autoplay: true,
            afterChange: function (index) {
                console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
            },
            responsive: [

                {
                    breakpoint: 768, settings: {
                    slidesToShow: 1,
                }
                },
                {
                    breakpoint: 1420, settings: {
                    slidesToShow: 2
                }
                }
                ,
                {
                    breakpoint: 1800, settings: {
                    slidesToShow: 3
                }
                }
            ]
        }


        return <div className="partner">
            <Title>We play well with others.
            </Title>
            <Content>Upgrowth loves to collaborate with internal teams or external specialists to get your project done,
                from co-design and ideation through to the final handover of the digital solution.
            </Content>
            <Logos><Slider {...settings}>
                <div><img src='http://placekitten.com/g/400/200'/></div>
                <div><img src='http://placekitten.com/g/400/200'/></div>
                <div><img src='http://placekitten.com/g/400/200'/></div>
                <div><img src='http://placekitten.com/g/400/200'/></div>
                <div><img src='http://placekitten.com/g/400/200'/></div>
                <div><img src='http://placekitten.com/g/400/200'/></div>
                <div><img src='http://placekitten.com/g/400/200'/></div>
                <div><img src='http://placekitten.com/g/400/200'/></div>
            </Slider>
            </Logos>
        </div>
    }
}

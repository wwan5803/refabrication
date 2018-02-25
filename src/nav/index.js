import React, {Component} from "react";
import "./nav.css";
import {PrimaryButton} from '../button';
import {Menu, Dropdown, Icon} from 'antd';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import {
    MobileScreen,
    PadScreen,
    LaptopScreen,
    DesktopScreen
} from '../utils/screenSizeHelper';

const smoothScroll = {
    timer: null,

    stop: function () {
        clearTimeout(this.timer);
    },

    scrollTo: function (id, callback) {
        var settings = {
            duration: 1000,
            easing: {
                outQuint: function (x, t, b, c, d) {
                    return c*((t=t/d-1)*t*t*t*t + 1) + b;
                }
            }
        };
        var percentage;
        var startTime;
        var node = document.getElementById(id);
        var nodeTop = node.offsetTop;
        var nodeHeight = node.offsetHeight;
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        var windowHeight = window.innerHeight
        var offset = window.pageYOffset;
        var delta = nodeTop - offset;
        var bottomScrollableY = height - windowHeight;
        var targetY = (bottomScrollableY < delta) ?
            bottomScrollableY - (height - nodeTop - nodeHeight + offset):
            delta;

        startTime = Date.now();
        percentage = 0;

        if (this.timer) {
            clearInterval(this.timer);
        }

        function step () {
            var yScroll;
            var elapsed = Date.now() - startTime;

            if (elapsed > settings.duration) {
                clearTimeout(this.timer);
            }

            percentage = elapsed / settings.duration;

            if (percentage > 1) {
                clearTimeout(this.timer);

                if (callback) {
                    callback();
                }
            } else {
                yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
                window.scrollTo(0, yScroll);
                this.timer = setTimeout(step, 10);
            }
        }

        this.timer = setTimeout(step, 10);
    }
};

export default class Nav extends Component {

    handleTopClick() {
        smoothScroll.scrollTo('contact');
    }

    fullScreenLayout(){
        return <div className="nav">
            <div className="logo">
                <a href='/'>
                    <img
                        style={{marginLeft: 30}}
                        src="https://www.upgrowth.com.au/static/media/text-logo.3a56559d.svg"
                    />
                </a>
            </div>
            <div className="links">
                <a className="link" href={`${process.env.PUBLIC_URL}/experience`}>Experience Design</a>
                <a className="link" href={`${process.env.PUBLIC_URL}/tech`}>Tech delivery</a>
                <a className="link" href={`${process.env.PUBLIC_URL}/business`}>Business design</a>
            </div>
            <div className="contact">
                <PrimaryButton onClick={this.handleTopClick}>Get in touch</PrimaryButton>
            </div>
        </div>
    }

    smallScreenLayout(){
        const menu = (
            <Menu style={{width: 180, marginTop: 10}}>
                <Menu.Item key="0">
                    <a className="link" href='/experience'>Experience Design</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a className="link" href='/tech'>Tech delivery</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a className="link" href='/business'>Business design</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3"><PrimaryButton onClick={this.handleTopClick}>Get in touch</PrimaryButton></Menu.Item>
            </Menu>
        );
        return <div className="mobile-nav">
            <div style={{marginLeft: 30}} className="mobile-logo">
                <a href='/'>
                    <img
                        style={{width: '100%', maxWidth: 350}}
                        src="https://www.upgrowth.com.au/static/media/text-logo.3a56559d.svg"
                    />
                </a>
            </div>

            <div className="mobile-dropdown">
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    <Icon style={{fontSize: 24, color: 'white'}} type="menu-fold" />
                </a>
            </Dropdown>
            </div>

            {/*<div className="links">*/}
                {/*<a className="link" href='/experience'>Experience Design</a>*/}
                {/*<a className="link" href='/tech'>Tech delivery</a>*/}
                {/*<a className="link" href='/business'>Business design</a>*/}
            {/*</div>*/}
            {/*<div className="contact">*/}
                {/*<PrimaryButton>Get in touch</PrimaryButton>*/}
            {/*</div>*/}
        </div>
    }

    render() {
        if(MobileScreen() || PadScreen()){
            return this.smallScreenLayout();
        }else{
            return this.fullScreenLayout();
        }
    }
}



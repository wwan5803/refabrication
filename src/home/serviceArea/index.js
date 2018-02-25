import React, {Component} from "react";
import './service.css'
import MyCard from './card'
import {Card, Col, Row, Icon} from 'antd';
import 'antd/dist/antd.css';
import {PrimaryButton} from '../../button';
import {Link} from "react-router-dom";
import {
    MobileScreen,
    PadScreen,
    LaptopScreen,
    DesktopScreen
} from '../../utils/screenSizeHelper';

const Content = ({children}) => {
    let leftMargin;
    if(MobileScreen()){
        leftMargin = 40
    }else if(PadScreen()){
        leftMargin = 40
    }else if(LaptopScreen()){
        leftMargin = 80
    }else if(DesktopScreen()){
        leftMargin = 120
    }
    return <div style={{marginLeft: leftMargin}} className="service-content"><span className="icon"><Icon type="check" style={{
        color: 'green',
        fontWeight: 'bold'
    }}/></span>{children}</div>
}


export default class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCover: true
        }
    }

    render() {
        return <div style={{background: 'white', padding: '30px'}}>
            <div className="service-title">PICK UP ONE OF OUR SERVICE</div>
            <Row gutter={16}>
                <Col xs={{span: 24}} md={{span: 12}} lg={{span: 8}}>
                    <MyCard>
                        <div className="title">Experience design</div>
                        <Content>Concept validation</Content>
                        <Content>Ideation</Content>
                        <Content>User research</Content>
                        <Content>Experience Design</Content>
                        <Content>User Experience (UX & CX)</Content>
                        <Content>UI & Visual Design</Content>
                        <div className="action"><Link to='/experience'><PrimaryButton>Learn more</PrimaryButton></Link></div>
                    </MyCard>
                </Col>
                <Col xs={{span: 24}} md={{span: 12}} lg={{span: 8}}>
                    <MyCard>
                        <div className="title">Tech delivery</div>
                        <Content>Online platforms
                        </Content>
                        <Content>Responsive web apps</Content>
                        <Content>Mobile apps - iOS & Android
                        </Content>
                        <Content>APIs & microservices
                        </Content>
                        <Content>Cloud based scale (AWS, GCP)
                        </Content>
                        <Content>QA & automated tests
                        </Content>
                        <div className="action"><Link to='/tech'><PrimaryButton>Learn more</PrimaryButton></Link></div>
                    </MyCard>
                </Col>
                <Col xs={{span: 24}} md={{span: 12}} lg={{span: 8}}>
                    <MyCard>
                        <div className="title">Business design</div>
                        <Content>Revenue & growth modelling
                        </Content>
                        <Content>Customer acquisition
                        </Content>
                        <Content>Product management
                        </Content>
                        <Content>Product launches & trial
                        </Content>
                        <Content>Growth hacking
                        </Content>
                        <Content>Behavioural analysis</Content>
                        <div className="action"><Link to='/business'><PrimaryButton>Learn more</PrimaryButton></Link></div>
                    </MyCard>
                </Col>
            </Row>
        </div>


    }
}

import React, {Component} from "react";
import './home.css'
import CoverImage from './coverImageArea';
import Service from './serviceArea';
import Partner from './partnerArea';

export default class Home extends Component {
    render() {
        return <div className="home">
            <CoverImage/>
            <Service/>
            <Partner/>
        </div>
    }
}

import React, {Component} from "react";
import './button.css'
import {Button, Col, Row, Icon} from 'antd';
import 'antd/dist/antd.css';

export const PrimaryButton = ({children, onClick}) => {
    return <Button type="primary" onClick={onClick}>{children}</Button>
}



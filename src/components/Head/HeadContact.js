import React from 'react';
import {Col, Row} from "antd";
import {Phone, SocialNetwork} from "../ContactLinks";

const HeadContact = () => {
    return (
        <Row >
            <Col className="center-container" sm={24} md={12} lg={12}>
                <Phone/>
            </Col>
            <br/>
            <br/>
            <br/>
            <Col className="center-container" sm={24} md={12} lg={12}>
                <SocialNetwork/>
            </Col>
        </Row>
    );
};

export default HeadContact;
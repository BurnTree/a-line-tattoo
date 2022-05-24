import React from 'react';
import {Col, Row} from "antd";
import {Phone, SocialNetwork} from "../ContactLinks";

const HeadContact = () => {
    return (
        <Row >
            <Col className="center-container" xs={24} sm={24} md={24} lg={12}>
                <Phone/>
            </Col>
            <Col className="center-container" xs={24} sm={24} md={24} lg={12}>
                <SocialNetwork/>
            </Col>
        </Row>
    );
};

export default HeadContact;
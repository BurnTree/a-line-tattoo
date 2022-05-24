import React from 'react';
import {Col, Row} from "antd";
import "./contact.css"
import {Phone, SocialNetwork} from "../ContactLinks";

const Contact = () => {
    return (
        <div className="contact">
            <Row>
                <Col className="center-container" sm={24} md={12} lg={12}>
                    <div className="center-container">
                        <p>Для связи:</p>
                        <Phone/>
                    </div>
                </Col>
                <Col className="center-container" sm={24} md={12} lg={12}>
                    <p>Или через соцсети:</p>
                    <SocialNetwork/>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
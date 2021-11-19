import React from 'react';
import {Col, Row} from "antd";
import avatar from "../../assets/bogd.jpg"
import "./about.css"

const About = () => (
    <div className="about">
        <Row>
            <Col lg={12}>
                <div className="center-container">
                    <img alt="master" width={400} src={avatar}/>
                </div>
            </Col>
            <Col lg={12}>
                <div className="about-text">
                    <h2>О мастере</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sit id in nunc, velit interdum
                    adipiscing. Уlit. Consectetur sit id in nunc, velit interdum adipiscing.
                </div>
            </Col>
        </Row>
    </div>
)

export default About;
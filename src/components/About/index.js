import React from 'react';
import {Col, Row} from "antd";
import avatar from "../../assets/tatoo-master.jpg"
import "./about.css"

const About = () => {
    const width = window.innerWidth;
    return <div className="about">
        <Row>
            <Col lg={12}>
                <div className="center-container">
                    <img alt="master" width={(width > 700) ? 400 : width/2} src={avatar}/>
                </div>
            </Col>
            <Col lg={12}>
                <div className="about-text">
                    <h2>О мастере</h2>
                    <p>Всем привет 👋</p>
                    <p>
                        Меня зовут Алена, я мастер тату с опытом работы 4 года.
                        Работаю во многих стилях. Ниже смотрите мои работы 😉
                    </p>
                </div>
            </Col>
        </Row>
    </div>
}

export default About;
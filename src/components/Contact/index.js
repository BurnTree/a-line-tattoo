import React from 'react';
import {Button, Col, Row} from "antd";
import InstagramIcon from "../icons/InstagramIcon";
import VkIcon from "../icons/VkIcon";
import TgIcon from "../icons/TgIcon";
import "./contact.css"
import UseMobileChecker from "../hooks/UseMobileChecker";

const Contact = () => {

    const isMobile = UseMobileChecker();
    return (
        <div className="contact">
            <Row>
                <Col className="center-container" sm={24} md={12} lg={12}>
                    <div className="center-container">
                        <p>Для связи:</p>
                        {(isMobile) ?
                            <p><a href="tel:+375257777777" style={{color: "inherit"}}>+375(25)7777777</a></p> :
                            <p>+375(25)7777777</p>
                        }
                    </div>
                </Col>
                <Col className="center-container" sm={24} md={12} lg={12}>
                        <p>Или через соцсети:</p>
                        <Button href="#" className="head-contacts-button" shape="circle"><InstagramIcon/></Button>
                        <Button href="#" className="head-contacts-button" shape="circle"><VkIcon/></Button>
                        <Button href="#" className="head-contacts-button" shape="circle"><TgIcon/></Button>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
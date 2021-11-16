import React from 'react';
import {Button, Col, Row} from "antd";
import VkIcon from "../icons/VkIcon";
import TgIcon from "../icons/TgIcon";
import InstagramIcon from "../icons/InstagramIcon";
import UseMobileChecker from "../hooks/UseMobileChecker";

const HeadContact = () => {
    const isMobile = UseMobileChecker();
    return (
        <>
            <Row>
                <Col className="center-container" sm={24} md={12} lg={12}>
                    {(isMobile) ?
                        <a href="tel:+375257777777" style={{color: "inherit"}}>+375(25)7777777</a> :
                        <div>+375(25)7777777</div>
                    }
                </Col>
                <br/>
                <br/>
                <br/>
                <Col className="center-container" sm={24} md={12} lg={12}>
                    <Button href="#" className="head-contacts-button" shape="circle"><InstagramIcon/></Button>
                    <Button href="#" className="head-contacts-button" shape="circle"><VkIcon/></Button>
                    <Button href="#" className="head-contacts-button" shape="circle"><TgIcon/></Button>
                </Col>
            </Row>
        </>
    );
};

export default HeadContact;
import React from 'react';
import {Button, Col, Row} from "antd";
import VkIcon from "../icons/VkIcon";
import TgIcon from "../icons/TgIcon";
import InstagramIcon from "../icons/InstagramIcon";

const HeadContact = () => {
    return (
        <>
            <Row>
                <Col className="center-container" sm={24} md={12} lg={12}>
                    <div href="tel:+37525777777">+375(25)7777777</div>
                </Col>
                <br/>
                <br/>
                <br/>
                <Col className="center-container" sm={24} md={12} lg={12} >
                    <Button href="#" className="head-contacts-button" shape="circle"><InstagramIcon/></Button>
                    <Button href="#" className="head-contacts-button" shape="circle"><VkIcon/></Button>
                    <Button href="#" className="head-contacts-button" shape="circle"><TgIcon/></Button>
                </Col>
            </Row>
        </>
    );
};

export default HeadContact;
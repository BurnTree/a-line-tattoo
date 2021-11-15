import React from 'react';
import {Button, Col, Grid, Row, Tooltip} from "antd";
import {InstagramOutlined} from "@ant-design/icons";
import VkIcon from "../icons/VkIcon";
import TgIcon from "../icons/TgIcon";
import InstagramIcon from "../icons/InstagramIcon";

const HeadContact = () => {
    return (
        <>
            <Row>
                <Col className="center-container" span={12}>+375(25)7777777</Col>
                <Col className="center-container" span={12}>
                    <Button href="#" className="head-contacts-button" shape="circle" ><InstagramIcon/></Button>
                    <Button href="#" className="head-contacts-button" shape="circle"><VkIcon/></Button>
                    <Button href="#" className="head-contacts-button" shape="circle" ><TgIcon/></Button>
                </Col>
            </Row>
        </>
    );
};

export default HeadContact;
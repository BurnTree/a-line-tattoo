import React from 'react';
import {Button} from "antd";
import {TgIcon, InstagramIcon, FbIcon} from '../icons'

const SocialNetwork = () => {
    return (
        <>
            <Button href="https://instagram.com/tattooelis?igshid=YmMyMTA2M2Y=" className="head-contacts-button" shape="circle"><InstagramIcon/></Button>
            <Button href="https://www.facebook.com/profile.php?id=100031890855698" className="head-contacts-button" shape="circle"><FbIcon/></Button>
            <Button href="tg://resolve?domain=Alenaelis1" className="head-contacts-button" shape="circle"><TgIcon/></Button>
        </>
    );
};

export default SocialNetwork;
import React from 'react';
import './head.css'
import Logo from "./Logo";
import CentralName from "./CentralName";
import HeadContact from "./HeadContact";

const Head = () => {
    return (
        <div className='head'>
            <Logo/>
            <CentralName/>
            <HeadContact/>
        </div>
    );
};

export default Head;
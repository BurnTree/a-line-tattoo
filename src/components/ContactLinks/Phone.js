import React from 'react';
import UseMobileChecker from "../hooks/UseMobileChecker";

const Phone = () => {
    const isMobile = UseMobileChecker();

    if (isMobile)
        return <p style={{fontSize: 30}}><a href="tel:+995599643818" style={{color: "inherit"}}>+995(59)9643818</a></p>
    else
        return <p style={{fontSize: 20}}>+995(59)9643818</p>
};

export default Phone;
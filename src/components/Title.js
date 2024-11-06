import React, { useEffect } from 'react';
import userImage from "../assets/images/user.jpg";
import {Contect, LogoImage} from "./TitleStyles";

const Title = ({ text, hideLogoOnMobile = false }) => {

    return (
        <Contect hideLogoOnMobile={hideLogoOnMobile}>
            <LogoImage src={userImage} alt='Logo' />
            {text}
        </Contect>
    );
};

export default Title;

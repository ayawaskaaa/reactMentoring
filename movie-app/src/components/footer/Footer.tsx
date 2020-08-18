import React from "react";
import useFooterStyles from "./footerStyles";

function Footer() {
    const footerClasses = useFooterStyles();
    return (
        <div className={footerClasses.footer}>
            <img alt='netflix logo'/>
        </div>
    );
}

export default Footer;
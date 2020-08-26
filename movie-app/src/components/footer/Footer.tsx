import React from "react";
import useFooterStyles from "./footerStyles";
import LogoText from "../common/LogoText";

function Footer() {
    const footerClasses = useFooterStyles();
    return (
        <div className={footerClasses.footer}>
            <LogoText />
        </div>
    );
}

export default Footer;
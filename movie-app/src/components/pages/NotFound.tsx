import React from 'react';
import {usePageStyles} from "../applicationStyles";
import {Link} from 'react-router-dom'
import LogoText from "../common/LogoText";
import Footer from "../footer/Footer";

function NotFound() {
    const classes = usePageStyles();

    return (
        <div className={classes.pageContainer}>
            <div className={classes.logoContainer}>
                <LogoText/>
            </div>
            <div className={classes.notFoundContainer}>
                <span className={classes.notFoundText}>Page Not Found</span>
                <div className={classes.pageNotFoundImg}/>
                <Link to="/home" className={classes.goHomeLink}>GO BACK TO HOME</Link>
            </div>
            <Footer/>
        </div>
    );
}

export default NotFound;
import React from "react";
import logoTextStyles from "./logoTextStyles";

function LogoText() {
    const classes = logoTextStyles();
    return (
        <div className={classes.logoContainer}>
            <span className={classes.logoTextBeginning}>netflix</span><span
            className={classes.logoTextEnd}>roulette</span>
        </div>
    );
}

export default LogoText;
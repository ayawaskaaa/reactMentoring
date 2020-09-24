import closeImage from '../../images/close.png';

import {createUseStyles} from "react-jss";

const fontSize = '17px'
const red = '#F65261';
const black = '#232323'
const buttonWidth = '200px';

const buttonStyles = createUseStyles({

    resetButton: {
        width: buttonWidth,
        height: '65px',
        backgroundColor: black,
        border: `1px solid ${red}`,
        opacity: '0.7',
        borderRadius: '5px',
        color: red,
        fontSize: fontSize,
        fontWeight: '400',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
    submitButton: {
        width: buttonWidth,
        height: '65px',
        backgroundColor: red,
        border: `none`,
        opacity: '0.7',
        borderRadius: '5px',
        color: "white",
        fontSize: fontSize,
        fontWeight: '400',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
    closeButton: {
        width: '25px',
        height: '25px',
        backgroundImage: `url(${closeImage})`,
        backgroundRepeat: 'no-repeat',
        border: 'none',
        borderRadius: '5px',
        backgroundSize: "contain",
        backgroundColor: '#232323',

    },
});

export default buttonStyles;
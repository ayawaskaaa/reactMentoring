import closeImage from '../../images/close.png';

import searchIcon from '../../images/searchIcon.png';

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
        borderRadius: '5px',
        color: red,
        fontSize: fontSize,
        fontWeight: '400',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        cursor: 'pointer',
    },
    submitButton: {
        width: buttonWidth,
        height: '65px',
        backgroundColor: red,
        border: `none`,
        borderRadius: '5px',
        color: "white",
        fontSize: fontSize,
        fontWeight: '400',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        cursor: 'pointer',
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
        cursor: 'pointer',

    },
    searchButtonStyle: {
        width: '25px',
        height: '25px',
        backgroundImage: `url(${searchIcon})`,
        backgroundRepeat: 'no-repeat',
        border: 'none',
        backgroundSize: "contain",
        background: 'none',
        cursor: 'pointer',

    }
});

export default buttonStyles;
import {createUseStyles} from "react-jss";

const fontSize = '17px'
const fontColor = '#F65261';
const logoTextStyles = createUseStyles({
    logoContainer: {
        height: '50px'
    },
    logoTextBeginning: {
        color: fontColor,
        fontSize: fontSize,
        fontWeight: '800',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
    logoTextEnd: {
        color: fontColor,
        fontSize: fontSize,
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
});

export default logoTextStyles;
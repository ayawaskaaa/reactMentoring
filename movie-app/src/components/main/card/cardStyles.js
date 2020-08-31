import {createUseStyles} from 'react-jss'
import pulp_fiction from "../../../images/pulp_fiction.jpg";


export const cardStyles = createUseStyles({
    cardImage: {
        width: '325px',
        height: '455px',
        backgroundImage: `url(${pulp_fiction})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: "flex",
        flexDirection: "row-reverse"
    },
    cardContainer: {
        width: '325px',
        height: '525px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: '40px'
    },
    cardDetailsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: '17px',
        fontWeight: '100',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        color: 'gray'
    },
    cardDetailsContent: {
        height: '50px',
        flex: '1',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

    },
    movieYearContainer: {
        border: '1px solid',
        width: '65px',
        height: '23px',
        borderRadius: '5px',
        fontSize: '15px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    movieDescription: {
        fontSize: '15px',
    },
    menuButtonContainer: {
        width: '70px',
        height: '70px',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    activeMenuButton: {
        //position: "relative",
        width: '45px',
        height: '45px',
        borderRadius: " 50%",
        border: 'none',
        padding: '0',
        cursor: 'pointer',
        outline: 'none',
        backgroundColor: '#343436',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    inactiveMenuButton: {
        display: "none"
    },
    menuDot: {
        width: '4px',
        height: '4px',
        borderRadius: " 50%",
        backgroundColor: "white",
        margin: '3px'
    }
});
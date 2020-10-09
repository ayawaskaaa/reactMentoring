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
        flexDirection: "row-reverse",
        background: 'none',
        cursor: 'pointer',
    },
    cardContainer: {
        width: '325px',
        height: '525px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: '40px',
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
        justifyContent: "center",

    },
    activeMenuButton: {
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
        justifyContent: "center",
        zIndex: 5,
        position: 'absolute'
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
    },
    popUpContainer: {
        width: '240px',
        height: '150px',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    cardActionPopUpContainer: {
        width: '220px',
        height: '125px',
        backgroundColor: '#232323',
        display: 'flex',
        flexDirection: "column",
        borderRadius: 4
    },
    popUpButton: {
        width: '100%',
        height: '25px',
        border: 'none',
        padding: '20px',
        cursor: 'pointer',
        outline: 'none',
        fontSize: '16px',
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        color: "white",
        backgroundColor: '#232323',
        display: "flex",
        alignItems: "center",

        justifyContent: "flex-start",
        "&:hover": {
            backgroundColor: '#F65261',
        }
    },
    closeButtonContainer: {
        alignSelf: "flex-end",
        width: '30px',
        height: '30px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});
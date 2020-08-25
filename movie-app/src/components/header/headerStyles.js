import {createUseStyles} from "react-jss";
import headerBackGroundImage from '../../images/header-background.jpg';

export const useHeaderStyles = createUseStyles({
    header: {
        width: '1200px',
        height: '400px',
        backgroundColor: "#424242",
        marginBottom: '10px',
        backgroundImage: `url(${headerBackGroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        // filter: 'brightness(0.5)',
    },
    topBar: {
        width: '100%',
        height: '80px',
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topBarLeft: {
        marginLeft: '50px'
    },
    topBarRight: {
        marginRight: '50px'
    },
    addMovieButton: {
        backgroundColor: '#555555',
        border: 'none',
        width: '176px',
        height: '46px',
        opacity: '0.7',
        borderRadius: '5px',
        color: '#F65261',
        fontSize: '18px',
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
    searchMovieContainer: {
        width: '980px',
        height: '170px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        color: "white",
        fontSize: '35px',
        fontWeight: '100',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
    searchMovieButton: {
        border: 'none',
        backgroundColor: '#F65261',
        width: '230px',
        height: '60px',
        borderRadius: '5px',
        fontSize: '18px',
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        color: "white"
    },
    searchFormContainer: {
        display: 'flex',
        justifyContent: "space-between",

    },
    searchInput: {
        width: '715px',
        height: '60px',
        backgroundColor: '#424242',
        opacity: '0.95',
        borderRadius: '5px',
        fontSize: '18px',
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        color: "#8b8d8d",
        border: 'none',
        backgroundImage: 'none',
        paddingLeft: '20px'
    }
});
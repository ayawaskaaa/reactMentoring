import {createUseStyles} from "react-jss";
import notFoundImg from "../images/404.png";

const red = '#F65261';

export const usePageStyles = createUseStyles({
    pageContainer: {
        height: '100%',
        backgroundColor: "#555555",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    notFoundContainer: {
        width: '100%',
        height: '700px',
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    logoContainer: {
        alignSelf: "flex-start",
        marginLeft: '30px',
        marginTop: '30px',
        height: '50px'
    },
    goHomeLink: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: '5px',
        width: '260px',
        height: '60px',
        color: red,
        textDecoration: 'none',
        border: 'solid 1px',
        borderColor: red,
        cursor: 'pointer',
        outline: 'none',
        fontSize: '20px',
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
    pageNotFoundImg: {
        width: '455px',
        height: '355px',
        backgroundImage: `url(${notFoundImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    notFoundText: {
        color: 'white',
        fontSize: '26px',
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    }
});
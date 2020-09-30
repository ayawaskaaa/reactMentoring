import {createUseStyles} from 'react-jss'
import pulp_fiction from "../../images/pulp_fiction.jpg";

export const useMovieDetailsStyles = createUseStyles({
    movieDetailsContainer: {
        width: '1200px',
        height: '500px',
        backgroundColor: "#232323",
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '1100px',
    },
    leftHeader: {
        height: '55px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    rightHeader: {
        height: '55px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    main: {
        display: "flex",
        flexDirection: "row",
        width: '1100px',
        height: '400px',
        justifyContent: 'space-between',
    },
    cardImage: {
        width: '250px',
        height: '370px',
        backgroundImage: `url(${pulp_fiction})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        width: '800px',
        color: "white",
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
    rateContainer: {
        width: '50px',
        height: '50px',
        border: '1px solid white',
        borderRadius: '50%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    rate: {
        fontSize: '20px',
        color: "green"
    },
    headerContainer: {
        width: '315px',
        height: '60px',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    contentHeader: {
        fontSize: '42px',
    },
    contentSubHeader: {
        fontSize: '20px',
    },
    contentMetaContainer: {
        width: '190px',
        height: '60px',
        fontSize: '25px',
        color: "red",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    contentMeta: {},
    description: {
        fontSize: '18px',
    }
});
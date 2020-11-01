import {createUseStyles} from 'react-jss'

export const useMainBlockStyles = createUseStyles({
    mainBlock: {
        width: '1200px',
        minHeight: '400px',
        backgroundColor: "#232323",
        display: "flex",
        justifyContent: "center"
    },
    mainBlockContainer: {
        width: '1090px',
        height: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    textStyle: {
        fontWeight: '100',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        color: 'white',
        fontSize: '17px',

    },
    searchResultNumber: {
        fontSize: '17px',
        fontWeight: '100',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        color: 'white',
        marginRight: '3px'
    },
    searchResultText: {
        fontSize: '15px',
        fontWeight: '100',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        color: 'white'
    },
    searchResultContainer: {
        height: '60px',
        display: "flex",
        alignItems: "center",
    },
    galleryContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    moviesNotFound: {
        alignSelf: 'center',
        marginTop: '50px',
        fontSize: '26px',
        fontWeight: '100',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        color: 'white'
    }

});
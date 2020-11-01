import {createUseStyles} from 'react-jss'

export const useMovieStyles = createUseStyles({
    root: {
        width: '685px',
        backgroundColor: '#232323',
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    header: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
    },
    closeButtonContainer: {
        alignSelf: "flex-end",
        width: '50px',
        height: '50px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    formContent: {
        width: '540px',
        height: '841px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    input: {
        width: '520px',
        height: '60px',
        paddingLeft: '20px',
        backgroundColor: '#555555',
        border: 'none',
        opacity: '0.7',
        borderRadius: '5px',
        color: "#8b8d8d",
        fontSize: '18px',
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
    inputTitle: {
        color: '#F65261',
        fontSize: '18px',
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        height: '110px',
        justifyContent: 'space-between'
    },
    formName: {
        color: "white",
        fontSize: '35px',
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
    formNameContainer: {
        height: '100px',
    },
    formFooter: {
        width: '540px',
        height: '240px',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer: {
        width: '415px',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    errorMessage: {
        color: '#F65261',
        fontSize: '14px',
        fontWeight: '100',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        height: '15px',
        width: '100%'
    },
});
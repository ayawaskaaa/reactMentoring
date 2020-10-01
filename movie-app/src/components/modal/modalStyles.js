import {createUseStyles} from "react-jss";

export const useModalStyles = createUseStyles({
    modalStyles: {
        width: '1200px',
        position: "absolute",
        top: '120px',
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        justifyContent: "center",
    },
    deleteModal: {
        width: '650px',
        height: '350px',
        position: "absolute",
        top: '120px',
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#232323',
        borderRadius: 4
    },
    deleteModalTitle: {
        color: "white",
        fontSize: '35px',
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
    deleteModalText: {
        color: "white",
        fontSize: '18px',
        fontWeight: '200',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },
    closeButtonContainer: {
        alignSelf: "flex-end",
        width: '50px',
        height: '50px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    deleteModalContent: {
        width: '500px',
        height: '250px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    confirmButton: {
        alignSelf: "flex-end"
    }
});
import {createUseStyles} from "react-jss";

export const usePageStyles = createUseStyles({
    pageContainer: {
        height: '100%',
        backgroundColor: "#555555",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
});
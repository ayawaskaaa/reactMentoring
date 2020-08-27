import {createUseStyles} from 'react-jss'
import dropdownArrow from '../../images/dropdownArrow.svg';

export const useMainBlockStyles = createUseStyles({
    mainBlock: {
        width: '1200px',
        minHeight: '400px',
        backgroundColor: "#232323"
    },
    category: {
        background: 'none',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
        outline: 'none',
        fontSize: '17px',
        fontWeight: '100',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        color: 'white'
    },
    categoryContainer: {
        width: '500px',
        height: '60px',
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: '30px'
    },
    filterBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    sortOption: {
        fontWeight: '100',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        color: 'white',
        background: 'none',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
        outline: 'none',
    },
    textStyle: {
        fontWeight: '100',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        color: 'white',
        fontSize: '17px',

    },
    sortOptionContainerInactive: {
        display: 'none'
    },
    sortPanel: {
        width: '300px',
        height: '60px',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    expandButtonContainer: {
        width: '60px',
        height: '60px',
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    expandButton: {
        width: '10px',
        height: '10px',
        background: 'none',
        color: "red",
        border: 'none',
        padding: '0',
        cursor: 'pointer',
        outline: 'none',
        backgroundImage: `url(${dropdownArrow})`,
        backgroundSize: '10px'
    }

});
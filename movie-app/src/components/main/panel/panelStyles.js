import {createUseStyles} from 'react-jss'
import dropdownArrow from '../../../images/dropdownArrow.svg';

export const usePanelStyles = createUseStyles({

    category: {
        height: '60px',
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
    activeCategory: {
        borderBottom: '3px solid red'
    },
    categoryContainer: {
        width: '500px',
        height: '60px',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    filterBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottom: '2px solid #3d3a3a',
        boxShadow: '0px 1px 0px 0px black'
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
        width: '270px',
        height: '60px',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    expandButtonContainer: {
        width: '10px',
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
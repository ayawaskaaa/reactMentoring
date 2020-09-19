import React from 'react';
import Header from "./components/header/Header";
import MainContainer from "./components/main/MainContainer";
import Footer from "./components/footer/Footer";
import {usePageStyles} from "./components/applicationStyles";

function App() {
    const classes = usePageStyles();
    return (
        <div className={classes.pageContainer}>
            <Header/>
            <MainContainer/>
            <Footer/>
        </div>
    );
}

export default App;

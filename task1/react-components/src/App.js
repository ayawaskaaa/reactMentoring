import React from 'react';
import './App.css';
import CreateElementExample from "./CreateElementExample";
import ComponentExample from "./ComponentExample";
import PureComponentExample from "./PureComponentExample";
import FunctionalComponent from "./FunctionalComponent";

function App() {
  return (
      <div className="App">
        Hello world
        <CreateElementExample message="Create Element"/>
        <ComponentExample message="Component"/>
        <PureComponentExample message="Pure component"/>
        <FunctionalComponent message='Functional component'/>
      </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import {initialState, rootReducer} from './redux/rootReducer'
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import NotFound from "./components/pages/NotFound";


export const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/home" component={App}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';

import {Provider} from 'react-redux'

import {initialState, rootReducer} from './redux/rootReducer'
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";


export const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();

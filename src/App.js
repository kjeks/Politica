import React, {Component} from 'react';
import Immutable from 'immutable';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import MainRouter from './mainMenu/MainRouter';
import reducers from './common/index';
import ActionLogger from "./middleware/ActionLogger";
import WSMiddleware from './middleware/WSMiddleware';
import {connectRouter, routerMiddleware, ConnectedRouter} from 'connected-react-router/immutable';
import {createBrowserHistory} from 'history';


const history = createBrowserHistory();

class App extends Component {

    render() {
        const initialState = Immutable.Map();
        let store = createStore(connectRouter(history)(reducers), initialState, applyMiddleware(thunk, routerMiddleware(history), WSMiddleware, ActionLogger));

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <MainRouter/>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;

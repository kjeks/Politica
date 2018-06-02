import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './mainMenu/MainRouter';
import reducers from './common/index';
import ActionLogger from "./middleware/ActionLogger";

class App extends Component {
  render() {
    let store = createStore(reducers, applyMiddleware(ActionLogger, thunk));
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainRouter/>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

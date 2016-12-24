import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./src/components/app";
import rootReducer from "./src/reducers/rootReducer";

class Geather extends Component {
  render () {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
 }


AppRegistry.registerComponent('Geather', () => Geather);

import React, { Component } from "react"
import { Provider, connect } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import ReduxThunk from "redux-thunk"
import { Router, Scene } from "react-native-router-flux"
import firebase from "firebase"
import { firebaseConfig } from "../envVariables"
import RootReducer from "./reducers/rootReducer"

import LoginForm from "./components/loginForm"
import HomePage from "./components/homePage"
import CityPage from "./components/cityPage"
import ProfilePage from "./components/profilePage"

const RouterWithRedux = connect()(Router)

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }

  // TODO: Nest selected city in home page
  render() {
    const store = compose(
      applyMiddleware(ReduxThunk)(createStore)(RootReducer)
    )
    return (
      <Provider store={store}>
        <RouterWithRedux hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} />
          </Scene>

          <Scene key="main">
          <Scene key="landing" component={HomePage} title="Geather" />
          <Scene key="preferences" component={ProfilePage} />
            <Scene key="selectedCity" component={CityPage} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

export default App

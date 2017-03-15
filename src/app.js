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

const RouterWithRedux = connect()(Router)

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    const store = compose(
      applyMiddleware(ReduxThunk)(createStore)(RootReducer)
    )
    return (
      <Provider store={store}>
        <RouterWithRedux sceneStyle={{ paddingTop: 65 }}>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please Login" />
          </Scene>

          <Scene
            key="main"
            navigationBarStyle={styles.viewStyle}
            titleStyle={{ color: "magenta" }}
          >
            <Scene key="landing" component={HomePage} title="Geather" initial />
            <Scene key="selectedCity" component={CityPage} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

const styles = {
  viewStyle: {
    backgroundColor: "#333",
    height: 60,
  }
}


export default App

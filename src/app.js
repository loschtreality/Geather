import React, { Component } from "react"
import { Provider, connect } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import ReduxThunk from "redux-thunk"
import { Router, Scene } from "react-native-router-flux"
import EStyleSheet from "react-native-extended-stylesheet"
import { Dimensions } from "react-native"

import RootReducer from "./reducers/rootReducer"
import LoginForm from "./components/loginForm"
import HomePage from "./components/homePage"
import CityPage from "./components/cityPage"
import ProfilePage from "./components/profilePage"

const RouterWithRedux = connect()(Router)
const width = Dimensions.get("window").width

EStyleSheet.build({
  $primaryColor: "blue",
  $blue: "blue",
  $facebookBlue: "darkblue",
  $red: "red",
  $yellow: "yellow",
  $green: "green",
  rem: width > 340 ? 18 : 16,
  outline: 0
})

class App extends Component {
  constructor() {
    super()
    this.state = { loggedIn: false }
  }

  componentWillMount() {
    // firebase.initializeApp(firebaseConfig)
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

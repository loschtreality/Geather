import React from "react"
import { Scene, Router, Actions } from "react-native-router-flux"
import HomePage from "./components/homePage"

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="main">
        <Scene key="landing" component={HomePage} title="Home" />
      </Scene>
    </Router>
  )
}


export default RouterComponent

import React from "react"
import { Scene, Router } from "react-native-router-flux"
import HomePage from "./components/homePage"


const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key="main"
        navigationBarStyle={styles.viewStyle}
        titleStyle={{ color: "magenta" }}
      >
        <Scene key="landing" component={HomePage} title="Geather" />
      </Scene>
    </Router>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: "#333",
    height: 60,
  }
}


export default RouterComponent

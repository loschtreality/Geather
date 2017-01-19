import React from "react"
import { Scene, Router } from "react-native-router-flux"
import HomePage from "./components/homePage"
import CityPage from "./components/cityPage"

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key="main"
        navigationBarStyle={styles.viewStyle}
        titleStyle={{ color: "magenta" }}
      >
        <Scene key="landing" component={HomePage} title="Geather" />
        <Scene key="selectedCity" component={CityPage} title="New York" />
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

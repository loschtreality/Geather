import React from "react"
import {
  View,
  StyleSheet,
  Text
} from "react-native"


const WeatherStats = () => {
  const {
    container,
    tempContainer,
    temperatureNumber,
    extraData
  } = styles


  //Text will be props.temperature
  return (
    <View style={container}>
      <View style={tempContainer}>
        <Text style={temperatureNumber}>75 degrees</Text>
      </View>

      <Text style={extraData}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "column",
    flex: 2,
    backgroundColor: "black",
    opacity: 0.75,
  },
  tempContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  temperatureNumber: {
    fontSize: 18,
    color: "white"
  },
  extraData: {
    color: "green"
  }
})


export { WeatherStats }

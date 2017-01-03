import React from "react"
import {
  View,
  StyleSheet,
  Text,
} from "react-native"


const WeatherStats = (props) => {
  const {
    container,
    tempContainer,
    temperatureNumber,
    statsContainer,
    statsText,
    cityText,
    cityContainer
  } = styles


  //Text will be props.temperature
  return (
    <View style={container}>
      <View style={tempContainer}>
        <Text style={temperatureNumber}> {`${props.temperature}°F`} </Text>
      </View>

      <View style={cityContainer}>
        <Text style={cityText}>{ props.city }</Text>
      </View>

      <View style={statsContainer}>
        <Text style={statsText}>Humidity: { props.humidity } </Text>
        <Text style={statsText}>Humidity: { props.humidity } </Text>
        <Text style={statsText}>Humidity: { props.humidity } </Text>
        <Text style={statsText}>Humidity: { props.humidity } </Text>
        <Text style={statsText}>Humidity: { props.humidity } </Text>
        <Text style={statsText}>Humidity: { props.humidity } </Text>
        <Text style={statsText}>Humidity: { props.humidity } </Text>
      </View>
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
    fontSize: 42,
    color: "white"
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  statsText: {
    color: "cyan"
  },
  cityText: {
    fontSize: 30,
    color: "magenta"
  },
  cityContainer: {
    alignItems: "center"
  }
})


export { WeatherStats }
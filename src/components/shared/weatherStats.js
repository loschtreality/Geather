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

  const {
    city,
    country,
    wind,
    main,
    updated_at
  } = props

  const {
    temp,
    humidity,
    pressure,
    temp_min,
    temp_max,
  } = main


  //Text will be props.temperature
  return (
    <View style={container}>
      <View style={tempContainer}>
        <Text style={temperatureNumber}> {`${temp}°F`} </Text>
      </View>

      <View style={cityContainer}>
        <Text style={cityText}>{ city }, { country }</Text>
      </View>

      <View style={statsContainer}>
        <View>
          <Text style={statsText}>Humidity: { humidity } </Text>
          <Text style={statsText}>Wind: { wind } </Text>
          <Text style={statsText}>Pressure: { pressure } </Text>
        </View>
        <View>
          <Text style={statsText}>Max: { temp_max } </Text>
          <Text style={statsText}>Min: { temp_min } </Text>
          <Text style={statsText}>Updated: { updated_at } </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "column",
    flex: 2,
    backgroundColor: "#333",
    opacity: 0.75,
  },
  tempContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  temperatureNumber: {
    fontSize: 58,
    color: "white"
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around"
  },
  statsText: {
    color: "cyan",
    margin: 3
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

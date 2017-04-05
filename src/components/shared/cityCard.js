import React from "react"
import {
  TouchableHighlight,
  StyleSheet,
  Text,
} from "react-native"

const CityCard = (props) => {
    const {
      container,
    } = styles

    const {
      city,
      country
    } = props.cityData

    return (
      <TouchableHighlight onPress={() => props.onPress(props.cityData)} style={container} >
        <Text>
          { city }, { country }
        </Text>
      </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "skyblue",
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative"
  },
  button: {
    backgroundColor: "green"
  }
})

export { CityCard }

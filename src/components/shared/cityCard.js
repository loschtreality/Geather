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

    return (
      <TouchableHighlight onPress={props.onPress(props.city)} style={container} >
        <Text>
          { props.city }
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

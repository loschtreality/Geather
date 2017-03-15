import React from "react"
import {
  View,
  StyleSheet,
  Text,
} from "react-native"

const CityCard = (props) => {
    const {
      container,
    } = styles

    return (
      <View style={container} >
        <Text onPress={() => props.navigate({ city: props.city })}>
          { props.city }
        </Text>
      </View>
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

import React from "react"
import {
  View,
  StyleSheet
} from "react-native"

import {
  PrefButton
} from "./"

const ButtonGroup = () => {
    const {
      container,
      buttonLove,
      buttonNeutral,
      buttonHate
    } = styles

    return (
      <View style={container}>
        <PrefButton innerText="Love" style={buttonLove} />
        <PrefButton innerText="Neutral" style={buttonNeutral} />
        <PrefButton innerText="Hate" style={buttonHate} />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "row"
  },
  buttonLove: {
    borderTopColor: "green",
    borderBottomColor: "green",
  },
  buttonNeutral: {
    borderTopColor: "yellow",
    borderBottomColor: "yellow",
  },
  buttonHate: {
    borderTopColor: "red",
    borderBottomColor: "red",
  }
})

export { ButtonGroup }

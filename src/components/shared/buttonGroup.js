import React from "react"
import EStyleSheet from "react-native-extended-stylesheet"
import {
  View,
} from "react-native"

import {
  PrefButton
} from "./"

const ButtonGroup = (props) => {
    const {
      container,
      buttonLove,
      buttonNeutral,
      buttonHate
    } = styles

    return (
      <View style={[container, props.style]}>
        <PrefButton innerText="Love" style={buttonLove} />
        <PrefButton innerText="Neutral" style={buttonNeutral} />
        <PrefButton innerText="Hate" style={buttonHate} />
      </View>
    )
}

const styles = EStyleSheet.create({
  outline: 1,
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

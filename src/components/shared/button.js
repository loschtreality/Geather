import React from "react"
import EStyleSheet from "react-native-extended-stylesheet"

import {
  Text,
  TouchableOpacity
} from "react-native"

const Button = (props) => {
  const {
    buttonStyle,
    textStyle
  } = styles

  return (
    <TouchableOpacity onPress={props.onPress} style={[buttonStyle, props.buttonStyle]}>
      <Text style={[textStyle, props.textStyle]}>{props.innerHTML}</Text>
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  buttonStyle: {
    alignSelf: "stretch",
    backgroundColor: "red",
    borderColor: "transparent",
  },
  textStyle: {
    alignSelf: "center",
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
    paddingTop: 5,
    paddingBottom: 5
  }
})

export { Button }

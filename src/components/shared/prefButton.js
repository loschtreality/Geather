import React from "react"
import EStyleSheet from "react-native-extended-stylesheet"

import {
  TouchableHighlight,
  Text
} from "react-native"

const PrefButton = (props) => {
  const {
    container,
    textStyle,
  } = styles

  return (
    <TouchableHighlight style={[container, props.style]}>
      <Text style={[textStyle, props.textStyle]}>{props.innerText}</Text>
    </TouchableHighlight>
  )
}

const styles = EStyleSheet.create({
  container: {
    borderStyle: "solid",
    borderTopColor: "black",
    borderTopWidth: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  textStyle: {
    margin: 3
  }
})

export { PrefButton }

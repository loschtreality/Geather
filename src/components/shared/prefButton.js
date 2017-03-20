import React from "react"

import {
  TouchableOpacity,
  Text
} from "react-native"

const PrefButton = (props) => {
  const {
    container,
    textStyle,
  } = styles

  return (
    <TouchableOpacity style={[container, props.style]}>
      <Text style={[textStyle, props.textStyle]}>{props.innerText}</Text>
    </TouchableOpacity>
  )
}

const styles = {
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

}

export { PrefButton }

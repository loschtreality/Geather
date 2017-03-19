import React from "react"

import {
  View,
  Text
} from "react-native"

const PrefButton = (props) => {
  const {
    container,
    textStyle,
  } = styles

  return (
    <View style={[container, props.style]}>
      <Text style={[textStyle, props.textStyle]}>{props.innerText}</Text>
    </View>
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

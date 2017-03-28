/* @flow */

import React from "react"
import EStyleSheet from "react-native-extended-stylesheet"
import { Actions } from "react-native-router-flux"
import {
  View,
  TouchableHighlight,
  Text
} from "react-native"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
  }

  handlePress(): void {
    if (this.props.disabledBack) return
    Actions.pop()
  }

  render() {
    const {
      container,
      buttonContainer,
      navText
    } = styles
    return (
      <View style={container}>
        <TouchableHighlight style={buttonContainer}>
            <Text
              style={navText} // display button color as faded grey if disabled
              onPress={this.handlePress.bind(this)}
            >B
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={Actions.landing} style={buttonContainer}>
          <Text style={navText}>H</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={Actions.cities} style={buttonContainer}>
          <Text style={navText}>C</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={Actions.preferences} style={buttonContainer}>
          <Text style={navText}>S</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "flex-end",
    alignItems: "center"
  },
  buttonContainer: {
    alignItems: "center"
  },
  navText: {
    fontSize: "1.25rem"
  }
})

export { Navigation }

import React, { Component } from "react"
import { connect } from "react-redux"
import EStyleSheet from "react-native-extended-stylesheet"

import {
  Text,
  View
} from "react-native"

import {
  ButtonGroup,
  Navigation,
  Button
} from "./shared"

import {
  addCity,
  removeCity,
  updateWeatherPreference,
  logoutUser
} from "../actions"


class ProfilePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      container,
      weatherPreferences,
      prefRow,
      buttonGroup,
      title,
      header,
      nav
    } = styles

    return (
      <View style={container}>
        <View style={weatherPreferences}>
          <Text style={title}>Settings</Text>

          <View style={prefRow}>
            <Text style={header}>Hot:</Text>
            <ButtonGroup style={buttonGroup} />
          </View>

          <View style={prefRow}>
            <Text style={header}>Warm:</Text>
            <ButtonGroup style={buttonGroup} />
          </View>

          <View style={prefRow}>
            <Text style={header}>Cold:</Text>
            <ButtonGroup style={buttonGroup} />
          </View>

        </View>

        <Button text="Log Out" onPress={this.props.logoutUser} />

        <Navigation style={nav} />
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  weatherPreferences: {},
  prefRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonGroup: {
    flex: 3
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center"
  },
  header: {
    fontSize: 16,
    flex: 1,
    textAlign: "center"
  },
  nav: {
    position: "absolute",
    bottom: 0
  }
})

const mapStateToProps = (state) => {
  // state.profile
  return ({
    cities: state.profile.cities,
    prefs: state.profile.preferences
  })
}

const mapDispatchToProps = {
 addCity,
 removeCity,
 updateWeatherPreference,
 logoutUser
}

export { ProfilePage }
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)

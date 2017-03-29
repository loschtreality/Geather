import React, { Component } from "react"
import { connect } from "react-redux"
// import { Actions } from "react-native-router-flux"

import {
  Text,
  View
} from "react-native"

import {
  ButtonGroup,
  Navigation
} from "./shared"

import {
  addCity,
  removeCity,
  updateWeatherPreference
} from "../actions/profileActions"


class ProfilePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      container,
      weatherPreferences,
      prefRow,
      title,
      header,
      nav
    } = styles

    return (
      <View style={container}>
        <View style={weatherPreferences}>
          <Text style={title}>Weather</Text>

          <View style={prefRow}>
            <Text style={header}>Hot:</Text>
            <ButtonGroup />
          </View>

          <View style={prefRow}>
            <Text style={header}>Warm:</Text>
            <ButtonGroup style={{ flex: 2 }} />
          </View>

          <View style={prefRow}>
            <Text style={header}>Cold:</Text>
            <ButtonGroup />
          </View>

        </View>
        <Navigation style={nav} />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  weatherPreferences: {

  },
  prefRow: {

  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15
  },
  header: {
    fontSize: 16
  },
  nav: {
    position: "absolute",
    bottom: 0
  }
}

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
 updateWeatherPreference
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)

import React, { Component } from "react"
import { connect } from "react-redux"
import {
  View,
} from "react-native"

import {
  GifElement,
  WeatherStats,
  Spinner,
  Navigation
} from "./shared"

import { getGif } from "../actions"

class CityPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    //TODO: Fetch Weather, then gif with preference parameters
    // Make call to rails server
  }

  // Render Gif or Spinner to avoid spacing and undefined error from async
  renderGif() {
    if (this.props.currentGif) {
      return (
        <GifElement
          currentGif={this.props.currentGif}
        />
      )
    }
    return (
      <Spinner />
    )
  }

  render() {
    const {
      container,
      nav
    } = styles

    return (
      <View style={container}>
        { this.renderGif() }
        <WeatherStats temperature="72" city={this.props.city} humidity="30%" />
        <Navigation style={nav} />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "black"
  },
  nav: {
    position: "absolute",
    bottom: 0
  }
}

const mapStateToProps = (state) => {
  return ({
    currentGif: state.gif.currentGif,
    gifError: state.gif.gifError,
  })
}

const mapDispatchToProps = {
  getGif
}

export default connect(mapStateToProps, mapDispatchToProps)(CityPage)

import React, { Component } from "react"
import { connect } from "react-redux"
import {
  View,
} from "react-native"

import {
  GifElement,
  WeatherStats,
  Spinner,
} from "./shared"

import { getGif } from "../actions"

class CityPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    //TODO: Fetch Weather, then gif with preference parameters
    this.props.getGif("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=happy+fun+summer")
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
      container
    } = styles

    debugger
    return (
      <View style={container}>
        { this.renderGif() }
        <WeatherStats temperature="72" city={this.props.city} humidity="30%" />

      </View>
    )
  }
}

const styles = {
  container: {
    marginTop: 60,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "black"
  }
}

const mapStateToProps = (state) => {
  return ({
    currentGif: state.gif.currentGif,
    gifError: state.gif.gifError,
  })
}

//TODO: Add cities dispatch
const mapDispatchToProps = (dispatch) => {
  return ({
    getGif: (url, params = {}) => dispatch(getGif(url, params))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CityPage)

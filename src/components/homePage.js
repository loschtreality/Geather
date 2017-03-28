import React, { Component } from "react"
import { connect } from "react-redux"
import EStyleSheet from "react-native-extended-stylesheet"

import {
  View
} from "react-native"


import {
  Spinner,
  WeatherStats,
  GifElement,
  Navigation
} from "./shared"


import { getGif, getWeather } from "../actions"


class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getWeather()
    this.props.getGif()
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
     } = styles

     const {
       temp,
       humidity
     } = this.props.currentWeather

    return (
      <View style={container} >
          { this.renderGif() }

        <WeatherStats
          city="London"
          temperature={Math.round(temp) || ""}
          humidity={humidity}
        />

      <Navigation disabledBack />
    </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  }
})

HomePage.propTypes = {
  getGif: React.PropTypes.func.isRequired,
  getWeather: React.PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
  return ({
    currentGif: state.gif.currentGif,
    gifError: state.gif.gifError,
    routes: state.routes,
    currentWeather: state.weather.currentWeather,
    weatherError: state.weather.weatherError,
    cities: state.profile.cities,
    user: state.auth.user
  })
}

//TODO: Add cities dispatch
const mapDispatchToProps = {
  getGif,
  getWeather
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

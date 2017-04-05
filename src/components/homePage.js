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


import { getWeather } from "../actions"


class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  // Render Gif or Spinner to avoid spacing and undefined error from async
  renderGif() {
    if (this.props.currentWeather) {
      // TODO: refactor to account for preference
      return (
        <GifElement
          currentGif={this.props.currentWeather.love_url}
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
       city,
       country,
       main,
       wind,
       updated_at
     } = this.props.currentWeather

     if (!main) {
       this.props.getWeather()
       return <Spinner />
     }
      return (
        <View style={container} >
            { this.renderGif() }

          <WeatherStats
            city={city}
            country={country}
            wind={wind}
            main={main}
            updated={updated_at}
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
  getWeather: React.PropTypes.func.isRequired
}

HomePage.getDefaultProps = {
  currentWeather: { main: null }
}


const mapStateToProps = (state) => {
  return ({
    user: state.auth.user,
    routes: state.routes,
    currentWeather: state.weather.currentWeather,
    weatherError: state.weather.weatherError
  })
}

//TODO: Add cities dispatch
const mapDispatchToProps = {
  getWeather
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

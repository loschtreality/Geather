import React, { Component } from "react"
import { connect } from "react-redux"
import { Actions } from "react-native-router-flux"

import {
  ScrollView,
} from "react-native"


import {
  Spinner,
  WeatherStats,
  CityCard,
  GifElement
} from "./shared"


import { getGif, getWeather } from "../actions"


class HomePage extends Component {
  constructor(props) {
    super(props)

    this.changeScene = this.changeScene.bind(this)
  }

  componentWillMount() {
    this.props.getWeather()
    this.props.getGif()
  }

  changeScene(city) {
    return function () {
      Actions.selectedCity({ city })
    }
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

     // NOTE: Static cities will be replaced with data from database
     // TODO: Change cities container to <ListView/>
    return (
      <ScrollView contentContainerStyle={container} >
          { this.renderGif() }

        <WeatherStats
          city="London"
          temperature={Math.round(temp) || ""}
          humidity={humidity}
        />

        <ScrollView style={{ flex: 1, }}>
          {[
          "Los Angeles",
          "New York",
          "San Francisco",
          "Paris"
        ].map((city, idx) => {
          return (<CityCard city={city} key={idx} navigate={this.changeScene(city)} />)
        })}
      </ScrollView>
    </ScrollView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  }
}

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

import React, { Component } from "react"
import { connect } from "react-redux"
import { Actions } from "react-native-router-flux"

import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native"


import {
  Spinner,
  WeatherStats,
  CityCard,
  GifElement
} from "./shared"


import { getGif } from "../actions"


class HomePage extends Component {
  constructor(props) {
    super(props)

    this.changeScene = this.changeScene.bind(this)
  }

  componentWillMount() {
    //TODO: Fetch Weather, then gif with preference parameters
    this.props.getGif("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=happy+fun+summer")
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


     // NOTE: Static cities will be replaced with data from database
     // TODO: Change cities container to <ListView/>

    return (
      <ScrollView contentContainerStyle={container} >
          { this.renderGif() }

        <WeatherStats city="San Francisco" temperature="75" humidity="50%" />

        <ScrollView style={{ flex: 1, }}>
          {[
          "San Francisco",
          "Los Angeles",
          "New York",
          "Boston",
          "Paris"
        ].map((city, idx) => {
          return (<CityCard city={city} key={idx} navigate={this.changeScene(city)} />)
        })}
      </ScrollView>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  }
})


const mapStateToProps = (state) => {
  return ({
    currentGif: state.gif.currentGif,
    gifError: state.gif.gifError,
    routes: state.routes
  })
}

//TODO: Add cities dispatch
const mapDispatchToProps = (dispatch) => {
  return ({
    getGif: (url, params = {}) => dispatch(getGif(url, params)),
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

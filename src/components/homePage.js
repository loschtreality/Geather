import React, { Component } from "react"
import { connect } from "react-redux"


import {
  StyleSheet,
  View,
  ScrollView
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
  }

  componentWillMount() {
    //TODO: Fetch Weather, then gif with preference parameters
    this.props.getGif("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=happy+fun")
  }

  // Render Gif or Spinner
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

        <View style={{ flex: 1, }}>
          {[
          "San Francisco",
          "Los Angeles",
          "New York",
          "Boston",
          "Paris"
        ].map((city, idx) => {
          return (<CityCard city={city} key={idx} />)
        })}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
})


const mapStateToProps = (state) => {
  return ({
    currentGif: state.gif.currentGif,
    gifError: state.gif.gifError
  })
}

//TODO: Add cities dispatch
const mapDispatchToProps = (dispatch) => {
  return ({
    getGif: (url, params = {}) => dispatch(getGif(url, params))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

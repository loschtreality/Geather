import React, { Component } from "react"
import { connect } from "react-redux"


import {
  StyleSheet,
  View,
  Image,
  ScrollView
} from "react-native"


import {
  Spinner,
  WeatherStats,
  CityCard
} from "./shared"


import { getGif } from "../actions"


class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    //TODO: Fetch Weather, then gif with preference parameters
    this.props.getGif("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC")
  }

  // Render Gif or Spinner
  renderGif() {
    if (this.props.currentGif) {
      return (
          <Image
            source={{ uri: this.props.currentGif }}
            style={styles.gifStyle}
            resizeMode="cover"
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
      gifContainer
     } = styles


     // NOTE: Static cities will be replaced with data from database

    return (
      <ScrollView contentContainerStyle={container} >
        <View style={gifContainer}>
          { this.renderGif() }
        </View>

        <WeatherStats />

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
  },
  gifContainer: {
    flex: 2
  },
  gifStyle: {
    flex: 1,
    height: null,
    width: null,
  },
  textStyle: {
    marginTop: 20,
    color: "blue"
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

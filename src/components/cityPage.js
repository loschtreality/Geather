import React, { Component, PropTypes } from "react"
import {
  View,
} from "react-native"

import {
  GifElement,
  WeatherStats,
  Spinner,
  Navigation
} from "./shared"

class CityPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // Decide which gif to render. Map preference to props
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

    const {
      city,
      country,
      main,
      wind,
      updated_at
    } = this.props.cityData

    return (
      <View style={container}>
        { this.renderGif() }
        <WeatherStats
          city={city}
          country={country}
          wind={wind}
          main={main}
          updated={updated_at}
        />
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

CityPage.propTypes = {
  cityData: PropTypes.object
}

CityPage.getDefaultProps = {
  cityData: {}
}

export { CityPage }
export default CityPage

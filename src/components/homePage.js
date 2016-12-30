import React, { Component } from "react"
import { connect } from "react-redux"


import {
  Text,
  StyleSheet,
  View,
  Image
} from "react-native"


import { getGif } from "../actions"


class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getGif("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC")
  }

  render() {
    const {
      container,
      gifStyle,
      textStyle
     } = styles

    return (
      <View style={container}>
        <View>
          <Image source={{ uri: this.props.currentGif }} style={gifStyle} />
        </View>
        <Text style={textStyle}> The gif image goes above here </Text>
        <Text style={[textStyle, { color: "red"}]} > { this.props.gifError } </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  gifStyle: {
    height: 50,
    width: 50
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

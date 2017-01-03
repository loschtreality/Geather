import React from "react"
import {
  Image,
  StyleSheet,
  View
} from "react-native"

const GifElement = (props) => {
  const {
    container,
    imageStyle
  } = styles

  return (
    <View style={container}>
      <Image
        style={imageStyle}
        source={{ uri: props.currentGif }}
        resizeMode="cover"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2
  },
  imageStyle: {
    flex: 1,
    height: null,
    width: null,
  }
})

export { GifElement }

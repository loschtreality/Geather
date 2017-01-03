import React from "react"
import {
  View,
  ActivityIndicator
} from "react-native"


const Spinner = ({ size, color }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator
      size={size || "large"}
      color={color || "magenta"}
      />
    </View>
  )
}

const styles = {
  spinnerStyle: {
    flex: 1,
    alignItems: "center",
  },
}

export { Spinner }

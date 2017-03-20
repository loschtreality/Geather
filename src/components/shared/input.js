import React from "react"
import {
  TextInput,
  View,
} from "react-native"

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles
  return (
    <View style={containerStyle}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        style={inputStyle}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  )
}

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 15,
    flex: 1,
    backgroundColor: "white"
  },
  containerStyle: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10
  }
}


export { Input }

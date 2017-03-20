import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Text,
  View,
  Image,
  Button,
 } from "react-native"

import {
  windowWidth,
  windowHeight
} from "../utils"

import { emailChanged, passwordChanged, loginUser } from "../actions"
import { Input, Spinner } from "./shared"

import logo from "../assets/images/giphy_logo.png"


// TODO: Facebook login

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  renderButton() {
  if (this.props.loading) {
    return <Spinner size="large" />
  }

  return (
    <Button title="Login" onPress={this.onButtonPress.bind(this)} />
  )
}


  render() {
    const {
      container,
      imageStyle,
      section,
      errorTextStyle
    } = styles


    return (
      <View style={container}>
        <Image
          style={imageStyle}
          source={logo}
        />

      <View style={section}>
          <Input
            placeholder="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />

          <Input
            secureTextEntry
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </View>

        <Text style={errorTextStyle}>
          {this.props.error}
        </Text>

          {this.renderButton()}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    paddingTop: windowHeight * 0.1
  },
  imageStyle: {
    height: 225,
    width: 225,
    marginBottom: 20
  },
  errorTextStyle: {
    fontSize: 20,
    color: "red"
  },
  section: {
    flex: 0,
    width: 0.8 * windowWidth,
    backgroundColor: "green"
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth
  return {
    email,
    password,
    error,
    loading
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)

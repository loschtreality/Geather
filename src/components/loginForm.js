import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Text,
  View,
  Image,
  Button
 } from "react-native"

import { emailChanged, passwordChanged, loginUser } from "../actions"
import { Input, Spinner } from "./shared"

import logo from "../assets/images/giphy_logo.png"


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
    <Button title="Login" pressEvent={this.onButtonPress.bind(this)} />
  )
}


  render() {
    debugger
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
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />

          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </View>

        <Text style={errorTextStyle}>
          {this.props.error}
        </Text>


        <View style={section}>
          {this.renderButton()}
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "grey"
  },
  imageStyle: {
    height: 225,
    width: 225,
    alignSelf: "center"
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },
  section: {
    flex: 2
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

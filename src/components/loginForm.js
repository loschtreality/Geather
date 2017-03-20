import React, { Component } from "react"
import { connect } from "react-redux"
import EStyleSheet from "react-native-extended-stylesheet"
import {
  Text,
  View,
  Image,
 } from "react-native"

import { loginUser, authStateChanged } from "../actions"
import { Input, Spinner, Button } from "./shared"

import logo from "../assets/images/giphy_logo.png"


// TODO: Facebook login

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = { email: "", password: "" }
  }

  componentWillMount() {
    // this.props.authStateChanged()
  }


  onEmailChange(text) {
    this.setState({ email: text })
  }

  onPasswordChange(text) {
    this.setState({ password: text })
  }

  onButtonPress() {
    const { email, password } = this.state
    this.setState({ password: "" })
    this.props.loginUser({ email, password })
  }

  renderButton() {
  if (this.props.loading) {
    return <Spinner size="large" />
  }

  return (
    <Button innerHTML="Login" onPress={this.onButtonPress.bind(this)} />
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
        <Button innerHTML="Sign in with Facebook" onPress={this.onButtonPress.bind(this)} />

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

              {this.renderButton()}

            <Text style={errorTextStyle}>
              {this.props.error}
            </Text>

        </View>

      </View>
    )
  }
}

const styles = EStyleSheet.create({
  $outline: 0,
  container: {
    backgroundColor: "black",
    alignItems: "center",
    paddingTop: "10%",
    flex: 1
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
    width: "80%",
    height: "40%",
    alignItems: "center",
    justifyContent: "space-around"
  }
})

const mapStateToProps = ({ auth }) => {
  const { error, loading } = auth
  return {
    error,
    loading
  }
}

export default connect(mapStateToProps, { loginUser, authStateChanged })(LoginForm)

import React, { Component } from "react"
import { connect } from "react-redux"
import EStyleSheet from "react-native-extended-stylesheet"
import {
  Text,
  View,
  Image
 } from "react-native"


import { loginUser, createUser, authStateChanged, } from "../actions"
import { Input, Button, FBButton } from "./shared"

import logo from "../assets/images/giphy_logo.png"


// TODO: Email login

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = { email: "", password: "" }
  }

  componentDidMount() {
    this.props.authStateChanged()
  }

  onEmailChange(text) {
    this.setState({ email: text })
  }

  onPasswordChange(text) {
    this.setState({ password: text })
  }

  emailLogin() {
    const { email, password } = this.state
    this.setState({ password: "" })
    this.props.loginUser({ email, password })
  }

  emailCreate() {
    const { email, password } = this.state
    this.setState({ email: "", password: "" })
    this.props.createUser({ email, password })
  }

  render() {
    const {
      container,
      imageStyle,
      section,
      errorTextStyle
    } = styles

    // debugger

    return (
      <View style={container}>
        <Image
          style={imageStyle}
          source={logo}
        />

      <View style={section}>

        <FBButton loginUser={this.props.loginUser} />

          <Input
            placeholder="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.state.email}
          />

          <Input
            secureTextEntry
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.state.password}
          />

          <Button text="Login" onPress={this.emailLogin.bind(this)} />

          <Button
            text="Create Account"
            onPress={this.emailCreate.bind(this)}
            style={{ backgroundColor: "blue" }}
          />

            <Text style={errorTextStyle}>
              {this.props.error}
            </Text>

        </View>

      </View>
    )
  }
}

const styles = EStyleSheet.create({
  $outline: 1,
  container: {
    backgroundColor: "grey",
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

LoginForm.propTypes = {
  loginUser: React.PropTypes.func.isRequired,
  createUser: React.PropTypes.func.isRequired,
  authStateChanged: React.PropTypes.func.isRequired,
  error: React.PropTypes.string
}

const mapStateToProps = ({ auth }) => {
  const { error, loading, user } = auth
  return {
    error,
    loading,
    user
  }
}

const mapDispatchToProps = {
  loginUser,
  createUser,
  authStateChanged,
}

export { LoginForm } // required for testing
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

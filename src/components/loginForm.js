import React, { Component } from "react"
import { connect } from "react-redux"
import EStyleSheet from "react-native-extended-stylesheet"
import {
  Text,
  View,
  Image,
  // TouchableOpacity
 } from "react-native"


import { loginUser, authStateChanged } from "../actions"
import { Input, Spinner, Button, FBButton } from "./shared"

import logo from "../assets/images/giphy_logo.png"


// TODO: Facebook login

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = { email: "", password: "" }
  }

  componentWillMount = async () => {
    await this.props.authStateChanged()
  }


  onEmailChange(text) {
    this.setState({ email: text })
  }

  onPasswordChange(text) {
    this.setState({ password: text })
  }

  onButtonPress() {
    // const { email, password } = this.state
    // this.setState({ password: "" })
    // TODO: Email login
    // this.props.loginUser()
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
  authStateChanged: React.PropTypes.func.isRequired
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
  authStateChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

import React, { Component } from "react"
import { LoginButton, AccessToken } from "react-native-fbsdk"

class FBButton extends Component {
  constructor(props) {
    super(props)

    this.loginComplete = this.loginComplete.bind(this)
  }

  loginComplete(error, result) {
    if (error) {
      // Dispatch error
      alert(`Login failed with error: ${result.error}`)
    } else if (result.isCancelled) {
      alert("Login was cancelled")
    } else { // Success case:
    AccessToken.getCurrentAccessToken().then((data) => {
        const credentials = {
          access_token: data.accessToken,
          user_id: data.userID
        }
        this.props.loginUser(credentials)
      })
      // console.log(result, "RESULT OBJ")
      // alert(`Login was successful with permissions: ${result.grantedPermissions}`)
    }
  }

  logoutUser() {

  }

  render() {
    return (
      <LoginButton
        readPermissions={["email"]}
        onLoginFinished={this.loginComplete}
        onLogoutFinished={() => alert("User logged out")/* this.logoutUser */}
      />
    )
  }
}

FBButton.propTypes = {
  loginUser: React.PropTypes.func.isRequired
}

export { FBButton }

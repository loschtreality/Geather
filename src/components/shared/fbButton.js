import React, { Component } from "react"
import { LoginButton } from "react-native-fbsdk"

class FBButton extends Component {
  constructor(props) {
    super(props)
  }

  loginComplete(error, result) {
    if (error) {
      // Dispatch error
      alert(`Login failed with error: ${result.error}`)
    } else if (result.isCancelled) {
      alert("Login was cancelled")
    } else { // Success case:
      // Dispatch data to rails
      // Push to main scene
      console.log(result, "RESULT OBJ")
      alert(`Login was successful with permissions: ${result.grantedPermissions}`)
    }
  }

  render() {
    return (
      <LoginButton
        publishPermissions={["public_profile", "email"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              // Dispatch error
              alert(`Login failed with error: ${result.error}`)
            } else if (result.isCancelled) {
              alert("Login was cancelled")
            } else { // Success case:
              // Dispatch data to rails
              // Push to main scene
              this.props.postSession()
              console.log(result, "RESULT OBJ")
              alert(`Login was successful with permissions: ${result.grantedPermissions}`)
            }
          }
        }
        onLogoutFinished={() => alert("User logged out")}
      />
    )
  }
}

export { FBButton }

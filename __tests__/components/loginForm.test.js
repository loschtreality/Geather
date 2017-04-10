import React from "react"
import renderer from "react-test-renderer"
import { LoginForm } from "../../src/components/loginForm"

xdescribe("<LoginForm />", () => {
  let authStateChanged
  let loginUser
  let createUser
  beforeEach(() => {
    authStateChanged = jest.fn()
    loginUser = jest.fn()
    createUser = jest.fn()
    renderer.create(
      <LoginForm
        authStateChanged={authStateChanged}
        loginUser={loginUser}
        createUser={createUser}
      />
    )
  })

  it("calls authStateChanged after mounting", () => {
    expect(authStateChanged).toHaveBeenCalled()
  })

  xdescribe("email and password logic", () => {
    let emailCreate
    let emailLogin
    beforeEach(() => {
      // Set state of email and password fields
      // Mock field submission
      emailLogin = jest.fn()
      emailCreate = jest.fn()
    })
    xdescribe("creating an account", () => {
      it("calls emailCreate when the create button is pressed", () => {

      })

      it("clears the input fields", () => {

      })
    })

    xdescribe("logging in", () => {
      it("calls emailLogin when the login button is pressed", () => {

      })

      it("clears the input fields", () => {

      })
    })
  })
})

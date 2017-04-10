// import "react-native"
import React from "react"
import renderer from "react-test-renderer"
import App from "../src/app"

xdescribe("<App />", () => {
  test("renders correctly", () => {
    const tree = renderer.create(
      <App />
    )
    expect(tree).toMatchSnapshot()
  })
})

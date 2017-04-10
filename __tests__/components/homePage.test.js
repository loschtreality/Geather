// import "react-native"
import React from "react"
import renderer from "react-test-renderer"
import { HomePage } from "../../src/components/homePage"

xdescribe("<HomePage />", () => {
  test("renders correctly", () => {
    const tree = renderer.create(
      <HomePage />
    )
    expect(tree).toMatchSnapshot()
  })
})

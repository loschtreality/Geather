// import "react-native"
import React from "react"
import renderer from "react-test-renderer"
import { ProfilePage } from "../../src/components/profilePage"

xdescribe("<ProfilePage />", () => {
  test("renders correctly", () => {
    const tree = renderer.create(
      <ProfilePage />
    )
    expect(tree).toMatchSnapshot()
  })
})

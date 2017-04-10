// import "react-native"
import React from "react"
import renderer from "react-test-renderer"
import CityPage from "../../src/components/cityPage"

xdescribe("<CityPage />", () => {
  test("renders correctly", () => {
    const tree = renderer.create(
      <CityPage />
    )
    expect(tree).toMatchSnapshot()
  })
})

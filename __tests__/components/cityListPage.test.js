// import "react-native"
import React from "react"
import renderer from "react-test-renderer"
import { CityListPage } from "../../src/components/cityListPage"

xdescribe("<CityListPage />", () => {
  test("renders correctly", () => {
    const tree = renderer.create(
      <CityListPage />
    )
    expect(tree).toMatchSnapshot()
  })
})

import React from "react"
import renderer from "react-test-renderer"
import { CityListPage } from "../../src/components/cityListPage"

xdescribe("<CityListPage />", () => {
  beforeEach(() => {
    renderer.create(
      <CityListPage />
    )
  })
})

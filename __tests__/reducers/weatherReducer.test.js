import WeatherReducer from "../../src/reducers/weatherReducer"
import {
  RECEIVE_WEATHER,
  ERROR_WEATHER
} from "../../src/actions/types"

const initialState = {
  currentWeather: {},
  cities: [],
  weatherError: ""
}

describe("Weather Reducer", () => {
  test("undefined state and action", () => {
    let state
    beforeEach(() => {
      state = undefined
    })
    it("returns the initial state", () => {
      expect(WeatherReducer(state, {})).toEqual(initialState)
    })
  })

  test("previous state and action", () => {
    let prevState
    beforeEach(() => {
      prevState = initialState
    })

    test("receiving weather", () => {
      let action
      beforeEach(() => {
        action = {
          type: RECEIVE_WEATHER,
          payload: [
            { city: "Los Angeles" },
            { city: "Munich" },
            { city: "Paris" },
          ]
        }
      })

      it("sets cities", () => {
        expect(WeatherReducer(prevState, action).cities.length).toBe(3)
      })

      it("sets the current weather to the first city in list", () => {
        expect(WeatherReducer(prevState, action).currentWeather).toEqual({ city: "Los Angeles" })
      })
    })

    test("displaying an error", () => {
      it("sets a weather error", () => {
        const action = {
          type: ERROR_WEATHER,
          payload: "There was an error"
        }

        expect(WeatherReducer(prevState, action).weatherError).toEqual("There was an error")
      })
    })
  })
})

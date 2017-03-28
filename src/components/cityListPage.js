import React from "react"
import { connect } from "react-redux"
import { Actions } from "react-native-router-flux"
// import EStyleSheet from "react-native-extended-stylesheet"

import {
  View,
} from "react-native"

import {
  CityCard
} from "./shared"

class CityListPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { cities: ["paris", "alabama", "alaska"] }
  }
  changeScene(city) {
    return function () {
      Actions.selectedCity({ city })
    }
  }

  render() {
    // const {
    //
    // } = styles

    return (
      <View>
        {
          this.state.cities.map((city, index) => {
            return <CityCard key={index} city={city} />
          })
        }
      </View>
    )
  }
}

// const styles = EStyleSheet.create({
//
// })

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CityListPage)

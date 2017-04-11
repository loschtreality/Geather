import React from "react"
import { connect } from "react-redux"
import { Actions } from "react-native-router-flux"
import EStyleSheet from "react-native-extended-stylesheet"
import Swipeout from "rc-swipeout/lib"

import {
  View,
  ListView,
  Text,
  TouchableHighlight
} from "react-native"

import {
  addCity,
  removeCity
} from "../actions"

import {
  CityCard,
  Navigation
} from "./shared"

class CityListPage extends React.Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(this.props.cities)
    }

    this.changeScene = this.changeScene.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.cities)
    })
  }

  changeScene(cityData) {
      Actions.selectedCity({ cityData })
  }

  addCityToList(selectedCity) {
    console.log("added", selectedCity)
    // do some string parsing here
    // this.props.addCity(city: string || array)
  }

  removeCityFromList(rowData: Object) {
    this.props.removeCity(rowData)
  }

  renderRow(rowData) {
    const swipeBtns = [{
      text: "Delete",
      style: { backgroundColor: "red" },
      onPress: () => this.removeCityFromList(rowData) // dispatch action here
    }]

    return (
      <Swipeout autoClose right={swipeBtns}>
          <CityCard cityData={rowData} onPress={this.changeScene} />
      </Swipeout>
    )
  }

  render() {
    const {
      container,
      nav,
      contentContainer,
      headerBar,
      header,
      headerText,
      action,
    } = styles

    // TODO: refactor view to scroll view to render the cities appropriately
    return (
      <View style={container}>
          <View style={headerBar}>

            <View style={[contentContainer, header]}>
              <Text style={headerText}>Cities:</Text>
            </View>

            <TouchableHighlight style={[contentContainer, action]}>
              <Text>+</Text>
            </TouchableHighlight>

          </View>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
          />

          <Navigation style={nav} />
      </View>
    )
  }
}


const styles = EStyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  },
  headerBar: {
    width: "100%",
    height: "10%",
    backgroundColor: "yellow",
    flexDirection: "row"
  },
  headerText: {},
  nav: {
    position: "absolute",
    bottom: 0
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    flex: 3
  },
  action: {
    flex: 1
  }
})

CityListPage.propTypes = {
  addCity: React.PropTypes.func.isRequired,
  removeCity: React.PropTypes.func.isRequired
}

CityListPage.getDefaultProps = {
  cities: []
}

const mapStateToProps = (state) => {
  return {
    cities: state.weather.cities
  }
}

const mapDispatchToProps = {
  addCity,
  removeCity
}

export { CityListPage }
export default connect(mapStateToProps, mapDispatchToProps)(CityListPage)

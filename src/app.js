import React, { Component } from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"
import RootReducer from "./reducers/rootReducer"
import Router from "./router"


class App extends Component {
  
  render() {
    const initState = {}
    const store = createStore(RootReducer, initState, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}


export default App

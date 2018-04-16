import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import BroadcastList from "./components/broadcast_list"

class App extends React.Component {
  render() {
    const store = configureStore()
    return(
      <Provider store={ store }>
        <BroadcastList/>
      </Provider>
    )
  }
}

export default App

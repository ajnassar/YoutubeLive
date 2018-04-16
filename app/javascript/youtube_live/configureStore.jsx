import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import youtubeReducer from './reducer'

const configureStore = initialRailsData => {
  return compose(applyMiddleware(thunk))(createStore)(youtubeReducer)
}

export default configureStore

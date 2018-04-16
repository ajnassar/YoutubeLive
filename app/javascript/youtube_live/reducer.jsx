import {
  RECEIVE_BROADCASTS
} from './actions'

const initialState = {
  broadcasts: []
}

function youtubeReducer(state = initialState, action) {
  Object.freeze(state)
  switch (action.type) {
  case RECEIVE_BROADCASTS:
    return Object.assign({}, state, { broadcasts: action.broadcasts })
  default:
    return state
  }
}

export default youtubeReducer

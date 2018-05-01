import { createStore } from 'redux'
import rootReducer from './reducers/reducers'

export default (initialState) => {
  return createStore(rootReducer, initialState)
}

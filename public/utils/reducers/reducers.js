import { combineReducers } from 'redux'
import * as Blogs from './Blogs'

export default combineReducers({
  Blogs: Blogs.init
})

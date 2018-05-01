import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { applyMiddleware } from 'redux'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/app'

import initiateStore from './utils/reduxStore'

let store = initiateStore(applyMiddleware(
  thunkMiddleware // lets us dispatch() functions
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { applyMiddleware } from 'redux'
import {Router} from 'react-router-dom'
import history from './utils/history'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/app'

import initiateStore from './utils/reduxStore'

let store = initiateStore(applyMiddleware(
  thunkMiddleware // lets us dispatch() functions
))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'))

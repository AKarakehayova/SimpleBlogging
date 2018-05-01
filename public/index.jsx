import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import 'bootstrap/dist/css/bootstrap.min.css'

import Blogging from './components/blogging'

ReactDOM.render(
<BrowserRouter>
	<Blogging />
</BrowserRouter>
, document.getElementById('root'))

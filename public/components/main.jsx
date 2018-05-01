import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import AddForm from './addForm'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/add' component={AddForm} />
    </Switch>
  </main>
)

export default Main

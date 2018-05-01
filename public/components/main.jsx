import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import AddForm from './addForm'
import BlogList from './blogList'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/add' component={AddForm} />
      <Route path='/posts' component={BlogList} />
    </Switch>
  </main>
)

export default Main

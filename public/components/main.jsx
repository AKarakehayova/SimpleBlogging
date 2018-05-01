import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import AddForm from './addForm'
import BlogList from './blogList'
import EditForm from './editView'
import Latest from './latest'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/add' component={AddForm} />
      <Route path='/posts' component={BlogList} />
      <Route path='/latest' component={Latest} />
      <Route path='/edit/:id' component={EditForm} />
    </Switch>
  </main>
)

export default Main

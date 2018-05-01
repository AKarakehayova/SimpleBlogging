import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import AddForm from './post/addView'
import PostList from './post/postList'
import EditForm from './post/editView'
import Latest from './post/latest'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/add' component={AddForm} />
      <Route path='/posts' component={PostList} />
      <Route path='/latest' component={Latest} />
      <Route path='/edit/:id' component={EditForm} />
    </Switch>
  </main>
)

export default Main

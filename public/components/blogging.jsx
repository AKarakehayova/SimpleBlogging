import React from 'react'
import {Link} from 'react-router-dom'

export class Blogging extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item active'>
            <Link to='/'> Home </Link>
          </li>
          <li class='nav-item'>
            <Link to='/add'> Add Post </Link>
          </li>
          <li class='nav-item'>
            <Link to='/posts'> Posts </Link>
          </li>
        </ul>
      </nav>

    )
  }
}

export default Blogging

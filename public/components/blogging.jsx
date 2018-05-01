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
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'> Home </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/add'> Add Post </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/posts'> Posts </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/latest'> Latest </Link>
          </li>
        </ul>
      </nav>

    )
  }
}

export default Blogging

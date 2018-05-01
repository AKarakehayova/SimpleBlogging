import React from 'react'
import { connect } from 'react-redux'
import BlogPost from './post'
import _ from 'lodash'

export class Latest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      status: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  preparePosts () {
    let lastPosts = _.takeRight(this.props.Posts, 15)
    if (this.state.status && this.state.status !== 'Any') {
      lastPosts = lastPosts.filter((post) => post.status === this.state.status)
    }
    lastPosts = lastPosts.reverse()
    let posts = lastPosts.map((post, index) => {
      post.content = post.content.substring(0, 150)
      return (
        <BlogPost data={post} />
      )
    })
    return posts
  }

  handleChange (e) {
    if (e) {
      const target = e.target
      const value = target ? target.value : e.value
      this.setState({
        status: value
      })
    }
  }

  render () {
    let content = this.props.Posts.length
? this.preparePosts()
: <div className='no-posts'>No posts yet!</div>
    return (
      <div>
        <div className='form-group'>
          <label>Filter by Status</label>
          <select className='form-control' name='status' onChange={this.handleChange} defaultValue='Any'>
            <option>Any</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        {content}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Posts: state.Blogs.posts
  }
}

export default connect(mapStateToProps)(Latest)

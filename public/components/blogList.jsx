import React from 'react'
import { connect } from 'react-redux'
import BlogPost from './post'

export class BlogList extends React.Component {
  preparePosts () {
    let posts = this.props.Posts.map((post, index) => {
      return (
        <li key={index} className='list-group-item'>
          <BlogPost data={post} />
        </li>
      )
    })
    return posts
  }

  render () {
    let content = this.props.Posts.length
? this.props.Posts.map((post, index) => <BlogPost key={index} data={post} />)
: <div className='no-posts'>No posts yet!</div>
    return content
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Posts: state.Blogs.posts
  }
}

export default connect(mapStateToProps)(BlogList)

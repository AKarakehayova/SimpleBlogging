import React from 'react'
import BlogPost from './post'

export class BlogList extends React.Component {
  preparePosts () {
    let posts = this.props.posts.map((post, index) => {
      return (
        <li key={index} className='list-group-item'>
          <BlogPost data={post} />
        </li>
      )
    })
    return posts
  }

  render () {
    let content = this.props.posts.length
			? this.props.posts.map((post, index) => <BlogPost key={index} data={post} />)
	: <div className='no-posts'>No posts yet!</div>
    return content
  }
}

export default BlogList

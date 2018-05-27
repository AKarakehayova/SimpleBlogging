import React from 'react'
import { connect } from 'react-redux'
import BlogPost from './post'
import {getPosts} from '../../utils/requests'
import { SetPosts } from '../../utils/actions/Blogs/blogs'

export class PostList extends React.Component {
	constructor(props){
		super(props)
		this.state = { 
			posts: []
		}
	}
	componentDidMount(){
		getPosts()
		.then((response)=>{
			this.props.SetPosts(response.data)
		})
		.catch((error)=>{
			console.log(error)
		})
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

const mapDispatchToProps = (dispatch) => {
  return {
    SetPosts: (posts) => dispatch(SetPosts(posts))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList)

import React from 'react'
import { connect } from 'react-redux'
import BlogPost from './post'
import {getPosts} from '../../utils/requests'

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
			this.setState({posts: response.data})
		})
		.catch((error)=>{
			console.log(error)
		})
	}

  render () {
			let content = this.state.posts.length
			? this.state.posts.map((post, index) => <BlogPost key={index} data={post} />)
			: <div className='no-posts'>No posts yet!</div>
			return content
}
}

const mapStateToProps = (state, ownProps) => {
  return {
    Posts: state.Blogs.posts
  }
}

export default connect(mapStateToProps)(PostList)

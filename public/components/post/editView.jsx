import React from 'react'
import { connect } from 'react-redux'
import { EditPost } from '../../utils/actions/Blogs/blogs'
import NotificationSystem from 'react-notification-system'
import history from '../../utils/history'
import {getPostById, updatePostById} from '../../utils/requests'

export class EditForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post: {
      },
      id: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitPost = this.submitPost.bind(this)
  }
 
	componentDidMount(){
		let id = history.location.pathname.replace('/edit/', '')
		getPostById(id)
		.then((response)=>{
			this.setState({post: response.data[0], id: id})
		})
		.catch((error)=>{
			console.log(error)
		})
	}

  handleChange (e) {
    if (e) {
      const target = e.target
      const value = target ? target.value : e.value
      const name = target ? target.name : ''
      let fields = Object.assign({}, this.state.post)
      fields[name] = value
      this.setState({
        post: fields
      })
    }
  }

  submitPost (e) {
		e.preventDefault()
		updatePostById(this.state.id, this.state.post)
		.then((response)=>{
		})
		.catch((error)=>{
			console.log(error)
		})
    this.refs.notificationSystem.addNotification({
      message: 'Post successfully updated',
      level: 'success'
    })
  }

  render () {
    let form = <form onSubmit={this.submitPost}>
      <div className='form-group'>
        <label>Title</label>
        <input type='text' className='form-control' value={this.state.post.title} name='title' required onChange={this.handleChange} placeholder='Enter title for the post' />
      </div>

      <div className='form-group'>
        <label>Author</label>
        <input type='text' className='form-control' value={this.state.post.author} name='author' required onChange={this.handleChange} placeholder='Enter your name' />
      </div>

      <div className='form-group'>
        <label>Content</label>
        <input type='textarea' className='form-control' value={this.state.post.content} name='content' required onChange={this.handleChange} placeholder='Enter text here...' />
      </div>

      <div className='form-group'>
        <label>Tag</label>
        <input type='text' className='form-control' value={this.state.post.tag} name='tag' onChange={this.handleChange} placeholder='Add tag' />
      </div>

      <div className='form-group'>
        <label>URL</label>
        <input type='text' className='form-control' value={this.state.post.url} name='url' onChange={this.handleChange} placeholder='Add image URL' />
      </div>

      <div className='form-group'>
        <label>Status</label>
        <select className='form-control' name='status' onChange={this.handleChange} defaultValue='Active'>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <button type='submit' className='btn btn-warning'>Submit</button>

    </form>

    return <div>
      <NotificationSystem ref='notificationSystem' />
      {form}
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Posts: state.Blogs.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    EditPost: (id, post) => dispatch(EditPost(id, post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)

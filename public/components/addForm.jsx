import React from 'react'
import moment from 'moment'

export class AddForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      post: {
        title: '',
        author: '',
        content: '',
        tag: '',
        url: '',
        status: 'Active'
      }
		  }
    this.handleChange = this.handleChange.bind(this)
    this.submitPost = this.submitPost.bind(this)
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
    let newPost = Object.assign(this.state.post, {date: moment().format('MMM Do YY'), id: Date.now()})
    this.setState({posts: this.state.posts.concat([newPost]),
      post: {
   		title: '',
   		author: '',
   		content: '',
   		tag: '',
   		url: '',
   		status: 'Active'
      }
    })
  }

render(){
	let form = <form onSubmit={this.submitPost}>
  <div className='form-group'>
    <label>Title</label>
    <input type='text' className='form-control' value={this.state.post.title} name='title' onChange={this.handleChange} placeholder='Enter title for the post' />
  </div>

  <div className='form-group'>
    <label>Author</label>
    <input type='text' className='form-control' value={this.state.post.author} name='author' onChange={this.handleChange} placeholder='Enter your name' />
  </div>

  <div className='form-group'>
    <label>Content</label>
    <input type='textarea' className='form-control' value={this.state.post.content} name='content' onChange={this.handleChange} placeholder='Enter text here...' />
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


return  <div> {form} </div>

}

}

export default AddForm
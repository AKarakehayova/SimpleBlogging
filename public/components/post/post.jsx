import React from 'react'
import { connect } from 'react-redux'
import Remarkable from 'remarkable'
import { DeletePost } from '../../utils/actions/Blogs/blogs'
import history from '../../utils/history'
const markDown = new Remarkable()

export class BlogPost extends React.Component {
  render () {
    let post = this.props.data
    let contentMd = markDown.render(post.content)
    let renderMd = { __html: contentMd }
    return (
      <div className='card text-center'>
        <div className='card-header'>
          {post.title}
          <span style={{'float': 'right'}}>
            <span onClick={() => { this.props.DeletePost(post.id) }}>
              <i className='material-icons'>delete</i>
            </span>
            <span onClick={() => {
              history.push(`/edit/${post.id}`)
            }}>
              <i className='material-icons'>edit</i>
            </span>
          </span>
        </div>

        <img className='media-object' src={post.url} />
        <div className='card-body'>
          <h5 className='card-title'>{'Added by: ' + post.author + ' on ' + post.date}</h5>
          <h5 className='card-subtitle text-muted'>{'Status: ' + post.status}</h5>
          <span dangerouslySetInnerHTML={renderMd} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Posts: state.Blogs.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    DeletePost: (id) => dispatch(DeletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost)

import React from 'react'
import Remarkable from 'remarkable'
const markDown = new Remarkable()
export class BlogPost extends React.Component {
  render () {
    let post = this.props.data
    let contentMd = markDown.render(post.content)
    let renderMd = { __html: contentMd }
    return (
      <div className='card' style={{'width': '18rem'}}>
        <img className='media-object' src={post.url} />
        <div className='card-body'>
          <h5 className='card-title'>{post.title}</h5>
          <h5 className='card-subtitle text-muted'>{post.status}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{'by: ' + post.author + ' ' + post.date}</h6>
          <span dangerouslySetInnerHTML={renderMd} />
        </div>
      </div>
    )
  }
}

export default BlogPost

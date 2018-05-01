import Constants from '../../constants'

export function AddBlog (blog) {
  return {
    type: Constants.ADD_POST,
    post: blog
  }
}

export function DeletePost (id) {
  return {
    type: Constants.DELETE_POST,
    id: id
  }
}

export function EditPost (id, post) {
  return {
    type: Constants.EDIT_POST,
    id: id,
    post: post
  }
}

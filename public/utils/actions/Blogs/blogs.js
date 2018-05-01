import Constants from '../../constants'

export function AddBlog (blog) {
  return {
    type: Constants.ADD_POST,
    post: blog
  }
}

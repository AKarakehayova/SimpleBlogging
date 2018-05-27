import Constants from '../../constants'

const initialState = {
  posts: []
}

export function init (state = initialState, action) {
  switch (action.type) {
    case Constants.ADD_POST:
      let posts = state.posts
      posts.push(action.post)
      return Object.assign({}, state, {
        posts: posts
      })

    case Constants.DELETE_POST:
      let deletedPosts = state.posts.filter(post => post.id !== action.id)
      return Object.assign({}, state, {
        posts: deletedPosts
      })

    case Constants.EDIT_POST:
      let rest = state.posts.filter(post => post.id !== action.id)
      let editedPost = Object.assign(action.post, {id: action.id})
      rest.push(editedPost)
      return Object.assign({}, state, {
        posts: rest
			})
			
		case Constants.SET_POSTS:
			return Object.assign({}, state, {
				posts: action.posts
			})

    default:
      return state
  }
}

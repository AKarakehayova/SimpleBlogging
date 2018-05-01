import Constants from '../constants'

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

    default:
      return state
  }
}

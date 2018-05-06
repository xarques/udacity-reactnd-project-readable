import {
  ADD_POST,
  GET_POSTS,
  REMOVE_POST,
  ADD_COMMENT_TO_POST,
  REMOVE_COMMENT_FROM_POST
} from "../actions";

export const posts = (state = [], action) => {
  const { posts, post, comment } = action;

  switch (action.type) {
    case GET_POSTS:
      return posts;
    case ADD_POST:
      const [...newState] = state;
      // Post already exists ?
      const postIndex = newState.findIndex(p => p.id === post.id);
      if (postIndex >= 0) {
        // Post already exists: Update it
        newState[postIndex] = post;
      } else {
        // Add new post
        newState.push(post);
      }
      return newState ;
    case REMOVE_POST:
      return state.filter(p => p.id !== post.id);
    case ADD_COMMENT_TO_POST:
      return state.map(p => {
        if (p.id === post.id) {
          p.comments.push(comment);
        }
        return p;
      });
    case REMOVE_COMMENT_FROM_POST:
      return state.map(p => {
        if (p.id === post.id) {
          p.comments = p.comments.filter(c => c.id !== comment.id);
        }
        return p;
      });
    default:
      return state;
  }
};
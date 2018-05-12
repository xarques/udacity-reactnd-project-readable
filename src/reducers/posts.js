import {
  ADD_POST,
  GET_POSTS,
  DELETE_POST
} from "../actions";

export const posts = (state = [], action) => {
  const { posts, post, postId } = action;

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
      return newState;
    case DELETE_POST:
      return state.filter(p => p.id !== postId);
    default:
      return state;
  }
};

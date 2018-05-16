import { ADD_COMMENTS, ADD_COMMENT, REMOVE_COMMENT, UPDATE_COMMENT } from "../actions";

const removeComment = (comment, comments) =>
  comments.filter(c => c.id !== comment.id);

const updateComment = (comment, comments) =>
  comments.map(c => c.id === comment.id ? comment : c);

export const comments = (state = {}, action) => {
  const { postId, comment } = action;
  const comments = postId && state[postId] ? state[postId] : action.comments;
  switch (action.type) {
    case ADD_COMMENTS:
      return {
        ...state,
        [postId]: [...comments]
      };
    case ADD_COMMENT:
      return {
        ...state,
        [postId]: [...comments, comment]
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        [postId]: removeComment(comment, comments)
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        [postId]: updateComment(comment, comments)
      };
    default:
      return state;
  }
};

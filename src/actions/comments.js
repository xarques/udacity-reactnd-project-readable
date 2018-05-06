import * as ReadableAPI from "../utils/ReadableAPI";

export const ADD_COMMENT_TO_POST = "ADD_COMMENT_TO_POST";
export const REMOVE_COMMENT_FROM_POST = "REMOVE_COMMENT_FROM_POST";

export const addComment = ({ post, comment }) => ({
  type: ADD_COMMENT_TO_POST,
  post,
  comment
});

export const removeCommentFromPost = ({ post, comment }) => ({
  type: REMOVE_COMMENT_FROM_POST,
  post,
  comment
});

// export const fetchUpVoteComment = comment => dispatch =>
//   ReadableAPI.upVoteForComment(comment).then(result => dispatch(fetchComments()));

// export const fetchDownVoteComment = comment => dispatch =>
//   ReadableAPI.downVoteForComment(comment).then(result => dispatch(fetchComments()));

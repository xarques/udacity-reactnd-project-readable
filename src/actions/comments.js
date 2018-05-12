import * as ReadableAPI from "../utils/ReadableAPI";

export const ADD_COMMENTS = "ADD_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

export const fetchComments = postId => dispatch =>
  ReadableAPI.getComments(postId).then(comments => {
    dispatch(addComments(postId, comments));
  });

const addComments = (postId, comments) => ({
  type: ADD_COMMENTS,
  postId,
  comments
});

export const addComment = (postId, body, author) => dispatch =>
  ReadableAPI.addComment(postId, body, author).then(comment =>
    dispatch({
      type: ADD_COMMENT,
      postId,
      comment
    })
  );

export const deleteComment = (postId, commentId) => dispatch =>
  ReadableAPI.deleteComment(commentId).then(comment =>
    dispatch({
      type: REMOVE_COMMENT,
      postId,
      comment
    })
  );

const updateComment = comment =>({
  type: UPDATE_COMMENT,
  postId: comment.parentId,
  comment
});

export const fetchUpVoteComment = comment => dispatch =>
  ReadableAPI.upVoteForComment(comment).then(comment =>
    dispatch(updateComment(comment))
  );

export const fetchDownVoteComment = comment => dispatch =>
  ReadableAPI.downVoteForComment(comment).then(comment =>
    dispatch(updateComment(comment))
  );

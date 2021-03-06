import * as ReadableAPI from "../utils/ReadableAPI";

export const GET_POST = "GET_POST";
export const EDIT_POST = "EDIT_POST";
export const UPDATE_POST = "UPDATE_POST";
export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const SORT_POSTS = "SORT_POSTS";

export const sortPosts = sortType => dispatch => dispatch({ type: SORT_POSTS, sortType });

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});

export const fetchPost = postId => dispatch =>
  ReadableAPI.getPost(postId).then(post => (
    dispatch({
      type: ADD_POST,
      post
    })
  ));

export const fetchPosts = () => dispatch =>
  ReadableAPI.getAllPosts().then(posts => dispatch(getPosts(posts)));

export const addPost = post => dispatch =>
  ReadableAPI.addPost(post).then(post =>
    dispatch({
      type: ADD_POST,
      post
    })
  );

export const editPost = post => dispatch =>
  ReadableAPI.updatePost(post).then(post =>
    dispatch({
      type: UPDATE_POST,
      post
    })
  );

export const deletePost = postId => dispatch =>
  ReadableAPI.deletePost(postId).then(post =>
    dispatch({
      type: DELETE_POST,
      postId: post.id
    })
  );

export const fetchUpVotePost = postId => dispatch =>
  ReadableAPI.upVoteForPost(postId).then(result => dispatch(fetchPosts()));

export const fetchDownVotePost = postId => dispatch =>
  ReadableAPI.downVoteForPost(postId).then(result => dispatch(fetchPosts()));

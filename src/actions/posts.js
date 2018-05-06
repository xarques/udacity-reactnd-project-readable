import * as ReadableAPI from "../utils/ReadableAPI";

export const GET_POST = "GET_POST";
export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});

export const fetchPost = postId => dispatch =>
  ReadableAPI.getPost(postId).then(post => {
    dispatch(addPost(post));
  });

export const fetchPosts = () => dispatch =>
  ReadableAPI.getAllPosts().then(posts => dispatch(getPosts(posts)));

export const addPost = post => ({
  type: ADD_POST,
  post
});

export const removePost = (post) => ({
  type: REMOVE_POST,
  post
});

export const fetchUpVotePost = post => dispatch =>
  ReadableAPI.upVoteForPost(post).then(result => dispatch(fetchPosts()));

export const fetchDownVotePost = post => dispatch =>
  ReadableAPI.downVoteForPost(post).then(result => dispatch(fetchPosts()));


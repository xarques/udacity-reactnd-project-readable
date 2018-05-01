import * as ReadableAPI from '../utils/ReadableAPI';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const ADD_COMMENT_TO_POST = 'ADD_COMMENT_TO_POST'; 
export const REMOVE_COMMENT_FROM_POST = 'REMOVE_COMMENT_FROM_POST';

export const getPosts = posts => (
  {
    type: GET_POSTS,
    posts
  }
);

export const fetchPosts = () => dispatch => (
  ReadableAPI.getAllPosts()
    .then(posts => dispatch(getPosts(posts)))
);

export const addPost = ({ post }) => (
  {
    type: ADD_POST,
    post  
  }
);

export const removePost = ({ post }) => (
  {
    type: REMOVE_POST,
    post
  }
);

export const fetchUpVote = post => dispatch => (
  ReadableAPI.upVoteForPost( post )
    .then(result => dispatch(fetchPosts()))
);

export const fetchDownVote = post => dispatch => (
  ReadableAPI.downVoteForPost(post)
    .then(result => dispatch(fetchPosts()))
);

export const addComment = ({ post, comment }) => (
  {
    type: ADD_COMMENT_TO_POST,
    post,
    comment
  }
);

export const removeCommentFromPost = ({ post, comment }) => (
  {
    type: REMOVE_COMMENT_FROM_POST,
    post,
    comment
  }
);
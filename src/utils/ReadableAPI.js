import uuidv4 from "uuid/v4";
const api = "http://localhost:3001";

// Generate a unique token for storing the posts data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

// Header for GET DELETE (no body so no need to specify the content-type)
const headers = {
  Accept: "application/json",
  Authorization: token
};

// Header for POST and PUT
const headersWithContentType = {
  ...headers,
  "Content-Type": "application/json"
};

// Public methods
export const getAllCategories = () => fetchGet(`${api}/categories`);

export const getPostsByCategory = category =>
  fetchGet(`${api}/${category}/posts`).then(posts =>
    posts.filter(post => !post || !post.deleted)
  );

export const getAllPosts = () =>
  fetchGet(`${api}/posts`).then(posts => posts.filter(post => !post.deleted));

export const addPost = post => fetchPost(`${api}/posts`, { ...post, id: uuidv4() });

export const upVoteForPost = postId => voteForPost(postId, "upVote");

export const downVoteForPost = postId => voteForPost(postId, "downVote");

export const getPost = postId => fetchGet(`${api}/posts/${postId}`);

export const editPost = post =>
  fetchPut(`${api}/posts/${post.id}`, {
    title: post.title,
    body: post.body
  });

export const deletePost = postId => fetchDelete(`${api}/posts/${postId}`);

export const getComments = postId =>
  fetchGet(`${api}/posts/${postId}/comments`);

export const addComment = (postId, body, author) =>
  fetchPost(`${api}/comments`, {
    id: uuidv4(),
    body,
    author,
    parentId: postId
  });

export const getCommentDetails = commentId =>
  fetchGet(`${api}/comments/${commentId}`);

export const upVoteForComment = commentId =>
  voteForComment(commentId, "upVote");

export const downVoteForComment = commentId =>
  voteForComment(commentId, "downVote");

export const editComment = comment =>
  fetchPut(`${api}/comments/${comment}`, {
    timestamp: Date.now(),
    body: comment.body
  });

export const deleteComment = commentId =>
  fetchDelete(`${api}/comments/${commentId}`);

// Private methods
const voteForPost = (postId, vote) =>
  fetchPost(`${api}/posts/${postId}`, { option: vote });

const voteForComment = (commentId, vote) =>
  fetchPost(`${api}/comments/${commentId}`, { option: vote });

const fetchGet = url => fetch(url, { headers }).then(res => res.json());

const fetchDelete = url =>
  fetch(url, {
    method: "DELETE",
    headers
  }).then(res => res.json());

const fetchPost = (url, body) =>
  fetch(url, {
    method: "POST",
    headers: headersWithContentType,
    body: JSON.stringify(body)
  }).then(res => res.json());

const fetchPut = (url, body) =>
  fetch(url, {
    method: "PUT",
    headers: headersWithContentType,
    body: JSON.stringify(body)
  }).then(res => res.json());

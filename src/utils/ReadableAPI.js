const api = 'http://localhost:3001';

// Generate a unique token for storing the posts data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

// Header for GET DELETE (no body so no need to specify the content-type)
const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// Header for POST and PUT
const headersWithContentType = {
  ...headers,
  'Content-Type': 'application/json'
}

// Public methods
export const getAllCategories = () => fetchGet(`${api}/categories`);

export const getPostsByCategory = category =>
  fetchGet(`${api}/${category}/posts`)
    .then(posts => posts.filter(post => !post || !post.deleted));

export const getAllPosts = () =>
  fetchGet(`${api}/posts`)
    .then(posts => posts.filter(post => !post.deleted));

export const addPost = post => fetchPost(`${api}/posts`, { post });

export const upVoteForPost = post => voteForPost(post, 'upVote');

export const downVoteForPost = post => voteForPost(post, 'downVote');

export const getPost = postId => fetchGet(`${api}/posts/${postId}`);

export const editPost = post =>
fetchPut(`${api}/posts/${post.id}`, {
  title: post.title,
  body: post.body
});

export const deletePost = post => fetchDelete (`${api}/posts/${post.id}`);

export const getComments = post => fetchGet(`${api}/posts/${post.id}/comments`);

export const addComment = (post, comment) =>
fetchPost(`${api}/comments`, {
  ...comment,
  parentId: post.id
});

export const getCommentDetails= comment => fetchGet(`${api}/comments/${comment.id}`);

export const upVoteForComment = comment => voteForComment(comment, 'upVote');

export const downVoteForComment = comment => voteForComment(comment, 'downVote');

export const editComment = comment =>
fetchPut(`${api}/comments/${comment.id}`, {
  timestamp: Date.now(),
  body: comment.body
});

export const deleteComment = comment => fetchDelete(`${api}/comments/${comment.id}`)

// Private methods
const voteForPost = (post, vote) => fetchPost(`${api}/posts/${post.id}`, { option: vote });

const voteForComment = (comment, vote) =>
  fetchPost(`${api}/comments/${comment.id}`, { option: vote });

const fetchGet = url => fetch(url, { headers }).then(res => res.json());

const fetchDelete = url =>
  fetch(url, {
    method: 'DELETE',
    headers
  }).then(res => res.json());

const fetchPost = (url, body) =>
  fetch(url, {
    method: 'POST',
    headers: headersWithContentType,
    body: JSON.stringify(body)
  }).then(res => res.json());

const fetchPut = (url, body) =>
  fetch(url, {
    method: 'PUT',
    headers: headersWithContentType,
    body: JSON.stringify(body)
  }).then(res => res.json());

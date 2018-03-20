const api = 'http://localhost:3001';

// Generate a unique token for storing the posts data on the backend server.
let token = localStorage.token;
if (!token) 
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

const headersWithContentType = {
  ...headers,
  'Content-Type': 'application/json'
}
export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json());

export const getPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(posts => posts.filter(post => !post.deleted));

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(posts => posts.filter(post => !post.deleted));
    
export const addPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: headersWithContentType,
    body: JSON.stringify({ post })
  }).then(res => res.json());

const voteForPost = (post, vote) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'POST',
    headers: headersWithContentType,
    body: JSON.stringify({ option: vote })
  }).then(res => res.json());

export const upVoteForPost = post =>
  voteForPost(post, 'upVote');

export const downVoteForPost = post =>
  voteForPost(post, 'downVote');

export const getPost = post => {
  fetch(`${api}/posts/${post.id}`)
    .then(res => res.json());
}

export const editPost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: headersWithContentType,
    body: JSON.stringify({ 
          title: post.title, 
          body: post.body 
        }
      )
  }).then(res => res.json());

export const deletePost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json());

export const getComments = post =>
  fetch(`${api}/posts/${post.id}/comments`)
    .then(res => res.json());

export const addComment = (post, comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: headersWithContentType,
    body: JSON.stringify({ 
      ...comment,
      parentId: post.id
    })
  }).then(res => res.json());

export const getCommentDetails= comment =>
  fetch(`${api}/comments/${comment.id}`)
    .then(res => res.json());

const voteForComment = (comment, vote) =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'POST',
    headers: headersWithContentType,
    body: JSON.stringify({ option: vote })
  }).then(res => res.json());

export const upVoteForComment = comment =>
  voteForComment(comment, 'upVote');

export const downVoteForComment = comment =>
  voteForComment(comment, 'downVote');

export const editComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: headersWithContentType,
    body: JSON.stringify({ 
      timestamp: Date.now(),
      body: comment.body
    })
  }).then(res => res.json());

export const deleteComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json())

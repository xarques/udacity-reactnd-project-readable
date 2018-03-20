const api = 'http://localhost:3001';

// Generate a unique token for storing the posts data on the backend server.
let token = localStorage.token;
if (!token) 
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json());

export const getPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json());



// function getByCategory(token, category) {
//   return new Promise((res) => {
//     let posts = getData(token)
//     let keys = Object.keys(posts)
//     let filtered_keys = keys.filter(key => posts[key].category === category && !posts[key].deleted)
//     res(filtered_keys.map(key => posts[key]))
//   })
// }
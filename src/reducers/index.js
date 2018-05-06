import { combineReducers } from "redux";
import * as posts from './posts'

console.log("POSTS", posts);

export default combineReducers({
  ...posts
});

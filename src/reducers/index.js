import { combineReducers } from "redux";
import * as posts from "./posts";
import * as categories from "./categories";
import * as comments from "./comments";

export default combineReducers({
  ...posts,
  ...categories,
  ...comments
});

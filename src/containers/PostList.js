import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostList from "../components/PostList";
import * as actionCreators from "../actions";

export const BY_DATE_ASC = "BY_DATE_ASC";
export const BY_DATE_DESC = "BY_DATE_DESC";
export const BY_SCORE_ASC = "BY_SCORE_ASC";
export const BY_SCORE_DESC = "BY_SCORE_DESC";

const getSortedPosts = (state, category) => {
  let filteredPosts =
    category === "all" || !category
      ? state.posts
      : state.posts.filter(post => post.category === category);

  if (filteredPosts) {
    switch (state.sort) {
      case BY_DATE_ASC:
        return filteredPosts.sort((a, b) => b.timestamp - a.timestamp);
      case BY_DATE_DESC:
        return filteredPosts.sort((a, b) => a.timestamp - b.timestamp);
      case BY_SCORE_ASC:
        return filteredPosts.sort((a, b) => b.voteScore - a.voteScore);
      case BY_SCORE_DESC:
        return filteredPosts.sort((a, b) => a.voteScore - b.voteScore);
      default:
        return filteredPosts;
    }
  }

  return filteredPosts;
};

const mapStateToProps = (state, props) => ({
  posts: getSortedPosts(state, props.match.params.category),
  categories: [{ name: "all", path: "" }, ...state.categories],
  category: props.match.params.category
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));

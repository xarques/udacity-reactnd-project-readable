import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostList from "../components/PostList";
import * as actionCreators from "../actions";

const mapStateToProps = (state, props) => ({
  posts: state.posts,
  categories: [{name: "all", path: ""}, ...state.categories],
  category: props.match.params.category
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostList)
);

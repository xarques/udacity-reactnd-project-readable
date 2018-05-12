import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import PostDetails from "../components/PostDetails";
import * as actionCreators from "../actions";

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

const mapStateToProps = (state, props) => ({
  posts: state.posts,
  comments: state.comments,
  postId: props.match.params.postId
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostDetails)
);

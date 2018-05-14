import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import EditPost from "../components/EditPost";
import * as actionCreators from "../actions";

const mapStateToProps = (state, props) => ({
  posts: state.posts,
  postId: props.match.params.postId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditPost)
);

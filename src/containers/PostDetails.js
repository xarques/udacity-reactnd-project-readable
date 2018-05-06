import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import PostDetails from "../components/PostDetails";
import * as actionCreators from "../actions";

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

const mapStateToProps = state => (
  {
    posts: state.posts
  }
);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostDetails)
);

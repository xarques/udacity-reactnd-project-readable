import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CreatePost from "../components/CreatePost";
import * as actionCreators from "../actions";

const mapStateToProps = (state, props) => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreatePost)
);

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SortMenu from "../components/SortMenu";
import * as actionCreators from "../actions";

const mapStateToProps = (state, props) => ({
  sort: state.sort
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SortMenu)
);

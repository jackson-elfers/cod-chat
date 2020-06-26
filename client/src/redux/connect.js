import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { notice } from "./actions";

function mapStateToProps(state) {
  return {
    globals: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      notice: bindActionCreators(notice, dispatch)
    }
  };
}

export default function(component) {
  return connect(mapStateToProps, mapDispatchToProps)(component);
}

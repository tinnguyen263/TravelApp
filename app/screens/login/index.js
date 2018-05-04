/* eslint-disable no-console */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LoginPage from "./login.component";
import { login } from "../../actions/authentication-actions";

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
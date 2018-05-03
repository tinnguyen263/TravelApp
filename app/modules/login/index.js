/* eslint-disable no-console */
import { connect } from "react-redux";
import LoginPage from "./login.component";
import { login } from "../../actions/authentication-actions";

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
    onSubmitLogin: (username, password) => dispatch(login(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
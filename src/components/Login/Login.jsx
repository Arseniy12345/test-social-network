import React from "react";
import { reduxForm } from "redux-form";
import {createField, InputForm} from "../Common/FormsControl/InputForm";
import { required, maxLength } from "../../utilities/validators/validators";
import { login } from "./../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "../Common/FormsControl/InputForm.module.css";

let maxLength30 = maxLength(30);

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("email", InputForm, "text", "email", [required, maxLength30], null)}
      {createField("password", InputForm, "text", "password", [required, maxLength30], null)}
      {createField("rememberMe", InputForm, "checkbox", null, [], "Remember Me")}
      {error && (
        <div className={styles.errorFromServer}>{error}</div>
      )}
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

let LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  let onSubmit = (data) => {
    props.login(data.email, data.password, data.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);

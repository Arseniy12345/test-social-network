import React from "react";
import { reduxForm } from "redux-form";
import {createField, InputForm} from "../Common/FormsControl/InputForm";
import { required, maxLength } from "../../utilities/validators/validators";
import { login } from "./../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "../Common/FormsControl/InputForm.module.css";
import stylesTwo from "./Login.module.css"

let maxLength30 = maxLength(30);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("email", InputForm, "text", "email", [required, maxLength30], null)}
      {createField("password", InputForm, "text", "password", [required, maxLength30], null)}
      {createField("rememberMe", InputForm, "checkbox", null, [], "Запомнить меня")}
      {captchaUrl && <img src={captchaUrl} className={stylesTwo.captchaPhoto}/>}
      {captchaUrl && createField("captcha", InputForm, "text", "Введите буквы", [required], null)}
      {error && (
        <div className={styles.errorFromServer}>{error}</div>
      )}
      <div>
        <button className={stylesTwo.submitButton}>Войти</button>
      </div>
    </form>
  );
};

let LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  let onSubmit = (data) => {
    props.login(data.email, data.password, data.rememberMe, data.captcha);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={stylesTwo.mainContainer}>
      <h1>Авторизация</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, { login })(Login);

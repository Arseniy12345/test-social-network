import React from "react";
import styles from "./InputForm.module.css";
import {Field} from "redux-form"

export const InputForm = ({ input, placeholder, type, meta: {touched, error}, text, ...props }) => {
  let hasError = touched && error;
  return (
    <div className={styles.inputContainer}>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={type === "checkbox" ? "" : `${styles.inputNoError} ${hasError ? styles.inputError : ""}`}
      /> {text}
      {hasError && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export const createField = (name, component, type, placeholder, validate, text) => {
  return (
    <div>
      <Field
        name={name}
        component={component}
        type={type}
        placeholder={placeholder}
        validate={[...validate]}
        text={text}
      />
    </div>
  );
};

import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { reduxForm } from "redux-form";
import { required, maxLength } from "../../utilities/validators/validators";
import { createField, InputForm } from "../Common/FormsControl/InputForm";

let maxLength30 = maxLength(30);

const MessageForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(
        "message",
        InputForm,
        "text",
        "message",
        [required, maxLength30],
        null
      )}
      <button className={styles.submitButton}>Отправить</button>
    </form>
  );
};

let MessageFormRedux = reduxForm({ form: "newMessageBody" })(MessageForm);

const Dialogs = ({ dialogs, messages, ...props }) => {
  const addMessage = (data) => {
    props.addMessage(data.message);
  };

  return (
    <div className={styles.dialogs}>
      <div>
        {dialogs.map((dialog) => (
          <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />
        ))}
      </div>
      <div className={styles.messages}>
        {messages.map((message) => (
          <Message key={message.id} id={message.id} text={message.text} />
        ))}
      </div>
      <div className={styles.formMessage}>
        <MessageFormRedux onSubmit={addMessage} />
      </div>
    </div>
  );
};

export default Dialogs;

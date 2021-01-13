import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { reduxForm } from "redux-form";
import { required, maxLength } from "../../utilities/validators/validators";
import {createField, InputForm} from "../Common/FormsControl/InputForm";

let maxLength30 = maxLength(30)

const MessageForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("message", InputForm, "text", "message", [required, maxLength30], null)}
      <button>Send</button>
    </form>
  );
};

let MessageFormRedux = reduxForm({ form: "newMessageBody" })(MessageForm);

const Dialogs = ({dialogs, messages, ...props}) => {
  let dialogsElement = dialogs.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ));
  let messageElement = messages.map((messageElem) => (
    <Message text={messageElem.text} />
  ));

  const addMessage = (data) => {
    props.addMessage(data.message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElement}</div>
      <div className={s.messages}>
        {messageElement}
        <MessageFormRedux onSubmit={addMessage} />
      </div>
    </div>
  );
};

export default Dialogs;

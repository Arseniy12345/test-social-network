import React from "react";
import Dialogs from "./Dialogs";
import { addMessage } from "../../redux/message-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogsData,
    messages: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const DialogsContainer = compose(
  connect(mapStateToProps, {addMessage}),
  withAuthRedirect
)(Dialogs);

export default DialogsContainer;

import React from "react";
import { reduxForm } from "redux-form";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  required,
  maxLength,
} from "./../../../utilities/validators/validators";
import { createField, InputForm } from "../../Common/FormsControl/InputForm";

let maxLength15 = maxLength(15);

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(
        "postText",
        InputForm,
        "text",
        "Введите текст",
        [required, maxLength15],
        null
      )}
      <button className={styles.submitButton}>Add</button>
    </form>
  );
};

let AddPostFormRedux = reduxForm({ form: "post" })(AddPostForm);

const MyPosts = (props) => {
  const addPost = (data) => {
    props.addPost(data.postText);
  };
  return (
    <div className={styles.myPosts}>
      <span className={styles.descriptionText}><b>Стена</b></span>
      <div>
        <AddPostFormRedux onSubmit={addPost} />
      </div>
      {props.posts.map((p) => (
        <Post key={p.id} message={p.message} likeCount={p.likeCount} profileData={props.profileData}/>
      ))}
    </div>
  );
};

export default MyPosts;

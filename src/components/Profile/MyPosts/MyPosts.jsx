import React from "react";
import { reduxForm } from "redux-form";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {required, maxLength} from "./../../../utilities/validators/validators";
import {createField, InputForm} from "../../Common/FormsControl/InputForm";

let maxLength15 = maxLength(15);

const AddPostForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("postText", InputForm, "text", "post", [required, maxLength15], null)}
      <button>Add</button>
    </form>
  );
};

let AddPostFormRedux = reduxForm({ form: "post" })(AddPostForm);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  const addPost = (data) => {
    props.addPost(data.postText);
  };
  return (
    <div className={styles.myPosts}>
      <h3>My Posts</h3>
      <div>
        <AddPostFormRedux onSubmit={addPost} />
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;

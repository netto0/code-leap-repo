import React from "react";
import styles from "../../SignUp/index.module.css";
import ButtonModel from "../../../components/ButtonModel";
import InputModel from "../../../components/InputModel";
import { useState } from "react";

import { createNewPost } from "../../../actions/newPostService";

import { useSelector, useDispatch } from "react-redux";
import { setNewPost } from "../../../redux/features/newPost/newPostSlice";

export default function WhatsYourMind({ getPosts }) {
  const newPostInfos = useSelector((state) => state.newPost.value);
  const name = useSelector((state) => state.name.value);
  const dispatch = useDispatch();

  const [infos, setInfos] = useState({ title: "", content: "" });
  const infosFilled = infos.title !== "" && infos.content !== "";

  const handleSubmit = async (e, name, title, content) => {
    e.preventDefault()
    const response = await createNewPost(name, title, content);
    console.log("New Post");
    if (response) {
      getPosts();
      setInfos({ title: "", content: "" });
    }
    console.log("End Post");
  };

  return (
    <div className={styles.container} style={{ width: "100%" }}>
      <div className={styles.content}>
        <div className={styles.titleArea}>
          <span className={styles.title}>What's on your mind?</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputArea}>
            <InputModel
              label="Title"
              name="title"
              placeholder="Hello world"
              onChange={(e) => setInfos({ ...infos, title: e.target.value })}
              value={infos.title}
            />
            <InputModel
              label="Content"
              name="content"
              placeholder="Content here"
              textarea={true}
              onChange={(e) => setInfos({ ...infos, content: e.target.value })}
              value={infos.content}
            />
          </div>
          <div className={styles.buttonField}>
            <ButtonModel
              label="Create"
              disabled={infosFilled ? false : true}
              color="blue"
              type="submit"
              onClick={(e) => handleSubmit(e, name, infos.title, infos.content)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import styles from "../SignUp/index.module.css";
import ButtonModel from "../../components/ButtonModel";
import InputModel from "../../components/InputModel";
import { setModal } from "../../redux/features/modal/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../../actions/editPostService";
import { setPostInfos } from "../../redux/features/postInfos/postInfosSlice";
import { getAllPosts } from "../../actions/getPostsService";
import { setAllPosts } from "../../redux/features/allPosts/allPostsSlice";

export default function EditScreen() {
  const postInfos = useSelector((state) => state.postInfos.value);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    dispatch(setModal(""));
    await editPost(postInfos.id, postInfos.title, postInfos.content);
    const response = await getAllPosts();
    if (response) {
      dispatch(setAllPosts(response.results));
    }
  };

  return (
    <div className={styles.container} style={{ width: 660 }}>
      <div className={styles.content}>
        <div className={styles.titleArea}>
          <span className={styles.title}>Edit item</span>
        </div>
        <div className={styles.inputArea}>
          <InputModel label="Title" name="title" placeholder="Hello world" onChange={(e) => dispatch(setPostInfos({...postInfos, title: e.target.value }))}/>
          <InputModel
            label="Content"
            name="content"
            placeholder="Content here"
            textarea={true}
            onChange={(e) => dispatch(setPostInfos({...postInfos, content: e.target.value }))}
          />
        </div>
        <div className={styles.buttonField}>
          <ButtonModel
            label="Cancel"
            color="white"
            onClick={() => {
              dispatch(setModal(""));
              dispatch(setPostInfos({...postInfos, id:"", title:"", content:""}));
            }}
          />
          <ButtonModel
            label="Save"
            color="green"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

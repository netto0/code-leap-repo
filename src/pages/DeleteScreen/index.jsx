import React from "react";
import styles from "./index.module.css";
import ButtonModel from "../../components/ButtonModel";
import { setModal } from "../../redux/features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../actions/deletePostService";
import { setPostInfos } from "../../redux/features/postInfos/postInfosSlice";
import { getAllPosts } from "../../actions/getPostsService";

export default function DeleteScreen() {

  const postInfos = useSelector((state) => state.postInfos.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleArea} >
          <span className={styles.title} >
            Are you sure you want to delete this item?
            <br />
            {/* ID: {postInfos.id} */}
          </span>
        </div>
        <div className={styles.buttonField}>
          <ButtonModel label="Cancel" color="white" onClick={() => {
            dispatch(setModal(""))
            dispatch(setPostInfos({...postInfos, id:""}))
          }}/>
          <ButtonModel label="Delete" color="red" onClick={() => {
            deletePost(postInfos.id)
            dispatch(setModal(""))
          }}/>
        </div>
      </div>
    </div>
  );
}


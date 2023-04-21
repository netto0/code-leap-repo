import React from "react";
import styles from "./index.module.css";
import ButtonModel from "../../components/ButtonModel";
import { setModal } from "../../redux/features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../actions/deletePostService";
import { setPostInfos } from "../../redux/features/postInfos/postInfosSlice";
import { getAllPosts } from "../../actions/getPostsService";
import { setAllPosts } from "../../redux/features/allPosts/allPostsSlice";

export default function DeleteScreen() {

  const postInfos = useSelector((state) => state.postInfos.value)
  const dispatch = useDispatch()
  
  const handleSubmit = async () => {
    dispatch(setModal(""))
    await deletePost(postInfos.id)
    const response = await getAllPosts();
    if (response) {
      dispatch(setAllPosts(response.results))
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleArea} >
          <span className={styles.title} >
            Are you sure you want to delete this item?
            <br />
          </span>
        </div>
        <div className={styles.buttonField}>
          <ButtonModel label="Cancel" color="white" onClick={() => {
            dispatch(setModal(""))
            dispatch(setPostInfos({...postInfos, id:"", title:"", content:""}))
          }}/>
          <ButtonModel label="Delete" color="red" onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  );
}


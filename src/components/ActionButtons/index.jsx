import React from "react";
import styles from "./index.module.css";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { setModal } from "../../redux/features/modal/modalSlice";
import { useDispatch } from "react-redux";

import { getAllPosts } from "../../actions/getPostsService";

export default function ActionButons({postID}) {
  
  const dispatch = useDispatch()
  
  return (
    <div className={styles.actionIcons}>
      <span onClick={() => dispatch(setModal({modal: "delete", id:postID}))}>
        <FaTrashAlt />
      </span>
      <span onClick={() => dispatch(setModal({modal: "edit", id:postID}))}>
        <FaRegEdit />
      </span>
    </div>
  );
}

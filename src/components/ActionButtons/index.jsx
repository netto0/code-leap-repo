import React from "react";
import styles from "./index.module.css";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { setModal } from "../../redux/features/modal/modalSlice";
import { setPostInfos } from "../../redux/features/postInfos/postInfosSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ActionButons({ postID, postTitle, postContent }) {
  const postInfos = useSelector((state) => state.postInfos.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.actionIcons}>
      <span
        onClick={() => {
          dispatch(setModal("delete"));
          dispatch(setPostInfos({...postInfos, id: postID }));
        }}
        >
        <FaTrashAlt />
      </span>
      <span onClick={() => {
        dispatch(setModal("edit"));
        dispatch(setPostInfos({...postInfos, id: postID }));
        }}>
        <FaRegEdit />
      </span>
    </div>
  );
}

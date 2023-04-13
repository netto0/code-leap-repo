import React from "react";
import styles from "./PostContainer.module.css";
import {FaTrashAlt, FaRegEdit} from 'react-icons/fa'


export default function PostContainer({postTitle, postContent, userName, timeCreated}) {
  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        <span className={styles.title}>{postTitle}</span>
        <div className={styles.actionIcons}>
            <FaTrashAlt />
            <FaRegEdit />
        </div>
      </div>
      <div className={styles.postInfos}>
        <span className={styles.userName}>{userName}</span>
        <span className={styles.minutesAgo}>25 minutes ago</span>
      </div>
      <div className={styles.contentArea}>
        {postContent}
      </div>
    </div>
  );
}

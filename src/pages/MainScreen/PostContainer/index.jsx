import React from "react";
import styles from "./index.module.css";

import { useSelector } from "react-redux";
import { formatDistance } from "date-fns";
import ActionButons from "../../../components/ActionButtons";

export default function PostContainer({
  postTitle,
  postContent,
  userName,
  timeCreated,
  postID,
}) {
  const name = useSelector((state) => state.name.value);
  const today = new Date();
  const postCreationDate = new Date(timeCreated);
  const datesDistance = formatDistance(postCreationDate, today, {
    addSuffix: true,
  });

  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        <span className={styles.title}>{postTitle}</span>
        
        {userName === name ? (
          <ActionButons postID={postID}/>
        ) : undefined}
      </div>
      <div className={styles.postInfos}>
        <span className={styles.userName}>@{userName}</span>
        <span className={styles.minutesAgo}>{datesDistance}</span>
      </div>
      <div className={styles.contentArea}>{postContent}</div>
    </div>
  );
}

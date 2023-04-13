import React from "react";
import styles from "./MainScreen.module.css";
import WhatsYourMind from "./WhatsYourMind/WhatsYourMind";
import PostContainer from "./PostContainer/PostContainer";

export default function MainScreen() {
  
  const content = "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
  
  return (
    <div className={styles.externalContainer}>
      <div className={styles.internalContainer}>
        <div className={styles.titleArea}>
          <span className={styles.title}>CodeLeap NetWork</span>
        </div>
        <div className={styles.contentArea}>
            <WhatsYourMind />
            <PostContainer 
              postTitle="My First Post at CodeLeap Network!" 
              postContent={content}
              userName="@Victor"
              timeCreated="2023-04-13T02:04:18.301897Z"
              />
            <PostContainer 
              postTitle="My Second Post at CodeLeap Network!" 
              postContent={content}
              userName="@Vini"
              timeCreated="2023-04-13T02:04:18.301897Z"
              />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "../../SignUp/SignUp.module.css";
import ButtonModel from "../../../components/ButtonModel/ButtonModel";
import InputModel from "../../../components/InputModel/InputModel";

export default function WhatsYourMind() {
  return (
    <div className={styles.container} style={{width: "100%"}}>
      <div className={styles.content}>
        <div className={styles.titleArea}>
          <span className={styles.title}>What's on your mind?</span>
        </div>
        <div className={styles.inputArea}>
        <InputModel 
            label="Title"
            name="title" 
            placeholder="Hello world" 
          />
          <InputModel
            label="Content"
            name="content"
            placeholder="Content here"
            textarea={true}
          />
        </div>
        <div className={styles.buttonField}>
          <ButtonModel label="Create" color="blue" />
        </div>
      </div>
    </div>
  );
}

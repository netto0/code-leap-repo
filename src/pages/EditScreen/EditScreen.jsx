import React from "react";
import styles from "../SignUp/SignUp.module.css";
import ButtonModel from "../../components/ButtonModel/ButtonModel";
import InputModel from "../../components/InputModel/InputModel";

export default function EditScreen() {
  return (
    <div className={styles.container} style={{width: 660}}>
      <div className={styles.content}>
        <div className={styles.titleArea}>
          <span className={styles.title}>Edit item</span>
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
          <ButtonModel label="Cancel" color="white" />
          <ButtonModel label="Save" color="green" />
        </div>
      </div>
    </div>
  );
}

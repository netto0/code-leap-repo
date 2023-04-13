import React from "react";
import styles from "../SignUp/SignUp.module.css";
import ButtonModel from "../../components/ButtonModel/ButtonModel";

export default function DeleteScreen() {
  return (
    <div className={styles.container} style={{width: 660}}>
      <div className={styles.content}>
        <div className={styles.titleArea} >
          <span className={styles.title} >
            Are you sure you want to delete this item?
          </span>
        </div>
        <div className={styles.buttonField}>
          <ButtonModel label="Cancel" color="white" />
          <ButtonModel label="Delete" color="red" />
        </div>
      </div>
    </div>
  );
}

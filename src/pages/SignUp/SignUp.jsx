import React from "react";
import styles from "./SignUp.module.css";
import ButtonModel from "../../components/ButtonModel/ButtonModel";
import InputModel from "../../components/InputModel/InputModel";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>Welcome to CodeLeap network!</span>
        <InputModel
          placeholder="John Doe"
          label="Please enter your username"
          name="userName"
        />
        <div className={styles.buttonField}>
          <ButtonModel label="ENTER" color="blue" />
        </div>
      </div>
    </div>
  );
}

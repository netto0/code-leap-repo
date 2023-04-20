import React, { useState } from "react";
import styles from "./index.module.css";
import ButtonModel from "../../components/ButtonModel";
import InputModel from "../../components/InputModel";

import { useSelector, useDispatch } from 'react-redux'
import { setName } from "../../redux/features/name/nameSlice";


export default function SignUp() {

  const name = useSelector((state) => state.name.value)
  const dispatch = useDispatch()
  const [fieldName, setFieldName] = useState("")

  const handleSubmit = () => {
    dispatch(setName(fieldName))
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleArea}>
          <span className={styles.title}>Welcome to CodeLeap network!</span>
        </div>
        <div className={styles.inputArea}>
          <InputModel
            placeholder="John Doe"
            label="Please enter your username"
            name="userName"
            onChange={(e) => setFieldName(e.target.value)}
            value={fieldName}
          />
        </div>
        <div className={styles.buttonField}>
          <ButtonModel label="ENTER" color="blue" onClick={() => handleSubmit()}/>
          {/* {name}
          -|-
          {fieldName} */}
        </div>
      </div>
    </div>
  );
}

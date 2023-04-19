import React from "react";
import styles from "./index.module.css";
import ButtonModel from "../../components/ButtonModel";
import { setModal } from "../../redux/features/modal/modalSlice";
import { useDispatch } from "react-redux";

export default function DeleteScreen() {
  
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleArea} >
          <span className={styles.title} >
            Are you sure you want to delete this item?
          </span>
        </div>
        <div className={styles.buttonField}>
          <ButtonModel label="Cancel" color="white" onClick={() => dispatch(setModal({modal: "", id:""}))}/>
          <ButtonModel label="Delete" color="red" />
        </div>
      </div>
    </div>
  );
}


import React from "react";
import styles from "./index.module.css";
import { useEffect } from "react";

const Modal = ({ isOpen, children }) => {

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} >
      <div className={styles.modalContent} >
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

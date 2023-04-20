import React from "react";
import styles from "./index.module.css";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  
  // const disableScroll = () => {
  //   document.body.style.overflow = "hidden";
  // };

  // const enableScroll = () => {
  //   document.body.style.overflow = "auto";
  // };

  // useEffect(() => {
  //   disableScroll();
  //   return () => {
  //     enableScroll();
  //   };
  // }, []);
  
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} >
      <div className={styles.modalContent} >
        {/* <button className={styles.modalClose} onClick={onClose}>
          Fechar
        </button> */}
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

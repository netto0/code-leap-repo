import React from "react";
import styles from "./ButtonModel.module.css"

export default function ButtonModel({label, color}) {
    return (
        <button className={`${styles.button} ${styles[color]}`}>
            {label}
        </button>
    )
}
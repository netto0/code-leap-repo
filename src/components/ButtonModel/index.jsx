import React from "react";
import styles from "./index.module.css"

export default function ButtonModel({label, color, active, ...rest}) {
    return (
        <button className={`${styles.button} ${styles[color]}`} {...rest}>
            {label}
        </button>
    )
}
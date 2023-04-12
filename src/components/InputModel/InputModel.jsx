import styles from "./InputModel.module.css";

export default function InputModel({ label, placeholder, name, type }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

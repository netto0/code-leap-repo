import styles from "./InputModel.module.css";

export default function InputModel({ label, placeholder, name, textarea }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {!textarea ? (
        <input
          className={styles.input}
          name={name}
          placeholder={placeholder}
        />
      ) : (
        <textarea 
          className={styles.textarea}
          name={name}
          rows='4'
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

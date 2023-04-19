import styles from "./index.module.css";

export default function InputModel({ label, placeholder, name, textarea, ...rest }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {!textarea ? (
        <input
          className={styles.input}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      ) : (
        <textarea 
          className={styles.textarea}
          name={name}
          rows='4'
          placeholder={placeholder}
          {...rest}
        />
      )}
    </div>
  );
}

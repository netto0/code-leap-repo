import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPostInfos } from "../../redux/features/postInfos/postInfosSlice";

export default function InputModel({
  label,
  placeholder,
  name,
  textarea,
  ...rest
}) {
  const postInfos = useSelector((state) => state.postInfos.value);
  const dispatch = useDispatch();

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
          rows="4"
          placeholder={placeholder}
          {...rest}
        />
      )}
    </div>
  );
}

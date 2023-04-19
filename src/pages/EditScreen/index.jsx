import React from "react";
import styles from "../SignUp/index.module.css";
import ButtonModel from "../../components/ButtonModel";
import InputModel from "../../components/InputModel";
import { setModal } from "../../redux/features/modal/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../../actions/editPostService";


export default function EditScreen() {
  const id = useSelector((state) => state.modal.value.id)
  const dispatch = useDispatch()

  const changePost = async (id,title,content) => {
    const response = await editPost(id,title,content)
    if (response) {
      console.log("foi")
    }
  }

  return (
    <div className={styles.container} style={{width: 660}}>
      <div className={styles.content}>
        <div className={styles.titleArea}>
          <span className={styles.title}>Edit item</span>
        </div>
        <div className={styles.inputArea}>
          <InputModel 
            label="Title"
            name="title" 
            placeholder="Hello world" 
          />
          <InputModel
            label="Content"
            name="content"
            placeholder="Content here"
            textarea={true}
          />
        </div>
        <div className={styles.buttonField}>
          <ButtonModel label="Cancel" color="white" onClick={() => dispatch(setModal({modal: "", id:""}))}/>
          <ButtonModel label="Save" color="green" onClick={() => changePost(id,"testeAlterado","COnteudoooooooaaaaa")}/>
        </div>
      </div>
    </div>
  );
}

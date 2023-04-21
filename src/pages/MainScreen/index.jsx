import React from "react";
import styles from "./index.module.css";
import WhatsYourMind from "./WhatsYourMind";
import PostContainer from "./PostContainer";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/Modal";
import { getAllPosts } from "../../actions/getPostsService";

import DeleteScreen from "../DeleteScreen";
import EditScreen from "../EditScreen";
import { setAllPosts } from "../../redux/features/allPosts/allPostsSlice";

export default function MainScreen() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name.value);
  const modal = useSelector((state) => state.modal.value);
  const posts = useSelector((state) => state.allPosts.value);
  const postInfos = useSelector((state) => state.postInfos.value);

  const getPosts = async () => {
    const response = await getAllPosts();
    if (response) {
      dispatch(setAllPosts(response.results));
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Modal isOpen={modal} onClose={() => console.log("fechar")}>
        {modal === "delete" ? <DeleteScreen /> : <EditScreen />}
      </Modal>

      <div className={styles.externalContainer}>
        <div className={styles.internalContainer}>
          <div className={styles.titleArea}>
            <span className={styles.title}>CodeLeap NetWork</span>
            <span className={styles.userName}>@{name}</span>
          </div>
          <div className={styles.contentArea}>
            <WhatsYourMind getPosts={getPosts} />

            {posts.map((post) => (
              <PostContainer
                userName={post.username}
                postTitle={post.title}
                postContent={post.content}
                timeCreated={post.created_datetime}
                key={post.id}
                postID={post.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

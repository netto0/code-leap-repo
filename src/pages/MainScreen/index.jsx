import React from "react";
import styles from "./index.module.css";
import WhatsYourMind from "./WhatsYourMind";
import PostContainer from "./PostContainer";
import { getAllPosts } from "../../actions/getPostsService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal";

import DeleteScreen from "../DeleteScreen";
import EditScreen from "../EditScreen";

export default function MainScreen() {
  const name = useSelector((state) => state.name.value);
  const modal = useSelector((state) => state.modal.value);
  const [posts, setPosts] = useState([]);

  const getPostsTeste = async () => {
    const response = await getAllPosts();
    if (response) {
      setPosts(response.results);
    }
  };

  useEffect(() => {
    getPostsTeste();
  }, []);

  return (
    <>
        <Modal isOpen={modal.modal} onClose={() => console.log("fechar")}>
          {modal.modal === "delete" ? <DeleteScreen /> : <EditScreen />}
        </Modal>

      <div className={styles.externalContainer}>
        <div className={styles.internalContainer}>
          <div className={styles.titleArea}>
            <span className={styles.title}>CodeLeap NetWork</span>
            modal:{modal.modal} id: {modal.id}
            <span className={styles.userName}>@{name}</span>
          </div>
          <div className={styles.contentArea}>
            <WhatsYourMind getPosts={getPostsTeste} />

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
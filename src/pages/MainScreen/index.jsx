import React from "react";
import styles from "./index.module.css";
import WhatsYourMind from "./WhatsYourMind";
import PostContainer from "./PostContainer";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/Modal";
import { getAllPosts } from "../../actions/getPostsService";
import { IoMdExit } from "react-icons/io";

import DeleteScreen from "../DeleteScreen";
import EditScreen from "../EditScreen";
import { setAllPosts } from "../../redux/features/allPosts/allPostsSlice";

export default function MainScreen() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.value);
  const posts = useSelector((state) => state.allPosts.value);
  const loginName = localStorage.getItem("loginName");
  const [responseData, setResponseData] = useState();

  const getPosts = async () => {
    const response = await getAllPosts();
    if (response) {
      dispatch(setAllPosts(response.results));
      setResponseData(response);
    }
  };

  useEffect(() => {
    getPosts()
  }, [])

  const infiniteScroll = async (url) => {
    if (url) {
      const response = await getAllPosts(url);
      if (response) {
        dispatch(setAllPosts([...posts, ...response.results]));
        setResponseData(response)
        return;
      }
    }
  }

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    infiniteScroll(responseData?.next);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [responseData]);

  const logOut = () => {
    localStorage.setItem("loginName", "");
    document.location.reload();
  };

  return (
    <>
      <Modal isOpen={modal} onClose={() => console.log("fechar")}>
        {modal === "delete" ? <DeleteScreen /> : <EditScreen />}
      </Modal>
      <div className={styles.container}>
        <div className={styles.titleArea}>
          <span className={styles.title}>CodeLeap NetWork</span>
          <div className={styles.userOptions}>
            <span className={styles.userName}>@{loginName}</span>
            <span className={styles.exitIcon} onClick={logOut}>
              <IoMdExit />
            </span>
          </div>
        </div>
        <div className={styles.contentArea}>
          <WhatsYourMind getPosts={getPosts} />
          {posts.map((post, index) => (
            <PostContainer
              userName={post.username}
              postTitle={post.title}
              postContent={post.content}
              timeCreated={post.created_datetime}
              key={index}
              postID={post.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

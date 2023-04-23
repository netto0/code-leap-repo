import React, { useCallback } from "react";
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
  const name = useSelector((state) => state.name.value);
  const modal = useSelector((state) => state.modal.value);
  const posts = useSelector((state) => state.allPosts.value);
  const postInfos = useSelector((state) => state.postInfos.value);
  const loginName = localStorage.getItem("loginName");

  const [data, setData] = useState("");

  const getPosts = async () => {
    const response = await getAllPosts();
    if (response) {
      setData(response.next);
      dispatch(setAllPosts(response.results));
    }
  };
  // ===================================
  
  useEffect(() => {
    paginatedRequest();
    // console.log(data)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
      )
      return;
      paginatedRequest();
    };
    
    // ===================================
    const logOut = () => {
      localStorage.setItem("loginName", "");
      document.location.reload();
    };
    
    const paginatedRequest = useCallback(async () => {
      const response = await getAllPosts(data);
      console.log(response.next)
    if (response) {
      setData(response.next);
      dispatch(setAllPosts(posts.concat(response.results)));
    }
  },[])

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
          {data?.previous && (
            <button onClick={() => paginatedRequest(data.previous)}>
              Previous
            </button>
          )}

          {data && (
            <button onClick={() => paginatedRequest(data.next)}>Next</button>
          )}
          {data && JSON.stringify(data)}
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

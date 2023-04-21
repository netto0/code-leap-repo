import { requestAPI } from "./api";
import { getAllPosts } from "../actions/getPostsService";
import { setAllPosts } from "../redux/features/allPosts/allPostsSlice";

const getPosts = async () => {
    const response = await getAllPosts();
    if (response) {
      setAllPosts(response.results)
    }  
  };

export const deletePost = async (id) => {
  const response = await requestAPI("DELETE", `careers/${id}/`);
  return response;
};

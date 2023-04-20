import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../../../actions/getPostsService";

const getPosts = async () => {
    const response = await getAllPosts();
    if (response) {
      return(response.results)
    }
  };


export const allPostsSlice = createSlice({
    name: 'allPost',
    initialState: {
      value: []
    },
    reducers: {
      setAllPosts: (state) => {
        state.value = getPosts()
      },
    },
  })
  
  export const { setAllPosts } = allPostsSlice.actions
  
  export default allPostsSlice.reducer
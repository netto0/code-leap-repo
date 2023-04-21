import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../../../actions/getPostsService";

export const allPostsSlice = createSlice({
    name: 'allPosts',
    initialState: {
      value: []
    },
    reducers: {
      setAllPosts: (state, action) => {
        state.value = action.payload
      },
    },
  })
  
  export const { setAllPosts } = allPostsSlice.actions
  
  export default allPostsSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const newPostSlice = createSlice({
    name: 'newPost',
    initialState: {
      value: {
        title:"",
        content:""
    },
    },
    reducers: {
      setNewPost: (state, action) => {
        state.value = action.payload
      },
    },
  })
  
  export const { setNewPost } = newPostSlice.actions
  
  export default newPostSlice.reducer
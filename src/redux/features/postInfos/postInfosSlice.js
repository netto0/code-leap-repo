import { createSlice } from "@reduxjs/toolkit";

export const postInfosSlice = createSlice({
    name: 'postInfos',
    initialState: {
      value: {id:"", title:"", content:""},
    },
    reducers: {
      setPostInfos: (state, action) => {
        state.value = action.payload
      },
    },
  })
  
  export const { setPostInfos } = postInfosSlice.actions
  
  export default postInfosSlice.reducer
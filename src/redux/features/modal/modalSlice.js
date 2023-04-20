import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
      value: ""
    },
    reducers: {
      setModal: (state, action) => {
        state.value = action.payload
      },
    },
  })
  
  export const { setModal } = modalSlice.actions
  
  export default modalSlice.reducer
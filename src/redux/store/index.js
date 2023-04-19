import { configureStore } from '@reduxjs/toolkit'

import nameReducer from '../features/name/nameSlice'
import modalReducer from '../features/modal/modalSlice'
import newPostReducer from '../features/newPost/newPostSlice'

export default configureStore({
  reducer: {
    name: nameReducer,
    modal: modalReducer,
    newPost: newPostReducer,
  },
})
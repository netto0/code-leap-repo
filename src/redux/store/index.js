import { configureStore } from '@reduxjs/toolkit'

import nameReducer from '../features/name/nameSlice'
import modalReducer from '../features/modal/modalSlice'
import newPostReducer from '../features/newPost/newPostSlice'
import postInfosReducer from '../features/postInfos/postInfosSlice'
import allPostsReducer from '../features/allPosts/allPostsSlice'

export default configureStore({
  reducer: {
    name: nameReducer,
    modal: modalReducer,
    newPost: newPostReducer,
    postInfos:postInfosReducer,
    allPosts: allPostsReducer,
  },
})